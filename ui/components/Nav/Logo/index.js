import React from 'react';
import css from 'styled-jsx/css';
import navSpacing from '../../../spacing/nav';

const defaultStyle = css`
  .logo {
    left: 50%;
    max-width: ${navSpacing.logoMaxWidth};
    position: absolute;
    transform: translateX(-50%);
  }
`;

export default () => (
  <React.Fragment>
    <img src="asd" className="logo" />

    <style jsx>{defaultStyle}</style>
  </React.Fragment>
)
