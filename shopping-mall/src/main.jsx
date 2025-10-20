import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import ProductAll from './pages/ProductAll.jsx'
import Login from './pages/Login.jsx'
import PrivateRoute from './route/PrivateRoute.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <ProductAll />
      },
      {
        path: "login",
        element: <Login />
      },
      {
        path: "product/:id",
        element: <PrivateRoute />
      }
    ]
  },
]);

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);