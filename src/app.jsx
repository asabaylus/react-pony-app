import React from 'react';
import Navigation from './components/Navigation';
import 'normalize.css';
import 'styles/index.scss';
import Pony from 'react-pony';

const App = () => (
  <div className='App'>
    <h1>ES6</h1>
    <Pony apiKey="xe8c740Lt4F7dDcsFCIw6HkpJzxmCFKJ" />
    {/*
    <Navigation/>
    <div>
      <h1>It Works!</h1>
      <p>This React project just works including <span className="redBg">module</span> local styles.</p>
      <p>Enjoy!</p>
    </div>
    */}
  </div>
);

export default App;
