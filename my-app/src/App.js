import React from 'react';

function App() {
  const isAuth = false;

  return <div>
    {!isAuth && <p>вы авторизованы</p>}
  </div>;
}

export default App;
