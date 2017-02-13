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
      marginTop: '20px',
  		marginLeft: '80px'
  	};
  	const innerStyles = {
  		width: size,
  		height: size,
      background: 'url(https://s3.amazonaws.com/whole-life-dashboard/images/logo_icon.png)',
      backgroundSize: 'cover'
  	};

    return (
    	<Link to={ `/dashboard` } style={ linkStyles }>
    		<div style={ innerStyles } />
    	</Link>
    );
  }
}

Logo.propTypes = {
	size: PropTypes.string
};

export default Logo;
