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
  .section:first-child:not(:last-child),
  .section:not(:first-child):not(:last-child) {
    padding-bottom: 0;
  }
  .section:last-child:not(:first-child),
  .section:not(:first-child):not(:last-child) {
    padding-top: 0;
  }
  .section-content {
    display: flex;
    flex-direction: column;
    max-width: ${spacing.maxWidth};
    width: 100%;
  }
  .in-overlay {
    padding-bottom: 67px;
  }
  @media (min-width: ${viewport.lg}) {
    .section {
      padding: ${spacing.xl} ${spacing.md};
    }
    .in-overlay {
      padding-bottom: ${spacing.xl};
    }
  }
`;

export default ({ children, dark, inOverlay }) =>  (
  <React.Fragment>
    <section className={inOverlay ? "section in-overlay" : "section"}>
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