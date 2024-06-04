import React from "react";
import { useNavigate } from "react-router-dom";
import BackGround from "../Background/BackGround";
import monkey from "../Assets/Monkey.svg";
import star from "../Assets/Star.svg"; 
import setting from "../Assets/Settings.svg";
import welcome from "../Assets/Welcome.svg";
import button from "../Assets/YellowButton.svg";
import './LandingPage.css';

const LandingPage = () =>{

    const navigate = useNavigate();

    const nextHandler = () => {
        navigate('/next');
    };
    return(
        <div>
        <BackGround />
        <div className="wrap">
        <div className="settings">
        <img src={setting} alt="setting" className="setting_img"/>
        <img src={star} alt="setting" className="star_img"/>
        </div>
        <div className="centre_img">
        <div className="container">
        <div className="position">
        <img src={welcome} alt="chatbox" className="chat_box"/>
        </div>
        <div className="text">
        Welcome Kiddo !
        </div>
        </div>
        <img src={monkey} alt="monkeyimage" className="monkey_img"/>
        </div>
        <div>
        <img src={button} alt='button' className="yellowbutton" onClick={() => nextHandler()}/>
        </div>
        </div>
        </div>
    )
}

export default LandingPage;