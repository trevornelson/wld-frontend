/**
*
* SimpleTextField
*
*/

import React, { PropTypes } from 'react';
import { get, bind } from 'lodash';
import TextInput from 'components/TextInput';
// import styled from 'styled-components';


class SimpleTextField extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.handleAdd = this.handleAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAdd() {
    const { onAdd } = this.props;

    onAdd(this.itemInput.value);
  }

  handleDelete() {
    const { item: { id }, onDelete } = this.props;

    onDelete(id);
    this.itemInput.value = '';
  }

  render() {
    const {
      item,
      placeholder,
      onAdd,
      onDelete
    } = this.props;
    const id = get(item, 'id');
    const content = get(item, 'content');

    return (
      <TextInput>
        <input
          type="text"
          defaultValue={ content }
          placeholder={ placeholder }
          ref={ (itemInput) => { this.itemInput = itemInput; } }
        />
        <button onClick={ item ? this.handleDelete : this.handleAdd }>
          <span className={ item ? "fa fa-trash-o" : "fa fa-plus" } />
        </button>
      </TextInput>
    );
  }
}

SimpleTextField.propTypes = {
  item: PropTypes.object,
  placeholder: PropTypes.string,
  onAdd: PropTypes.func,
  onDelete: PropTypes.func
};

export default SimpleTextField;
