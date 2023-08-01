import React, { useState } from "react";
import questions from "./data/questions"; // Import the provided questions data
import MCQ from "./components/MCQ";
import TopBar from './components/TopBar'; // Import the TopBar component
import ProgressBar from "./components/ProgressBar";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionsAttempted, setQuestionsAttempted] = useState(0);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setQuestionsAttempted((prev) => prev + 1);
  };

  const currentQuestionData = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const progress = questionsAttempted / totalQuestions;

  // Calculate the number of stars for the difficulty level
  const difficultyStars = (difficulty) => {
    const starCount = ["easy", "medium", "hard"].indexOf(difficulty) + 1;
    return Array(starCount).fill(<span>⭐</span>);
  };

  return (
    <div>
      <ProgressBar progress={progress} />
      <TopBar
        questionNumber={currentQuestionIndex + 1}
        stars={difficultyStars(currentQuestionData.difficulty)}
      />
      {currentQuestionData && (
        <MCQ
          questionData={currentQuestionData}
          onAnswerSelected={() => handleNextQuestion()} // Pass a callback to handleNextQuestion()
        />
      )}
    </div>
  );
}

export default App;
