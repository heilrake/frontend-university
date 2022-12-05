import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import Container from '@mui/material/Container';

import { logout, selectIsAuth } from '../../redux/slice/auth';

import { LINKS } from '../../helpers/links';

import styles from './Header.module.scss';

export const Header = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const onClickLogout = () => {
    if (window.confirm('Дійсно вийти ?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
    }
  };

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Button
            color='secondary'
            variant="contained"
            onClick={() => navigate(LINKS.home)}
            className={styles.logo}
          >
            Краєзнавчий музей
          </Button>
          <Box className={styles.navigation}>
            <Button onClick={() => navigate(LINKS.about)}>Історія музей</Button>
            <Button onClick={() => navigate(LINKS.exposure)}>Експонати</Button>
            <Button onClick={() => navigate(LINKS.forUser)}>Відвідувачам</Button>
            <Button onClick={() => navigate(LINKS.contact)}>Контакти</Button>
          </Box>
          <div className={styles.buttons}>
            {isAuth && (
              <>
                <Link to="/add-post">
                  <Button
                    color='warning'
                    variant="contained"
                  >Додати нову статтю</Button>
                </Link>
                <Button
                  onClick={onClickLogout}
                  variant="contained"
                  color="error"
                >
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
