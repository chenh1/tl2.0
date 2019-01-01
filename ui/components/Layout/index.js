import React from 'react';
import css from 'styled-jsx/css';
import spacing from '../../spacing/module';
import viewport from '../../spacing/viewport';
import colors from '../../styles/colors';

const defaultStyle = css`
  main {
    margin-top: ${spacing.xl4};
    min-height: calc(100vh - 357px);
    position: relative;
  }

  @media (min-width: ${viewport.lg}) {
    main {
      margin-top: 0;
      min-height: calc(100vh - 132px);
    }
  }
`;

export default ({ children, modalActive }) => (
  <React.Fragment>
    <main className="section">
        {children}
    </main>

    <style jsx>{defaultStyle}</style>

    <style jsx>
      {`
        main {
          overflow: ${modalActive ? 'visible' : 'hidden'};
        }
      `}
    </style>
  </React.Fragment>
);