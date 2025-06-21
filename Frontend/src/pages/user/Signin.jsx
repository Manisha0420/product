import React from 'react';
import {useForm} from "react-hook-form"
import { useDispatch } from 'react-redux';
import { asyncsigninuser } from '../../features/actions/userAction';

const Signin = () => {
  const {register, handleSubmit ,reset}= useForm();
  const dispatch =useDispatch();
  const SigninHandler = (user ) =>{
    dispatch(asyncsigninuser(user));
    reset();
  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form 
         onSubmit={handleSubmit(SigninHandler)}
         className="bg-white shadow-lg rounded-lg w-full max-w-md p-8 space-y-6"
      >

        <h2 className="text-2xl font-bold text-center text-gray-800">Sign In</h2>

        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-sm text-gray-600">Email</label>
          <input
            {...register("email")}
            type="email"
            id="email"
            placeholder="john@gmail.com"
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="password" className="text-sm text-gray-600">Password</label>
          <input
            {...register('password')}
            type="password"
            id="password"
            placeholder="••••••••"
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition duration-300"
        >
          Sign In
        </button>

        <p className="text-sm text-center text-gray-600">
          Don’t have an account?
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign-Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signin;
