import { useSurveyStore } from '../../../store/store';
import { determineComplexType } from './determineComplexType';
import questionTypeMapping from './questionMapping';

const calculateResultType = (): number => {
    const { answers } = useSurveyStore.getState();

    // 각각 부족한 영역 점수를 수집
    const breakScores: { [key: string]: number } = {
        Dopamine: 0,
        Serotonin: 0,
        VitaminD: 0,
        GABA: 0,
    };

    // 타입 인덱스를 문자열로 매핑
    const typeMapping = ['Dopamine', 'Serotonin', 'VitaminD', 'GABA'];

    // 각 답변을 기반으로 타입 점수 계산
    answers.forEach((answer, index) => {
        const breakType = questionTypeMapping.find((mapping) => mapping.questionIndex === index + 1);

        if (breakType) {
            // breakPointByHigh => answer 그대로 해당 타입에 점수 추가
            if (breakType.breakPointByHigh) {
                breakType.breakPointByHigh.forEach((typeIndex) => {
                    const type = typeMapping[typeIndex];
                    breakScores[type] += answer;
                });
            }

            // breakPointByLow => (6 - answer) 해당 타입에 점수 추가
            if (breakType.breakPointByLow) {
                breakType.breakPointByLow.forEach((typeIndex) => {
                    const type = typeMapping[typeIndex];
                    breakScores[type] += 6 - answer;
                });
            }

            // 각 점수별 추가 로직
            const scoreMapping = [
                { score: 5, types: breakType.five },
                { score: 4, types: breakType.four },
                { score: 3, types: breakType.three },
                { score: 2, types: breakType.two },
                { score: 1, types: breakType.one },
            ];

            scoreMapping.forEach(({ score, types }) => {
                if (answer === score && types) {
                    types.forEach((typeIndex) => {
                        // typeIndex가 null인 경우, 모든 점수 -1
                        if (typeIndex === null) {
                            Object.keys(breakScores).forEach((scoreType) => {
                                breakScores[scoreType] -= 1;
                            });
                        } else {
                            const type = typeMapping[typeIndex];
                            breakScores[type] += answer;
                        }
                    });
                }
            });
        }
    });

    console.log('합계점수:', breakScores);

    // 부족한 영역의 점수를 내림차순으로 정렬
    const sortedScores = Object.entries(breakScores).sort((a, b) => b[1] - a[1]);

    // 최종 타입 결정 (숫자 형식으로 결과 값)
    const resultType = determineComplexType(sortedScores);

    return resultType;
};

export default calculateResultType;
