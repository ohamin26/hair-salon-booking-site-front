import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import { DetailHome } from './pages/HairShopDetail/DetailHome';
import Location from './pages/Location/Location';
import HomaNavigation from './components/HomeNavigation/HomeNavigation';
import { MenuNavigation } from './components/MenuNavigation/MenuNavigation';
import DetailDesinger from './pages/HairShopDetail/DetailDesinger';
import DetailReview from './pages/HairShopDetail/DetailReview';
import Around from './pages/Around/Around';
import { DetailMenuInfo } from './pages/HairShopDetail/DetailMenu/DetailMenuInfo';
import { DetailMemu } from './pages/HairShopDetail/DetailMenu/DetailMemu';

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
      { path: '/search/around', element: <Around /> },
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
      {
        path: '/:id/designer',
        element: <DetailDesinger />,
      },
      {
        path: '/:id/review',
        element: <DetailReview />,
      },
      {
        path: '/:id/product/:productId/info',
        element: <DetailMenuInfo />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
