import { motion, useAnimationControls } from 'framer-motion';
import secondNeuronUrl from '../../../assets/images/secondNeuron.png';
import styled from 'styled-components';
import GreenContainer from './GreenContainer';
import { useEffect, useState } from 'react';

interface SecondNeuronProps {
    stop: boolean;
}

const SecondNeuron: React.FC<SecondNeuronProps> = ({ stop }) => {
    const controls = useAnimationControls();
    const [currentX, setCurrentX] = useState(0);
    const [currentY, setCurrentY] = useState(0);

    const variants = {
        animate: {
            x: [0, '5vw', '-15vw', '10vw', '-10vw', '5vw', 0],
            y: ['0vh', '15vh', '-5vh', '15vh', '-15vh', '5vh', 0],
            transition: {
                x: { repeat: Infinity, repeatType: 'loop', duration: 45, ease: 'easeInOut' },
                y: { repeat: Infinity, repeatType: 'loop', duration: 40, ease: 'easeInOut' },
            },
        },
    };

    // GreenContainer의 애니메이션 설정
    const greenContainerVariants1 = {
        animate: {
            x: ['0vw', '1vw', '-1vw', '1vw', '0vw'],
            y: ['0vh', '1vh', '-1vh', '1vh', '0vh'],
            transition: { repeat: Infinity, duration: 5, ease: 'easeInOut' },
        },
    };

    const greenContainerVariants2 = {
        animate: {
            x: ['0vw', '-1vw', '1vw', '-1vw', '0vw'],
            y: ['0vh', '-1vh', '1vh', '-1vh', '0vh'],
            transition: { repeat: Infinity, duration: 6, ease: 'easeInOut' },
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
                    x: { repeat: Infinity, repeatType: 'loop', duration: 45, ease: 'easeInOut' },
                    y: { repeat: Infinity, repeatType: 'loop', duration: 40, ease: 'easeInOut' },
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
        <MotionWrapper>
            <motion.div
                initial={{ x: 0, y: 0 }}
                variants={variants}
                animate={controls}
                style={{
                    position: 'relative',
                    top: '-10%',
                    left: '15%',
                    width: '100%',
                    height: '100%',
                }}
                onUpdate={handleUpdate}
            >
                <motion.div
                    initial={{ x: 0, y: 0 }}
                    variants={greenContainerVariants1}
                    animate="animate"
                    style={{ position: 'relative', width: '100%', height: '100%', zIndex: 5 }}
                >
                    <GreenContainer width="22.5%" height="80%" top="30%" left="25%">
                        <ContentText>brain cell 99%</ContentText>
                    </GreenContainer>
                </motion.div>

                <motion.div
                    initial={{ x: 0, y: 0 }}
                    variants={greenContainerVariants2}
                    animate="animate"
                    style={{ position: 'relative', width: '100%', height: '100%', zIndex: 5 }}
                >
                    <GreenContainer width="10%" height="15%" top="-75%" left="45%">
                        <ContentText>dendritic spines 99%</ContentText>
                    </GreenContainer>
                </motion.div>

                <Neuron src={secondNeuronUrl} alt="두번째 뉴런" />
            </motion.div>
        </MotionWrapper>
    );
};

export default SecondNeuron;

const MotionWrapper = styled.div`
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: transparent;
`;

const Neuron = styled.img`
    position: absolute;
    top: 0;
    z-index: 2;
    width: 100%;
`;

const ContentText = styled.p`
    background-color: #070707;
    width: fit-content;
    line-height: 1.5em;
    color: #ffffff;
    margin: 0.5em 0;
    white-space: pre-line;
`;
