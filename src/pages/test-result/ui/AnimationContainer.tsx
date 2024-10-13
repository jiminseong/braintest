import styled, { keyframes } from 'styled-components';
import { useEffect, useState } from 'react';

const AnimationContainer = ({ type, count, category }: { type: number; count: number; category: string }) => {
    const [IconSvg, setIconSvg] = useState<React.FC | null>(null); // 타입 정의 추가

    useEffect(() => {
        import(`../../../assets/images/typeGraphic/type${type}_${category}_${count}.svg?react`)
            .then((module) => {
                setIconSvg(() => module.default);
            })
            .catch((err) => {
                console.error('SVG 로드 에러:', err);
            });
    }, [type]);

    return <StyledDiv>{IconSvg && <StyledIconSvg as={IconSvg} />}</StyledDiv>;
};

export default AnimationContainer;
const StyledIconSvg = styled.div`
    width: 100%;
    height: auto;
`;

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

const StyledDiv = styled.div`
    position: relative;

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
