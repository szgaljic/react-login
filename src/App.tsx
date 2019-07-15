import * as React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import {PrivateRoute} from './components/PrivateRoute';
import {HomePage} from './home-page/HomePage';
import {LoginPage} from './login-page/LoginPage';
import {RegistrationPage} from './registration-page/RegistrationPage';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <Router>
        <div>
          <PrivateRoute exact path="/" component={HomePage}/>
          <Route path="/register" component={RegistrationPage} />
          <Route path="/login" component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export default App;
