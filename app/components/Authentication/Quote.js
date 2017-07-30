import styled from 'styled-components';

const Quote = styled.div`
	display: inline-block;
	width: 45%;
	position: absolute;
	top: 15%;
	left: 35%;

	.quote-text {
		font-size: 1.2em;
		text-align: center;
		opacity: 0.7;
	}

	.quote-by {
		text-align: center;
		font-style: italic;
		opacity: 0.5;
	}

`;

export default Quote;