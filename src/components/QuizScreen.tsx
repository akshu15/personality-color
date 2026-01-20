// src/components/QuizScreen.tsx

import React from 'react';
import { Circle } from 'lucide-react';
import type { Answer, Question } from '../types';

interface QuizScreenProps {
  questions: Question[];
  currentQuestion: number;
  onAnswer: (answer: Answer) => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({ 
  questions, 
  currentQuestion, 
  onAnswer 
}) => {
  const current = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Personality Color Quiz</h1>
            <span className="text-sm text-gray-500">
              Question {currentQuestion + 1} of {questions.length}
            </span>
          </div>

          <p className="text-xs text-center text-gray-400 mb-6">
            Inspired by "Surrounded by Idiots" by Thomas Erikson
          </p>

          <div className="mb-4">
            <div className="bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-6 text-gray-700">
              {current.q}
            </h2>

            <div className="space-y-3">
              {current.answers.map((answer, i) => (
                <button
                  key={i}
                  onClick={() => onAnswer(answer)}
                  className="w-full text-left p-4 rounded-lg border-2 border-gray-200 hover:border-purple-400 hover:bg-purple-50 transition-all"
                >
                  {answer.text}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <div className="flex items-center gap-2">
              <Circle className="text-red-500" fill="currentColor" size={16} />
              <span className="text-xs text-gray-600">Red</span>
            </div>
            <div className="flex items-center gap-2">
              <Circle className="text-yellow-400" fill="currentColor" size={16} />
              <span className="text-xs text-gray-600">Yellow</span>
            </div>
            <div className="flex items-center gap-2">
              <Circle className="text-green-500" fill="currentColor" size={16} />
              <span className="text-xs text-gray-600">Green</span>
            </div>
            <div className="flex items-center gap-2">
              <Circle className="text-blue-500" fill="currentColor" size={16} />
              <span className="text-xs text-gray-600">Blue</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};