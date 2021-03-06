import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';
import './Header.css';

class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <div>
        <span className='username-style'>{this.context.user.name}</span>
        <nav>
          <Link onClick={this.handleLogoutClick} to='/'>
            Logout
          </Link>
        </nav>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <nav>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Sign Up</Link>
      </nav>
    );
  }

  render() {
    return (
      <header className='header-styling'>
        <h1>
          <Link to='/dashboard'>Sweet Patisserie</Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default Header;
