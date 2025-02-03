import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import "./Chat_Online.css";

import default_user_image from "../../../public/user.jpg"

function Chat_Online({ onlineUsers, currentId, setCurrentChat }) {

    const [friends, setFriends] = useState([]);
    const [onlineFriends, setOnlineFriends] = useState([]);
    // const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    useEffect(() => {
        const getFriends = async () => {
            const res = await axios.get("http://localhost:5000/user/friends/" + currentId);
            setFriends(res.data);
        };

        getFriends();
    }, [currentId]);

    useEffect(() => {
        setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
    }, [friends, onlineUsers]);

    const handleClick = async (user) => {
        try {
            const res = await axios.get(
                `http://localhost:5000/find/${currentId}/${user._id}`
            );
            setCurrentChat(res.data);
        } catch (err) {
            console.log(err);
        }
    };








    return (
        <div className="chatOnline">
            {onlineFriends.map((o) => (
                <div className="chatOnlineFriend" onClick={() => handleClick(o)}>
                    <div className="chatOnlineImgContainer">
                        {/* <img
                            className="chatOnlineImg"
                            src={
                                o?.profilePicture
                                    ? PF + o.profilePicture
                                    : PF + "person/noAvatar.png"
                            }
                            alt=""
                        /> */}
                        <img
                            className="chatOnlineImg"
                            src={default_user_image
                            }
                            alt=""
                        />
                        <div className="chatOnlineBadge"></div>
                    </div>

                    <span className="chatOnlineName">{o?.username}</span>

                </div>
            ))}
        </div>
    )
}

export default Chat_Online
