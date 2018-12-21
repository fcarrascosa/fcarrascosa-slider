import {LitElement, html} from "@polymer/lit-element";

export class FcarrascosaSlider extends LitElement {
    static get is() {return 'fcarrascosa-slider'}

    static get properties() {
        return {
            currentSlide: {
                type: Number
            },
            latestSlide: {
                type: Number
            }
        }
    }

    constructor() {
        super();
        this.currentSlide = 0;
    }

    render() {
        return html`
            <slot></slot>
            // <fcarrascosa-arrow-link @click="${this.nextSlide()}"></fcarrascosa-arrow-link>
            // <fcarrascosa-arrow-link @click="${this.previousSlide()}"></fcarrascosa-arrow-link>
        `
    }

}