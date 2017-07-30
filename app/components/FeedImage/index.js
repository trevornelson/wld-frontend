/**
*
* FeedImage
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import ListItem from 'components/ListCard/ListItem';

const Wrapper = styled.div`
`;

function FeedImage({ url, caption, id, onEdit, onDelete }) {
  return (
    <Wrapper>
      <img
        src={ url }
      />
      <ListItem
        isNew={ false }
        content={ caption }
        itemId={ id }
        placeholderText='Add a caption...'
        onEditItem={ onEdit }
        onDeleteItem={ onDelete }
      />
    </Wrapper>
  );
}

FeedImage.propTypes = {
  url: PropTypes.string.isRequired,
  caption: PropTypes.string,
  id: PropTypes.number,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func
};

export default FeedImage;
