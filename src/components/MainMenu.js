import React, { useContext } from "react";
import { QuizContexts } from "../Helpers/Contexts";
import "../App.css";

function MainMenu() {
  const { gameState, setGameState } = useContext(QuizContexts);

  return (
    <div className="Menu">
      <label for="name">Input Your Name:</label>
      <input type="text" id="name" name="name" placeholder="Your Name" title="Input Your Name" required />

      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default MainMenu;
