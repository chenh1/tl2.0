import React from 'react';
import { compose, withStateHandlers } from 'recompose';
import css from 'styled-jsx/css';
import navSpacing from '../../../spacing/nav';
import fontSize from '../../../spacing/fontSize';

const defaultStyle = css`
  .logo {
    left: 50%;
    max-width: ${navSpacing.logoMaxWidth};
    position: absolute;
    text-align: center;
    transform: translateX(-50%);
    z-index: 10;
  }
  .logo-eyes {
    font-size: ${fontSize.xl2};
    cursor: default;
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
