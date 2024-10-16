import styled from 'styled-components';

const MobileBr = styled.br`
    display: none;
    @media (max-width: 768px) {
        display: flex;
    }
`;

export default MobileBr;
