import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import { Test } from './test';
import { Menu } from '@/pages/menuDetails/menu.tsx';

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
    element: <Menu />,
    children: [
      {
        path: 'product',
        element: <Menu />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
