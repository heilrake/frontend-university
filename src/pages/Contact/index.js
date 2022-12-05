import React from 'react';
import { Box, Typography } from '@mui/material';


import googleMaps from './google-map.png'

import styles from './Contact.module.scss';

const Contact = () => {

  return (
    <Box sx={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center', marginBottom: '100px' }}>
      <hr />
      <Box className={styles.contactWrapper}>
        <Typography variant='h4' sx={{ marginBottom: '20px' }}>ЗВ’ЯЗАТИСЯ З НАМИ</Typography>
        <Typography variant='body2'>Cherkasy Regional Museum of Local Lore</Typography>
        <Box className={styles.infoWrapper}>
          <Typography variant='body1'>Наша Адреса</Typography>
          <Typography variant='body2'>м. Черкаси вул. Слави, 1</Typography>
        </Box>
        <Box className={styles.infoWrapper}>
          <Typography variant='body1'>Телефон</Typography>
          <Typography variant='body2'>+38 097 098 36 76</Typography>
          <Typography variant='body2'>(0472) 37 20 91</Typography>
        </Box>
        <Box className={styles.infoWrapper}>
          <Typography variant='body1'>Час роботи</Typography>
          <Typography variant='body2'>Середа – Неділя з 10:00 до 18:00 години. (каса до 17:00)</Typography>
          <Typography variant='body2'>Понеділок та вівторок - вихідні дні.</Typography>
          <Typography variant='body2'>Переклад та модернізація сайту здійснені за підтримки Українського культурного фонду.</Typography>
        </Box>
      </Box>
      <a href='https://www.google.com.ua/maps/place/%D0%A7%D0%B5%D1%80%D0%BA%D0%B0%D1%81%D1%81%D0%BA%D0%B8%D0%B9+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D0%BD%D0%BE%D0%B9+%D0%BA%D1%80%D0%B0%D0%B5%D0%B2%D0%B5%D0%B4%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9+%D0%BC%D1%83%D0%B7%D0%B5%D0%B9/@49.4474265,32.0556517,15.75z/data=!4m5!3m4!1s0x40d14c9d317d3f57:0x60729dd89433c264!8m2!3d49.4483307!4d32.0610104?hl=ru' target="_blank" rel="noreferrer">
        <img src={googleMaps} alt="google map" />
      </a>
    </Box>
  );
};

export default Contact;
