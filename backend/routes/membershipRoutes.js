const express = require('express');
const { getMembers, updateMembership } = require('../controllers/membershipController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', protect, getMembers);
router.put('/:id', protect, updateMembership);

module.exports = router;
