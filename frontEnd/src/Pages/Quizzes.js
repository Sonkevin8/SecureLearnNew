import React, { useState } from 'react';

const Quizzes = () => {
    const questions =[
        {
            question: "what is cyber attack? ", 
            otpions: ["Phishing", "Cold-calling", "Encryption method"], 
            answer: "Phishing",
        },

        {
            question: "How to perform phishing?", 
            options: ["Malicious link in the email", "Scam call, ie asking you to provide your personal information", "All of above"]
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