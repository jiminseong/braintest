import styled from 'styled-components';
import cursorIcon from '/cursorIcon2.svg';
const AlertModal = ({ alertText, onStop }: { alertText: string; onStop: () => void }) => {
    return (
        <AlertModalWrapper>
            <AlertModalContainer>
                <Text>{alertText}</Text>
                <Buton onClick={onStop}>확인</Buton>
            </AlertModalContainer>
        </AlertModalWrapper>
    );
};

export default AlertModal;

const AlertModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const AlertModalContainer = styled.div`
    margin-top: 15%;

    border-radius: 20px;
    background: rgba(217, 217, 217, 0.5);
    box-shadow: 0px 0px 19.3px 615px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(8.949999809265137px);

    padding: 1em 2em;
    min-width: 40%;
    min-height: 25%;
    max-width: 747px;
    max-height: 246px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2em;

    @media (max-width: 768px) {
        max-width: 90%;
        margin-top: 35%;
    }
`;
const Text = styled.div`
    color: #fff;
    text-align: center;
    font-family: SUIT;
    font-size: 2em;
    font-weight: 800;
    margin-top: 5%;
    @media (max-width: 768px) {
        font-size: 1.25em;
    }
`;

const Buton = styled.div`
    border-radius: 20px;
    background: #fff;
    cursor: url(${cursorIcon}) 37 37, pointer;
    padding: 0.5em 1em;
    font-weight: 700;
    box-sizing: border-box;
`;
