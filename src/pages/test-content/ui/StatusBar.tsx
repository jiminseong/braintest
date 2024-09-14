import React from 'react';

interface StatusBarProps {
    status: number;
}

const StatusBar: React.FC<StatusBarProps> = ({ status }) => {
    return <div>{status}</div>;
};

export default StatusBar;
