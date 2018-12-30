import React from 'react'
import breakpoint from '../spacing/util';

const maxWidth = '380px';

const row = `
  .container {
    background: green;
  }
  .row {
    max-width: ${maxWidth};
    margin: 80px auto 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;    
  }

  ${breakpoint.sm`
    .row {
      max-width: 800px;
    }
  `}
`

const StyleRules = () => (
  <style jsx>
    {`
      ${row}
    `}
  </style>
);

export default ({ children }) => (
  <div className="container row">
    {children}
    <StyleRules/>
  </div>
)