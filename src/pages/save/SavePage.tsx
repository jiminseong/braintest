import { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../component/button/Button';
import html2canvas from 'html2canvas';

const SavePage = () => {
    const { type, name = '' } = useParams();
    const resultType = Number(type);
    const [ResultSvg, setResultSvg] = useState<React.FC | null>(null);
    const imageRef = useRef(null);
    const navigate = useNavigate();

    const downLoadImage = () => {
        if (imageRef.current) {
            html2canvas(imageRef.current, { backgroundColor: null }).then((canvas) => {
                const link = document.createElement('a');
                let urlName = '';
                if (name === '???') urlName = 'OOO';
                else urlName = name;
                link.download = `${urlName}님의결과지-type${resultType}.png`;
                link.href = canvas.toDataURL('image/png');
                link.click();
            });
        }
    };

    useEffect(() => {
        import(`../../assets/images/typeResult/type_${resultType}_bill.svg?react`)
            .then((module) => {
                setResultSvg(() => module.default);
            })
            .catch((err) => {
                console.error('SVG 로드 에러:', err);
            });
    }, [resultType]);

    return (
        <PageWrapper>
            <RowWrapper>
                <SaveButton onClick={downLoadImage}>저장하기</SaveButton>
                <SaveButton onClick={() => navigate('/')}>홈으로가기</SaveButton>
            </RowWrapper>
            <SaveContainer ref={imageRef}>
                <Name>{name}님의 뇌유형은</Name>
                {ResultSvg && <StyledResultSvg as={ResultSvg} />}
            </SaveContainer>
        </PageWrapper>
    );
};

export default SavePage;
const RowWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 2em;
    width: 50%;
    @media (max-width: 768px) {
        width: 90%;
    }
`;

const SaveButton = styled(Button)`
    padding: 1em 1em;
    width: 100%;
    @media (max-width: 768px) {
        font-size: 1em;
    }
`;

const PageWrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1em;

    scrollbar-width: none;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
        display: none;
    }
`;

const SaveContainer = styled.div`
    position: relative;
    width: 50%;

    top: 5%;
    box-shadow: 0px 4px 12.5px 9px rgba(0, 0, 0, 0.16);

    @media (max-width: 768px) {
        width: 90%;

        top: 5%;
    }
`;

const Name = styled.div`
    position: absolute;
    font-size: 1.625em;
    font-weight: 800;
    left: 50%;
    top: 4%;
    color: #231815;
    transform: translate(-50%, -50%);
    @media (max-width: 390px) {
        font-size: 1em;
        font-weight: 800;
    }
    @media (max-width: 820px) {
        font-size: 1.125em;
        font-weight: 800;
    }
`;

const StyledResultSvg = styled.div`
    width: 100%;
    height: 100%;
`;
