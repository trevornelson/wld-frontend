/**
*
* ListItem
*
*/

import React from 'react';
import styled from 'styled-components';
import { bind, partial } from 'lodash';
import ToolTip from 'rc-tooltip';

const Wrapper = styled.div`
  display: inline-block;

  input {
    width: 80%;
    font-size: 12px;
  }

  .item-utils {
    display: inline-block;
    width: 20%;
    font-size: 8px;
  }

  .item-utils button {
    float: right;
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
    const { isNew, categoryIndex, index } = this.props;

    this.setState({
      isEditing: false
    });

    if (isNew) {
      this.props.onAddItem(categoryIndex, this.itemInput.value);
      this.itemInput.value = '';
    } else {
      this.props.onEditItem(categoryIndex, index, this.itemInput.value);
    }
  }

  handleDelete() {
    const { categoryIndex, index, onDeleteItem } = this.props;

    onDeleteItem(categoryIndex, index);
  }

  render() {
    const { text, tip, isNew, placeholderText } = this.props;
    const { isEditing } = this.state;
    const showToolTip = !isEditing && tip;

    return (
      <Wrapper>
        <ToolTip
          placement="bottom"
          trigger={ showToolTip ? ['hover'] : [] }
          overlay={ <span>Testing!</span> }
        >
          <input
            type="text"
            defaultValue={ text }
            placeholder={ placeholderText }
            ref={ (itemInput) => { this.itemInput = itemInput; } }
            onFocus={ bind(this.handleEdit, this, true) }
            onBlur={ bind(this.handleEdit, this, false) }
          />
        </ToolTip>
        <div className="item-utils">
          { isEditing ? <div>
            { !isNew ? <button onClick={ bind(this.handleDelete, this) }>X</button> : null }
            <button onClick={ bind(this.handleSave, this) }>Save</button>
          </div> : null }
        </div>
      </Wrapper>
    );
  }
}

ListItem.propTypes = {

};

export default ListItem;
