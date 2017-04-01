/*
 *
 * Dashboard
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { createStructuredSelector } from 'reselect';
import makeSelectDashboard from './selectors';
import makeSelectAuthentication from 'containers/Authentication/selectors';

import DashboardInner from 'components/DashboardInner';
import { fetchDashboard } from './actions';
import { validateToken } from 'containers/Authentication/actions';

export class Dashboard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { authenticated, token } = this.props.Authentication;

    if (authenticated) {
      this.props.fetchDashboard();
    } else {
      if (token) {
        this.props.validateToken(token);
      } else {
        browserHistory.push('/');
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { authenticated } = this.props.Authentication;
    const { fetchedData } = this.props.Dashboard;
    
    if (authenticated && !fetchedData) {
      this.props.fetchDashboard();
    }
  }

  render() {
    return (
      <div>
        <DashboardInner>
          { this.props.children }
        </DashboardInner>
      </div>
    );
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Dashboard: makeSelectDashboard(),
  Authentication: makeSelectAuthentication()
});

function mapDispatchToProps(dispatch) {
  return {
    fetchDashboard: () => dispatch(fetchDashboard()),
    validateToken: (token) => dispatch(validateToken(token)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
