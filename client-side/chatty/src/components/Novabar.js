import React from "react";
import "./Novabar.css";
import LoginCom from "./LoginCom";
export default function Novabar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Chatty
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/Login">
              Login<span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="/register">
              Register
            </a>
            <a className="nav-item nav-link" href="#">
              About
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
