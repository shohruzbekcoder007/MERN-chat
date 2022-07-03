const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const authRoutes = require("./routes/auth")
const messageRoutes = require("./routes/messages")
const socket = require('socket.io')

const app = express()
require('dotenv').config()

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDBga ulanish hosil qilindi...');
    })
    .catch((err) => {
        console.error('MongoDBga ulanish vaqtida xato ro\'y berdi...', err);
    });

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

const server = app.listen(process.env.PORT, error => {
    if(error){
        console.log(`Error is created by server`)
    } else {
        console.log(`Server started on port ${process.env.PORT}`)
    }
})

const io = socket(server, {
    cors: {
        origin: "http://localhost:3000",
        credentials: true
    }
})

global.onlineUsers = new Map()

io.on("connection", (socket) => {
    global.chatSocket = socket;
    socket.on("add-user", (userId) => {
      onlineUsers.set(userId, socket.id);
    });
  
    socket.on("send-msg", (data) => {
      const sendUserSocket = onlineUsers.get(data.to);
      if (sendUserSocket) {
        socket.to(sendUserSocket).emit("msg-recieve", data.msg);
      }
    });
  });