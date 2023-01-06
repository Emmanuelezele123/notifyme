const express = require("express");
const router = express.Router();
const NotificationController = require("../controllers/notification");

router.post('/addNew', NotificationController.addNotification)


router.get('/getUnread', NotificationController.getUnread)
router.get('/getNotifications', NotificationController.getNotifications)

module.exports = router 
//2012-12-19