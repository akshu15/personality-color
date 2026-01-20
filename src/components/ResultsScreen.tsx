// src/components/ResultsScreen.tsx

import React from 'react';
import { RotateCcw } from 'lucide-react';
import type { Scores, ColorType } from '../types';
import { colorInfo } from '../data/colorInfo';

interface ResultsScreenProps {
  scores: Scores;
  onReset: () => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({ scores, onReset }) => {
  const getResults = () => {
    const sorted = Object.entries(scores)
      .sort(([, a], [, b]) => b - a)
      .map(([color]) => color as ColorType);
    
    return {
      primary: sorted[0],
      secondary: sorted[1]
    };
  };

  const { primary, secondary } = getResults();
  const total = scores.red + scores.yellow + scores.green + scores.blue;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
            Your Personality Colors
          </h1>
          <p className="text-center text-sm text-gray-500 mb-8">
            Inspired by "Surrounded by Idiots" by Thomas Erikson
          </p>

          <div className="space-y-6 mb-8">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-700">Primary Color</h2>
              <div className={`${colorInfo[primary].color} text-white rounded-xl p-6 shadow-lg`}>
                <h3 className="text-2xl font-bold mb-2">{colorInfo[primary].name}</h3>
                <p className="mb-2"><strong>Traits:</strong> {colorInfo[primary].traits}</p>
                <p><strong>Strengths:</strong> {colorInfo[primary].strengths}</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-700">Secondary Color</h2>
              <div className={`${colorInfo[secondary].color} text-white rounded-xl p-6 shadow-lg opacity-90`}>
                <h3 className="text-2xl font-bold mb-2">{colorInfo[secondary].name}</h3>
                <p className="mb-2"><strong>Traits:</strong> {colorInfo[secondary].traits}</p>
                <p><strong>Strengths:</strong> {colorInfo[secondary].strengths}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-6 mb-6">
            <h3 className="font-semibold mb-4 text-gray-700">Your Color Breakdown</h3>
            <div className="space-y-3">
              {Object.entries(scores).map(([color, score]) => (
                <div key={color}>
                  <div className="flex justify-between mb-1">
                    <span className="capitalize font-medium text-gray-700">{color}</span>
                    <span className="text-gray-600">{Math.round((score / total) * 100)}%</span>
                  </div>
                  <div className="bg-gray-300 rounded-full h-3">
                    <div
                      className={`${colorInfo[color as ColorType].color} h-3 rounded-full transition-all`}
                      style={{ width: `${(score / total) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={onReset}
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all flex items-center justify-center gap-2"
          >
            <RotateCcw size={20} />
            Take Quiz Again
          </button>
        </div>
      </div>
    </div>
  );
};