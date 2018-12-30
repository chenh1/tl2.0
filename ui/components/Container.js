import React from 'react'

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