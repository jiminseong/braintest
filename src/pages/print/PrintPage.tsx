import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useReactToPrint } from 'react-to-print';
import { useParams } from 'react-router-dom';
import TypeLogo from './ui/TypeLogo';
import TopNavigationBar from '../test-result/ui/TopNavigationBar';
import UnderTriangleIcon from '../../assets/icons/triangleIcon.svg?react';
import CloseIcon from '../../assets/icons/closeIcon.svg?react';
import QrCode from './ui/QrCode';
import cursorIcon from '/cursorIcon2.svg';
import MobileBr from '../../component/box/MobileBr';

const PrintPage = () => {
    const [isWrapperVisible, setWrapperVisible] = useState(false);
    const [isPrintContainerVisible, setPrintContainerVisible] = useState(false);
    const [ResultSvg, setResultSvg] = useState<React.FC | null>(null); // 타입 정의 추가
    const componentRef = useRef(null);
    const { type, name = '' } = useParams();
    const resultType = Number(type);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: '결과페이지',
    });

    useEffect(() => {
        console.log(name);
        if (isWrapperVisible && isPrintContainerVisible) {
            handlePrint();
        }
    }, [isWrapperVisible, isPrintContainerVisible]);

    // SVG 컴포넌트를 동적으로 import
    useEffect(() => {
        import(`../../assets/images/typeResult/type_${resultType}_bill.svg?react`)
            .then((module) => {
                setResultSvg(() => module.default);
            })
            .catch((err) => {
                console.error('SVG 로드 에러:', err);
            });
    }, [resultType]);

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
                <SaveButton onClick={handleOpenPrint}>
                    SAVE
                    <UnderTriangleIcon />
                </SaveButton>
            </RowWrapper>

            {isWrapperVisible && (
                <>
                    <QrCodeWrapper isPrintContainerVisible={isPrintContainerVisible}>
                        <QrCode name={name} type={resultType} />
                    </QrCodeWrapper>
                    <CloseButton onClick={handleClosePrint} />
                    <PrintContainerWrapper isWrapperVisible>
                        <PrintContainer
                            ref={componentRef}
                            isPrintContainerVisible={isPrintContainerVisible}
                            onAnimationEnd={handleAnimationEnd}
                        >
                            <Name>{name}님의 뇌유형은</Name>
                            {ResultSvg && <StyledResultSvg as={ResultSvg} />}
                        </PrintContainer>
                    </PrintContainerWrapper>
                </>
            )}

            <Text>
                결과지를 프린트해서 해당 유형에 맞는
                <MobileBr /> 다양한 그래픽과 특징 및 행복 찾는 방법을 간직하세요!
                <MobileBr />
                <br /> 다른 사람에게 당신의 유형을 공유하고 <MobileBr /> 주변 사람들의 유형도 알아보세요!
            </Text>
        </PageWrapper>
    );
};

export default PrintPage;

const StyledResultSvg = styled.div`
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
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 2em;
    }
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
    animation: ${({ isWrapperVisible }) => (isWrapperVisible ? fadeIn : fadeOut)} 0.15s ease-out;
    transition: visibility 0.15s ease-out;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    ::-webkit-scrollbar {
        display: none; /* Chrome, Safari, and Opera 스크롤바 숨기기 */
    }
`;

const CloseButton = styled(CloseIcon)`
    position: fixed;
    top: 2em;
    right: 2em;
    cursor: url(${cursorIcon}) 46 45, pointer;
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
    margin-top: 2em;
    position: relative;
    background: #fff;
    color: #070707;
    width: 523px;
    height: fit-content;
    box-shadow: 0px 4px 12.5px 9px rgba(0, 0, 0, 0.16);
    overflow-y: auto;
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
        margin-top: -2em;
        @page {
            size: 79mm 297mm;
        }
    }
`;

const QrCodeWrapper = styled.div<{ isPrintContainerVisible: boolean }>`
    animation: ${({ isPrintContainerVisible }) => (isPrintContainerVisible ? fadeUp : fadeDown)} 0.5s ease-in-out;
    animation-fill-mode: forwards;
    position: fixed;
    z-index: 15;
    bottom: 2em;
    left: 5%;
`;

const Name = styled.div`
    position: absolute;
    font-size: 1.625rem;
    font-weight: 800;
    left: 50%;
    top: 3em;
    color: #231815;
    transform: translate(-50%, -50%);
    @media print {
        top: 3.5em;
        font-size: 0.8rem;
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
    cursor: url(${cursorIcon}) 46 45, pointer;
    &:hover {
        animation: ${printButtonAnimation} 0.2s infinite;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

const SaveButton = styled(PrintButton)`
    display: none;
    @media (max-width: 768px) {
        font-size: 3em;
        display: flex;
    }
`;
const Text = styled.div`
    color: #070707;
    font-size: 1.5em;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 0.8125em;
    }
`;
