import styled from 'styled-components';
import { colors } from 'utils/styleHelpers';

const TextInput = styled.div`
	width: 100%;
	font-size: 18px;
	color: #494949;
  font-family: 'Oswald', sans-serif;
  background-color: ${ colors.background.light };

	input {
		border-bottom: 1px solid black;
		width: 80%;
	}

	input:focus {
		outline: none;
		border-bottom: 1px solid ${ colors.cta };
	}

	.item-utils {
		display: inline-block;
		position: relative;
		z-index: 1;
		right: 25px;
		top: 1px;
		cursor: pointer;
		width: 0px;
	}
`;

export default TextInput;
