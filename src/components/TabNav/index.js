import React from 'react';
import classNames from 'classnames';

import Tab from './Tab';

/**
 * Wrapper component for a set of tabs
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const TabNav = (props) => {
  const tabStyleClasses = props.style ? props.style.map((style) => {
    return 'oui-tabs--' + style;
  }) : '';
  const classes = classNames(tabStyleClasses, 'oui-tabs');
  // Determine if the child is an active tab.
  // From http://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children
  const childrenWithProps = React.Children.map(props.children, (child) => {
    return React.cloneElement(child, {
      isActive: props.activeTab === child.props.tabId,
    });
  });

  return (
    <div data-test-section={ props.testSection } className={ classes }>
      <ul
        className="oui-tabs-nav"
        data-test-section="tabs-menu">
        { childrenWithProps }
      </ul>
    </div>
  );
};

TabNav.propTypes = {
  /** Id corresponding to which tab should be given the active class */
  activeTab: React.PropTypes.string.isRequired,
  /** Set of Tab components */
  children: React.PropTypes.node.isRequired,
  /** Various styles that can be given to the navigation */
  style: React.PropTypes.arrayOf(React.PropTypes.oneOf([
    'small',
    'center',
    'sub',
  ])),
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

TabNav.Tab = Tab;

export default TabNav;
