import styled from '@emotion/styled';
import { mediaQueries } from '../../utils/media-queries';
const HeaderStyled = styled.header`
  width: 320px;
	margin: 0 auto;
	padding: 0 20px;

	@media (min-width: ${mediaQueries.tablet}) {
		width: 768px;
	}
	@media (min-width: ${mediaQueries.desktop}) {
		width: 1260px;
	}
`;

export {HeaderStyled};