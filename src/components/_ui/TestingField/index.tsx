import React from 'react';
import { Box, Typography } from '@mui/material';
import LabelText from '../LabelText';

type Props = {
  clickTime: number;
  clickedField: number[];
  clickedNote: string[];
  playedNote: string;
  playedNoteFrom: number;
  playedDuration: number;
  difference: number;
};

const TestingField: React.FC<Props> = ({
  clickTime,
  clickedField,
  clickedNote,
  playedNote,
  playedNoteFrom,
  playedDuration,
  difference,
}) => {
  return (
    <Box
      component='div'
      sx={{
        position: 'absolute',
        right: '0px',
        top: '0px',
        width: '300px',
        height: 1,
        bgcolor: 'white',
        padding: '0px 4px',
      }}
    >
      <Typography
        sx={{
          width: 1,
          textAlign: 'center',
          fontSize: '20px',
          fontWeight: 'bold',
          marginTop: '10px',
        }}
      >
        Testing Field
      </Typography>
      <LabelText label='Click time' value={clickTime.toFixed(5)} />
      <LabelText
        label='Clicked field'
        value={`${clickedField[0].toString()}/${clickedField[1].toString()}`}
      />
      <LabelText label='Clicke note' value={clickedNote.toString()} />
      <LabelText label='Played note' value={playedNote} />
      <LabelText label='Played note from' value={playedNoteFrom.toFixed(5)} />
      <LabelText label='Played duration' value={playedDuration.toFixed(5)} />
      <LabelText label='Difference' value={difference.toFixed(5)} />
    </Box>
  );
};

export default TestingField;
