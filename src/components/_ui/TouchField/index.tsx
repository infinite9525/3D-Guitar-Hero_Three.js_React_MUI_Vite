import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import { yellow } from '@mui/material/colors';
import noteCalculate from '../../../utils/noteCalculate';
import midiCalculate from '../../../utils/midiCalculate';

type Props = {
  isPlay: boolean;
  midData: any;
  setCustomData: Dispatch<SetStateAction<jsonType[]>>;
  setClickTime: Dispatch<SetStateAction<number>>;
  setClickedField: Dispatch<SetStateAction<number[]>>;
  setClickedNote: Dispatch<SetStateAction<string[]>>;
  setPlayedNote: Dispatch<SetStateAction<string>>;
  setPlayedNoteFrom: Dispatch<SetStateAction<number>>;
  setPlayedDuration: Dispatch<SetStateAction<number>>;
  setDifference: Dispatch<SetStateAction<number>>;
};

const TouchField: React.FC<Props> = ({
  isPlay,
  midData,
  setCustomData,
  setClickTime,
  setClickedField,
  setClickedNote,
  setPlayedNote,
  setPlayedNoteFrom,
  setPlayedDuration,
  setDifference,
}) => {
  const [time, setTime] = useState(0);

  const onPressButton = (index: number) => {
    const notes = midData?.tracks[1]?.notes;
    const length = notes.length;
    setClickedNote(noteCalculate(index));
    setClickTime(time);
    setClickedField([Math.floor(index / 5) + 1, (index % 5) + 1]);
    for (let i = 0; i < length; i++) {
      if (time < notes[i]?.time) {
        if (notes[i - 1]?.name) {
          setPlayedNote(notes[i - 1].name ?? '');
          setPlayedNoteFrom(notes[i - 1].time ?? 0);
          setPlayedDuration(notes[i - 1].duration ?? 0);
          setDifference(time - notes[i - 1].time ?? 0);
        }
        setCustomData((prev) => [
          ...prev,
          {
            name: noteCalculate(index).toString(),
            midi: [
              midiCalculate(noteCalculate(index)[0] ?? ''),
              midiCalculate(noteCalculate(index)[1] ?? ''),
            ],
            time: time,
            duration: notes[i - 1]?.duration ?? 0,
          },
        ]);
        break;
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlay) {
        setTime((prev) => prev + 0.1);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [isPlay]);

  const onPressKey = (e: any) => {
    if (
      e.key === '1' ||
      e.key === '2' ||
      e.key === '3' ||
      e.key === '4' ||
      e.key === '5'
    ) {
      onPressButton(parseInt(e.key) - 1);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', onPressKey);
    return () => {
      document.removeEventListener('keydown', onPressKey);
    };
  }, [onPressKey]);

  return (
    <Box
      component='div'
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: {
          xs: '100%',
          md: '370px',
        },
      }}
    >
      <Box
        component='div'
        sx={{
          height: 1,
          width: {
            xs: '10px',
            md: '20px',
          },
          bgcolor: '#ffffff',
          background: 'linear-gradient(to right, #666666, #ffffff, #666666)',
          boxShadow: '10px 0px 2px rgba(0, 0, 0, 0.4)',
        }}
      ></Box>
      <Box
        component='div'
        sx={{
          width: 1,
          borderTop: '4px solid #999999',
          borderBottom: '4px solid #999999',
          bgcolor: yellow,
          background: 'linear-gradient(#cc6600, #331a00)',
        }}
      >
        <Grid container columns={5} sx={{ display: 'flex', height: 1 }}>
          {new Array(30).fill(0).map((item, index: number) => (
            <Grid key={index} item xs={1}>
              <Box
                onClick={() => {
                  onPressButton(index);
                }}
                component='div'
                sx={{
                  border: '4px solid #999999',
                  height: 'calc(100% - 8px)',
                  cursor: 'pointer',
                  ':hover': {
                    bgcolor: '#fba333',
                  },
                  ':active': {
                    bgcolor: '#ffefc2',
                  },
                }}
              >
                {' '}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box
        component='div'
        sx={{
          height: 1,
          width: {
            xs: '10px',
            md: '20px',
          },
          bgcolor: '#ffffff',
          background: 'linear-gradient(to right, #666666, #ffffff, #666666)',
        }}
      ></Box>
    </Box>
  );
};

export default TouchField;
