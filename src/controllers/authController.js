const User = require('../models/authUserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); //to generate the token
const dotenv = require('dotenv');
const UserProfile = require('../models/userProfileModel');

dotenv.config();

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({email});

    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({ //create user model instance
      name,
      email,
      password,
    });

    await user.save();

    //create profile for the new user
    const newProfile = new UserProfile({user: user._id });
    await newProfile.save()
    // fo this if you want to redirect to dashboard after registration

  
//     const payload = {
//       user: {
//         id: user.id,
//       },
//     };

//     jwt.sign(
//       payload, //{_id: user.id}
//       process.env.JWT_SECRET,
//       { expiresIn: '1h' }, // active time for token
//       (err, token) => {
//         if (err) throw err;
//         res.json({ msg: "Account registered sucessfully!", token });
//       }
//     );
        res
          .status(200)
          .json({
            msg: "User registered successfully!",
            user: user,
            userProfile: newProfile,
          });

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const payload = {
      user: {
        id: user.id, //id stored in database
      },
    };

    // for token generation
    jwt.sign(
      payload, //user token id
      process.env.JWT_SECRET, //token secret
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;
        res.json({ msg: "user logged in successfully", token: `Bearer ${token}`, user: user });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = {
  registerUser,
  loginUser,
};