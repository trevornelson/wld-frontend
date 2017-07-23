import styled from 'styled-components';
import { colors } from 'utils/styleHelpers';

const CategoryWrapper = styled.div`
	display: inline-block;
	padding: 10px;
	margin-bottom: 25px;
  background-color: ${ colors.background.light };
  border: 1px solid ${ colors.darkBlue };
  border-radius: 4px;
  width: 100%;
`;

export default CategoryWrapper;
