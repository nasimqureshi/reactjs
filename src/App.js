import React from 'react';
import './App.css';
import Classprops from './Classprops';
import Functionprops from './Functionprop';

function App() {
  return (
    <div className="App">
     <Classprops name="Learner-1 " place="PlaceX" />
     <p>Child Component</p>
     <Classprops name="Learner-2 " place="PlaceY" />
     <button>Click Me</button>
     <Classprops name="Learner-3 " place="PlaceZ" />
     <Functionprops name="Learner 4" place="PlaceA" />
    </div>
  );
}

export default App;
