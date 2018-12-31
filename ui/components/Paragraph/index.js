import React from 'react';
import css from 'styled-jsx/css';
import getFontSize from '../../utils/fontSize';
import fontFamily from '../../styles/fontFamily';

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