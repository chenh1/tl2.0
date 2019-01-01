import React from 'react';
import css from 'styled-jsx/css';
import fontFamily from '../../styles/fontFamily';
import fontSize from '../../spacing/fontSize'
import viewport from '../../spacing/viewport';
import spacing from '../../spacing/module';
import letterSpacing from '../../spacing/letterSpacing';

const defaultStyle = css`
  .heading {
    font-family: ${fontFamily.roboto};
    font-size: ${fontSize.xs};
    font-weight: 700;
    letter-spacing: ${letterSpacing.roboto};
    margin-top: ${spacing.lg}
  }

  @media (min-width: ${viewport.lg}) {
    .heading {
      font-size: ${fontSize.sm};
    }
  }
`;
// passing in multiple heading levels will render multiple headings
export default (props) => {
  const { one, two, three, children} = props;

  return (
    <React.Fragment>
      {one && <h1 className="heading">{children}</h1>}
      {two && <h2 className="heading">{children}</h2>}
      {three && <h3 className="heading">{children}</h3>}

      <style jsx>{defaultStyle}</style>
    </React.Fragment>
  )
};