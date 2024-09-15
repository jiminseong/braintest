import styled from 'styled-components';
import One from '../../../assets/icons/1_selectIcon.svg?react';
import Two from '../../../assets/icons/2_selectIcon.svg?react';
import Three from '../../../assets/icons/3_selectIcon.svg?react';
import Four from '../../../assets/icons/4_selectIcon.svg?react';
import Five from '../../../assets/icons/5_selectIcon.svg?react';

const SelectButton = () => {
    return (
        <RowWrapper>
            <IconWrapper>
                <One />
                <Text>전혀 아니다</Text>
            </IconWrapper>
            <IconWrapper>
                <Two />
                <Text>가끔 그렇다</Text>
            </IconWrapper>
            <IconWrapper>
                <Three />
                <Text>간혹 그렇다</Text>
            </IconWrapper>
            <IconWrapper>
                <Four />
                <Text>자주 그렇다</Text>
            </IconWrapper>
            <IconWrapper>
                <Five />
                <Text>대부분 그렇다</Text>
            </IconWrapper>
        </RowWrapper>
    );
};

export default SelectButton;

const RowWrapper = styled.div`
    margin-top: 5em;
    width: 100%;
    display: flex;
    gap: 10em;
    justify-content: center;
`;

const IconWrapper = styled.div`
    width: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 1em;
`;

const Text = styled.div`
    color: #444;
    text-align: center;
    font-weight: 700;
`;
