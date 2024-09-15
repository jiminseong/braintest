import create from 'zustand';
import { SurveyState } from './types';

export const useSurveyStore = create<SurveyState>((set) => ({
    answers: {},
    saveAnswer: (questionIndex: number, answer: number) =>
        set((state) => ({
            answers: {
                ...state.answers,
                [questionIndex]: answer,
            },
        })),
}));
