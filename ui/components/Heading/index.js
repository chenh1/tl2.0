import React from 'react';
import getFontSize from '../../utils/fontSize';
import getFontFamily from '../../utils/fontSize';

export default (props) => (
  <React.Fragment>
    <p className="paragraph">
      {props.children}
    </p>

    <style jsx>
      {`
        .paragraph {
          font-family: ${getFontFamily(props)};
          font-size: ${getFontSize(props)}
        }
      `}
    </style>
  </React.Fragment>
);