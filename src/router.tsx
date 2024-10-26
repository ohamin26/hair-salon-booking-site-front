import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import { DetailHome } from './pages/HairShopDetail/DetailHome';
import Location from './pages/Location/Location';
import HairShop from './pages/HairShop/HairShop';
import Designer from './pages/Designer/Designer';
import HomaNavigation from './components/HomeNavigation/HomeNavigation';
import { DetailMemu } from './pages/HairShopDetail/DetailMemu';
import { MenuNavigation } from './components/MenuNavagation/MenuNavigation';

type RouteElement = {
  path: string;
  element: React.ReactNode;
  errorElement?: React.ReactNode;
  children?: RouteElement[];
};

const routes: RouteElement[] = [
  {
    path: '/',
    element: <HomaNavigation />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      { path: '/location', element: <Location /> },

      { path: '/search/hair', element: <HairShop /> },
      { path: '/search/designer', element: <Designer /> },
    ],
  },
  {
    path: '/:id',
    element: <MenuNavigation />,
    children: [
      {
        path: '/:id',
        element: <DetailHome />,
      },
      {
        path: '/:id/product',
        element: <DetailMemu />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
