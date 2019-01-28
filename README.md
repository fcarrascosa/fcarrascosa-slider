# fcarrascosa-slider 
[![Uses lit-element ^2.0.0-rc.2](https://img.shields.io/badge/lit--element-%5E2.0.0--rc.2-red.svg)](https://www.npmjs.com/package/lit-element)
[![Current Version](https://img.shields.io/npm/v/fcarrascosa-slider.svg?colorB=blue)](https://www.npmjs.com/package/fcarrascosa-slider)
[![codecov](https://codecov.io/gh/fcarrascosa/fcarrascosa-slider/branch/master/graph/badge.svg)](https://codecov.io/gh/fcarrascosa/fcarrascosa-slider) 
[![Build status](https://travis-ci.org/fcarrascosa/fcarrascosa-slider.svg?branch=master)](https://travis-ci.org/fcarrascosa/fcarrascosa-slider.)
[![Greenkeeper badge](https://badges.greenkeeper.io/fcarrascosa/fcarrascosa-slider.svg)](https://greenkeeper.io/)
### A WebComponent Slider based on lit-element.

<p class="codepen" data-height="512" data-theme-id="0" data-default-tab="result" data-user="fcarrascosa" data-slug-hash="PVzVwX" style="height: 512px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid black; margin: 1em 0; padding: 1em;" data-pen-title="&amp;amp;lt;fcarrascosa-slider&amp;amp;rt; example">
  <span>See the Pen <a href="https://codepen.io/fcarrascosa/pen/PVzVwX/">
  &amp;lt;fcarrascosa-slider&amp;rt; example</a> by Fernando Carrascosa (<a href="https://codepen.io/fcarrascosa">@fcarrascosa</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

This is the Fcarrascosa Slider a simple easy-to-use webcomponents set to make a Web Slider.

## Installation

### Cloning the github repo

`git clone https://github.com/fcarrascosa/fcarrascosa-slider`

### Via NPM

`npm install fcarrascosa-slider`

## Usage

After registering FcarrascosaSlider and FcarrascosaSliderSlide classes into your document, you just have to declare 
them into your html code and you are ready to go.

```html
<fcarrascosa-slider>
    <fcarrascosa-slider-slide image="https://placehold.it/700x300?text=Image+1" caption="IMAGE 1 CAPTION">
    </fcarrascosa-slider-slide>
    <fcarrascosa-slider-slide image="https://placehold.it/700x300?text=Image+2" caption="IMAGE 2 CAPTION" caption-alignment="right">
    </fcarrascosa-slider-slide>
    <fcarrascosa-slider-slide image="https://placehold.it/700x300?text=Image+3" caption="IMAGE 3 CAPTION" caption-alignment="left">
    </fcarrascosa-slider-slide>
    <fcarrascosa-slider-slide image="https://placehold.it/700x300?text=Image+4">
    </fcarrascosa-slider-slide>
</fcarrascosa-slider>
```

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Add your changes and commit them `git commit -am 'Add some feature'`*
4. Push your branch `gir push origin feature/my-new-feature`
5. Submit a pull request
