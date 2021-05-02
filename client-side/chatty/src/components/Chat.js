import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import queryString from "query-string";
import "./Chat.css";
import Info from "./Info";
import Input from "./Input";
import Messages from "./Messages";
import "./Messages.css";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const ENDPOINT = "https://chatty-india.herokuapp.com/";

  useEffect(() => {
    /* eslint no-restricted-globals:0 */
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);
    setRoom(room);

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
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, [messages]);

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
      <div className="userContainer">
        <h2 className="userHeader ">Chatting</h2>
        <ul>
          <li style={{ color: "#ffff", listStyle: "none" }}>
            {users.map(({ name }) => (
              <div key={name} className="activeItem">
                {name}
              </div>
            ))}
          </li>
        </ul>
      </div>
      <div className="container">
        <div>
          <Info room={room} />
          <Messages messages={messages} name={name} />
        </div>

        <div className="type">
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
      </div>
      {/* <AllUsers userdata={userdata} /> */}
    </div>
  );
};
export default Chat;
