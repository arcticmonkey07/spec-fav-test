import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './AppRouter.module.css';
import { routes } from '../../router/index';
import Main from '../../pages/Main/Main';
import Clients from '../../pages/Clients';
import Employees from '../../pages/Employees';
import Analytics from '../../pages/Analytics';

const AppRouter = () => {
  return (
    <div className={styles.container}>
      <Routes>
        {/* {routes.map(route => <Route path={route.path} element={<route.element/>} key={route.path})} */}
        <Route path="/" element={<Main />} />
        <Route path="clients" element={<Clients />} />
        <Route path="employees" element={<Employees />} />
        <Route path="analytics" element={<Analytics />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
