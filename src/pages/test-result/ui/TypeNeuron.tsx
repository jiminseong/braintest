// import type1 from '../../../assets/images/typeNeuron/1.png';
import styled from 'styled-components';
import type2 from '../../../assets/images/typeNeuron/2.png';
// import type3 from '../../../assets/images/typeNeuron/3.png';
// import type3 from '../../../assets/images/typeNeuron/4.png';
// import type3 from '../../../assets/images/typeNeuron/5.png';
// import type3 from '../../../assets/images/typeNeuron/6.png';
// import type3 from '../../../assets/images/typeNeuron/7.png';
// import type3 from '../../../assets/images/typeNeuron/8.png';
// import type3 from '../../../assets/images/typeNeuron/9.png';
// import type3 from '../../../assets/images/typeNeuron/10.png';
// import type3 from '../../../assets/images/typeNeuron/11.png';
// import type3 from '../../../assets/images/typeNeuron/12.png';
// import type3 from '../../../assets/images/typeNeuron/13.png';
// import type3 from '../../../assets/images/typeNeuron/14.png';
// import type3 from '../../../assets/images/typeNeuron/15.png';
// import type3 from '../../../assets/images/typeNeuron/16.png';

const TypeNeuron = ({ type }: { type: number }) => {
    // 타입에 따른 이미지 매핑
    const neuronMap: { [key: number]: string } = {
        // 1: type1,
        2: type2,
        // 3: type3,
        // ... 필요한 만큼 매핑 추가
    };

    const neuronUrl = neuronMap[type] || type2; // 기본값으로 type1 사용

    return (
        <ImageWrapper>
            <NeuronImage src={neuronUrl} alt="Neuron" />
        </ImageWrapper>
    );
};

export default TypeNeuron;

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const NeuronImage = styled.img`
    width: 90%;
`;
