import styled from 'styled-components';

const ListCardWrapper = styled.div`
	display: inline-block;
	height: 200px;
	width: 200px;
	margin: 10px;
	padding: 0px 10px;
	background: white;
	border: 1px solid red;
	border-radius: 4px;

	h3 {
		display: inline-block;
		width: 65%;
		font-size: 16px;
		font-weight: bold;
		font-color: red;
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
