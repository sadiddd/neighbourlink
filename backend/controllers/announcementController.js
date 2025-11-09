const Community = require('../models/communityModel')

// Create announcement
const createAnnouncement = async (req, res) => {
  try {
    const userId = req.user._id
    // allow community id to come from body or the URL param (communityID)
    const communityId = req.body.communityId || req.params.communityID || req.params.communityId
    const { title, message } = req.body

    if (!communityId || !title || !message) {
      return res.status(400).json({ error: "Missing fields" })
    }

    const community = await Community.findById(communityId)
    if (!community) {
      return res.status(404).json({ error: "Community not found" })
    }

    // Push announcement
    community.announcements.push({
      title,
      message,
      author: userId,
      createdAt: new Date()
    })

    await community.save()

    res.status(200).json({ success: true, community })
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Server error" })
  }
}


// Get announcements for a community
const getAnnouncements = async (req, res) => {
  try {
    // support param name communityID or communityId
    const communityId = req.params.communityID || req.params.communityId || req.body.communityId

    const community = await Community.findById(communityId).populate(
      'announcements.author',
      'email'
    )

    if (!community) {
      return res.status(404).json({ error: "Community not found" })
    }

    res.status(200).json(community.announcements)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Server error" })
  }
}

module.exports = { createAnnouncement, getAnnouncements }