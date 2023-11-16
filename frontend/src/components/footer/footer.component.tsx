import { Link } from 'react-router-dom';
import "./footer.styles.css";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className='asterisk col-1'>*</div>
                <div className='branch-name col-5'>Anise</div>
                <div className='col-3'>
                    <Link to="/shop">Shop</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className='col-3'>
                    <a href="https://www.instagram.com/academlohq/">Instagram</a>
                    <a href="https://co.pinterest.com/">Pinterest</a>
                    <a href="https://yt3.ggpht.com/ytc/AKedOLSm2IwzXy8wXwDP7AvkrSYwHT8H333_WRW0Oyff=s176-c-k-c0x00ffffff-no-rj-mo">Youtube</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
