import React, {useState} from 'react';
import './App.css';

import {PokeList, PokeDetail} from './view/pokemon'

function App() {

  const [isTypes, setTypes] = useState<boolean>(true)
  const onToggle = () => setTypes(!isTypes)

  return (
    <div className="App">
      <div className="App-header">
        <button onClick={onToggle}>
          Toggle Types
        </button>
      </div>
      <PokeList>
        {props =>  <PokeDetail isTypes={isTypes} {...props}/> }
      </PokeList> 
    </div>
  );
}

export default App;
