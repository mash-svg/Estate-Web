const express = require('express');
const { verifyToken } = require("../utils/verifyUser.js");

const {createListing, deleteListing, updateListing, getListing, getListings} = require('../components/listing.controller')

const router = express.Router();
router.post('/create',verifyToken,createListing);
router.delete('/delete/:id', verifyToken, deleteListing);
router.put('/update/:id', verifyToken, updateListing);
router.get('/get/:id', getListing);
router.get('/get', getListings);



module.exports = router;