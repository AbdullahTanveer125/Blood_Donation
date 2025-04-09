const notification_model = require("../Models-Schema/notification_Schema")







async function testController(req, res) {
    res.send({
        message: "We are in << Notification >> test function !!"
    })
}


// send notification
async function sendNotification(req, res) {
    try {
        // console.log("req.body",req.body)
        const notification = await notification_model.create(req.body);
        res.status(200).json({
            success: true,
            message: "Send notification to recipient.",
            notification
        });
    } catch (err) {
        res.status(500).json({ success: false, message: "Error sending notification", error: err });
    }
}

// get notification
async function getNotification(req, res) {
    try {
        console.log("req.params.recipient_id", req.params.recipient_id)
        const notifications = await notification_model.find({ recipient_id: req.params.recipient_id });
        res.json({ success: true, message: "Get Notifications", notifications });
    } catch (err) {
        res.status(500).json({ success: false, message: "Error in get notification", error: err });
    }
}

// delete notification
async function deleteNotification(req, res) {
    try {
        console.log("**** Notification id ****",req.params.notification_id)
        const deleted = await notification_model.findByIdAndDelete(req.params.notification_id);
        if (!deleted) {
            return res.status(404).json({ success: false, message: "notification not found", error: err });
        }
        res.json(
            { success: true, message: "Notification deleted successfully", deleted }
        );
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
}







//export All functions from "Controller"
module.exports = { testController, sendNotification, getNotification, deleteNotification }