import React, {useState} from 'react';
import './app.css';

import {PokeList, PokeDetail} from './view/pokemon'

function App() {

  const [isTypes, setTypes] = useState<boolean>(true)
  const onToggle = () => setTypes(!isTypes)
  console.log(isTypes);
  

  return (
    <div className="app">
      <div className="app-header">
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
