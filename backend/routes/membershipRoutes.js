const express = require('express');
const { getMembers, updateMembership } = require('../controllers/membershipController');
const { protect, requireVendor } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', protect, requireVendor, getMembers);
router.put('/:id', protect, requireVendor, updateMembership);

module.exports = router;
