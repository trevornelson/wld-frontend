/**
*
* ListItem
*
*/

import React from 'react';
import styled from 'styled-components';
import { bind, partial } from 'lodash';
import ToolTip from 'rc-tooltip';

import TextInput from 'components/TextInput';

const Wrapper = styled.div`
  display: block;

  input {
    width: 80%;
    font-size: 12px;
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

  render() {
    const { content, tip, isNew, placeholderText } = this.props;
    const { isEditing } = this.state;
    const showToolTip = !isEditing && tip;

    return (
      <div>
        <ToolTip
          placement="bottom"
          trigger={ showToolTip ? ['hover'] : [] }
          overlay={ <span>Testing!</span> }
        >
          <TextInput>
            <input
              type="text"
              defaultValue={ content }
              placeholder={ placeholderText }
              ref={ (itemInput) => { this.itemInput = itemInput; } }
              onFocus={ bind(this.handleEdit, this, true) }
              onBlur={ bind(this.handleEdit, this, false) }
            />
            <div className="item-utils">
              { isEditing ? <div>
                { !isNew ? <button onClick={ bind(this.handleDelete, this) }><span className="fa fa-trash-o" /></button> : null }
                <button onClick={ bind(this.handleSave, this) }>{ isNew ? <span className="fa fa-plus" /> : <span className="fa fa-floppy-o" /> }</button>
              </div> : null }
            </div>
          </TextInput>
        </ToolTip>
      </div>
    );
  }
}

ListItem.propTypes = {

};

export default ListItem;
