import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Home, Login } from './pages';
import { AuthLayout, MainLayout } from './layouts';
import Shop from './pages/shop/shop.component';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/shop",
                element: <Shop />
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "*",
                element: <Navigate to="/auth/login" />
            }
        ]
    },
    {
        path: "*",
        element: <Navigate to="/" />
    }
]);

export default router;

