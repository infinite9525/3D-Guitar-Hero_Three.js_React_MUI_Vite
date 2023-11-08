import React, { useEffect, useState } from 'react';
import { useThree } from '@react-three/fiber';
import { gsap } from 'gsap';

import AudioBar from '../AudioBar';
import laneCalculate from '../../../utils/laneCalculate';

type Props = {
  isPlay: boolean;
  audioData: any;
};

const MainContent: React.FC<Props> = ({ isPlay, audioData }) => {
  const [audioList, setAudioList] = useState<Array<AudioDataType>>([]);
  const [speed, setSpeed] = useState(1);
  const { scene } = useThree();
  const horizontalGroup = scene.getObjectByName('horizontalGroup');

  const barAnimation = gsap.timeline({ repeat: -1 });

  const moveLine = () => {
    if (horizontalGroup) {
      barAnimation.to(horizontalGroup.position, {
        duration: (speed / 4) * 6,
        y: -22.5,
        delay: 0,
        ease: 'none',
        onComplete: () => {
          horizontalGroup.position.setY(0);
        },
      });
    }
  };

  useEffect(() => {
    if (isPlay) {
      moveLine();
    }
  }, [isPlay]);

  useEffect(() => {
    setSpeed((60 / audioData.header.bpm) * 8);
    const audioLength = audioData.tracks[1].length;
    const tempArray = new Array(0);
    for (let i = 0; i < audioLength; i++) {
      tempArray.push({
        name: audioData.tracks[1].notes[i].name,
        lane: laneCalculate(audioData.tracks[1].notes[i].name).lane,
        time: audioData.tracks[1].notes[i].time,
        velocity: audioData.tracks[1].notes[i].velocity,
        duration: audioData.tracks[1].notes[i].duration,
      });
    }
    setAudioList(tempArray);
  }, []);

  return (
    <>
      {audioList.map((item, index: number) => (
        <AudioBar
          key={index}
          lane={item.lane}
          name={'audioBar' + index}
          position={[
            item.lane - 3,
            11.25 + ((item.duration / speed) * 4 * 3.75) / 2,
            2.1,
          ]}
          length={(item.duration / speed) * 4}
          when={item.time - audioData.tracks[1].startTime + 0.5}
          speed={speed}
          isPlay={isPlay}
        />
      ))}
    </>
  );
};

export default MainContent;
