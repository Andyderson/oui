[![Build Status](https://travis-ci.org/optimizely/oui.svg?branch=devel)](https://travis-ci.org/optimizely/oui)
[![codecov](https://codecov.io/gh/optimizely/oui/branch/devel/graph/badge.svg)](https://codecov.io/gh/optimizely/oui)
[![Gitter](https://badges.gitter.im/optimizely/oui.svg)](https://gitter.im/optimizely/oui?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Live Documentation](https://img.shields.io/badge/documentation-live-blue.svg)](http://design.optimizely.com/docs/oui/)

# OUI Component Library

![Louis](https://raw.githubusercontent.com/optimizely/oui/devel/assets/louis.gif)

Meet Louis, the official mascot of OUI.


## Introduction

This document contains four parts:

1. [Documentation](#documentation)
2. [Including OUI in your project](#including-oui-in-your-project)
3. [Contributing to OUI](#contributing-to-oui)

***

## Documentation

[http://design.optimizely.com/docs/oui/](http://design.optimizely.com/docs/oui/)

This “living” style guide is built in React and is automatically updated with each new OUI release.

***

## Including OUI in your project

OUI is published as an npm module called `optimizely-oui` that contains Sass files and React components.

To install:

```bash
npm install optimizely-oui --save
```

This will save it within your project's `node_modules/` folder.

#### Using OUI Sass files

OUI consists of two parts:

1. **Core OUI Sass**
    - Base styles used as the foundation for any site.
    - This code lives in this OUI repository and is loaded before application specific Sass.
2. **Project specific Sass (mobile website, developer site, etc…)**
    - Project specific Sass built with OUI code such as variables or mixins.
    - This code lives in the project repo, pulling OUI as a dependency.

For example, if you're building a mobile site, your main SCSS file `mobile.scss` would contain:

```scss
// # Mobile Website
// Root file driving the Mobile Website CSS.

// ## OUI and custom functions
@import '../node_modules/optimizely-oui/src/oui/partials/sass/functions';
@import 'mobile-website/functions';

// ## OUI and custom variables
// The mobile website variables file can contain new variables or overwrite existing variables.
@import '../node_modules/optimizely-oui/src/oui/oui-variables';
@import 'mobile-website/mobile-variables';

// ## OUI and custom partials
// Partials are files that import other components
@import '../node_modules/optimizely-oui/src/oui/oui-partials';
@import 'mobile-website/mobile-partials';

// ## Overrides (helper/utility classes)
// Overrides use `!important` classes for overrides and should always be loaded last.
@import '../node_modules/optimizely-oui/src/overrides/admin';
@import '../node_modules/optimizely-oui/src/overrides/background';
@import '../node_modules/optimizely-oui/src/overrides/borders';
@import '../node_modules/optimizely-oui/src/overrides/layout';
@import '../node_modules/optimizely-oui/src/overrides/margin';
@import '../node_modules/optimizely-oui/src/overrides/padding';
@import '../node_modules/optimizely-oui/src/overrides/type';
@import '../node_modules/optimizely-oui/src/overrides/sizing';
```

#### Using OUI React components

OUI comes with React components that can be used instead of copying and pasting HTML from the documentation. You can view these components locally by running `npm run docs:watch` after cloning the repository and installing dependencies with `npm install`.

These components can be used in a React codebase by requiring OUI:

```js
import Button from 'optimizely-oui';
```

[We provide React documentation](http://design.optimizely.com/docs/oui/) that includes information on our component props and default values.

## React Components Dev Status:

| Component| Status| Component | Status | Component | Status |           
| ------------- |:-------------:| ------------- |:-------------:| ------------- |:-------------:| 
| Accordion     | :white_large_square: | Array     | :white_large_square:     | ArrowInline | :white_check_mark:    |     
| Attention | :white_check_mark:    | Badge | :white_check_mark:    | BlockList | :white_check_mark:    |         
| BlockList/Category | :white_check_mark:    | BlockList/Item | :white_check_mark:    | Button | :white_check_mark:    |     
| ButtonRow | :white_check_mark:    | CheckBox | :white_check_mark:    | Code | :white_check_mark:    |     
| Dialog | :white_large_square:   | Disclose | :white_large_square:     | Dropdown | :white_check_mark:   |     
| Help | :white_large_square:    | Input | :white_check_mark:    | InputIcon | :white_large_square:   |  
| Label | :white_check_mark:    | Media | :white_large_square:    | Nav | :white_large_square:    |   
| OverlayWrapper | :white_check_mark:    | Pagination | :white_large_square:   | Popover | :white_check_mark:    |   
| Poptip | :white_check_mark:    | ProgressBar | :white_check_mark:    | ProgressDots | :white_check_mark:     |   
| Radio | :white_check_mark:    | Search | :white_large_square:     | Select | :white_check_mark:     |   
| Spinner | :white_check_mark:     | Stats | :white_large_square:     | Steps | :white_large_square:     |   
| Table | :white_check_mark:    | Tabel/TBody | :white_check_mark:    | Tabel/TD | :white_check_mark:    |   
| Tabel/THead | :white_check_mark:    | Tabel/TR | :white_check_mark:    | TabNav | :white_check_mark:    |   
| TabNav/Tab | :white_check_mark:    | Textarea | :white_check_mark:    | Token | :white_check_mark:    |
| TextField | :white_check_mark:     |          |                       |       |                       | 

***

## Contributing to OUI

Want to run OUI locally? Clone this repository and run `npm install`. The `npm run` command will list all the available commands.

See [CONTRIBUTING.md](CONTRIBUTING.md) for more information
