import { LoginPage } from '@/pages';
import { createBrowserRouter, RouterProvider } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: LoginPage,
  },
]);

export const Router = () => <RouterProvider router={router} />;
