import styled from 'styled-components';
import FirstNeuron from './ui/FirstNeuron';
import SecondNeuron from './ui/SecondNeuron';
import ThirdNeuron from './ui/ThirdNeuron';
import Logo from '../../assets/icons/Logo.svg?react';
import testStartButtonUrl from '../../assets/images/TestStartButton.png';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const HomePage = () => {
    const navigate = useNavigate();
    const [buttonDisplay, setButtonDisplay] = useState(false);
    const [animationStopState, setAnimationStop] = useState(false);
    const [typedText, setTypedText] = useState<string[]>([]);
    const content = [
        '당신의 뇌 유형은 무엇입니까? 뇌 유형 테스트를 통해 또 다른 ‘나’를 발견하고 ‘나’의 감정을 마주해보세요.',
        '테스트 결과로 제공되는 16가지의 유형 중, 당신의 뇌가 어느 유형에 속하는지 확인해보세요.',
        '1단계 | 뇌 유형 검사를 받습니다.',
        '2단계 | 뇌 유형을 확인합니다.',
        '3단계 | 개별화된 결과지를 받습니다.',
        '4단계 | 건강을 개선합니다.',
        '이 검사는 현재 당신의 상황이 어떻든 실시간으로 그리고 정확하게 뇌 건강을 증진할 수 있는 생활 습관과 영양소를 추천합니다.',
        '언제나 더 좋은 ‘나’와 마주할 수 있는 방법이 있습니다.',
        '망설이지 마세요.',
    ];

    useEffect(() => {
        let i = 0; // 문장 인덱스
        let j = 0; // 글자 인덱스
        let currentText = ''; // 현재 타이핑 중인 문장

        const intervalId = setInterval(() => {
            if (i < content.length) {
                if (j < content[i].length) {
                    currentText += content[i][j]; // 한 글자씩 추가
                    setTypedText((prev) => {
                        const updatedText = [...prev];
                        updatedText[i] = currentText; // 현재 문장 업데이트
                        return updatedText;
                    });
                    j++;
                } else {
                    i++;
                    j = 0;
                    currentText = '';
                    if (i === content.length) {
                        clearInterval(intervalId); // 모든 문장이 출력되면 인터벌 종료
                        setButtonDisplay(true);
                    }
                }
            }
        }, 50); // 50ms 지연 시간

        return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 인터벌 클리어
    }, []);

    const handleMouseEnter = () => setAnimationStop(true);
    const handleMouseLeave = () => setAnimationStop(false);

    return (
        <HomePageWrapper>
            <FirstNeuron stop={animationStopState} />
            <SecondNeuron stop={animationStopState} />
            <ThirdNeuron stop={animationStopState} />
            <StyledLogo />

            <GreenContainerWraaper>
                <Title>brain type test 100%</Title>

                {typedText.map((text, index) => (
                    <ContentText key={index}>
                        {text}
                        <br />
                    </ContentText> // 각각의 문장을 span으로 출력
                ))}

                {buttonDisplay && (
                    <ButtonWrapper
                        onClick={() => navigate('/caution')}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Image src={testStartButtonUrl} alt="테스트시작버튼" />
                    </ButtonWrapper>
                )}
            </GreenContainerWraaper>
            <FirstGreenContainer />
        </HomePageWrapper>
    );
};

export default HomePage;

const HomePageWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #070707;
    contain: paint;
`;

const ContentText = styled.p`
    background-color: #070707;
    width: fit-content;
    line-height: 1em;
    color: #ffffff;
    font-size: 1em;
    margin: 0.5em 0;
    white-space: pre-line;
`;

const StyledLogo = styled(Logo)`
    position: absolute;
    width: 10%;
    top: 1.5em;
    right: 2em;
`;

const Title = styled.span`
    font-size: 2em;
    background: #070707;
    color: #fff;
`;

const Image = styled.img`
    width: 100%;
    max-width: 550px;
`;

const ButtonWrapper = styled.button`
    cursor: pointer;
    margin-top: 5%;
    background: #070707;
    width: fit-content;
    border: none;
    outline: none;
`;

const GreenContainerWraaper = styled.div`
    z-index: 10;
    position: absolute;
    box-sizing: border-box;
    color: #ffffff;
    line-height: 2em;
    min-width: 55%;
    min-height: 45%;
    top: 35%;
    left: 5%;
`;
const FirstGreenContainer = styled.div`
    z-index: 5;
    position: absolute;
    width: 55%;
    height: 50%;
    top: 35%;
    left: 5%;
    border: 3px solid #7aff77;
    box-shadow: 0px 0px 8.5px 1px #77ceff;
`;
