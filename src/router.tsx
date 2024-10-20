import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import { DetailHome } from './pages/HairShopDetail/DetailHome';

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
    path: '/:id',
    element: <DetailHome />,
    children: [
      {
        path: 'product',
        element: <DetailHome />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
