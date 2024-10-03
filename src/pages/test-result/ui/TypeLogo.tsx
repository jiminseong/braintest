import styled from 'styled-components';
// import type1 from '../../../assets/images/typeLogo/1.png';
import type2 from '../../../assets/images/typeLogo/2.png';
// import type3 from '../../../assets/images/typeLogo/3.png';
// import type3 from '../../../assets/images/typeLogo/4.png';
// import type3 from '../../../assets/images/typeLogo/5.png';
// import type3 from '../../../assets/images/typeLogo/6.png';
// import type3 from '../../../assets/images/typeLogo/7.png';
// import type3 from '../../../assets/images/typeLogo/8.png';
// import type3 from '../../../assets/images/typeLogo/9.png';
// import type3 from '../../../assets/images/typeLogo/10.png';
// import type3 from '../../../assets/images/typeLogo/11.png';
// import type3 from '../../../assets/images/typeLogo/12.png';
// import type3 from '../../../assets/images/typeLogo/13.png';
// import type3 from '../../../assets/images/typeLogo/14.png';
// import type3 from '../../../assets/images/typeLogo/15.png';
// import type3 from '../../../assets/images/typeLogo/16.png';

interface TypeLogoImageProps {
    logoUrl: string;
}

const TypeLogo = ({ type }: { type: number }) => {
    // 타입에 따른 이미지 매핑
    const logoMap: { [key: number]: string } = {
        // 1: type1,
        2: type2,
        // 3: type3,
        // ... 필요한 만큼 매핑 추가
    };

    const logoUrl = logoMap[type] || type2; // 기본값으로 type1 사용

    return <TypeLogoImage logoUrl={logoUrl}>TYPE {type}</TypeLogoImage>;
};

export default TypeLogo;

const TypeLogoImage = styled.div<TypeLogoImageProps>`
    min-width: 30%; // 컨테이너 너비
    min-height: 100%; // 컨테이너 높이
    color: #ffffff;
    font-size: 5em;
    background-image: url(${(props) => props.logoUrl});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
`;
