import React from 'react';

export const Login = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-white w-full max-w-lg py-10 rounded-lg text-center">
        <h3 className="text-3xl text-gray-800">Log In</h3>
        <form className="flex flex-col mt-5 px-5">
          <input
            placeholder="email"
            className="bg-gray-200 shadow-inner focus:outline-none mb-3 py-3 px-5 rounded-lg border-2 focus:border-opacity-50 focus:border-green-600"
          />
          <input
            placeholder="password"
            className="bg-gray-200 shadow-inner focus:outline-none mb-3 py-3 px-5 rounded-lg border-2 focus:border-opacity-50 focus:border-green-600"
          />
          <button className="py-3 px-5 bg-gray-800 text-white text-lg rounded-lg focus:outline-none hover:opacity-90">Log In</button>
        </form>
      </div>
    </div>
  )
};
