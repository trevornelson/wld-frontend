import styled from 'styled-components';

const ListCardWrapper = styled.div`
	display: inline-block;
	min-height: 400px;
	width: 200px;
	padding: 0px 10px;
	background: white;
	border: 1px solid red;
	border-radius: 4px;

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
