import styled from 'styled-components';
import typeTitletData from '../model/title.json';
const TypeTitle = ({ type, name }: { type: number; name: string }) => {
    return (
        <Title>
            <Title>{name}님은</Title>
            <Title>{typeTitletData.title[type - 1].firstTitle}</Title>
            <Title>{typeTitletData.title[type - 1].secondTitle}</Title>
        </Title>
    );
};

export default TypeTitle;

const Title = styled.div`
    color: #fff;
    text-align: center;
    font-family: SUIT;
    font-size: 3.5rem;
    font-style: normal;
    font-weight: 600;
    @media (max-width: 768px) {
        width: 100%;
        font-size: 1em;
    }
`;
