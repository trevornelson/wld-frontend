import styled from 'styled-components';

const MenuListItem = styled.li`
	position: relative;
	display: block;
	margin-bottom: -1px;
	background-color: white;
	border: 1px solid black;

	&:first-child {
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;
	}

	&:last-child {
		margin-bottom: 0;
		border-bottom-left-radius: 3px;
		border-bottom-right-radius: 3px;
	}

	&:hover {
		background-color: #DADFE1;
	}

	a {
		display: block;
		width: 100%;
		height: 100%;
		padding: 10px 15px;
		text-decoration: none;
		color: black;
		cursor: pointer;
	}
`;

export default MenuListItem;