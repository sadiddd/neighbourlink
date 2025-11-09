const express = require('express')

const router = express.Router();
const { joinCommunity } = require('../controllers/communityController');
const requireAuth = require('../middleware/requireAuth'); 

router.use(requireAuth) //Protect all API routes (middleware)

// POST /api/community/join
router.post('/join', joinCommunity);

module.exports = router;