import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useReactToPrint } from 'react-to-print';
import { useParams } from 'react-router-dom';
import TypeLogo from './ui/TypeLogo';
import TopNavigationBar from './ui/TopNavigationBar';
import UnderTriangleIcon from '../../assets/icons/triangleIcon.svg?react';
import CloseIcon from '../../assets/icons/closeIcon.svg?react';
// import result5 from '../../assets/images/typeResult/5.png';
import ResultSvg from '../../assets/images/typeResult/5.svg?react';

const PrintPage = () => {
    const [isWrapperVisible, setWrapperVisible] = useState(false);
    const [isPrintContainerVisible, setPrintContainerVisible] = useState(false);
    const componentRef = useRef(null);
    const { type, name = '' } = useParams();
    const resultType = Number(type);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: '결과페이지',
    });

    console.log(name);

    useEffect(() => {
        if (isWrapperVisible && isPrintContainerVisible) {
            handlePrint();
        }
    }, [isWrapperVisible, isPrintContainerVisible]);

    const handleOpenPrint = () => {
        setWrapperVisible(true);
        setPrintContainerVisible(true);
    };

    const handleClosePrint = () => {
        setPrintContainerVisible(false);
    };

    const handleAnimationEnd = () => {
        if (!isPrintContainerVisible) {
            setWrapperVisible(false);
        }
    };

    return (
        <PageWrapper>
            <TopNavigationBar />
            <RowWrapper>
                <TypeLogo type={resultType} />
                <PrintButton onClick={handleOpenPrint}>
                    PRINT
                    <UnderTriangleIcon />
                </PrintButton>
            </RowWrapper>

            {isWrapperVisible && (
                <>
                    <CloseButton onClick={handleClosePrint} />
                    <PrintContainerWrapper isWrapperVisible>
                        <PrintContainer
                            ref={componentRef}
                            isPrintContainerVisible={isPrintContainerVisible}
                            onAnimationEnd={handleAnimationEnd}
                        >
                            <StyledResultSvg />
                        </PrintContainer>
                    </PrintContainerWrapper>
                </>
            )}

            <Text>
                결과지를 프린트해서 해당 유형에 맞는 다양한 그래픽과 특징 및 행복 찾는 방법을 간직하세요!
                <br /> 다른 사람에게 당신의 유형을 공유하고 주변 사람들의 유형도 알아보세요!
            </Text>
        </PageWrapper>
    );
};

export default PrintPage;

const StyledResultSvg = styled(ResultSvg)`
    width: 100%;
    height: auto;
`;
const PageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;
    background: #fff;
`;

const RowWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 80%;
    justify-content: center;
    align-items: center;
    gap: 5em;
`;

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const PrintContainerWrapper = styled.div<{ isWrapperVisible: boolean }>`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    background: rgba(217, 217, 217, 0.3);
    backdrop-filter: blur(10px);
    z-index: 10;
    display: flex;
    justify-content: center;
    padding-top: 2em;
    box-sizing: border-box;
    transition: fade in;
    animation: ${({ isWrapperVisible }) => (isWrapperVisible ? fadeIn : fadeOut)} 0.15s ease-out;
    transition: visibility 0.15s ease-out;
`;

const CloseButton = styled(CloseIcon)`
    position: fixed;
    top: 2em;
    right: 2em;
    cursor: pointer;
    z-index: 15;
`;

const fadeUp = keyframes`
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
`;

const fadeDown = keyframes`
    from { transform: translateY(0); }
    to { transform: translateY(100%); }
`;

const PrintContainer = styled.div<{
    isPrintContainerVisible: boolean;
}>`
    background: #fff;
    color: #070707;
    max-width: 523px;
    height: fit-content;
    box-shadow: 0px 4px 12.5px 9px rgba(0, 0, 0, 0.16);
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    animation: ${({ isPrintContainerVisible }) => (isPrintContainerVisible ? fadeUp : fadeDown)} 0.5s ease-in-out;
    animation-fill-mode: forwards;

    @media print {
        width: 79mm;
        height: 297mm;
        box-shadow: none;
        animation: none;

        @page {
            size: 79mm 297mm;
        }
    }
`;

const printButtonAnimation = keyframes`
    0% {    
        transform: rotate(0deg);
    }
    50% {    
        transform: rotate(2deg);
    }
    100% {
        transform: rotate(-2deg);
    }
`;

const PrintButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25em;
    border-radius: 2em;
    background: #77ceff;
    color: #070707;
    font-size: 5em;
    font-weight: 700;
    padding: 1em 1.5em;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
        animation: ${printButtonAnimation} 0.2s infinite;
    }
`;

const Text = styled.div`
    color: #070707;
    font-size: 1.5em;
    text-align: center;
`;
