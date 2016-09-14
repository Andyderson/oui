/* eslint-disable react/jsx-key */
import React from 'react';
import Button from '../index';

export default [
  {
    isPadded: true,
    examples: [
      <Button>Button</Button>,
      <Button style="highlight">Highlight</Button>,
      <Button style="danger">Danger</Button>,
      <Button style="danger-outline">Danger Outline</Button>,
      <Button style="outline">Outline</Button>,
      <Button style="plain">Plain</Button>,
      <Button style="toggle">Toggle</Button>,
    ],
  },
  {
    isPadded: true,
    examples: [
      <Button isDisabled={ true }>Button</Button>,
      <Button isDisabled={ true } style="highlight">Highlight</Button>,
      <Button isDisabled={ true } style="danger">Danger</Button>,
      <Button isDisabled={ true } style="danger-outline">Danger Outline</Button>,
      <Button isDisabled={ true } style="outline">Outline</Button>,
      <Button isDisabled={ true } style="plain">Plain</Button>,
      <Button isDisabled={ true } style="toggle">Toggle</Button>,
    ],
  },

  {
    backgroundColor: 'brand-dark',
    isPadded: true,
    examples: [
      <Button style="outline-reverse">Outline Reverse Button</Button>,
    ],
  },

  {
    isPadded: true,
    examples: [
      <Button style="unstyled">Unstyled Button</Button>,
    ],
  },

  {
    isPadded: true,
    examples: [
      <Button size="tiny">Tiny Button</Button>,
      <Button size="small">Small Button</Button>,
      <Button size="large">Large Button</Button>,
      <Button size="narrow">Narrow Button</Button>,
      <Button size="tight">Tight Button</Button>,
    ],
  },

  {
    isPadded: true,
    examples: [
      <Button size="full">Full Button</Button>,
    ],
  },

  {
    isPadded: true,
    examples: [
      <Button
        onClick={ function() {
          alert('Hello!'); //eslint-disable-line
        } }>
        Button with Function
      </Button>,
    ],
  },
];
