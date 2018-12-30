import viewport from './viewport';

const breakpoint = {};

Object.keys(viewport)
  .forEach(key => {
    breakpoint[key] = rules => `
      @media (min-width: ${viewport[key]}) {
        ${rules}
      }
    `
  });

export default breakpoint;