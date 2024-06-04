import React from "react";
import backbtn from "../Assets/Back.svg";
import BackGround from "../Background/BackGround";
import blueheart from "../Assets/blueheart.svg";
import apple from "../Assets/apple.svg";
import pinkcard from "../Assets/Pinkcard.svg";
import box from "../Assets/whitebox.svg";
import retry from "../Assets/retry.svg"
import text from "../Assets/text.svg";
import same from "../Assets/same.svg"
import pinktext from "../Assets/textpink.svg"
import start from "../Assets/start.svg"
import orageback from "../Assets/orangeback.svg"
import threeback from "../Assets/threeback.svg"
import match from "../Assets/itsamatch.svg"
import textone from "../Assets/fruittext.svg"
import greentexttwo from "../Assets/greentexttwo.svg";
import two from "../Assets/numbertwo.svg";
import { useNavigate } from "react-router";
import "./Instructions.css";

const Instruction = () => {
  const navigate = useNavigate();

  const nextHandler = () => {
      navigate('/game');
  };
  return (
    <div>
      <BackGround />
      <div className="game_flex">
        <img
          src={backbtn}
          alt="back"
          className="game_back"
          onClick={() => navigate('/yes')}
        />
      </div>
      <div className="box_flex">
        <div>
          <div>
            <img src={box} alt="box" className="boxsize" />
          </div>
          <div className="box_content">
            <div>
              <img src={pinkcard} alt="card" />
            </div>
            <div className="textflex">
              <div className="container">
                <img src={orageback} alt="two" />
              </div>
              <div>
                <img src={pinktext} alt="card" className="text_space" />
              </div>
            </div>
            <div>
              <img src={textone} alt="card" />
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={box} alt="box" className="boxsize" />
          </div>
          <div className="box_content">
            <div>
              <img src={blueheart} alt="card" />
            </div>
            <div className="textflex">
              <div className="container">
                <img src={two} alt="two" />
                <div className="num_box">02</div>
              </div>
              <div>
                <img src={text} alt="card" className="text_space" />
              </div>
            </div>
            <div>
              <img src={greentexttwo} alt="card" />
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={box} alt="box" className="boxsize" />
          </div>
          <div className="third_box_content">
            <div>
              <img src={apple} alt="card" />
            </div>
            <div>
              <img src={same} alt="card" />
            </div>
            <div className="textflex">
              <div className="container">
                <img src={threeback} alt="two" />
                <div className="num_box">03</div>
              </div>
              <div>
                <img src={match} alt="card" className="text_space" />
              </div>
            </div>
            <div>
              <img src={retry} alt="card" />
            </div>
          </div>
        </div>
      </div>
      <div className="start_flex">
        <img src={start} alt='button' className="yellowbutton" onClick={() => nextHandler()}/>
        </div>
    </div>
  );
};

export default Instruction;
