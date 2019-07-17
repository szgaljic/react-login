import * as React from 'react';


class HomePage extends React.Component {

  constructor(props: any) {
    super(props);

    this.state= {
      user: {}
    };
  }

  render() {
    // const { user } = this.state;
    return (
      <div className="col-md-6 col-md-offset-3">
        <p>You're logged in with React & Basic HTTP Authentication!!</p>
      </div>
    );
  }

}

export { HomePage };
