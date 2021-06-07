import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './views/App';
import Receipt from './views/Receipt';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/receipt" component={Receipt} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
