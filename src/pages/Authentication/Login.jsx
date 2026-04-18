import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import SocialLogin from './SocialLogin';

const Login = () => {
    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = data => {
        console.log(data);

    }
    return (
        <div className='min-w-95.5 md:max-w-95.5 w-full'>
            <h1 className='text-4xl font-extrabold mb-4'>Welcome Back</h1>
            <p className='text-2xl'>Login with Profast</p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" {...register('email')} className="input w-full" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" {...register('password', {required: true})} className="input w-full" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <Link to={'/register'}><a className="link link-hover">Dont have any account ? SignUp</a></Link>
                    <button className="btn btn-primary mt-4 text-black">Login</button>
                </fieldset>
            </form>
            <SocialLogin/>
            {errors.password && <span>{errors.password.message}</span>}
        </div>
    );
};

export default Login;