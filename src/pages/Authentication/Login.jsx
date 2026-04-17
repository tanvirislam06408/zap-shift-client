import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register,
        handleSubmit,
    } = useForm();


    const onSubmit = data => {
        console.log(data);

    }
    return (
        <div className='min-w-95.5 md:max-w-95.5 w-full'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" {...register('email')} className="input w-full" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" {...register('password')} className="input w-full" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-primary mt-4 text-black">Login</button>
                </fieldset>
            </form>
        </div>
    );
};

export default Login;