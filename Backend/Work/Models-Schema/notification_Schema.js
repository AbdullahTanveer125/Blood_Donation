const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    recipient_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipient'
    },
    donor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'donor'
    },
    blood_request_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'blood_request'
    },
    message: String,

    
    donor_username: {
        type: String,
    },
    
    isRead: {
        type: Boolean,
        default: false
    }
},
    { timestamps: true }
);

module.exports = mongoose.model("Notification", notificationSchema);
