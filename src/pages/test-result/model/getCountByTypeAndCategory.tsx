// 타입별 카테고리별 count 값을 얻는 함수
export const getCountByTypeAndCategory = (type: number, category: string): number => {
    const countsByTypeAndCategory = [
        [5, 4, 4], // type 1
        [4, 3, 4], // type 2
        [4, 5, 2], // type 3
        [6, 2, 3], // type 4
        [7, 2, 3], // type 5
        [5, 3, 2], // type 6
        [7, 2, 4], // type 7
        [6, 3, 6], // type 8
        [5, 2, 5], // type 9
        [3, 2, 3], // type 10
        [5, 3, 2], // type 11
        [5, 3, 2], // type 12
        [3, 2, 4], // type 13
        [3, 3, 3], // type 14
        [3, 2, 3], // type 15
        [3, 2, 5], // type 16
    ];

    const categoryIndexMap: { [key: string]: number } = {
        saepo: 0,
        gaji: 1,
        chucksack: 2,
    };

    if (type < 1 || type > 16 || !(category in categoryIndexMap)) {
        throw new Error('Invalid type or category');
    }

    return countsByTypeAndCategory[type - 1][categoryIndexMap[category]];
};
