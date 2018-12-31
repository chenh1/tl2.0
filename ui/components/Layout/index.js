import React from 'react';
import css from 'styled-jsx/css';
import spacing from '../../spacing/module';
import viewport from '../../spacing/viewport';
import colors from '../../styles/colors';

const defaultStyle = css`
  main {
    min-height: calc(100vh - 292px);
  }

  @media (min-width: ${viewport.lg}) {
    main {
      min-height: calc(100vh - 132px);
    }
  }
`;

export default ({ children }) =>  (
  <React.Fragment>
    <main className="section">
        {children}
    </main>

    <style jsx>{defaultStyle}</style>
  </React.Fragment>
);