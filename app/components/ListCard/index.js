/**
*
* ListCard
*
*/

import React from 'react';
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
          { isEditing ? <button onClick={ bind(this.handleSaveClick, this) }>Save</button> : <button onClick={ bind(this.handleEditClick, this) }>Edit</button> }
          <button onClick={ partial(onDeleteList, index) }>X</button>
        </div>
        <input
          type="text"
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
          <ListItem
            isNew={ true }
            placeholderText={ itemPlaceholder }
            categoryIndex={ index }
            onAddItem={ onAddItem }
          />
        </div>
      </div>
    );
  }
}

ListCard.propTypes = {

};

export default ListCard;
