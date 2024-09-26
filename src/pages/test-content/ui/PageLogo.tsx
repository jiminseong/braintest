import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import firstUrl from '../../../assets/images/firstLogo.png';
import secondUrl from '../../../assets/images/secondLogo.png';
import thirdUrl from '../../../assets/images/thirdLogo.png';

interface PageLogoProps {
    page: number;
    width: string;
    rotate?: boolean; // rotate prop 추가, 기본값은 false
}

const PageLogo: React.FC<PageLogoProps> = ({ width, page, rotate = false }) => {
    return (
        <>
            {page === 1 && <Logo width={width} rotate={rotate} src={firstUrl} />}
            {page === 2 && <Logo width={width} rotate={rotate} src={secondUrl} />}
            {page === 3 && <Logo width={width} rotate={rotate} src={thirdUrl} />}
        </>
    );
};

export default PageLogo;

const rotateAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const Logo = styled.img<{ width: string; rotate: boolean }>`
    width: ${(props) => props.width};
    animation: ${(props) =>
        props.rotate
            ? css`
                  ${rotateAnimation} 5s linear infinite
              `
            : 'none'};
`;
