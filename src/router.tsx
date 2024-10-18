import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import { Test } from './test';
import { MenuDetail } from './pages/MenuDetail';

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
  {
    path: '/:id',
    element: <MenuDetail />,
    children: [
      {
        path: 'product',
        element: <MenuDetail />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
