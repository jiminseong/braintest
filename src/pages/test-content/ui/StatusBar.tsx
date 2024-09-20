import React, { useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

interface StatusBarProps {
    status: number;
}

const StatusBar: React.FC<StatusBarProps> = ({ status }) => {
    const prevStatusRef = useRef<number>(status);

    useEffect(() => {
        prevStatusRef.current = status;
    }, [status]);

    return (
        <StatusBarWrapper>
            <StatusBarContainer>
                <CurrentStatusBar prevStatus={prevStatusRef.current} status={status} />
            </StatusBarContainer>
            <CurrentPercentage>{status}%</CurrentPercentage>
        </StatusBarWrapper>
    );
};

export default StatusBar;

const CurrentPercentage = styled.div`
    color: #fff;
    font-size: 0.875rem;
    font-weight: 700;
    margin-left: 1.8125em;
`;

const StatusBarWrapper = styled.div`
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

const fill = (prevStatus: number, status: number) => keyframes`
    0% {
        width: ${prevStatus}%;
    }
    100% {
        width: ${status}%;
    }
`;

const StatusBarContainer = styled.div`
    height: 5px;
    background: rgba(217, 217, 217, 0.4);
`;

interface CurrentStatusBarProps {
    prevStatus: number;
    status: number;
}

const CurrentStatusBar = styled.div<CurrentStatusBarProps>`
    background: #7795ff;
    width: ${({ status }) => `${status}%`};
    height: 100%;
    animation: ${({ prevStatus, status }) => fill(prevStatus, status)} 1s linear forwards;
`;
