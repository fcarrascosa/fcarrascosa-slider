/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf, html } from '@open-wc/storybook';
import '../index';

storiesOf('fcarrascosa-slider', module)
  .add('Default', () => html`
    <style>
        fcarrascosa-slider {
            margin: auto;
            max-width: 640px;
            border: solid 1px black;
            border-radius: 3px;
        }
    </style>
    
    <fcarrascosa-slider>
      <fcarrascosa-slider-slide image="https://placehold.it/700x300/67074E/FFF?text=Image+1" caption="IMAGE 1 CAPTION">
      </fcarrascosa-slider-slide>
      <fcarrascosa-slider-slide image="https://placehold.it/700x300/1f0767/FFF?text=Image+2" caption="IMAGE 2 CAPTION" caption-alignment="right">
      </fcarrascosa-slider-slide>
      <fcarrascosa-slider-slide image="https://placehold.it/700x300/076467/FFF?text=Image+3" caption="IMAGE 3 CAPTION" caption-alignment="left">
      </fcarrascosa-slider-slide>
      <fcarrascosa-slider-slide image="https://placehold.it/700x300/003c2e/FFF?text=Image+4">
      </fcarrascosa-slider-slide>
    </fcarrascosa-slider>
  `).add('With Controls', () => html`

    <style>
        fcarrascosa-slider {
            margin: auto;
            max-width: 640px;
            border: solid 1px black;
            border-radius: 3px;
        }
    </style>

    <fcarrascosa-slider controls>
      <fcarrascosa-slider-slide image="https://placehold.it/700x300/67074E/FFF?text=Image+1" caption="IMAGE 1 CAPTION">
      </fcarrascosa-slider-slide>
      <fcarrascosa-slider-slide image="https://placehold.it/700x300/1f0767/FFF?text=Image+2" caption="IMAGE 2 CAPTION" caption-alignment="right">
      </fcarrascosa-slider-slide>
      <fcarrascosa-slider-slide image="https://placehold.it/700x300/076467/FFF?text=Image+3" caption="IMAGE 3 CAPTION" caption-alignment="left">
      </fcarrascosa-slider-slide>
      <fcarrascosa-slider-slide image="https://placehold.it/700x300/003c2e/FFF?text=Image+4">
      </fcarrascosa-slider-slide>      
    </fcarrascosa-slider>
  `).add('With Bullets', () => html`

    <style>
        fcarrascosa-slider {
            margin: auto;
            max-width: 640px;
            border: solid 1px black;
            border-radius: 3px;
        }
    </style>

    <fcarrascosa-slider bullets>
      <fcarrascosa-slider-slide image="https://placehold.it/700x300/67074E/FFF?text=Image+1" caption="IMAGE 1 CAPTION">
      </fcarrascosa-slider-slide>
      <fcarrascosa-slider-slide image="https://placehold.it/700x300/1f0767/FFF?text=Image+2" caption="IMAGE 2 CAPTION" caption-alignment="right">
      </fcarrascosa-slider-slide>
      <fcarrascosa-slider-slide image="https://placehold.it/700x300/076467/FFF?text=Image+3" caption="IMAGE 3 CAPTION" caption-alignment="left">
      </fcarrascosa-slider-slide>
      <fcarrascosa-slider-slide image="https://placehold.it/700x300/003c2e/FFF?text=Image+4">
      </fcarrascosa-slider-slide>      
    </fcarrascosa-slider>
  `)
  .add('With Controls and Bullets', () => html`

    <style>
        fcarrascosa-slider {
            margin: auto;
            max-width: 640px;
            border: solid 1px black;
            border-radius: 3px;
        }
    </style>

    <fcarrascosa-slider controls bullets>
      <fcarrascosa-slider-slide image="https://placehold.it/700x300/67074E/FFF?text=Image+1" caption="IMAGE 1 CAPTION">
      </fcarrascosa-slider-slide>
      <fcarrascosa-slider-slide image="https://placehold.it/700x300/1f0767/FFF?text=Image+2" caption="IMAGE 2 CAPTION" caption-alignment="right">
      </fcarrascosa-slider-slide>
      <fcarrascosa-slider-slide image="https://placehold.it/700x300/076467/FFF?text=Image+3" caption="IMAGE 3 CAPTION" caption-alignment="left">
      </fcarrascosa-slider-slide>
      <fcarrascosa-slider-slide image="https://placehold.it/700x300/003c2e/FFF?text=Image+4">
      </fcarrascosa-slider-slide>      
    </fcarrascosa-slider>
  `);
