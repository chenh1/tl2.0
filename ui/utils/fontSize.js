
import fontSize from '../spacing/fontSize';

export default (props) => {
  let size = '';

  Object.keys(props)
    .forEach(key => {
      if (props[key] === true && fontSize[key]) {
        size = fontSize[key];
      }
    });

  return size || fontSize.md;
};
