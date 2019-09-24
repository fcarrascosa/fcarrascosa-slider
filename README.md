# fcarrascosa-slider 
[![Uses lit-element ^2.2.1](https://img.shields.io/badge/lit--element-%5E2.2.1-red.svg)](https://www.npmjs.com/package/lit-element)
[![Current Version](https://img.shields.io/npm/v/fcarrascosa-slider.svg?colorB=blue)](https://www.npmjs.com/package/fcarrascosa-slider)
[![codecov](https://codecov.io/gh/fcarrascosa/fcarrascosa-slider/branch/master/graph/badge.svg)](https://codecov.io/gh/fcarrascosa/fcarrascosa-slider) 
[![Build Status](https://jenkins.fcarrascosa.es/buildStatus/icon?job=fcarrascosa-slider%2Fmaster)](https://jenkins.fcarrascosa.es/job/fcarrascosa-slider/job/master/)
[![Greenkeeper badge](https://badges.greenkeeper.io/fcarrascosa/fcarrascosa-slider.svg)](https://greenkeeper.io/)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/fcarrascosa-slider)

### A WebComponent Slider based on lit-element.

This is the Fcarrascosa Slider a simple easy-to-use webcomponents set to make a Web Slider.

## Installation

### Cloning the github repo

`git clone https://github.com/fcarrascosa/fcarrascosa-slider`

### Via NPM

`npm install fcarrascosa-slider`

## Usage

After registering FcarrascosaSlider and FcarrascosaSliderSlide classes into your document, you just have to declare 
them into your html code and you are ready to go.
<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <script type="module" src="https://demo.fcarrascosa.es/fcarrascosa-slider/js/index.js"></script>
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
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
