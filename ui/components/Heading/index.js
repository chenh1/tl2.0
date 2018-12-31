import React from 'react';
import getFontSize from '../../utils/fontSize';
import getFontFamily from '../../utils/fontFamily';

// passing in multiple heading levels will render multiple headings
export default (props) => {
  const { one, two, three, children} = props;

  return (
    <React.Fragment>
      {one && <h1 className="heading">{children}</h1>}
      {two && <h2 className="heading">{children}</h2>}
      {three && <h3 className="heading">{children}</h3>}

      <style jsx>
        {`
          .heading {
            font-family: ${getFontFamily(props)};
            font-size: ${getFontSize(props)}
          }
        `}
      </style>
    </React.Fragment>
  )
};