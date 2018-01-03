import { configure, setAddon } from '@storybook/react';
import * as storybook from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import infoAddon from '@storybook/addon-info';

const { version } = require('../package.json');

//require(`../dist/docs/oui/${version}/js/styles.js`);
require(`../src/oui/oui.scss`);

setAddon(infoAddon);

setOptions({
  name: 'OUI Storybook',
  url: 'https://github.com/optimizely/oui',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: false,
});

const req = require.context('../src/', true, /story\.js$/);

function loadStories() {
  req.keys().forEach(req)
}

storybook.configure(loadStories, module);