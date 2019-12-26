import React from 'react';
import Login from './Login'
import Documents from './Documents'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/documents" component={Documents} />
      </Switch>
    </Router>
  );
}

export default App;
