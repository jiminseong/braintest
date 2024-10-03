import styled from 'styled-components';
import { useEffect } from 'react';
import { useSurveyStore } from '../../store/store';
import { useLocation } from 'react-router-dom';
import TopNavigation from './ui/TopNavigationBar';
import TypeLogo from './ui/TypeLogo';
import TypeNeuron from './ui/TypeNeuron';
import TypeTitle from './ui/TypeTitle';
import TypeStructure from './ui/TypeStructure';
import TypeContentText from './ui/TypeContentText';
import GraphicContainer from './ui/GraphicContainer';
import MiddleNavigationBar from './ui/MiddleNavigationBar';

const TestResultPage = () => {
    const { resetAnswers } = useSurveyStore();
    const { state } = useLocation();
    const { resultType, name } = state;

    useEffect(() => {
        resetAnswers();
    }, []);

    return (
        <PageWrapper>
            <TopNavigation />
            <TypeLogo type={resultType} />

            <TypeIndexContent>
                <ContentWrapper>
                    <MiddleNavigationBar />
                    <TypeNeuron type={resultType} />
                    <TypeTitle name={name} type={resultType} />
                    <TypeStructure type={resultType} />
                </ContentWrapper>
            </TypeIndexContent>

            <TypeMainContent>
                <ContentWrapper>
                    <IndexText>'Type{resultType}'에 대하여</IndexText>
                    <TypeContentText type={resultType} />
                </ContentWrapper>
                <GraphicContainer type={resultType} />
            </TypeMainContent>
        </PageWrapper>
    );
};

export default TestResultPage;

const PageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: em;
    background-color: #ffffff;
    padding-top: 7em;
`;

const TypeIndexContent = styled.div`
    z-index: 2;
    background: #070707;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5em;
    box-sizing: border-box;
`;

const TypeMainContent = styled.div`
    background: #ffffff;
    width: 100%;
    z-index: 2;
    border-radius: 3.125em 3.125em 0px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 5em;
    box-sizing: border-box;
`;

const ContentWrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 10em;
    align-items: center;
    position: relative;
    padding-top: 10em;
`;

const IndexText = styled.div`
    color: #070707;
    font-size: 4.375em;
    font-weight: 500;
`;
