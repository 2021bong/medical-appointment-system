import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import * as theme from './styles/theme';

import App from './App';
import Reservation from './pages/reservation/Reservation';
import Inquiry from './pages/inquiry/Inquiry';

const Router = () => {
  const [list, setList] = useState();

  useEffect(() => {
    axios('data/reservation.json').then((res) => setList(res.data.reservations));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename='/medical-appointment-system'>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/reservation' element={<Reservation list={list} setList={setList} />} />
          <Route path='/inquiry' element={<Inquiry list={list} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;
