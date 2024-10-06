import styled from 'styled-components';
import AnimationContainer from './AnimationContainer';

const SaePoChae = () => {
    return (
        <RowWrapper>
            <AnimationContainer />
            <AnimationContainer />
            <AnimationContainer />
            <AnimationContainer />
        </RowWrapper>
    );
};

export default SaePoChae;
const RowWrapper = styled.div`
    display: flex;
    gap: 1em;
`;
