import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

const Link = ({
  children,
  href,
  onClick,
  isDisabled = false,
  newWindow = false,
  style,
  testSection,
}) => {
  const classes = classNames({
    ['link']: true,
    [`link--${style}`]: style,
    ['link--disabled']: isDisabled,
    'pointer-events--none': isDisabled,
  });

  return (
    <a
      data-ui-component={ true }
      href={ href }
      className={ classes }
      data-test-section={ testSection }
      data-track-id={ testSection }
      onClick={ onClick }
      { ...(newWindow ? { target: '_blank', rel: 'noopener noreferrer' } : {}) }
      disabled={ isDisabled }>
      { children }
    </a>
  );
};

Link.propTypes = {
  /** Text/node that is linked */
  children: PropTypes.node.isRequired,
  /** Href for the anchor element */
  href: PropTypes.string,
  /** Disable link and interactivity */
  isDisabled: PropTypes.bool,
  /** Open link in new window */
  newWindow: PropTypes.bool,
  /** Click handler function */
  onClick: PropTypes.func,
  /** Link style options */
  style: PropTypes.oneOf([
    'default',
    'dark',
    'muted',
    'bad-news',
    'reverse',
  ]),
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
};

export default Link;
