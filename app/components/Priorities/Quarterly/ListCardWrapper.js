import styled from 'styled-components';

const ListCardWrapper = styled.div`
	display: inline-block;
	height: 200px;
	width: 200px;
	margin: 10px;
	padding: 0px 10px;
	background: white;
	border-radius: 4px;
	box-shadow: 2px 2px 2px #6C7A89;

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
    border-bottom: none;
  }

  input:focused {
    border-bottom: 1px solid black;
  }
`;

export default ListCardWrapper;
