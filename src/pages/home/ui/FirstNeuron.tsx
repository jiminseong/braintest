import { motion } from 'framer-motion';
import firstNeuronUrl from '../../../assets/images/firistNeuron.png';
import styled from 'styled-components';

interface FirstNeuronProps {
    stop: boolean;
}

const FirstNeuron: React.FC<FirstNeuronProps> = ({ stop }) => {
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
        <motion.div
            variants={variants}
            initial="initial"
            animate={stop ? 'animate' : 'initial'}
            style={{ marginTop: '25%' }}
        >
            <Neuron src={firstNeuronUrl} alt="첫번째 뉴런" />
        </motion.div>
    );
};

export default FirstNeuron;

const Neuron = styled.img`
    width: 30%;
`;
