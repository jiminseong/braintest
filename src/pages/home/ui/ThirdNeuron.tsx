import { motion, useAnimationControls } from 'framer-motion';
import thirdNeuronUrl from '../../../assets/images/thirdNeuron.png';
import styled from 'styled-components';
import { useEffect, useState } from 'react';

interface ThirdNeuronProps {
    stop: boolean;
}
const ThirdNeuron: React.FC<ThirdNeuronProps> = ({ stop }) => {
    const controls = useAnimationControls();
    const [currentX, setCurrentX] = useState(0);
    const [currentY, setCurrentY] = useState(0);

    const variants = {
        animate: {
            x: [0, '5vw', '-15vw', '5vw', '-25vw', '2vw', 0],
            y: ['10vh', '15vh', '25vh', '-5vh', '15vh', '5vh', 0],
            transition: {
                x: { repeat: Infinity, repeatType: 'loop', duration: 40, ease: 'easeInOut' },
                y: { repeat: Infinity, repeatType: 'loop', duration: 30, ease: 'easeInOut' },
            },
        },
    };

    const handleUpdate = (latest: any) => {
        // 애니메이션의 최신 x, y 값을 추적
        setCurrentX(latest.x);
        setCurrentY(latest.y);
    };

    useEffect(() => {
        if (stop) {
            controls.stop();
        } else {
            controls.start({
                x: [currentX, '5vw', '-15vw', '5vw', '-25vw', '2vw', 0],
                y: [currentY, '15vh', '25vh', '-5vh', '15vh', '5vh', 0],
                transition: {
                    x: { repeat: Infinity, repeatType: 'loop', duration: 30, ease: 'easeInOut' },
                    y: { repeat: Infinity, repeatType: 'loop', duration: 30, ease: 'easeInOut' },
                },
            });
        }
    }, [stop, controls]);

    return (
        <MotionWrapper>
            <motion.div
                variants={variants}
                initial="initial"
                animate={controls}
                onUpdate={handleUpdate}
                style={{ marginRight: '-105%', marginBottom: '-170%' }} // 오른쪽 아래로 살짝 이동시키기
            >
                <Neuron src={thirdNeuronUrl} alt="세번째 뉴런" />
            </motion.div>
        </MotionWrapper>
    );
};

export default ThirdNeuron;

const MotionWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: transparent;
`;

const Neuron = styled.img`
    width: 110%;
`;
