import React from 'react';
import { useForm } from 'react-hook-form';
import { isLoggedInVar } from '../apollo';

interface IForm {
  email: string;
  password: string;
}

export const LoggedOutRouter = () =>  {
  const { register, watch, handleSubmit, errors } = useForm<IForm>();
  const onSubmit = () => {
    console.log(watch());
  }
  const onInvalid = () => {
    console.log('cant create an account');
  }
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
          {errors.email?.message && (
            <span className="font-bold text-red-600">
              {errors.email?.message}
            </span>
          )}
          {errors.email?.type === 'pattern' && (
            <span className="font-bold text-red-600">
              Only gmail allowed
            </span>
          )}
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