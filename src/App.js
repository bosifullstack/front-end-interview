import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

import Header from './component/Header';
import PatientReferal from './views/PatientReferal';

export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <PatientReferal />
    </div>
  );
}
