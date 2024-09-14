import { create } from 'zustand';
import { BrainTestType } from './types';

export const useSurveyStore = create<BrainTestType>((set) => ({
    name: '', // 사용자의 초기 이름
    surveyQuestions: [], // 설문 질문 목록 (초기값은 빈 배열)

    // 이름을 설정하는 함수
    setName: (newName: string) => {
        set(() => ({ name: newName }));
    },

    // 설문 질문 추가하는 함수
    addQuestion: (question: string) => {
        set((state) => ({
            surveyQuestions: [...state.surveyQuestions, { question, answer: null }],
        }));
    },

    // 특정 설문 질문에 대한 답변을 설정하는 함수
    setAnswer: (index: number, answer: number) => {
        set((state) => {
            const updatedQuestions = [...state.surveyQuestions];
            updatedQuestions[index] = { ...updatedQuestions[index], answer };
            return { surveyQuestions: updatedQuestions };
        });
    },
}));
