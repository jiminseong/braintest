import { useEffect, useState } from 'react';
import StatusBar from './ui/StatusBar';
import styled from 'styled-components';
import { Input } from './ui/Input';
import { Button } from '../../component/button/Button';
// import questions from './data/question.json';
const TestContentPage = () => {
    const [currentProgress, setCurrentProgress] = useState(0);
    const [answerCheck, setAnswerCheck] = useState(false);
    const [name, setName] = useState('');
    const [nameCheck, setNameCheck] = useState(false);

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
                {nameCheck === true && <QuestionText>질문입니다.</QuestionText>}
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
