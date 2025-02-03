import "./Messanger.css"
import React, { useEffect, useState, useRef } from 'react'


import { useNavigate } from "react-router-dom";



import { useAuth } from "../../context/auth";
import Conversation from "../../Components/Conversation/Conversation";
import Message from "../../Components/Message/Message";
import Chat_Online from "../../Components/Chat_Online/Chat_Online";

import axios from "axios";
import { io } from "socket.io-client";

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

    const navigate = useNavigate();



    // const [socket, setSocket] = useState("");
    const socket = useRef();

    useEffect(() => {
        socket.current = io("ws://localhost:8900");
        socket.current.on("getMessage", (data) => {
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
            // console.log("Me=", users)
            setOnlineUsers(
                user.friends.filter((f) => users.some((u) => u.userId === f))
            );
        });
    }, [user]);


    // console.log("user from auth", user._id, user.name, loginPerson.person, loginPerson._id, user)

    console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
    console.log(loginPerson)
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>")
    useEffect(() => {

        if (!auth || !auth.user) {
            console.error("Auth or user is not available");
            // return <div>Please log in to access this page.</div>;
        }

        if (auth.person == "organization") {
            console.log("You are not recipient, donor and admin Please login as Recipient, donor and admin to access this page.");

            // return <div>You are not recipient! Please login as "Recipient" to access this page.</div>;
        }

        if (auth.person == "recipient") {
            const { user, recipient } = auth;
            console.log("Recipient detected");
            setLoginPerson({
                user,
                recipient
            })
        }
        if (auth.person == "donor") {
            const { user, donor } = auth;
            setLoginPerson({
                user,
                donor
            })
        }
        if (auth.person == "admin") {
            const { user, admin } = auth;
            setLoginPerson({
                user,
                admin
            })
        }

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





    return (
        <div className="messenger">


            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input placeholder="Search for friends" className="chatMenuInput" />

                    {conversations.map((c) => (
                        <div onClick={() => setCurrentChat(c)}>
                            <Conversation conversation={c} currentUser={user} />
                        </div>
                    ))}
                </div>
            </div>



            <div className="chatBox">
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



            <div className="chatOnline">
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
