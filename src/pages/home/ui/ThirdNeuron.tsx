import { motion } from 'framer-motion';
import thirdNeuronUrl from '../../../assets/images/thirdNeuron.png';
import styled from 'styled-components';

interface ThirdNeuronProps {
    stop: boolean;
}
const ThirdNeuron: React.FC<ThirdNeuronProps> = ({ stop }) => {
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
