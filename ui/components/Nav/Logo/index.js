import React from 'react';
import { compose, withStateHandlers } from 'recompose';
import css from 'styled-jsx/css';
import navSpacing from '../../../spacing/nav';
import spacing from '../../../spacing/module';
import fontSize from '../../../spacing/fontSize';
import viewport from '../../../spacing/viewport';

const defaultStyle = css`
  .logo {
    left: 50%;
    min-width: ${navSpacing.baseLogoMaxWidth};
    position: absolute;
    text-align: center;
    top: ${spacing.md};
    transform: translateX(-50%);
    z-index: 10;
  }
  img {
    max-width: ${navSpacing.baseLogoMaxWidth};
  }
  .logo-eyes {
    font-size: ${fontSize.xl};
    cursor: default;
  }
  @media (min-width: ${viewport.lg}) {
    .logo {
      min-width: ${navSpacing.logoMaxWidth};
      top: ${spacing.xl2};
    }
    img {
      max-width: ${navSpacing.logoMaxWidth};
    }
    .logo-eyes {
      font-size: 54px;
    }
  }
`;

export default compose(
  withStateHandlers(
    () => ({ hovered: false }),
    {
      hoverOn: () => () => ({ hovered: true }),
      hoverOff: () => () => ({ hovered: false })
    }
  )
)(
  ({ hovered, hoverOn, hoverOff }) => (
    <React.Fragment>
      <div className="logo" onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
        <img src="/static/logo-black.png"/>
        <div className="logo-eyes">👀</div>
      </div>
      
      <style jsx>{defaultStyle}</style>

      <style jsx>
        {`
          img {
            display: ${hovered ? 'none' : 'block'};
          }
          .logo-eyes {
            display: ${hovered ? 'block' : 'none'};
          }
        `}
      </style>
    </React.Fragment>
  )
);
