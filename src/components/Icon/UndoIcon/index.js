import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable max-len */
const UndoIcon16 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/16/undo-16.svg');
const UndoIcon24 = require('!babel?presets[]=react!svg-jsx-loader!oui-icons/src/24/undo-24.svg');
/* eslint-enable max-len */

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const UndoIcon = (props) => {
  let Svg;
  let sizeclass;

  switch (props.size) {
    case 16:
      Svg = UndoIcon16;
      sizeclass = 'oui-icon--16';
      break;
    case 24:
      Svg = UndoIcon24;
      sizeclass = 'oui-icon--24';
      break;
    default:
      Svg = UndoIcon16;
      sizeclass = `oui-icon--${ props.size }`;
  }

  return (
    <Svg
      className={ 'oui-icon display--inline ' + sizeclass }
      data-test-section={ props.testSection }
    />
  );
};

UndoIcon.propTypes = {
  /** Size of the icon */
  size: PropTypes.oneOf([12, 16, 24]).isRequired,
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
};

export default UndoIcon;
