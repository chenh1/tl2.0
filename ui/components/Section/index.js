import React from 'react';
import css from 'styled-jsx/css';
import spacing from '../../spacing/module';

const defaultStyle = css`
  .section {
    display: flex;
    justify-content: center;
    padding: 0 ${spacing.md};
  }
  .section-content {
    max-width: 980px;
  }
`;

export default ({ children }) =>  (
  <React.Fragment>
    <section className="section">
      <div className="section-content">
        {children}
      </div>
    </section>

    <style jsx>{defaultStyle}</style>
  </React.Fragment>
);