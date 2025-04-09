const express = require("express")

//router object
const notification_router = express.Router();





const {
    testController,
    sendNotification,
    getNotification,
    deleteNotification
} = require("../Controllers/notificationController")










// test || GET 
notification_router.get("/notification-test", testController);



notification_router.post("/send", sendNotification);


notification_router.get("/get/:recipient_id", getNotification);


notification_router.delete("/delete/:notification_id", deleteNotification);












module.exports = notification_router;