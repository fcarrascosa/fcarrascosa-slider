import { LitElement, html } from '@polymer/lit-element';
import { css } from 'lit-css';

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
        value: 2,
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
    if (this.totalAmountOfSlides === 0) {
      console.warn('slider does not have any slides');
    } else {
      this.time = this.time || 2;
      this.goToSlide(0);
      this.initSlider();
    }
  }

  initSlider() {
    this.interval = setInterval(this.goToNextSlide.bind(this), this.time * 1000);
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

  shadowDomStyle() {
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

  render() {
    return html`
            <style>
                ${this.shadowDomStyle()}
            </style>
            <slot></slot>
        `;
  }
}
