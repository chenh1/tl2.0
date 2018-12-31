import React from 'react';
import css from 'styled-jsx/css';
import spacing from '../../spacing/module';
import viewport from '../../spacing/viewport';
import colors from '../../styles/colors';

const defaultStyle = css`
  .section {
    display: flex;
    justify-content: center;
    padding: ${spacing.md} ${spacing.md};
  }
  .section-content {
    max-width: ${spacing.maxWidth};
    width: 100%;
  }
  @media (min-width: ${viewport.lg}) {
    .section {
      padding: ${spacing.xl} ${spacing.md};
    }
  }
`;

export default ({ children, dark }) =>  (
  <React.Fragment>
    <section className="section">
      <div className="section-content">
        {children}
      </div>
    </section>

    <style jsx>{defaultStyle}</style>

    <style jsx>
      {`
        background: ${dark === true ? colors.lightPink : colors.transparent}
      `}
    </style>
  </React.Fragment>
);