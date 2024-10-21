import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import { DetailHome } from './pages/HairShopDetail/DetailHome';
import Location from './pages/Location/Location';

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
  { path: '/location', element: <Location /> },
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
