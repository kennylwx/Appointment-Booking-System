import React from 'react';
import '../styles/app.scss';
import Header from '../components/Header';
import Container from '../components/Container';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Container />
      </div>
    </div>
  );
}

export default App;
