const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require ( 'express-validator/check')

const User = require('../../models/User')

//  @route   GET api/users
//  @desc    Test Routes
//  @access  Public
router.get('/', (req,res) => res.send('User route'))

//  @route   POST api/users/register
//  @desc    Register User
//  @access  Public
router.post('/register', [
  check('firstName', 'First Name is required').not().isEmpty(),
  check('lastName', 'Last Name is required').not().isEmpty(),
  check('email', 'Email is required').isEmail(),
  check('password', 'Password must be at least 6 characters').isLength( {min: 6} ),
], async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  
  const { firstName, lastName, email, password } = req.body

  try {
    let user = await User.findOne({ email })

    if (user) {
      return res.status(400).json({ errors: [{ msg: 'User already exists' }] })
    }
    user = new User({
      firstName,
      lastName,
      email,
      password
    })

    const salt = await bcrypt.genSalt(10)

    user.password = await bcrypt.hash(password, salt)

    await user.save()

    const payload = {
      user: {
        id: user.id
      }
    }

    jwt.sign(
      payload, 
      config.get('jwtSecret'), 
      {expiresIn: 3600},
      (err, token) => {
        if(err) throw err
        res.json({ token })
      }
    )

  } catch (err) {
    console.log(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router