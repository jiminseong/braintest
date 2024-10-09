import styled from 'styled-components';
import AnimationContainer from './AnimationContainer';
import { getCountByTypeAndCategory } from '../model/getCountByTypeAndCategory';

const AnimationList = ({ type, category }: { type: number; category: string }) => {
    const count = getCountByTypeAndCategory(type, category);

    return (
        <RowWrapper>
            {Array.from({ length: count }, (_, index) => (
                <AnimationContainer
                    key={index}
                    type={type}
                    count={index + 1} // 각 컨테이너에 1, 2, 3, 4와 같은 number 할당
                    category={category}
                />
            ))}
        </RowWrapper>
    );
};

export default AnimationList;

const RowWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 70%;
    flex-wrap: wrap;
    gap: 1em;
`;
