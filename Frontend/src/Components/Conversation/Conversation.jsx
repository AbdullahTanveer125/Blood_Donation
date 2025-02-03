import axios from "axios";
import { useEffect, useState } from "react";
import "./Conversation.css"
import React from 'react'
import default_user_image from "../../../public/user.jpg"



function Conversation({ conversation, currentUser }) {

    const [user, setUser] = useState(null);
    // const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser._id);

        const getUser = async () => {
            try {
                const res = await axios.get("http://localhost:5000/user/get-user/" + friendId);
                setUser(res.data.user);
                console.log("QQQQQQQQ=",res.data)
            } catch (err) {
                console.log(err);
            }
        };
        getUser();
    }, [currentUser, conversation]);



    return (
        <div className="conversation">
            {/* <img
                className="conversationImg"
                src={
                    user?.profilePicture
                        ? PF + user.profilePicture
                        : PF + "person/noAvatar.png"
                }
                alt=""
            />
            <span className="conversationName">{user?.username}</span> */}



            <img
                className="conversationImg"
                src={default_user_image}
                alt=""
            />
            <span className="conversationName">{user?.username}</span>
        </div>
    )
}

export default Conversation
