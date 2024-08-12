// src/redux/quizSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentQuestionIndex: 0,
  score: 0,
  timer: 10,
  questions: [
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      answer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      answer: 'Mars',
    },
    {
      question: 'Who wrote "Romeo and Juliet"?',
      options: ['Mark Twain', 'Charles Dickens', 'William Shakespeare', 'Jane Austen'],
      answer: 'William Shakespeare',
    },
    {
      question: 'What is the smallest prime number?',
      options: ['0', '1', '2', '3'],
      answer: '2',
    },
  ],
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    answerQuestion: (state, action) => {
      const currentQuestion = state.questions[state.currentQuestionIndex];
      if (!currentQuestion) return;
      const isCorrect = currentQuestion.answer === action.payload;
      state.score += isCorrect ? 1 : 0;
      state.currentQuestionIndex += 1;
      state.timer = 10;
    },
    setTimer: (state, action) => {
      state.timer = action.payload;
    },
    reset: () => initialState,
  },
});

export const { answerQuestion, setTimer, reset } = quizSlice.actions;
export default quizSlice.reducer;
