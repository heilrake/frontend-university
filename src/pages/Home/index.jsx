import { Box, Typography } from '@mui/material';

import styles from './Home.module.scss';

export const Home = () => {
  return (
    <Box>
      <Box className={styles.root}>
        <Box>
          <Typography className={styles.title} style={{ fontSize: '38px' }} gutterBottom>
            Черкаський
          </Typography>
          <Typography className={styles.subtitle} gutterBottom>
            ОБЛАСНИЙ КРАЄЗНАВЧИЙ МУЗЕЙ
          </Typography>
          <Typography className={styles.text} gutterBottom>
            Ласкаво просимо відвідати наш музей. Ми відкриті : <br />
            середа - неділя з 10.00 до 18.00 , (каса до 17.00) <br />
            за адресою м. Черкаси вул.Слави,1
          </Typography>
        </Box>
        <Box>
          <img
            className={styles.image}
            src="https://uk.yonik.me/images/0/997/cherkassy-regional-museum.jpg"
            alt="alt museum"
          />
        </Box>
      </Box>
    </Box>
  );
};
