import { useReactiveVar } from '@apollo/client';
import React from 'react';
import { LoggedInRouter } from './routers/logged-in-router';
import { LoggedOutRouter } from './routers/logged-out-router';
import { isLoggedInVar } from './apollo';

function App() {
  // const { data: { isLoggedIn } } = useQuery(IS_LOGGED_IN);
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return isLoggedIn ? <LoggedInRouter /> : <LoggedOutRouter />;
}

export default App;
