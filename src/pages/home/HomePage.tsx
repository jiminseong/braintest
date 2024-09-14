import styled from 'styled-components';
import backgroundUrl from '../../assets/images/homeBackgroundImage.png';
import Logo from '../../assets/icons/Logo.svg?react';
import GreenContainer from './ui/GreenContainer';
import testStartButtonUrl from '../../assets/images/TestStartButton.png';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <HomePageWrapper>
            <StyledLogo />
            <GreenContainer width="25%" height="80%" left="40%" top="15%">
                <ContentText>brain cell 99%</ContentText>
            </GreenContainer>
            <GreenContainer width="15%" height="20%" left="60%" top="5%">
                <ContentText>dendritic spines 99%</ContentText>
            </GreenContainer>
            <GreenContainer width="fit-content" height="auto" left="5%" top="35%">
                <Title>brain type test 100%</Title>
                <ContentText>
                    당신의 뇌 유형은 무엇입니까? 뇌 유형 테스트를 통해 또 다른 ‘나’를 발견하고 ‘나’의 감정을
                    마주해보세요.
                </ContentText>
                <ContentText>
                    테스트 결과로 제공되는 16가지의 유형 중, 당신의 뇌가 어느 유형에 속하는지 확인해보세요.
                </ContentText>
                <ContentText>1단계 | 뇌 유형 검사를 받습니다.</ContentText>
                <ContentText>2단계 | 뇌 유형을 확인합니다.</ContentText>
                <ContentText>3단계 | 개별화된 결과지를 받습니다.</ContentText>
                <ContentText>4단계 | 건강을 개선합니다.</ContentText>
                <ContentText>
                    이 검사는 현재 당신의 상황이 어떻든 실시간으로 그리고 정확하게 뇌 건강을 증진할 수 있는 생활 습관과
                    영양소를 추천합니다.
                </ContentText>
                <ContentText>
                    언제나 더 좋은 ‘나’와 마주할 수 있는 방법이 있습니다.
                    <br />
                    망설이지 마세요.
                </ContentText>
                <ButtonWrapper onClick={() => navigate('/test/content')}>
                    <Image src={testStartButtonUrl} alt="테스트시작버튼" />
                </ButtonWrapper>
            </GreenContainer>
        </HomePageWrapper>
    );
};

export default HomePage;

const ContentText = styled.p`
    background-color: #070707;
    width: fit-content;
    line-height: 1.5em;
    color: #ffffff;
    margin: 0.5em 0;
`;

const HomePageWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${backgroundUrl});
    background-position: center;
    background-size: cover;
`;

const StyledLogo = styled(Logo)`
    position: absolute;
    top: 1.5em;
    right: 2em;
`;

const Title = styled.div`
    font-size: 2em;
    color: #fff;
`;

const Image = styled.img`
    width: 550px;
`;

const ButtonWrapper = styled.div`
    cursor: pointer;
    margin-top: 5%;
    background: #070707;
    width: fit-content;
    backdrop-filter: blur(10px);
`;
