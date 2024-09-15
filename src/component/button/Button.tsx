import styled from 'styled-components';

export const Button = styled.button`
    cursor: pointer;
    min-width: 303px;
    min-height: 58px;
    width: 20%;
    font-size: 1.25em;
    font-weight: 900;
    border: none;
    border-radius: 3.3125rem;
    background: linear-gradient(90deg, #f9f3ff 0%, #d9d9d9 100%);
    box-shadow: 0px 4px 11.8px 0px rgba(0, 0, 0, 0.25);

    &:hover {
        color: #fff;
        background: #7795ff;
        box-shadow: 0px 0px 11.8px 2px rgba(255, 255, 255, 0.27);
    }
`;
