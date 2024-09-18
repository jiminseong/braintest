import styled from 'styled-components';
import React from 'react';

interface GreenContainerProps {
    minWidth: string;
    maxWidth: string;
    minHeight: string;
    maxHeight: string;
    top: string;
    left: string;
    children: React.ReactNode;
}

const GreenContainer: React.FC<GreenContainerProps> = ({
    minWidth,
    maxWidth,
    minHeight,
    maxHeight,
    top,
    left,
    children,
}) => {
    return (
        <GreenWrapper
            minWidth={minWidth}
            maxWidth={maxWidth}
            minHeight={minHeight}
            maxHeight={maxHeight}
            top={top}
            left={left}
        >
            {children}
        </GreenWrapper>
    );
};

export default GreenContainer;

interface GreenWrapperProps {
    minWidth: string;
    maxWidth: string;
    minHeight: string;
    maxHeight: string;
    top: string;
    left: string;
}

const GreenWrapper = styled.div<GreenWrapperProps>`
    z-index: 2;
    position: absolute;
    color: #ffffff;
    line-height: 2em;
    border: 3px solid #7aff77;
    box-shadow: 0px 0px 8.5px 1px #77ceff;
    min-width: ${({ minWidth }) => minWidth};
    max-width: ${({ maxWidth }) => maxWidth};
    min-height: ${({ minHeight }) => minHeight};
    max-height: ${({ maxHeight }) => maxHeight};
    top: ${({ top }) => top};
    left: ${({ left }) => left};
    padding-left: 0.5em;
    padding-right: 0.5em;
    box-sizing: border-box;
`;
