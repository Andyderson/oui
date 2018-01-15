import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Manager, Popper, Target } from 'react-popper';
import { compose, withState, withHandlers} from 'recompose';

const withToggle = compose(
  withState('isOpen', 'toggle', false),
  withHandlers({
    show: ({ toggle }) => (e) => toggle(true),
    hide: ({ toggle }) => (e) => toggle(false),
    toggle: ({ toggle }) => (e) => toggle((current) => !current),
  })
);

const Dropdown = withToggle(({
  buttonContent,
  children,
  hide,
  isDisabled = false,
  isOpen,
  fullWidth,
  placement = 'bottom-start',
  show,
  style,
  testSection,
  width = 200,
  zIndex = 999,
  toggle,
}) => {

  const groupClass = classNames(
    'oui-dropdown-group',
    { ['width--1-1']: fullWidth }
  );

  const buttonClass = classNames(
    'oui-button',
    { [`oui-button--${style}`]: style },
    { ['oui-button--full soft--left text--left']: fullWidth }
  );

  return (
    <Manager
      data-ui-component={ true }
      className={ groupClass }
      data-test-section={ testSection }>
      <Target>
        <button
          type='button'
          className={ buttonClass }
          disabled={ isDisabled }
          onClick={ toggle }
          onBlur={ hide }>
          <div className='flex'>
            <div className='flex--1 truncate'>{ buttonContent }</div>
          </div>
        </button>
      </Target>
      <Popper
        placement={ placement }
        className='oui-dropdown-children'
        style={{
          zIndex: zIndex,
          position: 'absolute',
          width: width,
          marginTop: 2,
          marginBottom: 2,
          boxShadow: '0 2px 3px rgba(0,0,0,.1)',
        }}
        onClick={ hide } >
        { isOpen && !isDisabled && children }
      </Popper>
    </Manager>
  );
});

Dropdown.propTypes = {
  /** Button text, can be a string or element. */
  buttonContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  /** Dropdown contents, typically using the <Blocklist> component. */
  children: PropTypes.node.isRequired,
  /** Button width is either full or inline-block. */
  fullWidth: PropTypes.bool,
  /** Unused... */
  handleClick: PropTypes.func,
  /** Disable button. */
  isDisabled: PropTypes.bool,
  /** Popper placement property */
  placement: PropTypes.oneOf([
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'right',
    'right-start',
    'right-end',
    'left',
    'left-start',
    'left-end',
  ]),
  /** Button style, e.g. highlight, danger, outline. */
  style: PropTypes.string,
  /** For automated testing only. */
  testSection: PropTypes.string,
  /** Dropdown menu width, in pixels. */
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /** Override default dropdown menu z-index. */
  zIndex: PropTypes.number,
};

export default Dropdown;
