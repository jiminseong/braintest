import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import styled from 'styled-components';

interface QrCodeProps {
    type: number;
    name: string;
}

const QrCode: React.FC<QrCodeProps> = ({ type, name }) => {
    if (name === '???') name = '%3F%3F%3F';

    const url = `${import.meta.env.VITE_URL}/save/${type}/${name}`;

    return (
        <QrCodeWrapper>
            <QRCodeSVG bgColor="transparent" value={url} />
            <Text>
                QR 코드를 이용해
                <br />
                나의 유형을 간직해보세요.
            </Text>
        </QrCodeWrapper>
    );
};

export default QrCode;

const QrCodeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25em;
    height: auto;
`;
const Text = styled.div`
    color: #070707;
    text-align: center;
    font-size: 1.225em;
    font-weight: 700;
`;
