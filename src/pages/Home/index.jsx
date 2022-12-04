import { Box, Typography } from '@mui/material';

export const Home = () => {
  return (
    <Box>
      <Box>
        <Box>
          <Typography variant="h4" gutterBottom>
            Черкаський
          </Typography>
          <Typography gutterBottom>ОБЛАСНИЙ КРАЄЗНАВЧИЙ МУЗЕЙ</Typography>
          <Typography gutterBottom>
            Ласкаво просимо відвідати наш музей. Ми відкриті : <br />
            середа - неділя з 10.00 до 18.00 , (каса до 17.00) <br />
            за адресою м. Черкаси вул.Слави,1
          </Typography>
        </Box>
        <img
          src="https://lh3.googleusercontent.com/p/AF1QipNUD-YRy552Yr8oAzmUVsJgwvgAv8sfuczrsdwE=s680-w680-h510"
          alt="alt museum"
        />
      </Box>
    </Box>
  );
};
