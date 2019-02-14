/* eslint-disable no-unused-expressions,no-console */
/* globals sinon */
import {
  html,
  fixture,
  expect,
} from '@open-wc/testing';

import '../src/fcarrascosa-slider-register';
import '../src/fcarrascosa-slider-slide-register';

describe('<fcarrascosa-slider>', () => {
  describe('element has slides', () => {
    let element;
    beforeEach(async () => {
      element = await fixture(html`
      <fcarrascosa-slider>
            <fcarrascosa-slider-slide image="https://placehold.it/700x300"></fcarrascosa-slider-slide>
            <fcarrascosa-slider-slide image="https://placehold.it/700x300"></fcarrascosa-slider-slide>
            <fcarrascosa-slider-slide image="https://placehold.it/700x300"></fcarrascosa-slider-slide>
            <fcarrascosa-slider-slide image="https://placehold.it/700x300"></fcarrascosa-slider-slide>
        </fcarrascosa-slider>
      `);
    });

    it('should be instantiated propperly', () => {
      expect(element.constructor.is).to.be.equal('fcarrascosa-slider');
    });
    describe('render method', () => {
      let sandbox;
      before(() => {
        sandbox = sinon.sandbox.create();
      });
      afterEach(() => {
        sandbox.restore();
      });

      it('should set the interval property to null after pausing the slider', () => {
        element.pauseSlider();
        expect(element.interval).to.be.null;
      });
    });
    describe('sliding behavior', () => {
      it('should start on slide 0', () => {
        expect(element.currentSlide).to.be.equal(0);
      });
      describe('moving forwards', () => {
        describe('normal path', () => {
          it('should be on 1 when going from slide 0', () => {
            element.goToNextSlide();
            expect(element.currentSlide).to.be.equal(1);
          });
        });
        describe('from last slide', () => {
          it('should be on 0 when going from last slide', () => {
            element.goToSlide(element.querySelectorAll('fcarrascosa-slider-slide').length - 1);
            element.goToNextSlide();
            expect(element.currentSlide).to.be.equal(0);
          });
        });
        describe('common path', () => {
          it('should have latestSelectedSlide property set to 0 when going from slide 1', () => {
            element.goToNextSlide();
            expect(element.latestSelectedSlide).to.be.equal(0);
          });
        });
      });
      describe('moving backwards', () => {
        describe('normal path', () => {
          it('should be on 0 when going from slide 1', () => {
            element.goToSlide(1);
            element.goToPreviousSlide();
            expect(element.currentSlide).to.be.equal(0);
          });
        });
        describe('from first slide', () => {
          it('should be on last slide when going from slide 0', () => {
            const latestSlideIndex = element.querySelectorAll('fcarrascosa-slider-slide').length - 1;
            element.goToPreviousSlide();
            expect(element.currentSlide).to.be.equal(latestSlideIndex);
          });
        });
        describe('common path', () => {
          it('should have latestSelectedSlide property set to 1 when going from slide 0', () => {
            element.goToSlide(1);
            element.goToPreviousSlide();
            expect(element.latestSelectedSlide).to.be.equal(1);
          });
        });
      });
    });
  });

  describe('element does not have slides', () => {
    // eslint-disable-next-line no-unused-vars
    let element;
    let sandbox;

    before(() => {
      sandbox = sinon.createSandbox();
      sandbox.spy(console, 'warn');
    });

    beforeEach(async () => {
      element = await fixture(html`<fcarrascosa-slider></fcarrascosa-slider>`);
    });

    after(() => {
      sandbox.restore();
    });

    it('should print a console warn', () => {
      expect(console.warn.calledOnce).to.be.true;
    });
  });
});
