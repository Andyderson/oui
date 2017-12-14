
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import data from '../../../../data/components/Popover/react.json'; import examples from '../../../../src/components/Popover/example'; import readme from 'raw-loader!../../../../src/components/Popover/README.md'; import sassExamples from '../../../../data/components/Popover/sass.json';

  let dataObject = {
    react: data ? data : null, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassExamples ? sassExamples.example : null,
  }
  
  class PopoverComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default PopoverComponent