import React, { Component } from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

class RegistrationRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleRegistrationSuccess = () => {
    const { history } = this.props;
    history.push('/dashboard');
  };

  render() {
    return (
      <section>
        <h2>Sign up</h2>
        <p>
          Store your special recipes on Sweet Patisserie where the love lasts
          forever!
        </p>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </section>
    );
  }
}

export default RegistrationRoute;
