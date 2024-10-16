import styled from 'styled-components';

export const Input = styled.input`
    padding-left: 1.375em;
    box-sizing: border-box;
    width: 50%;
    height: 2.725em;
    color: #fff;
    font-size: 1.375em;
    border-radius: 1.1875rem;
    background: transparent;
    border: 2px solid;

    @media (max-width: 1023px) {
        width: 80%;
    }

    // border-image-source: linear-gradient(90deg, #f9f3ff 0%, #959299 100%);
    &:focus {
        outline: none;
    }
`;
