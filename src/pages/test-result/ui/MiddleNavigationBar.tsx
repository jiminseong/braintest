import styled, { keyframes } from 'styled-components';
import TypeSelectButton from './TypeSelectButton';
import { useNavigate } from 'react-router-dom';
import cursorIcon from '/cursorIcon2.svg';
interface MiddleNavigationBarProps {
    scrollToSection: (section: string) => void;
    activeButton: string;
    name: string;
    type: number;
}

const MiddleNavigationBar = ({ scrollToSection, activeButton, name, type }: MiddleNavigationBarProps) => {
    const navigate = useNavigate();
    if (name === '???') {
        name = '%3F%3F%3F';
    }
    return (
        <MiddleNavigationBarWrapper>
            <Wrapper>
                <RowWrapper>
                    {/* activeButton과 일치하면 isActive */}
                    <TypeSelectButton name={name} />
                    <NavigationButton2 isActive={activeButton === 'Neuron'} onClick={() => scrollToSection('Neuron')}>
                        Neuron
                    </NavigationButton2>
                    <NavigationButton isActive={activeButton === 'Info'} onClick={() => scrollToSection('Info')}>
                        Info
                    </NavigationButton>
                    <NavigationButton
                        isActive={activeButton === 'Graphics'}
                        onClick={() => scrollToSection('Graphics')}
                    >
                        Graphics
                    </NavigationButton>
                </RowWrapper>
                <PrintNavigationButton onClick={() => navigate(`/print/${type}/${name}`)}>Print</PrintNavigationButton>
                <SaveNavigationButton onClick={() => navigate(`/print/${type}/${name}`)}>Save</SaveNavigationButton>
            </Wrapper>
        </MiddleNavigationBarWrapper>
    );
};

export default MiddleNavigationBar;

const MiddleNavigationBarWrapper = styled.div`
    position: sticky;
    z-index: 10;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 2.125em 0em;
    top: 0;
`;

const Wrapper = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-direction: column-reverse;
        width: 90%;
        gap: 1em;
        justify-content: center;
        align-items: center;
    }
`;

const RowWrapper = styled.div`
    display: flex;
    gap: 1.25em;
    @media (max-width: 768px) {
        width: 100%;
        justify-content: space-between;
        gap: 0em;
    }
`;

interface Props {
    isActive: boolean;
}
const NavigationButton = styled.div<Props>`
    padding: 0.25em 0.8125em;
    box-sizing: border-box;
    border-radius: 53px;

    font-size: 1.45em;
    font-weight: 700;
    text-align: center;

    cursor: url(${cursorIcon}) 37 37, pointer;
    background: ${({ isActive }) => (isActive ? '#000000' : '#D6D6D6')};
    color: ${({ isActive }) => (isActive ? '#ffffff' : '#070707')};
    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        font-size: 1em;
    }
`;

const NavigationButton2 = styled(NavigationButton)`
    border: ${({ isActive }) => (isActive ? '#ffffff 1px solid' : '#D6D6D6')};
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

const PrintNavigationButton = styled.div`
    background: #77ceff;
    width: 50%;
    padding: 0.125em 1.25em;
    border-radius: 53px;
    box-sizing: border-box;
    font-size: 1.45em;
    font-weight: 700;
    text-align: center;
    cursor: url(${cursorIcon}) 37 37, pointer;
    &:hover {
        animation: ${printButtonAnimation} 0.2s infinite;
    }
    @media (max-width: 768px) {
        display: none;
    }
`;

const SaveNavigationButton = styled(PrintNavigationButton)`
    display: none;

    @media (max-width: 768px) {
        width: 100%;
        font-size: 1em;
        display: flex;
        justify-content: center;
    }
`;
