/**
*
* Logo
*
*/

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class Logo extends React.PureComponent {
  render() {
  	const { size } = this.props;
  	const linkStyles = {
  		textDecoration: 'none',
  		cursor: 'pointer',
  		display: 'inline-block',
  		marginLeft: '60px'
  	};
  	const innerStyles = {
  		width: size,
  		height: size,
  		fontSize: size,
  		color: 'red'
  	};

    return (
    	<Link to={ `/dashboard` } style={ linkStyles }>
    		<div style={ innerStyles }>&gt;&gt;</div>
    	</Link>
    );
  }
}

Logo.propTypes = {
	size: PropTypes.string
};

export default Logo;
