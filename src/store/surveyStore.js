import { create } from "zustand";
import { SURVEY_QUESTIONS } from "../data/surveyQuestions.js";
import { buildCareRecommendation } from "../utils/resultEngine.js";

const STORAGE_KEY = "carepilot-survey";

export const useSurveyStore = create((set, get) => {
  // ---------------------------------------
  // Load saved state from localStorage
  // ---------------------------------------
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");

  return {
    // ---------------------------------------
    // Initial state (load saved data if exists)
    // ---------------------------------------
    currentIndex: saved.currentIndex ?? 0,
    answers: saved.answers ?? {},
    result: saved.result ?? null,
    lead: saved.lead ?? null,

    // ---------------------------------------
    // Save entire survey state to localStorage
    // ---------------------------------------
    saveState: () => {
      const state = get();
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          currentIndex: state.currentIndex,
          answers: state.answers,
          result: state.result,
          lead: state.lead,
        })
      );
    },

    // ---------------------------------------
    // Set answer for a question
    // ---------------------------------------
    setAnswer: (questionId, value) => {
      set((state) => ({
        answers: { ...state.answers, [questionId]: value },
      }));
      get().saveState();
    },

    // ---------------------------------------
    // Next question
    // ---------------------------------------
    next: () => {
      set((state) => ({
        currentIndex: Math.min(
          state.currentIndex + 1,
          SURVEY_QUESTIONS.length - 1
        ),
      }));
      get().saveState();
    },

    // ---------------------------------------
    // Previous question
    // ---------------------------------------
    back: () => {
      set((state) => ({
        currentIndex: Math.max(state.currentIndex - 1, 0),
      }));
      get().saveState();
    },

    // ---------------------------------------
    // Compute results from all answers
    // ---------------------------------------
    computeResult: () => {
      const { answers } = get();
      const resultData = buildCareRecommendation(answers);
      set({ result: resultData });
      get().saveState();
    },

    // ---------------------------------------
    // Store lead details
    // ---------------------------------------
    setLead: (leadData) => {
      set({ lead: leadData });
      get().saveState();
    },

    // ---------------------------------------
    // Reset everything and clear localStorage
    // ---------------------------------------
    reset: () => {
      set({
        currentIndex: 0,
        answers: {},
        result: null,
        lead: null,
      });
      localStorage.removeItem(STORAGE_KEY);
    },
  };
});
