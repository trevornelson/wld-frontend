/**
*
* Dashboard
*
*/

import React from 'react';
// import styled from 'styled-components';

import Sidebar from 'components/Sidebar';
import MainContent from 'components/Dashboard/MainContent';

class Dashboard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      	<Sidebar />
      	<MainContent>
      		{ this.props.children }
      	</MainContent>
      </div>
    );
  }
}

Dashboard.propTypes = {

};

export default Dashboard;
