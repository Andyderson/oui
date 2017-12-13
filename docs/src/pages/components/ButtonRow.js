
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   import data from '../../../../data/components/ButtonRow/react.json'; import examples from '../../../../src/components/ButtonRow/example'; import readme from 'raw-loader!../../../../src/components/ButtonRow/README.md';

  let dataObject = {
    react: data ? data : null, 
    examples: examples ? examples : null,
    readme: readme ? readme : null
  }
  
  class ButtonRowComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default ButtonRowComponent
