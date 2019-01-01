import React from 'react';
import { compose, withStateHandlers, lifecycle } from 'recompose';
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

export default compose(
  withStateHandlers(
    () => ({ isHidden: true }),
    {
      showOverflow: () => () => ({ isHidden: false }),
      hideOverflow: () => () => ({ isHidden: true })
    }
  ),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      const { hideOverflow, showOverflow, modalActive } = nextProps;
      const prevModalActive = this.props.modalActive;

      if (modalActive !== prevModalActive) {
        if (modalActive) {
          showOverflow();
        } else {
          setTimeout(() => {
            hideOverflow();
          }, 500);
        }
      }
    }
  })
)(
  ({ children, isHidden }) => (
    <React.Fragment>
      <main className="section">
        {children}
      </main>

      <style jsx>{defaultStyle}</style>

      <style jsx>
        {`
          main {
            overflow: ${isHidden ? 'hidden' : 'visible'};
          }
        `}
      </style>
    </React.Fragment>
  )
);