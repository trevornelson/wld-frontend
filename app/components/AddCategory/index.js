/**
*
* AddCategory
*
*/

import React, { PropTypes } from 'react';
import { bind } from 'lodash';
import styled from 'styled-components';

import InputLabel from 'components/InputLabel';
import TextInput from 'components/TextInput';

const Wrapper = styled.div`
`;


class AddCategory extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  handleAddClick() {
  	const categoryName = this.categoryInput.value;
  	this.categoryInput.value = '';
  	this.props.onAddCategory(categoryName);
  }

  render() {
    return (
      <Wrapper>
      	<input
      		placeholder="Add a category"
      		ref={ (input) => { this.categoryInput = input; } }
      	/>
      	<button onClick={ bind(this.handleAddClick, this) }>Add</button>
      </Wrapper>
    );
  }
}

AddCategory.propTypes = {
	onAddCategory: PropTypes.func
};

export default AddCategory;
