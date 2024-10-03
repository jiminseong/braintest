import create from 'zustand';

interface SurveyState {
    name: string;
    result: string | null; // 결과 값을 저장
    answers: number[]; // 답변 저장 배열
    setName: (name: string) => void;
    setResult: (result: string) => void;
    saveAnswer: (questionIndex: number, answer: number) => void;
}

export const useSurveyStore = create<SurveyState>((set) => ({
    name: '',
    result: null,
    answers: [], // 초기 답변 배열
    setName: (name) => set({ name }),
    setResult: (result) => set({ result }),
    saveAnswer: (questionIndex, answer) =>
        set((state) => {
            const newAnswers = [...state.answers];
            newAnswers[questionIndex] = answer;
            return { answers: newAnswers };
        }),
}));
