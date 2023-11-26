import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import './nav-auth-button.styles.css'
import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import { blowUpAnimation } from '../../utils/animations';
import { logout as logoutAction } from '../../redux/slices/auth.slice';
import { useNavigate } from 'react-router-dom';

const NavAuthButton = () => {

    const { loggedUser, isLogged } = useAppSelector(state => state.auth);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(logoutAction());
        navigate('/auth/login')
    }

    if (!isLogged || !loggedUser) return (
        <div className='auth-button' onClick={() => navigate('/auth/login')}>
            <i className="fa-solid fa-right-to-bracket"></i>
            <span>Login</span>
        </div>
    );

    return (
        <>
            <div className='auth-button' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <i className="fa-solid fa-user"></i>
                <span>{loggedUser.first_name} {loggedUser.last_name}</span>
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div {...blowUpAnimation} className="auth-menu">
                            <ul>
                                <li onClick={logout}>
                                    Log out
                                </li>
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </>
    )
}

export default NavAuthButton
