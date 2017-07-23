import styled from 'styled-components';
import { colors } from 'utils/styleHelpers';

const ListCardWrapper = styled.div`
	display: inline-block;
	width: 100%;
	margin: 10px;
	padding: 0px 10px;
	background: ${ colors.background.light };

	h3 {
		display: inline-block;
		width: 100%;
		font-size: 16px;
		font-weight: bold;
		font-color: red;
	}

	.list-utils {
		display: inline-block;
		position: relative;
		z-index: 1;
		right: -25px;
		top: 1px;
    float: right;
		font-size: 10px;
		cursor: pointer;
		width: 0px;
	}

  input {
    font-size: 18px;
    font-family: 'Oswald', sans-serif;
    border-bottom: none;
  }

  input:focused {
    border-bottom: 1px solid black;
  }
`;

export default ListCardWrapper;
