import { RoundedBox } from '@react-three/drei';
import React, { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { gsap } from 'gsap';

type Props = {
  name: string;
  position: [number, number, number];
  lane?: number;
  when?: number;
  length?: number;
  speed?: number;
  isPlay: boolean;
};

const AudioBar: React.FC<Props> = ({
  name,
  position,
  length = 0,
  when = 0,
  lane = 1,
  speed = 1,
  isPlay,
}) => {
  const { scene } = useThree();
  const movingBox = scene.getObjectByName(name);

  const movingBar = () => {
    if (movingBox) {
      gsap.to(movingBox.position, {
        duration: (speed / 4) * (6 + length),
        y: -11.25 - (length * 3.75) / 2,
        delay: when,
        ease: 'none',
      });
    }
  };

  useEffect(() => {
    if (isPlay) {
      setTimeout(movingBar, 0);
    }
  }, [isPlay]);

  return (
    <RoundedBox
      name={name}
      position={position}
      args={[0.9, length * 3.75, 0.2]}
      radius={0.05}
    >
      <meshLambertMaterial
        attach='material'
        color='#F140C5'
        opacity={0.7}
        transparent
      />
    </RoundedBox>
  );
};

export default AudioBar;
