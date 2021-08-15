import React, { useContext } from "react";
import { QuizContexts } from "../Helpers/Contexts";
import { Question } from "../Helpers/QuestionBank";
import "../styles/App.css";

function EndQuiz() {
  const { score, setScore, setGameState } = useContext(QuizContexts);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="EndScreen">
      <h1>Quiz has Finished</h1>
      <p>Congratulations you have finished the quiz!</p>

      <br />
      <br />

      <h2>And this is your score</h2>
      <h3>
        {score} / {Question.length}
      </h3>
      <button onClick={restartQuiz}>Restart the quiz</button>
    </div>
  );
}

export default EndQuiz;
