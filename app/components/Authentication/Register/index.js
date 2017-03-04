/**
*
* Register
*
*/

import React from 'react';
import { bind, partial } from 'lodash';
// import styled from 'styled-components';


class Register extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  handleRegister() {
    const data = {
      first_name: this.firstNameInput.value,
      last_name: this.lastNameInput.value,
      email: this.emailInput.value,
      password: this.passwordInput.value,
      password_confirm: this.confirmInput.value
    };
    console.log(data);

    this.props.onRegister(data);
  }

  render() {
  	const { onToggle } = this.props;
  	
    return (
      <div>
        <button className="toggle" onClick={ partial(onToggle, 'login') }>Login</button>
        <div className="input-row">
          <label>Name</label>
          <div className="half-input">
            <input
              type="text"
              placeholder="first"
              className="half-input"
              ref={ (firstNameInput) => { this.firstNameInput = firstNameInput; } }
            />
            <input
              type="text"
              placeholder="last"
              className="half-input"
              ref={ (lastNameInput) => { this.lastNameInput = lastNameInput; } }
            />
          </div>
        </div>
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
        <div className="input-row">
          <label>Confirm</label>
          <input
            type="password"
            ref={ (confirmInput) => { this.confirmInput = confirmInput; } }
          />
        </div>
        <button className="register-btn" onClick={ bind(this.handleRegister, this) }>Register</button>
      </div>
    );
  }
}

Register.propTypes = {

};

export default Register;
