import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import useAutoChange from '../../utils/useAutoChange';
import './login.styles.css';
import { useMutation } from '@tanstack/react-query';
import { loginRequest } from '../../services';
import { useAppDispatch } from '../../redux/hooks';
import { fetchLoggedUser, setToken } from '../../redux/slices/auth.slice';
import { setNotification } from '../../redux/slices/app.slice';
import { AxiosError } from 'axios';
import { spinner } from '../../assets/images';

type Inputs = {
  email: string
  password: string
}

const testData: Inputs = {
  email: 'john@gmail.com',
  password: 'john1234',
}

const Login = () => {

  const { register, handleSubmit, reset } = useForm<Inputs>();
  const [ showCopied, setShowCopied ] = useAutoChange();
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const loginMutation = useMutation({
    mutationFn: loginRequest,
    onSuccess: (res) => {
      dispatch(setToken(res.data.access));
      dispatch(fetchLoggedUser());
      dispatch(setNotification('Login successfully'));
      navigate('/');
    },
    onError: (error: AxiosError) => {
      if (error.response?.status === 401) {
        setError('Invalid credentials');
      }
    }
  });

  const setTestData = () => {
    reset(testData);
    setShowCopied(true);
  }

  const onSubmit: SubmitHandler<Inputs> = data => loginMutation.mutate(data);


  return (
    <>
      <div className="testing-user">
        <strong>Test data</strong>
        <div className="flex">
          <div className="credentials">
            <span>
              <i className="material-icons-sharp"> person_outline </i>
              {testData.email}
            </span>
            <span>
              <i className="material-icons-outlined"> lock </i>
              {testData.password}
            </span>
          </div>
          <button 
            className={`copy-button center ${showCopied && 'show-copied-message'}`} 
            onClick={setTestData}
          >
            <i className="material-icons-outlined">
              content_copy
            </i>
          </button>
        </div>
      </div>
      <form action="" onSubmit={handleSubmit(onSubmit)} className='login-form'>
        <label>
          Enter your email
          <input type="email" placeholder='example@example.com' {...register("email")} required />
        </label>
        <label>
          Enter your password
          <input type="password" placeholder='••••' {...register("password")} required />
        </label>
        <span style={{ color: "#ff0000" }}>{error}</span>
        <button className='link-squared login-button'>
          {loginMutation.isPending ? <img src={spinner} /> : 'Login'}
        </button>
      </form>
      <p className="signup-message">
        Don't have an account? <Link to="/auth/signup">Sign Up</Link>
      </p>
    </>
  );
};

export default Login;
