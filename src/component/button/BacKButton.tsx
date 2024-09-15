import styled from 'styled-components';
import BackIcon from '../../assets/icons/backIcon.svg?react';

import React from 'react';

interface BacKButtonProps {
    onClick: () => void;
}

const BacKButton: React.FC<BacKButtonProps> = ({ onClick }) => {
    return (
        <RowWrapper onClick={onClick}>
            <BackIcon />
            <Text>이전</Text>
        </RowWrapper>
    );
};

export default BacKButton;

const RowWrapper = styled.div`
    cursor: pointer;
    display: flex;
    gap: 1em;
    aligin-items: center;
    position: absolute;
    right: 2em;
    top: -4em;
`;
const Text = styled.div`
    color: #727272;
    font-size: 1.125em;
    font-weight: 700;
`;
