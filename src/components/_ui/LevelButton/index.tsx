import React, { useContext } from 'react';
import { Avatar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../providers/UserProvider';

type Props = {
  musicData?: MusicDataType;
  img: string;
  label: string;
};

const LevelButton: React.FC<Props> = ({ img, label, musicData }) => {
  const { setCurrentMusicData } = useContext(UserContext);

  const setCurrentMusic = () => {
    localStorage.setItem('toGame', 'yes');
    setCurrentMusicData({
      title: musicData?.title ?? '',
      description: musicData?.description ?? 0,
      midMusic: !musicData
        ? ''
        : label === 'Beginner'
        ? musicData.beginnerMusic
        : label === 'Intermediate'
        ? musicData?.intermediateMusic
        : musicData?.advancedMusic,
      midData: !musicData
        ? ''
        : label === 'Beginner'
        ? musicData.beginnerData
        : label === 'Intermediate'
        ? musicData?.intermediateData
        : musicData?.advancedData,
      bgSong: musicData?.bgSong ?? '',
      bgImage: musicData?.bgImage ?? '',
      delay: musicData?.delay ?? 0,
      volume: musicData?.volume ?? 0.1,
    });
  };

  return (
    <Link to='/game'>
      <Button
        sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
        onClick={setCurrentMusic}
      >
        <Avatar alt={label} src={img} sx={{ width: 56, height: 56 }} />
        <Typography sx={{ color: '#e6e6e6', fontSize: '14px' }}>
          {label}
        </Typography>
      </Button>
    </Link>
  );
};

export default LevelButton;
