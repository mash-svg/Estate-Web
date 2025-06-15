// const express = require("express");
import express from 'express';
// const router = express.Router();

import {test,updateUser, deleteUser, getUserListings, getUser} from "../components/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";
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

// module.exports = router;
export default router;
