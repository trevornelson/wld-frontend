import styled from 'styled-components';
import { colors, media } from 'utils/styleHelpers';

const FormWrapper = styled.div`
	display: inline-block;
	width: 45%;
	float: left;
  background-color: ${ colors.background.light };

  ${ media.mobile`
    width: 100%;
  ` }
`;

export default FormWrapper;
