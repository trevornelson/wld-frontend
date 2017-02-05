/**
*
* PurposeHelp
*
*/

import React from 'react';
import styled from 'styled-components';

import MenuList from 'components/Sidebar/MenuList';
import MenuListItem from 'components/Sidebar/MenuListItem';

const Wrapper = styled.div`
`;


class PurposeHelp extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
    	<Wrapper>
    		<p>Your core purpose is the overarching reason for your existence. Think of it as your "why" or the thing that drives you (subconsciously or consciously) each day in your personal and professional life. It should be a single sentence that is easy to remember and worded in the form of an action. It can take a few years to get this right and you may want to wait to create one until you feel you have really settled in on your core values. When you have your core values right, it's often the glue that brings them together.</p>
    		<h4>Resources</h4>
    		<MenuList>
    			<MenuListItem>
    				<a href="http://www.corepurposecorevalues.com/learn-more-inspire-other-people/an-online-course/defining-a-clear-core-purpose-or-mission/">Defining a Clear Core Purpose or Mission</a>
    			</MenuListItem>
    			<MenuListItem>
    				<a href="http://brainzooming.com/personal-branding-and-career-success-with-a-core-purpose-statement/14845/">Personal Branding and Career Success with a Core Purpose Statement</a>
    			</MenuListItem>
    		</MenuList>
    	</Wrapper>
    );
  }
}

PurposeHelp.propTypes = {

};

export default PurposeHelp;
