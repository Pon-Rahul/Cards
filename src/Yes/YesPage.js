import React from "react";
import BackGround from "../Background/BackGround";
import { useNavigate } from "react-router-dom";
import monkey from "../Assets/Monkey.svg";
import star from "../Assets/Star.svg"; 
import setting from "../Assets/Settings.svg";
import welcome from "../Assets/Welcome.svg";
import backbtn from "../Assets/Back.svg";
import yesbutton from "../Assets/YesButton.svg";
import "./YesPage.css"

const YesPage = () =>{
    const navigate = useNavigate();

    const nextHandler = () => {
        navigate('/instruction');
    };
    return(
        <div>
        <BackGround />
        <div className="wrap">
        <div className="top">
        <div>
        <img src={backbtn} alt="back" className="back" onClick={() => navigate('/next')}/>
        </div>
        <div className="settings">
        <img src={setting} alt="setting" className="setting_img"/>
        <img src={star} alt="setting" className="star_img"/>
        </div>
        </div>
        <div className="centre_image">
        <div className="container">
        <div className="position">
        <img src={welcome} alt="chatbox" className="chat_box"/>
        </div>
        <div className="text">
        Can you help me get some ? 
        </div>
        </div>
        <img src={monkey} alt="monkeyimage" className="monkey_img"/>
        </div>
        <div>
        <img src={yesbutton} alt='button' className="yellowbutton" onClick={() => nextHandler()}/>
        </div>
        </div>
        </div>
    )
}

export default YesPage;