import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Home, Login } from './pages';
import { AuthLayout, MainLayout } from './layouts';
import Shop from './pages/shop/shop.component';
import SignUp from './pages/sign-up/sign-up.component';
import ProductDetail from './pages/product-detail/product-detail.component';
import CartPage from './pages/cart/cart.component';
import Orders from './pages/orders/orders.component';
import ProtectedRoute from './components/protected-route/protected-route.component';
import AboutPage from './pages/about/about.component';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/shop",
                element: <Shop />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/shop/:id",
                element: <ProductDetail />,
            },
            {
                path: "/cart",
                element: <ProtectedRoute><CartPage /></ProtectedRoute>,
            },
            {
                path: "/orders",
                element: <ProtectedRoute><Orders /></ProtectedRoute>,
            },
        ]
    },
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: 'signup',
                element: <SignUp />,
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

