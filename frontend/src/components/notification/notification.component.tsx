import { useEffect } from 'react';
import { setNotification } from '../../redux/slices/app.slice';
import './notification.styles.css';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const Notification = () => {

    const dispatch = useAppDispatch();
    const message = useAppSelector(state => state.app.notification);

    useEffect(() => {
        if(message !== ""){
            setTimeout(() => {
                dispatch(setNotification(""))
            }, 4000);
        }
    }, [ dispatch, message ]);

    return (
        <div className={`notification ${message ? 'show' : ''}`}>
            <div className="content">
                <i className="material-icons-sharp"> info </i>
                <span className='message'>{message}</span>
            </div>
        </div>
    );
};

export default Notification;