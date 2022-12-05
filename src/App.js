import { useEffect } from 'react';
import { useDispatch, } from 'react-redux';

import Router from './router'
import { fetchAuthMe } from './redux/slice/authActionCreator';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthMe());
  });

  return (
    <>
      <Router />
    </>
  );
};

export default App;
