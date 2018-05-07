import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Select from './index.js';

const stories = storiesOf('Select', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories.add('default', withInfo()(() => {
  return (
    <Select isDisabled={ boolean('isDisabled', false) } name='zoo' id='zoo' >
      <option>This is option one</option>
      <option>And this is option two</option>
    </Select>
  );
}));
