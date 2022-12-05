import React from "react";
import Container from '@mui/material/Container';

import { Header } from '../components/Header';
import { Routes, Route, useLocation } from "react-router-dom";
import routes from "./routes";

const Router = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== '/login' && <Header />}
      <Container maxWidth="lg">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Container>
    </>
  );
};

export default Router;
