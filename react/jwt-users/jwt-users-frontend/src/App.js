import React, { useState } from 'react';
import ViewTodos from './ViewTodos';
import Login from './Login';

const App = () => {
  const [userToken, setUserToken] = useState(null);

  return (
    <div>
      <Login onLogin={(jwt) => setUserToken(jwt)} />
      {userToken && <ViewTodos userToken={userToken} />}
    </div>
  );
};

export default App;
