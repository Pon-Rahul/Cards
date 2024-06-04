import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import NextPage from "../Next/Next";
import YesPage from "../Yes/YesPage";
import GamePage from "../GamePage/GamePage";
import TotalScore from "../Total/TotalScore";
import Instruction from "../Instructions/Instructions";
import Match from "../Match/Match";

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>
      <Route path="next" element={<NextPage />}></Route>
      <Route path="yes" element={<YesPage />}></Route>
      <Route path="instruction" element={<Instruction />}></Route>
      <Route path="game" element={<GamePage />}></Route>
      <Route path="match" element={<Match />}></Route>
      <Route path="total" element={<TotalScore />}></Route>
    </Routes>
  );
};

export default Root;
