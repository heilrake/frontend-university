import { Box, Typography } from '@mui/material';
import React from 'react';

const ForUser = () => {
  return (
    <Box>
      <Box style={{ borderBottom: '2px solid gray', marginBottom: '35px', padding: '30px 0' }}>
        <Typography variant="h4" gutterBottom>
          Вартість послуг
        </Typography>
        <Typography variant="h5" gutterBottom>
          Відвідування експозиції музею (І -IV поверхів)
        </Typography>
        <Box>
          <Typography>- діти – 15,00 грн.</Typography>
          <Typography>- студенти – 20,00 грн.</Typography>
          <Typography>- пенсіонери – 20,00 грн.</Typography>
          <Typography>- дорослі – 30,00 грн.</Typography>
        </Box>
      </Box>
      <Box style={{ borderBottom: '2px solid gray', marginBottom: '35px', padding: '30px 0' }}>
        <Typography variant="h4" gutterBottom>
          Екскурсійне обслуговування груп від 10 осіб
        </Typography>
        <Typography variant="h5" gutterBottom>
          Тематична екскурсія (45 хвилин)
        </Typography>
        <Box>
          <Typography>- діти – 25,00 грн. (з вхідною платою 15,00 грн.) – 20,00 грн.</Typography>
          <Typography>- студенти – 30 грн. (з вхідною платою 20,00 грн.) – 30,00 грн.</Typography>
          <Typography>- пенсіонери – 30 грн. (з вхідною платою 20,00 грн.) – 30,00 грн.</Typography>
          <Typography>- дорослі – 45 грн. (з вхідною платою 30,00 грн.) – 45,00 грн.</Typography>
        </Box>
      </Box>
      <Box style={{ marginBottom: '55px', padding: '30px 0' }}>
        <Typography variant="h4" gutterBottom>
          Індивідуальне екскурсійне обслуговування групи від 1 особи
        </Typography>
        <Box>
          <Typography>
            - тематична індивідуальна екскурсія незалежно від вікової категорії – 60,00 грн.
          </Typography>
          <Typography>
            - оглядова індивідуальна екскурсія незалежно від вікової категорії - 110,00 грн.
          </Typography>
          <Typography>
            - індивідуальна екскурсія за межами музею незалежно від вікової категорії – 80,00 грн.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ForUser;
