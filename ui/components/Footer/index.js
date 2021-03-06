import React from 'react';
import { compose, withStateHandlers, lifecycle } from 'recompose';
import css from 'styled-jsx/css';
import viewport from '../../spacing/viewport';
import fontFamily from '../../styles/fontFamily';
import fontSize from '../../spacing/fontSize';
import colors from '../../styles/colors';
import spacing from '../../spacing/module';
import letterSpacing from '../../spacing/letterSpacing';
import Section from '../Section';

const defaultStyle = css`
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  li {
    margin: ${spacing.sm2} 0;
  }
  a {
    color: ${colors.black};
  }
  .footer-item {
    font-family: ${fontFamily.roboto};
    font-size: ${fontSize.sm};
    letter-spacing: ${letterSpacing.roboto};
  }
  .footer-wrapper {
    align-items: center;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
  }
  .footer {
    background: ${colors.lightPink};
    margin-bottom: 51px;
  }

  @media (min-width: ${viewport.lg}) {
    ul {
      flex-direction: row;
    }
    li {
      margin: 0 ${spacing.lg};
    }
    li:first-child {
      margin-left: 0;
    }
    li:last-child {
      margin-right: 0;
    }
    a {
      text-decoration: none;
    }
    a:hover::after {
      max-width: 100%;
    }
    a::after {
      border-bottom: 3px solid ${colors.dustyPink};
      content: "";
      display: block;
      max-width: 0;
      transition: max-width .2s linear;
      width: 100%;
    }
    .footer-wrapper {
      flex-direction: row;
    }
    .footer {
      background: ${colors.white};
      margin-bottom: 0;
    }
  }
`;

export default compose(
  withStateHandlers(
    () => ({
      links: [
        { text: 'linkedin', href: 'https://www.linkedin.com/in/tracy-lin' },
        { text: 'medium', href: 'https://medium.com/@tracy.lin' },
        { text: 'graphic design', href: 'http://cargocollective.com/tracylin' }
      ]
    }),
    {
      addEmail: ({ links }) => () => ({
        links: [
          { text: 'traysheeshee@gmail.com', href: 'mailto:traysheeshee@gmail.com?Subject=Hello%20Mer' },
          ...links
        ]
      })
    }
  ),
  lifecycle({
    componentDidMount() {
      this.props.addEmail();
    }
  })
)(
  ({ links }) => (
    <React.Fragment>
      <div className="footer">
        <Section>
          <div className="footer-wrapper">
            <ul>
              <li>
                <span className="footer-item">&copy; {new Date().getFullYear()} TRACY LIN</span>
              </li>
            </ul>

            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <a target="_blank" href={link.href}>
                    <span className="footer-item">{link.text.toUpperCase()}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </div>
      
      <style jsx>{defaultStyle}</style>
    </React.Fragment>
  )
);