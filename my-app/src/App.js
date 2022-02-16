import React from 'react';

function App() {

  function showMess(mess) {
    alert(mess);
  }

  return <div>
    <button onClick={() => showMess(1)}>act1</button>
    <button onClick={() => showMess(2)}>act2</button>
    <button onClick={() => showMess(3)}>act3</button>
  </div>;
}

export default App;
