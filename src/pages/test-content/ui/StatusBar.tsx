import React, { useRef, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';

interface StatusBarProps {
    status: number;
    loading: boolean;
}

const StatusBar: React.FC<StatusBarProps> = ({ status, loading }) => {
    const prevStatusRef = useRef<number>(status);

    useEffect(() => {
        prevStatusRef.current = status;
    }, [status]);

    return (
        <StatusBarWrapper>
            <StatusBarContainer>
                <CurrentStatusBar
                    prevStatus={prevStatusRef.current}
                    status={status}
                    duration={Math.abs(status - prevStatusRef.current) * 0.25} // 변화량에 따라 duration 조절
                    loading={loading}
                />
            </StatusBarContainer>
            {loading ? <></> : <CurrentPercentage>{status}%</CurrentPercentage>}
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

const loadingFill = (prevStatus: number) => keyframes`
    0% {
        width: 10%;
    }


    87.5% {
        width: 100%;
    }

    100% {
        width: ${prevStatus}%;
    }
`;

const StatusBarContainer = styled.div`
    height: 5px;
    background: rgba(217, 217, 217, 0.4);
`;

interface CurrentStatusBarProps {
    prevStatus: number;
    status: number;
    duration: number;
    loading: boolean;
}

const CurrentStatusBar = styled.div<CurrentStatusBarProps>`
    background: #7795ff;
    width: ${({ status }) => `${status}%`};
    height: 100%;
    animation: ${({ prevStatus, status, loading, duration }) =>
        loading
            ? css`
                  ${loadingFill(prevStatus)} 4.4s linear forwards
              `
            : css`
                  ${fill(prevStatus, status)} ${duration}s linear forwards
              `};
`;
