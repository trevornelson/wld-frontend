/**
*
* ListItem
*
*/

import React from 'react';
import styled from 'styled-components';
import { bind, partial } from 'lodash';

import TextInput from 'components/TextInput';

const Wrapper = styled.div`
  display: block;

  input {
    width: 80%;
    font-size: 12px;
  }

  .completed {
    text-decoration: line-through;
  }

  .item-utils button {
    font-size: 12px;
  }
`;


class ListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      isEditing: props.isNew
    };
  }

  handleEdit(e, isEditing) {
    this.setState({
      isEditing: isEditing
    });
  }

  handleSave() {
    const { isNew, categoryIndex, itemId } = this.props;

    this.setState({
      isEditing: false
    });

    if (isNew) {
      this.props.onAddItem(categoryIndex, this.itemInput.value);
      this.itemInput.value = '';
    } else {
      this.props.onEditItem(categoryIndex, itemId, this.itemInput.value);
    }
  }

  handleDelete() {
    const { categoryIndex, itemId, onDeleteItem } = this.props;

    onDeleteItem(categoryIndex, itemId);
  }

  handleToggleComplete() {
    const { itemId, parentId, completed, categoryIndex, onCompleteItem } = this.props;

    const toggleTo = completed !== true;

    onCompleteItem(itemId, toggleTo, parentId);
  }

  renderPreInputIcon() {
    const { isNew, completeable, completed } = this.props;
    const { isEditing } = this.state;

    if(isEditing) {
      return (
        <button onClick={ bind(this.handleSave, this) }>
          <span className={ isNew ? "fa fa-plus" : "fa fa-floppy-o" } />
        </button>
      );
    } else {
      return !isNew && completeable ? (
        <button onClick={ bind(this.handleToggleComplete, this) }>
          <span className={ completed ? "fa fa-repeat" : "fa fa-check" } />
        </button>
      ) : null;
    }
  }

  renderPostInputIcon() {
    const { isNew } = this.props;
    const { isEditing } = this.state;

    return isEditing && !isNew ? (
      <div>
        <button onClick={ bind(this.handleDelete, this) }><span className="fa fa-trash-o" /></button>
      </div>
    ) : null;
  }

  render() {
    const { completeable, content, completed, tip, isNew, placeholderText } = this.props;
    const { isEditing } = this.state;

    return (
      <Wrapper>
        <TextInput>
          { this.renderPreInputIcon() }
          <input
            type="text"
            className={ completeable && completed ? 'completed' : '' }
            defaultValue={ content }
            placeholder={ placeholderText }
            ref={ (itemInput) => { this.itemInput = itemInput; } }
            onFocus={ bind(this.handleEdit, this, true) }
            onBlur={ bind(this.handleEdit, this, false) }
          />
          <div className="item-utils">
            { this.renderPostInputIcon() }
          </div>
        </TextInput>
      </Wrapper>
    );
  }
}

ListItem.propTypes = {

};

export default ListItem;
