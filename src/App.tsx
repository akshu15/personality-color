// src/App.tsx

import { useState } from 'react';
import { IntroScreen } from './components/IntroScreen';
import { QuizScreen } from './components/QuizScreen';
import { ResultsScreen } from './components/ResultsScreen';
import { questions } from './data/questions';
import type { Stage, Scores, Answer } from './types';

function App() {
  const [stage, setStage] = useState<Stage>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Scores>({
    red: 0,
    yellow: 0,
    green: 0,
    blue: 0
  });

  const handleStart = () => {
    setStage('quiz');
  };

  const handleAnswer = (answer: Answer) => {
    const newScores: Scores = {
      red: scores.red + answer.red,
      yellow: scores.yellow + answer.yellow,
      green: scores.green + answer.green,
      blue: scores.blue + answer.blue
    };
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setStage('results');
    }
  };

  const handleReset = () => {
    setStage('intro');
    setCurrentQuestion(0);
    setScores({ red: 0, yellow: 0, green: 0, blue: 0 });
  };

  return (
    <>
      {stage === 'intro' && <IntroScreen onStart={handleStart} />}
      {stage === 'quiz' && (
        <QuizScreen
          questions={questions}
          currentQuestion={currentQuestion}
          onAnswer={handleAnswer}
        />
      )}
      {stage === 'results' && (
        <ResultsScreen scores={scores} onReset={handleReset} />
      )}
    </>
  );
}

export default App;