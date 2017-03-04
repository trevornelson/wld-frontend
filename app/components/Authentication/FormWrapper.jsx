import styled from 'styled-components';

const FormWrapper = styled.div`
	display: inline-block;
	width: 45%;
	position: absolute;
	top: 50%;
	left: 35%;
	padding: 10px;
	color: rgba(238, 238, 238, 0.9);
	background: rgba(89, 171, 227, 0.3);
	border-radius: 3px;

	button.toggle {
		float: right;
	}

	.input-row {
		clear: both;
	}

	label {
		width: 25%;
		font-size: 1.5em;
	}

	input {
		width: 75%;
		float: right;
		border-bottom: 1px solid #EEEEEE;
		font-size: 1.5em;
	}

	.half-input {
		display: inline-block;
		width: 75%;
		float: right;
	}

	.half-input > input {
		width: 48%;
		margin-right: 2%
	}

	.half-input > input:nth-child(1) {
		float: left;
	}

	.half-input > input:nth-child(2) {
		float: right;
	}

	input:focus {
		outline: none;
	}

	.login-btn, .register-btn {
		float: right;
		margin-top: 20px;
		font-size: 1.7em;
		font-weight: 100;
		background: rgba(238, 238, 238, 1);
		border-radius: 3px;
		color: rgba(52, 73, 94, 1);
	}
`;

export default FormWrapper;