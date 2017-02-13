import styled from 'styled-components';

const ListCardWrapper = styled.div`
	display: inline-block;
	min-height: 250px;
	width: 200px;
	padding: 0px 10px;
	margin: 5px 10px;
	background: white;
	border-radius: 4px;
	box-shadow: 2px 2px 2px #6C7A89;

	.list-card-title {
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
