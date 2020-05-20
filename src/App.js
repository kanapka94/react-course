import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person'

function App() {
  const [people, setPeople] = useState([
    { name: 'Adam', age: Math.floor(Math.random() * 80) },
    { name: 'Ola', age: Math.floor(Math.random() * 25) }
  ])

  return (
    <div className="App">
      <h1>Hi!</h1>
      <button>Switch Name</button>
      <Person name={ people[0].name } age={ people[0].age }>
        What I can do here?
      </Person>
    </div>
  );
}

export default App;
