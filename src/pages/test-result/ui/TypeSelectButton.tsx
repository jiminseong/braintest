import styled from 'styled-components';
import HamburgerIcon from '../../../assets/icons/hamburger.svg?react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TypeSelectButton = () => {
    const [typeListOpen, setTypeListOpen] = useState(false);
    const navigate = useNavigate();

    // 타입 리스트 열고 닫는 함수
    const handleSelect = () => {
        setTypeListOpen(!typeListOpen);
    };

    // 타입 선택 시 해당 경로로 이동
    const handleTypeClick = (type: number) => {
        const name = 'exampleName'; // 이름을 필요한 값으로 변경하세요
        navigate(`/test/result/${type}/${name}`);
    };

    return (
        <ButonWrapper onClick={handleSelect}>
            <HamburgerIcon />
            Types
            {/* 타입 리스트 열기 */}
            {typeListOpen && (
                <ColumnWrapper>
                    {Array.from({ length: 16 }, (_, index) => (
                        <TypeItem key={index + 1} onClick={() => handleTypeClick(index + 1)}>
                            Type {index + 1}
                        </TypeItem>
                    ))}
                </ColumnWrapper>
            )}
        </ButonWrapper>
    );
};

export default TypeSelectButton;

const ButonWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.25em;
    align-items: center;
    padding: 0.125em 1.25em;
    border-radius: 53px;
    box-sizing: border-box;
    font-size: 1.8125rem;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
    position: relative;
    background: #ffffff;
    &:hover {
        background: #b3b3b3;
    }
`;

const ColumnWrapper = styled.div`
    position: absolute;
    top: 120%;
    left: 0;
    width: 100%;
    z-index: 10;
    display: flex;
    flex-direction: column;
    gap: 0.25em;
`;

const TypeItem = styled(ButonWrapper)`
    border-radius: 53px;
    background: #fff;
    text-align: center;
    cursor: pointer;
`;
