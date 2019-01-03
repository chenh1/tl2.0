import React from 'react';
import css from 'styled-jsx/css';
import viewport from '../../spacing/viewport';
import spacing from '../../spacing/module';
import WorkUnit from './WorkUnit';

const links = [
  { 
    href: 'https://medium.com/@tracy.lin/e-commerce-case-study-redesigning-filters-78c1e7bc1d5f', 
    text: 'Redesigning Filters', 
    subText: 'Enhancing product discovery and personalization by improving filters'
  },
  { 
    href: 'https://medium.com/@tracy.lin/e-commerce-case-study-shoedazzles-checkout-fcadd7a66917', 
    text: 'Shoedazzle’s Checkout', 
    subText: 'Optimizing checkout by clarifying membership information and pricing'
  },
  { 
    href: 'https://medium.com/@tracy.lin/e-commerce-case-study-adding-online-cancellation-6b6941324621', 
    text: 'Adding Online Cancellation', 
    subText: 'Giving customers the ability to cancel their membership online'
  },
  { 
    href: 'https://medium.com/@tracy.lin/asthma-monitoring-and-management-case-study-d761719440c0', 
    text: 'Asthma Monitoring and Management App', 
    subText: 'Helping asthma sufferers manage and monitor their illness day to day'
  },
  { 
    href: 'https://medium.com/@tracy.lin/dignity-meals-a-case-study-on-eliminating-hunger-and-food-waste-a0ccd17cb9e0', 
    text: 'Dignity Meals', 
    subText: 'A food rescue and redistribution app focused on reducing hunger and food waste'
  },
  { 
    href: 'http://cargocollective.com/tracylin', 
    text: 'Graphic Design', 
    subText: 'Select visual design projects that I’ve produced in the past years'
  }
];

const defaultStyle = css`
  .work-module {
    padding: 0 ${spacing.md};
    margin: 0 auto;
    max-width: ${spacing.maxWidth};
  }

  @media (min-width: ${viewport.lg}) {
    .work-module {
      margin: 0 auto ${spacing.xl4};
    }
  }
`;

export default () => (
  <React.Fragment>
    <div className="work-module">
      {links.map(({ href, text, subText }, index) => (
        <WorkUnit 
          key={index}
          href={href}
          text={text}
          subText={subText}
        />
      ))}
    </div>
    
    <style jsx>{defaultStyle}</style>
  </React.Fragment>
)
