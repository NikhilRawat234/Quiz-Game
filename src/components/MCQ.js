import React, { useState, useEffect } from "react";

const MCQ = ({ questionData, onAnswerSelected }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [result, setResult] = useState("");
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    // Reset showNext whenever the question changes
    setShowNext(false);
  }, [questionData]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    if (answer === questionData.correct_answer) {
      setResult("Correct");
    } else {
      setResult("Sorry");
    }
    setShowNext(true); // Show the "Next Question" button after selecting an answer
  };

  const handleNextQuestion = () => {
    setSelectedAnswer("");
    setResult("");
    setShowNext(false);
    onAnswerSelected(); // Call the onAnswerSelected callback from the App component
  };

  return (
    <div>
      <h3>Question: {decodeURIComponent(questionData.question)}</h3>
      {questionData.incorrect_answers.map((choice, index) => (
        <div key={index}>
          <label>
            <input
              type="radio"
              value={choice}
              checked={selectedAnswer === choice}
              onChange={() => handleAnswerSelect(choice)}
            />
            {decodeURIComponent(choice)}
          </label>
        </div>
      ))}
      <label>
        <input
          type="radio"
          value={questionData.correct_answer}
          checked={selectedAnswer === questionData.correct_answer}
          onChange={() => handleAnswerSelect(questionData.correct_answer)}
        />
        {decodeURIComponent(questionData.correct_answer)}
      </label>
      <p>{result}</p>
      {showNext && (
        <button onClick={handleNextQuestion}>Next Question</button>
      )}
    </div>
  );
};

export default MCQ;
