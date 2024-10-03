import styled from 'styled-components';
import Logo from '../../../assets/icons/blackLogo.svg?react';

const TopNavigationBar = () => {
    return (
        <TopNavigationWrapper>
            <TestStartButton>TestStart</TestStartButton>
            <BlackLogo />
            <div style={{ width: '5em' }} />
        </TopNavigationWrapper>
    );
};

export default TopNavigationBar;

const TopNavigationWrapper = styled.div`
    position: fixed;
    padding: 0em 1em;
    background: #fff;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    top: 0;
    height: 5em;
    z-index: 1;
`;

const TestStartButton = styled.div`
    width: fit-content;
    text-align: center;
    font-weight: 600;
    width: 5em;
    height: 2em;
`;
const BlackLogo = styled(Logo)`
    width: 5em;
    height: 3em;
`;
