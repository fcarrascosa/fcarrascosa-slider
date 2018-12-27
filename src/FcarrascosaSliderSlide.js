import { LitElement, html } from '@polymer/lit-element';
import { css } from 'lit-css';

/**
 * @customElement
 */
export default class FcarrascosaSliderSlide extends LitElement {
  static get is() { return 'fcarrascosa-slider-slide'; }

  static get properties() {
    return {
      selected: {
        type: Boolean,
      },
    };
  }

  shadowDomStyle() {
    return css`
      :host {
        display: block;
        height: 0;
        opacity: 0;
        transition: opacity 1.5s ease-in-out;
        width: 100%;
      }
      
      :host([selected="true"]) {
        height: auto;
        opacity: 1;
      }
      
      ::slotted(img) {
        display: block;
        width: 100%;
      }
    `;
  }

  render() {
    return html`
      <style>
        ${this.shadowDomStyle()};
      </style>
      <slot></slot>
    `;
  }
}
