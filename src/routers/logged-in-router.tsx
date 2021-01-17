import React from 'react';
import { isLoggedInVar } from '../apollo';

export const LoggedInRouter = () =>  {
  const onClick = () => {
    isLoggedInVar(false);
  }
  console.log('hi');
  return (
    <div>
      <h1>logged in</h1>
      <button onClick={onClick}>Click to log out</button>
    </div>
  );
}
