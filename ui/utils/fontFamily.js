import fontFamily from '../styles/fontFamily';

export default (props) => {
  let family = '';

  Object.keys(props)
    .forEach(key => {
      if (props[key] && fontFamily[key]) {
        family = fontFamily[key];
      }
    });

  return family || fontFamily.roboto;
};
