import React from 'react';
import styled from 'styled-components';
import firstUrl from '../../../assets/icons/firstLogo.png';

interface StatusLogoProps {
    status: number;
}

const StatusLogo: React.FC<StatusLogoProps> = ({ status }) => {
    return <>{status === 0 && <Logo src={firstUrl} />}</>;
};

export default StatusLogo;

const Logo = styled.img`
    width: 10%;
`;
