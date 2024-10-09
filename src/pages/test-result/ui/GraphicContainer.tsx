import styled from 'styled-components';
import BottomLogo from '../../../assets/icons/bottomLogo.svg?react';
import AnimationRow from './AnimationList';
const GraphicContainer = ({ type }: { type: number }) => {
    console.log(type);
    return (
        <GraphicContainerWrapper>
            <Wrapper>
                <Title>GRAPHICS PROCESS</Title>

                <Column>
                    <Text>Emotion cell body_감정세포체</Text>
                    <Text>감정뉴런을 구성하는 한 부분으로 type{type}의 핵이 있다.</Text>
                    <AnimationRow type={type} category="saepo" />
                </Column>

                <Column>
                    <Text>emotion dendrite_감정가지돌기</Text>
                    <Text>감정세포에 달려 감정 자극을 중계하는 가느다란 세포질의 돌기이다.</Text>
                    <AnimationRow type={type} category="gaji" />
                </Column>

                <Column>
                    <Text>emotion axon_감정축삭돌기</Text>
                    <Text>감정세포에 달려 감정 자극을 중계하는 가느다란 세포질의 돌기이다.</Text>
                    <AnimationRow type={type} category="chucksack" />
                </Column>
                <StyledColumn>
                    <BottomLogo />
                    <BottomText>ⓒ 2024 WHY ARE YOU NERVOUS :Look Inside My Brain, All rights reserved.</BottomText>
                </StyledColumn>
            </Wrapper>
        </GraphicContainerWrapper>
    );
};

export default GraphicContainer;

const GraphicContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    border-radius: 3.125em 3.125em 0px 0px;
    background: #f4f4f4;
    margin-top: 5em;
    padding: 5em 0em;
    box-sizing: border-box;
`;

const Wrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 5em;
`;

const Column = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25em;
`;

const StyledColumn = styled(Column)`
    margin-top: 30em;
`;
const Title = styled.div`
    color: #070707;
    text-align: center;
    font-size: 3.5em;
    font-weight: 500;
`;

const Text = styled.div`
    color: #070707;
    text-align: center;
    font-size: 1em;
    font-weight: 500;
`;

const BottomText = styled.div`
    color: #070707;
    font-weight: 500;
    letter-spacing: -0.32px;
    text-transform: capitalize;
`;
