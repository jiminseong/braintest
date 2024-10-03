import styled from 'styled-components';
import One from '../../../assets/icons/1_selectIcon.svg?react';
import Two from '../../../assets/icons/2_selectIcon.svg?react';
import Three from '../../../assets/icons/3_selectIcon.svg?react';
import Four from '../../../assets/icons/4_selectIcon.svg?react';
import Five from '../../../assets/icons/5_selectIcon.svg?react';

import React from 'react';

interface SelectButtonProps {
    onClickOne: () => void;
    onClickTwo: () => void;
    onClickThree: () => void;
    onClickFour: () => void;
    onClickFive: () => void;
}

const SelectButton: React.FC<SelectButtonProps> = ({
    onClickOne,
    onClickTwo,
    onClickThree,
    onClickFour,
    onClickFive,
}) => {
    return (
        <RowWrapper>
            <IconWrapper onClick={onClickOne}>
                <Icon>
                    <One />
                </Icon>
                <Text>전혀 아니다</Text>
            </IconWrapper>
            <IconWrapper onClick={onClickTwo}>
                <Icon>
                    <Two />
                </Icon>
                <Text>가끔 그렇다</Text>
            </IconWrapper>
            <IconWrapper onClick={onClickThree}>
                <Icon>
                    <Three />
                </Icon>
                <Text>간혹 그렇다</Text>
            </IconWrapper>
            <IconWrapper onClick={onClickFour}>
                <Icon>
                    <Four />
                </Icon>
                <Text>자주 그렇다</Text>
            </IconWrapper>
            <IconWrapper onClick={onClickFive}>
                <Icon>
                    <Five />
                </Icon>
                <Text>대부분 그렇다</Text>
            </IconWrapper>
        </RowWrapper>
    );
};

export default SelectButton;

const Icon = styled.div`
    display: flex;
    height: 6em;
    align-items: center;
`;
const RowWrapper = styled.div`
    margin-top: 6em;
    width: 100%;
    display: flex;
    gap: 10em;
    justify-content: center;
`;

const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 3em;
    cursor: pointer;
`;

const Text = styled.div`
    border-radius: 53px;
    border: 1.5px solid rgba(255, 255, 255, 0.6);
    color: rgba(255, 255, 255, 0.8);

    text-align: center;

    font-family: SUIT;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    width: 100%;
    color: #444;
    font-size: 1.375em;
    text-align: center;
    font-weight: 700;
`;
