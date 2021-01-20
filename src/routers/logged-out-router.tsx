import React from 'react';
import { useForm } from 'react-hook-form';
import { isLoggedInVar } from '../apollo';

export const LoggedOutRouter = () =>  {
  const { register, watch, handleSubmit, errors } = useForm();
  const onSubmit = () => {
    console.log(watch());
  }
  const onInvalid = () => {
    console.log('cant create an account');
  }
  console.log('error: ',errors);
  return (
    <div>
      <h1>logged out</h1>
      <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
        <div>
          <input
            ref={register({
              required: 'This is required',
              validate: (email: string) => email.includes('@gmail.com'),
            })}
            name="email"
            type="email"
            placeholder="email"
          />
        </div>
        <div>
          <input
            ref={register({
              required: true
            })}
            name="password"
            type="password"
            required
            placeholder="password"
          />
        </div>
        <button className="bg-yellow-300 text-white">Submit</button>
      </form>
    </div>
  );
}
