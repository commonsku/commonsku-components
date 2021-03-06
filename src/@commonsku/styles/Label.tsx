import styled from 'styled-components'
import { getThemeColor } from './Theme';
import { SharedStyles, SharedStyleTypes } from './SharedStyles';

const Label = styled.label<{error?: boolean} & SharedStyleTypes>`
  &&& {
    font-family: 'skufont-medium', sans-serif;
    color: ${props => props.error ? getThemeColor(props, 'special3') : getThemeColor(props, 'textlabel')};
    font-size: 1rem;
    font-weight: 400;
    width: 100%;
    ${SharedStyles}
  }
`;

export {Label};
