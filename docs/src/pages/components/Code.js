
  import React from 'react';
  import ComponentContent from '../../layouts/templates/ComponentContent';

   
 import examples from '../../../../src/components/Code/example'; import readme from 'raw-loader!../../../../src/components/Code/README.md';

  const sassData = null;
  const reactData = {"description":"Display code either inline or in its own block.","displayName":"Code","methods":[{"name":"renderCode","docblock":null,"modifiers":[],"params":[],"returns":null}],"props":{"children":{"type":{"name":"string"},"required":false,"description":"The code within the component"},"hasCopyButton":{"type":{"name":"bool"},"required":false,"description":"Adds a copy button to code examples"},"isHighlighted":{"type":{"name":"bool"},"required":false,"description":"Apply syntax highlighting to the code"},"language":{"type":{"name":"enum","value":[{"value":"'cs'","computed":false},{"value":"'css'","computed":false},{"value":"'diff'","computed":false},{"value":"'html'","computed":false},{"value":"'java'","computed":false},{"value":"'javascript'","computed":false},{"value":"'js'","computed":false},{"value":"'jsx'","computed":false},{"value":"'markdown'","computed":false},{"value":"'md'","computed":false},{"value":"'objectivec'","computed":false},{"value":"'php'","computed":false},{"value":"'python'","computed":false},{"value":"'ruby'","computed":false},{"value":"'scss'","computed":false},{"value":"'swift'","computed":false}]},"required":false,"description":"Specify a language for the syntax highlighter"},"testSection":{"type":{"name":"string"},"required":false,"description":"Hook for automated JavaScript tests"},"type":{"type":{"name":"enum","value":[{"value":"'inline'","computed":false},{"value":"'block'","computed":false}]},"required":true,"description":"How the code should be displayed"}},"private":false};

  let dataObject = {
    react: reactData, 
    examples: examples ? examples : null,
    readme: readme ? readme : null,
    sass: sassData,
  }
  
  class CodeComponent extends React.Component {
  
    render() {
      return (
        <ComponentContent data={ dataObject } />
      );
    };
  }
  
  export default CodeComponent