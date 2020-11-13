import React, {useState} from 'react';
import Pokemon from './view/pokemon'
import Header from './view/header'
import './app.css';

function App() {
  const [isTypes, setTypes] = useState<boolean>(true)

  return (
    <div className="app">
      <Header/>
      <Pokemon/>
    </div>
  );
}

export default App;
