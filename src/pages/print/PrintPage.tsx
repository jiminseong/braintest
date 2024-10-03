import { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useReactToPrint } from 'react-to-print';
import { useParams } from 'react-router-dom';
import TypeLogo from './ui/TypeLogo';
import TopNavigationBar from './ui/TopNavigationBar';
import UnderTriangleIcon from '../../assets/icons/triangleIcon.svg?react';
import CloseIcon from '../../assets/icons/closeIcon.svg?react';

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
                <PrintContainerWrapper isWrapperVisible>
                    <CloseButton onClick={handleClosePrint} />
                    <PrintContainer
                        isPrintContainerVisible={isPrintContainerVisible}
                        onAnimationEnd={handleAnimationEnd}
                        ref={componentRef}
                    >
                        <TypeDescription>
                            <h2>Type 2는 뇌의 기능이 전체적으로 균등하게 활동하는 유형입니다.</h2>
                            <p>
                                협응, 균형, 감정 및 인지처리 기능이 발달되었습니다. 고통을 유발하는 뇌 영역이 비교적
                                평온한 편입니다. 집중력이 강하고 유연하며 정서적으로 안정되었습니다. 때문에 지나친
                                스트레스를 받지 않고 일상에 일어난 수많은 변화에 적응할 수 있다. 또한 적정 수준의 불안을
                                느끼기 때문에 곤경에 빠지지 않도록 막아준다.
                            </p>
                        </TypeDescription>

                        {/* Catch Your Happiness 제목 */}
                        <HappinessTitle>CATCH YOUR HAPPINESS !!</HappinessTitle>

                        {/* 지침 목록 */}
                        <Guidelines>
                            <ul>
                                <li>- 균형잡힌 식사</li>
                                <li>- 규칙적으로 운동하기</li>
                                <li>
                                    - 질 좋은 단백질 섭취하기 (생선, 해산물, 칠면조, 닭고기, 쇠고기, 양고기, 돼지고기)
                                </li>
                                <li>
                                    - 과도한 카페인과 단 음식 멀리하기 (당분은 세로토닌 농도를 빠르게 높이지만 그런 상승
                                    작용을 유지하지 못해 중독될 수 있다.)
                                </li>
                                <li>- 하루를 준비하는 자신만의 아침 루틴</li>
                                <li>- 멀리 사는 가족, 친구들과 영상통화하기</li>
                                <li>- 밤에 침대에 누울 때 느껴지는 시원한 이불</li>
                                <li>- 성공적으로 하루를 보낸 뒤 지는 해를 바라보기</li>
                                <li>- 마사지, 명상, 기도를 통해 몸의 전반을 관리하기</li>
                            </ul>
                        </Guidelines>
                    </PrintContainer>
                </PrintContainerWrapper>
            )}

            <Text>
                결과지를 프린트해서 해당 유형에 맞는 다양한 그래픽과 특징 및 행복 찾는 방법을 간직하세요!
                <br /> 다른 사람에게 당신의 유형을 공유하고 주변 사람들의 유형도 알아보세요!
            </Text>
        </PageWrapper>
    );
};

export default PrintPage;
const TypeDescription = styled.div`
    margin-bottom: 2em;

    text-align: center;

    h2 {
        font-size: 1.5em;
        margin-bottom: 0.5em;
    }

    p {
        font-size: 1em;
        line-height: 1.5;
    }
`;

const HappinessTitle = styled.h2`
    font-size: 2em;
    font-weight: bold;
    margin: 2em 0;
    text-align: center;
`;

const Guidelines = styled.div`
    margin-bottom: 2em;
    text-align: center;
    ul {
        list-style: none;
        padding: 0;
    }

    li {
        margin-bottom: 1em;
        font-size: 1.125em;
    }
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
    overflow-y: hidden;
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
    position: absolute;
    top: 2em;
    right: 2em;
    cursor: pointer;
`;

const fadeUp = keyframes`
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
`;

const fadeDown = keyframes`
    from { transform: translateY(0); }
    to { transform: translateY(100%); }
`;

const PrintContainer = styled.div<{ isPrintContainerVisible: boolean }>`
    background: #fff;
    color: #070707;
    max-width: 523px;
    height: 100%;
    box-shadow: 0px 4px 12.5px 9px rgba(0, 0, 0, 0.16);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding: 2em;
    box-sizing: border-box;
    animation: ${({ isPrintContainerVisible }) => (isPrintContainerVisible ? fadeUp : fadeDown)} 0.5s ease-in-out;
    animation-fill-mode: forwards;

    @media print {
        max-width: 100%;
        width: 79mm;
        height: 210mm;
        padding: 0;
        margin: 0;
        overflow: hidden;
        box-shadow: none;
        animation: none;

        @page {
            size: 79mm 210mm;
            margin: 0;
        }
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
`;

const Text = styled.div`
    color: #070707;
    font-size: 1.5em;
    text-align: center;
`;
