import React from 'react';
import css from 'styled-jsx/css';
import fontFamily from '../../../styles/fontFamily';
import fontSize from '../../../spacing/fontSize';
import viewport from '../../../spacing/viewport';
import spacing from '../../../spacing/module';

const defaultStyle = css`
  .paragraph {
    font-family: ${fontFamily.garamond};
    font-size: ${fontSize.md};
    line-height: 1.5;
    margin: ${spacing.sm} 0;
  }

  @media (min-width: ${viewport.lg}) {
    .paragraph {
      font-size: ${fontSize.lg};
      margin: ${spacing.sm2} 0;
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
