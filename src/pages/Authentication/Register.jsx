import React from 'react';
import { useForm } from 'react-hook-form';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router';

const Register = () => {


 const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit=(data)=>{
    console.log(data);
    
  }

    return (
        <div className='min-w-95.5 md:max-w-95.5 w-full'>
            <h1 className='text-4xl font-extrabold mb-4 mt-5 md:mt-0'>Create an Account</h1>
            <p className='text-2xl'>Register with Profast</p>
            <FaUserCircle className='my-3.5 text-3xl' />
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset className="fieldset">
                     <label className="label">Name</label>
                    <input type="text" {...register('name',{required:true})} className="input w-full" placeholder="name" />
                    <label className="label">Name</label>
                    <input type="email" {...register('email',{required:true})} className="input w-full" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" {...register('password', { required: true ,minLength: 6})} className="input w-full" placeholder="Password" />
                    <Link to={'/login'}><a className="link link-hover">Already have an account ? Login</a></Link>
                    <button className="btn btn-primary mt-4 text-black">Register</button>
                </fieldset>
            </form>
            {errors.password?.type === 'required' && <span className='text-red-500'>Password is required</span>}
            {errors.password?.type === 'minLength' && <span className='text-red-500'>Password must be at last 6 words</span>}
            {errors.name?.type === 'required' && <span className='text-red-500'>Name is required</span>}
            {errors.email?.type === 'required' && <span className='text-red-500'>Email is required</span>}
        </div>
    );
};

export default Register;