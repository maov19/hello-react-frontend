import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Greeting from './Greeting';
import { fetchRandomGreeting } from '../actions/greetingActions';

const App = () => {
  const dispatch = useDispatch();
  const randomGreeting = useSelector((state) => state.randomGreeting);

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Greeting randomGreeting={randomGreeting} />} />      
      </Routes>
    </>
  );
};

export default App;
