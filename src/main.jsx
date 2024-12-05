import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import routes from './routes/Routes';
import UserAuthContextProvider from './context/UserAuthContext';
import './styles/globalStyle.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ThemeProvider from './context/ThemeContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <UserAuthContextProvider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          draggable
          pauseOnHover
          pauseOnFocusLoss
          toastClassName="relative flex p-4 rounded-md justify-between overflow-hidden cursor-pointer"
          bodyClassName="text-sm"
          progressClassName="h-1"
        />
        <RouterProvider router={routes} />
      </UserAuthContextProvider>
    </ThemeProvider>
  </StrictMode>
);
