import { motion } from 'framer-motion';
import secondNeuronUrl from '../../../assets/images/secondNeuron.png';
import styled from 'styled-components';

interface SecondNeuronProps {
    stop: boolean;
}
const SecondNeuron: React.FC<SecondNeuronProps> = ({ stop }) => {
    const variants = {
        initial: {
            x: 0,
            y: 0,
            rotate: 0,
            scale: 1,
        },
        animate: {
            x: [
                0,
                10, // 가로 이동 범위 조절
                -10,
                0,
            ],
            y: [
                0,
                10, // 세로 이동 범위 조절
                -10,
                0,
            ],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1, 1],
            transition: {
                x: { repeat: Infinity, repeatType: 'loop', duration: 6, ease: 'easeInOut' },
                y: { repeat: Infinity, repeatType: 'loop', duration: 6, ease: 'easeInOut' },
                rotate: { repeat: Infinity, repeatType: 'loop', duration: 6, ease: 'easeInOut' },
                scale: { repeat: Infinity, repeatType: 'loop', duration: 6, ease: 'easeInOut' },
            },
        },
    };

    return (
        <MotionWrapper>
            <motion.div
                variants={variants}
                initial="initial"
                animate={stop ? 'animate' : 'initial'}
                style={{ marginLeft: '20%', marginBottom: '10%' }}
            >
                <Neuron src={secondNeuronUrl} alt="두번째 뉴런" />
            </motion.div>
        </MotionWrapper>
    );
};

export default SecondNeuron;

const MotionWrapper = styled.div`
z-index: 2;
    display: flex;
    justify-content: center; 
    align-items: center;
    width: 100%;
    height: 100vh; 
    position: absolute; 
    top: 0;
    left: 0;
    background: transparent;\
`;

const Neuron = styled.img`
    width: 120%;
`;
