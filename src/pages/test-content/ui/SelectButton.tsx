import styled, { keyframes } from 'styled-components';
import One from '../../../assets/icons/1_selectIcon.svg?react';
import Two from '../../../assets/icons/2_selectIcon.svg?react';
import Three from '../../../assets/icons/3_selectIcon.svg?react';
import Four from '../../../assets/icons/4_selectIcon.svg?react';
import Five from '../../../assets/icons/5_selectIcon.svg?react';
import cursorIcon from '/cursorIcon2.svg';
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
                <AnimatedIcon>
                    <One />
                </AnimatedIcon>
                <Text>전혀 아니다</Text>
            </IconWrapper>
            <IconWrapper onClick={onClickTwo}>
                <AnimatedIcon>
                    <Two />
                </AnimatedIcon>
                <Text>가끔 그렇다</Text>
            </IconWrapper>
            <IconWrapper onClick={onClickThree}>
                <AnimatedIcon>
                    <Three />
                </AnimatedIcon>
                <Text>보통 그렇다</Text>
            </IconWrapper>
            <IconWrapper onClick={onClickFour}>
                <AnimatedIcon>
                    <Four />
                </AnimatedIcon>
                <Text>자주 그렇다</Text>
            </IconWrapper>
            <IconWrapper onClick={onClickFive}>
                <AnimatedIcon>
                    <Five />
                </AnimatedIcon>
                <Text>대부분 그렇다</Text>
            </IconWrapper>
        </RowWrapper>
    );
};

export default SelectButton;

const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 2em;
    cursor: url(${cursorIcon}) 37 37, pointer;
`;

const rotateScaleAnimation = keyframes`
    0% {
        transform: rotate(0deg) scale(1);
    }
    50% {
        transform: rotate(180deg) scale(1.2);
    }
    100% {
        transform: rotate(360deg) scale(1);
    }
`;

const AnimatedIcon = styled.div`
    display: flex;
    height: 6em;

    align-items: center;

    ${IconWrapper}:hover & {
        animation: ${rotateScaleAnimation} 3s linear infinite;
    }
`;

const RowWrapper = styled.div`
    margin-top: 6em;
    width: 100%;
    display: flex;
    gap: 5em;
    justify-content: center;
`;

const Text = styled.div`
    border-radius: 53px;
    border: 1px solid rgba(255, 255, 255, 0.6);
    color: rgba(255, 255, 255, 0.8);
    text-align: center;
    -webkit-text-stroke-color: #fff;
    width: 100%;
    padding: 0.6875em 2em;
    box-sizing: border-box;
    font-size: 1em;
    font-weight: 700;
    transition: border 0.5s, background 1.5s, box-shadow 1.5s;

    ${IconWrapper}:hover & {
        border: 1px solid #f9f3ff;
        background: linear-gradient(
            0deg,
            rgba(249, 243, 255, 0.15) 0%,
            rgba(157, 153, 161, 0.15) 14%,
            rgba(108, 105, 110, 0.16) 33%,
            rgba(7, 7, 7, 0.16) 100%
        );
        box-shadow: 0px 0px 11.8px 1px rgba(255, 255, 255, 0.27);
    }
`;
