import * as React from 'react';
import { Link } from 'react-router-dom';
import {AuthenticationService} from '../services/AuthenticationService';


class HomePage extends React.Component {

  constructor(props: any) {
    super(props);

    this.state= {
      user: {}
    };
  }

  componentDidMount(): void {
    this.setState({

    })
  }

  render() {
    // const { user } = this.state;
    return (
      <div className="col-md-6 col-md-offset-3">
        <p>You're logged in with React & Basic HTTP Authentication!!</p>
        <p>
          <Link to="/login">Logout</Link>
        </p>
      </div>
    );
  }

}

export { HomePage };
