import { Button, Box, Icon } from '@mui/material';
import { Canvas } from '@react-three/fiber';
import React, {
  Suspense,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { OrbitControls } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';

import MainContent from '../../components/_three/MainContent';
import { UserContext } from '../../providers/UserProvider';
import TouchField from '../../components/_ui/TouchField';
import TestingField from '../../components/_ui/TestingField';

import { verticalLines } from '../../utils/info';
import PlayIcon from '../../assets/icons/play.svg';
import loadingIcon from '../../assets/icons/loading.gif';

import FreedomOfThePressBeginnerData from '../../jsons/Freedom Of The Press/beginner.json';
import FreedomOfThePressBeginnerMusic from '../../assets/songs/Freedom Of The Press/FOTP Midi Git Beginner.mp3';
// import FreedomOfThePressBgSong from '../../assets/songs/Freedom Of The Press/Mp3 Freedom Of The Press.mp3';
import FreedomOfThePressBgSong from '../../assets/songs/Freedom Of The Press/Mp3 Freedom Of The Press (mp3cut.net).mp3';
import FreedomOfThePressBgImage from '../../assets/songs/Freedom Of The Press/Freedom Of The Press.jpg';

const horizontalLine = {
  position: {
    x: 0,
    y: -11.25,
    z: 0,
  },
  rotation: {
    x: 0,
    y: 0,
    z: Math.PI / 2,
  },
  radius: 0.04,
  length: 5,
  color: '#b3b3b3',
};

// const currentMusicData = {
//   title: 'Freedom Of The Press',
//   description: 365,
//   midMusic: FreedomOfThePressBeginnerMusic,
//   midData: FreedomOfThePressBeginnerData,
//   bgSong: FreedomOfThePressBgSong,
//   bgImage: FreedomOfThePressBgImage,
//   volume: 0.07,
//   delay: 2.94,
// };

const Game: React.FC = () => {
  const navigate = useNavigate();
  const { currentMusicData } = useContext(UserContext);
  const midPlayerRef: any = useRef();
  const allObjectsGroup: any = useRef();
  const bgPlayerRef: any = useRef();
  const horizontalGroup: any = useRef();
  const [isPlay, setIsPlay] = useState(false);
  const [isPlayReady, setIsPlayReady] = useState(false);
  const [isPlayReadyMid, setIsPlayReadyMid] = useState(false);
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const [cameraProperty, setCameraProperty] = useState<CameraPropertyType>({
    fov: 37.3,
    position: [0, -9.2, 4.83],
  });
  const [scale, setScale] = useState<[number, number, number]>([1, 1, 1]);

  /* testing field */
  const [clickTime, setClickTime] = useState(0);
  const [clickedField, setClickedField] = useState([0, 0]);
  const [clickedNote, setClickedNote] = useState<string[]>([]);
  const [playedNote, setPlayedNote] = useState('');
  const [playedNoteFrom, setPlayedNoteFrom] = useState(0);
  const [playedDuration, setPlayedDuration] = useState(0);
  const [difference, setDifference] = useState(0);
  const [customData, setCustomData] = useState<jsonType[]>([]);

  /* testing field */

  const onAudioLoad = () => {
    const midPlayer = new Audio(currentMusicData.midMusic);
    const bgPlayer = new Audio(currentMusicData.bgSong);
    midPlayerRef.current = midPlayer;
    bgPlayerRef.current = bgPlayer;

    midPlayer.addEventListener('canplay', () => {
      console.log('canplay mid player');
      setIsPlayReadyMid(true);
    });

    bgPlayer.addEventListener('canplay', () => {
      console.log('canplay background player');
      setIsPlayReady(true);
    });

    bgPlayer.addEventListener('ended', onEnded);
  };

  const onPlay = () => {
    setIsPlay((prev) => !prev);
    if (currentMusicData.bgSong) {
      setTimeout(function () {
        bgPlayerRef.current.volume = currentMusicData.volume;
        bgPlayerRef.current.play();
      }, (((60 / currentMusicData.midData.header.bpm) * 8 * 1000) / 4) * 5 +
        500 -
        currentMusicData.midData.tracks[1].startTime * 1000 +
        currentMusicData.delay * 1000);
      // setTimeout(() => {
      //   bgPlayerRef.current.volume = currentMusicData.volume;
      //   bgPlayerRef.current.play();
      // }, (((60 / currentMusicData.midData.header.bpm) * 8 * 1000) / 4) * 5 + 500 - currentMusicData.midData.tracks[1].startTime * 1000 + currentMusicData.delay * 1000);
    }
    if (currentMusicData.midMusic) {
      setTimeout(function () {
        midPlayerRef.current.volume = 1;
        midPlayerRef.current.play();
      }, (((60 / currentMusicData.midData.header.bpm) * 8 * 1000) / 4) * 5 +
        500 -
        currentMusicData.midData.tracks[1].startTime * 1000);
      // setTimeout(() => {
      //   midPlayerRef.current.volume = 1;
      //   midPlayerRef.current.play();
      // }, (((60 / currentMusicData.midData.header.bpm) * 8 * 1000) / 4) * 5 + 500 - currentMusicData.midData.tracks[1].startTime * 1000);
    }
  };

  const onStop = () => {
    if (midPlayerRef.current) {
      midPlayerRef.current.pause();
      midPlayerRef.current.currentTime = 0;
      midPlayerRef.current = undefined;
    }
    if (bgPlayerRef.current) {
      bgPlayerRef.current.pause();
      bgPlayerRef.current.currentTime = 0;
      bgPlayerRef.current = undefined;
    }
  };

  const onEnded = () => {
    const link = document.createElement('a');
    const file = new Blob([JSON.stringify(customData)], {
      type: 'text/plain',
    });
    link.href = URL.createObjectURL(file);
    link.download = 'data.json';
    link.click();
    navigate('/');
  };

  useEffect(() => {
    onAudioLoad();

    const toGamePage = localStorage.getItem('toGame');
    if (toGamePage === 'no' || toGamePage === null) {
      navigate('/');
    }
    setTimeout(() => {
      localStorage.setItem('toGame', 'no');
    }, 1000);

    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
      onStop();
    };
  }, []);

  useEffect(() => {
    setScale([
      windowSize[0] >= 890
        ? 1
        : 1 - (890 - windowSize[0]) * ((1 - 0.315) / (890 - 280)),
      1,
      1,
    ]);
  }, [windowSize]);

  return (
    <Box
      component='div'
      sx={{
        width: 1,
        height: 1,
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        backgroundImage: `url('${currentMusicData.bgImage}')`,
        backgroundSize: '100% 100%',
      }}
    >
      <Box
        component='div'
        sx={{
          position: 'fixed',
          top: '0px',
          left: '0px',
          width: 1,
          height: 1,
          display: isPlay ? 'none' : 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 10,
        }}
      >
        <Button
          onClick={onPlay}
          disabled={!(isPlayReady && isPlayReadyMid)}
          sx={{
            zIndex: '20',
          }}
        >
          <Box
            component={'img'}
            src={isPlayReady && isPlayReadyMid ? PlayIcon : loadingIcon}
            // src={PlayIcon}
            sx={{
              width: '70px',
              height: '70px',
              ':hover': {
                width: '80px',
                height: '80px',
              },
            }}
          />
        </Button>
      </Box>
      <Box
        component='div'
        sx={{
          maxWidth: '890px',
          // width: 'calc(100% - 400px)',
          width: 1,
          height: 1,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        <Canvas
          camera={{
            fov: cameraProperty.fov,
            far: 2000,
            position: cameraProperty.position,
          }}
          style={{ width: '100%', height: '420px', minHeight: '420px' }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} color={0xffffff} />
            <hemisphereLight intensity={0.4} color={0xffffff} />
            {/* <OrbitControls /> */}
            <directionalLight
              color={0xffffff}
              intensity={0.9}
              castShadow={true}
              position={[0, 100, 0]}
            />
            <group position={[0, 1, 0]} scale={scale} ref={allObjectsGroup}>
              <mesh position={[0, 0, 2]} scale={[5, 15, 1]}>
                <planeBufferGeometry />
                <meshLambertMaterial
                  attach='material'
                  color='#3D3020'
                  opacity={0.8}
                  transparent
                />
              </mesh>
              {verticalLines.map((item, index: number) => (
                <mesh
                  key={index}
                  position={[item.position.x, item.position.y, 2]}
                  rotation={[item.rotation.x, item.rotation.y, item.rotation.z]}
                >
                  <cylinderBufferGeometry
                    attach='geometry'
                    args={[item.radius, item.radius, item.length, 10]}
                  />
                  <meshStandardMaterial attach='material' color={item.color} />
                </mesh>
              ))}
              <group
                name='horizontalGroup'
                ref={horizontalGroup}
                position={[0, 0, 2]}
              >
                {new Array(20).fill(0).map((item, index: number) => (
                  <mesh
                    key={index}
                    position={[
                      horizontalLine.position.x,
                      horizontalLine.position.y + index * 3.75,
                      horizontalLine.position.z,
                    ]}
                    rotation={[
                      horizontalLine.rotation.x,
                      horizontalLine.rotation.y,
                      horizontalLine.rotation.z,
                    ]}
                  >
                    <cylinderBufferGeometry
                      attach='geometry'
                      args={[
                        horizontalLine.radius,
                        horizontalLine.radius,
                        horizontalLine.length,
                        10,
                      ]}
                    />
                    <meshStandardMaterial
                      attach='material'
                      color={horizontalLine.color}
                    />
                  </mesh>
                ))}
              </group>
              <MainContent
                isPlay={isPlay}
                audioData={currentMusicData?.midData}
              />
            </group>
          </Suspense>
        </Canvas>
        <TouchField
          isPlay={isPlay}
          midData={currentMusicData?.midData}
          setCustomData={setCustomData}
          setClickTime={setClickTime}
          setClickedField={setClickedField}
          setClickedNote={setClickedNote}
          setPlayedNote={setPlayedNote}
          setPlayedNoteFrom={setPlayedNoteFrom}
          setPlayedDuration={setPlayedDuration}
          setDifference={setDifference}
        />
      </Box>
      <TestingField
        clickTime={clickTime}
        clickedField={clickedField}
        clickedNote={clickedNote}
        playedNote={playedNote}
        playedNoteFrom={playedNoteFrom}
        playedDuration={playedDuration}
        difference={difference}
      />
    </Box>
  );
};

export default Game;
