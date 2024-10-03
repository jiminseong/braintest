import { useSurveyStore } from '../../../store/store';
import typeMapping from './typeMapping';

const calculateResultType = (): string => {
    const { answers } = useSurveyStore.getState();
    const typeScores: { [key: string]: number } = {
        균형: 0,
        즉흥: 0,
        집요: 0,
        예민: 0,
        신중: 0,
    };

    // 보여지는 점수와 수집되는 점수의 맵핑 (5점이 보여지는 점수일 경우 1점이 수집되는 점수로 변환)
    const scoreMapping = [5, 4, 3, 2, 1];

    // 각 답변을 기반으로 타입 점수 계산
    answers.forEach((answer, index) => {
        const collectedScore = scoreMapping[answer - 1]; // 보여지는 점수를 수집되는 점수로 변환
        const { typePositive, typeNegative } = typeMapping[index];

        // typePositive에 해당하는 타입의 점수에 더해줌
        typePositive.forEach((type) => {
            typeScores[type] += collectedScore;
        });

        // typeNegative에 해당하는 타입의 점수에 빼줌
        typeNegative.forEach((type) => {
            typeScores[type] -= collectedScore;
        });
    });

    // 타입의 점수를 내림차순으로 정렬
    const sortedScores = Object.entries(typeScores).sort((a, b) => b[1] - a[1]);

    // 타입 조합 계산
    const resultType = determineComplexType(sortedScores);

    return resultType;
};

// 복합 타입 계산 로직 구현
const determineComplexType = (sortedScores: [string, number][]): string => {
    // 각 타입의 점수 순서에 따라 복합 타입을 결정합니다.
    // 예를 들어 가장 높은 타입과 두 번째로 높은 타입을 조합하여 복합 타입을 만듦
    const topTypes = sortedScores.slice(0, 4).map((score) => score[0]);

    // 복합 타입 결정 (예시 로직, 상세한 알고리즘 필요)
    if (
        topTypes.includes('즉흥') &&
        topTypes.includes('집요') &&
        topTypes.includes('예민') &&
        topTypes.includes('신중')
    ) {
        return '즉흥+집요+예민+신중형';
    } else if (topTypes.includes('즉흥') && topTypes.includes('집요') && topTypes.includes('예민')) {
        return '즉흥+집요+예민형';
    } else if (topTypes.includes('즉흥') && topTypes.includes('집요')) {
        return '즉흥+집요형';
    } else if (topTypes.includes('집요') && topTypes.includes('예민')) {
        return '집요+예민형';
    } else if (topTypes.includes('예민') && topTypes.includes('신중')) {
        return '예민+신중형';
    } else {
        return `${topTypes[0]}형`; // 가장 높은 타입 반환
    }
};

export default calculateResultType;
