/**
*
* Sidebar
*
*/

import React from 'react';
import { Link } from 'react-router';

import { stack as Menu } from 'react-burger-menu';
import Logo from 'components/Logo';
import Container from './Container';

class Sidebar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  onStateChange = (menuState) => {
    this.setState({ isOpen: menuState.isOpen });
  }

  onLinkClick = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen } = this.state;

    return (
      <Container>
        <Menu
          noOverlay
          pageWrapId="page-wrap"
          outerContainerId="outer-container"
          isOpen={ isOpen }
          onStateChange={ this.onStateChange }
        >
          <Link to={ `/dashboard/core` } onClick={ this.onLinkClick } className="menu-item" activeClassName="active">Core Purpose & Values</Link>
          <Link to={ `/dashboard/relationships` } onClick={ this.onLinkClick } className="menu-item" activeClassName="active">Key Relationships</Link>
          <Link to={ `/dashboard/long-term` } onClick={ this.onLinkClick } className="menu-item" activeClassName="active">Long Term Goals</Link>
          <Link to={ `/dashboard/short-term` } onClick={ this.onLinkClick } className="menu-item" activeClassName="active">Short Term Goals</Link>
          <Link to={ `/dashboard/habits` } onClick={ this.onLinkClick } className="menu-item" activeClassName="active">Habits</Link>
          <Link to={ `/dashboard/priorities` } onClick={ this.onLinkClick } className="menu-item" activeClassName="active">Priorities</Link>
          <Link to={ `/dashboard/affirmations` } onClick={ this.onLinkClick } className="menu-item" activeClassName="active">Affirmations</Link>
        </Menu>
      </Container>
    );
  }
}

Sidebar.propTypes = {

};

export default Sidebar;
