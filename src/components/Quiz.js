import React, { useState, useContext } from "react";
import { Question } from "../Helpers/QuestionBank";
import { QuizContexts } from "../Helpers/Contexts";

function Quiz() {
  const { score, setScore, setGameState } = useContext(QuizContexts);

  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChoosen, setOptionChoosen] = useState("");

  const nextQuestion = () => {
    if (Question[currQuestion].answer == optionChoosen) {
      setScore(score + 1);
    }
    // alert(score);
    setCurrQuestion(currQuestion + 1);
  };

  const finishQuiz = () => {
    if (Question[currQuestion].answer == optionChoosen) {
      setScore(score + 1);
    }
    setGameState("end");
  };

  return (
    <div className="Quiz">
      <h1>{Question[currQuestion].prompt}</h1>
      <div className="option">
        <button onClick={() => setOptionChoosen("A")}>{Question[currQuestion].optionA}</button>
        <button onClick={() => setOptionChoosen("B")}>{Question[currQuestion].optionB}</button>
        <button onClick={() => setOptionChoosen("C")}>{Question[currQuestion].optionC}</button>
      </div>

      {currQuestion == Question.length - 1 ? (
        <button onClick={finishQuiz}>Finish the Quiz</button>
      ) : (
        <button onClick={nextQuestion} className="next">
          Next Question
        </button>
      )}
    </div>
  );
}

export default Quiz;
