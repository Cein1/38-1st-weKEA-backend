const express = require('express');
const router = express.Router();

const userRouter = require('./userRouter');
const pageRouter = require('./pageRouter');

router.use('/users', userRouter);
router.use('/detail-page', pageRouter);

module.exports = router;