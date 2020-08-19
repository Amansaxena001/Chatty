import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const jwt = localStorage.getItem("usertoken");

  useEffect(() => {});
  const logoutHandler = () => {
    localStorage.removeItem("usertoken");
  };
  if (jwt) {
    return (
      <div>
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
                    ? e.preventDefault(
                        alert("Either name or room field is empty")
                      )
                    : null
                }
                to={`/chat?name=${name}&room=${room}`}
              >
                <button className={"button bt-20"} type="submit">
                  Sign In
                </button>
              </Link>
              <blockquote class="blockquote mb-100">
                <footer className="blockquote-footer">
                  Chat anonymously |
                  <cite title="Source Title"> We got you covered</cite>
                </footer>
                <a href="/login" onClick={logoutHandler}>
                  Logout
                </a>
              </blockquote>
            </div>
          </form>
        </div>
      </div>
    );
  } else return <Redirect to="/Notfound" />;
};
export default Join;
