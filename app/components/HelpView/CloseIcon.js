import React from 'react';

export class CloseIcon extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <span>
        <span>Close</span>
        <i className="fa fa-arrow-right" />
      </span>
    );
  }
}

export default CloseIcon;
