// 각 질문에 대한 타입 맵핑 정의
const typeMapping = [
    { question: 0, typePositive: ['균형', '집요'], typeNegative: ['즉흥'] }, // 정리정돈을 훌륭하게 해낸다
    { question: 1, typePositive: ['즉흥', '신중'], typeNegative: ['균형'] }, // 집중력을 쉽게 잃는다
    { question: 2, typePositive: ['즉흥'], typeNegative: ['균형'] }, // 주의 지속시간이 짧다
    { question: 3, typePositive: ['균형', '집요'], typeNegative: ['즉흥'] }, // 줄을 서서 차례를 기다리는 건 쉽다
    { question: 4, typePositive: ['집요'], typeNegative: ['균형'] }, // 생각하던 도중 다른 생각으로 빠지곤 한다
    { question: 5, typePositive: ['즉흥'], typeNegative: ['균형', '집요'] }, // 미래를 위해 당장의 즐거움을 참기 힘들다
    { question: 6, typePositive: ['즉흥'], typeNegative: ['예민'] }, // 무언가를 기억해내는 것이 힘들다
    { question: 7, typePositive: ['즉흥'], typeNegative: ['예민'] }, // 10년 전보다 기억력이 나빠졌다
    { question: 8, typePositive: ['즉흥'], typeNegative: ['예민'] }, // 이름을 기억하는 것이 어렵다
    { question: 9, typePositive: ['균형'], typeNegative: ['즉흥'] }, // 일주일에 두 번 이상 운동을 한다
    { question: 10, typePositive: ['균형'], typeNegative: ['즉흥', '신중'] }, // 하루에 7-8시간 이상 수면을 취한다
    { question: 11, typePositive: ['즉흥'], typeNegative: ['균형', '집요'] }, // 영양가 없고 무계획적인 식사를 하는 경향이 있다
    { question: 12, typePositive: ['즉흥'], typeNegative: ['균형'] }, // 하루에 두 컵(240ml) 이상의 커피를 마신다
    { question: 13, typePositive: ['즉흥'], typeNegative: ['균형'] }, // 매일 설탕이 든 탄산음료를 마신다
    { question: 14, typePositive: ['즉흥'], typeNegative: ['균형'] }, // 일주일에 4잔 이상의 술을 마신다
    { question: 15, typePositive: ['즉흥'], typeNegative: ['균형'] }, // 담배를 피우거나 간접흡연에 노출된다
    { question: 16, typePositive: ['즉흥'], typeNegative: ['균형', '집요'] }, // 하루에 한 시간 이상 티비를 본다
    { question: 17, typePositive: ['신중'], typeNegative: ['균형'] }, // 수면을 개시하고 유지하는 데 어려움을 겪는다
    { question: 18, typePositive: ['집요'], typeNegative: ['균형'] }, // 직장 또는 집에서 스트레스를 받는다
    { question: 19, typePositive: ['균형'], typeNegative: ['집요', '예민'] }, // 가까운 사람들과의 관계가 건강하고 만족스럽다
    { question: 20, typePositive: ['균형', '즉흥'], typeNegative: ['신중'] }, // 새로운 것을 배우는 활동이나 뇌를 훈련하는 게임을 한다
    { question: 21, typePositive: ['집요'], typeNegative: ['균형'] }, // 괜찮은 부분보다 잘못된 부분에 더 집중하는 경향이 있다
    { question: 22, typePositive: ['집요'], typeNegative: ['균형', '신중'] }, // 논쟁하거나 반대 의견을 내는 경향이 있다
    { question: 23, typePositive: ['신중'], typeNegative: ['균형'] }, // 머릿속에서 생각이 빙빙 돌고 막히는 경향이 있다
    { question: 24, typePositive: ['예민'], typeNegative: ['균형'] }, // 슬프거나 우울한 기분 때문에 어려움을 겪는다
    { question: 25, typePositive: ['예민', '신중'], typeNegative: ['균형'] }, // 걱정 때문에 어려움을 겪는다
    { question: 26, typePositive: ['예민'], typeNegative: ['균형'] }, // 과거의 상처에서 벗어나기 힘들다
    { question: 27, typePositive: ['예민', '집요'], typeNegative: ['균형'] }, // 생각이 부정적이다
    { question: 28, typePositive: ['균형'], typeNegative: ['예민'] }, // 자존감이 정말 좋다
    { question: 29, typePositive: ['예민'], typeNegative: ['균형'] }, // 기쁨을 느끼기 어렵다
    { question: 30, typePositive: ['예민'], typeNegative: ['균형'] }, // 잘못된 방식으로 일을 받아들이는 경향이 있다
    { question: 31, typePositive: ['신중'], typeNegative: ['균형'] }, // 긴장을 풀기가 어렵다
    { question: 32, typePositive: ['신중', '예민'], typeNegative: ['균형'] }, // 최악의 상황을 가정하는 경향이 있다
    { question: 33, typePositive: ['예민'], typeNegative: ['균형'] }, // 비판에 민감하다
    { question: 34, typePositive: ['예민', '신중'], typeNegative: ['균형'] }, // 손톱을 물어뜯거나 피부 껍질을 벗겨낸다
    { question: 35, typePositive: ['신중'], typeNegative: ['균형'] }, // 긴장되고 초조하다
    { question: 36, typePositive: ['즉흥', '균형'], typeNegative: ['예민'] }, // 거의 매일 에너지가 넘친다
    { question: 37, typePositive: ['즉흥'], typeNegative: ['균형', '집요'] }, // 욕구를 참기가 어렵다
];

export default typeMapping;
