import styled from 'styled-components';
import Logo from '../../../assets/icons/blackLogo.svg?react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

interface TopNavigationWrapperProps {
    $isVisible: boolean;
}

const TopNavigationBar = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(true); // 상단바의 보임 여부
    const lastScrollY = useRef(0);

    const handleScroll = () => {
        // 현재 스크롤 위치
        const currentScrollY = window.scrollY;
        const isScrollingUp = currentScrollY < lastScrollY.current;

        // 스크롤을 올릴 때는 상단바를 보여주고, 내릴 때는 숨깁니다.
        setIsVisible(isScrollingUp || currentScrollY < 100); // 상단에서 100px 이내일 때도 항상 보이게 함

        // 마지막 스크롤 위치를 업데이트합니다.
        lastScrollY.current = currentScrollY;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <TopNavigationWrapper $isVisible={isVisible}>
            <TestStartButton onClick={() => navigate('/test/content')}>TestStart</TestStartButton>
            <BlackLogo onClick={() => navigate('/')} />
            <div style={{ width: '5em' }} />
        </TopNavigationWrapper>
    );
};

export default TopNavigationBar;

const TopNavigationWrapper = styled.div<TopNavigationWrapperProps>`
    position: fixed;
    padding: 0em 1em;
    background: #fff;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    top: ${({ $isVisible }) => ($isVisible ? '0' : '-5em')};
    height: 5em;
    z-index: 4;
    cursor: pointer;
    border-radius: 0px 0px 3.125em 3.125em;
`;

const TestStartButton = styled.div`
    visibility: hidden;
    width: fit-content;
    text-align: center;
    font-weight: 600;
    width: 5em;
    height: 2em;
`;
const BlackLogo = styled(Logo)`
    width: 5em;
    height: 3em;
    cursor: pointer;
`;
