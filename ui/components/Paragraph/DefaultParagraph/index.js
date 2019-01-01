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
    line-height: 1.42;
    margin: ${spacing.sm2} 0;
  }

  @media (min-width: ${viewport.lg}) {
    .paragraph {
      font-size: ${fontSize.xl};
      margin: ${spacing.lg} 0;
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
