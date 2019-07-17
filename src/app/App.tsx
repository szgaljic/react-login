import * as React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Dashboard} from '../components/dashboard/Dashboard';

import {PrivateRoute} from '../components/private-route/PrivateRoute';
import {HomePage} from '../components/home-page/HomePage';
import {LoginPage} from '../components/login-page/LoginPage';
import {RegistrationPage} from '../components/registration-page/RegistrationPage';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <Router>
        <div>
          <Route path="/" component={Dashboard}/>
          <PrivateRoute exact path="/home" component={HomePage}/>
          <Route path="/register" component={RegistrationPage} />
          <Route path="/login" component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export default App;
