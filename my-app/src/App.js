import React from 'react';

function App() {

  const arr = ['a', 'b', 'c', 'd', 'e'];

  const result = arr.map(function(item, index) {
    return <li key={index}>{item}</li>;
  });

  return <div>
    <ul>{result}</ul>
  </div>;
}

export default App;
