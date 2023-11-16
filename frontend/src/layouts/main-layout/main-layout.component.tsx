import { Outlet } from 'react-router-dom';
import { Footer, NavBar } from '../../components';
import './main-layout.styles.css'

const MainLayout = () => {
  return (
    <div className='main-layout'>
        <NavBar />
        <div className="outlet">
          <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default MainLayout