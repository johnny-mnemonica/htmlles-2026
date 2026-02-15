/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/site.js":
/*!***************************!*\
  !*** ./assets/js/site.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var parallax_js_src_parallax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! parallax-js/src/parallax */ "./node_modules/parallax-js/src/parallax.js");
/* harmony import */ var parallax_js_src_parallax__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(parallax_js_src_parallax__WEBPACK_IMPORTED_MODULE_0__);

window.Parallax = (parallax_js_src_parallax__WEBPACK_IMPORTED_MODULE_0___default());

// Function to change shape illustrations on landing page

var shapeArray = ['hand', 'fortune-cookie', 'orange-peel', 'cow', 'bird', 'olive-branch', 'fish'];
function changeShape(eventTarget) {
  var el = eventTarget.firstElementChild;
  var siblingEl = eventTarget.nextElementSibling.firstElementChild;
  var currentShape = el.getAttribute("href").replace('-outline', '').replace('#', '');
  var currentIndex = shapeArray.indexOf(currentShape);
  var getNewIndex = function getNewIndex() {
    if (currentIndex == shapeArray.length - 1) return shapeArray[0];else return shapeArray[currentIndex + 1];
  };
  el.setAttribute('href', "#".concat(getNewIndex(), "-outline"));
  siblingEl.setAttribute('href', "#".concat(getNewIndex()));
}
document.querySelectorAll('.outline-landing').forEach(function (el) {
  return el.addEventListener('click', function (e) {
    return changeShape(e.target);
  });
});

/***/ }),

/***/ "./assets/css/main.css":
/*!*****************************!*\
  !*** ./assets/css/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/css/tailwind.css":
/*!*********************************!*\
  !*** ./assets/css/tailwind.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/parallax-js/src/parallax.js":
/*!**************************************************!*\
  !*** ./node_modules/parallax-js/src/parallax.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
* Parallax.js
* @author Matthew Wagerfield - @wagerfield, René Roth - mail@reneroth.org
* @description Creates a parallax effect between an array of layers,
*              driving the motion from the gyroscope output of a smartdevice.
*              If no gyroscope is available, the cursor position is used.
*/

const rqAnFr = __webpack_require__(/*! raf */ "./node_modules/raf/index.js")
const objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js")

const helpers = {
  propertyCache: {},
  vendors: [null, ['-webkit-','webkit'], ['-moz-','Moz'], ['-o-','O'], ['-ms-','ms']],

  clamp(value, min, max) {
    return min < max
      ? (value < min ? min : value > max ? max : value)
      : (value < max ? max : value > min ? min : value)
  },

  data(element, name) {
    return helpers.deserialize(element.getAttribute('data-'+name))
  },

  deserialize(value) {
    if (value === 'true') {
      return true
    } else if (value === 'false') {
      return false
    } else if (value === 'null') {
      return null
    } else if (!isNaN(parseFloat(value)) && isFinite(value)) {
      return parseFloat(value)
    } else {
      return value
    }
  },

  camelCase(value) {
    return value.replace(/-+(.)?/g, (match, character) => {
      return character ? character.toUpperCase() : ''
    })
  },

  accelerate(element) {
    helpers.css(element, 'transform', 'translate3d(0,0,0) rotate(0.0001deg)')
    helpers.css(element, 'transform-style', 'preserve-3d')
    helpers.css(element, 'backface-visibility', 'hidden')
  },

  transformSupport(value) {
    let element = document.createElement('div'),
        propertySupport = false,
        propertyValue = null,
        featureSupport = false,
        cssProperty = null,
        jsProperty = null
    for (let i = 0, l = helpers.vendors.length; i < l; i++) {
      if (helpers.vendors[i] !== null) {
        cssProperty = helpers.vendors[i][0] + 'transform'
        jsProperty = helpers.vendors[i][1] + 'Transform'
      } else {
        cssProperty = 'transform'
        jsProperty = 'transform'
      }
      if (element.style[jsProperty] !== undefined) {
        propertySupport = true
        break
      }
    }
    switch(value) {
      case '2D':
        featureSupport = propertySupport
        break
      case '3D':
        if (propertySupport) {
          let body = document.body || document.createElement('body'),
              documentElement = document.documentElement,
              documentOverflow = documentElement.style.overflow,
              isCreatedBody = false

          if (!document.body) {
            isCreatedBody = true
            documentElement.style.overflow = 'hidden'
            documentElement.appendChild(body)
            body.style.overflow = 'hidden'
            body.style.background = ''
          }

          body.appendChild(element)
          element.style[jsProperty] = 'translate3d(1px,1px,1px)'
          propertyValue = window.getComputedStyle(element).getPropertyValue(cssProperty)
          featureSupport = propertyValue !== undefined && propertyValue.length > 0 && propertyValue !== 'none'
          documentElement.style.overflow = documentOverflow
          body.removeChild(element)

          if ( isCreatedBody ) {
            body.removeAttribute('style')
            body.parentNode.removeChild(body)
          }
        }
        break
    }
    return featureSupport
  },

  css(element, property, value) {
    let jsProperty = helpers.propertyCache[property]
    if (!jsProperty) {
      for (let i = 0, l = helpers.vendors.length; i < l; i++) {
        if (helpers.vendors[i] !== null) {
          jsProperty = helpers.camelCase(helpers.vendors[i][1] + '-' + property)
        } else {
          jsProperty = property
        }
        if (element.style[jsProperty] !== undefined) {
          helpers.propertyCache[property] = jsProperty
          break
        }
      }
    }
    element.style[jsProperty] = value
  }

}

const MAGIC_NUMBER = 30,
      DEFAULTS = {
        relativeInput: false,
        clipRelativeInput: false,
        inputElement: null,
        hoverOnly: false,
        calibrationThreshold: 100,
        calibrationDelay: 500,
        supportDelay: 500,
        calibrateX: false,
        calibrateY: true,
        invertX: true,
        invertY: true,
        limitX: false,
        limitY: false,
        scalarX: 10.0,
        scalarY: 10.0,
        frictionX: 0.1,
        frictionY: 0.1,
        originX: 0.5,
        originY: 0.5,
        pointerEvents: false,
        precision: 1,
        onReady: null,
        selector: null
      }

class Parallax {
  constructor(element, options) {

    this.element = element

    const data = {
      calibrateX: helpers.data(this.element, 'calibrate-x'),
      calibrateY: helpers.data(this.element, 'calibrate-y'),
      invertX: helpers.data(this.element, 'invert-x'),
      invertY: helpers.data(this.element, 'invert-y'),
      limitX: helpers.data(this.element, 'limit-x'),
      limitY: helpers.data(this.element, 'limit-y'),
      scalarX: helpers.data(this.element, 'scalar-x'),
      scalarY: helpers.data(this.element, 'scalar-y'),
      frictionX: helpers.data(this.element, 'friction-x'),
      frictionY: helpers.data(this.element, 'friction-y'),
      originX: helpers.data(this.element, 'origin-x'),
      originY: helpers.data(this.element, 'origin-y'),
      pointerEvents: helpers.data(this.element, 'pointer-events'),
      precision: helpers.data(this.element, 'precision'),
      relativeInput: helpers.data(this.element, 'relative-input'),
      clipRelativeInput: helpers.data(this.element, 'clip-relative-input'),
      hoverOnly: helpers.data(this.element, 'hover-only'),
      inputElement: document.querySelector(helpers.data(this.element, 'input-element')),
      selector: helpers.data(this.element, 'selector')
    }

    for (let key in data) {
      if (data[key] === null) {
        delete data[key]
      }
    }

    objectAssign(this, DEFAULTS, data, options)

    if(!this.inputElement) {
      this.inputElement = this.element
    }

    this.calibrationTimer = null
    this.calibrationFlag = true
    this.enabled = false
    this.depthsX = []
    this.depthsY = []
    this.raf = null

    this.bounds = null
    this.elementPositionX = 0
    this.elementPositionY = 0
    this.elementWidth = 0
    this.elementHeight = 0

    this.elementCenterX = 0
    this.elementCenterY = 0

    this.elementRangeX = 0
    this.elementRangeY = 0

    this.calibrationX = 0
    this.calibrationY = 0

    this.inputX = 0
    this.inputY = 0

    this.motionX = 0
    this.motionY = 0

    this.velocityX = 0
    this.velocityY = 0

    this.onMouseMove = this.onMouseMove.bind(this)
    this.onDeviceOrientation = this.onDeviceOrientation.bind(this)
    this.onDeviceMotion = this.onDeviceMotion.bind(this)
    this.onOrientationTimer = this.onOrientationTimer.bind(this)
    this.onMotionTimer = this.onMotionTimer.bind(this)
    this.onCalibrationTimer = this.onCalibrationTimer.bind(this)
    this.onAnimationFrame = this.onAnimationFrame.bind(this)
    this.onWindowResize = this.onWindowResize.bind(this)

    this.windowWidth = null
    this.windowHeight = null
    this.windowCenterX = null
    this.windowCenterY = null
    this.windowRadiusX = null
    this.windowRadiusY = null
    this.portrait = false
    this.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i)
    this.motionSupport = !!window.DeviceMotionEvent && !this.desktop
    this.orientationSupport = !!window.DeviceOrientationEvent && !this.desktop
    this.orientationStatus = 0
    this.motionStatus = 0

    this.initialise()
  }

  initialise() {
    if (this.transform2DSupport === undefined) {
      this.transform2DSupport = helpers.transformSupport('2D')
      this.transform3DSupport = helpers.transformSupport('3D')
    }

    // Configure Context Styles
    if (this.transform3DSupport) {
      helpers.accelerate(this.element)
    }

    let style = window.getComputedStyle(this.element)
    if (style.getPropertyValue('position') === 'static') {
      this.element.style.position = 'relative'
    }

    // Pointer events
    if(!this.pointerEvents) {
      this.element.style.pointerEvents = 'none'
    }

    // Setup
    this.updateLayers()
    this.updateDimensions()
    this.enable()
    this.queueCalibration(this.calibrationDelay)
  }

  doReadyCallback() {
    if(this.onReady) {
      this.onReady()
    }
  }

  updateLayers() {
    if(this.selector) {
      this.layers = this.element.querySelectorAll(this.selector)
    } else {
      this.layers = this.element.children
    }

    if(!this.layers.length) {
      console.warn('ParallaxJS: Your scene does not have any layers.')
    }

    this.depthsX = []
    this.depthsY = []

    for (let index = 0; index < this.layers.length; index++) {
      let layer = this.layers[index]

      if (this.transform3DSupport) {
        helpers.accelerate(layer)
      }

      layer.style.position = index ? 'absolute' : 'relative'
      layer.style.display = 'block'
      layer.style.left = 0
      layer.style.top = 0

      let depth = helpers.data(layer, 'depth') || 0
      this.depthsX.push(helpers.data(layer, 'depth-x') || depth)
      this.depthsY.push(helpers.data(layer, 'depth-y') || depth)
    }
  }

  updateDimensions() {
    this.windowWidth = window.innerWidth
    this.windowHeight = window.innerHeight
    this.windowCenterX = this.windowWidth * this.originX
    this.windowCenterY = this.windowHeight * this.originY
    this.windowRadiusX = Math.max(this.windowCenterX, this.windowWidth - this.windowCenterX)
    this.windowRadiusY = Math.max(this.windowCenterY, this.windowHeight - this.windowCenterY)
  }

  updateBounds() {
    this.bounds = this.inputElement.getBoundingClientRect()
    this.elementPositionX = this.bounds.left
    this.elementPositionY = this.bounds.top
    this.elementWidth = this.bounds.width
    this.elementHeight = this.bounds.height
    this.elementCenterX = this.elementWidth * this.originX
    this.elementCenterY = this.elementHeight * this.originY
    this.elementRangeX = Math.max(this.elementCenterX, this.elementWidth - this.elementCenterX)
    this.elementRangeY = Math.max(this.elementCenterY, this.elementHeight - this.elementCenterY)
  }

  queueCalibration(delay) {
    clearTimeout(this.calibrationTimer)
    this.calibrationTimer = setTimeout(this.onCalibrationTimer, delay)
  }

  enable() {
    if (this.enabled) {
      return
    }
    this.enabled = true

    if (this.orientationSupport) {
      this.portrait = false
      window.addEventListener('deviceorientation', this.onDeviceOrientation)
      this.detectionTimer = setTimeout(this.onOrientationTimer, this.supportDelay)
    } else if (this.motionSupport) {
      this.portrait = false
      window.addEventListener('devicemotion', this.onDeviceMotion)
      this.detectionTimer = setTimeout(this.onMotionTimer, this.supportDelay)
    } else {
      this.calibrationX = 0
      this.calibrationY = 0
      this.portrait = false
      window.addEventListener('mousemove', this.onMouseMove)
      this.doReadyCallback()
    }

    window.addEventListener('resize', this.onWindowResize)
    this.raf = rqAnFr(this.onAnimationFrame)
  }

  disable() {
    if (!this.enabled) {
      return
    }
    this.enabled = false

    if (this.orientationSupport) {
      window.removeEventListener('deviceorientation', this.onDeviceOrientation)
    } else if (this.motionSupport) {
      window.removeEventListener('devicemotion', this.onDeviceMotion)
    } else {
      window.removeEventListener('mousemove', this.onMouseMove)
    }

    window.removeEventListener('resize', this.onWindowResize)
    rqAnFr.cancel(this.raf)
  }

  calibrate(x, y) {
    this.calibrateX = x === undefined ? this.calibrateX : x
    this.calibrateY = y === undefined ? this.calibrateY : y
  }

  invert(x, y) {
    this.invertX = x === undefined ? this.invertX : x
    this.invertY = y === undefined ? this.invertY : y
  }

  friction(x, y) {
    this.frictionX = x === undefined ? this.frictionX : x
    this.frictionY = y === undefined ? this.frictionY : y
  }

  scalar(x, y) {
    this.scalarX = x === undefined ? this.scalarX : x
    this.scalarY = y === undefined ? this.scalarY : y
  }

  limit(x, y) {
    this.limitX = x === undefined ? this.limitX : x
    this.limitY = y === undefined ? this.limitY : y
  }

  origin(x, y) {
    this.originX = x === undefined ? this.originX : x
    this.originY = y === undefined ? this.originY : y
  }

  setInputElement(element) {
    this.inputElement = element
    this.updateDimensions()
  }

  setPosition(element, x, y) {
    x = x.toFixed(this.precision) + 'px'
    y = y.toFixed(this.precision) + 'px'
    if (this.transform3DSupport) {
      helpers.css(element, 'transform', 'translate3d(' + x + ',' + y + ',0)')
    } else if (this.transform2DSupport) {
      helpers.css(element, 'transform', 'translate(' + x + ',' + y + ')')
    } else {
      element.style.left = x
      element.style.top = y
    }
  }

  onOrientationTimer() {
    if (this.orientationSupport && this.orientationStatus === 0) {
      this.disable()
      this.orientationSupport = false
      this.enable()
    } else {
      this.doReadyCallback()
    }
  }

  onMotionTimer() {
    if (this.motionSupport && this.motionStatus === 0) {
      this.disable()
      this.motionSupport = false
      this.enable()
    } else {
      this.doReadyCallback()
    }
  }

  onCalibrationTimer() {
    this.calibrationFlag = true
  }

  onWindowResize() {
    this.updateDimensions()
  }

  onAnimationFrame() {
    this.updateBounds()
    let calibratedInputX = this.inputX - this.calibrationX,
        calibratedInputY = this.inputY - this.calibrationY
    if ((Math.abs(calibratedInputX) > this.calibrationThreshold) || (Math.abs(calibratedInputY) > this.calibrationThreshold)) {
      this.queueCalibration(0)
    }
    if (this.portrait) {
      this.motionX = this.calibrateX ? calibratedInputY : this.inputY
      this.motionY = this.calibrateY ? calibratedInputX : this.inputX
    } else {
      this.motionX = this.calibrateX ? calibratedInputX : this.inputX
      this.motionY = this.calibrateY ? calibratedInputY : this.inputY
    }
    this.motionX *= this.elementWidth * (this.scalarX / 100)
    this.motionY *= this.elementHeight * (this.scalarY / 100)
    if (!isNaN(parseFloat(this.limitX))) {
      this.motionX = helpers.clamp(this.motionX, -this.limitX, this.limitX)
    }
    if (!isNaN(parseFloat(this.limitY))) {
      this.motionY = helpers.clamp(this.motionY, -this.limitY, this.limitY)
    }
    this.velocityX += (this.motionX - this.velocityX) * this.frictionX
    this.velocityY += (this.motionY - this.velocityY) * this.frictionY
    for (let index = 0; index < this.layers.length; index++) {
      let layer = this.layers[index],
          depthX = this.depthsX[index],
          depthY = this.depthsY[index],
          xOffset = this.velocityX * (depthX * (this.invertX ? -1 : 1)),
          yOffset = this.velocityY * (depthY * (this.invertY ? -1 : 1))
      this.setPosition(layer, xOffset, yOffset)
    }
    this.raf = rqAnFr(this.onAnimationFrame)
  }

  rotate(beta, gamma){
    // Extract Rotation
    let x = (beta || 0) / MAGIC_NUMBER, //  -90 :: 90
        y = (gamma || 0) / MAGIC_NUMBER // -180 :: 180

    // Detect Orientation Change
    let portrait = this.windowHeight > this.windowWidth
    if (this.portrait !== portrait) {
      this.portrait = portrait
      this.calibrationFlag = true
    }

    if (this.calibrationFlag) {
      this.calibrationFlag = false
      this.calibrationX = x
      this.calibrationY = y
    }

    this.inputX = x
    this.inputY = y
  }

  onDeviceOrientation(event) {
    let beta = event.beta
    let gamma = event.gamma
    if (beta !== null && gamma !== null) {
      this.orientationStatus = 1
      this.rotate(beta, gamma)
    }
  }

  onDeviceMotion(event) {
    let beta = event.rotationRate.beta
    let gamma = event.rotationRate.gamma
    if (beta !== null && gamma !== null) {
      this.motionStatus = 1
      this.rotate(beta, gamma)
    }
  }

  onMouseMove(event) {
    let clientX = event.clientX,
        clientY = event.clientY

    // reset input to center if hoverOnly is set and we're not hovering the element
    if(this.hoverOnly &&
      ((clientX < this.elementPositionX || clientX > this.elementPositionX + this.elementWidth) ||
      (clientY < this.elementPositionY || clientY > this.elementPositionY + this.elementHeight))) {
        this.inputX = 0
        this.inputY = 0
        return
      }

    if (this.relativeInput) {
      // Clip mouse coordinates inside element bounds.
      if (this.clipRelativeInput) {
        clientX = Math.max(clientX, this.elementPositionX)
        clientX = Math.min(clientX, this.elementPositionX + this.elementWidth)
        clientY = Math.max(clientY, this.elementPositionY)
        clientY = Math.min(clientY, this.elementPositionY + this.elementHeight)
      }
      // Calculate input relative to the element.
      if(this.elementRangeX && this.elementRangeY) {
        this.inputX = (clientX - this.elementPositionX - this.elementCenterX) / this.elementRangeX
        this.inputY = (clientY - this.elementPositionY - this.elementCenterY) / this.elementRangeY
      }
    } else {
      // Calculate input relative to the window.
      if(this.windowRadiusX && this.windowRadiusY) {
        this.inputX = (clientX - this.windowCenterX) / this.windowRadiusX
        this.inputY = (clientY - this.windowCenterY) / this.windowRadiusY
      }
    }
  }

  destroy() {
    this.disable()

    clearTimeout(this.calibrationTimer)
    clearTimeout(this.detectionTimer)

    this.element.removeAttribute('style')
    for (let index = 0; index < this.layers.length; index++) {
      this.layers[index].removeAttribute('style')
    }

    delete this.element
    delete this.layers
  }

  version() {
    return '3.1.0'
  }

}

module.exports = Parallax


/***/ }),

/***/ "./node_modules/performance-now/lib/performance-now.js":
/*!*************************************************************!*\
  !*** ./node_modules/performance-now/lib/performance-now.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var process = __webpack_require__(/*! process/browser.js */ "./node_modules/process/browser.js");
// Generated by CoffeeScript 1.12.2
(function() {
  var getNanoSeconds, hrtime, loadTime, moduleLoadTime, nodeLoadTime, upTime;

  if ((typeof performance !== "undefined" && performance !== null) && performance.now) {
    module.exports = function() {
      return performance.now();
    };
  } else if ((typeof process !== "undefined" && process !== null) && process.hrtime) {
    module.exports = function() {
      return (getNanoSeconds() - nodeLoadTime) / 1e6;
    };
    hrtime = process.hrtime;
    getNanoSeconds = function() {
      var hr;
      hr = hrtime();
      return hr[0] * 1e9 + hr[1];
    };
    moduleLoadTime = getNanoSeconds();
    upTime = process.uptime() * 1e9;
    nodeLoadTime = moduleLoadTime - upTime;
  } else if (Date.now) {
    module.exports = function() {
      return Date.now() - loadTime;
    };
    loadTime = Date.now();
  } else {
    module.exports = function() {
      return new Date().getTime() - loadTime;
    };
    loadTime = new Date().getTime();
  }

}).call(this);

//# sourceMappingURL=performance-now.js.map


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ ((module) => {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/raf/index.js":
/*!***********************************!*\
  !*** ./node_modules/raf/index.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var now = __webpack_require__(/*! performance-now */ "./node_modules/performance-now/lib/performance-now.js")
  , root = typeof window === 'undefined' ? __webpack_require__.g : window
  , vendors = ['moz', 'webkit']
  , suffix = 'AnimationFrame'
  , raf = root['request' + suffix]
  , caf = root['cancel' + suffix] || root['cancelRequest' + suffix]

for(var i = 0; !raf && i < vendors.length; i++) {
  raf = root[vendors[i] + 'Request' + suffix]
  caf = root[vendors[i] + 'Cancel' + suffix]
      || root[vendors[i] + 'CancelRequest' + suffix]
}

// Some versions of FF have rAF but not cAF
if(!raf || !caf) {
  var last = 0
    , id = 0
    , queue = []
    , frameDuration = 1000 / 60

  raf = function(callback) {
    if(queue.length === 0) {
      var _now = now()
        , next = Math.max(0, frameDuration - (_now - last))
      last = next + _now
      setTimeout(function() {
        var cp = queue.slice(0)
        // Clear queue here to prevent
        // callbacks from appending listeners
        // to the current frame's queue
        queue.length = 0
        for(var i = 0; i < cp.length; i++) {
          if(!cp[i].cancelled) {
            try{
              cp[i].callback(last)
            } catch(e) {
              setTimeout(function() { throw e }, 0)
            }
          }
        }
      }, Math.round(next))
    }
    queue.push({
      handle: ++id,
      callback: callback,
      cancelled: false
    })
    return id
  }

  caf = function(handle) {
    for(var i = 0; i < queue.length; i++) {
      if(queue[i].handle === handle) {
        queue[i].cancelled = true
      }
    }
  }
}

module.exports = function(fn) {
  // Wrap in a new function to prevent
  // `cancel` potentially being assigned
  // to the native rAF function
  return raf.call(root, fn)
}
module.exports.cancel = function() {
  caf.apply(root, arguments)
}
module.exports.polyfill = function(object) {
  if (!object) {
    object = root;
  }
  object.requestAnimationFrame = raf
  object.cancelAnimationFrame = caf
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/site": 0,
/******/ 			"css/tailwind": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkthemes"] = self["webpackChunkthemes"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/tailwind","css/main"], () => (__webpack_require__("./assets/js/site.js")))
/******/ 	__webpack_require__.O(undefined, ["css/tailwind","css/main"], () => (__webpack_require__("./assets/css/main.css")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/tailwind","css/main"], () => (__webpack_require__("./assets/css/tailwind.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;