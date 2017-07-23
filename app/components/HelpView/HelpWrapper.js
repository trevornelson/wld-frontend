import styled from 'styled-components';
import { colors } from 'utils/styleHelpers';

const HelpWrapper = styled.div`
  display: inline-block;
  width: 40%;

  .bm-burger-button {
    display: ${ props => props.isOpen ? 'none' : 'inline-block' };
    position: relative;
    width: 40%;
    right: -15px;
    top: 36px;
    color: ${ colors.text.subheader };
    font-size: 1.5em;
    font-weight: bold;
    font-family: 'Oswald', sans-serif;

    i {
      display: inline;
      margin: 10px;
      color: ${ colors.text.subheader };
      font-size: 25px;
    }
  }

  .bm-burger-bars {
    background: ${ colors.text.subheader };
  }

  .bm-cross-button {
    display: inline-block;
    width: initial !important;
    height: initial !important;
    left: 8px;
    color: ${ colors.text.subheader };
    font-size: 1.5em;
    font-weight: bold;
    font-family: 'Oswald', sans-serif;

    i {
      display: inline;
      margin: 10px;
      color: ${ colors.text.subheader };
      font-size: 25px;
    }
  }

  .bm-cross {
    background: ${ colors.text.subheader };
  }

  .bm-menu {
    background: ${ colors.background.light };
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  .bm-menu-wrap {
    position: absolute !important;
  }

  .bm-morph-shape {
    fill: #373a47;
  }

  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;

export default HelpWrapper;
