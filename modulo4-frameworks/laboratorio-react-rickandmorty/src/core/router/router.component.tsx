import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ListContainer } from '../../pods/list/list.container';
import { LoginPage } from '../../pods/login/login';
import { DetailPage } from '../../scenes/detail';
import { switchRoutes } from './routes';

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.root} element={<LoginPage />} />
        <Route path={switchRoutes.list} element={<ListContainer />} />
        <Route path={switchRoutes.details} element={<DetailPage />} />
      </Routes>
    </Router>
  );
};
