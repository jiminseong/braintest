import { useSurveyStore } from '../store/store';
import calculateResultType from '../pages/test-content/model/calculateResultType';

// 테스트 케이스 준비 전 초기화
beforeEach(() => {
    useSurveyStore.setState({ answers: [] });
});

// 16가지 유형을 위한 다양한 테스트 케이스
const testCases = [
    {
        description: '균형',
        answers: Array(38).fill(2), // 모든 영역에 대한 점수가 고르게 분포
        expectedType: 1,
    },
    {
        description: '도비',
        answers: [
            5, 5, 4, 4, 2, 5, 5, 1, 1, 2, 2, 3, 2, 1, 1, 4, 1, 2, 3, 2, 3, 1, 1, 2, 1, 2, 1, 3, 3, 2, 1, 1, 2, 1, 1, 2,
            2, 2,
        ], // Dopamine 관련 질문에 높은 점수, 다른 영역에는 낮은 점수
        expectedType: 14,
    },
    {
        description: '도세',
        answers: [
            3, 2, 3, 2, 5, 4, 3, 5, 4, 3, 2, 2, 1, 1, 2, 2, 3, 2, 2, 3, 5, 5, 4, 5, 2, 3, 1, 2, 2, 1, 3, 2, 2, 1, 1, 2,
            3, 2,
        ], // Serotonin 관련 질문에 높은 점수, 다른 영역에는 낮은 점수
        expectedType: 6,
    },
    {
        description: '비',
        answers: [
            2, 2, 2, 3, 3, 3, 3, 2, 5, 5, 2, 5, 2, 1, 2, 2, 2, 5, 5, 5, 1, 2, 2, 2, 1, 2, 5, 4, 4, 3, 2, 1, 2, 1, 1, 2,
            2, 2,
        ], // VitaminD 관련 질문에 높은 점수, 다른 영역에는 낮은 점수
        expectedType: 4,
    },
    {
        description: '가',
        answers: [
            2, 1, 2, 2, 3, 2, 2, 2, 2, 2, 3, 2, 2, 1, 2, 2, 2, 2, 4, 5, 3, 2, 3, 2, 2, 3, 1, 1, 1, 3, 3, 5, 5, 5, 5, 5,
            3, 3,
        ], // GABA 관련 질문에 높은 점수, 다른 영역에는 낮은 점수
        expectedType: 5,
    },
    {
        description: '도세',
        answers: [
            5, 4, 5, 1, 4, 5, 5, 2, 2, 2, 1, 2, 3, 3, 2, 5, 2, 2, 2, 4, 4, 5, 5, 5, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 2, 2,
            2, 2,
        ], // Dopamine과 Serotonin이 모두 높은 점수
        expectedType: 6,
    },
    {
        description: '도비',
        answers: [
            5, 5, 5, 2, 3, 5, 4, 3, 5, 4, 2, 3, 3, 2, 2, 5, 2, 5, 5, 4, 3, 2, 2, 2, 2, 1, 5, 4, 4, 2, 2, 2, 2, 2, 1, 2,
            2, 2,
        ], // Dopamine과 VitaminD가 모두 높은 점수
        expectedType: 14,
    },
    {
        description: '도가',
        answers: [
            5, 5, 4, 2, 4, 4, 4, 1, 2, 2, 3, 3, 2, 2, 2, 5, 2, 2, 2, 5, 3, 2, 1, 2, 1, 2, 2, 1, 2, 2, 3, 5, 5, 5, 5, 4,
            3, 3,
        ], // Dopamine과 GABA가 모두 높은 점수
        expectedType: 13,
    },
    {
        description: '세비가',
        answers: [
            2, 2, 2, 2, 5, 4, 3, 5, 5, 4, 2, 5, 3, 1, 3, 2, 1, 5, 5, 5, 2, 5, 5, 5, 2, 2, 4, 4, 4, 1, 1, 2, 2, 2, 3, 2,
            2, 2,
        ], // Serotonin과 VitaminD가 모두 높은 점수
        expectedType: 9,
    },
    {
        description: '세가',
        answers: [
            2, 2, 3, 3, 5, 4, 3, 3, 2, 1, 2, 3, 3, 2, 2, 2, 2, 3, 4, 5, 3, 5, 5, 5, 2, 2, 2, 2, 2, 1, 1, 5, 5, 5, 5, 4,
            2, 2,
        ], // Serotonin과 GABA가 모두 높은 점수
        expectedType: 11,
    },
    {
        description: '비가',
        answers: [
            2, 2, 2, 2, 3, 3, 2, 1, 5, 5, 2, 5, 3, 1, 2, 2, 2, 5, 5, 5, 1, 2, 2, 3, 1, 1, 5, 4, 4, 2, 1, 5, 5, 5, 4, 5,
            2, 2,
        ], // VitaminD와 GABA가 모두 높은 점수
        expectedType: 16,
    },
    {
        description: '도세비',
        answers: [
            5, 5, 5, 2, 4, 4, 5, 2, 5, 5, 3, 5, 3, 2, 2, 5, 2, 5, 5, 5, 2, 5, 5, 5, 2, 2, 4, 4, 4, 2, 2, 2, 2, 2, 3, 3,
            3, 3,
        ], // Dopamine, Serotonin, VitaminD가 모두 높은 점수
        expectedType: 7,
    },
    {
        description: '도세가',
        answers: [
            5, 5, 5, 2, 4, 5, 4, 1, 3, 3, 2, 2, 3, 1, 3, 5, 2, 2, 4, 5, 3, 5, 5, 5, 2, 2, 2, 2, 2, 2, 1, 5, 5, 5, 5, 4,
            2, 2,
        ], // Dopamine, Serotonin, GABA가 모두 높은 점수
        expectedType: 13,
    },
    {
        description: '도세비가',
        answers: [
            5, 5, 5, 2, 4, 4, 5, 2, 5, 4, 3, 5, 3, 2, 2, 5, 2, 5, 5, 5, 1, 2, 2, 3, 1, 2, 5, 4, 4, 2, 2, 5, 5, 5, 5, 5,
            2, 2,
        ], // Dopamine, VitaminD, GABA가 모두 높은 점수
        expectedType: 8,
    },
    {
        description: '세비가',
        answers: [
            2, 2, 2, 2, 5, 4, 5, 2, 5, 4, 2, 5, 3, 1, 2, 2, 2, 5, 5, 5, 2, 5, 5, 5, 2, 2, 5, 4, 4, 2, 1, 5, 5, 5, 5, 5,
            2, 2,
        ], // Serotonin, VitaminD, GABA가 모두 높은 점수
        expectedType: 9,
    },
    {
        description: '도세비가',
        answers: Array(38).fill(4), // 모든 영역이 높은 점수
        expectedType: 8,
    },
];

// 테스트 실행 함수
describe('calculateResultType 테스트', () => {
    testCases.forEach(({ description, answers, expectedType }) => {
        it(description, () => {
            // Mock Zustand 상태 업데이트
            useSurveyStore.setState({ answers });

            // 결과 타입 계산
            const resultType = calculateResultType();

            // 테스트 확인
            expect(resultType).toBe(expectedType);
        });
    });
});
