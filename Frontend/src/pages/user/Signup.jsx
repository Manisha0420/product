import React from 'react'
import { useForm } from 'react-hook-form';
import {nanoid} from "nanoid";
import {useDispatch} from "react-redux"
import { asyncsignupuser } from '../../features/actions/userAction';
import {useNavigate} from "react-router"
const Signup = () => {
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const {register , handleSubmit , reset} = useForm()

  const SignupHandler = (user) =>{
    user.id = nanoid();
    user.isAdmin = false;
    user.cart =[];
    dispatch(asyncsignupuser(user));
    navigate("/signin")
    console.log(user)
    reset()
  }

   return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form 
        onSubmit={handleSubmit(SignupHandler)}
        className="bg-white shadow-lg rounded-lg w-full max-w-md p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Register Yourself</h2>
 
         <div>
          <label className="block font-semibold text-gray-700">Profile Image</label>
          <input
            {...register('image', { required: 'Image URL is required' })}
            type="url"
            placeholder="Enter image URL"
            className={`w-full border p-2 rounded mt-1`}
          />
          
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-sm text-gray-600">Username</label>
          <input
            {...register("username")}
            type="text"
            id="username"
            placeholder="Username"
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

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
            {...register("password")}
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
          Sign Up
        </button>

        <p className="text-sm text-center text-gray-600">
          Already have an account?
          <a href="/signin" className="text-blue-600 hover:underline">
            Sign-In
          </a>
        </p>
      </form>
    </div>
  );
}

export default Signup
