import styled from 'styled-components';
import Logo from '../../../assets/icons/bottomLogo.svg?react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import cursorIcon from '/cursorIcon2.svg';
interface TopNavigationWrapperProps {
    $isVisible: boolean;
}

export const TopNavigationBar = () => {
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
            <BlackLogo onClick={() => navigate('/')} />
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
    justify-content: center;
    align-items: center;
    width: 100%;
    top: ${({ $isVisible }) => ($isVisible ? '0' : '-5em')};
    height: 5em;
    z-index: 4;
    cursor: url(${cursorIcon}) 37 37, pointer;
    border-radius: 0px 0px 3.125em 3.125em;
    @media (max-width: 1023px) {
        top: ${({ $isVisible }) => ($isVisible ? '0' : '-8em')};
        height: 8em;
    }
`;

const BlackLogo = styled(Logo)`
    margin-top: 1em;
    width: 10em;
    cursor: url(${cursorIcon}) 37 37, pointer;
`;
