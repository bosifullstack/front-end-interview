import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './assets/sass/global.scss';

import { PatientReferal } from './views/PatientReferal';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <header className="App-header">
      </header>
      <PatientReferal />
    </div>
  );
}

export default App;
