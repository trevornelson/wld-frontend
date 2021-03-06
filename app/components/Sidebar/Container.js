import styled from 'styled-components';
import { colors } from 'utils/styleHelpers';

const Container = styled.div`
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 36px;
    top: 36px;
  }

  .bm-burger-bars {
    background: #373a47;
  }

  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  .bm-cross {
    background: #bdc3c7;
  }

  .bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
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

  a.menu-item:link, a.menu-item:visited, a.menu-item:hover, a.menu-item:active {
    text-decoration: none;
    color: ${ colors.background.light };
  }

  a.menu-item.active {
    color: ${ colors.cta };
  }
`;

export default Container;
