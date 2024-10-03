import React, { useState } from "react";
import Logo from "./assets/logo.svg"; // Replace with your actual logo path
import QuestionCard from "./components/QuestionCard";
import { postAnswers } from "./utils/BackendService";

export type Answer = "Yes" | "No";

const questions: string[] = [
  "Do you have any allergies?",
  "Are you currently on medication?",
  "Do you have any chronic diseases?",
  "Have you had any surgeries?",
  "Do you smoke or drink?",
];

const App: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const handleAnswer = (answer: Answer) => {
    setAnswers([...answers, answer]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      postAnswers([...answers, answer]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-amber-800 text-white p-5">
        <div className="container mx-auto flex justify-center">
          <img src={Logo} alt="Brand Logo" className="h-12" />
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center">
        {currentQuestionIndex < questions.length ? (
          <QuestionCard
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
          />
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold">
              Thank you for completing the survey!
            </h2>
          </div>
        )}
      </main>

      <footer className="bg-gray-200 p-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-center md:text-left">
            <p>Column 1 Content</p>
          </div>
          <div className="text-center md:text-right">
            <p>Column 2 Content</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
