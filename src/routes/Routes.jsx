import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import AllEquipment from '../pages/AllEquipment';
import AddEquipment from '../pages/AddEquipment';
import MyEquipment from '../pages/MyEquipment';

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
]);

export default routes;
