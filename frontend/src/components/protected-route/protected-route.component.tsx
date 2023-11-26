import { ReactNode } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Navigate } from 'react-router-dom';
import { setNotification } from '../../redux/slices/app.slice';

interface ProtectedRouteParams {
    children: ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteParams) => {

    const { isLogged } = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();

    if (isLogged) return children
    else {
        dispatch(setNotification('You must loggin to access to this feature'));
        return <Navigate to='/auth/login' />
    }

}

export default ProtectedRoute
