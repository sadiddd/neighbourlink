const express = require('express')
const router = express.Router()
const requireAuth = require('../middleware/requireAuth'); 
const requireCommunityMembership = require('../middleware/requireCommunityMembership')

const { createAnnouncement, getAnnouncements } = require('../controllers/announcementController')

router.use(requireAuth) //Protect all workout API routes (middleware)

router.get('/:communityID', requireCommunityMembership, getAnnouncements) // get all announcements
router.post('/:communityID', requireCommunityMembership, createAnnouncement) //make a new announcement
router.post('/', createAnnouncement)

module.exports = router

