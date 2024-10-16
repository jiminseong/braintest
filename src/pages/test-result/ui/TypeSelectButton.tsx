import styled, { keyframes } from 'styled-components';
import HamburgerIcon from '../../../assets/icons/hamburger.svg?react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cursorIcon from '/cursorIcon2.svg';
const TypeSelectButton = ({ name }: { name: string }) => {
    const [typeListOpen, setTypeListOpen] = useState(false);
    const navigate = useNavigate();

    // 타입 리스트 열고 닫는 함수
    const handleSelect = () => {
        setTypeListOpen(!typeListOpen);
    };

    // 타입 선택 시 해당 경로로 이동
    const handleTypeClick = (type: number, name: string) => {
        navigate(`/test/result/${type}/${name}`);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <ButonWrapper onMouseEnter={() => handleSelect()} onMouseLeave={() => handleSelect()} onClick={handleSelect}>
            <Button>
                <HamburgerIcon />
                Types
                {/* 타입 리스트 열기 */}
                {typeListOpen && (
                    <ColumnWrapper>
                        {Array.from({ length: 16 }, (_, index) => (
                            <TypeItem key={index + 1} onClick={() => handleTypeClick(index + 1, name)}>
                                Type {index + 1}
                            </TypeItem>
                        ))}
                    </ColumnWrapper>
                )}
            </Button>
        </ButonWrapper>
    );
};

export default TypeSelectButton;

const fadeIn = keyframes`   
    from { opacity: 0; transform: translateY(-10px); }     
    to { opacity: 1; transform: translateY(0); } `;

const ButonWrapper = styled.div`
    box-sizing: border-box;
    height: 120%;
`;

const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25em;
    border-radius: 53px;
    padding: 0.25em 0.8125em;
    box-sizing: border-box;
    font-size: 1.45rem;
    font-weight: 700;
    text-align: center;
    position: relative;
    background: #d6d6d6;
    cursor: url(${cursorIcon}) 37 37, pointer;
    color: #070707;
    transition: background 0.3s ease;
    ${ButonWrapper}:hover {
        background: #ffffff;
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
    animation: ${fadeIn} 0.3s ease;
`;

const TypeItem = styled(ButonWrapper)`
    width: 100%;
    background: #d6d6d6;
    &:hover {
        background: #fff;
    }
    &:active {
        color: #fff;
        border: #fff 1px solid;
        background: #000000 !important;
    }
    text-align: center;
    cursor: url(${cursorIcon}) 37 37, pointer;
    padding: 0.25em 0em;
    border-radius: 53px;
    box-sizing: border-box;
`;
