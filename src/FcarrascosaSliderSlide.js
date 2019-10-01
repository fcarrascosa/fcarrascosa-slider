import { LitElement, html, css } from 'lit-element';

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

  static get styles() {
    return css`
      :host {
        overflow: hidden;
        display: block;
        height: auto;
        opacity: 1;
        position: relative;
        transition: opacity 1.5s ease-in-out;
        width: 100%;
      }
      img {
        display: block;
        width: 100%;
      }
      p {
        bottom: 20px;
        box-sizing: border-box;
        left: 0;
        padding: 0 1rem;
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
        <img src="${this.image}" alt="${this.caption || this.alt}" title="${this.caption || this.alt}" draggable="false">
        ${this.renderCaption()}      
        `;
  }
}
