import {
  html,
  fixture,
  expect,
} from '@open-wc/testing';

import '../src/fcarrascosa-slider-nav-bullet-register';

describe('<fcarrascosa-slider-nav-bullet>', () => {
  describe('common tests', () => {
    let element;

    beforeEach(async () => {
      element = await fixture(html`<fcarrascosa-slider-nav-bullet slide="1"></fcarrascosa-slider-nav-bullet>`);
    });

    it('should fire click-handled event when click', (done) => {
      element.addEventListener('click-handled', (e) => {
        const { slide } = e.detail;
        expect(slide).to.be.equal(1);
        done();
      });

      element.click();
    });
  });
});
