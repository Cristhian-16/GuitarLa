import {
  createBrowserRouter,
  Navigate,
  RouterProvider
} from 'react-router-dom';
import {
  Blog,
  Carrito,
  Entrada,
  GuitarPage,
  Nosotros,
  Producto,
  Tienda
} from '../tienda';

const router = createBrowserRouter([
  {
    path: '/',
    element: <GuitarPage />
  },
  {
    path: 'nosotros',
    element: <Nosotros />
  },
  {
    path: 'blog',
    element: <Blog />
  },
  {
    path: 'tienda',
    element: <Tienda />
  },
  {
    path: 'pago',
    element: <Carrito />
  },
  {
    path: 'producto/:id',
    element: <Producto />
  },
  {
    path: 'entrada',
    element: <Entrada />
  },
  {
    path: '*',
    element: <Navigate to={'/'} />
  }
]);

export const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
