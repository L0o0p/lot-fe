import  { useEffect, useState } from 'react';
import styles from './index.module.scss'
import { participants, prizes } from './infoList';
import { useAtom } from 'jotai';
import { selectedParticipantAtom, useAwardFormData } from '../store';

export const WheelOfFortune = () => {
    const [angle, setAngle] = useState(0);
    const [isSpinning, setIsSpinning] = useState(false);
    // 状态管理选中的参与者
    const [selectedParticipant, setSelectedParticipant] = useAtom(selectedParticipantAtom);
    const [prize,setPrize] = useState('');
    const {updateData} = useAwardFormData()
    const startSpinning = () => {
        const newAngle = Math.floor(Math.random() * 3600); // 旋转10圈以内随机
        setAngle(newAngle);
        setIsSpinning(true);
        setTimeout(() => {
            handleSelect()
            setIsSpinning(false);
            calculatePrize(newAngle % 360);
        }, 5000); // 假设转动动画持续5秒
    };

    const calculatePrize = (finalAngle: number) => {
        const index = Math.floor(finalAngle / (360 / prizes.length));
        setPrize(prizes[index])
        alert(`恭喜${selectedParticipant}你获得了: ${prizes[index]}`);
    };


    // 随机选择一个参与者的函数
    const handleSelect = () => {
        let totalWeight = 0;
        const cumulativeWeights: number[] = [];

        // 计算每个人的权重并累加
        for (const participant of participants) {
            const weight = 1 + (participant.score / 10 * 0.01);
            totalWeight += weight;
            cumulativeWeights.push(totalWeight);
        }

        // 生成一个随机数并确定被抽中的人
        const pick = Math.random() * totalWeight;
        for (let i = 0; i < participants.length; i++) {
            if (pick <= cumulativeWeights[i]) {
                setSelectedParticipant(participants[i].name);
                break;
            }
        }
    };

    useEffect(() => {
        console.log('奖品 prize',prize)
        console.log('获奖者 selectedParticipant',selectedParticipant)
        const newData = {
            prizes: prize,
            participant: selectedParticipant
        }
        updateData(newData)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedParticipant]);
    

    return (
        <div className={styles.turn}>
            <div
                style={{
                    // width: '300px',
                    // height: '300px',
                    width: '90%',
                    height: '90%',
                    borderRadius: '50%',
                    background: 'conic-gradient(red, blue, yellow)',
                    transform: `rotate(${angle}deg)`,
                    transition: 'transform 5s ease-out'
                }}
            />
            {/* <img
                className={styles.turn} src="/Turntable/turntable.png" alt="turntable"
                style={{
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    // background: 'conic-gradient(red, blue, yellow)',
                    transform: `rotate(${angle}deg)`,
                    transition: 'transform 5s ease-out'
                }}

            /> */}
            <button onClick={startSpinning} disabled={isSpinning}>
                {isSpinning ? '⚙ drawing...' : '🎲 start the draw'}
            </button>
        </div>
    );
};

export default WheelOfFortune;