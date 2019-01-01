import React from 'react';
import { compose, withStateHandlers, lifecycle } from 'recompose';
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
    background: ${colors.white};
    border-top: 1px solid ${colors.gray};
    bottom: 0;
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100%;
    z-index: 9;
  }
  ul {
    align-items: center;
    display: flex;
    list-style: none;
    padding: 0;
  }
  li {
    margin: 0 ${navSpacing.base};
  }
  @media (min-width: ${viewport.lg}) {
    nav {
      background: ${colors.transparent};
      border-top: none;
      min-height: 160px;
      position: relative;
    }
    li {
      margin: 0 ${navSpacing.lg};
    }
  }
`;

export default compose(
  withStateHandlers(
    () => ({ selected: '' }),
    { updateSelected: () => path => ({ selected: path }) }
  ),
  lifecycle({
    componentDidMount() {
      const path = location && location.pathname;
      console.log('path::::', path)
      this.props.updateSelected(path);
    }
  })
)(
  ({ selected, updateSelected }) => (
    <React.Fragment>
      <Logo/>

      <nav>
        <ul>
          {links.map(({ href, text }, index) => (
            <li key={index}>
              <Link href={href}>
                <NavItem isSelected={href === selected || href === `${selected}/`} onClick={updateSelected}>{text.toUpperCase()}</NavItem>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <style jsx>{defaultStyle}</style>
    </React.Fragment>
  )
);