import axios from "axios";
import { useEffect, useState } from "react";
import "./Online_user.css";
import image from "../../../public/image2.png"




function Online_user({ onlineUsers, currentId, setCurrentChat }) {

    console.log("********************************************")
    console.log("***************** Online_user Component*************")
    console.log("********************************************")
    
        console.log("$$$$$$$", currentId,"$$$$$$$$$$", onlineUsers, "$$$$$$$$$$", setCurrentChat)


    const [friends, setFriends] = useState([]);
    const [onlineFriends, setOnlineFriends] = useState([]);
    // const PF = process.env.REACT_APP_PUBLIC_FOLDER;


    useEffect(() => {
        const getFriends = async () => {
            const res = await axios.get("http://localhost:5000/friends/" + currentId);
            console.log("*** res.data ***", res.data)
            setFriends(res.data);
        };

        getFriends();
    }, [currentId]);



    // useEffect(() => {
    //     const getFriends = async () => {


    //         if (currentUser.designation == 'donor') {

    //             // const setFriends = async () => {
    //                 try {
    //                     const res = await axios("http://localhost:5000/get-donor/" + currentId);
    //                     setFriends(res.data.recipient);
    //                 } catch (err) {
    //                     console.log(err);
    //                 }
    //             // };

    //         } else {

    //             // const setFriends = async () => {
    //                 try {
    //                     const res = await axios("http://localhost:5000/get-recipient/" + currentId);
    //                     setFriends(res.data.donor);
    //                 } catch (err) {
    //                     console.log(err);
    //                 }
    //             // };

    //         }


    //         // const res = await axios.get("http://localhost:5000/users/friends/" + currentId);
    //         // setFriends(res.data);
    //     };

    //     getFriends();
    // }, [currentId]);

    useEffect(() => {
        setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
    }, [friends, onlineUsers]);

    const handleClick = async (user) => {
        try {

            // get conversation includes two userId
            const res = await axios.get(
                `http://localhost:5000/find/${currentId}/${user._id}`
            );
            setCurrentChat(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="chatOnline">CCCCCCCCCC
            {onlineFriends.map((o) => (
                <div className="chatOnlineFriend" onClick={() => handleClick(o)}>
                    <div className="chatOnlineImgContainer">
                        <img
                            className="chatOnlineImg"
                            src={
                                // o?.profilePicture
                                //     ? PF + o.profilePicture
                                //     : PF + "person/noAvatar.png"
                                image
                            }
                            alt=""
                        />
                        <div className="chatOnlineBadge"></div>
                    </div>
                    <span className="chatOnlineName">{o?.username}</span>
                </div>
            ))}
        </div>
    );
}


export default Online_user
