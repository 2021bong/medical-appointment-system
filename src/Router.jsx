import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import * as theme from './styles/theme';

import App from './App';
import Reservation from './pages/reservation/Reservation';
import Inquiry from './pages/inquiry/Inquiry';

const Router = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/reservation' element={<Reservation />} />
          <Route path='/inquiry' element={<Inquiry />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default Router;
