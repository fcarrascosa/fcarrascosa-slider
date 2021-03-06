import { LitElement, html, css } from 'lit-element';
import './fcarrascosa-slider-nav-button-register';

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

      withNavButtons: {
        type: Boolean,
        attribute: 'controls',
        reflect: true,
      },
    };
  }

  constructor() {
    super();
    this.onSwipeStart = this.onSwipeStart.bind(this);
    this.onSwipeEnd = this.onSwipeEnd.bind(this);
    this.onDrag = this.onDrag.bind(this);

    this.currentSlide = 0;
    this.latestSelectedSlide = null;
    this.totalAmountOfSlides = this.querySelectorAll('fcarrascosa-slider-slide').length;
    this.addEventListener('mousedown', this.onSwipeStart, { passive: false });
    this.addEventListener('touchstart', this.onSwipeStart, { passive: false });

    this.addEventListener('mousemove', this.onDrag, false);
    this.addEventListener('touchmove', this.onDrag, false);

    this.addEventListener('mouseup', this.onSwipeEnd, { passive: false });
    this.addEventListener('touchend', this.onSwipeEnd, { passive: false });
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

  disconnectedCallback() {
    super.disconnectedCallback();

    this.removeEventListener('mousedown', this.onSwipeStart);
    this.removeEventListener('touchstart', this.onSwipeStart);

    this.removeEventListener('mousemove', this.onDrag);
    this.removeEventListener('touchmove', this.onDrag);

    this.removeEventListener('mouseup', this.onSwipeEnd);
    this.removeEventListener('touchend', this.onSwipeEnd);
  }

  onSwipeStart(e) {
    this.dragInit = e.clientX || e.changedTouches[0].clientX;
  }

  onDrag(e) {
    if (this.dragInit) {
      this.pauseSlider();
      const slides = this.querySelectorAll('fcarrascosa-slider-slide[previous="true"], fcarrascosa-slider-slide[next="true"], fcarrascosa-slider-slide[selected="true"]');
      const movement = (e.clientX || e.changedTouches[0].clientX) - this.dragInit;
      slides.forEach((slide) => {
        slide.style.transition = 'none';
        switch ('true') {
          case slide.getAttribute('next'):
            slide.style.left = `${slide.offsetWidth + movement}px`;
            break;
          case slide.getAttribute('previous'):
            slide.style.left = `${-slide.offsetWidth + movement}px`;
            break;
          default:
            slide.style.left = `${movement}px`;
            break;
        }
      });
    }
  }

  onSwipeEnd(e) {
    this.dragEnd = e.clientX || e.changedTouches[0].clientX;

    if (this.dragInit - this.dragEnd > 10) {
      this.goToNextSlide();
    } else if (this.dragEnd - this.dragInit > 10) {
      this.goToPreviousSlide();
    }

    const slides = this.querySelectorAll('fcarrascosa-slider-slide');

    slides.forEach((slide) => {
      slide.removeAttribute('style');
    });

    [this.dragInit, this.dragEnd] = [0, 0];

    this.initSlider();
  }

  /**
   * Starts the sliding behavior
   */
  initSlider() {
    this.interval = setTimeout(this.goToNextSlide.bind(this), this.time * 1000);
  }

  /**
   * Stops the sliding behavior
   */
  pauseSlider() {
    clearTimeout(this.interval);
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
    this.pauseSlider();
    this.latestSelectedSlide = this.currentSlide;
    this.selectSlide(targetSlide);
    this.initSlider();
  }

  /**
   * Selects the currentSlide
   * @param slideToSelect
   */
  selectSlide(slideToSelect) {
    this.querySelectorAll('fcarrascosa-slider-slide').forEach((slide, index) => {
      slide.setAttribute('selected', index === slideToSelect);
      slide.setAttribute('previous', index === (slideToSelect === 0
        ? this.totalAmountOfSlides - 1
        : slideToSelect - 1));
      slide.setAttribute('next', index === (this.totalAmountOfSlides - 1 === slideToSelect
        ? 0
        : slideToSelect + 1));
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
        position: relative;
        top: 0;
        width: 100%;
        display: none;
        transition: all .5s;
      }
      
      ::slotted(fcarrascosa-slider-slide[selected="true"]), 
      ::slotted(fcarrascosa-slider-slide[next="true"]), 
      ::slotted(fcarrascosa-slider-slide[previous="true"]) {
        position: absolute;
        width: 100%;
        height: auto;
        display: block;
      }
      
      ::slotted(fcarrascosa-slider-slide[next="true"]) {
        left: 100%;
      }
      
      ::slotted(fcarrascosa-slider-slide[previous="true"]) {
        left: -100%;
      }
      
      ::slotted(fcarrascosa-slider-slide[selected="true"]) {
        left: 0;
        position: relative;
      }
      
      fcarrascosa-slider-nav-button {
        position: absolute;
        left: 0;
        z-index: 10;
        height: 100%;
        width: 40px;
      }
      
      fcarrascosa-slider-nav-button[data-action="move-forward"] {
        transform: rotate(180deg);
        left: calc(100% - 40px);
      }
    `;
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return html`
        ${this.withNavButtons
    ? html`
        <fcarrascosa-slider-nav-button data-action="move-backwards" message="Previous" @click="${this.goToPreviousSlide}"></fcarrascosa-slider-nav-button>
        <fcarrascosa-slider-nav-button data-action="move-forward" message="Next" @click="${this.goToNextSlide}"></fcarrascosa-slider-nav-button>
    `
    : ''}
            
        <slot></slot>
        `;
  }
}
