const express = require("express");
const app = express()
const cors = require("cors")

// Getting HTTP Server for SocketIO
// SocketIO works on HTTP Protocols
const http = require("http");

// Getting the Server class for SocketIO
const {Server} = require("socket.io");

// Passing CORS to app
app.use(cors());

// Creating Express Server
const server = http.createServer(app);

// Working with SocketIO
const io = new Server(server , {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET" , "POST"]
    }
});

io.on("connect" , (socket) => {
    // console.log(socket.id)

    socket.on("join_room" , (data) => {
        socket.join(data); 
    })

    socket.on("sendMessage" , (data) => {
        socket.to(data.room).emit("recieveMessage" , data);
        // console.log(data)
    })

})

server.listen(3001 , () => {
    console.log("Server running successfully")
})