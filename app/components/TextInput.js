import styled from 'styled-components';

const TextInput = styled.div`
	width: 100%;
	font-size: 12px;
	color: #494949;

	input {
		border-bottom: 1px solid black;
		width: 80%;
	}

	input:focus {
		outline: none;
		border-bottom: 1px solid #FF0000;
	}

	.item-utils {
		display: inline-block;
		position: relative;
		z-index: 1;
		right: -25px;
		top: 1px;
		cursor: pointer;
		width: 0px;
	}
`;

export default TextInput;