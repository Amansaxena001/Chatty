import React from "react";
import "./Home.css";
import ill from "../assets/home.svg";
function Home() {
  return (
    <div className="outer">
      <div className="inner__1">
        <h1 className="hero">
          CHAT<span style={{ color: "red" }}>TY</span>
        </h1>
        <p className="hero__2">We Take Care Of Your Privacy</p>
        <p className="hero__3">
          Application security is the process of making apps more secure by finding, fixing,
          <br /> and enhancing the security of apps. Checking for security ..
        </p>
        <a href="/join" rel="noreferrer">
          <button className="btn  bg-dark">Join Now</button>
        </a>
      </div>

      <div className="inner__2">
        <img src={ill} width={550} height={500}></img>
      </div>
    </div>
  );
}

export default Home;
