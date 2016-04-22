import React from 'react';

const ArrowsInline = ({ direction }) => {
  return (
    <span className={ 'arrow-inline--' + direction } aria-hidden="true"></span>
  );
};

ArrowsInline.propTypes = {
  direction: React.PropTypes.oneOf(['up', 'down', 'left', 'right']),
  children: (props, propName, componentName) => {
    if (props[propName]) {
      return new Error('ArrowsInline does not accept children.');
    }
  },
};

export default ArrowsInline;
