import styled from 'styled-components';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import billUrl from '../../assets/images/bill.png';

const TestResultPage = () => {
    const componentRef = useRef<HTMLDivElement | null>(null);

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: '결과페이지',
    });
    return (
        <PageWrapper>
            <PrintButton onClick={handlePrint}>Print</PrintButton>
            <PrintContainer ref={componentRef}>
                <img src={billUrl} alt="결과" />
            </PrintContainer>
        </PageWrapper>
    );
};

export default TestResultPage;

const PageWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    background: blue;
`;
const PrintContainer = styled.div`
    width: fit-content;
    height: fit-content;
    background: #ffffff;
    color: #070707;
`;

const PrintButton = styled.div`
    border-radius: 2em;
    border: 2px solid #000;
    background: #fff;
    font-size: 1.125em;
    font-weight: 700;
    padding: 0.25em;
    box-sizing: border-box;
    cursor: pointer;
`;
