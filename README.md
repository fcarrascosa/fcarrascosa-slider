# fcarrascosa-slider 
[![Uses lit-element ^2.0.0-rc.2](https://img.shields.io/badge/lit--element-%5E2.0.0--rc.2-red.svg)](https://www.npmjs.com/package/lit-element)
[![Current Version](https://img.shields.io/npm/v/fcarrascosa-slider.svg?colorB=blue)](https://www.npmjs.com/package/fcarrascosa-slider)
[![codecov](https://codecov.io/gh/fcarrascosa/fcarrascosa-slider/branch/master/graph/badge.svg)](https://codecov.io/gh/fcarrascosa/fcarrascosa-slider) [![Greenkeeper badge](https://badges.greenkeeper.io/fcarrascosa/fcarrascosa-slider.svg)](https://greenkeeper.io/)
![Build status](https://travis-ci.org/fcarrascosa/fcarrascosa-slider.svg?branch=master)
### A WebComponent Slider based on lit-element.

This is the Fcarrascosa Slider a simple easy-to-use webcomponents set to make a Web Slider.

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
