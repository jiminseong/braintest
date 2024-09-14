import { useEffect, useState } from 'react';
import StatusBar from './ui/StatusBar';

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
        <div className="bg-black">
            <StatusBar status={currentProgress} />
        </div>
    );
};

export default TestContentPage;
