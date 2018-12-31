import React from 'react'
import css from 'styled-jsx/css'
import viewport from '../spacing/viewport';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';
import Paragraph from './Paragraph';

const maxWidth = '380px';

const row = css`
  .container {
    background: ${colors.cloudyBlue};
    font-family: ${fontFamily.garamond};
  }
  .row {
    max-width: ${maxWidth};
    margin: 80px auto 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;    
  }

  @media (min-width: ${viewport.sm}) {
    .row {
      max-width: 800px;
    }
  }
`

export default ({ children }) => (
  <div className="container row">
    {children}
    <Paragraph lg>TEST</Paragraph>
    <style jsx>
      {row}
    </style>
  </div>
)