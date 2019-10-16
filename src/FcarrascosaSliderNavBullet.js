import { LitElement, html, css } from 'lit-element';

export default class FcarrascosaSliderNavBullet extends LitElement {
  static get is() { return 'fcarrascosa-slider-nav-bullet'; }

  static get properties() {
    return {
      slide: {
        type: Number,
      },
    };
  }

  constructor() {
    super();
    this.dispatchHandleClick = this.dispatchHandleClick.bind(this);

    this.addEventListener('click', this.dispatchHandleClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this.dispatchHandleClick);
  }

  dispatchHandleClick() {
    this.dispatchEvent(new CustomEvent('click-handled', {
      detail: {
        slide: this.slide,
      },
    }));
  }

  static get styles() {
    return css`
      :host {
        border-radius: 50%;
        display: inline-block;
        background: rgba(255, 255, 255, .5);
        width: .75em;
        height: .75em;
        overflow: hidden;
        cursor: pointer;
        transition: background .3s ease-in-out;
      }
      
      :host(:hover), :host([active]) {
        background: rgba(255, 255, 255, .25);
      }
      
      span {
        user-select: none;
        color: transparent;
        line-height: 0;
      }
    `;
  }

  render() {
    return html`
            <span>Go to slide ${this.slide}</span>
        `;
  }
}
