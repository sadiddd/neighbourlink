const Community = require('../models/communityModel')
const User = require('../models/userModel')

// Join a community by code
const joinCommunity = async (req, res) => {
  try {
    const userId = req.user._id;        // Comes from requireAuth middleware
    const { code } = req.body;          // Community code from client

    // Find community by code
    const community = await Community.findOne({ code });
    if (!community) {
      return res.status(404).json({ message: 'Community not found' });
    }

    // Check if user is already a member
    if (community.members.includes(userId)) {
      return res.status(400).json({ message: 'Already a member' });
    }

    // Add user to community
    community.members.push(userId);
    await community.save();

    // Optional: Add community reference to user document
    await User.findByIdAndUpdate(userId, { $addToSet: { communities: community._id } });

    res.status(200).json({ message: `Joined community ${community.name}`, communityId: community._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { joinCommunity };