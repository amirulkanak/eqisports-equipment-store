import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import AllEquipment from '../pages/AllEquipment';
import AddEquipment from '../pages/AddEquipment';
import MyEquipment from '../pages/MyEquipment';
import AuthLayout from '../layouts/AuthLayout';
import ForgetPasswordPage from '../pages/ForgetPasswordPage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import PrivateRoute from './PrivateRoute';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        loader: () =>
          fetch(
            'https://b10-a10-server-side-amirulkanak.vercel.app/equipment/all'
          ).then((res) => res.json()),
      },
      {
        path: 'all-equipment',
        element: <AllEquipment />,
      },
      {
        path: 'add-equipment',
        element: (
          <PrivateRoute>
            <AddEquipment />
          </PrivateRoute>
        ),
      },
      {
        path: 'my-equipment',
        element: (
          <PrivateRoute>
            <MyEquipment />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: '/auth',
        element: <Navigate to="/auth/login" />,
      },
      {
        path: '/auth/login',
        element: <LoginPage />,
      },
      {
        path: '/auth/register',
        element: <RegisterPage />,
      },
      {
        path: '/auth/forgot-password',
        element: <ForgetPasswordPage />,
      },
    ],
  },
]);

export default routes;
