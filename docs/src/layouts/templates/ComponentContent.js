import React from 'react';
import styled from 'styled-components'

import ReadmeComponent from '../../layouts/components/ReadmeComponent';
import ReactExamples from '../../layouts/components/ReactExamples';
import SassExamples from '../../layouts/components/SassExamples';
import PropsGrid from '../../layouts/components/PropsGrid';
import TabNav from '../../../../src/components/TabNav'

const Container = styled.div`
  padding: 20px 100px;
`;

class ComponentContent extends React.Component {
  state = {
    currentTab: 'react'
  }

  handelTabClick = (event) => {
    this.setState({ currentTab: event.target.textContent });
  }

  render() {
    const {
      react,
      examples,
      readme, 
      sass
    } = this.props.data;

    if( react && sass ) {
      const languages = ['react', 'sass']
      return (
        <Container>
          { readme && <ReadmeComponent markdownData={ readme }/> }
          <TabNav activeTab={ this.state.currentTab} style={ ['small', 'sub'] }>
            { languages.map((language) => {
                return (
                  <TabNav.Tab
                    key={ language }
                    ref={ language }
                    onClick={ this.handelTabClick }
                    tabId={ language }>
                    { language }
                  </TabNav.Tab>
                );
              })
            }
          </TabNav>
          { this.state.currentTab === 'sass' && 
            <SassExamples examplesData={ sass } /> 
          }
          { this.state.currentTab === 'react' && 
            [
              <ReactExamples examplesData={ examples } />,
              <PropsGrid componentProps={ react.props } /> 
            ]
          }
        </Container>
      )
    }

    return <Container>  
      { readme && <ReadmeComponent markdownData={ readme }/> }
      { examples && <ReactExamples examplesData={ examples } /> }
      { sass && <SassExamples examplesData={ sass } /> }
      { react && <PropsGrid componentProps={ react.props } /> }
    </Container>;
  }
}

export default ComponentContent;