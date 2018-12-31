import React from 'react';
import css from 'styled-jsx/css';
import navSpacing from '../../../spacing/nav';
import fontSize from '../../../spacing/fontSize';

const defaultStyle = css`
  .logo {
    left: 50%;
    max-width: ${navSpacing.logoMaxWidth};
    position: absolute;
    transform: translateX(-50%);
  }
  .logo-hover {
    font-size: ${fontSize.xl2};
  }
`;

export default () => (
  <React.Fragment>
    <div className="logo">
      <img src="asd" />
      <div className="logo-hover">👀</div>
    </div>
    
    <style jsx>{defaultStyle}</style>
  </React.Fragment>
)
