import styled, { keyframes } from 'styled-components';
import TestSvg from '../../../assets/images/typeGraphic/1/1.svg?react';

const AnimationContainer = () => {
    return (
        <StyledDiv>
            <TestSvg />
        </StyledDiv>
    );
};

export default AnimationContainer;

// 반시계 방향 회전 및 크기 확대
const rotateAndScale = keyframes`
    0% {
        transform: rotate(0deg) scale(1);
        background-color: #fff;
    }
    100% {
        transform: rotate(-360deg) scale(2);
        background-color: #000;
    }
`;

// 시계 방향 회전 및 크기 축소 및 색상 변화
const rotateBackAndColorChange = keyframes`
    0% {
        transform: rotate(-360deg) scale(2);
        background-color: #000;
    }
    25% {
        background-color: #3E3E3D;
    }
    50% {
        background-color: #BABABA;
    }
    75% {
        background-color: #EBEBEB;
    }
    100% {
        transform: rotate(0deg) scale(1);
        background-color: #fff;
    }
`;

// div 스타일 정의
const StyledDiv = styled.div`
    position: relative;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: 20px;
    transition: transform 0.4s ease-in-out, background-color 0.4s ease-in-out;

    // div에 마우스 오버 시 애니메이션 적용
    &:hover {
        animation: ${rotateAndScale} 0.3s forwards;
        z-index: 10;
        svg {
            color: #fff;
        }
    }

    // div에서 마우스가 떠날 때 애니메이션 적용
    &:not(:hover) {
        animation: ${rotateBackAndColorChange} 0.4s forwards;

        svg {
            color: #000;
        }
    }

    // SVG 스타일
    svg {
        transition: fill 0.4s ease-in-out;
        width: 100%;
        height: 100%;
        color: #000;
    }
`;
