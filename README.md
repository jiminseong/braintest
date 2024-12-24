### 시각디자인학과 학우분의 졸업 작품 웹사이트

![Personal Brain Test](/public/favicon.svg)

#### https://personalbraintest.netlify.app/

---

# BrainTest

**BrainTest**는 사용자에게 다양한 테스트와 결과를 제공하는 웹 애플리케이션입니다. React와 React Router를 사용하여 개발되었으며, 사용자 경험과 반응형 인터페이스를 중점적으로 설계했습니다.

## 주요 기능

- **메인 페이지**: 홈 화면에서 주요 정보를 확인.
- **주의사항 페이지**: 테스트 전에 사용자가 주의해야 할 사항 제공.
- **테스트 콘텐츠 페이지**: 다양한 테스트 질문과 문제를 포함.
- **결과 페이지**: 테스트 결과를 유형별로 확인 가능.
- **저장 및 출력 기능**: 테스트 결과를 저장하거나 출력할 수 있는 페이지 제공.

## 프로젝트 구조

```
src/
├── App.tsx                  # 라우팅 설정
├── pages/
│   ├── home/                # 홈 페이지
│   ├── test-content/        # 테스트 콘텐츠 페이지
│   ├── caution/             # 주의사항 페이지
│   ├── test-result/         # 테스트 결과 페이지
│   ├── save/                # 저장 페이지
│   └── print/               # 출력 페이지
├── style.css                # 스타일 정의
└── main.tsx                 # 애플리케이션 진입점
```

## 설치 및 실행 방법

1. **프로젝트 클론**:
   ```bash
   git clone https://github.com/jiminseong/BrainTest.git
   ```
2. **의존성 설치**:
   ```bash
   npm install
   ```
3. **개발 서버 실행**:
   ```bash
   npm start
   ```
4. 브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속.

## 기술 스택

- **React**: UI 컴포넌트 기반 프레임워크
- **React Router**: 라우팅 관리
- **TypeScript**: 정적 타입 언어로 코드 안정성 확보
- **Zustand**: 경량 상태 관리 라이브러리
- **Styled-components**: CSS-in-JS를 활용한 컴포넌트 스타일링
- **Vite**: 빠르고 효율적인 빌드 도구
- **CSS**: 스타일링 (커스텀 폰트 및 스크롤바 숨기기 등 포함)

## 사용된 주요 파일

### 스타일 파일 (`style.css`)
- 글로벌 스타일 적용 및 커스텀 폰트(SUIT) 사용.
- 사용자 커서를 커스터마이징한 디자인 포함.

### 진입 파일 (`main.tsx`)
- React와 React Router DOM 설정.
- 애플리케이션의 `root` 엘리먼트 렌더링.

### 라우팅 파일 (`App.tsx`)
- 주요 페이지들에 대한 경로 설정:
  - `/`: 홈 페이지
  - `/caution`: 주의사항 페이지
  - `/test/content`: 테스트 콘텐츠 페이지
  - `/test/result/:type/:name`: 테스트 결과 페이지.

---

## 알고리즘 설명

BrainTest는 심리 검사에 호르몬 데이터를 매핑하여 결과를 제공합니다. 각 질문은 점수에 따라 특정 호르몬 또는 비타민D의 부족 정도를 반영합니다.

### 매핑 기준

- **Dopamine (즉흥)**: 0번 타입
- **Serotonin (집요)**: 1번 타입
- **VitaminD (예민)**: 2번 타입

### 점수 계산 방식

- **five**: 해당 질문에서 5점을 줄 때 부족한 부분의 점수가 증가.
- **four**: 해당 질문에서 4점을 줄 때 부족한 부분의 점수가 증가.
- **three**: 해당 질문에서 3점을 줄 때 부족한 부분의 점수가 증가.
- **two**: 해당 질문에서 2점을 줄 때 부족한 부분의 점수가 증가.
- **one**: 해당 질문에서 1점을 줄 때 부족한 부분의 점수가 증가.

### 특별 조건

- **breakPointByHigh**: 고점일수록 부족한 점수가 올라가는 타입.
- **breakPointByLow**: 저점일수록 부족한 점수가 올라가는 타입 (1 제외).

---

## 사용자 데이터 및 구현 화면

- **실제 사용 사례**: BrainTest는 250명의 사용자로부터 데이터를 수집하였으며, 사용자 인터랙션을 기반으로 개선되었습니다.

![WHY ARE YOU NERVOUS?](https://i.ibb.co/3TPG8vY/WHY-ARE-YOU-NERVOUS-Look-Inside-My-Brain.png)
