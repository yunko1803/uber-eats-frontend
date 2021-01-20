import React from 'react';
import { isLoggedInVar } from '../apollo';

export const LoggedInRouter = () =>  {
  const onClick = () => {
    isLoggedInVar(false);
  }
  return (
    <div>
      <h1>logged in</h1>
      <button onClick={onClick}>Click to log out</button>
    </div>
  );
}
