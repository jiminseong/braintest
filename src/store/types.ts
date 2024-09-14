export interface SurveyQuestion {
    question: string; // 질문 내용
    answer: number | null; // 사용자의 답변 (1~5의 값 또는 아직 선택되지 않은 경우 null)
}

export interface BrainTestType {
    name: string; // 사용자의 이름
    surveyQuestions: SurveyQuestion[]; // 설문 질문과 답변 목록
    setName: (newName: string) => void; // 이름 설정 함수
    setAnswer: (index: number, answer: number) => void; // 설문 답변 설정 함수
    addQuestion: (question: string) => void; // 새로운 질문 추가 함수
}
