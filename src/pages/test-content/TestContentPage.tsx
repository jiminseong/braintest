import { useState } from 'react';
import StatusBar from './ui/StatusBar';
import styled, { keyframes } from 'styled-components';
import { Input } from './ui/Input';
import { Button } from '../../component/button/Button';
import questionsData from './data/question.json';
import SelectButton from './ui/SelectButton';
import { useNavigate } from 'react-router-dom';
import PageLogo from './ui/PageLogo';
import { useSurveyStore } from '../../store/store';
import BacKButton from '../../component/button/BacKButton';

const TestContentPage = () => {
    const { saveAnswer } = useSurveyStore();
    const [currentProgress, setCurrentProgress] = useState(0); //퍼센티지
    const [name, setName] = useState('');
    const [nameCheck, setNameCheck] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [page, setPage] = useState(0); //현재 페이지
    const [loading, setLoading] = useState(false);
    const [animate, setAnimate] = useState(false);
    const navigate = useNavigate();

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
        if (name === '') {
            alert('이름을 입력해주세요');
        } else {
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
        }
        setQuestionIndex((prevIndex) => prevIndex - 1); // 질문 변경
        setCurrentProgress((prev) => prev - 2.5); // 진행률 업데이트
    };

    const handleContent = () => {
        if (questionIndex === 39) {
            //이후 결과페이지로 변경
            navigate('/');
        }
    };

    const handleAnswer = (answer: number) => {
        if (questionIndex === 9 || questionIndex === 21) {
            handleLoading();

            setQuestionIndex((prevIndex) => prevIndex + 1); // 질문 변경
            setCurrentProgress((prev) => prev + 2.5); // 진행률 업데이트
            saveAnswer(questionIndex, answer);
        } else if (questionIndex === 39) {
            navigate('/');
        } else {
            handleAnimate();
            setQuestionIndex((prevIndex) => prevIndex + 1); // 질문 변경
            setCurrentProgress((prev) => prev + 2.5); // 진행률 업데이트
            saveAnswer(questionIndex, answer);
        }
    };

    return (
        <PageWrapper>
            <StatusBar status={currentProgress} loading={loading} />

            <Column>
                {nameCheck === false && (
                    <ContentColumn>
                        <Text>당신의 이름은 무엇인가요?</Text>
                        <Input value={name || ''} onChange={(e) => setName(e.target.value)} />
                        <TextContentButton onClick={() => submitName()}>다음</TextContentButton>
                    </ContentColumn>
                )}

                {nameCheck === true && loading === true && (
                    <LoadingWrapper animate={animate}>
                        <StyledPageLogo rotate={true} width="25%" page={1} />
                        <PageIndexText>당신의 특징에 대해서 알려주세요.</PageIndexText>
                        <LoadingText>loading...</LoadingText>
                    </LoadingWrapper>
                )}

                {page >= 1 && (
                    <ContentColumn>
                        {currentProgress > 2.5 && !loading && <BacKButton onClick={() => goBack()} />}
                        <PageLogo width="8%" page={page} />
                        <AnimationQuestionText animate={animate}>
                            {questionsData.questions[questionIndex]}
                        </AnimationQuestionText>

                        {questionIndex === 39 ? (
                            <>
                                <LoadingWrapper2 animate={animate}>
                                    <PageLogo width="8%" page={page} />
                                    <TextContentButton onClick={() => handleContent()}>
                                        검사 결과 확인하기
                                    </TextContentButton>
                                </LoadingWrapper2>
                            </>
                        ) : (
                            <SelectButton
                                onClickOne={() => handleAnswer(1)}
                                onClickTwo={() => handleAnswer(2)}
                                onClickThree={() => handleAnswer(3)}
                                onClickFour={() => handleAnswer(4)}
                                onClickFive={() => handleAnswer(5)}
                            />
                        )}
                    </ContentColumn>
                )}

                {page >= 2 && loading && (
                    <LoadingWrapper animate={animate}>
                        <StyledPageLogo rotate={true} width="25%" page={page} />
                        <PageIndexText>
                            {page == 2 ? '당신의 생활에 대해서 알려주세요.' : '당신의 요즘 기분에 대해서 알려주세요.'}
                        </PageIndexText>
                        <LoadingText>loading...</LoadingText>
                    </LoadingWrapper>
                )}
            </Column>
        </PageWrapper>
    );
};

export default TestContentPage;

const StyledPageLogo = styled(PageLogo)`
    width: 30px;
`;

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
    bottom: 8em;
    left: 3em;
    font-size: 1.5em;
    font-weight: 700;
    color: #727272;
`;

const LoadingWrapper = styled.div<{ animate: boolean }>`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #070707;
    display: flex;
    flex-direction: column;
    gap: 3em;
    align-items: center;
    animation: ${({ animate }) => (animate ? fade : 'none')} 0.6s ease-in-out;
`;

const LoadingWrapper2 = styled(LoadingWrapper)`
    z-index: 100;
    gap: 0em;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3em;
    height: 100%;
    position: relative;
`;

const ContentColumn = styled(Column)`
    width: 100%;
    gap: 4em;
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
`;
const TextContentButton = styled(Button)`
    margin-top: 10%;
    font-size: 1.125em;
`;
