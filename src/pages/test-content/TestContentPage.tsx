import { useEffect, useState } from 'react';
import StatusBar from './ui/StatusBar';
import styled from 'styled-components';
import { Input } from './ui/Input';
import { Button } from '../../component/button/Button';
import questionsData from './data/question.json';
import SelectButton from './ui/SelectButton';
import { useNavigate } from 'react-router-dom';
import StatusLogo from './ui/StatusLogo';
const TestContentPage = () => {
    const navigate = useNavigate();
    const [currentProgress, setCurrentProgress] = useState(0);
    const [answerCheck, setAnswerCheck] = useState(false);
    const [name, setName] = useState('');
    const [nameCheck, setNameCheck] = useState(false);
    const [questionIndex, setQuestionIndex] = useState(0);
    useEffect(() => {
        if (answerCheck) {
            setAnswerCheck(false);
            setCurrentProgress((prev) => prev + 10);
        }
    }, [answerCheck]);

    const handleContent = () => {
        if (nameCheck === false) {
            setNameCheck(true);
        }
        if (nameCheck === true) {
            setQuestionIndex(questionIndex + 1);
            setCurrentProgress(currentProgress + 2.5641025641);
        }
        if (questionIndex === 38) {
            navigate('/');
        }
    };

    return (
        <PageWrapper>
            <StatusBar status={currentProgress} />
            <Column>
                {nameCheck === false && (
                    <ContentColumn>
                        <QuestionText>당신의 이름은 무엇인가요?</QuestionText>
                        <Input value={name || ''} onChange={(e) => setName(e.target.value)} />
                        <TextContentButton onClick={() => handleContent()}>다음</TextContentButton>
                    </ContentColumn>
                )}
                {nameCheck && (
                    <ContentColumn>
                        <StatusLogo status={0} />
                        <QuestionText>{questionsData.questions[questionIndex]}</QuestionText>
                        {/* {questionsData.questions.map((question, index) => (
                            <QuestionText key={index}>{question}</QuestionText>
                        ))} */}

                        <SelectButton />
                    </ContentColumn>
                )}
            </Column>
        </PageWrapper>
    );
};

export default TestContentPage;

const PageWrapper = styled.div`
    background-color: #070707;
    height: 100%;
    overflow: hidden;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80%;
`;

const ContentColumn = styled(Column)`
    width: 100%;
    gap: 3em;
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
