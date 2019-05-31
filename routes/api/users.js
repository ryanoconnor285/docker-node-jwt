const express = require('express');
const router = exress.Router();

//  @route   GET api/users
//  @desc    Test Routes
//  @access  Public
router.get('/', (req,res) => res.send('User route'));

module.exports = router;