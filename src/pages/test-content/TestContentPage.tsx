import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { Input } from './ui/Input';
import StatusBar from './ui/StatusBar';
import SelectButton from './ui/SelectButton';
import { Button } from '../../component/button/Button';
import questionsData from './model/question.json';
import { useSurveyStore } from '../../store/store';
import PageLogo from './ui/PageLogo';
import BacKButton from '../../component/button/BacKButton';
import ResultLoading from './ui/ResultLoading';
import calculateResultType from './model/calculateResultType';
import { useReactToPrint } from 'react-to-print';

const TestContentPage = () => {
    const [currentProgress, setCurrentProgress] = useState(0); // 퍼센티지
    const [currentName, setCurrentName] = useState('');
    const [nameCheck, setNameCheck] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [page, setPage] = useState(0); // 현재 페이지
    const [loading, setLoading] = useState(false);
    const [animate, setAnimate] = useState(false);
    const navigate = useNavigate();

    const [ResultSvg, setResultSvg] = useState<React.FC | null>(null); // 타입 정의 추가
    const componentRef = useRef(null);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: '결과영수증',
    });

    // Zustand 상태 관리 함수
    const { setName, setResult, saveAnswer, answers, name } = useSurveyStore();

    const handleLoading = () => {
        return new Promise<void>((resolve) => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                resolve(); // Promise를 완료시켜 .then을 실행
            }, 4400); // 4.4초 후에 resolve
        });
    };

    const handleAnimate = () => {
        return new Promise<void>((resolve) => {
            setAnimate(true);
            setTimeout(() => {
                setAnimate(false);
                resolve();
            }, 600);
        });
    };

    const submitName = () => {
        if (currentName === '') {
            alert('이름을 입력해주세요');
        } else if (currentName.length > 5) {
            alert('5글자 이하로 입력해주세요');
        } else {
            setName(currentName);
            setNameCheck(true);
            handleLoading().then(() => {
                setPage(1);
            });
            setCurrentProgress((prev) => prev + 2.5);
        }
    };

    const goBack = () => {
        if (loading && page === 2) {
            setLoading(false);
            setPage(1);
        } else if (loading && page === 3) {
            setPage(2);
            handleLoading();
        } else if (currentProgress === 2.5) {
            setNameCheck(false);
            setPage(0);
        }
        setQuestionIndex((prevIndex) => prevIndex - 1); // 질문 변경
        setCurrentProgress((prev) => prev - 2.5); // 진행률 업데이트
    };

    const handleAnswer = (answer: number) => {
        if (0 <= questionIndex && questionIndex <= 37) saveAnswer(questionIndex, answer); // 답변을 상태에 저장

        if (questionIndex === 9 || questionIndex === 21) {
            setPage(questionIndex === 9 ? 2 : 3);
            handleLoading();
            setQuestionIndex((prevIndex) => prevIndex + 1);
            setCurrentProgress((prev) => prev + 2.5);
        } else if (questionIndex === 38) {
            setQuestionIndex((prevIndex) => prevIndex + 1);
            setCurrentProgress((prev) => prev + 2.5);

            console.log(answers);

            const resultType = calculateResultType();
            setResult(resultType);
            handleLoading()
                .then(() => {
                    return import(`../../assets/images/typeResult/type_${resultType}_bill.svg?react`);
                })
                .then((module) => {
                    setResultSvg(() => module.default);
                })
                .catch((err) => {
                    console.error('SVG 로드 에러:', err);
                    setLoading(false); // 에러가 발생해도 로딩 해제
                });
        } else {
            handleAnimate();
            setQuestionIndex((prevIndex) => prevIndex + 1);
            setCurrentProgress((prev) => prev + 2.5);
        }
    };

    // SVG가 로드되면 프린트 및 네비게이션 실행
    useEffect(() => {
        if (ResultSvg) {
            handlePrint();
            setLoading(false); // 로딩 해제
            const resultType = calculateResultType();
            navigate(`/test/result/${resultType}/${name}`); // 결과 페이지로 이동
        }
    }, [ResultSvg]); // ResultSvg가 업데이트될 때마다 실행

    return (
        <>
            <PageWrapper>
                <StatusBar status={currentProgress} loading={loading} />

                <Column>
                    {nameCheck === false && (
                        <ContentColumn>
                            <Column2>
                                <Text>당신의 이름은 무엇인가요?</Text>
                                <Input value={currentName} onChange={(e) => setCurrentName(e.target.value)} />
                            </Column2>
                            <TextContentButton onClick={() => submitName()}>다음</TextContentButton>
                        </ContentColumn>
                    )}

                    {nameCheck === true && loading === true && page === 0 && (
                        <LoadingWrapper>
                            <PageLogo rotate={true} width="16%" page={1} />
                            <PageIndexText>당신의 특징에 대해서 알려주세요.</PageIndexText>
                            <LoadingText>loading...</LoadingText>
                        </LoadingWrapper>
                    )}

                    {loading === false && page >= 1 && (
                        <ContentColumn>
                            {currentProgress >= 2.5 && !loading && (
                                <BacKButton top="3.3125em" onClick={() => goBack()} />
                            )}
                            <PageLogo width="8%" page={page} />
                            <AnimationQuestionText animate={animate}>
                                {questionsData.questions[questionIndex]}
                            </AnimationQuestionText>

                            <SelectButton
                                onClickOne={() => handleAnswer(1)}
                                onClickTwo={() => handleAnswer(2)}
                                onClickThree={() => handleAnswer(3)}
                                onClickFour={() => handleAnswer(4)}
                                onClickFive={() => handleAnswer(5)}
                            />
                        </ContentColumn>
                    )}

                    {page >= 2 && loading && questionIndex < 39 && (
                        <LoadingWrapper>
                            <PageLogo rotate={true} width="16%" page={page} />
                            <PageIndexText>
                                {page == 2
                                    ? '당신의 생활에 대해서 알려주세요.'
                                    : '당신의 요즘 기분에 대해서 알려주세요.'}
                            </PageIndexText>
                            <LoadingText>loading...</LoadingText>
                        </LoadingWrapper>
                    )}

                    {questionIndex === 39 && loading && (
                        <SubmitLoadingWrapper>
                            <ResultLoading />
                            <Text>당신의 뇌 유형을 분석 중입니다...</Text>
                        </SubmitLoadingWrapper>
                    )}
                </Column>
            </PageWrapper>
            <PrintContainer ref={componentRef}>
                <Name>{name}님의 뇌유형은</Name>
                {ResultSvg && <StyledResultSvg as={ResultSvg} />}
            </PrintContainer>
        </>
    );
};

export default TestContentPage;

const PageIndexText = styled.div`
    color: #fff;
    text-align: center;
    font-size: 1.725em;
    font-weight: 700;
`;

const PageWrapper = styled.div`
    background-color: #070707;
    height: 100%;
    overflow: hidden;
    position: relative;
`;

const fade = keyframes`
    0% {
        opacity: 0;
        
    }
    100% {
        opacity: 1;
        
    }
`;

const LoadingText = styled.div`
    position: absolute;
    bottom: 4em;
    left: 3em;
    font-size: 1.5em;
    font-weight: 700;
    color: #727272;
`;

const LoadingWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-top: -10em;
    gap: 3em;
    align-items: center;
    justify-content: center;
    background-color: #070707;
    animation: ${fade} 0.6s ease-in-out;
`;

const SubmitLoadingWrapper = styled(LoadingWrapper)`
    margin-top: 0em;
    gap: 5em;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;
`;

const Column2 = styled(Column)`
    height: 60%;
    width: 100%;
`;
const ContentColumn = styled(Column)`
    box-sizing: border-box;
    width: 100%;
    height: 60%;
    justify-content: space-between;
`;

const fadeInUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const AnimationQuestionText = styled.div<{ animate: boolean }>`
    color: #fff;
    text-align: center;
    font-size: 1.725em;
    font-weight: 700;
    animation: ${({ animate }) => (animate ? fadeInUp : 'none')} 0.6s ease-in-out;
`;

const Text = styled.div`
    color: #fff;
    text-align: center;
    font-size: 1.725em;
    font-weight: 700;
    margin-bottom: 2em;
`;
const TextContentButton = styled(Button)`
    margin-top: 10%;
    font-size: 1.125em;
`;

const PrintContainer = styled.div`
    display: none;
    position: relative;
    background: #fff;
    color: #070707;
    width: 523px;
    height: fit-content;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    @media print {
        width: 79mm;
        height: 297mm;
        box-shadow: none;
        animation: none;

        @page {
            size: 79mm 297mm;
        }
    }
`;

const Name = styled.div`
    position: absolute;
    font-size: 1.625rem;
    font-weight: 800;
    left: 50%;
    top: 3em;
    color: #231815;
    transform: translate(-50%, -50%);
    @media print {
        top: 4em;
        font-size: 0.8rem;
    }
`;

const StyledResultSvg = styled.div`
    width: 100%;
    height: auto;
`;
