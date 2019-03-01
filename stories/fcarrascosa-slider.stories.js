/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf, html } from '@open-wc/storybook';
import '../index';

storiesOf('fcarrascosa-slider', module)
  .add('Default', () => html`
    <fcarrascosa-slider>
      <fcarrascosa-slider-slide image="https://placehold.it/700x300?text=Image+1" caption="IMAGE 1 CAPTION">
      </fcarrascosa-slider-slide>
      <fcarrascosa-slider-slide image="https://placehold.it/700x300?text=Image+2" caption="IMAGE 2 CAPTION" caption-alignment="right">
      </fcarrascosa-slider-slide>
      <fcarrascosa-slider-slide image="https://placehold.it/700x300?text=Image+3" caption="IMAGE 3 CAPTION" caption-alignment="left">
      </fcarrascosa-slider-slide>
      <fcarrascosa-slider-slide image="https://placehold.it/700x300?text=Image+4">
      </fcarrascosa-slider-slide>
    </fcarrascosa-slider>
  `);
