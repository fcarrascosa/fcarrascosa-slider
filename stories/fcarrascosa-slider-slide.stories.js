/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf, html } from '@open-wc/storybook';
import '../index';

storiesOf('fcarrascosa-slider-slide', module)
  .add('With no caption', () => html`
    <fcarrascosa-slider-slide image="https://placehold.it/800x350" selected="true"></fcarrascosa-slider-slide>
  `)
  .add('With default caption', () => html`
    <fcarrascosa-slider-slide image="https://placehold.it/800x350" selected="true" caption="Default Caption"></fcarrascosa-slider-slide>
  `)
  .add('With caption aligned to left', () => html`
    <fcarrascosa-slider-slide image="https://placehold.it/800x350" selected="true" caption="Left Aligned Caption" caption-alignment="left"></fcarrascosa-slider-slide>
  `)
  .add('With caption aligned to right', () => html`
    <fcarrascosa-slider-slide image="https://placehold.it/800x350" selected="true" caption="Right Aligned Caption" caption-alignment="right"></fcarrascosa-slider-slide>
  `);
