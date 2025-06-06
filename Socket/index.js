const io = require("socket.io")(8900, {
    cors: {
        origin: "http://localhost:5173",  //react localhost URL
    },
});

let users = [];

const addUser = (userId, socketId) => {
    !users.some((user) => user.userId === userId) &&
        users.push({ userId, socketId });
};

const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
    return users.find((user) => user.userId === userId);
    
};
// console.log("*** Socket *** Users array=",users)

// hr dfa socket ki id change hoti hai jb b page refresh hota hai
io.on("connection", (socket) => {
    //when ceonnect
    console.log("a user connected.");
    
// console.log("*** Socket *** Users array=",users)

    io.emit("welcom","this is my socket server!")//send message to client

    //take userId and socketId from user
    socket.on("addUser", (userId) => {
        addUser(userId, socket.id);
        io.emit("getUsers", users);
    });

    //send and get message
    socket.on("sendMessage", ({ senderId, receiverId, text }) => {
        const user = getUser(receiverId);
        io.to(user.socketId).emit("getMessage", {
            senderId,
            text,
        });
    });

    // when disconnect
    socket.on("disconnect", () => {
        console.log("a user disconnected!");
        removeUser(socket.id);
        io.emit("getUsers", users);
    });
});