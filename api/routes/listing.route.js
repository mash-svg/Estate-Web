// const express = require('express');
// const { verifyToken } = require("../utils/verifyUser.js");

// const {createListing, deleteListing, updateListing, getListing, getListings} = require('../components/listing.controller')
import express from 'express';

import { createListing, deleteListing,getListing,updateListing,getListings} from '../components/listing.controller';
import { verifyToken } from '../utils/verifyUser.js';
const router = express.Router();
router.post('/create',verifyToken,createListing);
router.delete('/delete/:id', verifyToken, deleteListing);
router.put('/update/:id', verifyToken, updateListing);
router.get('/get/:id', getListing);
router.get('/get', getListings);

export default router;

