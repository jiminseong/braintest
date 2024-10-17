import styled from 'styled-components';
import BackIcon from '../../assets/icons/backIcon.svg?react';
import RightIcon from '../../assets/icons/backIcon2.svg?react'; // 홈 아이콘 추가
import cursorIcon from '/cursorIcon2.svg';
import React from 'react';

interface NavigationButtonProps {
    onClick: () => void;
    top?: string;
    right?: string;
    home?: boolean; // home props 추가
    mobileTop?: string;
    mobileLeft?: string;
    mobileRight?: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({
    onClick,
    top = '-4em',
    right = '2em',
    home = false,
    mobileTop = '3em',
    mobileLeft,
    mobileRight,
}) => {
    return (
        <NavigationButtonWrapper
            onClick={onClick}
            top={top}
            right={right}
            mobileTop={mobileTop}
            mobileLeft={mobileLeft}
            mobileRight={mobileRight}
        >
            {home ? (
                <RowWrapper2>
                    <Text>홈</Text>
                    <RightIcon />
                </RowWrapper2>
            ) : (
                <RowWrapper2>
                    <BackIcon />
                    <Text>이전</Text>
                </RowWrapper2>
            )}
        </NavigationButtonWrapper>
    );
};

export default NavigationButton;

const NavigationButtonWrapper = styled.div<{
    top: string;
    right: string;
    mobileRight?: string;
    mobileLeft?: string;
    mobileTop?: string;
}>`
    z-index: 10;
    cursor: url(${cursorIcon}) 37 37, pointer;
    position: fixed;
    right: ${(props) => props.right};
    top: ${(props) => props.top};
    @media (max-width: 768px) {
        right: ${(props) => props.mobileRight};
        left: ${(props) => props.mobileLeft};
        top: ${(props) => props.mobileTop};
    }
`;

const RowWrapper2 = styled.div`
    display: flex;
    gap: 0.25em;
    align-items: center;
`;
const Text = styled.div`
    color: #727272;
    font-size: 1em;
    font-weight: 700;
`;
