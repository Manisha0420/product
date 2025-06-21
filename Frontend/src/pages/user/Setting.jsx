import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { asyncdeleteuser, asynclogoutuser, asyncupdateuser } from '../../features/actions/userAction';

const Setting = () => {
  const { user } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: user?.username,
      email: user?.email,
      password: user?.password,
    },
  });

  const UpdateHandler = (updateduser) => {
    dispatch(asyncupdateuser(user.id, updateduser));
  };

  const LogoutHandler = () => {
    dispatch(asynclogoutuser(user.id));
  };

  const DeleteHandler = () => {
    dispatch(asyncdeleteuser(user.id));
  };

  return (
    <div className="min-h-screen w-full flex flex-wrap gap-10 justify-center items-start bg-gray-100 p-6">
     
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center gap-6">
        <img
          className="w-36 h-36 rounded-full object-cover border-4 border-blue-200"
          src={user.image}
          alt="Profile"
        />
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800">{user.username}</h2>
          <p className="text-gray-500">{user.email}</p>
        </div>

        <div className="flex gap-4 mt-6 w-full">
          <button
            onClick={LogoutHandler}
            type="button"
            className="flex-1 bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 transition"
          >
            Logout
          </button>
          <button
            onClick={DeleteHandler}
            type="button"
            className="flex-1 bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <form onSubmit={handleSubmit(UpdateHandler)} className="space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-800">Update Profile</h2>

          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium text-gray-600">Profile Image</label>
            <input
              {...register('image')}
              type="url"
              placeholder="Image URL"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-sm font-medium text-gray-600">Username</label>
            <input
              {...register('username')}
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm font-medium text-gray-600">Email</label>
            <input
              {...register('email')}
              type="email"
              id="email"
              placeholder="example@email.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className="text-sm font-medium text-gray-600">Password</label>
            <input
              {...register('password')}
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Setting;
