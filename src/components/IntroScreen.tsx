// src/components/IntroScreen.tsx

import React from 'react';
import { Circle, ArrowRight } from 'lucide-react';
import { colorInfo } from '../data/colorInfo';

interface IntroScreenProps {
  onStart: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-center mb-3 text-gray-800">
            Discover Your Personality Colors
          </h1>
          <p className="text-center text-gray-600 mb-8 italic">
            Inspired by "Surrounded by Idiots" by Thomas Erikson
          </p>

          <div className="mb-10">
            <p className="text-lg text-gray-700 mb-6 text-center">
              This fun quiz will reveal your primary and secondary personality colors based on the four-color behavioral model. Each color represents a distinct personality type:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Circle className="text-red-500" fill="currentColor" size={32} />
                <h3 className="text-2xl font-bold text-red-700">Red</h3>
              </div>
              <p className="text-gray-700">{colorInfo.red.description}</p>
              <p className="text-sm text-red-600 mt-2 font-semibold">
                Keywords: Competitive, Direct, Decisive
              </p>
            </div>

            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Circle className="text-yellow-500" fill="currentColor" size={32} />
                <h3 className="text-2xl font-bold text-yellow-700">Yellow</h3>
              </div>
              <p className="text-gray-700">{colorInfo.yellow.description}</p>
              <p className="text-sm text-yellow-600 mt-2 font-semibold">
                Keywords: Enthusiastic, Social, Creative
              </p>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Circle className="text-green-500" fill="currentColor" size={32} />
                <h3 className="text-2xl font-bold text-green-700">Green</h3>
              </div>
              <p className="text-gray-700">{colorInfo.green.description}</p>
              <p className="text-sm text-green-600 mt-2 font-semibold">
                Keywords: Patient, Supportive, Harmonious
              </p>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Circle className="text-blue-500" fill="currentColor" size={32} />
                <h3 className="text-2xl font-bold text-blue-700">Blue</h3>
              </div>
              <p className="text-gray-700">{colorInfo.blue.description}</p>
              <p className="text-sm text-blue-600 mt-2 font-semibold">
                Keywords: Analytical, Precise, Systematic
              </p>
            </div>
          </div>

          <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-purple-900 mb-2">How it works:</h3>
            <ul className="text-gray-700 space-y-1">
              <li>• Answer 10 questions about your preferences and behaviors</li>
              <li>• Your responses will determine your color profile</li>
              <li>• Discover your primary and secondary personality colors</li>
              <li>• Most people are a blend of multiple colors!</li>
            </ul>
          </div>

          <button
            onClick={onStart}
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-4 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-blue-600 transition-all flex items-center justify-center gap-3 shadow-lg"
          >
            Start the Quiz
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};