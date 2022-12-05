import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { logout, selectIsAuth } from '../../redux/slice/auth';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Header.module.scss';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

export const Header = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const onClickLogout = () => {
    if (window.confirm('Дійсно вийти  ?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
    }
  };

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <div>Краєзнавчий музей</div>
          </Link>
          <Box className={styles.navigation}>
            <Link to="/">Про музей</Link>
            <Link to="/exposure">Експонати</Link>
            <Link to="/about">Відвідувачам</Link>
            <Link to="/about">Контакти</Link>
          </Box>
          <div className={styles.buttons}>
            {isAuth && (
              <>
                <Link to="/add-post">
                  <Button variant="contained">Додати нову статтю</Button>
                </Link>
                <Button onClick={onClickLogout} variant="contained" color="error">
                  Вийти
                </Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
