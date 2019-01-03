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

let animateDebounce;

export default compose(
  withStateHandlers(
    () => ({ modalActive: true }),
    {
      showOverflow: () => () => ({ modalActive: false }),
      hideOverflow: () => () => ({ modalActive: true })
    }
  ),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      const { hideOverflow, showOverflow, triggerModal, modalActive } = nextProps;
      const prevTriggerModal = this.props.triggerModal;

      if (triggerModal !== prevTriggerModal) {
        if (triggerModal) {
          clearTimeout(animateDebounce);
          showOverflow();
        } else {
          animateDebounce = setTimeout(() => {
            hideOverflow();
          }, 500);
        }
      }
    }
  })
)(
  ({ children, modalActive }) => (
    <React.Fragment>
      <main className="section">
        {children}
      </main>

      <style jsx>{defaultStyle}</style>

      <style jsx>
        {`
          main {
            overflow: ${modalActive ? 'hidden' : 'visible'};
          }
          :global(body){
            overflow: ${modalActive ? 'visible' : 'hidden'}; 
          }

          @media (min-width: ${viewport.lg}) {
            :global(body){
              overflow: visible;
            }
          }
        `}
      </style>
    </React.Fragment>
  )
);

/**
 *           :global(body){
            overflow: ${modalActive ? 'visible' : 'hidden'}; 
          }
 */