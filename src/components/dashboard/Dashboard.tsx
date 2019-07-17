import * as React from 'react';
import {Link} from 'react-router-dom';


export class Dashboard extends React.Component {

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-warning bg-warning">
          <ul className="navbar-nav mr-auto float-right">
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link">Register</Link>
            </li>
          </ul>
      </nav>
    );
  }

}
