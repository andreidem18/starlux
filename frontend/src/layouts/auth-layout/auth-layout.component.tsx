import { Outlet, useNavigate } from 'react-router-dom';
import { loginBackground, logoPng } from '../../assets/images';
import './auth-layout.styles.css';

const AuthLayout = () => {

  const navigate = useNavigate();

  return (
    <>
      <section className='auth'>
        <div className="card">
          <div className="branch-name-container" onClick={() => navigate('/')}>
            <img src={logoPng} alt="" />
            <h1 className="branch-name">
              Starlux
            </h1>
          </div>
          <Outlet />
        </div>
      </section>
      <video className='auth-background' src={loginBackground} autoPlay playsInline muted loop></video>
    </>
  )
}

export default AuthLayout