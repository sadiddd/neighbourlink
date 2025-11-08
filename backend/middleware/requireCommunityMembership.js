const Community = require('../models/communityModel')

const requireCommunityMembership = async (req, res, next) => {
    try {
        const { communityID } = req.body
        const userID = req.user._id

        const community = await Community.findById(communityID);
        if (!community) {
            return res.status(401).json({error: 'Community not found'})
        }

        if (!community.members.includes(userID)) {
            return res.status(403).json({error: 'You must be a member of the community'})
        }

        req.community = community
        next()
    } catch (e) {
        console.error(e)
        res.status(500).json({error: 'An error occurred'})
    }
}

module.exports = requireCommunityMembership