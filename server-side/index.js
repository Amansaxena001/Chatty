const express = require("express");
const socektio = require("socket.io");
const http = require("http");
const homeRoute = require("./router");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");

const Chat = require("./models/Chat");
const { AddUser, removeUser, getUser, getUsersInRoom } = require("./users");

const server = http.createServer(app);

const io = socektio(server);
app.use(bodyParser.json());
app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

//socket middleware

io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = AddUser({ id: socket.id, name, room });

    if (error) return callback(error);

    socket.emit("message", {
      user: "admin",
      text: `${user.name}, welcome to room ${user.room}.`,
    });
    socket.broadcast
      .to(user.room)
      .emit("message", { user: "admin", text: `${user.name} has joined!` });

    // io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    socket.join(user.room);

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });

    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);
    if (user) {
      io.to(user.room).emit("message", {
        user: "admin",
        text: `${user.name} has left.`,
      });
      io.to(user.room).emit("roomData", {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    }
  });
});

//Mongo Db
const url = "mongodb://localhost/chatty";
const connect = mongoose.connect(url, { useNewUrlParser: true });

connect.then((db) => {
  console.log("\x1b[36m%s\x1b[0m", "Connected to mongoDB");
});

app.use(homeRoute);

server.listen(PORT, () =>
  console.log("\x1b[33m%s\x1b[0m", `Server is online on ${PORT}`)
);
