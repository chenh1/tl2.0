import React from 'react';
import css from 'styled-jsx/css';

const defaultStyle = css`
  .logo {
    position: 'absolute',
  }
`;

export default () => (
  <React.Fragment>
    <img className="logo" />

    <style jsx>{defaultStyle}</style>
  </React.Fragment>
)
