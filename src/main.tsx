import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import App from './pages/Home/App.tsx';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './store';
import Additional from './pages/Additional/Additional.tsx';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
  },
  {
    path: '/second',
    element: <Additional />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
        theme="light"
      />
    </Provider>
  </StrictMode>
);
