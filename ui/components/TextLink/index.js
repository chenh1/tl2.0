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
    cursor: pointer;
  }
  @media (min-width: ${viewport.lg}) {
    .link {
      text-decoration: none;
    }
  }
`;

export default ({ children, href, onClick }) =>  (
  <React.Fragment>
    <a target="_blank" rel="noreferrer" href={href} className="link" onClick={onClick}>{children}</a>

    <style jsx>{defaultStyle}</style>
  </React.Fragment>
);