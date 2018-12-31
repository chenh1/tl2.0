import React from 'react';
import css from 'styled-jsx/css';
import fontFamily from '../../../styles/fontFamily';
import fontSize from '../../../spacing/fontSize';

const defaultStyle = css`
  .nav-item {
    font-family: ${fontFamily.roboto};
    font-size: ${fontSize.sm};
  }
`;

export default ({ children }) => (
  <React.Fragment>
    <span className="nav-item">
      {children}
    </span>

    <style jsx>{defaultStyle}</style>
  </React.Fragment>
)
