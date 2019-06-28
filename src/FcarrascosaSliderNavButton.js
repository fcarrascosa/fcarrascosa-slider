import { LitElement, html, css } from 'lit-element';

export default class FcarrascosaSliderNavButton extends LitElement {
  static get is() { return 'fcarrascosa-slider-nav-button'; }

  static get properties() {
    return {
      action: {
        type: Function,
      },
      message: {
        type: String,
      },
    };
  }

  static get styles() {
    return css`
      :host {
        box-sizing: content-box;
        display: block;
        position: relative;
        overflow: hidden;
      }
      
      button {
        appearance: none;
        color: rgba(255, 255, 255, 0);
        display: inline-block;
        border: none;
        height: 100%;
        padding: 0 1rem;
        margin: 0;
        text-decoration: none;
        background: transparent;
        font-family: sans-serif;
        font-size: 1rem;
        line-height: 0;
        cursor: pointer;
        position: absolute;
        text-align: center;
        transition: background 250ms ease-in-out, 
        transform 150ms ease;
        width: 100%;
      }

      button:hover,
      button:focus {
        background: linear-gradient(to right, rgba(0, 0, 0, .15), transparent);
      }

      button:focus {
        outline: none;
      }

      button:active {
        transform: scale(0.99);
      }
      
      button::before {
        border-bottom: 4px solid #fff;
        border-right: 4px solid #fff;
        content: '';
        margin: 0;
        display: block;
        vertical-align: middle;
        height: 10px;
        width: 10px;
        transform: rotate(-225deg);
      }
    `;
  }

  render() {
    return html`
      <button>${this.message}</button>
      `;
  }
}
