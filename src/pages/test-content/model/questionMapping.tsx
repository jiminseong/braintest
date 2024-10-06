//각각 질문별로 균형이 깨진부분(뇌의 영역중)을 매핑

// (전혀 아니다)0, (가끔그렇다)1,(보통그렇다)2,3(자주그렇다, 5(대부분그렇다)

//five : 해당 질문에  5점을 줄때 (부족한) 올라가는 점수 타입
//four : 해당 질문에  4점을 줄때 (부족한) 올라가는 점수 타입
//three : 해당 질문에  3점을 줄때 (부족한) 올라가는 점수 타입
//two : 해당 질문에  2점을 줄때 (부족한) 올라가는 점수 타입
//one : 해당 질문에  1점을 줄때 (부족한) 올라가는 점수 타입

//breakPointByHigh : 해당 질문에 고점일 수록 (부족한) 점수가 올라가는 타입 (1은 제외)
//breakPointByLow : 해당 질문에 저점일 수록 (부족한) 점수가 올라가는 타입

//0 - Dopamine (즉흥)
//1 - Serotonin (집요)
//2 - VitaminD (예민)
//3 - GABA (신중)

const questionTypeMapping = [
    { questionIndex: 1, breakPointByHigh: [0] },
    { questionIndex: 2, breakPointByHigh: [0] },
    { questionIndex: 3, breakPointByHigh: [0] },

    { questionIndex: 4, breakPointByLow: [0] },

    { questionIndex: 5, breakPointByHigh: [1] },
    { questionIndex: 6, breakPointByHigh: [0] },
    { questionIndex: 7, breakPointByHigh: [1, 3] },
    { questionIndex: 8, breakPointByHigh: [1, 3] },
    { questionIndex: 9, breakPointByHigh: [2] },

    { questionIndex: 10, breakPointByLow: [0, 1, 2, 3] },

    { questionIndex: 11, breakPointByLow: [0, 2] },

    { questionIndex: 12, breakPointByHigh: [2] },

    { questionIndex: 13, five: [0], four: [0], three: [1, 3], two: [1, 3], one: [null] },

    { questionIndex: 14, breakPointByHigh: [1] },
    { questionIndex: 15, breakPointByHigh: [3] },

    { questionIndex: 16, five: [0], four: [0], three: [0, 3], two: [3], one: [null] },

    { questionIndex: 17, breakPointByLow: [2] },

    { questionIndex: 18, breakPointByHigh: [2] },

    { questionIndex: 19, five: [2], four: [2], three: [2, 3], two: [3], one: [null] },

    { questionIndex: 20, breakPointByLow: [2] },

    { questionIndex: 21, five: [0], four: [0], three: [0], two: [3], one: [3] },
    { questionIndex: 22, breakPointByHigh: [1] },
    { questionIndex: 23, breakPointByHigh: [1] },
    { questionIndex: 24, breakPointByHigh: [1] },

    { questionIndex: 25, five: [2], four: [2], three: [3], two: [3], one: [null] },

    { questionIndex: 26, five: [1], four: [1], three: [1, 3], two: [3], one: [null] },

    { questionIndex: 27, five: [1], four: [1], three: [1, 2], two: [2], one: [null] },

    { questionIndex: 28, five: [2], four: [2], three: [1, 2], two: [1], one: [null] },

    { questionIndex: 29, breakPointByHigh: [1] },

    { questionIndex: 30, five: [3], four: [3], three: [2, 3], two: [2], one: [null] },

    { questionIndex: 31, breakPointByHigh: [2] },
    { questionIndex: 32, breakPointByHigh: [3] },
    { questionIndex: 33, breakPointByHigh: [3] },
    { questionIndex: 34, breakPointByHigh: [3] },
    { questionIndex: 35, breakPointByHigh: [3] },

    { questionIndex: 36, five: [3], four: [3], three: [0, 3], two: [0], one: [null] },

    { questionIndex: 37, five: [0], four: [0], three: [0], two: [2], one: [2] },
    { questionIndex: 38, breakPointByHigh: [0] },
];

export default questionTypeMapping;
