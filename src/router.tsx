import { createBrowserRouter } from 'react-router-dom';
import { Test } from './test';
import { Menu } from '@/pages/menuDetails/menu.tsx';

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
