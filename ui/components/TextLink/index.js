import React from 'react';
import css from 'styled-jsx/css';
import colors from '../../styles/colors';
import viewport from '../../spacing/viewport';

const defaultStyle = css`
  .link {
    color: ${colors.black};
    text-decoration: underline;
  }
  .link:hover {
    color: ${colors.salmon};
  }
  @media (min-width: ${viewport.lg}) {
    .link {
      text-decoration: none;
    }
  }
`;

export default ({ children, href }) =>  (
  <React.Fragment>
    <a target="_blank" href={href} className="link">{children}</a>

    <style jsx>{defaultStyle}</style>
  </React.Fragment>
);