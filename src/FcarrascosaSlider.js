import { LitElement, html } from '@polymer/lit-element';

/**
 * @customElement
 * @demo demo/index.html
 */
export default class FcarrascosaSlider extends LitElement {
  static get is() { return 'fcarrascosa-slider'; }

  static get properties() {
    return {
      currentSlide: {
        type: Number,
      },
      latestSelectedSlide: {
        type: Number,
      },
      totalAmountOfSlides: {
        type: Number,
      },
    };
  }

  constructor() {
    super();
    this.currentSlide = 0;
    this.latestSelectedSlide = null;
    this.totalAmountOfSlides = this.querySelectorAll('fcarrascosa-slider-slide').length;
  }

  connectedCallback() {
    if (this.totalAmountOfSlides === 0) console.warn('slider does not have any slides');
  }

  goToNextSlide() {
    const targetSlide = this.totalAmountOfSlides - 1 === this.currentSlide
      ? 0
      : this.currentSlide + 1;
    this.goToSlide(targetSlide);
  }

  goToPreviousSlide() {
    const targetSlide = this.currentSlide === 0
      ? this.totalAmountOfSlides - 1
      : this.currentSlide - 1;
    this.goToSlide(targetSlide);
  }

  goToSlide(targetSlide) {
    this.latestSelectedSlide = this.currentSlide;
    this.selectSlide(targetSlide);
  }

  selectSlide(slideToSelect) {
    this.querySelectorAll('fcarrascosa-slider-slide').forEach((slide, index) => {
      slide.setAttribute('selected', index === slideToSelect);
    });
    this.currentSlide = slideToSelect;
  }

  render() {
    return html`
            <slot></slot>
            // <fcarrascosa-arrow-link @click="${this.goToNextSlide}"></fcarrascosa-arrow-link>
        `;
  }
}
