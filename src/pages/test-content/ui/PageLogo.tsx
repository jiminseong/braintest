import React from 'react';
import styled from 'styled-components';
import firstUrl from '../../../assets/images/firstLogo.png';
import secondUrl from '../../../assets/images/secondLogo.png';
import thirdUrl from '../../../assets/images/thirdLogo.png';

interface PageLogoProps {
    page: number;
    big?: boolean; // big의 기본값을 false로 설정할 예정이므로 옵셔널로 만듭니다.
}

const PageLogo: React.FC<PageLogoProps> = ({ page, big = false }) => {
    // big의 기본값을 false로 설정
    return (
        <>
            {page === 0 && <Logo big={big} src={firstUrl} />}
            {page === 1 && <Logo big={big} src={secondUrl} />}
            {page === 2 && <Logo big={big} src={thirdUrl} />}
        </>
    );
};

export default PageLogo;

const Logo = styled.img<{ big: boolean }>`
    // big을 props로 받아서 처리
    width: ${(props) => (props.big ? '25%' : '10%')};
`;
