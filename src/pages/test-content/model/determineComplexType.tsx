export const determineComplexType = (sortedScores: [string, number][]): number => {
    console.log('정렬된 점수:', sortedScores);

    // 점수 차이 확인을 위해 첫 번째부터 네 번째 점수 비교
    const [firstType, firstScore] = sortedScores[0];
    const [secondType, secondScore] = sortedScores[1];
    const [thirdType, thirdScore] = sortedScores[2];
    const fourthScore = sortedScores[3][1];

    // 1. 균형형 유형 판별 (가장 높은 점수와 네 번째 점수 차이가 10 이하인 경우)
    if (firstScore - fourthScore <= 12 && firstScore <= 30) {
        return 1;
    }

    // 점수 차이 계산
    const scoreDiff12 = firstScore - secondScore;
    const scoreDiff23 = secondScore - thirdScore;
    const scoreDiff34 = thirdScore - fourthScore;

    // 2. 복합 유형 판별 (4개 복합 유형)
    if (scoreDiff12 <= 6 && scoreDiff23 <= 6 && scoreDiff34 <= 6 && firstScore - fourthScore <= 8) {
        return 8; // 모든 유형의 점수가 비슷한 경우
    }

    // 3. 복합 유형 판별 (3개 복합 유형)
    if (scoreDiff12 <= 6 && scoreDiff23 <= 6 && scoreDiff34 > 5) {
        const typeCombination = [firstType, secondType, thirdType].sort().join('+'); // 알파벳 순 정렬
        return getThreeTypeCombinationResult(typeCombination);
    }

    // 4. 복합 유형 판별 (2개 복합 유형)
    if (scoreDiff12 <= 6 && scoreDiff23 > 5) {
        const typeCombination = [firstType, secondType].sort().join('+'); // 알파벳 순 정렬
        return getTwoTypeCombinationResult(typeCombination);
    }

    // 5. 단일 유형 판별 (가장 높은 점수가 두 번째 점수보다 4 이상 큰 경우)
    if (firstScore - secondScore >= 3) {
        switch (firstType) {
            case 'Dopamine':
                return 2;
            case 'Serotonin':
                return 3;
            case 'VitaminD':
                return 4;
            case 'GABA':
                return 5;
            default:
                break;
        }
    }

    // 6. 예외 처리: 모든 경우에 해당되지 않으면 균형형으로 반환
    return 8;
};

// 2개 복합 유형 결과를 반환하는 함수
const getTwoTypeCombinationResult = (combination: string): number => {
    // 알파벳 순 정렬된 조합이 아닌 모든 경우의 수를 추가하여 처리
    switch (combination) {
        case 'Dopamine+Serotonin':
        case 'Serotonin+Dopamine':
            return 6;
        case 'Dopamine+VitaminD':
        case 'VitaminD+Dopamine':
            return 14;
        case 'Dopamine+GABA':
        case 'GABA+Dopamine':
            return 13;
        case 'Serotonin+VitaminD':
        case 'VitaminD+Serotonin':
            return 10;
        case 'Serotonin+GABA':
        case 'GABA+Serotonin':
            return 11;
        case 'VitaminD+GABA':
        case 'GABA+VitaminD':
            return 16;
        default:
            return 0; // 예외 처리
    }
};

// 3개 복합 유형 결과를 반환하는 함수
const getThreeTypeCombinationResult = (combination: string): number => {
    // 알파벳 순 정렬된 조합이 아닌 모든 경우의 수를 추가하여 처리
    switch (combination) {
        case 'Dopamine+Serotonin+VitaminD':
        case 'Dopamine+VitaminD+Serotonin':
        case 'Serotonin+Dopamine+VitaminD':
        case 'Serotonin+VitaminD+Dopamine':
        case 'VitaminD+Dopamine+Serotonin':
        case 'VitaminD+Serotonin+Dopamine':
            return 7;
        case 'Dopamine+Serotonin+GABA':
        case 'Dopamine+GABA+Serotonin':
        case 'Serotonin+Dopamine+GABA':
        case 'Serotonin+GABA+Dopamine':
        case 'GABA+Dopamine+Serotonin':
        case 'GABA+Serotonin+Dopamine':
            return 12;
        case 'Dopamine+VitaminD+GABA':
        case 'Dopamine+GABA+VitaminD':
        case 'VitaminD+Dopamine+GABA':
        case 'VitaminD+GABA+Dopamine':
        case 'GABA+Dopamine+VitaminD':
        case 'GABA+VitaminD+Dopamine':
            return 15;
        case 'Serotonin+VitaminD+GABA':
        case 'Serotonin+GABA+VitaminD':
        case 'VitaminD+Serotonin+GABA':
        case 'VitaminD+GABA+Serotonin':
        case 'GABA+Serotonin+VitaminD':
        case 'GABA+VitaminD+Serotonin':
            return 9;
        default:
            return 0; // 예외 처리
    }
};
