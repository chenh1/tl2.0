import React from 'react';
import css from 'styled-jsx/css';
import fontFamily from '../../../styles/fontFamily';
import fontSize from '../../../spacing/fontSize';
import viewport from '../../../spacing/viewport';

const defaultStyle = css`
  .paragraph {
    font-family: ${fontFamily.garamond};
    font-size: ${fontSize.md};
  }

  @media (min-width: ${viewport.lg}) {
    .paragraph {
      font-size: ${fontSize.xl};
    }
  }
`;

export default ({ children }) => (
  <React.Fragment>
    <p className="paragraph">
      {children}
    </p>

    <style jsx>{defaultStyle}</style>
  </React.Fragment>
)
