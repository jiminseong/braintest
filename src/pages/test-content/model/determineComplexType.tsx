export const determineComplexType = (sortedScores: [string, number][]): number => {
    const threshold = 15; // 임계값
    const topTypes = sortedScores.slice(0, 4).map(([type, score]) => ({ type, score }));
    const qualifiedTypes = topTypes.filter(({ score }) => score >= threshold).map(({ type }) => type);
    console.log('정렬된 점수 :' + sortedScores);
    // 1. 단일 유형 판별 (단일 유형은 임계값을 넘는 상위 1개의 타입)
    if (qualifiedTypes.length === 1) {
        switch (qualifiedTypes[0]) {
            case '균형':
                return 1;
            case '즉흥':
                return 2;
            case '집요':
                return 3;
            case '예민':
                return 4;
            case '신중':
                return 5;
            default:
                break;
        }
    }

    // 2. 복합 유형 판별
    const typeCombination = qualifiedTypes.sort().join('+'); // 순서 상관 없이 조합
    switch (typeCombination) {
        case '즉흥+집요':
            return 6;
        case '즉흥+집요+예민':
            return 7;
        case '즉흥+집요+예민+신중':
            return 8;
        case '집요+예민+신중':
            return 9;
        case '집요+예민':
            return 10;
        case '집요+신중':
            return 11;
        case '즉흥+집요+신중':
            return 12;
        case '즉흥+신중':
            return 13;
        case '즉흥+예민':
            return 14;
        case '즉흥+예민+신중':
            return 15;
        case '예민+신중':
            return 16;
        default:
            break;
    }

    // 3. 임계값을 만족하지 못하는 경우 가장 높은 타입 반환
    switch (topTypes[0].type) {
        case '균형':
            return 1;
        case '즉흥':
            return 2;
        case '집요':
            return 3;
        case '예민':
            return 4;
        case '신중':
            return 5;
        default:
            return 0; // 에러 처리 용도
    }
};
