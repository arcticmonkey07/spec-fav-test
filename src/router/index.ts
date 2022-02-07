import * as React from 'react';
import Main from '../pages/Main/Main';
import Clients from './../pages/Clients';
import Employees from './../pages/Employees';
import Analytics from './../pages/Analytics';

export interface IRoute {
  path: string;
  element: React.ComponentType;
  name: string
}

export enum RouteNames {
  MAIN = '/',
  CLIENTS = 'clients',
  EMPLOYEES = 'employees',
  ANALYTICS = 'analytics',
}

export const routes: IRoute[] = [
  {path: RouteNames.MAIN, element: Main, name: 'Главная'},
  {path: RouteNames.CLIENTS, element: Clients, name: 'Клиенты'},
  {path: RouteNames.EMPLOYEES, element: Employees, name: 'Сотрудники'},
  {path: RouteNames.ANALYTICS, element: Analytics, name: 'Аналитика'},
]