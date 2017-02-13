/**
*
* AddCategory
*
*/

import React, { PropTypes } from 'react';
import { bind } from 'lodash';

import InputLabel from 'components/InputLabel';
import TextInput from 'components/TextInput';


class AddCategory extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  handleAddClick() {
  	const categoryName = this.categoryInput.value;
  	this.categoryInput.value = '';
  	this.props.onAddCategory(categoryName);
  }

  render() {
    return (
      <div>
        <TextInput>
        	<input
        		placeholder="Add a category"
        		ref={ (input) => { this.categoryInput = input; } }
        	/>
          <div className="item-utils">
            <button onClick={ bind(this.handleAddClick, this) }><span className="fa fa-plus" /></button>
          </div>
        </TextInput>
      </div>
    );
  }
}

AddCategory.propTypes = {
	onAddCategory: PropTypes.func
};

export default AddCategory;
