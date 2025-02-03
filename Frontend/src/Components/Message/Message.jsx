import React from 'react'
import "./message.css";
import { format } from "timeago.js";

import default_user_image from "../../../public/user.jpg"

function Message({ message, own }) {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img
                    className="messageImg"
                    src={default_user_image}
                    alt=""
                />


                <p className="messageText">{message.text}</p>
                
            </div>
            
            <div className="messageBottom">{format(message.createdAt)}</div>
            
        </div>
    )
}

export default Message
