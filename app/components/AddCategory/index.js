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
  width: 75%;
  margin: 10px auto;
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
        <TextInput>
        	<input
        		placeholder="Add a category"
        		ref={ (input) => { this.categoryInput = input; } }
        	/>
          <div className="item-utils">
            <button onClick={ bind(this.handleAddClick, this) }><span className="fa fa-plus" /></button>
          </div>
        </TextInput>
      </Wrapper>
    );
  }
}

AddCategory.propTypes = {
	onAddCategory: PropTypes.func
};

export default AddCategory;
