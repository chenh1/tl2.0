import React from 'react';
import css from 'styled-jsx/css';
import Link from 'next/link';
import NavItem from './NavItem';
import Logo from './Logo';

const links = [
  {text: 'about me', href: '/'},
  {text: 'my work', href: '/work'}
];

const defaultStyle = css`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
  }
`;

export default () => (
  <nav>
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.href}>
            <NavItem>{link.text.toUpperCase()}</NavItem>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>{defaultStyle}</style>
  </nav>
);