import React, { useState, useEffect } from "react";
import pinkcard from "../Assets/Pinkcard.svg";
import bluecard from "../Assets/BlueCard.svg";
import nextbutton from "../Assets/Nextbutton.svg";
import apple from "../Assets/apple.svg";
import orange from "../Assets/orangefruit.svg";
import grapes from "../Assets/grapes.svg";
import strawberry from "../Assets/strawberry.svg";
import carrot from "../Assets/carrot.svg";
import watermelon from "../Assets/watermelon.svg";
import lettera from "../Assets/Lettercard.svg";
import lettero from "../Assets/letter-o.svg";
import letters from "../Assets/letter-s.svg";
import letterg from "../Assets/letter-g.svg";
import letterc from "../Assets/letter-c.svg";
import letterw from "../Assets/letter-w.svg";
import backbtn from "../Assets/Back.svg";
import points from "../Assets/points.svg";
import BackGround from "../Background/BackGround";
import "./GamePage.css";
import { useNavigate } from "react-router";

const GamePage = () => {
  const navigate = useNavigate();

  const nextHandler = () => {
    navigate('/instruction');
  };

  const [remaining, setRemaining] = useState(6);
  const [visible, setVisible] = useState(Array(6).fill(false));
  const [letterShow, setLetterShow] = useState(Array(6).fill(false));
  const [arr, setArr] = useState([]);
  const [rightArr , setRightArr] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [firstClick, setFirstClick] = useState(true);
  const [matchMessage, setMatchMessage] = useState(false);
  const [tryAgain, setTryAgain] = useState(false);

  const initialArr = [
    { img: apple, letter: lettera, start: "A", id: 1 },
    { img: orange, letter: lettero, start: "O", id: 2 },
    { img: grapes, letter: letterg, start: "G", id: 3 },
    { img: strawberry, letter: letters, start: "S", id: 4 },
    { img: carrot, letter: letterc, start: "C", id: 5 },
    { img: watermelon, letter: letterw, start: "W", id: 6 },
  ];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const imageCardHandler = (item, index) => {
    if (firstClick) {
      const updatedVisible = [...visible];
      updatedVisible[index] = !updatedVisible[index];
      setVisible(updatedVisible);
      setSelectedCards([...selectedCards, { ...item, index }]);
      setFirstClick(false);
      setTryAgain(false);
    }
  };

  const letterCardHandler = (item, index) => {
    if (!firstClick) {
      const updatedLetterShow = [...letterShow];
      updatedLetterShow[index] = !updatedLetterShow[index];
      setLetterShow(updatedLetterShow);
      setSelectedCards([...selectedCards, { ...item, index, isLetter: true }]);
      setFirstClick(true);
    }
  };

  useEffect(() => {
    if (selectedCards.length === 2) {
      console.log(selectedCards)
      const [card1, card2] = selectedCards;
      if (card1.start === card2.start) {
        setMatchMessage(true);
        setTimeout(() => {
          const arrNew = arr.filter((card) => card.id !== card1.id && card.id !== card2.id);
          const rightArrNew = rightArr.filter((card) => card.id !== card1.id && card.id !== card2.id);
          setArr(arrNew);
          setRightArr(rightArrNew);
          const updatedVisible = visible.map((value, index) =>
            index !== card1.index && index !== card2.index ? value : false
          );
          setVisible(updatedVisible);
          const updatedLetterShow = letterShow.map((value, index) =>
            index !== card1.index && index !== card2.index ? value : false
          );
          setLetterShow(updatedLetterShow);
          setSelectedCards([]);
          setMatchMessage(false);
          if(arrNew.length===0 && rightArrNew.length===0){
            navigate("/total");
            return;
          }
        }, 1000);
      } else {
        setTimeout(() => {
          setVisible(Array(6).fill(false));
          setLetterShow(Array(6).fill(false));
          setSelectedCards([]);
        }, 1000);
        setRemaining((prev) => {
          const newRemaining = prev - 1;
          if (newRemaining === 0) {
            setRemaining(6);
            setTryAgain(true);
            setFirstClick(true);
          }
          return newRemaining;
        });
      }
    }
  }, [selectedCards, arr, rightArr, visible, letterShow]);

  useEffect(() => {
    setArr(shuffleArray([...initialArr]));
    setRightArr(shuffleArray([...initialArr]));
  }, []);

  return (
    <div>
      <BackGround />
      <div className="game_flex">
        <img
          src={backbtn}
          alt="back"
          className="game_back"
          onClick={() => navigate(-1)}
        />
        {matchMessage && <div className="its_match">It's a match!</div>}
        {tryAgain && (
          <div className="reload_flex">
            <div className="its_match">Try again</div>
            <div>
              <img src={nextbutton} alt="button" className="reload" onClick={nextHandler} />
            </div>
          </div>
        )}
        <div>
          <img src={points} alt="points" className="points_box" />
          <div className="remaining">Remaining moves : {remaining}</div>
        </div>
      </div>
      <div className="flexbox">
        <div className="grid-container">
          {arr.map((item, index) => (
            <div key={index} className="grid-item">
              <img
                src={visible[index] ? item.img : pinkcard}
                alt="pink"
                onClick={() => imageCardHandler(item, index)}
              />
            </div>
          ))}
        </div>
        <div className="grid-container">
          {rightArr.map((item, index) => (
            <div key={index} className="grid-item">
              <img
                src={letterShow[index] ? item.letter : bluecard}
                alt="blue"
                onClick={() => letterCardHandler(item, index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamePage;