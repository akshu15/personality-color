// src/data/questions.ts

import type { Question } from '../types';

export const questions: Question[] = [
  {
    q: "At a party, you typically...",
    answers: [
      { text: "Work the room and talk to everyone", red: 0, yellow: 3, green: 0, blue: 0 },
      { text: "Have deep conversations with a few people", red: 0, yellow: 0, green: 2, blue: 2 },
      { text: "Take charge of organizing activities", red: 3, yellow: 1, green: 0, blue: 0 },
      { text: "Prefer to observe and listen", red: 0, yellow: 0, green: 1, blue: 3 }
    ]
  },
  {
    q: "When making decisions, you prioritize...",
    answers: [
      { text: "Quick action and results", red: 3, yellow: 0, green: 0, blue: 0 },
      { text: "How it affects people's feelings", red: 0, yellow: 1, green: 3, blue: 0 },
      { text: "Data and logical analysis", red: 0, yellow: 0, green: 0, blue: 3 },
      { text: "Exciting possibilities and fun", red: 0, yellow: 3, green: 0, blue: 1 }
    ]
  },
  {
    q: "Your workspace is usually...",
    answers: [
      { text: "Organized with everything in its place", red: 1, yellow: 0, green: 1, blue: 3 },
      { text: "Minimalist and efficient", red: 3, yellow: 0, green: 0, blue: 1 },
      { text: "Colorful with personal touches", red: 0, yellow: 3, green: 2, blue: 0 },
      { text: "Comfortable and welcoming", red: 0, yellow: 1, green: 3, blue: 0 }
    ]
  },
  {
    q: "When someone criticizes your work, you...",
    answers: [
      { text: "Defend your position strongly", red: 3, yellow: 0, green: 0, blue: 0 },
      { text: "Feel hurt but don't show it", red: 0, yellow: 0, green: 3, blue: 1 },
      { text: "Analyze if they have valid points", red: 0, yellow: 0, green: 0, blue: 3 },
      { text: "Try to lighten the mood with humor", red: 0, yellow: 3, green: 1, blue: 0 }
    ]
  },
  {
    q: "In a team project, you're most likely to...",
    answers: [
      { text: "Lead and delegate tasks", red: 3, yellow: 1, green: 0, blue: 0 },
      { text: "Brainstorm creative ideas", red: 0, yellow: 3, green: 0, blue: 1 },
      { text: "Ensure everyone feels heard", red: 0, yellow: 0, green: 3, blue: 0 },
      { text: "Handle the details and planning", red: 0, yellow: 0, green: 1, blue: 3 }
    ]
  },
  {
    q: "You're most energized by...",
    answers: [
      { text: "Achieving goals and winning", red: 3, yellow: 1, green: 0, blue: 0 },
      { text: "Social interaction and fun", red: 0, yellow: 3, green: 1, blue: 0 },
      { text: "Helping others and harmony", red: 0, yellow: 0, green: 3, blue: 0 },
      { text: "Learning and understanding", red: 0, yellow: 0, green: 0, blue: 3 }
    ]
  },
  {
    q: "When facing conflict, you...",
    answers: [
      { text: "Address it head-on immediately", red: 3, yellow: 0, green: 0, blue: 1 },
      { text: "Try to avoid it if possible", red: 0, yellow: 1, green: 3, blue: 0 },
      { text: "Seek compromise and understanding", red: 0, yellow: 0, green: 2, blue: 2 },
      { text: "Make jokes to diffuse tension", red: 0, yellow: 3, green: 0, blue: 0 }
    ]
  },
  {
    q: "Your ideal vacation involves...",
    answers: [
      { text: "Adventure sports and challenges", red: 3, yellow: 1, green: 0, blue: 0 },
      { text: "Meeting new people and experiences", red: 0, yellow: 3, green: 1, blue: 0 },
      { text: "Relaxing with loved ones", red: 0, yellow: 0, green: 3, blue: 0 },
      { text: "Visiting museums and learning", red: 0, yellow: 0, green: 0, blue: 3 }
    ]
  },
  {
    q: "People would describe you as...",
    answers: [
      { text: "Confident and driven", red: 3, yellow: 0, green: 0, blue: 0 },
      { text: "Enthusiastic and optimistic", red: 0, yellow: 3, green: 0, blue: 0 },
      { text: "Patient and supportive", red: 0, yellow: 0, green: 3, blue: 0 },
      { text: "Thoughtful and precise", red: 0, yellow: 0, green: 0, blue: 3 }
    ]
  },
  {
    q: "You prefer communication that is...",
    answers: [
      { text: "Direct and to the point", red: 3, yellow: 0, green: 0, blue: 1 },
      { text: "Energetic and expressive", red: 0, yellow: 3, green: 0, blue: 0 },
      { text: "Warm and personal", red: 0, yellow: 0, green: 3, blue: 0 },
      { text: "Detailed and accurate", red: 0, yellow: 0, green: 0, blue: 3 }
    ]
  }
];