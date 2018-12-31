import React from 'react';
import { compose, withStateHandlers, lifecycle } from 'recompose';
import css from 'styled-jsx/css';
import viewport from '../../spacing/viewport';
import fontFamily from '../../styles/fontFamily';
import fontSize from '../../spacing/fontSize';
import colors from '../../styles/colors';
import navSpacing from '../../spacing/nav';
import Link from 'next/link';

const links = [
  {text: 'traysheeshee@gmail.com', href: 'mailto:traysheeshee@gmail.com?Subject=Hello%20Mer'},
  {text: 'linkedin', href: '/work'},
  {text: 'medium', href: '/work'},
  {text: 'graphic design', href: '/work'}
];

const defaultStyle = css`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
  }
  a {
    color: ${colors.black};
    text-decoration: none;
  }
  a:hover {
    border-bottom: 3px solid ${colors.dustyPink};
  }
  .footer-item {
    font-family: ${fontFamily.roboto};
    font-size: ${fontSize.sm};
  }
  .footer-wrapper {
    align-items: center;
    display: flex;
  }
`;

export default () => (
  <React.Fragment>
    <div className="footer-wrapper">
      <span className="footer-item"> 2018 TRACY LIN</span>

      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>
              <span className="footer-item">{link.text.toUpperCase()}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
    
    <style jsx>{defaultStyle}</style>
  </React.Fragment>
);