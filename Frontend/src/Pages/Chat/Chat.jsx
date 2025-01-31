import "./Chat.css"
import React from 'react'



// import Conversation from "../../components/conversations/Conversation";
import Message from "../../Components/Messsage/Message.jsx";
// import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useContext, useEffect, useRef, useState } from "react";
// import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { io } from "socket.io-client";
import Conversation from "../../Components/Conversation/Conversation";
// import Online_user from "../../Components/Online_user/Online_user";
import Online_user from "../../Components/Online_user/Online_user.jsx";



// import { useAuth } from "../context/auth";
import { useAuth } from "../../context/auth.jsx";




function Chat() {


  const [auth] = useAuth(); // Access the auth state
  // get user from auth
  const { user } = auth;
  console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
  console.log(auth, user)
  console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")

  if (!auth || !auth.user) {
    console.error("Auth or user is not available");
    return <div>Please log in to access this page.</div>;
  }



  console.log("$$$$$$$", user._id, "$$$$$$$$$$")

  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();

  // const { user } = useContext(AuthContext);

  const scrollRef = useRef();//when new message is send then automatically scroll to last message

  useEffect(() => {
    socket.current = io("ws://localhost:8900");//socket server URL

    console.log("****** socket.current *******");
    console.log(socket.current);
    console.log("****** socket.current *******");

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
      setOnlineUsers(
        user.friends.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, [user]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("http://localhost:5000/specific_conversation/" + user._id);
        setConversations(res.data);
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
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);



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



  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);





  return (
    <>
      {/* <Topbar /> */}
      <div className="messenger">


        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Search for friends" className="chatMenuInput" />
            {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>AAAAA
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
                  {messages.map((m) => (
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
                  <button className="chatSubmitButton" onClick={handleSubmit}>
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
          <div className="chatOnlineWrapper">AAAAAAA
            <Online_user
              onlineUsers={onlineUsers}
              currentId={user._id}
              setCurrentChat={setCurrentChat}
            />
          </div>
        </div>


      </div>
    </>
  )
}

export default Chat
