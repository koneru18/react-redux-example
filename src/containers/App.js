import React from 'react';
import Routes from '../routes';
import Header from '../components/layout/Header';
 
/* Application level styling */
import 'bootstrap/dist/css/bootstrap.css';
import '../resources/styles/App.css';

const App = () => (
  <div className="app">
    <Header />
    <Routes />
  </div>
);

export default App;
