import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  return (
    <div className="joinOuterContainer">
      <h1 className="display-1 mr-5">Chatty</h1>

      <form className="jumbotron">
        <div className="joinInnerContainer">
          <h1 className="heading">Join</h1>
          <div>
            <input
              placeholder="Name"
              className="joinInput mt-20"
              type="text"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <input
              placeholder="Room/Create"
              className="joinInput mt-20"
              type="text"
              onChange={(event) => setRoom(event.target.value)}
            />
          </div>
          <Link
            onClick={(e) =>
              !name || !room
                ? e.preventDefault(alert("Either name or room field is empty"))
                : null
            }
            to={`/chat?name=${name}&room=${room}`}
          >
            <button className={"button bt-20"} type="submit">
              Sign In
            </button>
          </Link>
          <blockquote className="blockquote mb-100">
            <footer className="blockquote-footer">
              Chat anonymously |
              <cite title="Source Title"> We got you covered</cite>
            </footer>
          </blockquote>
        </div>
      </form>
    </div>
  );
};
export default Join;
