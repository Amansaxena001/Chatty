import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Join.css";
import Icon from  '../icons/chat.png'
import {Alert,Button,Avatar} from 'antd'
import axios from 'axios'

const Join = () => {
  const avatar_API='https://joeschmoe.io/api/v1/random';
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const[alert,setAlert]=useState(false)
  const [src,setSrc]=useState(`https://joeschmoe.io/api/v1/${Math.random().toFixed(0)}`)



  const selectAvatar=async()=>{
setSrc(src+Math.random().toFixed(0))
    
  }

  return (
    <>
     {alert&&   <Alert
      message="Either name or room field is empty"
      banner
      closable
      type="error"
      onClose={()=>setAlert(false)}
    />}
    <div className="joinOuterContainer"> 
    <div className="glossy-container">

      <form  className="jumbotron">
        <div className="joinInnerContainer">
          <img src={Icon} alt="online icon" style={{marginTop:10}} height={95} width={110} />
          <h1 className="heading">Chat Room</h1>
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
              placeholder="Join/Create Room"
              className="joinInput mt-20"
              type="text"
              onChange={(event) => setRoom(event.target.value)}
            />
          </div>
          <div className="avatar-container">

          <Button className="avatar-btn" onClick={selectAvatar}>Select Avatar</Button>
          <Avatar src={src} style={{height:50,width:50}} size="large" >
            
            </Avatar>
          </div>
          <Link
            onClick={(e) =>
              !name || !room
                ? e.preventDefault(setAlert(true))
                : null
            }
            to={encodeURI(`/chat?name=${name}&room=${room}&avatar=${src}}`)}
          >
            <button className={"button1 bt-20"} type="submit">
             Join
            </button>
          </Link>
          <blockquote class="blockquote mb-100">
            <footer className="blockquote-footer">
              Chat anonymously |
              <cite title="Source Title"> We got you covered</cite>
            </footer>
          </blockquote>
        </div>
      </form>
    </div>
    </div>
    </>
  );
};
export default Join;
