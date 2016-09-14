import React from 'react';

/* eslint-disable max-len */
const AlignRightIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/align-right-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const AlignRightIcon = (props) => {
  let Svg;
  let sizeclass;

  switch (props.size) {
    case 24:
      Svg = AlignRightIcon24;
      sizeclass = 'oui-icon--24';
      break;
    default:
      Svg = AlignRightIcon24;
      sizeclass = `oui-icon--${ props.size }`;
  }

  return (
    <Svg
      className={ 'oui-icon display--inline ' + sizeclass }
      data-test-section={ props.testSection }
    />
  );
};

AlignRightIcon.propTypes = {
  /** Size of the icon */
  size: React.PropTypes.oneOf([12, 16, 24]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

export default AlignRightIcon;
