// src/data/colorInfo.ts

import type { ColorInfo } from '../types';

export const colorInfo: Record<string, ColorInfo> = {
  red: {
    name: "Red",
    traits: "Decisive, competitive, strong-willed, determined",
    strengths: "Natural leaders, goal-oriented, confident",
    description: "Red personalities are direct, ambitious, and results-driven. They love challenges and taking charge.",
    color: "bg-red-500"
  },
  yellow: {
    name: "Yellow",
    traits: "Optimistic, enthusiastic, creative, social",
    strengths: "Great communicators, inspiring, innovative",
    description: "Yellow personalities are outgoing, spontaneous, and love being the center of attention. They bring energy to every room.",
    color: "bg-yellow-400"
  },
  green: {
    name: "Green",
    traits: "Patient, relaxed, supportive, stable",
    strengths: "Great listeners, loyal, diplomatic",
    description: "Green personalities are calm, empathetic, and avoid conflict. They value harmony and strong relationships.",
    color: "bg-green-500"
  },
  blue: {
    name: "Blue",
    traits: "Analytical, precise, deliberate, systematic",
    strengths: "Detail-oriented, organized, quality-focused",
    description: "Blue personalities are logical, perfectionists, and love structure. They prefer facts over feelings.",
    color: "bg-blue-500"
  }
};