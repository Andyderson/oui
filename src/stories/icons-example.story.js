import React from 'react';
import icons from './icons.json';
import styled from 'styled-components';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Icon from 'react-oui-icons';

const stories = storiesOf('Icons', module);

// this add some decorators for making addons available
stories
  .addDecorator(withKnobs);

stories.add('all icons', () => {
  const iconsElements = icons.map((icon, index) => {
    const Box = styled.div`
    box-sizing: border-box;
    display: flex;
    height: 100px;
    justify-content: center;
    margin: 5px;
    text-align: center;
    width: 100px;
    &:after {
      color: #666;
      transition: all 0.4s ease;
      content: '${icon.title}';
      font-family: Helvetica;
      font-size: 9px;
      max-width: 90px;
      position: absolute;
      margin-top: 70px;
      opacity: .5;
    }
    &:hover:after {
      opacity: .5;
    }
  `;
    return (
      <Box key={ index } style={ styles.iconBox }>
        <Icon
          style={ styles.icon }
          description={ icon.title }
          name={ icon.title.split(' ').join('-') }
          fill={ text('color', 'black') }
          size={ select('size', {small: 'small', medium: 'medium', large: 'large'}, 'large') }
        />
      </Box>
    );
  });
  return (
    <div className="App">
      <Container>
        { iconsElements }
      </Container>
    </div>
  );
});

stories.add('icon docs', withInfo('react <Icon /> component')(() => {
  return (
    <Icon name='bell' size='large' />
  );
}
));

stories.add('animated icon', () => {
  return (
    <Icon className='rotating' name='settings' size='large' />
  );
});

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const styles = {
  icon: {
    alignSelf: 'center',
  },
};
