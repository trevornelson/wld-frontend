/*
 *
 * Authentication
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { browserHistory } from 'react-router';
import styled from 'styled-components';
import makeSelectAuthentication from './selectors';
import {
  toggleView,
  loginRequest,
  registerRequest,
  validateToken
} from './actions';

import Quote from 'components/Authentication/Quote';
import FormWrapper from 'components/Authentication/FormWrapper';
import Login from 'components/Authentication/Login';
import Register from 'components/Authentication/Register';

const Wrapper = styled.div`
  display: inline-block;
  height: 100vh;
  width: 100vw;
  background: url(https://s3.amazonaws.com/whole-life-dashboard/images/stock-photo-beautiful-colorful-sunset-over-st-mary-lake-and-wild-goose-island-in-glacier-national-park-296260760.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

export class Authentication extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    const { authenticated, token } = this.props.Authentication;
    if (authenticated) {
      browserHistory.push('/dashboard');
    } else if (token) {
      this.props.validateToken(token);
    }
  }

  render() {
    const {
      Authentication,
      onToggle,
      onLogin,
      onRegister
    } = this.props;
    const {
      view,
      authenticated,
      error
    } = Authentication;

    return (
      <Wrapper>
        <Quote>
          <div className="quote-text">Happiness is when what you think, what you say, and what you do are in harmony.</div>
          <div className="quote-by">Mahatma Gandhi</div>
        </Quote>
        <FormWrapper>
          <div>{ error }</div>
          { view === 'register' ? <Register onToggle={ onToggle } onRegister={ onRegister } /> : <Login onToggle={ onToggle } onLogin={ onLogin } /> }
        </FormWrapper>
      </Wrapper>
    );
  }
}

Authentication.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Authentication: makeSelectAuthentication(),
});

function mapDispatchToProps(dispatch) {
  return {
    onToggle: (view) => dispatch(toggleView(view)),
    onLogin: (email, password) => dispatch(loginRequest(email, password)),
    onRegister: (data) => dispatch(registerRequest(data)),
    validateToken: (token) => dispatch(validateToken(token)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
