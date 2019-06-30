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
    describe('common tests', () => {
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
        let sandbox;

        beforeEach(() => {
          sandbox = sinon.sandbox.create();
        });

        afterEach(() => {
          sandbox.restore();
        });

        it('should start on slide 0', () => {
          expect(element.currentSlide).to.be.equal(0);
        });

        describe('initSlider method', () => {
          it('should call goToNextSlide method with bind', () => {
            sandbox.spy(element.goToNextSlide, 'bind');
            element.initSlider();
            expect(element.goToNextSlide.bind.calledOnce).to.be.true;
          });
        });

        describe('going to a slide', () => {
          it('should stop the slider when goToSlide is called', () => {
            sandbox.spy(element, 'pauseSlider');
            element.goToSlide(element.querySelectorAll('fcarrascosa-slider-slide').length - 1);
            expect(element.pauseSlider.calledOnce).to.be.true;
          });

          it('should restart the slider when goToSlide is called', () => {
            sandbox.spy(element, 'initSlider');
            element.goToSlide(element.querySelectorAll('fcarrascosa-slider-slide').length - 1);
            expect(element.initSlider.calledOnce).to.be.true;
          });

          it('should call to selectSlide method', () => {
            sandbox.spy(element, 'selectSlide');
            element.goToSlide(element.querySelectorAll('fcarrascosa-slider-slide').length - 1);
            expect(element.selectSlide.calledOnce).to.be.true;
          });

          it('should move to the indicated slide when calling selectSlide', () => {
            element.selectSlide(element.querySelectorAll('fcarrascosa-slider-slide').length - 1);
            expect(element.currentSlide).to.be.equal(element.querySelectorAll('fcarrascosa-slider-slide').length - 1);
          });
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
    describe('element with navigation controls', () => {
      let element;
      let sandbox;

      beforeEach(async () => {
        element = await fixture(html`
      <fcarrascosa-slider controls>
            <fcarrascosa-slider-slide image="https://placehold.it/700x300"></fcarrascosa-slider-slide>
            <fcarrascosa-slider-slide image="https://placehold.it/700x300"></fcarrascosa-slider-slide>
            <fcarrascosa-slider-slide image="https://placehold.it/700x300"></fcarrascosa-slider-slide>
            <fcarrascosa-slider-slide image="https://placehold.it/700x300"></fcarrascosa-slider-slide>
        </fcarrascosa-slider>
      `);
        sandbox = await sinon.sandbox.create();
      });

      afterEach(() => {
        sandbox.restore();
      });

      it('should go to next slide when clicked fcarrascosa-slider-nav-button[data-action="move-forward"]', () => {
        sinon.spy(element.goToNextSlide, 'call');
        element.shadowRoot.querySelector('fcarrascosa-slider-nav-button[data-action="move-forward"]').click();
        expect(element.goToNextSlide.call.called).to.be.true;
      });

      it('should go to previous slide when clicked fcarrascosa-slider-nav-button[data-action="move-backwards"]', () => {
        sandbox.spy(element.goToPreviousSlide, 'call');
        element.shadowRoot.querySelector('fcarrascosa-slider-nav-button[data-action="move-backwards"]').click();
        expect(element.goToPreviousSlide.call.called).to.be.true;
      });
    });
  });

  describe('element does not have slides', () => {
    let sandbox;

    before(() => {
      sandbox = sinon.createSandbox();
      sandbox.spy(console, 'warn');
    });

    beforeEach(async () => {
      await fixture(html`<fcarrascosa-slider></fcarrascosa-slider>`);
    });

    after(() => {
      sandbox.restore();
    });

    it('should print a console warn', () => {
      expect(console.warn.calledOnce).to.be.true;
    });
  });
});
