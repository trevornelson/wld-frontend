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
        <h3>Core Purpose</h3>
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

        <h3>Core Values</h3>
    		<p>Your core values are who you are and who you have always been across all aspects of your life. They consciously and unconsciously drive your decisions. Knowing them and reviewing them each day will help you make decisions that are better aligned with what is most important to you and feel "right".</p>
    		<h4>How to Define Your Core Values</h4>
    		<p>The goal is to identify 3 core values that you feel best represent who you are and serve your core purpose. These should not be aspirational. Instead, they should reflect who you are and have always been. They can be a single word, however, it might be better to use a key word and then expand it into a state or action (e.g. "family" might become "family-oriented"). It can take several years to get these right, so this exercise is about starting with something, reviewing them each week and making tweaks until they feel right.</p>
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
