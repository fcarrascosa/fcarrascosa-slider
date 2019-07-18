import {
  html,
  fixture,
  expect,
} from '@open-wc/testing';

import '../src/fcarrascosa-slider-nav-button-register';
// import FcarrascosaSliderNavButton from '../src/FcarrascosaSliderNavButton';

describe('<fcarrascosa-slider-nav-button>', () => {
  describe('common tests', () => {
    let element;

    beforeEach(async () => {
      element = await fixture(html`<fcarrascosa-slider-nav-button></fcarrascosa-slider-nav-button>`);
    });

    it('should be instantiated propperly', () => {
      expect(element.constructor.is).to.be.equal('fcarrascosa-slider-nav-button');
    });
  });
});
