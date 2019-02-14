import {
  html,
  fixture,
  expect,
} from '@open-wc/testing';

import '../src/fcarrascosa-slider-slide-register';
import FcarrascosaSliderSlide from '../src/FcarrascosaSliderSlide';


describe('<fcarrascosa-slider-slide>', () => {
  describe('common tests', () => {
    let element;

    beforeEach(async () => {
      element = await fixture(html`<fcarrascosa-slider-slide image="https://placehold.it/700x300" caption="example caption"></fcarrascosa-slider-slide>`);
    });

    it('should be instantiated propperly', () => {
      expect(element.constructor.is).to.be.equal('fcarrascosa-slider-slide');
    });

    it('should have caption set as center', () => {
      expect(element.captionAlignment).to.be.equal('center');
    });
  });

  describe('element does not have an image attribute', () => {
    it('should throw an error', () => {
      expect(() => new FcarrascosaSliderSlide()).to.throw(Error);
    });
  });

  describe('element does not have a caption', () => {
    let element;
    beforeEach(async () => {
      element = await fixture(html`<fcarrascosa-slider-slide image="https://placehold.it/700x300"></fcarrascosa-slider-slide>`);
    });

    it('should return an empty string when caption is null or undefined', () => {
      expect(element.renderCaption()).to.be.equal('');
    });
  });

  describe('element has caption-alignment', () => {
    let element;
    beforeEach(async () => {
      element = await fixture(html`<fcarrascosa-slider-slide image="https://placehold.it/700x300" caption="example caption" caption-alignment="right"></fcarrascosa-slider-slide>`);
    });

    it('should have captionAlignment set to right', () => {
      expect(element.captionAlignment).to.be.equal('right');
    });
  });
});
