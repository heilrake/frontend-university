import React from "react";
import { Paper, Box, Typography, TextField, Button } from "@mui/material";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";

import { fetchAuth } from "../../redux/slice/authActionCreator";
import { selectIsAuth } from "../../redux/slice/auth";

import styles from "./Login.module.scss";

export const Login = () => {

  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const { register, handleSubmit, setError, reset, formState: { errors, isValid } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onChange'
  });

  const onSubmit = async (values) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      toast.error("Не вдалось авторизуватися")
      reset();
    }
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token)

    }
  };

  if (isAuth) {
    return <Navigate to='/' />
  }

  return (
    <Box style={{ height: 'calc(100vh - 50px)', display: 'flex', alignItems: 'center' }}>
      <Paper classes={{ root: styles.paper }}>
        <Typography classes={{ root: styles.title }} variant="h5">
          Вход в аккаунт
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            className={styles.field}
            label="E-Mail"
            type='email'
            error={Boolean(errors.email?.message)}
            helperText={errors.email?.message}
            {...register('email', { require: 'Укажіть почту' })}
            fullWidth
          />
          <TextField
            className={styles.field}
            label="Пароль"
            helperText={errors.password?.message}
            {...register('password', { require: 'Укажіть пароль' })}
            fullWidth
          />
          <Button type="submit" size="large" variant="contained" fullWidth>
            Войти
          </Button>
        </form>
      </Paper>
    </Box>
  );
};
