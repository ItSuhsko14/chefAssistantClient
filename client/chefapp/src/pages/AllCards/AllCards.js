import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { CardPreview } from './CardPreview.js';
import { fetchCards } from '../../redux/slices/cards.js';

function GaetAll() {
  
  function calculateDaysBetweenDates(begin, end) {
    
  }

  

  const dispatch = useDispatch();
  const { cards } = useSelector(state => state.cards);
  console.log(cards);
  const isCardsLoading = cards.status === 'loading';

  React.useEffect(() => {
    dispatch(fetchCards())
  }, [])

    if (isCardsLoading) {
    return (
      <Box component="span" sx={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 1,
        height: 400,
       }}>
          <CircularProgress />
      </Box>
    )}
    

      return (
        <>
          <Container>
            <Grid container spacing={2}>
              
              {cards.items.map( item => (
                  <Grid xs={4}>    
                    <CardPreview 
                      name={item.title} 
                      text={item.text} 
                      link={item._id} 
                      cardId={item._id} 
                    />
                  </Grid>
              ))}
            </Grid>
          </Container>
        </>
      )
  }

export default GaetAll;