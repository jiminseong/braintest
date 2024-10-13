import styled, { keyframes } from 'styled-components';
import Circle from '../../../assets/icons/cricleIcon.svg?react';
import { useEffect, useState } from 'react';
const ResultLoading = () => {
    const [typedText, setTypedText] = useState<string | ''[]>([]);
    const content = '당신의 뇌 유형을 분석 중입니다... ';

    useEffect(() => {
        let i = 0; // 글자 인덱스
        let adding = true; // 텍스트를 추가하는 중인지 여부
        let currentText = ''; // 현재 타이핑 중인 텍스트

        const intervalId = setInterval(() => {
            if (adding) {
                if (i < content.length) {
                    currentText += content[i]; // 한 글자씩 추가
                    setTypedText(currentText); // 텍스트 상태 업데이트
                    i++;
                } else {
                    adding = false; // 모든 글자를 다 추가하면 삭제 모드로 전환
                    setTimeout(() => {}, 1000); // 1초 대기 후 삭제 시작
                }
            } else {
                if (i > 0) {
                    i = 0;
                    currentText = '';
                    setTypedText(currentText); // 텍스트 상태 업데이트
                } else {
                    adding = true; // 모든 글자를 다 삭제하면 추가 모드로 전환
                }
            }
        }, 100); // 100ms 지연 시간

        return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 클리어
    }, []);

    return (
        <ResultLoadingWrapper>
            <LoadingCircleWrapper>
                <CircleIcon />
                <CircleIcon />
                <CircleIcon />
                <CircleIcon />
                <CircleIcon />
            </LoadingCircleWrapper>
            <Text>
                {typedText}
                <Cursor />
            </Text>
        </ResultLoadingWrapper>
    );
};

export default ResultLoading;
const Cursor = styled.div`
    height: 1em;
    width: 2px;
    background-color: #fff;
    margin-left: 5px;
    animation: blink 0.5s step-start infinite;

    @keyframes blink {
        50% {
            opacity: 0;
        }
    }
`;

const ResultLoadingWrapper = styled.div`
    padding-top: 20em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5em;
`;

const Text = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
    text-align: center;
    font-size: 1.725em;
    font-weight: 700;
    padding: 0;
    box-sizing: border-box;
`;

// 회전 애니메이션 정의
const rotateAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

// 모였다가 퍼지는 애니메이션 정의
const gatherAndSpread = keyframes`
    0% {
        transform: rotate(var(--rotate)) translate(0px);
    }
    50% {
        transform: rotate(var(--rotate)) translate(80px);
    }
    100% {
        transform: rotate(var(--rotate)) translate(0px); 
    }
`;

const LoadingCircleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 160px;
    position: relative;
    animation: ${rotateAnimation} 4s infinite linear;
`;

const CircleIcon = styled(Circle)`
    fill: #d9d9d9;
    filter: drop-shadow(0px 0px 12px rgba(255, 255, 255, 0.27));
    position: absolute;

    animation: ${gatherAndSpread} 2s ease-in-out infinite;

    &:nth-child(1) {
        --rotate: 0deg; /* 1번 아이콘 각도 */
    }
    &:nth-child(2) {
        --rotate: 72deg; /* 2번 아이콘 각도 */
    }
    &:nth-child(3) {
        --rotate: 144deg; /* 3번 아이콘 각도 */
    }
    &:nth-child(4) {
        --rotate: 216deg; /* 4번 아이콘 각도 */
    }
    &:nth-child(5) {
        --rotate: 288deg; /* 5번 아이콘 각도 */
    }
`;
