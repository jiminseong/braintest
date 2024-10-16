import styled from 'styled-components';
import cursorIcon2 from '/cursorIcon2.svg';

export const Button = styled.button`
    cursor: url(${cursorIcon2}) 37 37, pointer;
    height: 58px;
    min-width: 303px;
    max-width: 303px;
    width: 100%;
    font-size: 1.125em;
    font-weight: 900;
    border: none;
    border-radius: 3.3125rem;
    background: linear-gradient(90deg, #f9f3ff 0%, #d9d9d9 100%);
    box-shadow: 0px 4px 11.8px 0px rgba(0, 0, 0, 0.25);
    transition: all 0.5s;

    &:hover {
        color: #fff;
        background: #7795ff;
        box-shadow: 0px 0px 11.8px 2px rgba(255, 255, 255, 0.27);
    }
    @media (max-width: 1023px) {
        min-width: 13px;
    }
`;

export const BlueButton = styled(Button)`
    background: #fff;
`;

export const RedButton = styled(BlueButton)`
    &:hover {
        color: #fff;
        background: #ff6565;
        box-shadow: 0px 0px 11.8px 2px rgba(255, 255, 255, 0.27);
    }
`;
