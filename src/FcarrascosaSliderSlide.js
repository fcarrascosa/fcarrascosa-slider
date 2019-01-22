import { LitElement, html } from 'lit-element';
import { css } from 'lit-css';

/**
 * @customElement
 */
export default class FcarrascosaSliderSlide extends LitElement {
  static get is() { return 'fcarrascosa-slider-slide'; }

  constructor() {
    super();
    if (!this.getAttribute('image')) throw new Error('Element should have an image');
    if (this.getAttribute('caption')) {
      this.captionAlignment = this.getAttribute('caption-alignment') || 'center';
    }
  }

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
      captionAlignment: {
        type: String,
      },
    };
  }

  renderCaption() {
    return this.caption
      ? html`<div><p caption-align="${this.captionAlignment}">${this.caption}</p></div>`
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
        box-sizing: border-box;
        left: 0;
        opacity: 0;
        padding: 0 20px;
        position: absolute;
        transition: opacity 1.5s ease-in-out;
        width: 100%;
      }
      
      p[caption-align="right"] {
        text-align: right;
      }
      
      p[caption-align="center"] {
        text-align: center;
      }
      
      p[caption-align="left"] {
        padding: 0 20px;
        text-align: left;
      }
      
      :host([selected="true"]) p {
        opacity: 1;
      }
    `;
  }

  render() {
    return html`
        <style>
            ${this.shadowDomStyle()}
        </style>
        <img src="${this.image}" alt="${this.caption || this.alt}" title="${this.caption || this.alt}">
        ${this.renderCaption()}      
        `;
  }
}
