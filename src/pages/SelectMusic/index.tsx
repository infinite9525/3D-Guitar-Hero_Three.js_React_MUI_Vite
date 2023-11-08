import React from 'react';
import { List, ListItem, Stack, Typography } from '@mui/material';

import MusicListItem from '../../components/_ui/MusicListItem';

import { musicList } from '../../utils/musicData';

const SelectMusic: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>('');
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Stack
      component='div'
      sx={{
        px: '30px',
        bgcolor: '#0d0d0d',
        overflowY: 'auto',
      }}
    >
      <Typography
        variant='h6'
        sx={{
          color: '#e6e6e6',
          mt: '20px',
          py: '20px',
          pl: '20px',
          fontWeight: 'bold',
        }}
      >
        Select Music
      </Typography>
      <List sx={{ pt: '0px' }}>
        {musicList.map((item, index: number) => (
          <ListItem key={index} sx={{ px: '0px' }}>
            <MusicListItem
              musicData={item}
              title={item?.title ?? 'No Title'}
              description={item?.description ?? 0}
              expanded={expanded}
              handleChange={handleChange}
            />
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};

export default SelectMusic;
