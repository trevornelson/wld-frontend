import { injectGlobal } from 'styled-components';
import { colors } from 'utils/styleHelpers';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Noto Sans', sans-serif;
    background-color: ${ colors.background.light };
  }

  body.fontLoaded {
    font-family: 'Noto Sans', sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Oswald', sans-serif;
    line-height: 1.5em;
  }
`;
