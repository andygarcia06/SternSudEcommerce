import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/page'));
const ProductsPage = lazy(() => import('../pages/products/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const ReconditioningPage = lazy(() => import('../pages/reconditioning/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const NotFoundPage = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/produits',
    element: <ProductsPage />,
  },
  {
    path: '/qui-sommes-nous',
    element: <AboutPage />,
  },
  {
    path: '/reconditionnement',
    element: <ReconditioningPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export default routes;
