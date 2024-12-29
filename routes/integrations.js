const express = require('express');
const router = express.Router();
const { SendDailyNotification } = require('../controllers/integrations');


router.post('/SendDailyNotification', [], SendDailyNotification)



module.exports = router;