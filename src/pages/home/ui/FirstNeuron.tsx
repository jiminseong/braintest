import { motion, useAnimationControls } from 'framer-motion';
import firstNeuronUrl from '../../../assets/images/firistNeuron.png';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

interface FirstNeuronProps {
    stop: boolean;
}

const FirstNeuron: React.FC<FirstNeuronProps> = ({ stop }) => {
    const controls = useAnimationControls();
    const [currentX, setCurrentX] = useState(0);
    const [currentY, setCurrentY] = useState(0);

    const variants = {
        animate: {
            x: [0, '5vw', '-15vw', '10vw', '-10vw', '5vw', 0],
            y: ['0vh', '25vh', '-5vh', '15vh', '-15vh', '5vh', 0],
            transition: {
                x: { repeat: Infinity, repeatType: 'loop', duration: 30, ease: 'easeInOut' },
                y: { repeat: Infinity, repeatType: 'loop', duration: 30, ease: 'easeInOut' },
            },
        },
    };
    useEffect(() => {
        if (stop) {
            controls.stop();
        } else {
            controls.start({
                x: [currentX, '5vw', '-15vw', '10vw', '-10vw', '5vw', 0],
                y: [currentY, '25vh', '-5vh', '15vh', '-15vh', '5vh', 0],
                transition: {
                    x: { repeat: Infinity, repeatType: 'loop', duration: 30, ease: 'easeInOut' },
                    y: { repeat: Infinity, repeatType: 'loop', duration: 30, ease: 'easeInOut' },
                },
            });
        }
    }, [stop, controls]);

    const handleUpdate = (latest: any) => {
        // 애니메이션의 최신 x, y 값을 추적
        setCurrentX(latest.x);
        setCurrentY(latest.y);
    };

    return (
        <Wrapper>
            <motion.div
                variants={variants}
                initial={{ x: 0, y: 0 }}
                animate={controls}
                style={{ marginTop: '5%', height: '100%', zIndex: 0, position: 'relative' }}
                onUpdate={handleUpdate}
            >
                <Neuron />
            </motion.div>
        </Wrapper>
    );
};

export default FirstNeuron;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

const Neuron = styled.div`
    position: relative;
    width: 50%;
    height: 100%;
    background-image: url(${firstNeuronUrl});
    background-size: cover;
    display: flex;
`;
