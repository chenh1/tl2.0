import React from 'react';
import css from 'styled-jsx/css';
import viewport from '../spacing/viewport';
import colors from '../styles/colors';
import TextLink from './TextLink';
import Paragraph from './Paragraph';
import Heading from './Heading';

const maxWidth = '380px';

const row = css`
  .container {
    background: ${colors.cloudyBlue};
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
    <Heading one>Some stuff</Heading>
    <Paragraph sub>TEST</Paragraph>
    <Paragraph sub>
      asdkj asklj alsk  lask as
      <TextLink href="https://www.google.com">asd</TextLink>
    </Paragraph>
    <style jsx>
      {row}
    </style>
  </div>
)