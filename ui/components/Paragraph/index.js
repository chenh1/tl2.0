import React from 'react';
import css from 'styled-jsx/css';
import fontFamily from '../../styles/fontFamily';
import fontSize from '../../spacing/font';

const getFontSize = (props) => {
  let size = '';

  Object.keys(props)
    .forEach(key => {
      if (props[key] === true && fontSize[key]) {
        size = fontSize[key];
      }
    });

  return size || fontSize.md;
};

const defaultStyle = css`
  .paragraph {
    font-family: ${fontFamily.garamond};
  }
`;

export default (props) => (
  <React.Fragment>
    <p className="paragraph">
      {props.children}
    </p>

    <style jsx>{defaultStyle}</style>

    <style jsx>
      {`
        .paragraph {
          font-size: ${getFontSize(props)}
        }
      `}
    </style>
  </React.Fragment>
);