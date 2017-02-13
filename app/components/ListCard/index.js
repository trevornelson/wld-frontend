/**
*
* ListCard
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { bind, partial, get } from 'lodash';

import ListItem from './ListItem';

class ListCard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
  }

  handleEditClick() {
    this.setState({
      isEditing: true
    });
    this.categoryInput.focus();
  }

  handleSaveClick() {
    const { index, onEditList } = this.props;

    this.setState({
      isEditing: false
    });
    onEditList(index, this.categoryInput.value);
  }

  renderEditableTitle() {
    const { title, index, onDeleteList } = this.props;
    const { isEditing } = this.state;

    return (
      <div>
        <div className="list-utils">
          { isEditing ? <button onClick={ bind(this.handleSaveClick, this) }><span className="fa fa-floppy-o" /></button> : <button onClick={ bind(this.handleEditClick, this) }><span className="fa fa-pencil" /></button> }
          <button onClick={ partial(onDeleteList, index) }><span className="fa fa-trash-o" /></button>
        </div>
        <input
          type="text"
          className="list-card-title"
          defaultValue={ title }
          onClick={ bind(this.handleEditClick, this) }
          ref={ (categoryInput) => { this.categoryInput = categoryInput; } }
        />
      </div>
    );
  }

  render() {
  	const {
      isListEditable,
      canAddItems,
  		title,
  		index,
  		items,
      itemPlaceholder,
  		onAddItem,
  		onEditItem,
  		onDeleteItem
  	} = this.props;

    return (
      <div>
        { isListEditable ? this.renderEditableTitle() : <div className="list-card-title">{ title }</div> }
        <div className="items">
          {
            items.map((item, i) => {
              return (
                <ListItem
                  isNew={ false }
                  categoryIndex={ index }
                  text={ get(item, 'text') }
                  tip={ get(item, 'parentGoal') }
                  index={ i }
                  placeholderText={ itemPlaceholder }
                  key={ get(item, 'text') + i }
                  onEditItem={ onEditItem }
                  onDeleteItem={ onDeleteItem }
                />
              );
            })
          }
          { canAddItems ? <ListItem
            isNew={ true }
            placeholderText={ itemPlaceholder }
            categoryIndex={ index }
            onAddItem={ onAddItem }
          /> : null }
        </div>
      </div>
    );
  }
}

ListCard.propTypes = {
  isListEditable: PropTypes.bool,
  canAddItems: PropTypes.bool,
  title: PropTypes.string,
  index: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  items: PropTypes.array,
  itemPlaceholder: PropTypes.string,
  onEditList: PropTypes.func,
  onDeleteList: PropTypes.func,
  onAddItem: PropTypes.func,
  onEditItem: PropTypes.func,
  onDeleteItem: PropTypes.func
};

export default ListCard;
