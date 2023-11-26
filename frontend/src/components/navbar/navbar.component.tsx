import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate,  } from 'react-router-dom';
import './navbar.styles.css';
import { logoPng, logoWhite } from '../../assets/images';
import { NavAuthButton } from '..';

const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [textColor, setTextColor] = useState<'dark' | 'light'>('dark');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        console.log(location.pathname)
        if (location.pathname === '/about') setTextColor('light');
        else setTextColor('dark');
    }, [location])

    const close = () => setIsMenuOpen(false);

    useEffect(() => {
        const handleWidth = () => setWidth(window.innerWidth);

        window.addEventListener('resize', handleWidth);

        return () => window.removeEventListener('resize', handleWidth);
    }, [])

    return (

        <nav className={`${textColor} ${(isMenuOpen && width < 768) ? 'open-menu' : ''}`}>
            <div className="flex-items container">
                {
                    width < 768 ? (
                        // Si la pantalla es pequeña se mostrará botón para abrir / cerrar menú
                        <button
                            className='menu-button'
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {
                                isMenuOpen ? (
                                    <i className="material-icons-sharp">close</i>
                                ) : (
                                    <i className="material-icons-sharp">menu</i>
                                )
                            }
                        </button>
                    ) : (
                        // Si la pantalla es grande se mostrarán redes sociales
                        <div className='social-networks-icons'>
                            <a href="https://github.com/andreidem18/starlux" target='_blank'>
                                <i className="fab fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/andr%C3%A9s-david-mendoza-m%C3%A1rquez-867a1b175/" target='_blank'>
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    )
                }

                <div>
                    <div className="branch-name-container" onClick={() => navigate('/')}>
                        <img src={textColor === 'dark' ? logoPng : logoWhite} alt="starlux-logo" />
                        <h1 className="branch-name">Starlux</h1>
                    </div>
                    {/* Si la pantalla es grande se muestran los links de la barra de navegación */}
                    {width > 768 && <Menu isMenuOpen={isMenuOpen} width={width} close={close} />}
                </div>
                <NavAuthButton />
            </div>
            {
                // Si el menú esta abierto y la pantalla es pequeña, se muestra el menú
                (isMenuOpen && width < 768) && <Menu isMenuOpen={isMenuOpen} width={width} close={close} />
            }
        </nav>
    );
};

interface MenuProps {
    isMenuOpen: boolean,
    width: number,
    close: () => void
}

const Menu = ({ isMenuOpen, width, close }: MenuProps) => {
    return (
        <ul className={`menu fade-in ${isMenuOpen || width > 768 ? 'show' : ''}`}>
            <li>
                <Link to="/shop" onClick={close}>Shop</Link>
            </li>
            <li>
                <Link to="/about" onClick={close}>Our story</Link>
            </li>
            <li>
                <Link to="/cart" onClick={close}>Cart</Link>
            </li>
            <li>
                <Link to="/orders" onClick={close}>My orders</Link>
            </li>
        </ul>
    )
}

export default NavBar;