import React from "react";
import BackGround from "../Background/BackGround";
import { useNavigate } from "react-router-dom";
import monkey from "../Assets/Monkey.svg";
import star from "../Assets/Star.svg"; 
import setting from "../Assets/Settings.svg";
import welcome from "../Assets/Welcome.svg";
import backbtn from "../Assets/Back.svg"
import nextbutton from "../Assets/Nextbutton.svg";
import './Next.css'

const NextPage = () =>{
    const navigate = useNavigate();

    const nextHandler = () => {
        navigate('/yes');
    };
    
    return(
        <div>
        <BackGround />
        <div className="wrap">
        <div className="top">
        <div>
        <img src={backbtn} alt="back" className="back" onClick={() => navigate('/')}/>
        </div>
        <div className="settings">
        <img src={setting} alt="setting" className="setting_img"/>
        <img src={star} alt="setting" className="star_img"/>
        </div>
        </div>
        <div className="centre_img">
        <div className="container">
        <div className="position">
        <img src={welcome} alt="chatbox" className="chat_box"/>
        </div>
        <div className="text">
        <div>
        Hi , I am Mizo !
        </div>
        <div>
        and I love bananas 
        </div>
        </div>
        </div>
        <img src={monkey} alt="monkeyimage" className="monkey_img"/>
        </div>
        <div>
        <img src={nextbutton} alt='button' className="yellowbutton" onClick={() => nextHandler()}/>
        </div>
        </div>
        </div>
    )
}

export default NextPage;