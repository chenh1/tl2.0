import React from 'react';
import css from 'styled-jsx/css';
import viewport from '../../../spacing/viewport';
import fontFamily from '../../../styles/fontFamily';
import fontSize from '../../../spacing/fontSize';
import colors from '../../../styles/colors';
import spacing from '../../../spacing/module';

const defaultStyle = css`
  .work-unit {
    align-items: flex-start;
    border-top: 1px solid ${colors.lightGray};
    display: flex;
    flex-direction: column;
    padding: ${spacing.md} 0;
    text-align: left;
  }
  .work-unit:last-child {
    border-bottom: 1px solid ${colors.lightGray};
  }
  .work-link,
  .label {
    color: ${colors.black};
    font-family: ${fontFamily.garamond};
  }
  .work-link {
    font-size: ${fontSize.md};
    margin-bottom: ${spacing.xs};
  }
  .label {
    line-height: 1.43;
  }

  @media (min-width: ${viewport.lg}) {
    .work-unit {
      align-items: center;
      padding: ${spacing.xl2} 0;
      text-align: center;
    }
    .work-link {
      text-decoration: none;
      font-size: ${fontSize.xl};
      margin-bottom: ${spacing.sm};
    }
    .label {
      line-height: 1.63;
    }
    .work-link:hover {
      color: ${colors.salmon};
    }
  }
`;

export default ({ href, text, subText}) => (
  <React.Fragment>
    <div className="work-unit">
      <a href={href} target="_blank" className="work-link">{text}</a>
      <span className="label">{subText}</span>
    </div>

    <style jsx>{defaultStyle}</style>
  </React.Fragment>
)