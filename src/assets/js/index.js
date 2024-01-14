!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t||self).Lenis=e()}(this,function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,"symbol"==typeof(n=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var o=i.call(t,"string");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key))?n:String(n),o)}var n}function e(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},i.apply(this,arguments)}function o(t,e,i){return Math.max(t,Math.min(e,i))}var n=/*#__PURE__*/function(){function t(){}var e=t.prototype;return e.advance=function(t){var e;if(this.isRunning){var i,n=!1;if(this.lerp)this.value=(1-(i=this.lerp))*this.value+i*this.to,Math.round(this.value)===this.to&&(this.value=this.to,n=!0);else{this.currentTime+=t;var s=o(0,this.currentTime/this.duration,1),r=(n=s>=1)?1:this.easing(s);this.value=this.from+(this.to-this.from)*r}null==(e=this.onUpdate)||e.call(this,this.value,{completed:n}),n&&this.stop()}},e.stop=function(){this.isRunning=!1},e.fromTo=function(t,e,i){var o=i.lerp,n=void 0===o?.1:o,s=i.duration,r=void 0===s?1:s,l=i.easing,h=void 0===l?function(t){return t}:l,a=i.onUpdate;this.from=this.value=t,this.to=e,this.lerp=n,this.duration=r,this.easing=h,this.currentTime=0,this.isRunning=!0,this.onUpdate=a},t}();function s(t,e){var i;return function(){var o=arguments,n=this;clearTimeout(i),i=setTimeout(function(){t.apply(n,o)},e)}}var r=/*#__PURE__*/function(){function t(t,e){var i=this;this.onWindowResize=function(){i.width=window.innerWidth,i.height=window.innerHeight},this.onWrapperResize=function(){i.width=i.wrapper.clientWidth,i.height=i.wrapper.clientHeight},this.onContentResize=function(){var t=i.wrapper===window?document.documentElement:i.wrapper;i.scrollHeight=t.scrollHeight,i.scrollWidth=t.scrollWidth},this.wrapper=t,this.content=e,this.wrapper===window?(window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize()):(this.wrapperResizeObserver=new ResizeObserver(s(this.onWrapperResize,100)),this.wrapperResizeObserver.observe(this.wrapper),this.onWrapperResize()),this.contentResizeObserver=new ResizeObserver(s(this.onContentResize,100)),this.contentResizeObserver.observe(this.content),this.onContentResize()}return t.prototype.destroy=function(){var t,e;window.removeEventListener("resize",this.onWindowResize,!1),null==(t=this.wrapperResizeObserver)||t.disconnect(),null==(e=this.contentResizeObserver)||e.disconnect()},e(t,[{key:"limit",get:function(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}]),t}(),l=/*#__PURE__*/function(){function t(t,e){var i=this,n=e.wheelMultiplier,s=void 0===n?1:n,r=e.touchMultiplier,l=void 0===r?2:r,h=e.normalizeWheel,a=void 0!==h&&h;this.onTouchStart=function(t){var e=t.targetTouches?t.targetTouches[0]:t,o=e.clientY;i.touchStart.x=e.clientX,i.touchStart.y=o,i.lastDelta={x:0,y:0}},this.onTouchMove=function(t){var e=t.targetTouches?t.targetTouches[0]:t,o=e.clientX,n=e.clientY,s=-(o-i.touchStart.x)*i.touchMultiplier,r=-(n-i.touchStart.y)*i.touchMultiplier;i.touchStart.x=o,i.touchStart.y=n,i.lastDelta={x:s,y:r},i.emitter.emit("scroll",{type:"touch",deltaX:s,deltaY:r,event:t})},this.onTouchEnd=function(t){i.emitter.emit("scroll",{type:"touch",inertia:!0,deltaX:i.lastDelta.x,deltaY:i.lastDelta.y,event:t})},this.onWheel=function(t){var e=t.deltaX,n=t.deltaY;i.normalizeWheel&&(e=o(-100,e,100),n=o(-100,n,100)),i.emitter.emit("scroll",{type:"wheel",deltaX:e*=i.wheelMultiplier,deltaY:n*=i.wheelMultiplier,event:t})},this.element=t,this.wheelMultiplier=s,this.touchMultiplier=l,this.normalizeWheel=a,this.touchStart={x:null,y:null},this.emitter={events:{},emit:function(t){for(var e=this.events[t]||[],i=0,o=e.length;i<o;i++)e[i].apply(e,[].slice.call(arguments,1))},on:function(t,e){var i,o=this;return(null==(i=this.events[t])?void 0:i.push(e))||(this.events[t]=[e]),function(){var i;o.events[t]=null==(i=o.events[t])?void 0:i.filter(function(t){return e!==t})}}},this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}var e=t.prototype;return e.on=function(t,e){return this.emitter.on(t,e)},e.destroy=function(){this.emitter.events={},this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})},t}(),h=/*#__PURE__*/function(){function t(t){var e=this,o=void 0===t?{}:t,s=o.direction,h=o.gestureDirection,a=o.mouseMultiplier,c=o.smooth,u=o.wrapper,p=void 0===u?window:u,d=o.content,v=void 0===d?document.documentElement:d,m=o.wheelEventsTarget,f=void 0===m?p:m,g=o.smoothWheel,w=void 0===g?null==c||c:g,S=o.smoothTouch,y=void 0!==S&&S,T=o.syncTouch,b=void 0!==T&&T,z=o.syncTouchLerp,M=void 0===z?.1:z,E=o.touchInertiaMultiplier,L=void 0===E?35:E,W=o.duration,R=o.easing,O=void 0===R?function(t){return Math.min(1,1.001-Math.pow(2,-10*t))}:R,_=o.lerp,k=void 0===_?W?null:.1:_,x=o.infinite,H=void 0!==x&&x,j=o.orientation,D=void 0===j?null!=s?s:"vertical":j,X=o.gestureOrientation,Y=void 0===X?null!=h?h:"vertical":X,C=o.touchMultiplier,P=void 0===C?1:C,U=o.wheelMultiplier,A=void 0===U?null!=a?a:1:U,I=o.normalizeWheel,V=void 0!==I&&I;this.onVirtualScroll=function(t){var o=t.type,n=t.inertia,s=t.deltaX,r=t.deltaY,l=t.event;if(!l.ctrlKey){var h="touch"===o,a="wheel"===o;if(!("vertical"===e.options.gestureOrientation&&0===r||"horizontal"===e.options.gestureOrientation&&0===s||h&&"vertical"===e.options.gestureOrientation&&0===e.scroll&&!e.options.infinite&&r<=0||l.composedPath().find(function(t){return null==t||null==t.hasAttribute?void 0:t.hasAttribute("data-lenis-prevent")})))if(e.isStopped||e.isLocked)l.preventDefault();else{if(e.isSmooth=(e.options.smoothTouch||e.options.syncTouch)&&h||e.options.smoothWheel&&a,!e.isSmooth)return e.isScrolling=!1,void e.animate.stop();l.preventDefault();var c=r;"both"===e.options.gestureOrientation?c=Math.abs(r)>Math.abs(s)?r:s:"horizontal"===e.options.gestureOrientation&&(c=s);var u=h&&e.options.syncTouch,p=h&&n&&Math.abs(c)>1;p&&(c=e.velocity*e.options.touchInertiaMultiplier),e.scrollTo(e.targetScroll+c,i({programmatic:!1},u&&{lerp:p?e.syncTouchLerp:.4}))}}},this.onScroll=function(){if(!e.isScrolling){var t=e.animatedScroll;e.animatedScroll=e.targetScroll=e.actualScroll,e.velocity=0,e.direction=Math.sign(e.animatedScroll-t),e.emit()}},s&&console.warn("Lenis: `direction` option is deprecated, use `orientation` instead"),h&&console.warn("Lenis: `gestureDirection` option is deprecated, use `gestureOrientation` instead"),a&&console.warn("Lenis: `mouseMultiplier` option is deprecated, use `wheelMultiplier` instead"),c&&console.warn("Lenis: `smooth` option is deprecated, use `smoothWheel` instead"),window.lenisVersion="1.0.11",p!==document.documentElement&&p!==document.body||(p=window),this.options={wrapper:p,content:v,wheelEventsTarget:f,smoothWheel:w,smoothTouch:y,syncTouch:b,syncTouchLerp:M,touchInertiaMultiplier:L,duration:W,easing:O,lerp:k,infinite:H,gestureOrientation:Y,orientation:D,touchMultiplier:P,wheelMultiplier:A,normalizeWheel:V},this.dimensions=new r(p,v),this.rootElement.classList.add("lenis"),this.velocity=0,this.isStopped=!1,this.isSmooth=w||y,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.animate=new n,this.emitter={events:{},emit:function(t){for(var e=this.events[t]||[],i=0,o=e.length;i<o;i++)e[i].apply(e,[].slice.call(arguments,1))},on:function(t,e){var i,o=this;return(null==(i=this.events[t])?void 0:i.push(e))||(this.events[t]=[e]),function(){var i;o.events[t]=null==(i=o.events[t])?void 0:i.filter(function(t){return e!==t})}}},this.options.wrapper.addEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll=new l(f,{touchMultiplier:P,wheelMultiplier:A,normalizeWheel:V}),this.virtualScroll.on("scroll",this.onVirtualScroll)}var s=t.prototype;return s.destroy=function(){this.emitter.events={},this.options.wrapper.removeEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll.destroy()},s.on=function(t,e){return this.emitter.on(t,e)},s.off=function(t,e){var i;this.emitter.events[t]=null==(i=this.emitter.events[t])?void 0:i.filter(function(t){return e!==t})},s.setScroll=function(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t},s.emit=function(){this.emitter.emit("scroll",this)},s.reset=function(){this.isLocked=!1,this.isScrolling=!1,this.velocity=0,this.animate.stop()},s.start=function(){this.isStopped=!1,this.reset()},s.stop=function(){this.isStopped=!0,this.animate.stop(),this.reset()},s.raf=function(t){var e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)},s.scrollTo=function(t,e){var i=this,n=void 0===e?{}:e,s=n.offset,r=void 0===s?0:s,l=n.immediate,h=void 0!==l&&l,a=n.lock,c=void 0!==a&&a,u=n.duration,p=void 0===u?this.options.duration:u,d=n.easing,v=void 0===d?this.options.easing:d,m=n.lerp,f=void 0===m?!p&&this.options.lerp:m,g=n.onComplete,w=void 0===g?null:g,S=n.force,y=n.programmatic,T=void 0===y||y;if(!this.isStopped||void 0!==S&&S){if(["top","left","start"].includes(t))t=0;else if(["bottom","right","end"].includes(t))t=this.limit;else{var b,z;if("string"==typeof t?z=document.querySelector(t):null!=(b=t)&&b.nodeType&&(z=t),z){if(this.options.wrapper!==window){var M=this.options.wrapper.getBoundingClientRect();r-=this.isHorizontal?M.left:M.top}var E=z.getBoundingClientRect();t=(this.isHorizontal?E.left:E.top)+this.animatedScroll}}if("number"==typeof t){if(t+=r,t=Math.round(t),this.options.infinite?T&&(this.targetScroll=this.animatedScroll=this.scroll):t=o(0,t,this.limit),h)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),this.emit(),void(null==w||w());if(!T){if(t===this.targetScroll)return;this.targetScroll=t}this.animate.fromTo(this.animatedScroll,t,{duration:p,easing:v,lerp:f,onUpdate:function(t,e){var o=e.completed;c&&(i.isLocked=!0),i.isScrolling=!0,i.velocity=t-i.animatedScroll,i.direction=Math.sign(i.velocity),i.animatedScroll=t,i.setScroll(i.scroll),T&&(i.targetScroll=t),o&&(c&&(i.isLocked=!1),requestAnimationFrame(function(){i.isScrolling=!1}),i.velocity=0,null==w||w()),i.emit()}})}}},e(t,[{key:"rootElement",get:function(){return this.options.wrapper===window?this.options.content:this.options.wrapper}},{key:"limit",get:function(){return this.isHorizontal?this.dimensions.limit.x:this.dimensions.limit.y}},{key:"isHorizontal",get:function(){return"horizontal"===this.options.orientation}},{key:"actualScroll",get:function(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}},{key:"scroll",get:function(){return this.options.infinite?(e=this.animatedScroll%(t=this.limit),(t>0&&e<0||t<0&&e>0)&&(e+=t),e):this.animatedScroll;var t,e}},{key:"progress",get:function(){return 0===this.limit?1:this.scroll/this.limit}},{key:"isSmooth",get:function(){return this.__isSmooth},set:function(t){this.__isSmooth!==t&&(this.rootElement.classList.toggle("lenis-smooth",t),this.__isSmooth=t)}},{key:"isScrolling",get:function(){return this.__isScrolling},set:function(t){this.__isScrolling!==t&&(this.rootElement.classList.toggle("lenis-scrolling",t),this.__isScrolling=t)}},{key:"isStopped",get:function(){return this.__isStopped},set:function(t){this.__isStopped!==t&&(this.rootElement.classList.toggle("lenis-stopped",t),this.__isStopped=t)}}]),t}();return h});

// Import the necessary function for preloading images
import { preloadImages } from './utils.js';

// Define a variable that will store the Lenis smooth scrolling object
let lenis;

// Function to initialize Lenis for smooth scrolling
const initSmoothScrolling = () => {
	// Instantiate the Lenis object with specified properties
	lenis = new Lenis({
		lerp: 0.1, // Lower values create a smoother scroll effect
		smoothWheel: true // Enables smooth scrolling for mouse wheel events
	});

	// Update ScrollTrigger each time the user scrolls
	lenis.on('scroll', () => ScrollTrigger.update());

	// Define a function to run at each animation frame
	const scrollFn = (time) => {
		lenis.raf(time); // Run Lenis' requestAnimationFrame method
		requestAnimationFrame(scrollFn); // Recursively call scrollFn on each frame
	};
	// Start the animation frame loop
	requestAnimationFrame(scrollFn);
};

// Function to trigger Flip animations when scrolling
const triggerFlipOnScroll = (galleryEl, options) => {
	// Default settings for Flip and ScrollTrigger
	let settings = {
		flip: {
			absoluteOnLeave: false,
			absolute: false,
			scale: true,
			simple: true,
			//...
		},
		scrollTrigger: {
			start: 'center center',
			end: '+=300%',
		},
		stagger: 0
	};

	// Merge default settings with options provided when calling the function
	settings = Object.assign({}, settings, options);

	// Select elements within the gallery that will be animated
	const galleryCaption = galleryEl.querySelector('.caption');
	const galleryItems = galleryEl.querySelectorAll('.gallery__item');
	const galleryItemsInner = [...galleryItems].map(item => item.children.length > 0 ? [...item.children] : []).flat();

	// Temporarily add the final class to capture the final state
	galleryEl.classList.add('gallery--switch');
	const flipstate = Flip.getState([galleryItems, galleryCaption], { props: 'filter, opacity' });

	// Remove the final class to revert to the initial state
	galleryEl.classList.remove('gallery--switch');

	// Create the Flip animation timeline
	const tl = Flip.to(flipstate, {
		ease: 'none',
		absoluteOnLeave: settings.flip.absoluteOnLeave,
		absolute: settings.flip.absolute,
		scale: settings.flip.scale,
		simple: settings.flip.simple,
		scrollTrigger: {
			trigger: galleryEl,
			start: settings.scrollTrigger.start,
			end: settings.scrollTrigger.end,
			pin: galleryEl.parentNode,
			scrub: true,
		},
		stagger: settings.stagger
	});

	// If there are inner elements in the gallery items, animate them too
	if (galleryItemsInner.length) {
		tl.fromTo(galleryItemsInner, {
			scale: 2
		}, {
			scale: 1,
			scrollTrigger: {
				trigger: galleryEl,
				start: settings.scrollTrigger.start,
				end: settings.scrollTrigger.end,
				scrub: true,
			},
		}, 0)
	}
};

// Function to apply scroll-triggered animations to various galleries
// Apply scroll-triggered animations to each gallery with specific settings
const scroll = () => {
	// Define the gallery IDs and their options
	const galleries = [
		{ id: '#gallery-1', options: { flip: { absoluteOnLeave: true, scale: false } } },
		{ id: '#gallery-2' },
		{ id: '#gallery-3', options: { flip: { absolute: true, scale: false }, scrollTrigger: { start: 'center center', end: '+=900%' }, stagger: 0.05 } },
		{ id: '#gallery-4' },
		{ id: '#gallery-5' },
        { id: '#gallery-6' },
		// { id: '#gallery-9' },
	];

	// Loop through the galleries and apply the scroll-triggered animations
	galleries.forEach(gallery => {
		const galleryElement = document.querySelector(gallery.id);
		console.log("");
		triggerFlipOnScroll(galleryElement, gallery.options);
	});
}

// Preload images, initialize smooth scrolling, apply scroll-triggered animations, and remove loading class from body
preloadImages('.gallery__item').then(() => {
	initSmoothScrolling();
	scroll();
	// document.body.classList.remove('loading');
});
