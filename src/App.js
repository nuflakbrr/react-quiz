import React, { useState } from "react";
import "./styles/App.css";
import EndQuiz from "./components/EndQuiz";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import { QuizContexts } from "./Helpers/Contexts";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>React Quiz App</h1>
      <QuizContexts.Provider value={{ gameState, setGameState, score, setScore }}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "end" && <EndQuiz />}
      </QuizContexts.Provider>
    </div>
  );
}

export default App;
