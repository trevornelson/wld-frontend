/**
*
* Login
*
*/

import React from 'react';
import { bind, partial } from 'lodash';
// import styled from 'styled-components';


class Login extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  handleLogin() {
  	const email = this.emailInput.value;
  	const password = this.passwordInput.value;

  	this.props.onLogin(email, password);
  }

  render() {
  	const { onToggle } = this.props;

    return (
      <div>
      	<button className="toggle" onClick={ partial(onToggle, 'register') }>Create Account</button>
      	<div className="input-row">
	      	<label>Email</label>
	        <input
	          type="text"
	          ref={ (emailInput) => { this.emailInput = emailInput; } }
	        />
	      </div>
	      <div className="input-row">
	        <label>Password</label>
	        <input
	          type="password"
	          ref={ (passwordInput) => { this.passwordInput = passwordInput; } }
	        />
	      </div>
	      <button className="login-btn" onClick={ bind(this.handleLogin, this) }>Login</button>
      </div>
    );
  }
}

Login.propTypes = {

};

export default Login;
