import React, { Component } from 'react';
import { Input, Label } from '../Form/Form';
import AuthApiService from '../../services/auth-api-service';
import UserContext from '../../contexts/UserContext';
import Button from '../Button/Button';
class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => {},
  };

  static contextType = UserContext;

  state = { error: null };

  firstInput = React.createRef();

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = event.target;

    this.setState({ error: null });

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then((data) => {
        return this.context.processLogin(data.authToken);
      })
      .then(this.props.onLoginSuccess)
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  componentDidMount() {
    this.firstInput.current.focus();
  }

  render() {
    const { error } = this.state;
    return (
      <form className='LoginForm' onSubmit={this.handleSubmit}>
        <div role='alert'>{error && <p>{error}</p>}</div>
        <div>
          <Label htmlFor='login-username-input'>Username</Label>
          <Input
            ref={this.firstInput}
            id='login-username-input'
            name='username'
            required
          />
        </div>
        <div>
          <Label htmlFor='login-password-input'>Password</Label>
          <Input
            id='login-password-input'
            name='password'
            type='password'
            required
          />
        </div>
        <Button type='submit'>Login</Button>
      </form>
    );
  }
}

export default LoginForm;
