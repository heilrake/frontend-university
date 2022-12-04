import Container from '@mui/material/Container';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components';
import { Home, FullPost, AddPost, Login } from './pages';
import AboutMuseum from './pages/AboutMuseum';
import Exposure from './pages/Exposure';
import { selectIsAuth } from './redux/slice/auth';
import { fetchAuthMe } from './redux/slice/authActionCreator';

const App = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthMe());
  });
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutMuseum />} />
          <Route path="/exposure" element={<Exposure />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
