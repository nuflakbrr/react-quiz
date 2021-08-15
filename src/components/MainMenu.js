import React, { useContext } from "react";
import { QuizContexts } from "../Helpers/Contexts";
import "../styles/App.css";

function MainMenu() {
  const { setGameState } = useContext(QuizContexts);

  return (
    <div className="Menu">
      {/* <label htmlFor="name">Input Your Name:</label>
      <input type="text" id="name" name="name" placeholder="Your Name" title="Input Your Name" required /> */}

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
