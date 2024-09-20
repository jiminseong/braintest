import styled from 'styled-components';
import BackIcon from '../../assets/icons/backIcon.svg?react';

import React from 'react';

interface BacKButtonProps {
    onClick: () => void;
    top?: string;
    right?: string;
}

const BacKButton: React.FC<BacKButtonProps> = ({ onClick, top = '-4em', right = '2em' }) => {
    return (
        <RowWrapper onClick={onClick} top={top} right={right}>
            <BackIcon />
            <Text>이전</Text>
        </RowWrapper>
    );
};

export default BacKButton;

const RowWrapper = styled.div<{ top: string; right: string }>`
    cursor: pointer;
    display: flex;
    gap: 0.25em;
    align-items: center;
    position: absolute;
    right: ${(props) => props.right};
    top: ${(props) => props.top};
`;

const Text = styled.div`
    color: #727272;
    font-size: 1em;
    font-weight: 700;
`;
