import React from 'react';
import { compose, withStateHandlers } from 'recompose';
import css from 'styled-jsx/css';
import viewport from '../../spacing/viewport';
import colors from '../../styles/colors';
import navSpacing from '../../spacing/nav';
import Link from 'next/link';
import NavItem from './NavItem';
import Logo from './Logo';

const links = [
  {text: 'about me', href: '/'},
  {text: 'my work', href: '/work'}
];

const defaultStyle = css`
  :global(body) {
    color: ${colors.black};
    margin: 0;
  }
  nav {
    bottom: 0;
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100%;
  }
  ul {
    display: flex;
    list-style: none;
    padding: 0;
  }
  li {
    margin: 0 ${navSpacing.base};
  }
  @media (min-width: ${viewport.lg}) {
    nav {
      position: relative;
    }
    li {
      margin: 0 ${navSpacing.lg};
    }
  }
`;

export default compose(
  withStateHandlers(
    () => ({
      selected: ''
    }),
    {
      updateSelected: () => (e) => {
        return {
          selected: e.target.getAttribute('data-value')
        }
      }
    }
  )
)(
  ({ selected, updateSelected }) => (
    <React.Fragment>
      <Logo/>

      <nav>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>
                <NavItem isSelected={selected === link.text} onClick={updateSelected} dataValue={link.text}>{link.text.toUpperCase()}</NavItem>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <style jsx>{defaultStyle}</style>
    </React.Fragment>
  )
);