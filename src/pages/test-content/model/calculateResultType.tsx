import { useSurveyStore } from '../../../store/store';
import { determineComplexType } from './determineComplexType';
import typeMapping from './typeMapping';

const calculateResultType = (): number => {
    const { answers } = useSurveyStore.getState();

    const typeScores: { [key: string]: number } = {
        균형: 0,
        즉흥: 0,
        집요: 0,
        예민: 0,
        신중: 0,
    };

    // 각 답변 점수에 대해 수집된 점수 변환
    const scoreMapping = [5, 4, 3, 2, 1];

    // 각 답변을 기반으로 타입 점수 계산
    answers.forEach((answer, index) => {
        const collectedScore = scoreMapping[answer - 1]; // 보여지는 점수를 수집되는 점수로 변환
        const { typePositive, typeNegative } = typeMapping[index];

        // typePositive에 해당하는 타입의 점수에 더해줌
        typePositive.forEach((type) => {
            typeScores[type] += collectedScore;
        });

        // typeNegative에 해당하는 타입의 점수에 빼줌 (0 이하로 떨어지지 않도록 함)
        // 부정 점수 계산
        typeNegative.forEach((type) => {
            typeScores[type] -= collectedScore; // collectedScore만큼 감소
            typeScores[type] = Math.max(0, typeScores[type]); // 0 이하로 떨어지지 않도록 조정
        });
    });

    // 타입의 점수를 내림차순으로 정렬
    const sortedScores = Object.entries(typeScores).sort((a, b) => b[1] - a[1]);

    // 타입 조합 계산
    const resultType = determineComplexType(sortedScores);

    return resultType;
};

export default calculateResultType;
