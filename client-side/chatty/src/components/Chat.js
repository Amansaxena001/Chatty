import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import queryString from "query-string";
import "./Chat.css";
import Info from "./Info";
import Input from "./Input";
import Messages from "./Messages";
import "./Messages.css";
import AllUsers from "./AllUsers";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [avatar,setAvatar]=useState("")
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "https://chatty-india.herokuapp.com/";

  const user = [];

  useEffect(() => {
    /* eslint no-restricted-globals:0 */
    const { name, room,avatar } = queryString.parse(location.search);

    socket = io(ENDPOINT);
    setRoom(room);
    setAvatar(avatar) 

    setName(name);
    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);
  //messages middleware
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  useEffect(() => {
    socket.on("roomData", (roomData) => {
      user.push(roomData.users);
      console.log(user);
    });
  });

  //function for seding messages
  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  // console.log(message,messages)
  return (
    <div className="outerContainer">
      <div className="container">
        <Info room={room} />
        <Messages messages={messages} name={name} avatar={avatar}  />

        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};
export default Chat;
