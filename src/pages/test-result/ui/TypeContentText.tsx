import styled from 'styled-components';
import typeResultData from '../model/result.json';

const TypeContentText = ({ type }: { type: number }) => {
    return (
        <TextWrapper>
            <Text>{typeResultData.result[type - 1].firstContent}</Text>
            <Text>{typeResultData.result[type - 1].secondContent}</Text>
        </TextWrapper>
    );
};

export default TypeContentText;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5em;
`;

const Text = styled.div`
    color: #000;
    font-size: 1.4em;
    font-weight: 500;
    line-height: 2em;
`;
