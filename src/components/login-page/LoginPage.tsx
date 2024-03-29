import * as React from 'react';
import {Redirect} from 'react-router';
import {Credentials} from '../../models/classes/Credentials';
import {AuthenticationService} from '../../services/AuthenticationService';

class LoginPage extends React.Component<{}, {
  username: string,
  password: string,
  submitted: boolean,
  loading: boolean,
  error: string,
  success: boolean}> {

  constructor(props: any) {
    super(props);

    this.state = {
      username: '',
      password: '',
      submitted: false,
      loading: false,
      error: '',
      success: false,
    };

  }

  handleSubmit = (e: any) => {
    e.preventDefault();

    this.setState({submitted: true});
    const { username, password } = this.state;

    if (!(username && password)) {
      return;
    }

    return AuthenticationService.login(new Credentials(username, password)).then(_ => {
      this.setState({success: true})
    });
  };

  handleChange = (e: any) => {
    const { name, value } = e.target as {name: 'username' | 'password', value: string};
    // @ts-ignore
    this.setState({ [name]: value });
  };

  render() {
    const { username, password, submitted, loading, error, success } = this.state;
    if (success) {
      return <Redirect to='/home'/>
    }
    return (
      <div className="col-md-6 col-md-offset-3">
        <h2>Login</h2>
        <form name="form" onSubmit={this.handleSubmit}>
          <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
            <label htmlFor="username">Username</label>
            <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
            {submitted && !username &&
            <div className="help-block">Username is required</div>
            }
          </div>
          <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
            {submitted && !password &&
            <div className="help-block">Password is required</div>
            }
          </div>
          <div className="form-group">
            <button className="btn btn-primary" disabled={loading}>Submit</button>
          </div>
        </form>
      </div>
    );
  }

}

export {LoginPage}
