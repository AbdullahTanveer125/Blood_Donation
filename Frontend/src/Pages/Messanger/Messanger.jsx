import "./Messanger.css"
import React, { useEffect, useState, useRef } from 'react'


import { useNavigate } from "react-router-dom";



import { useAuth } from "../../context/auth";
import Conversation from "../../Components/Conversation/Conversation";
import Message from "../../Components/Message/Message";
import Chat_Online from "../../Components/Chat_Online/Chat_Online";

import axios from "axios";
import { io } from "socket.io-client";
import D_Sidebar from "../../Components/Donor_components/D_Sidebar/D_Sidebar";

function Messanger() {

    const [auth] = useAuth(); // Access the auth state

    console.log("************AAAAAAAAAAAAAAAAA******************************")
    console.log(auth)
    // get user from auth
    const { user } = auth;
    console.log("*************AAAAAAAAAAAA********************************")

    const [loginPerson, setLoginPerson] = useState(null);

    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);


    // const { user } = useContext(AuthContext);

    const scrollRef = useRef();// messages scrolling k liye


    // const [socket, setSocket] = useState("");
    const socket = useRef();



    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage", (data) => {
            console.log("** 22 Data ** =", data);
            setArrivalMessage({
                sender: data.senderId,
                text: data.text,
                createdAt: Date.now(),
            });
        });
    }, []);

    useEffect(() => {
        arrivalMessage &&
            currentChat?.members.includes(arrivalMessage.sender) &&
            setMessages((prev) => [...prev, arrivalMessage]);
    }, [arrivalMessage, currentChat]);

    useEffect(() => {
        socket.current.emit("addUser", user._id);
        socket.current.on("getUsers", (users) => {
            console.log("<<< inside get online users from socket >>>=", users)
            setOnlineUsers(
                user.friends.filter((f) => users.some((u) => u.userId === f))
            );
        });
    }, [user]);
    console.log("*******************************************")
    console.log("*******************************************")
    console.log("<<< outside get online users from socket >>>=", onlineUsers)
    console.log("*******************************************")
    console.log("*******************************************")


    // console.log("user from auth", user._id, user.name, loginPerson.person, loginPerson._id, user)

    console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
    console.log(loginPerson)
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
    useEffect(() => {

        // if (!auth || !auth.user) {
        //     console.error("Auth or user is not available");
        //     // return <div>Please log in to access this page.</div>;
        // }

        // if (auth.person == "organization") {
        //     console.log("You are not recipient, donor and admin Please login as Recipient, donor and admin to access this page.");

        //     // return <div>You are not recipient! Please login as "Recipient" to access this page.</div>;
        // }


        console.log("************AAAAAAAAAAAAAAAAA******************************")
        console.log(auth)
        console.log("*************AAAAAAAAAAAA********************************")
        // console.log("user from auth", user._id, user.name, loginPerson.person, loginPerson._id, user)

        console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
        console.log("Login Person=", loginPerson)
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
        console.log("USER=", user)
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>")

    }, []);

    useEffect(() => {
        console.log("Updated loginPerson:", loginPerson);
    }, [loginPerson]);




    useEffect(() => {
        const getConversations = async () => {
            try {
                const res = await axios.get("http://localhost:5000/specific_conversation/" + user._id);
                setConversations(res.data);
                console.log("res=", res)
            } catch (err) {
                console.log(err);
            }
        };
        getConversations();
    }, [user._id]);

    useEffect(() => {
        const getMessages = async () => {
            try {
                const res = await axios.get("http://localhost:5000/message/" + currentChat?._id);
                setMessages(res.data);
                // console.log("JJJJJJJJJJJJJJ=",res.data)
            } catch (err) {
                console.log(err);
            }
        };
        getMessages();
    }, [currentChat]);

    console.log("Messages=", messages)


    console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
    console.log("conversations=", conversations)
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>")

    const handleSubmit = async (e) => {
        e.preventDefault();
        const message = {
            sender: user._id,
            text: newMessage,
            conversationId: currentChat._id,
        };

        const receiverId = currentChat.members.find(
            (member) => member !== user._id
        );
        console.log("Now")
        console.log("receiverId= ", receiverId)
        console.log("Now")
        socket.current.emit("sendMessage", {
            senderId: user._id,
            receiverId,
            text: newMessage,
        });

        try {
            const res = await axios.post("http://localhost:5000/message", message);
            setMessages([...messages, res.data]);
            setNewMessage("");
        } catch (err) {
            console.log(err);
        }
    };

    // messages scrolling k liye
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);



    useEffect(() => {
        if (!auth || !auth.user) return;

        if (auth.person === "recipient") {
            const { user, recipient } = auth;
            console.log("Recipient detected");
            setLoginPerson({ user, recipient });
        } else if (auth.person === "donor") {
            const { user, donor } = auth;
            setLoginPerson({ user, donor });
            console.log("<<<<<<< HHHHHHHHHHHHHH >>>>>>>>>>");
        } else if (auth.person === "admin") {
            const { user, admin } = auth;
            setLoginPerson({ user, admin });
        }
    }, [auth]);

    // if (auth.person == "recipient") {
    //     const { user, recipient } = auth;
    //     console.log("Recipient detected");
    //     setLoginPerson({
    //         user,
    //         recipient
    //     })
    // }
    // if (auth.person == "donor") {
    //     const { user, donor } = auth;


    //     setLoginPerson({
    //         user,
    //         donor
    //     })
    //     console.log("<<<<<<< HHHHHHHHHHHHHH >>>>>>>>>>")
    // }
    // if (auth.person == "admin") {
    //     const { user, admin } = auth;
    //     setLoginPerson({
    //         user,
    //         admin
    //     })
    // }


    console.log("ooooooooo currentChat ooooooooooo ......... ")
    console.log("ooooooooo currentChat ooooooooooo ......... ")
    console.log("ooooooooo currentChat ooooooooooo ......... ")
    console.log("ooooooooo currentChat ooooooooooo ......... ")
    console.log(currentChat)
    console.log("login user id= ", user._id)
    console.log("ooooooooo currentChat ooooooooooo ......... ")
    console.log("ooooooooo currentChat ooooooooooo ......... ")
    console.log("ooooooooo currentChat ooooooooooo ......... ")
    console.log("ooooooooo currentChat ooooooooooo ......... ")




    return (
        <div className="ml-[17%] messenger w-[82%] min-h-[100vh] font-nunito">


            <div className="chatMenu bg-gray-0">
                <div className="chatMenuWrapper">
                    {/* <input placeholder="Search for friends" className="chatMenuInput" /> */}

                    <div className="mt- min-h-[98vh] border-l-2 border-t-2 border-r-2 rounded-xl">
                        <div className="font-bold px-3 py-2 text-lg">Messages</div>
                        {conversations.map((c) => (
                            <div
                                key={c._id}
                                onClick={() => setCurrentChat(c)}
                                className="">
                                <Conversation conversation={c} currentUser={user} currentChat={currentChat}/>
                            </div>
                        ))}
                    </div>

                </div>
            </div>



            <div className="chatBox bg-slate-50">
                <div className="chatBoxWrapper">

                    {currentChat ? (
                        <>
                            <div className="chatBoxTop">
                                {messages.map((m) => (// "scrollRef" messages scrolling k liye
                                    <div ref={scrollRef}>
                                        <Message message={m} own={m.sender === user._id} />
                                    </div>
                                ))}
                            </div>
                            <div className="chatBoxBottom">
                                <textarea
                                    className="chatMessageInput"
                                    placeholder="write something..."
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    value={newMessage}
                                ></textarea>
                                <button className="chatSubmitButton" onClick={handleSubmit}
                                >
                                    Send
                                </button>
                            </div>
                        </>
                    ) : (
                        <span className="noConversationText">
                            Open a conversation to start a chat.
                        </span>
                    )}

                </div>
            </div>



            <div className="chatOnline bg-slate-0">
                <div className="chatOnlineWrapper">
                    {/* <Chat_Online /> */}
                    <Chat_Online onlineUsers={onlineUsers} currentId={user._id} setCurrentChat={setCurrentChat}
                    />
                </div>
            </div>


        </div>
    )
}

export default Messanger
