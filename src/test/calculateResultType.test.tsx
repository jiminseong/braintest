import { useSurveyStore } from '../store/store';
import calculateResultType from '../pages/test-content/model/calculateResultType';

// 테스트 케이스 준비 전 초기화
beforeEach(() => {
    useSurveyStore.setState({ answers: [] });
});

// 모범답안 테스트 케이스
const testCases = [
    {
        description: '균형형 단일 유형',
        answers: [
            // 총 39개의 답변으로 조정
            5, 5, 4, 4, 5, 3, 4, 3, 3, 5, 3, 2, 2, 3, 3, 2, 2, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
            2, 2, 2,
        ],
        expectedType: '균형형',
    },
];

// 테스트 실행 함수
describe('calculateResultType 테스트', () => {
    testCases.forEach(({ description, answers, expectedType }) => {
        // Mock Zustand 상태 업데이트
        useSurveyStore.setState({ answers });

        // 결과 타입 계산
        const resultType = calculateResultType();

        console.log(`테스트: ${description}`);
        console.log(`예상 결과: ${expectedType}, 실제 결과: ${resultType}`);
        console.log('-----------------------');

        // 테스트 확인
        expect(resultType).toBe(expectedType);
    });
});
