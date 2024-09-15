import { useState } from 'react';
import StatusBar from './ui/StatusBar';
import styled from 'styled-components';
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
            navigate('/');
        }
    };

    const handleAnswer = (answer: number) => {
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
                        <QuestionText>당신의 이름은 무엇인가요?</QuestionText>
                        <Input value={name || ''} onChange={(e) => setName(e.target.value)} />
                        <TextContentButton onClick={() => submitName()}>다음</TextContentButton>
                    </ContentColumn>
                )}
                {nameCheck === true && (
                    <ContentColumn>
                        {currentProgress > 0 && <BacKButton onClick={() => goBack()} />}
                        <PageLogo page={page} />
                        <QuestionText>{questionsData.questions[questionIndex]}</QuestionText>

                        {questionIndex === 40 ? (
                            <TextContentButton onClick={() => handleContent()}>완료</TextContentButton>
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
                    <Modal onClick={() => handleModal()}>
                        <PageLogo big={true} page={page} />
                        <PageIndexText>
                            {page == 1 ? '당신의 생활에 대해서 알려주세요.' : '당신의 요즘 기분에 대해서 알려주세요.'}
                        </PageIndexText>
                    </Modal>
                )}
            </Column>
        </PageWrapper>
    );
};

export default TestContentPage;

const PageIndexText = styled.div`
    color: #fff;
    text-align: center;
    font-size: 2em;
    font-weight: 700;
`;
const PageWrapper = styled.div`
    background-color: #070707;
    height: 100%;
    overflow: hidden;
`;

const Modal = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #070707;
    display: flex;
    flex-direction: column;
    gap: 3em;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80%;
    position: relative;
`;

const ContentColumn = styled(Column)`
    width: 100%;
    gap: 4em;
`;

const QuestionText = styled.div`
    color: #fff;
    text-align: center;
    font-size: 2em;
    font-weight: 700;
`;

const TextContentButton = styled(Button)`
    margin-top: 10%;
`;
