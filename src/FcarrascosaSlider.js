import { LitElement, html, css } from 'lit-element';

/**
 * @customElement
 * @demo demo/index.html
 */
export default class FcarrascosaSlider extends LitElement {
  static get is() { return 'fcarrascosa-slider'; }

  static get properties() {
    return {
      /**
       * The index of the current Slide shown in the slider.
       */
      currentSlide: {
        type: Number,
      },
      /**
       * The index of the latest Slide shown in the slider.
       */
      latestSelectedSlide: {
        type: Number,
      },
      /**
       * The amount of slides.
       */
      totalAmountOfSlides: {
        type: Number,
      },

      /**
       * The time (in seconds) each slide will be displayed.
       */
      time: {
        type: Number,
        value: 4,
      },

      interval: {
        type: Function,
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
    super.connectedCallback();
    if (this.totalAmountOfSlides === 0) {
      // eslint-disable-next-line no-console
      console.warn('slider does not have any slides');
    } else {
      this.time = this.time || 4;
      this.goToSlide(0);
      this.initSlider();
    }
  }

  initSlider() {
    this.interval = setInterval(this.goToNextSlide.bind(this), this.time * 1000);
  }

  pauseSlider() {
    clearInterval(this.interval);
    this.interval = null;
  }

  /**
   * Selects the next slide. If it's called from last slide, selects the first.
   */
  goToNextSlide() {
    const targetSlide = this.totalAmountOfSlides - 1 === this.currentSlide
      ? 0
      : this.currentSlide + 1;
    this.goToSlide(targetSlide);
  }

  /**
   * Selects the previous slide. If it's called from first slide, selects the last.
   */
  goToPreviousSlide() {
    const targetSlide = this.currentSlide === 0
      ? this.totalAmountOfSlides - 1
      : this.currentSlide - 1;
    this.goToSlide(targetSlide);
  }

  /**
   * Sets the latestSelectedSlide and selects the currentSlide
   * @param targetSlide
   */
  goToSlide(targetSlide) {
    this.latestSelectedSlide = this.currentSlide;
    this.selectSlide(targetSlide);
  }

  /**
   * Selects the currentSlide
   * @param slideToSelect
   */
  selectSlide(slideToSelect) {
    this.querySelectorAll('fcarrascosa-slider-slide').forEach((slide, index) => {
      slide.setAttribute('selected', index === slideToSelect);
    });
    this.currentSlide = slideToSelect;
  }

  static get styles() {
    return css`
      :host {
        box-sizing: content-box;
        display: block;
        transition: all .5s ease-in-out;
        position: relative;
        overflow: hidden;
      }
      
      ::slotted(fcarrascosa-slider-slide) {
        left: 0;
        position: relative;
        top: 0;
        width: 100%;
      }
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`
            <slot></slot>
        `;
  }
}
