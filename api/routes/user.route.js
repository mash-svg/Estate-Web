const express = require("express");

// const router = express.Router();

const {test,updateUser, deleteUser, getUserListings, getUser} = require("../components/user.controller.js");
const { verifyToken } = require("../utils/verifyUser.js");
// // const {verifyToken} = require('../utils/verifyUser.js');

// router.use('/user',test);
// // router.post('/update/:id',verifyToken,updateUser);

// module.exports = router;




const router = express.Router();

router.get('/test', test);
router.post('/update/:id',verifyToken,updateUser);
router.delete('/delete/:id',verifyToken,deleteUser);
router.get('/listings/:id', verifyToken, getUserListings);
router.get('/:id', verifyToken, getUser);

module.exports = router;