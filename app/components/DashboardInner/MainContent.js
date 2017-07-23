import styled from 'styled-components';
import { media } from 'utils/styleHelpers';

const MainContent = styled.div`
	display: inline-block;
  margin: 55px;
  width: 100%;
	height: 100vh;
	position: absolute;
	padding: 0px 30px;

  ${ media.mobile`
    margin: 100px 0px 20px 0px;
  ` }

`;

export default MainContent;
