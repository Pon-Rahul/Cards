import React from "react";
import BackGround from "../Background/BackGround";
import result from "../Assets/result.svg";
import finalmonkey from "../Assets/Monkeyfinal.svg";
import "./TotalScore.css";
import { useNavigate } from "react-router";

const TotalScore = () => {
  const navigate = useNavigate();
  
  const nextHandler = () => {
    navigate('/instruction');
};
  return (
    <div>
      <BackGround />
      <div className="black">
        <div onClick={() => nextHandler()}>
          <img src={result} alt="result" className="board" />
        </div>
        <div className="finalmonkey">
          <img src={finalmonkey} alt="final" className="final_monkey_img" />
        </div>
      </div>
    </div>
  );
};

export default TotalScore;
