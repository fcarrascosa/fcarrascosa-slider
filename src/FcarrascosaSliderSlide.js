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
      caption: {
        type: String,
      },
      image: {
        type: String,
      },
      alt: {
        type: String,
      },
    };
  }

  connectedCallback() {
    if (!this.image) throw new Error('Element should have an image');
  }

  renderCaption() {
    return this.caption
      ? html`<div><p>${this.caption}</p></div>`
      : '';
  }

  shadowDomStyle() {
    return css`
      :host {
        display: block;
        height: 0;
        opacity: 0;
        position: relative;
        transition: opacity 1.5s ease-in-out;
        width: 100%;
      }
      
      :host([selected="true"]) {
        height: auto;
        opacity: 1;
      }
      
      img {
        display: block;
        width: 100%;
      }
      p {
        bottom: 20px;
        left: 0%;
        position: absolute;
        text-align: center;
        width: 100%;
      }
    `;
  }

  render() {
    return this.image
      ? html`
        <style>
          ${this.shadowDomStyle()};
        </style>
        <img src="${this.image}" alt="${this.caption || this.alt}" title="${this.caption || this.alt}">
        ${this.renderCaption()}      
        `
      : null;
  }
}
