import React from 'react';
import { Typography, styled, Stack } from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';

import { secondsToHHMMSS } from '../../../utils/convert';

import LevelButton from '../LevelButton';

import levelImg from '../../../assets/images/level.png';

const levelItem = [
  {
    img: levelImg,
    label: 'Beginner',
  },
  {
    img: levelImg,
    label: 'Intermediate',
  },
  {
    img: levelImg,
    label: 'Advanced',
  },
];

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderRadius: '6px',
  backgroundColor: '#404040',
  width: '100%',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: '#e6e6e6' }} />
    }
    {...props}
  />
))(({ theme }) => ({
  borderRadius: '4px',
  backgroundColor: '#333333',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
}));

type Props = {
  musicData?: MusicDataType;
  title: string;
  description: number;
  expanded: string | false;
  handleChange: (
    panel: string
  ) => (event: React.SyntheticEvent, newExpanded: boolean) => void;
};

const MusicListItem: React.FC<Props> = ({
  musicData,
  title,
  description,
  expanded,
  handleChange,
}) => {
  return (
    <Accordion expanded={expanded === title} onChange={handleChange(title)}>
      <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
        <Stack
          justifyContent='space-between'
          flexDirection='row'
          sx={{
            width: 1,
            flexWrap: {
              xs: 'wrap',
            },
          }}
        >
          <Typography sx={{ py: '10px', color: '#e6e6e6' }}>{title}</Typography>
          <Typography sx={{ py: '10px', color: '#e6e6e6', fontSize: '14px' }}>
            {`${secondsToHHMMSS(description).hrs}  : ${
              secondsToHHMMSS(description).mins
            } : ${secondsToHHMMSS(description).secs}`}
          </Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <Stack
          flexDirection='row'
          justifyContent='space-between'
          overflow='auto'
          maxWidth='500px'
          width='100%'
        >
          {levelItem.map((item, index: number) => (
            <LevelButton
              key={index}
              img={item.img}
              label={item.label}
              musicData={musicData}
            />
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default MusicListItem;
