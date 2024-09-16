import styled from 'styled-components';
import React from 'react';

interface GreenContainerProps {
    minWidth: string;
    maxWidth: string;
    height: string;
    top: string;
    left: string;
    children: React.ReactNode;
}

const GreenContainer: React.FC<GreenContainerProps> = ({ minWidth, maxWidth, height, top, left, children }) => {
    return (
        <GreenWrapper minWidth={minWidth} maxWidth={maxWidth} height={height} top={top} left={left}>
            {children}
        </GreenWrapper>
    );
};

export default GreenContainer;

interface GreenWrapperProps {
    minWidth: string;
    height: string;
    top: string;
    left: string;
    maxWidth: string;
}

const GreenWrapper = styled.div<GreenWrapperProps>`
    position: absolute;
    color: #ffffff;
    line-height: 2em;
    border: 3px solid #7aff77;
    box-shadow: 0px 0px 8.5px 1px #77ceff;
    min-width: ${({ minWidth }) => minWidth};
    max-width: ${({ maxWidth }) => maxWidth};
    min-height: ${({ height }) => height};
    height: ${({ height }) => height};
    top: ${({ top }) => top};
    left: ${({ left }) => left};
`;
