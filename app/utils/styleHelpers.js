import { css } from 'styled-components';

export const colors = {
  background: {
    dark: '#ABB7B7',
    medium: '#DADFE1',
    light: '#FAFAFA'
  },
  text: {
    header: '#8A8A8A',
    subheader: '#494947',
    body: '#000000'
  },
  cta: '#D64541',
  darkBlue: '#373A47',
  shadow: '#6C7A89'
};

export const media = {
  mobile: (...args) => css`
    @media (max-width: 420px) {
      ${ css(...args) }
    }
  `,
  tablet: (...args) => css`
    @media (max-width: 991px) {
      ${ css(...args) }
    }
  `
};
