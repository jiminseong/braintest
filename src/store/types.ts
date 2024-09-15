export interface SurveyState {
    answers: { [key: number]: number };
    saveAnswer: (questionIndex: number, answer: number) => void;
}
