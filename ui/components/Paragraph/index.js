import React from 'react';
import DefaultParagraph from './DefaultParagraph';
import SubParagraph from './SubParagraph';

// styled-jsx does not support dynamic external css, therefore, there is duplicate code
// you cannot interpolate template strings within its own css helper...which is puzzling
export default props => props.sub ? <SubParagraph {...props} /> : <DefaultParagraph {...props} />;