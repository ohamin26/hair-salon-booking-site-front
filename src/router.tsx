import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import { Test } from './test';

type RouteElement = {
  path: string;
  element: React.ReactNode;
  errorElement?: React.ReactNode;
  children?: { path: string; element: React.ReactNode }[];
};

const routes: RouteElement[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/test',
    element: <Test />,
  },
];

export const router = createBrowserRouter(routes);
