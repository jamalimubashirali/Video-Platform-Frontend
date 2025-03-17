import React from 'react';
import { Button, InputField } from './index';
import { useForm } from 'react-hook-form';
import authService from '../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
    
    // Login Function
    const loginUser = async (data) => {
        const user = await authService.login(data.email, data.password);
        if (user) {
            dispatch(login(user));
            navigate('/');
        } else {
            alert('Error Logging In');
        }
        reset();
    }
return (
    <div>
        <form onSubmit={handleSubmit(loginUser)} className="max-w-sm mx-auto">
            <div className="mb-4">
                <InputField
                    label={`Email`}
                    placeholder={`Enter Email`}
                    type={`email`}
                    {...register('email', { required: 'This field is required' })}
                    className="w-full p-2"
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <div className="mb-4">
                <InputField
                    label={`Password`}
                    placeholder={`Enter Password`}
                    type={`password`}
                    {...register('password', { required: 'This field is required' })}
                    className="w-full p-2"
                />
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </div>
            <Button
                type='submit'
                disabled={isSubmitting}
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Login
            </Button>
        </form>
    </div>
);
}

export default Login;
