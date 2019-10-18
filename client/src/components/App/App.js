import React from 'react';
import './App.css';

import Provider from '../Provider';

function App() {
  return (
    <div className="App">
      application page
    </div>
  );
}

export default () => <Provider><App /></Provider>;
