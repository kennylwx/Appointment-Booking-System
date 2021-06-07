import React, { useState } from 'react';
import '../styles/app.scss';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import Container from '../components/Container';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [appointment, setAppointment] = useState('');

  const history = useHistory();
  const handler = (val) => {
    history.push({
      pathname: '/receipt',
      state: {
        app: val,
      },
    });
  };
  const updateAppointment = (ap) => {
    setAppointment(ap);
    handler(ap);
  };

  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Container updateAppointment={updateAppointment} />
      </div>
    </div>
  );
}

export default App;
