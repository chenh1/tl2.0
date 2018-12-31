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

export default ({ children, dataValue, onClick, isSelected }) => (
  <React.Fragment>
    <span onClick={onClick} data-value={dataValue} className="nav-item">
      {children}
    </span>

    <style jsx>{defaultStyle}</style>
    
    <style jsx>
      {`
        .nav-item {
          font-weight: ${isSelected ? '800' : '400'};
        }
      `}
    </style>
  </React.Fragment>
)
