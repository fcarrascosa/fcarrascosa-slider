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
          sandbox = sinon.createSandbox();
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
          sandbox = sinon.createSandbox();
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
      describe('swiping behavior', () => {
        const eventGenerator = (event, position) => {
          const swipeEvent = new CustomEvent(event, {});
          if (event.startsWith('mouse')) {
            swipeEvent.clientX = position;
          } else {
            swipeEvent.changedTouches = [];
            swipeEvent.changedTouches[0] = { clientX: position };
          }

          return swipeEvent;
        };

        it('it should do nothing after moving less than 10px with mouse right side', () => {
          const mousedown = eventGenerator('mousedown', 10);
          const mouseup = eventGenerator('mouseup', 11);
          const { currentSlide } = element;

          element.dispatchEvent(mousedown);
          element.dispatchEvent(mouseup);

          expect(element.currentSlide).to.be.equal(currentSlide);
        });

        it('it should do nothing after moving less than 10px with mouse left side', () => {
          const mousedown = eventGenerator('mousedown', 10);
          const mouseup = eventGenerator('mouseup', 9);
          const { currentSlide } = element;

          element.dispatchEvent(mousedown);
          element.dispatchEvent(mouseup);

          expect(element.currentSlide).to.be.equal(currentSlide);
        });

        it('it should do nothing after moving less than 10px with finger right side', async () => {
          const mousedown = eventGenerator('touchstart', 10);
          const mouseup = eventGenerator('touchend', 11);
          const { currentSlide } = element;

          element.dispatchEvent(mousedown);
          element.dispatchEvent(mouseup);

          await expect(element.currentSlide).to.be.equal(currentSlide);
        });

        it('it should do nothing after moving less than 10px with finger left side', async () => {
          const mousedown = eventGenerator('touchstart', 10);
          const mouseup = eventGenerator('touchend', 9);
          const { currentSlide } = element;

          element.dispatchEvent(mousedown);
          element.dispatchEvent(mouseup);

          await expect(element.currentSlide).to.be.equal(currentSlide);
        });

        it('should go to next slide after moving more than 10px with the mouse left side', async () => {
          const mousedown = eventGenerator('mousedown', 100);
          const mouseup = eventGenerator('mouseup', 89);

          const { currentSlide } = element;

          element.dispatchEvent(mousedown);
          element.dispatchEvent(mouseup);

          await expect(element.currentSlide).to.be.equal(currentSlide + 1);
        });

        it('should go to previous slide after moving more than 10px with the mouse left side', async () => {
          const mousedown = eventGenerator('mousedown', 89);
          const mouseup = eventGenerator('mouseup', 100);

          await element.goToNextSlide();

          const { currentSlide } = element;

          element.dispatchEvent(mousedown);
          element.dispatchEvent(mouseup);

          await expect(element.currentSlide).to.be.equal(currentSlide - 1);
        });

        it('should go to next slide after moving more than 10px with the finger left side', async () => {
          const mousedown = eventGenerator('touchstart', 100);
          const mouseup = eventGenerator('touchend', 89);

          const { currentSlide } = element;

          element.dispatchEvent(mousedown);
          element.dispatchEvent(mouseup);

          await expect(element.currentSlide).to.be.equal(currentSlide + 1);
        });

        it('should go to previous slide after moving more than 10px with the finger left side', async () => {
          const mousedown = eventGenerator('touchstart', 89);
          const mouseup = eventGenerator('touchend', 100);

          await element.goToNextSlide();

          const { currentSlide } = element;

          element.dispatchEvent(mousedown);
          element.dispatchEvent(mouseup);

          await expect(element.currentSlide).to.be.equal(currentSlide - 1);
        });

        describe('while dragging', () => {
          it('should should do nothing if there is no dragInit property and move with mouse to right', async () => {
            const dragEvent = eventGenerator('mousemove', -10);

            element.dispatchEvent(dragEvent);

            const currentSlide = await element.querySelector('fcarrascosa-slider-slide[selected="true"]');
            await expect(currentSlide.style.left).to.be.equal('');
          });

          it('should should do nothing if there is no dragInit property and move with finger to right', async () => {
            const dragEvent = eventGenerator('touchmove', -10);

            element.dispatchEvent(dragEvent);

            const currentSlide = await element.querySelector('fcarrascosa-slider-slide[selected="true"]');
            await expect(currentSlide.style.left).to.be.equal('');
          });

          it('should should do nothing if there is no dragInit property and move with mouse to left', async () => {
            const dragEvent = eventGenerator('mousemove', 10);

            element.dispatchEvent(dragEvent);

            const currentSlide = await element.querySelector('fcarrascosa-slider-slide[selected="true"]');
            await expect(currentSlide.style.left).to.be.equal('');
          });

          it('should should do nothing if there is no dragInit property and move with finger to left', async () => {
            const dragEvent = eventGenerator('touchmove', 10);

            element.dispatchEvent(dragEvent);

            const currentSlide = await element.querySelector('fcarrascosa-slider-slide[selected="true"]');
            await expect(currentSlide.style.left).to.be.equal('');
          });

          it('should move main slider to right when moving with mouse', async () => {
            const dragEvent = eventGenerator('mousemove', -10);

            element.dragInit = 1;
            element.dispatchEvent(dragEvent);

            const currentSlide = await element.querySelector('fcarrascosa-slider-slide[selected="true"]');
            await expect(currentSlide.style.left).to.be.equal('-11px');
          });

          it('should move main slider to right when moving with touch', async () => {
            const dragEvent = eventGenerator('touchmove', -10);

            element.dragInit = 1;
            element.dispatchEvent(dragEvent);

            const currentSlide = await element.querySelector('fcarrascosa-slider-slide[selected="true"]');
            await expect(currentSlide.style.left).to.be.equal('-11px');
          });

          it('should move main slider to right when moving with mouse', async () => {
            const dragEvent = eventGenerator('mousemove', 10);

            element.dragInit = 1;
            element.dispatchEvent(dragEvent);

            const currentSlide = await element.querySelector('fcarrascosa-slider-slide[selected="true"]');
            await expect(currentSlide.style.left).to.be.equal('9px');
          });

          it('should move main slider to right when moving with touch', async () => {
            const dragEvent = eventGenerator('touchmove', 10);

            element.dragInit = 1;
            element.dispatchEvent(dragEvent);

            const currentSlide = await element.querySelector('fcarrascosa-slider-slide[selected="true"]');
            await expect(currentSlide.style.left).to.be.equal('9px');
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
        sandbox = await sinon.createSandbox();
      });

      afterEach(() => {
        sandbox.restore();
      });

      it('should call goToNextSlide when clicked fcarrascosa-slider-nav-button[data-action="move-forward"]', () => {
        sinon.spy(element.goToNextSlide, 'call');
        element.shadowRoot.querySelector('fcarrascosa-slider-nav-button[data-action="move-forward"]').click();
        expect(element.goToNextSlide.call.called).to.be.true;
      });

      it('should go to next slidee when clicked fcarrascosa-slider-nav-button[data-action="move-forward"]', () => {
        element.shadowRoot.querySelector('fcarrascosa-slider-nav-button[data-action="move-forward"]').click();
        expect(element.currentSlide).to.be.equal(1);
      });

      it('should call goToPreviousSlide slide when clicked fcarrascosa-slider-nav-button[data-action="move-backwards"]', () => {
        sandbox.spy(element.goToPreviousSlide, 'call');
        element.shadowRoot.querySelector('fcarrascosa-slider-nav-button[data-action="move-backwards"]').click();
        expect(element.goToPreviousSlide.call.called).to.be.true;
      });

      it('should go to next slide when clicked fcarrascosa-slider-nav-button[data-action="move-backwards"]', () => {
        element.shadowRoot.querySelector('fcarrascosa-slider-nav-button[data-action="move-backwards"]').click();
        expect(element.currentSlide).to.be.equal(element.totalAmountOfSlides - 1);
      });
    });
    describe('element with bullets controls', () => {
      let element;
      let sandbox;

      beforeEach(async () => {
        element = await fixture(html`
      <fcarrascosa-slider bullets>
            <fcarrascosa-slider-slide image="https://placehold.it/700x300"></fcarrascosa-slider-slide>
            <fcarrascosa-slider-slide image="https://placehold.it/700x300"></fcarrascosa-slider-slide>
            <fcarrascosa-slider-slide image="https://placehold.it/700x300"></fcarrascosa-slider-slide>
            <fcarrascosa-slider-slide image="https://placehold.it/700x300"></fcarrascosa-slider-slide>
        </fcarrascosa-slider>
      `);
        sandbox = await sinon.createSandbox();
      });

      afterEach(() => {
        sandbox.restore();
      });

      it('should call goToSlide when bullet 2 is clicked', () => {
        sandbox.spy(element, 'goToSlide');
        const bullet = element.shadowRoot.querySelectorAll('fcarrascosa-slider-nav-bullet')[2];
        bullet.click();
        expect(element.goToSlide.calledOnce).to.be.true;
      });

      it('should call goToSlide with param 2 when bullet 2 is clicked', () => {
        sandbox.spy(element, 'goToSlide');
        const bullet = element.shadowRoot.querySelectorAll('fcarrascosa-slider-nav-bullet')[2];
        bullet.click();
        expect(element.goToSlide.calledWith(2)).to.be.true;
      });

      it('should go to slide 2 when bullet 2 is clicked', () => {
        const bullet = element.shadowRoot.querySelectorAll('fcarrascosa-slider-nav-bullet')[2];
        bullet.click();
        expect(element.currentSlide).to.be.equal(2);
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
