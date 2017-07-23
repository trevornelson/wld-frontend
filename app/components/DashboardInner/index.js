/**
*
* DashboardInner
*
*/

import React from 'react';
import styled from 'styled-components';

import Sidebar from 'components/Sidebar';
import MainContent from 'components/DashboardInner/MainContent';

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
`;

class DashboardInner extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper id="outer-container">
        <Sidebar />
      	<MainContent id="page-wrap">
      		{ this.props.children }
      	</MainContent>
      </Wrapper>
    );
  }
}

DashboardInner.propTypes = {

};

export default DashboardInner;
