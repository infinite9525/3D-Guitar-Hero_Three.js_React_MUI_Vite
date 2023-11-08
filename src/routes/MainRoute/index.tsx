import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import MainLayout from '../../layouts/MainLayout';
import Game from '../../pages/Game';
import SelectMusic from '../../pages/SelectMusic';

const MainRoute: React.FC = () => (
  <MainLayout>
    <Routes>
      <Route path='/game' element={<Game />} />
      <Route path='/' element={<SelectMusic />} />
      <Route path='/*' element={<Navigate replace to='/' />} />
    </Routes>
  </MainLayout>
);

export default MainRoute;
