(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{12:function(t,e,i){"use strict";i.r(e);var n=i(4);function s(){const t=o(["<slot></slot>"]);return s=function(){return t},t}function r(){const t=o([":host{box-sizing:content-box;display:block;transition:all .5s ease-in-out;position:relative;overflow:hidden}::slotted(fcarrascosa-slider-slide){left:0;position:relative;top:0;width:100%}"]);return r=function(){return t},t}function o(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}class l extends n.a{static get is(){return"fcarrascosa-slider"}static get properties(){return{currentSlide:{type:Number},latestSelectedSlide:{type:Number},totalAmountOfSlides:{type:Number},time:{type:Number,value:4},interval:{type:Function}}}constructor(){super(),this.currentSlide=0,this.latestSelectedSlide=null,this.totalAmountOfSlides=this.querySelectorAll("fcarrascosa-slider-slide").length}connectedCallback(){super.connectedCallback(),0===this.totalAmountOfSlides?console.warn("slider does not have any slides"):(this.time=this.time||4,this.goToSlide(0),this.initSlider())}initSlider(){this.interval=setInterval(this.goToNextSlide.bind(this),1e3*this.time)}pauseSlider(){clearInterval(this.interval),this.interval=null}goToNextSlide(){const t=this.totalAmountOfSlides-1===this.currentSlide?0:this.currentSlide+1;this.goToSlide(t)}goToPreviousSlide(){const t=0===this.currentSlide?this.totalAmountOfSlides-1:this.currentSlide-1;this.goToSlide(t)}goToSlide(t){this.latestSelectedSlide=this.currentSlide,this.selectSlide(t)}selectSlide(t){this.querySelectorAll("fcarrascosa-slider-slide").forEach((e,i)=>{e.setAttribute("selected",i===t)}),this.currentSlide=t}static get styles(){return Object(n.b)(r())}render(){return Object(n.c)(s())}}function c(){const t=d(['<img src="','" alt="','" title="','"> ',""]);return c=function(){return t},t}function a(){const t=d([":host{display:block;height:0;opacity:0;position:relative;transition:opacity 1.5s ease-in-out;width:100%}:host([selected=true]){height:auto;opacity:1}img{display:block;width:100%}p{bottom:20px;box-sizing:border-box;left:0;opacity:0;padding:0 20px;position:absolute;transition:opacity 1.5s ease-in-out;width:100%}p[caption-align=right]{text-align:right}p[caption-align=center]{text-align:center}p[caption-align=left]{padding:0 20px;text-align:left}:host([selected=true]) p{opacity:1}"]);return a=function(){return t},t}function u(){const t=d(['<div><p caption-align="','">',"</p></div>"]);return u=function(){return t},t}function d(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}class p extends n.a{static get is(){return"fcarrascosa-slider-slide"}constructor(){if(super(),!this.getAttribute("image"))throw new Error("Element should have an image");this.getAttribute("caption")&&(this.captionAlignment=this.getAttribute("caption-alignment")||"center")}static get properties(){return{selected:{type:Boolean},caption:{type:String},image:{type:String},alt:{type:String},captionAlignment:{type:String}}}renderCaption(){return this.caption?Object(n.c)(u(),this.captionAlignment,this.caption):""}static get styles(){return Object(n.b)(a())}render(){return Object(n.c)(c(),this.image,this.caption||this.alt,this.caption||this.alt,this.renderCaption())}}customElements.define(l.is,l),customElements.define(p.is,p)}}]);
//# sourceMappingURL=4.1756c533d22720457725.js.map