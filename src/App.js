import React from 'react';
import CapwizTheVirtual from './CapwizTheVirtual'
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="App-page">
        <h1 className="serif">Hello maker of <span className='space'>magic!</span></h1>
        <CapwizTheVirtual />
        <h2 className='serif'>I'm Capwiz <span className="space">the Virtual...</span></h2>
        <h3 className='serif'>
          I'm a web wizard, and I exist to help crafters of digital realms formulate technopotions.
          I'm Merlin, you & you're team are Arthur & the Knights of the Roundtable.
          The project your building is the stone... the cap–stone; and your success is Excalibur.
          If your ready to begin tell me about your project...
        </h3>
        <h4 className='serif'>Describe your project...</h4>
      </div>
    </div>
  );
}

export default App;
