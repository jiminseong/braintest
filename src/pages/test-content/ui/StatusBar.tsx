import React from 'react';
import styled from 'styled-components';

interface StatusBarProps {
    status: number;
}

const StatusBar: React.FC<StatusBarProps> = ({ status }) => {
    return (
        <StatusBarWrapper>
            <StatusBarContainer>
                <CurrentStatusBar status={status} />
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

const StatusBarContainer = styled.div`
    width: 100%;
    height: 7px;
    background: rgba(217, 217, 217, 0.4);
`;

interface CurrentStatusBarProps {
    status: number;
}

const CurrentStatusBar = styled.div<CurrentStatusBarProps>`
    background: #7795ff;
    width: ${({ status }) => `${status}%`};
    height: 100%;
`;
