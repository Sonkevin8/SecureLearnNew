import React, { useState } from 'react';

const Quizzes = () => {
  const questions = [
    {
      question: "What does a strong password include?",
      options: ["Numbers", "Symbols", "Uppercase letters", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "What is phishing?",
      options: ["A type of cyber attack", "A harmless email", "A computer virus", "An encryption method"],
      answer: "A type of cyber attack",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      <h1>Cybersecurity Quizzes</h1>
      {showScore ? (
        <div>
          <h2>Your Score: {score}/{questions.length}</h2>
        </div>
      ) : (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswerOptionClick(option)}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Quizzes;
