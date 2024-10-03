import styled from 'styled-components';
import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';

const PrintPage = () => {
    const componentRef = useRef<HTMLDivElement | null>(null);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: '결과페이지',
    });

    return (
        <PageWrapper>
            <PrintButton onClick={handlePrint}>Print</PrintButton>
            <PrintContainer ref={componentRef}>
                {/* 이미지 섹션 */}

                {/* 설명 섹션 */}
                <TypeDescription>
                    <h2>Type 1은 뇌의 기능이 전체적으로 균등하게 활동하는 유형입니다.</h2>
                    <p>
                        협응, 균형, 감정 및 인지처리 기능이 발달되었습니다. 고통을 유발하는 뇌 영역이 비교적 평온한
                        편입니다. 집중력이 강하고 유연하며 정서적으로 안정되었습니다. 때문에 지나친 스트레스를 받지 않고
                        일상에 일어난 수많은 변화에 적응할 수 있다. 또한 적정 수준의 불안을 느끼기 때문에 곤경에 빠지지
                        않도록 막아준다.
                    </p>
                </TypeDescription>

                {/* Catch Your Happiness 제목 */}
                <HappinessTitle>CATCH YOUR HAPPINESS !!</HappinessTitle>

                {/* 지침 목록 */}
                <Guidelines>
                    <ul>
                        <li>- 균형잡힌 식사</li>
                        <li>- 규칙적으로 운동하기</li>
                        <li>- 질 좋은 단백질 섭취하기 (생선, 해산물, 칠면조, 닭고기, 쇠고기, 양고기, 돼지고기)</li>
                        <li>
                            - 과도한 카페인과 단 음식 멀리하기 (당분은 세로토닌 농도를 빠르게 높이지만 그런 상승 작용을
                            유지하지 못해 중독될 수 있다.)
                        </li>
                        <li>- 하루를 준비하는 자신만의 아침 루틴</li>
                        <li>- 멀리 사는 가족, 친구들과 영상통화하기</li>
                        <li>- 밤에 침대에 누울 때 느껴지는 시원한 이불</li>
                        <li>- 성공적으로 하루를 보낸 뒤 지는 해를 바라보기</li>
                        <li>- 마사지, 명상, 기도를 통해 몸의 전반을 관리하기</li>
                    </ul>
                </Guidelines>
            </PrintContainer>
        </PageWrapper>
    );
};

export default PrintPage;

const PageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    background: blue;
`;

const PrintContainer = styled.div`
    background: #ffffff;
    color: #070707;
    width: 50%;
`;

const PrintButton = styled.div`
    width: 100px;
    height: 2em;
    text-align: center;

    border-radius: 2em;
    border: 2px solid #000;
    background: #fff;

    font-size: 1.125em;
    font-weight: 700;
    padding: 0.25em;

    box-sizing: border-box;
    cursor: pointer;
`;

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
