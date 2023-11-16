import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.styles.css';

const NavBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    const close = () => setIsMenuOpen(false);

    useEffect(() => {
        const handleWidth = () => setWidth(window.innerWidth);

        window.addEventListener('resize', handleWidth);

        return () => window.removeEventListener('resize', handleWidth);
    }, [])

    return (

        <nav className={(isMenuOpen && width < 768) ? 'open-menu' : ''}>
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
                            <a href="https://www.instagram.com/academlohq/"><i className="fab fa-instagram"></i></a>
                            <a href="https://yt3.ggpht.com/ytc/AKedOLSm2IwzXy8wXwDP7AvkrSYwHT8H333_WRW0Oyff=s176-c-k-c0x00ffffff-no-rj-mo">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    )
                }

                <div>
                    <Link to="/" className='branch-name' onClick={close}>Starlux</Link>
                    {/* Si la pantalla es grande se muestran los links de la barra de navegación */}
                    {width > 768 && <Menu isMenuOpen={isMenuOpen} width={width} close={close} />}
                </div>
                <Link to='/cart' className='cart-link' onClick={close}>
                    <i className='material-icons-outlined'>shopping_cart</i>
                </Link>
            </div>
            {
                // Si el menú esta abierto y la pantalla es de teléfono se muestra el menú
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
                <Link to="/about" onClick={close}>About</Link>
            </li>
            <li>
                <Link to="/contact" onClick={close}>Contact</Link>
            </li>
            <li>
                <Link to="/orders" onClick={close}>My orders</Link>
            </li>
        </ul>
    )
}

export default NavBar;