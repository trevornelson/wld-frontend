/*
 *
 * Dashboard
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectDashboard from './selectors';

import DashboardInner from 'components/DashboardInner';
import { fetchDashboard } from './actions';

export class Dashboard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.fetchDashboard();
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
});

function mapDispatchToProps(dispatch) {
  return {
    fetchDashboard: () => dispatch(fetchDashboard()),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
