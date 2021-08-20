import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>React Quiz App</h2>

          {/* amount */}
          <div className="form-control">
            <label htmlFor="amount">number of questions</label>
            <input type="number" name="amount" id="amount" value={quiz.amount} onChange={handleChange} className="form-input" min={1} max={50} />
          </div>

          {/* category */}
          <div className="form-control">
            <label htmlFor="category">category</label>
            <select name="category" id="category" className="form-input" value={quiz.category} onChange={handleChange}>
              <option value="select" disabled selected>
                select the category
              </option>
              <option value="cartoon">entertainment: cartoon & animations</option>
              <option value="comics">entertainment: comics</option>
              <option value="film">entertainment: film</option>
              <option value="japanese">entertainment: japanese anime & manga</option>
              <option value="music">entertainment: music</option>
              <option value="general">general knowledge</option>
              <option value="geography">geography</option>
              <option value="history">history</option>
              <option value="computers">science: computers</option>
              <option value="mathematics">science: mathematics</option>
              <option value="nature">science & nature</option>
              <option value="sports">sports</option>
              <option value="games">video games</option>
            </select>
          </div>

          {/* difficulty */}
          <div className="form-control">
            <label htmlFor="difficulty">select difficulty</label>
            <select name="difficulty" id="difficulty" className="form-input" value={quiz.difficulty} onChange={handleChange}>
              <option value="select" disabled selected>
                select the difficulty
              </option>
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
          {error && <p className="error">can't generate questions, please try different options</p>}
          <button type="submit" onClick={handleSubmit} className="submit-btn">
            start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
