import { createSlice } from "@reduxjs/toolkit";
import { quizzes } from "../../Database";
import { sys } from "typescript";
const initialState = {
    quizzes : quizzes,
};
const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    addQuiz: (state, { payload: quiz }) => {
      const addQuiz: any = {
        _id: new Date().getTime().toString(),
        title: quiz.title,
        course: quiz.course,
        description: quiz.description,
        dueDate: quiz.dueDate,
        points: quiz.points,
        notAvailableUntil: quiz.notAvailableUntil
      };
      state.quizzes = [...state.quizzes, addQuiz] as any;
      console.log(quiz);
    },
    deleteQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.filter(
        (q: any) => q._id !== quizId);
    },
    updateQuiz: (state, { payload: quiz }) => {
      state.quizzes = state.quizzes.map((q: any) =>
        q._id === quiz._id ? quiz : q
      ) as any;
    },
    editQuiz: (state, { payload: quizId }) => {
      state.quizzes = state.quizzes.map((q: any) =>
        q._id === quizId ? { ...q, editing: true } : q
      ) as any;
    },
  },
});
export const { addQuiz, deleteQuiz, updateQuiz, editQuiz } =
quizzesSlice.actions;
export default quizzesSlice.reducer;