import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Disclose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      overChildren: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(event) {
    this.setState({
      isOpen: !this.state.isOpen,
      overChildren: false,
    });
  }

  // boxed
  // lego-disclose__link link--dark soft-half border--all background--faint display--block flush

  // lego-disclose__content soft border--sides border--bottom

  // border--bottom

  render() {
    const { children, style } = this.props;
    const contentClass = classNames(
      'lego-disclose__content',
      {
        ['soft border--sides border--bottom']: style === 'all',
        ['border--bottom']: style === 'divider',
      }
    );
    const linkClass = classNames(
      'lego-disclose__link link--dark soft-half flush',
      {
        ['border--all background--faint display--block']: style === 'all' || style === 'header',
      }
    );
    const arrow = this.state.isOpen ? 'lego-disclose is-active' : 'lego-disclose';
    
    return (
      <div className={ arrow } style={{marginTop: '-1px'}}>
        <a onClick={ this.handleToggle } className={ linkClass }>
          <div className='lego-disclose__arrow'>
            <span className="lego-disclose__symbol"></span>
            Title of Disclosure
          </div>
        </a>
        <div className={ contentClass }>
          { this.state.isOpen && children }
        </div>
      </div>
    );
  }
}

Disclose.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.string,
};

export default Disclose;
