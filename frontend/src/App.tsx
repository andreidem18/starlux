import { RouterProvider } from 'react-router-dom'
import router from './router'
import { LoadingScreen, Notification } from './components'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { useEffect } from 'react'
import { fetchLoggedUser } from './redux/slices/auth.slice'

const App = () => {

    const isLoading = useAppSelector(state => state.app.isLoading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchLoggedUser())
    }, [dispatch]);


    return (
        <>
            {isLoading && <LoadingScreen />}
            <Notification />
            <RouterProvider router={router} />
        </>
    )
}

export default App