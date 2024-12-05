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

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'all-equipment',
        element: <AllEquipment />,
      },
      {
        path: 'add-equipment',
        element: <AddEquipment />,
      },
      {
        path: 'my-equipment',
        element: <MyEquipment />,
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
