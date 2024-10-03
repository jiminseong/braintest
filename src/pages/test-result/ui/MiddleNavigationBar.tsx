import styled from 'styled-components';
import HamburgerIcon from '../../../assets/icons/hamburger.svg?react';

const MiddleNavigationBar = () => {
    return (
        <MiddleNavigationBarWrapper>
            <RowWrapper>
                <NavigationButton1>
                    <HamburgerIcon />
                    Types
                </NavigationButton1>
                <NavigationButton>Neuron</NavigationButton>
                <NavigationButton>Info</NavigationButton>
                <NavigationButton>Graphics</NavigationButton>
            </RowWrapper>
            <PrintNavigationButton>Print</PrintNavigationButton>
        </MiddleNavigationBarWrapper>
    );
};

export default MiddleNavigationBar;

const MiddleNavigationBarWrapper = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1em 0em;
    background: #070707;
    top: 0;
`;

const RowWrapper = styled.div`
    display: flex;
    gap: 1.25em;
`;
const NavigationButton = styled.div`
    padding: 0.125em 1.25em;
    border-radius: 53px;
    box-sizing: border-box;
    font-size: 1.8125em;
    font-weight: 700;
    text-align: center;
    background: #fff;
    cursor: pointer;
`;

const NavigationButton1 = styled(NavigationButton)`
    background: #b3b3b3;
    display: flex;
    justify-content: center;
    gap: 0.25em;
    align-items: center;
`;

const PrintNavigationButton = styled(NavigationButton)`
    background: #77ceff;
`;
