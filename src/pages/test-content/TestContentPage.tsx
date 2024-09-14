import { useEffect, useState } from 'react';
import StatusBar from './ui/StatusBar';
import styled from 'styled-components';

const TestContentPage = () => {
    const [currentProgress, setCurrentProgress] = useState(0);
    const [answerCheck, setAnswerCheck] = useState(false);

    useEffect(() => {
        if (answerCheck) {
            setAnswerCheck(false);
            setCurrentProgress(+10);
        } else if (answerCheck === false) {
            setAnswerCheck(false);
        }
    });
    return (
        <PageWrapper>
            <StatusBar status={currentProgress} />
        </PageWrapper>
    );
};

export default TestContentPage;

const PageWrapper = styled.div`
    background-color: #070707;
`;
