/**
*
* DashboardInner
*
*/

import React from 'react';
// import styled from 'styled-components';

import Sidebar from 'components/Sidebar';
import MainContent from 'components/DashboardInner/MainContent';

class DashboardInner extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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

DashboardInner.propTypes = {

};

export default DashboardInner;
