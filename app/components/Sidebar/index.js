/**
*
* Sidebar
*
*/

import React from 'react';
import { Link } from 'react-router';

import Container from 'components/Sidebar/Container';
import MenuList from 'components/Sidebar/MenuList';
import MenuListItem from 'components/Sidebar/MenuListItem';


class Sidebar extends React.PureComponent {
  render() {
    return (
    	<Container>
    		<h2>Whole Life Dashboard</h2>
    		<MenuList>
	    		<MenuListItem>
	    			<Link to={ `/dashboard/core` }>Core Purpose & Values</Link>
	    		</MenuListItem>
	    		<MenuListItem>
	    			<Link to={ `/dashboard/relationships` }>Key Relationships</Link>
	    		</MenuListItem>
	    		<MenuListItem>
	    			<Link to={ `/dashboard/long-term` }>Long Term Goals</Link>
	    		</MenuListItem>
	    		<MenuListItem>
	    			<Link to={ `/dashboard/short-term` }>Short Term Goals</Link>
	    		</MenuListItem>
	    		<MenuListItem>
	    			<Link to={ `/dashboard/priorities` }>Priorities</Link>
	    		</MenuListItem>
	    		<MenuListItem>
	    			<Link to={ `/dashboard/affirmations` }>Affirmations</Link>
    			</MenuListItem>
    		</MenuList>
    	</Container>
    );
  }
}

Sidebar.propTypes = {

};

export default Sidebar;
