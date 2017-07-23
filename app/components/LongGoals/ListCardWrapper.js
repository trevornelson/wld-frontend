import styled from 'styled-components';
import { colors } from 'utils/styleHelpers';

const ListCardWrapper = styled.div`
	display: inline-block;
	width: 80%;
	padding: 0px 10px;
	margin: 0px 5px;
	background: ${ colors.background.light };

	.list-card-title {
		display: inline-block;
		width: 100%;
		font-size: 14px;
		font-weight: bold;
	}

	.list-utils {
		display: inline-block;
		width: 30%;
    float: right;
		font-size: 10px;
	}

  input {
    border-bottom: none;
  }

  input:focused {
    border-bottom: 1px solid black;
  }
`;

export default ListCardWrapper;
