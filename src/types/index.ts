// src/types/index.ts

export interface Answer {
  text: string;
  red: number;
  yellow: number;
  green: number;
  blue: number;
}

export interface Question {
  q: string;
  answers: Answer[];
}

export interface Scores {
  red: number;
  yellow: number;
  green: number;
  blue: number;
}

export type ColorType = 'red' | 'yellow' | 'green' | 'blue';

export interface ColorInfo {
  name: string;
  traits: string;
  strengths: string;
  description: string;
  color: string;
}

export type Stage = 'intro' | 'quiz' | 'results';