import styled from 'styled-components';
import BackIcon from '../../assets/icons/backIcon.svg?react';
import RightIcon from '../../assets/icons/rightIcon.svg?react'; // 홈 아이콘 추가

import React from 'react';

interface NavigationButtonProps {
    onClick: () => void;
    top?: string;
    right?: string;
    home?: boolean; // home props 추가
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ onClick, top = '-4em', right = '2em', home = false }) => {
    return (
        <RowWrapper onClick={onClick} top={top} right={right}>
            {home ? (
                <>
                    <Text>홈</Text>
                    <RightIcon />
                </>
            ) : (
                <>
                    <BackIcon />
                    <Text>이전</Text>
                </>
            )}
        </RowWrapper>
    );
};

export default NavigationButton;

const RowWrapper = styled.div<{ top: string; right: string }>`
    cursor: pointer;
    display: flex;
    gap: 0.25em;
    align-items: center;
    position: fixed;
    right: ${(props) => props.right};
    top: ${(props) => props.top};
`;

const Text = styled.div`
    color: #727272;
    font-size: 1em;
    font-weight: 700;
`;
