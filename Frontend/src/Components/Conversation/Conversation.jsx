import axios from "axios";
import { useEffect, useState } from "react";
import "./Conversation.css"
import React from 'react'
import default_user_image from "../../../public/user.jpg"



function Conversation({ conversation, currentUser, currentChat }) {

    const [user, setUser] = useState(null);
    // const PF = process.env.REACT_APP_PUBLIC_FOLDER;


    console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
    console.log("conversation component=", conversation)
    console.log("Login User=", currentUser)
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>")

    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser._id);


        console.log("<<<< friendId >>>>=", friendId)

        const getUser = async () => {
            try {
                const res = await axios.get("http://localhost:5000/user/get-user/" + friendId);
                setUser(res.data.user);
                console.log("I think get friend user=", res.data)
            } catch (err) {
                console.log(err);
            }
        };
        getUser();
    }, [currentUser, conversation]);


    
        console.log("<<<< USER >>>>=", user)
    const isActive = currentChat?._id === conversation._id;
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


            <div className={`w-full pl-6 my-2 conversation ${isActive ? "active-conversation" : ""}`}>
                <img
                    className="conversationImg"
                    src={user?.profile_photo ? user.profile_photo : default_user_image}
                    alt=""
                />
                <span className="conversationName">{user?.username}</span>
            </div>

        </div>
    )
}

export default Conversation
