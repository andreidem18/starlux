import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from "react-hook-form";
import './sign-up.styles.css';
import { useAppDispatch } from '../../redux/hooks';
import { useMutation } from '@tanstack/react-query';
import { createUserRequest } from '../../services';
import { setNotification } from '../../redux/slices/app.slice';
import { isAxiosError } from 'axios';
import { useState } from 'react';
import { spinner } from '../../assets/images';

type Inputs = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

const SignUp = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [ error, setError ] = useState('');

    const { register, handleSubmit } = useForm<Inputs>();
    const { mutate: createUser, isPending: createUserLoading } = useMutation({
        mutationFn: createUserRequest,
        onSuccess: () => {
            navigate('/auth/login');
            dispatch(setNotification('User created, login with your credentails'));
        }, 
        onError: (error) => {
            if (isAxiosError(error)) {
                const isDuplicatedEmail = error.response?.data.includes('duplicate key value')
                if (isDuplicatedEmail) {
                    setError('Email already exists');
                }
            }
        }
    })

    const onSubmit: SubmitHandler<Inputs> = data => {
        createUser(data);
    }

    return (
        <>
            <form className="sign-up-form" action="" onSubmit={handleSubmit(onSubmit)} >
                <div className="names">
                    <label>
                        First name
                        <input type="text" placeholder='Robert' {...register("first_name")} required />
                    </label>
                    <label>
                        Last name
                        <input type="text" placeholder='Smith' {...register("last_name")} required />
                    </label>
                </div>
                <label>
                    Email
                    <input type="text" placeholder='robert@starlux.com' {...register("email")} required />
                </label>
                <label>
                    Password
                    <input type="password" placeholder='••••••••' {...register("password")} required />
                </label>
                <span className="error">{error}</span>
                <button className='login-button link-squared'>
                    {createUserLoading ? <img src={spinner}/> : 'Sign Up'}
                </button>
            </form>
            <p className="signup-message">
                Already have an account? <Link to="/auth/login">Log In</Link>
            </p>
        </>
    );
};

export default SignUp;
