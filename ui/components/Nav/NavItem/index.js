import React from 'react';
import css from 'styled-jsx/css';
import fontFamily from '../../../styles/fontFamily';
import fontSize from '../../../spacing/fontSize';
import letterSpacing from '../../../spacing/letterSpacing';
import colors from '../../../styles/colors';

const defaultStyle = css`
  .nav-item {
    font-family: ${fontFamily.roboto};
    font-size: ${fontSize.sm};
    letter-spacing: ${letterSpacing.roboto};
  }
  .nav-item:hover {
    cursor: pointer;
    border-bottom: 3px solid ${colors.dustyPink};
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
          font-weight: ${isSelected ? '700' : '400'};
        }
      `}
    </style>
  </React.Fragment>
)
