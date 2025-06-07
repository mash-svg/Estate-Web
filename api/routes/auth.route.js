const express = require('express');
const { signup, signin, google, signOut  } = require('../components/auth.controller');
const router = express.Router();
router.use('/signup',signup);
router.post('/signin',signin);
router.post('/google',google);
router.get('/signout',signOut);

module.exports = router;