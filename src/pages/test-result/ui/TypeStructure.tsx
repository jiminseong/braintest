// import type1 from '../../../assets/images/typeStructure/1.png';
import styled from 'styled-components';
import type2 from '../../../assets/images/typeStructure/2.png';
// import type3 from '../../../assets/images/typeStructure/3.png';
// import type3 from '../../../assets/images/typeStructure/4.png';
// import type3 from '../../../assets/images/typeStructure/5.png';
// import type3 from '../../../assets/images/typeStructure/6.png';
// import type3 from '../../../assets/images/typeStructure/7.png';
// import type3 from '../../../assets/images/typeStructure/8.png';
// import type3 from '../../../assets/images/typeStructure/9.png';
// import type3 from '../../../assets/images/typeStructure/10.png';
// import type3 from '../../../assets/images/typeStructure/11.png';
// import type3 from '../../../assets/images/typeStructure/12.png';
// import type3 from '../../../assets/images/typeStructure/13.png';
// import type3 from '../../../assets/images/typeStructure/14.png';
// import type3 from '../../../assets/images/typeStructure/15.png';
// import type3 from '../../../assets/images/typeStructure/16.png';

const TypeStructure = ({ type }: { type: number }) => {
    // 타입에 따른 이미지 매핑
    const structureMap: { [key: number]: string } = {
        // 1: type1,
        2: type2,
        // 3: type3,
        // ... 필요한 만큼 매핑 추가
    };

    const structureUrl = structureMap[type] || type2; // 기본값으로 type1 사용

    return (
        <ImageWrapper>
            <NeuronImage src={structureUrl} alt="Structure" />
        </ImageWrapper>
    );
};

export default TypeStructure;

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const NeuronImage = styled.img`
    width: 60%;
`;
