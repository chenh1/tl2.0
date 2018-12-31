import viewport from './spacing/viewport';
import fontFamily from './styles/fontFamily';
import fontSize from './spacing/fontSize';

const breakpoint = {};

Object.keys(viewport)
  .forEach(key => {
    breakpoint[key] = rules => `
      @media (min-width: ${viewport[key]}) {
        ${rules}
      }
    `
  });

const getFontFamily = (props) => {
  let family = '';

  Object.keys(props)
    .forEach(key => {
      if (props[key] && fontFamily[key]) {
        family = fontFamily[key];
      }
    });

  return family || fontFamily.garamond;
};

const getFontSize = (props) => {
  let size = '';

  Object.keys(props)
    .forEach(key => {
      if (props[key] === true && fontSize[key]) {
        size = fontSize[key];
      }
    });

  return size || fontSize.md;
};

export { breakpoint, getFontFamily, getFontSize };