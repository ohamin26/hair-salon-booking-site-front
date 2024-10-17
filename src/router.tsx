import { createBrowserRouter } from 'react-router-dom';
import App from '@/App.tsx';
import { Test } from './test';

type routeElement = {
  path: string;
  element: React.ReactNode;
  errorElement?: React.ReactNode;
  children?: { path: string; element: React.ReactNode }[];
};

const routes: routeElement[] = [
  {
    path: '/',
    element: <Test />,
  },
];

export const router = createBrowserRouter(routes);
