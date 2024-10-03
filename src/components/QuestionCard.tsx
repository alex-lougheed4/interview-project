import React from "react";

interface QuestionCardProps {
  question: string;
  onAnswer: (answer: "Yes" | "No") => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer }) => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg text-center">
      <h2 className="text-lg font-semibold mb-4">{question}</h2>
      <div className="space-x-4">
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => onAnswer("Yes")}
        >
          Yes
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => onAnswer("No")}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default QuestionCard;
