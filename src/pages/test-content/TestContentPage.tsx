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
    const [questionIndex, setQuestionIndex] = useState(1);
    const [page, setPage] = useState(0); //현재 페이지
    const [modal, setModal] = useState(false);
    const [animate, setAnimate] = useState(false);
    const navigate = useNavigate();

    const submitName = () => {
        if (name === '') {
            alert('이름을 입력해주세요');
        } else {
            setNameCheck(true);
            setCurrentProgress((prev) => prev + 2.5); // 진행률 업데이트
        }
    };

    const goBack = () => {
        setQuestionIndex((prevIndex) => prevIndex - 1); // 질문 변경
        setCurrentProgress((prev) => prev - 2.5); // 진행률 업데이트
        if (questionIndex === 9 || questionIndex === 21) {
            setPage(questionIndex === 9 ? 1 : 2);
            console.log(questionIndex);
            setModal(true);
        }
    };

    const handleContent = () => {
        if (questionIndex === 40) {
            //이후 결과페이지로 변경
            navigate('/');
        }
    };

    const handleAnswer = (answer: number) => {
        setAnimate(true); // 애니메이션 시작
        setTimeout(() => setAnimate(false), 600); // 애니메이션 종료, 600ms 정도로 설정

        if (questionIndex === 9 || questionIndex === 21) {
            setPage(questionIndex === 9 ? 1 : 2);
            console.log(questionIndex);
            setModal(true);
        }
        if (questionIndex === 40) {
            navigate('/');
        } else {
            setQuestionIndex((prevIndex) => prevIndex + 1); // 질문 변경
            setCurrentProgress((prev) => prev + 2.5); // 진행률 업데이트
            saveAnswer(questionIndex, answer);
        }
    };

    const handleModal = () => {
        setModal(false);
    };
    return (
        <PageWrapper>
            <StatusBar status={currentProgress} />

            <Column>
                {nameCheck === false && (
                    <ContentColumn>
                        <Text>당신의 이름은 무엇인가요?</Text>
                        <Input value={name || ''} onChange={(e) => setName(e.target.value)} />
                        <TextContentButton onClick={() => submitName()}>다음</TextContentButton>
                    </ContentColumn>
                )}
                {nameCheck === true && (
                    <ContentColumn>
                        {currentProgress > 0 && <BacKButton onClick={() => goBack()} />}
                        <PageLogo width="8%" page={page} />
                        <AnimationQuestionText animate={animate}>
                            {questionsData.questions[questionIndex]}
                        </AnimationQuestionText>

                        {questionIndex === 40 ? (
                            <>
                                <Modal2 animate={animate} onClick={() => handleModal()}>
                                    <PageLogo width="8%" page={page} />
                                    <TextContentButton onClick={() => handleContent()}>
                                        검사 결과 확인하기
                                    </TextContentButton>
                                </Modal2>
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

                {page >= 1 && modal && (
                    <Modal animate={animate} onClick={() => handleModal()}>
                        <StyledPageLogo rotate={true} width="25%" page={page} />
                        <PageIndexText>
                            {page == 1 ? '당신의 생활에 대해서 알려주세요.' : '당신의 요즘 기분에 대해서 알려주세요.'}
                        </PageIndexText>
                        <LoadingText>loading...</LoadingText>
                    </Modal>
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

const Modal = styled.div<{ animate: boolean }>`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #070707;
    display: flex;
    flex-direction: column;
    gap: 3em;
    align-items: center;
    cursor: pointer;
    animation: ${({ animate }) => (animate ? fade : 'none')} 0.6s ease-in-out;
`;

const Modal2 = styled(Modal)`
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
