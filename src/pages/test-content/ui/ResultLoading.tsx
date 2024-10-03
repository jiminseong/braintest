import styled, { keyframes } from 'styled-components';
import Circle from '../../../assets/icons/cricleIcon.svg?react';
const ResultLoading = () => {
    return (
        <LoadingWrapper>
            <CircleIcon />
            <CircleIcon />
            <CircleIcon />
            <CircleIcon />
            <CircleIcon />
        </LoadingWrapper>
    );
};

export default ResultLoading;

const loadingAnimation = keyframes`
    0% {    
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;
const LoadingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    position: relative;
    animation: ${loadingAnimation} 4s infinite linear;
`;

const CircleIcon = styled(Circle)`
    fill: #d9d9d9;
    filter: drop-shadow(0px 0px 12px rgba(255, 255, 255, 0.27));
    position: absolute;
    &:nth-child(1) {
        transform: rotate(0deg) translateX(80px);
    }
    &:nth-child(2) {
        transform: rotate(72deg) translateX(80px);
    }
    &:nth-child(3) {
        transform: rotate(144deg) translateX(80px);
    }
    &:nth-child(4) {
        transform: rotate(216deg) translateX(80px);
    }
    &:nth-child(5) {
        transform: rotate(288deg) translateX(80px);
    }
`;
