webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/autobind-decorator/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/autobind-decorator/lib/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @copyright 2015, Andrey Popp <8mayday@gmail.com>
 *
 * The decorator may be used on classes or methods
 * ```
 * @autobind
 * class FullBound {}
 *
 * class PartBound {
 *   @autobind
 *   method () {}
 * }
 * ```
 */


Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = autobind;

function autobind() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 1) {
    return boundClass.apply(undefined, args);
  } else {
    return boundMethod.apply(undefined, args);
  }
}

/**
 * Use boundMethod to bind all methods on the target.prototype
 */
function boundClass(target) {
  // (Using reflect to get all keys including symbols)
  var keys = undefined;
  // Use Reflect if exists
  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
    keys = Reflect.ownKeys(target.prototype);
  } else {
    keys = Object.getOwnPropertyNames(target.prototype);
    // use symbols if support is provided
    if (typeof Object.getOwnPropertySymbols === 'function') {
      keys = keys.concat(Object.getOwnPropertySymbols(target.prototype));
    }
  }

  keys.forEach(function (key) {
    // Ignore special case target method
    if (key === 'constructor') {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key);

    // Only methods need binding
    if (typeof descriptor.value === 'function') {
      Object.defineProperty(target.prototype, key, boundMethod(target, key, descriptor));
    }
  });
  return target;
}

/**
 * Return a descriptor removing the value and returning a getter
 * The getter will return a .bind version of the function
 * and memoize the result against a symbol on the instance
 */
function boundMethod(target, key, descriptor) {
  var fn = descriptor.value;

  if (typeof fn !== 'function') {
    throw new Error('@autobind decorator can only be applied to methods not: ' + typeof fn);
  }

  // In IE11 calling Object.defineProperty has a side-effect of evaluating the
  // getter for the property which is being replaced. This causes infinite
  // recursion and an "Out of stack space" error.
  var definingProperty = false;

  return {
    configurable: true,
    get: function get() {
      if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
        return fn;
      }

      var boundFn = fn.bind(this);
      definingProperty = true;
      Object.defineProperty(this, key, {
        value: boundFn,
        configurable: true,
        writable: true
      });
      definingProperty = false;
      return boundFn;
    }
  };
}
module.exports = exports['default'];


/***/ }),

/***/ "./node_modules/react-input-range/lib/js/index.js":
/*!********************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inputRange = __webpack_require__(/*! ./input-range/input-range */ "./node_modules/react-input-range/lib/js/input-range/input-range.js");

var _inputRange2 = _interopRequireDefault(_inputRange);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore
 * @typedef {Object} ClientRect
 * @property {number} height
 * @property {number} left
 * @property {number} top
 * @property {number} width
 */

/**
 * @typedef {Object} InputRangeClassNames
 * @property {string} activeTrack
 * @property {string} disabledInputRange
 * @property {string} inputRange
 * @property {string} labelContainer
 * @property {string} maxLabel
 * @property {string} minLabel
 * @property {string} slider
 * @property {string} sliderContainer
 * @property {string} track
 * @property {string} valueLabel
 */

/**
 * @typedef {Function} LabelFormatter
 * @param {number} value
 * @param {string} type
 * @return {string}
 */

/**
 * @ignore
 * @typedef {Object} Point
 * @property {number} x
 * @property {number} y
 */

/**
 * @typedef {Object} Range
 * @property {number} min - Min value
 * @property {number} max - Max value
 */

exports.default = _inputRange2.default;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/input-range/default-class-names.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/input-range/default-class-names.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Default CSS class names
 * @ignore
 * @type {InputRangeClassNames}
 */
var DEFAULT_CLASS_NAMES = {
  activeTrack: 'input-range__track input-range__track--active',
  disabledInputRange: 'input-range input-range--disabled',
  inputRange: 'input-range',
  labelContainer: 'input-range__label-container',
  maxLabel: 'input-range__label input-range__label--max',
  minLabel: 'input-range__label input-range__label--min',
  slider: 'input-range__slider',
  sliderContainer: 'input-range__slider-container',
  track: 'input-range__track input-range__track--background',
  valueLabel: 'input-range__label input-range__label--value'
};

exports.default = DEFAULT_CLASS_NAMES;
module.exports = exports['default'];
//# sourceMappingURL=default-class-names.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/input-range/input-range.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/input-range/input-range.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autobindDecorator = __webpack_require__(/*! autobind-decorator */ "./node_modules/autobind-decorator/lib/index.js");

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _valueTransformer = __webpack_require__(/*! ./value-transformer */ "./node_modules/react-input-range/lib/js/input-range/value-transformer.js");

var valueTransformer = _interopRequireWildcard(_valueTransformer);

var _defaultClassNames = __webpack_require__(/*! ./default-class-names */ "./node_modules/react-input-range/lib/js/input-range/default-class-names.js");

var _defaultClassNames2 = _interopRequireDefault(_defaultClassNames);

var _label = __webpack_require__(/*! ./label */ "./node_modules/react-input-range/lib/js/input-range/label.js");

var _label2 = _interopRequireDefault(_label);

var _rangePropType = __webpack_require__(/*! ./range-prop-type */ "./node_modules/react-input-range/lib/js/input-range/range-prop-type.js");

var _rangePropType2 = _interopRequireDefault(_rangePropType);

var _valuePropType = __webpack_require__(/*! ./value-prop-type */ "./node_modules/react-input-range/lib/js/input-range/value-prop-type.js");

var _valuePropType2 = _interopRequireDefault(_valuePropType);

var _slider = __webpack_require__(/*! ./slider */ "./node_modules/react-input-range/lib/js/input-range/slider.js");

var _slider2 = _interopRequireDefault(_slider);

var _track = __webpack_require__(/*! ./track */ "./node_modules/react-input-range/lib/js/input-range/track.js");

var _track2 = _interopRequireDefault(_track);

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-input-range/lib/js/utils/index.js");

var _keyCodes = __webpack_require__(/*! ./key-codes */ "./node_modules/react-input-range/lib/js/input-range/key-codes.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/**
 * A React component that allows users to input numeric values within a range
 * by dragging its sliders.
 */
var InputRange = (_class = function (_React$Component) {
  _inherits(InputRange, _React$Component);

  _createClass(InputRange, null, [{
    key: 'propTypes',

    /**
     * @ignore
     * @override
     * @return {Object}
     */
    get: function get() {
      return {
        allowSameValues: _propTypes2.default.bool,
        ariaLabelledby: _propTypes2.default.string,
        ariaControls: _propTypes2.default.string,
        classNames: _propTypes2.default.objectOf(_propTypes2.default.string),
        disabled: _propTypes2.default.bool,
        draggableTrack: _propTypes2.default.bool,
        formatLabel: _propTypes2.default.func,
        maxValue: _rangePropType2.default,
        minValue: _rangePropType2.default,
        name: _propTypes2.default.string,
        onChangeStart: _propTypes2.default.func,
        onChange: _propTypes2.default.func.isRequired,
        onChangeComplete: _propTypes2.default.func,
        step: _propTypes2.default.number,
        value: _valuePropType2.default
      };
    }

    /**
     * @ignore
     * @override
     * @return {Object}
     */

  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        allowSameValues: false,
        classNames: _defaultClassNames2.default,
        disabled: false,
        maxValue: 10,
        minValue: 0,
        step: 1
      };
    }

    /**
     * @param {Object} props
     * @param {boolean} [props.allowSameValues]
     * @param {string} [props.ariaLabelledby]
     * @param {string} [props.ariaControls]
     * @param {InputRangeClassNames} [props.classNames]
     * @param {boolean} [props.disabled = false]
     * @param {Function} [props.formatLabel]
     * @param {number|Range} [props.maxValue = 10]
     * @param {number|Range} [props.minValue = 0]
     * @param {string} [props.name]
     * @param {string} props.onChange
     * @param {Function} [props.onChangeComplete]
     * @param {Function} [props.onChangeStart]
     * @param {number} [props.step = 1]
     * @param {number|Range} props.value
     */

  }]);

  function InputRange(props) {
    _classCallCheck(this, InputRange);

    /**
     * @private
     * @type {?number}
     */
    var _this = _possibleConstructorReturn(this, (InputRange.__proto__ || Object.getPrototypeOf(InputRange)).call(this, props));

    _this.startValue = null;

    /**
     * @private
     * @type {?Component}
     */
    _this.node = null;

    /**
     * @private
     * @type {?Component}
     */
    _this.trackNode = null;

    /**
     * @private
     * @type {bool}
     */
    _this.isSliderDragging = false;

    /**
     * @private
     * @type {?string}
     */
    _this.lastKeyMoved = null;
    return _this;
  }

  /**
   * @ignore
   * @override
   * @return {void}
   */


  _createClass(InputRange, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeDocumentMouseUpListener();
      this.removeDocumentTouchEndListener();
    }

    /**
     * Return the CSS class name of the component
     * @private
     * @return {string}
     */

  }, {
    key: 'getComponentClassName',
    value: function getComponentClassName() {
      if (!this.props.disabled) {
        return this.props.classNames.inputRange;
      }

      return this.props.classNames.disabledInputRange;
    }

    /**
     * Return the bounding rect of the track
     * @private
     * @return {ClientRect}
     */

  }, {
    key: 'getTrackClientRect',
    value: function getTrackClientRect() {
      return this.trackNode.getClientRect();
    }

    /**
     * Return the slider key closest to a point
     * @private
     * @param {Point} position
     * @return {string}
     */

  }, {
    key: 'getKeyByPosition',
    value: function getKeyByPosition(position) {
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      var positions = valueTransformer.getPositionsFromValues(values, this.props.minValue, this.props.maxValue, this.getTrackClientRect());

      if (this.isMultiValue()) {
        var distanceToMin = (0, _utils.distanceTo)(position, positions.min);
        var distanceToMax = (0, _utils.distanceTo)(position, positions.max);

        if (distanceToMin < distanceToMax) {
          return 'min';
        }
      }

      return 'max';
    }

    /**
     * Return all the slider keys
     * @private
     * @return {string[]}
     */

  }, {
    key: 'getKeys',
    value: function getKeys() {
      if (this.isMultiValue()) {
        return ['min', 'max'];
      }

      return ['max'];
    }

    /**
     * Return true if the difference between the new and the current value is
     * greater or equal to the step amount of the component
     * @private
     * @param {Range} values
     * @return {boolean}
     */

  }, {
    key: 'hasStepDifference',
    value: function hasStepDifference(values) {
      var currentValues = valueTransformer.getValueFromProps(this.props, this.isMultiValue());

      return (0, _utils.length)(values.min, currentValues.min) >= this.props.step || (0, _utils.length)(values.max, currentValues.max) >= this.props.step;
    }

    /**
     * Return true if the component accepts a min and max value
     * @private
     * @return {boolean}
     */

  }, {
    key: 'isMultiValue',
    value: function isMultiValue() {
      return (0, _utils.isObject)(this.props.value);
    }

    /**
     * Return true if the range is within the max and min value of the component
     * @private
     * @param {Range} values
     * @return {boolean}
     */

  }, {
    key: 'isWithinRange',
    value: function isWithinRange(values) {
      if (this.isMultiValue()) {
        return values.min >= this.props.minValue && values.max <= this.props.maxValue && this.props.allowSameValues ? values.min <= values.max : values.min < values.max;
      }

      return values.max >= this.props.minValue && values.max <= this.props.maxValue;
    }

    /**
     * Return true if the new value should trigger a render
     * @private
     * @param {Range} values
     * @return {boolean}
     */

  }, {
    key: 'shouldUpdate',
    value: function shouldUpdate(values) {
      return this.isWithinRange(values) && this.hasStepDifference(values);
    }

    /**
     * Update the position of a slider
     * @private
     * @param {string} key
     * @param {Point} position
     * @return {void}
     */

  }, {
    key: 'updatePosition',
    value: function updatePosition(key, position) {
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      var positions = valueTransformer.getPositionsFromValues(values, this.props.minValue, this.props.maxValue, this.getTrackClientRect());

      positions[key] = position;
      this.lastKeyMoved = key;

      this.updatePositions(positions);
    }

    /**
     * Update the positions of multiple sliders
     * @private
     * @param {Object} positions
     * @param {Point} positions.min
     * @param {Point} positions.max
     * @return {void}
     */

  }, {
    key: 'updatePositions',
    value: function updatePositions(positions) {
      var values = {
        min: valueTransformer.getValueFromPosition(positions.min, this.props.minValue, this.props.maxValue, this.getTrackClientRect()),
        max: valueTransformer.getValueFromPosition(positions.max, this.props.minValue, this.props.maxValue, this.getTrackClientRect())
      };

      var transformedValues = {
        min: valueTransformer.getStepValueFromValue(values.min, this.props.step),
        max: valueTransformer.getStepValueFromValue(values.max, this.props.step)
      };

      this.updateValues(transformedValues);
    }

    /**
     * Update the value of a slider
     * @private
     * @param {string} key
     * @param {number} value
     * @return {void}
     */

  }, {
    key: 'updateValue',
    value: function updateValue(key, value) {
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());

      values[key] = value;

      this.updateValues(values);
    }

    /**
     * Update the values of multiple sliders
     * @private
     * @param {Range|number} values
     * @return {void}
     */

  }, {
    key: 'updateValues',
    value: function updateValues(values) {
      if (!this.shouldUpdate(values)) {
        return;
      }

      this.props.onChange(this.isMultiValue() ? values : values.max);
    }

    /**
     * Increment the value of a slider by key name
     * @private
     * @param {string} key
     * @return {void}
     */

  }, {
    key: 'incrementValue',
    value: function incrementValue(key) {
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      var value = values[key] + this.props.step;

      this.updateValue(key, value);
    }

    /**
     * Decrement the value of a slider by key name
     * @private
     * @param {string} key
     * @return {void}
     */

  }, {
    key: 'decrementValue',
    value: function decrementValue(key) {
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      var value = values[key] - this.props.step;

      this.updateValue(key, value);
    }

    /**
     * Listen to mouseup event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentMouseUpListener',
    value: function addDocumentMouseUpListener() {
      this.removeDocumentMouseUpListener();
      this.node.ownerDocument.addEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * Listen to touchend event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentTouchEndListener',
    value: function addDocumentTouchEndListener() {
      this.removeDocumentTouchEndListener();
      this.node.ownerDocument.addEventListener('touchend', this.handleTouchEnd);
    }

    /**
     * Stop listening to mouseup event
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentMouseUpListener',
    value: function removeDocumentMouseUpListener() {
      this.node.ownerDocument.removeEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * Stop listening to touchend event
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentTouchEndListener',
    value: function removeDocumentTouchEndListener() {
      this.node.ownerDocument.removeEventListener('touchend', this.handleTouchEnd);
    }

    /**
     * Handle any "mousemove" event received by the slider
     * @private
     * @param {SyntheticEvent} event
     * @param {string} key
     * @return {void}
     */

  }, {
    key: 'handleSliderDrag',
    value: function handleSliderDrag(event, key) {
      var _this2 = this;

      if (this.props.disabled) {
        return;
      }

      var position = valueTransformer.getPositionFromEvent(event, this.getTrackClientRect());
      this.isSliderDragging = true;
      requestAnimationFrame(function () {
        return _this2.updatePosition(key, position);
      });
    }

    /**
     * Handle any "mousemove" event received by the track
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleTrackDrag',
    value: function handleTrackDrag(event, prevEvent) {
      if (this.props.disabled || !this.props.draggableTrack || this.isSliderDragging) {
        return;
      }

      var _props = this.props,
          maxValue = _props.maxValue,
          minValue = _props.minValue,
          _props$value = _props.value,
          max = _props$value.max,
          min = _props$value.min;


      var position = valueTransformer.getPositionFromEvent(event, this.getTrackClientRect());
      var value = valueTransformer.getValueFromPosition(position, minValue, maxValue, this.getTrackClientRect());
      var stepValue = valueTransformer.getStepValueFromValue(value, this.props.step);

      var prevPosition = valueTransformer.getPositionFromEvent(prevEvent, this.getTrackClientRect());
      var prevValue = valueTransformer.getValueFromPosition(prevPosition, minValue, maxValue, this.getTrackClientRect());
      var prevStepValue = valueTransformer.getStepValueFromValue(prevValue, this.props.step);

      var offset = prevStepValue - stepValue;

      var transformedValues = {
        min: min - offset,
        max: max - offset
      };

      this.updateValues(transformedValues);
    }

    /**
     * Handle any "keydown" event received by the slider
     * @private
     * @param {SyntheticEvent} event
     * @param {string} key
     * @return {void}
     */

  }, {
    key: 'handleSliderKeyDown',
    value: function handleSliderKeyDown(event, key) {
      if (this.props.disabled) {
        return;
      }

      switch (event.keyCode) {
        case _keyCodes.LEFT_ARROW:
        case _keyCodes.DOWN_ARROW:
          event.preventDefault();
          this.decrementValue(key);
          break;

        case _keyCodes.RIGHT_ARROW:
        case _keyCodes.UP_ARROW:
          event.preventDefault();
          this.incrementValue(key);
          break;

        default:
          break;
      }
    }

    /**
     * Handle any "mousedown" event received by the track
     * @private
     * @param {SyntheticEvent} event
     * @param {Point} position
     * @return {void}
     */

  }, {
    key: 'handleTrackMouseDown',
    value: function handleTrackMouseDown(event, position) {
      if (this.props.disabled) {
        return;
      }

      var _props2 = this.props,
          maxValue = _props2.maxValue,
          minValue = _props2.minValue,
          _props2$value = _props2.value,
          max = _props2$value.max,
          min = _props2$value.min;


      event.preventDefault();

      var value = valueTransformer.getValueFromPosition(position, minValue, maxValue, this.getTrackClientRect());
      var stepValue = valueTransformer.getStepValueFromValue(value, this.props.step);

      if (!this.props.draggableTrack || stepValue > max || stepValue < min) {
        this.updatePosition(this.getKeyByPosition(position), position);
      }
    }

    /**
     * Handle the start of any mouse/touch event
     * @private
     * @return {void}
     */

  }, {
    key: 'handleInteractionStart',
    value: function handleInteractionStart() {
      if (this.props.onChangeStart) {
        this.props.onChangeStart(this.props.value);
      }

      if (this.props.onChangeComplete && !(0, _utils.isDefined)(this.startValue)) {
        this.startValue = this.props.value;
      }
    }

    /**
     * Handle the end of any mouse/touch event
     * @private
     * @return {void}
     */

  }, {
    key: 'handleInteractionEnd',
    value: function handleInteractionEnd() {
      if (this.isSliderDragging) {
        this.isSliderDragging = false;
      }

      if (!this.props.onChangeComplete || !(0, _utils.isDefined)(this.startValue)) {
        return;
      }

      if (this.startValue !== this.props.value) {
        this.props.onChangeComplete(this.props.value);
      }

      this.startValue = null;
    }

    /**
     * Handle any "keydown" event received by the component
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      this.handleInteractionStart(event);
    }

    /**
     * Handle any "keyup" event received by the component
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(event) {
      this.handleInteractionEnd(event);
    }

    /**
     * Handle any "mousedown" event received by the component
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(event) {
      this.handleInteractionStart(event);
      this.addDocumentMouseUpListener();
    }

    /**
     * Handle any "mouseup" event received by the component
     * @private
     * @param {SyntheticEvent} event
     */

  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp(event) {
      this.handleInteractionEnd(event);
      this.removeDocumentMouseUpListener();
    }

    /**
     * Handle any "touchstart" event received by the component
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart(event) {
      this.handleInteractionStart(event);
      this.addDocumentTouchEndListener();
    }

    /**
     * Handle any "touchend" event received by the component
     * @private
     * @param {SyntheticEvent} event
     */

  }, {
    key: 'handleTouchEnd',
    value: function handleTouchEnd(event) {
      this.handleInteractionEnd(event);
      this.removeDocumentTouchEndListener();
    }

    /**
     * Return JSX of sliders
     * @private
     * @return {JSX.Element}
     */

  }, {
    key: 'renderSliders',
    value: function renderSliders() {
      var _this3 = this;

      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      var percentages = valueTransformer.getPercentagesFromValues(values, this.props.minValue, this.props.maxValue);
      var keys = this.props.allowSameValues && this.lastKeyMoved === 'min' ? this.getKeys().reverse() : this.getKeys();

      return keys.map(function (key) {
        var value = values[key];
        var percentage = percentages[key];

        var _props3 = _this3.props,
            maxValue = _props3.maxValue,
            minValue = _props3.minValue;


        if (key === 'min') {
          maxValue = values.max;
        } else {
          minValue = values.min;
        }

        var slider = _react2.default.createElement(_slider2.default, {
          ariaLabelledby: _this3.props.ariaLabelledby,
          ariaControls: _this3.props.ariaControls,
          classNames: _this3.props.classNames,
          formatLabel: _this3.props.formatLabel,
          key: key,
          maxValue: maxValue,
          minValue: minValue,
          onSliderDrag: _this3.handleSliderDrag,
          onSliderKeyDown: _this3.handleSliderKeyDown,
          percentage: percentage,
          type: key,
          value: value });

        return slider;
      });
    }

    /**
     * Return JSX of hidden inputs
     * @private
     * @return {JSX.Element}
     */

  }, {
    key: 'renderHiddenInputs',
    value: function renderHiddenInputs() {
      var _this4 = this;

      if (!this.props.name) {
        return [];
      }

      var isMultiValue = this.isMultiValue();
      var values = valueTransformer.getValueFromProps(this.props, isMultiValue);

      return this.getKeys().map(function (key) {
        var value = values[key];
        var name = isMultiValue ? '' + _this4.props.name + (0, _utils.captialize)(key) : _this4.props.name;

        return _react2.default.createElement('input', { key: key, type: 'hidden', name: name, value: value });
      });
    }

    /**
     * @ignore
     * @override
     * @return {JSX.Element}
     */

  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var componentClassName = this.getComponentClassName();
      var values = valueTransformer.getValueFromProps(this.props, this.isMultiValue());
      var percentages = valueTransformer.getPercentagesFromValues(values, this.props.minValue, this.props.maxValue);

      return _react2.default.createElement(
        'div',
        {
          'aria-disabled': this.props.disabled,
          ref: function ref(node) {
            _this5.node = node;
          },
          className: componentClassName,
          onKeyDown: this.handleKeyDown,
          onKeyUp: this.handleKeyUp,
          onMouseDown: this.handleMouseDown,
          onTouchStart: this.handleTouchStart },
        _react2.default.createElement(
          _label2.default,
          {
            classNames: this.props.classNames,
            formatLabel: this.props.formatLabel,
            type: 'min' },
          this.props.minValue
        ),
        _react2.default.createElement(
          _track2.default,
          {
            classNames: this.props.classNames,
            draggableTrack: this.props.draggableTrack,
            ref: function ref(trackNode) {
              _this5.trackNode = trackNode;
            },
            percentages: percentages,
            onTrackDrag: this.handleTrackDrag,
            onTrackMouseDown: this.handleTrackMouseDown },
          this.renderSliders()
        ),
        _react2.default.createElement(
          _label2.default,
          {
            classNames: this.props.classNames,
            formatLabel: this.props.formatLabel,
            type: 'max' },
          this.props.maxValue
        ),
        this.renderHiddenInputs()
      );
    }
  }]);

  return InputRange;
}(_react2.default.Component), (_applyDecoratedDescriptor(_class.prototype, 'handleSliderDrag', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleSliderDrag'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTrackDrag', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTrackDrag'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleSliderKeyDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleSliderKeyDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTrackMouseDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTrackMouseDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleInteractionStart', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleInteractionStart'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleInteractionEnd', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleInteractionEnd'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleKeyDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleKeyDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleKeyUp', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleKeyUp'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMouseDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMouseUp', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseUp'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTouchStart', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTouchStart'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTouchEnd', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTouchEnd'), _class.prototype)), _class);
exports.default = InputRange;
module.exports = exports['default'];
//# sourceMappingURL=input-range.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/input-range/key-codes.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/input-range/key-codes.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** @ignore */
var DOWN_ARROW = exports.DOWN_ARROW = 40;

/** @ignore */
var LEFT_ARROW = exports.LEFT_ARROW = 37;

/** @ignore */
var RIGHT_ARROW = exports.RIGHT_ARROW = 39;

/** @ignore */
var UP_ARROW = exports.UP_ARROW = 38;
//# sourceMappingURL=key-codes.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/input-range/label.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/input-range/label.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Label;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @ignore
 * @param {Object} props
 * @param {InputRangeClassNames} props.classNames
 * @param {Function} props.formatLabel
 * @param {string} props.type
 */
function Label(props) {
  var labelValue = props.formatLabel ? props.formatLabel(props.children, props.type) : props.children;

  return _react2.default.createElement(
    'span',
    { className: props.classNames[props.type + 'Label'] },
    _react2.default.createElement(
      'span',
      { className: props.classNames.labelContainer },
      labelValue
    )
  );
}

/**
 * @type {Object}
 * @property {Function} children
 * @property {Function} classNames
 * @property {Function} formatLabel
 * @property {Function} type
 */
Label.propTypes = {
  children: _propTypes2.default.node.isRequired,
  classNames: _propTypes2.default.objectOf(_propTypes2.default.string).isRequired,
  formatLabel: _propTypes2.default.func,
  type: _propTypes2.default.string.isRequired
};
module.exports = exports['default'];
//# sourceMappingURL=label.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/input-range/range-prop-type.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/input-range/range-prop-type.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rangePropType;

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-input-range/lib/js/utils/index.js");

/**
 * @ignore
 * @param {Object} props - React component props
 * @return {?Error} Return Error if validation fails
 */
function rangePropType(props) {
  var maxValue = props.maxValue,
      minValue = props.minValue;


  if (!(0, _utils.isNumber)(minValue) || !(0, _utils.isNumber)(maxValue)) {
    return new Error('"minValue" and "maxValue" must be a number');
  }

  if (minValue >= maxValue) {
    return new Error('"minValue" must be smaller than "maxValue"');
  }
}
module.exports = exports['default'];
//# sourceMappingURL=range-prop-type.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/input-range/slider.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/input-range/slider.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autobindDecorator = __webpack_require__(/*! autobind-decorator */ "./node_modules/autobind-decorator/lib/index.js");

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _label = __webpack_require__(/*! ./label */ "./node_modules/react-input-range/lib/js/input-range/label.js");

var _label2 = _interopRequireDefault(_label);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/**
 * @ignore
 */
var Slider = (_class = function (_React$Component) {
  _inherits(Slider, _React$Component);

  _createClass(Slider, null, [{
    key: 'propTypes',

    /**
     * Accepted propTypes of Slider
     * @override
     * @return {Object}
     * @property {Function} ariaLabelledby
     * @property {Function} ariaControls
     * @property {Function} className
     * @property {Function} formatLabel
     * @property {Function} maxValue
     * @property {Function} minValue
     * @property {Function} onSliderDrag
     * @property {Function} onSliderKeyDown
     * @property {Function} percentage
     * @property {Function} type
     * @property {Function} value
     */
    get: function get() {
      return {
        ariaLabelledby: _propTypes2.default.string,
        ariaControls: _propTypes2.default.string,
        classNames: _propTypes2.default.objectOf(_propTypes2.default.string).isRequired,
        formatLabel: _propTypes2.default.func,
        maxValue: _propTypes2.default.number,
        minValue: _propTypes2.default.number,
        onSliderDrag: _propTypes2.default.func.isRequired,
        onSliderKeyDown: _propTypes2.default.func.isRequired,
        percentage: _propTypes2.default.number.isRequired,
        type: _propTypes2.default.string.isRequired,
        value: _propTypes2.default.number.isRequired
      };
    }

    /**
     * @param {Object} props
     * @param {string} [props.ariaLabelledby]
     * @param {string} [props.ariaControls]
     * @param {InputRangeClassNames} props.classNames
     * @param {Function} [props.formatLabel]
     * @param {number} [props.maxValue]
     * @param {number} [props.minValue]
     * @param {Function} props.onSliderKeyDown
     * @param {Function} props.onSliderDrag
     * @param {number} props.percentage
     * @param {number} props.type
     * @param {number} props.value
     */

  }]);

  function Slider(props) {
    _classCallCheck(this, Slider);

    /**
     * @private
     * @type {?Component}
     */
    var _this = _possibleConstructorReturn(this, (Slider.__proto__ || Object.getPrototypeOf(Slider)).call(this, props));

    _this.node = null;
    return _this;
  }

  /**
   * @ignore
   * @override
   * @return {void}
   */


  _createClass(Slider, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeDocumentMouseMoveListener();
      this.removeDocumentMouseUpListener();
      this.removeDocumentTouchEndListener();
      this.removeDocumentTouchMoveListener();
    }

    /**
     * @private
     * @return {Object}
     */

  }, {
    key: 'getStyle',
    value: function getStyle() {
      var perc = (this.props.percentage || 0) * 100;
      var style = {
        position: 'absolute',
        left: perc + '%'
      };

      return style;
    }

    /**
     * Listen to mousemove event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentMouseMoveListener',
    value: function addDocumentMouseMoveListener() {
      this.removeDocumentMouseMoveListener();
      this.node.ownerDocument.addEventListener('mousemove', this.handleMouseMove);
    }

    /**
     * Listen to mouseup event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentMouseUpListener',
    value: function addDocumentMouseUpListener() {
      this.removeDocumentMouseUpListener();
      this.node.ownerDocument.addEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * Listen to touchmove event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentTouchMoveListener',
    value: function addDocumentTouchMoveListener() {
      this.removeDocumentTouchMoveListener();
      this.node.ownerDocument.addEventListener('touchmove', this.handleTouchMove);
    }

    /**
     * Listen to touchend event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentTouchEndListener',
    value: function addDocumentTouchEndListener() {
      this.removeDocumentTouchEndListener();
      this.node.ownerDocument.addEventListener('touchend', this.handleTouchEnd);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentMouseMoveListener',
    value: function removeDocumentMouseMoveListener() {
      this.node.ownerDocument.removeEventListener('mousemove', this.handleMouseMove);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentMouseUpListener',
    value: function removeDocumentMouseUpListener() {
      this.node.ownerDocument.removeEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentTouchMoveListener',
    value: function removeDocumentTouchMoveListener() {
      this.node.ownerDocument.removeEventListener('touchmove', this.handleTouchMove);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentTouchEndListener',
    value: function removeDocumentTouchEndListener() {
      this.node.ownerDocument.removeEventListener('touchend', this.handleTouchEnd);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown() {
      this.addDocumentMouseMoveListener();
      this.addDocumentMouseUpListener();
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp() {
      this.removeDocumentMouseMoveListener();
      this.removeDocumentMouseUpListener();
    }

    /**
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(event) {
      this.props.onSliderDrag(event, this.props.type);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart() {
      this.addDocumentTouchEndListener();
      this.addDocumentTouchMoveListener();
    }

    /**
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleTouchMove',
    value: function handleTouchMove(event) {
      this.props.onSliderDrag(event, this.props.type);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'handleTouchEnd',
    value: function handleTouchEnd() {
      this.removeDocumentTouchMoveListener();
      this.removeDocumentTouchEndListener();
    }

    /**
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleKeyDown',
    value: function handleKeyDown(event) {
      this.props.onSliderKeyDown(event, this.props.type);
    }

    /**
     * @override
     * @return {JSX.Element}
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var style = this.getStyle();

      return _react2.default.createElement(
        'span',
        {
          className: this.props.classNames.sliderContainer,
          ref: function ref(node) {
            _this2.node = node;
          },
          style: style },
        _react2.default.createElement(
          _label2.default,
          {
            classNames: this.props.classNames,
            formatLabel: this.props.formatLabel,
            type: 'value' },
          this.props.value
        ),
        _react2.default.createElement('div', {
          'aria-labelledby': this.props.ariaLabelledby,
          'aria-controls': this.props.ariaControls,
          'aria-valuemax': this.props.maxValue,
          'aria-valuemin': this.props.minValue,
          'aria-valuenow': this.props.value,
          className: this.props.classNames.slider,
          draggable: 'false',
          onKeyDown: this.handleKeyDown,
          onMouseDown: this.handleMouseDown,
          onTouchStart: this.handleTouchStart,
          role: 'slider',
          tabIndex: '0' })
      );
    }
  }]);

  return Slider;
}(_react2.default.Component), (_applyDecoratedDescriptor(_class.prototype, 'handleMouseDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMouseUp', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseUp'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMouseMove', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseMove'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTouchStart', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTouchStart'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTouchMove', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTouchMove'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTouchEnd', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTouchEnd'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleKeyDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleKeyDown'), _class.prototype)), _class);
exports.default = Slider;
module.exports = exports['default'];
//# sourceMappingURL=slider.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/input-range/track.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/input-range/track.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autobindDecorator = __webpack_require__(/*! autobind-decorator */ "./node_modules/autobind-decorator/lib/index.js");

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

/**
 * @ignore
 */
var Track = (_class = function (_React$Component) {
  _inherits(Track, _React$Component);

  _createClass(Track, null, [{
    key: 'propTypes',

    /**
     * @override
     * @return {Object}
     * @property {Function} children
     * @property {Function} classNames
     * @property {Boolean} draggableTrack
     * @property {Function} onTrackDrag
     * @property {Function} onTrackMouseDown
     * @property {Function} percentages
     */
    get: function get() {
      return {
        children: _propTypes2.default.node.isRequired,
        classNames: _propTypes2.default.objectOf(_propTypes2.default.string).isRequired,
        draggableTrack: _propTypes2.default.bool,
        onTrackDrag: _propTypes2.default.func,
        onTrackMouseDown: _propTypes2.default.func.isRequired,
        percentages: _propTypes2.default.objectOf(_propTypes2.default.number).isRequired
      };
    }

    /**
     * @param {Object} props
     * @param {InputRangeClassNames} props.classNames
     * @param {Boolean} props.draggableTrack
     * @param {Function} props.onTrackDrag
     * @param {Function} props.onTrackMouseDown
     * @param {number} props.percentages
     */

  }]);

  function Track(props) {
    _classCallCheck(this, Track);

    /**
     * @private
     * @type {?Component}
     */
    var _this = _possibleConstructorReturn(this, (Track.__proto__ || Object.getPrototypeOf(Track)).call(this, props));

    _this.node = null;
    _this.trackDragEvent = null;
    return _this;
  }

  /**
   * @private
   * @return {ClientRect}
   */


  _createClass(Track, [{
    key: 'getClientRect',
    value: function getClientRect() {
      return this.node.getBoundingClientRect();
    }

    /**
     * @private
     * @return {Object} CSS styles
     */

  }, {
    key: 'getActiveTrackStyle',
    value: function getActiveTrackStyle() {
      var width = (this.props.percentages.max - this.props.percentages.min) * 100 + '%';
      var left = this.props.percentages.min * 100 + '%';

      return { left: left, width: width };
    }

    /**
     * Listen to mousemove event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentMouseMoveListener',
    value: function addDocumentMouseMoveListener() {
      this.removeDocumentMouseMoveListener();
      this.node.ownerDocument.addEventListener('mousemove', this.handleMouseMove);
    }

    /**
     * Listen to mouseup event
     * @private
     * @return {void}
     */

  }, {
    key: 'addDocumentMouseUpListener',
    value: function addDocumentMouseUpListener() {
      this.removeDocumentMouseUpListener();
      this.node.ownerDocument.addEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentMouseMoveListener',
    value: function removeDocumentMouseMoveListener() {
      this.node.ownerDocument.removeEventListener('mousemove', this.handleMouseMove);
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'removeDocumentMouseUpListener',
    value: function removeDocumentMouseUpListener() {
      this.node.ownerDocument.removeEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * @private
     * @param {SyntheticEvent} event
     * @return {void}
     */

  }, {
    key: 'handleMouseMove',
    value: function handleMouseMove(event) {
      if (!this.props.draggableTrack) {
        return;
      }

      if (this.trackDragEvent !== null) {
        this.props.onTrackDrag(event, this.trackDragEvent);
      }

      this.trackDragEvent = event;
    }

    /**
     * @private
     * @return {void}
     */

  }, {
    key: 'handleMouseUp',
    value: function handleMouseUp() {
      if (!this.props.draggableTrack) {
        return;
      }

      this.removeDocumentMouseMoveListener();
      this.removeDocumentMouseUpListener();
      this.trackDragEvent = null;
    }

    /**
     * @private
     * @param {SyntheticEvent} event - User event
     */

  }, {
    key: 'handleMouseDown',
    value: function handleMouseDown(event) {
      var clientX = event.touches ? event.touches[0].clientX : event.clientX;
      var trackClientRect = this.getClientRect();
      var position = {
        x: clientX - trackClientRect.left,
        y: 0
      };

      this.props.onTrackMouseDown(event, position);

      if (this.props.draggableTrack) {
        this.addDocumentMouseMoveListener();
        this.addDocumentMouseUpListener();
      }
    }

    /**
     * @private
     * @param {SyntheticEvent} event - User event
     */

  }, {
    key: 'handleTouchStart',
    value: function handleTouchStart(event) {
      event.preventDefault();

      this.handleMouseDown(event);
    }

    /**
     * @override
     * @return {JSX.Element}
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var activeTrackStyle = this.getActiveTrackStyle();

      return _react2.default.createElement(
        'div',
        {
          className: this.props.classNames.track,
          onMouseDown: this.handleMouseDown,
          onTouchStart: this.handleTouchStart,
          ref: function ref(node) {
            _this2.node = node;
          } },
        _react2.default.createElement('div', {
          style: activeTrackStyle,
          className: this.props.classNames.activeTrack }),
        this.props.children
      );
    }
  }]);

  return Track;
}(_react2.default.Component), (_applyDecoratedDescriptor(_class.prototype, 'handleMouseMove', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseMove'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMouseUp', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseUp'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleMouseDown', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleMouseDown'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'handleTouchStart', [_autobindDecorator2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'handleTouchStart'), _class.prototype)), _class);
exports.default = Track;
module.exports = exports['default'];
//# sourceMappingURL=track.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/input-range/value-prop-type.js":
/*!******************************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/input-range/value-prop-type.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = valuePropType;

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-input-range/lib/js/utils/index.js");

/**
 * @ignore
 * @param {Object} props
 * @return {?Error} Return Error if validation fails
 */
function valuePropType(props, propName) {
  var maxValue = props.maxValue,
      minValue = props.minValue;

  var value = props[propName];

  if (!(0, _utils.isNumber)(value) && (!(0, _utils.isObject)(value) || !(0, _utils.isNumber)(value.min) || !(0, _utils.isNumber)(value.max))) {
    return new Error('"' + propName + '" must be a number or a range object');
  }

  if ((0, _utils.isNumber)(value) && (value < minValue || value > maxValue)) {
    return new Error('"' + propName + '" must be in between "minValue" and "maxValue"');
  }

  if ((0, _utils.isObject)(value) && (value.min < minValue || value.min > maxValue || value.max < minValue || value.max > maxValue)) {
    return new Error('"' + propName + '" must be in between "minValue" and "maxValue"');
  }
}
module.exports = exports['default'];
//# sourceMappingURL=value-prop-type.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/input-range/value-transformer.js":
/*!********************************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/input-range/value-transformer.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getPercentageFromPosition = getPercentageFromPosition;
exports.getValueFromPosition = getValueFromPosition;
exports.getValueFromProps = getValueFromProps;
exports.getPercentageFromValue = getPercentageFromValue;
exports.getPercentagesFromValues = getPercentagesFromValues;
exports.getPositionFromValue = getPositionFromValue;
exports.getPositionsFromValues = getPositionsFromValues;
exports.getPositionFromEvent = getPositionFromEvent;
exports.getStepValueFromValue = getStepValueFromValue;

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/react-input-range/lib/js/utils/index.js");

/**
 * Convert a point into a percentage value
 * @ignore
 * @param {Point} position
 * @param {ClientRect} clientRect
 * @return {number} Percentage value
 */
function getPercentageFromPosition(position, clientRect) {
  var length = clientRect.width;
  var sizePerc = position.x / length;

  return sizePerc || 0;
}

/**
 * Convert a point into a model value
 * @ignore
 * @param {Point} position
 * @param {number} minValue
 * @param {number} maxValue
 * @param {ClientRect} clientRect
 * @return {number}
 */
function getValueFromPosition(position, minValue, maxValue, clientRect) {
  var sizePerc = getPercentageFromPosition(position, clientRect);
  var valueDiff = maxValue - minValue;

  return minValue + valueDiff * sizePerc;
}

/**
 * Convert props into a range value
 * @ignore
 * @param {Object} props
 * @param {boolean} isMultiValue
 * @return {Range}
 */
function getValueFromProps(props, isMultiValue) {
  if (isMultiValue) {
    return _extends({}, props.value);
  }

  return {
    min: props.minValue,
    max: props.value
  };
}

/**
 * Convert a model value into a percentage value
 * @ignore
 * @param {number} value
 * @param {number} minValue
 * @param {number} maxValue
 * @return {number}
 */
function getPercentageFromValue(value, minValue, maxValue) {
  var validValue = (0, _utils.clamp)(value, minValue, maxValue);
  var valueDiff = maxValue - minValue;
  var valuePerc = (validValue - minValue) / valueDiff;

  return valuePerc || 0;
}

/**
 * Convert model values into percentage values
 * @ignore
 * @param {Range} values
 * @param {number} minValue
 * @param {number} maxValue
 * @return {Range}
 */
function getPercentagesFromValues(values, minValue, maxValue) {
  return {
    min: getPercentageFromValue(values.min, minValue, maxValue),
    max: getPercentageFromValue(values.max, minValue, maxValue)
  };
}

/**
 * Convert a value into a point
 * @ignore
 * @param {number} value
 * @param {number} minValue
 * @param {number} maxValue
 * @param {ClientRect} clientRect
 * @return {Point} Position
 */
function getPositionFromValue(value, minValue, maxValue, clientRect) {
  var length = clientRect.width;
  var valuePerc = getPercentageFromValue(value, minValue, maxValue);
  var positionValue = valuePerc * length;

  return {
    x: positionValue,
    y: 0
  };
}

/**
 * Convert a range of values into points
 * @ignore
 * @param {Range} values
 * @param {number} minValue
 * @param {number} maxValue
 * @param {ClientRect} clientRect
 * @return {Range}
 */
function getPositionsFromValues(values, minValue, maxValue, clientRect) {
  return {
    min: getPositionFromValue(values.min, minValue, maxValue, clientRect),
    max: getPositionFromValue(values.max, minValue, maxValue, clientRect)
  };
}

/**
 * Convert an event into a point
 * @ignore
 * @param {Event} event
 * @param {ClientRect} clientRect
 * @return {Point}
 */
function getPositionFromEvent(event, clientRect) {
  var length = clientRect.width;

  var _ref = event.touches ? event.touches[0] : event,
      clientX = _ref.clientX;

  return {
    x: (0, _utils.clamp)(clientX - clientRect.left, 0, length),
    y: 0
  };
}

/**
 * Convert a value into a step value
 * @ignore
 * @param {number} value
 * @param {number} valuePerStep
 * @return {number}
 */
function getStepValueFromValue(value, valuePerStep) {
  return Math.round(value / valuePerStep) * valuePerStep;
}
//# sourceMappingURL=value-transformer.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/utils/captialize.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/utils/captialize.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = captialize;
/**
 * Captialize a string
 * @ignore
 * @param {string} string
 * @return {string}
 */
function captialize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
module.exports = exports["default"];
//# sourceMappingURL=captialize.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/utils/clamp.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/utils/clamp.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clamp;
/**
 * Clamp a value between a min and max value
 * @ignore
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
module.exports = exports["default"];
//# sourceMappingURL=clamp.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/utils/distance-to.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/utils/distance-to.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = distanceTo;
/**
 * Calculate the distance between pointA and pointB
 * @ignore
 * @param {Point} pointA
 * @param {Point} pointB
 * @return {number} Distance
 */
function distanceTo(pointA, pointB) {
  var xDiff = Math.pow(pointB.x - pointA.x, 2);
  var yDiff = Math.pow(pointB.y - pointA.y, 2);

  return Math.sqrt(xDiff + yDiff);
}
module.exports = exports["default"];
//# sourceMappingURL=distance-to.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/utils/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/utils/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _captialize = __webpack_require__(/*! ./captialize */ "./node_modules/react-input-range/lib/js/utils/captialize.js");

Object.defineProperty(exports, 'captialize', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_captialize).default;
  }
});

var _clamp = __webpack_require__(/*! ./clamp */ "./node_modules/react-input-range/lib/js/utils/clamp.js");

Object.defineProperty(exports, 'clamp', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_clamp).default;
  }
});

var _distanceTo = __webpack_require__(/*! ./distance-to */ "./node_modules/react-input-range/lib/js/utils/distance-to.js");

Object.defineProperty(exports, 'distanceTo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_distanceTo).default;
  }
});

var _isDefined = __webpack_require__(/*! ./is-defined */ "./node_modules/react-input-range/lib/js/utils/is-defined.js");

Object.defineProperty(exports, 'isDefined', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isDefined).default;
  }
});

var _isNumber = __webpack_require__(/*! ./is-number */ "./node_modules/react-input-range/lib/js/utils/is-number.js");

Object.defineProperty(exports, 'isNumber', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isNumber).default;
  }
});

var _isObject = __webpack_require__(/*! ./is-object */ "./node_modules/react-input-range/lib/js/utils/is-object.js");

Object.defineProperty(exports, 'isObject', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_isObject).default;
  }
});

var _length = __webpack_require__(/*! ./length */ "./node_modules/react-input-range/lib/js/utils/length.js");

Object.defineProperty(exports, 'length', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_length).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/utils/is-defined.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/utils/is-defined.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDefined;
/**
 * Check if a value is defined
 * @ignore
 * @param {*} value
 * @return {boolean}
 */
function isDefined(value) {
  return value !== undefined && value !== null;
}
module.exports = exports["default"];
//# sourceMappingURL=is-defined.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/utils/is-number.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/utils/is-number.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNumber;
/**
 * Check if a value is a number
 * @ignore
 * @param {*} value
 * @return {boolean}
 */
function isNumber(value) {
  return typeof value === 'number';
}
module.exports = exports['default'];
//# sourceMappingURL=is-number.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/utils/is-object.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/utils/is-object.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isObject;
/**
 * Check if a value is an object
 * @ignore
 * @param {*} value
 * @return {boolean}
 */
function isObject(value) {
  return value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
}
module.exports = exports['default'];
//# sourceMappingURL=is-object.js.map

/***/ }),

/***/ "./node_modules/react-input-range/lib/js/utils/length.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-input-range/lib/js/utils/length.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = length;
/**
 * Calculate the absolute difference between two numbers
 * @ignore
 * @param {number} numA
 * @param {number} numB
 * @return {number}
 */
function length(numA, numB) {
  return Math.abs(numA - numB);
}
module.exports = exports["default"];
//# sourceMappingURL=length.js.map

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-data-table-component */ "./node_modules/react-data-table-component/dist/index.cjs.js");
/* harmony import */ var react_data_table_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_data_table_component__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_yandex_metrika__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-yandex-metrika */ "./node_modules/react-yandex-metrika/lib/index.js");
/* harmony import */ var react_yandex_metrika__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_yandex_metrika__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-input-range */ "./node_modules/react-input-range/lib/js/index.js");
/* harmony import */ var react_input_range__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_input_range__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "F:\\repos_master\\sortedRepos\\market\\market-promos\\pages\\index.js",
    _s = $RefreshSig$();







var __N_SSG = true;
function Home(_ref) {
  _s();

  var _this = this;

  var codes = _ref.codes,
      products = _ref.products;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("Все"),
      selectedCategory = _useState[0],
      setSelectedCategry = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("Все"),
      selectedSubCategory = _useState2[0],
      setSelectedSubCategory = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("Все"),
      selectedCode = _useState3[0],
      setSelectedCode = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      displayedItems = _useState4[0],
      setDisplayedItems = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      showSubcategoriesFor = _useState5[0],
      setShowSubcategoriesFor = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      search = _useState6[0],
      setSearch = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      minProductPrice = _useState7[0],
      setMinProductPrice = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      maxProductPrice = _useState8[0],
      maxMinProductPrice = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setDisplayedItems(products.filter(function (item) {
      return (selectedCode === "Все" || item.code.toUpperCase() === selectedCode.toUpperCase()) && (selectedCategory === "Все" || item.category === selectedCategory) && (selectedSubCategory === "Все" || item.subcategory === selectedSubCategory) && item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 && (!item.isAdult || selectedCategory === "Товары для взрослых" && localStorage.getItem("isAdult") === "true");
    }));
    setMinProductPrice(Math.min(displayedItems.map(function (p) {
      return p.price;
    })));
    setMaxProductPrice(Math.max(displayedItems.map(function (p) {
      return p.price;
    })));
  }, [selectedCode, selectedCategory, selectedSubCategory, search]);
  var columns = [{
    name: "Изображение",
    selector: "image",
    cell: function cell(row) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
        src: row.img,
        width: "50",
        height: "50",
        alt: row.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this);
    },
    center: true,
    grow: "0",
    compact: true
  }, {
    name: "Название",
    selector: "name",
    sortable: true,
    grow: "2",
    wrap: true,
    compact: true
  }, {
    name: "Старая цена",
    selector: "old_price",
    sortable: true,
    cell: function cell(row) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        children: [row.old_price, "\u20BD"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 22
      }, _this);
    },
    grow: "0",
    compact: true,
    minWidth: "60px"
  }, {
    name: "Цена со скидкой",
    selector: "price",
    sortable: true,
    cell: function cell(row) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        children: [row.price, "\u20BD"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 22
      }, _this);
    },
    grow: "0",
    compact: true,
    minWidth: "60px"
  }, {
    name: "Реальная выгода",
    selector: "real_discount",
    sortable: true,
    defaultSortAsc: false,
    cell: function cell(row) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        children: [row.real_discount, "\u20BD"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 22
      }, _this);
    },
    sortFunction: function sortFunction(rowA, rowB) {
      return (parseInt(rowA.real_discount) + 0.1 || 0.5) - (parseInt(rowB.real_discount) + 0.1 || 0.5);
    },
    grow: "0",
    compact: true,
    minWidth: "60px"
  }, {
    name: "Промокод",
    selector: "code",
    sortable: true,
    cell: function cell(row) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("span", {
        children: row.code.toUpperCase()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 22
      }, _this);
    },
    sortFunction: function sortFunction(rowA, rowB) {
      return parseInt((rowA.code.match(/\d+/) || ["0"])[0]) - parseInt((rowB.code.match(/\d+/) || ["0"])[0]);
    },
    defaultSortAsc: false,
    grow: "0",
    compact: true,
    minWidth: "70px"
  }, {
    name: "Купить",
    selector: "buy",
    cell: function cell(row) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        color: "warning",
        href: "https://pokupki.market.yandex.ru/product/".concat(row.id),
        target: "_blank",
        rel: "noopener",
        children: "\u041A\u0443\u043F\u0438\u0442\u044C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, _this);
    },
    minWidth: "100px",
    grow: "0",
    compact: true
  }];
  var categories = ["Все"].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(products.filter(function (item) {
    return selectedCode === "Все" || item.code.toUpperCase() === selectedCode.toUpperCase();
  }).reduce(function (prev, curr) {
    return prev.add(curr.category);
  }, new Set())).sort(function (a, b) {
    return a === "Товары для взрослых" ? 1 : b === "Товары для взрослых" ? -1 : a.localeCompare(b);
  })));
  var subCategories = ["Все"].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(products.filter(function (item) {
    return (selectedCode === "Все" || item.code.toUpperCase() === selectedCode.toUpperCase()) && showSubcategoriesFor === item.category;
  }).reduce(function (prev, curr) {
    return prev.add(curr.subcategory);
  }, new Set())).sort()));
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: "min-vh-100 d-flex flex-column",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
        children: "\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u044B \u0434\u043B\u044F \u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0430\u0440\u043A\u0435\u0442\u0430"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        name: "description",
        content: "\u041A\u0430\u0442\u0430\u043B\u043E\u0433 \u0432\u0441\u0435\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B\u0445 \u0434\u043B\u044F \u043F\u043E\u043A\u0443\u043F\u043A\u0438 \u043D\u0430 \u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0430\u0440\u043A\u0435\u0442\u0435 \u0441\u043E \u0441\u043A\u0438\u0434\u043A\u043E\u0439 \u043F\u043E \u043F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u0430\u043C CUT4-CUT25 \u0438 GO3-GO29."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("header", {
      className: "bg-warning mb-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "w-100 py-2",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
            children: "\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u044B \u0434\u043B\u044F \u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0430\u0440\u043A\u0435\u0442\u0430"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("main", {
      className: "overflow-auto mb-3",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        fluid: "md",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "d-flex flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h3", {
            className: "mr-2",
            children: "\u041F\u0440\u043E\u043C\u043E\u043A\u043E\u0434\u044B:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 13
          }, this), [["Все"].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(codes)).map(function (code) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "h3 mr-1",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
                color: code === selectedCode ? "warning" : "secondary",
                pill: true,
                onClick: function onClick() {
                  return setSelectedCode(code);
                },
                children: code.toUpperCase()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 182,
                columnNumber: 19
              }, _this)
            }, code, false, {
              fileName: _jsxFileName,
              lineNumber: 181,
              columnNumber: 17
            }, _this);
          })]]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "d-flex flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h5", {
            className: "mr-2",
            children: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 13
          }, this), categories.map(function (category) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "h5 mr-1",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
                color: category === selectedCategory ? "warning" : category === "Товары для взрослых" ? "danger" : "secondary",
                pill: true,
                onClick: function onClick() {
                  if (category === "Товары для взрослых" && (!localStorage.getItem("isAdult") || localStorage.getItem("isAdult") !== "true")) {
                    var isAdult = confirm("Вам есть 18 лет?");
                    localStorage.setItem("isAdult", isAdult);

                    if (!isAdult) {
                      return;
                    }
                  }

                  setSelectedCategry(category);
                  setShowSubcategoriesFor(category === "Все" ? null : category);
                  setSelectedSubCategory("Все");
                },
                children: category
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 17
              }, _this)
            }, category, false, {
              fileName: _jsxFileName,
              lineNumber: 196,
              columnNumber: 15
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }, this), showSubcategoriesFor !== null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "d-flex flex-wrap",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
            className: "mr-2 mb-0",
            children: "\u041F\u043E\u0434\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 15
          }, this), subCategories.map(function (sub) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
              color: sub === selectedSubCategory ? "warning" : "secondary",
              pill: true,
              onClick: function onClick() {
                return setSelectedSubCategory(sub);
              },
              className: "my-1 mr-1",
              children: sub
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 234,
              columnNumber: 17
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 13
        }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
          className: "mt-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            md: 4,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], {
              placeholder: "\u041F\u043E\u0438\u0441\u043A",
              value: search,
              onChange: function onChange(e) {
                return setSearch(e.target.value);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 247,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            md: 4,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_input_range__WEBPACK_IMPORTED_MODULE_7___default.a, {
              maxValue: 20,
              minValue: 0,
              value: 10 // onChange={(value) => this.setState({ value })}

            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 254,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 253,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_data_table_component__WEBPACK_IMPORTED_MODULE_5___default.a, {
          noHeader: true,
          columns: columns,
          data: displayedItems,
          noDataComponent: "\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0432\u0443\u0449\u0438\u0439 \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u044F\u043C",
          pagination: true,
          paginationRowsPerPageOptions: [10, 50, 100, 500, 1000],
          paginationComponentOptions: {
            rowsPerPageText: "Товаров на странице:",
            rangeSeparatorText: "из",
            noRowsPerPage: false,
            selectAllRowsItem: false,
            selectAllRowsItemText: "Все"
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("footer", {
      className: "bg-secondary text-white py-0 w-100",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Alert"], {
        color: "info",
        className: "mb-0",
        children: ["\u0412\u044B\u0433\u0440\u0443\u0437\u043A\u0430 \u0442\u043E\u0432\u0430\u0440\u043E\u0432 \u043D\u0430\u043B\u0430\u0436\u0435\u043D\u0430. \u041A\u0440\u043E\u043C\u0435 \u044D\u0442\u043E\u0433\u043E \u0432 \u0442\u0430\u0431\u043B\u0438\u0446\u0443 \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0430 \u043A\u043E\u043B\u043E\u043D\u043A\u0430 \"\u0420\u0435\u0430\u043B\u044C\u043D\u0430\u044F \u0432\u044B\u0433\u043E\u0434\u0430\", \u043E\u043D\u0430 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442 \u0440\u0430\u0437\u043D\u0438\u0446\u0443 \u0441 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0439 \u0446\u0435\u043D\u043E\u0439 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440 \u043F\u043E \u043C\u0430\u0440\u0435\u043A\u0442\u0443 \u0432 \u041C\u043E\u0441\u043A\u0432\u0435 (\u0437\u0430 \u0438\u0434\u0435\u044E \u0441\u043F\u0430\u0441\u0438\u0431\u043E", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          href: "https://www.pepper.ru/profile/Rustik_Ufa",
          children: "Rustik_Ufa"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 11
        }, this), "), \u043F\u043E\u043A\u0430 \u0447\u0442\u043E \u0432 \u044D\u0442\u043E\u0439 \u043A\u043E\u043B\u043E\u043D\u043A\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B \u043E\u0448\u0438\u0431\u043A\u0438 \u0438 \u043F\u0440\u043E\u043F\u0443\u0441\u043A\u0438. \u0412\u043E\u043F\u0440\u043E\u0441\u044B, \u0441\u043E\u0432\u0435\u0442\u044B \u0438 \u0437\u0430\u043C\u0435\u0447\u0430\u043D\u0438\u044F \u043F\u043E \u0441\u0430\u0439\u0442\u0443, \u043C\u043E\u0436\u0435\u0442\u0435 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043C\u043D\u0435 \u0432", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          href: "https://www.pepper.ru/profile/sevskii",
          target: "_blank",
          rel: "noopener",
          children: "\u043B\u0438\u0447\u043A\u0443 \u043D\u0430 Pepper"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 11
        }, this), " ", "\u0438\u043B\u0438 \u043D\u0430 \u043F\u043E\u0447\u0442\u0443", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          href: "mailto:sevskii111@gmail.com",
          target: "_blank",
          rel: "noopener",
          children: "sevskii111@gmail.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 295,
          columnNumber: 11
        }, this), "."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
        className: "py-2",
        children: "\u0421\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044C \u0441\u0430\u0439\u0442\u0430 \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F \u043A \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u044F\u043C \u042F\u043D\u0434\u0435\u043A\u0441 \u0438 \u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0430\u0440\u0435\u043A\u0442"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_yandex_metrika__WEBPACK_IMPORTED_MODULE_6__["YMInitializer"], {
      accounts: [71256484]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 159,
    columnNumber: 5
  }, this);
}

_s(Home, "YDUADPHM9m8BHCLlehi+XrSl2Ds=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2F1dG9iaW5kLWRlY29yYXRvci9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1yYW5nZS9saWIvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1yYW5nZS9saWIvanMvaW5wdXQtcmFuZ2UvZGVmYXVsdC1jbGFzcy1uYW1lcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LXJhbmdlL2xpYi9qcy9pbnB1dC1yYW5nZS9pbnB1dC1yYW5nZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LXJhbmdlL2xpYi9qcy9pbnB1dC1yYW5nZS9rZXktY29kZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1yYW5nZS9saWIvanMvaW5wdXQtcmFuZ2UvbGFiZWwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1yYW5nZS9saWIvanMvaW5wdXQtcmFuZ2UvcmFuZ2UtcHJvcC10eXBlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtcmFuZ2UvbGliL2pzL2lucHV0LXJhbmdlL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LXJhbmdlL2xpYi9qcy9pbnB1dC1yYW5nZS90cmFjay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LXJhbmdlL2xpYi9qcy9pbnB1dC1yYW5nZS92YWx1ZS1wcm9wLXR5cGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1yYW5nZS9saWIvanMvaW5wdXQtcmFuZ2UvdmFsdWUtdHJhbnNmb3JtZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1yYW5nZS9saWIvanMvdXRpbHMvY2FwdGlhbGl6ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LXJhbmdlL2xpYi9qcy91dGlscy9jbGFtcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LXJhbmdlL2xpYi9qcy91dGlscy9kaXN0YW5jZS10by5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LXJhbmdlL2xpYi9qcy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LXJhbmdlL2xpYi9qcy91dGlscy9pcy1kZWZpbmVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtaW5wdXQtcmFuZ2UvbGliL2pzL3V0aWxzL2lzLW51bWJlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlucHV0LXJhbmdlL2xpYi9qcy91dGlscy9pcy1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1pbnB1dC1yYW5nZS9saWIvanMvdXRpbHMvbGVuZ3RoLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lIiwiY29kZXMiLCJwcm9kdWN0cyIsInVzZVN0YXRlIiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdyeSIsInNlbGVjdGVkU3ViQ2F0ZWdvcnkiLCJzZXRTZWxlY3RlZFN1YkNhdGVnb3J5Iiwic2VsZWN0ZWRDb2RlIiwic2V0U2VsZWN0ZWRDb2RlIiwiZGlzcGxheWVkSXRlbXMiLCJzZXREaXNwbGF5ZWRJdGVtcyIsInNob3dTdWJjYXRlZ29yaWVzRm9yIiwic2V0U2hvd1N1YmNhdGVnb3JpZXNGb3IiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJtaW5Qcm9kdWN0UHJpY2UiLCJzZXRNaW5Qcm9kdWN0UHJpY2UiLCJtYXhQcm9kdWN0UHJpY2UiLCJtYXhNaW5Qcm9kdWN0UHJpY2UiLCJ1c2VFZmZlY3QiLCJmaWx0ZXIiLCJpdGVtIiwiY29kZSIsInRvVXBwZXJDYXNlIiwiY2F0ZWdvcnkiLCJzdWJjYXRlZ29yeSIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJpc0FkdWx0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIk1hdGgiLCJtaW4iLCJtYXAiLCJwIiwicHJpY2UiLCJzZXRNYXhQcm9kdWN0UHJpY2UiLCJtYXgiLCJjb2x1bW5zIiwic2VsZWN0b3IiLCJjZWxsIiwicm93IiwiaW1nIiwiY2VudGVyIiwiZ3JvdyIsImNvbXBhY3QiLCJzb3J0YWJsZSIsIndyYXAiLCJvbGRfcHJpY2UiLCJtaW5XaWR0aCIsImRlZmF1bHRTb3J0QXNjIiwicmVhbF9kaXNjb3VudCIsInNvcnRGdW5jdGlvbiIsInJvd0EiLCJyb3dCIiwicGFyc2VJbnQiLCJtYXRjaCIsImlkIiwiY2F0ZWdvcmllcyIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwiYWRkIiwiU2V0Iiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsInN1YkNhdGVnb3JpZXMiLCJjb25maXJtIiwic2V0SXRlbSIsInN1YiIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInJvd3NQZXJQYWdlVGV4dCIsInJhbmdlU2VwYXJhdG9yVGV4dCIsIm5vUm93c1BlclBhZ2UiLCJzZWxlY3RBbGxSb3dzSXRlbSIsInNlbGVjdEFsbFJvd3NJdGVtVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0EsaUVBQWlFLGFBQWE7QUFDOUU7QUFDQTs7QUFFQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxlQUFlO0FBQzlCLGdCQUFnQjtBQUNoQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxlQUFlO0FBQzlCLGdCQUFnQjtBQUNoQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxlQUFlO0FBQzlCLGdCQUFnQjtBQUNoQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMz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QUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4SEYsZUFzSkUscUVBQUMsa0VBQUQ7QUFBZSxjQUFRLEVBQUUsQ0FBQyxRQUFEO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0SkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwSkQ7O0dBOVN1QmpGLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzNiN2JjODVlNjFhNDI3YjkzZGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGNvcHlyaWdodCAyMDE1LCBBbmRyZXkgUG9wcCA8OG1heWRheUBnbWFpbC5jb20+XG4gKlxuICogVGhlIGRlY29yYXRvciBtYXkgYmUgdXNlZCBvbiBjbGFzc2VzIG9yIG1ldGhvZHNcbiAqIGBgYFxuICogQGF1dG9iaW5kXG4gKiBjbGFzcyBGdWxsQm91bmQge31cbiAqXG4gKiBjbGFzcyBQYXJ0Qm91bmQge1xuICogICBAYXV0b2JpbmRcbiAqICAgbWV0aG9kICgpIHt9XG4gKiB9XG4gKiBgYGBcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGF1dG9iaW5kO1xuXG5mdW5jdGlvbiBhdXRvYmluZCgpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKGFyZ3MubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIGJvdW5kQ2xhc3MuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYm91bmRNZXRob2QuYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgfVxufVxuXG4vKipcbiAqIFVzZSBib3VuZE1ldGhvZCB0byBiaW5kIGFsbCBtZXRob2RzIG9uIHRoZSB0YXJnZXQucHJvdG90eXBlXG4gKi9cbmZ1bmN0aW9uIGJvdW5kQ2xhc3ModGFyZ2V0KSB7XG4gIC8vIChVc2luZyByZWZsZWN0IHRvIGdldCBhbGwga2V5cyBpbmNsdWRpbmcgc3ltYm9scylcbiAgdmFyIGtleXMgPSB1bmRlZmluZWQ7XG4gIC8vIFVzZSBSZWZsZWN0IGlmIGV4aXN0c1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBSZWZsZWN0Lm93bktleXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBrZXlzID0gUmVmbGVjdC5vd25LZXlzKHRhcmdldC5wcm90b3R5cGUpO1xuICB9IGVsc2Uge1xuICAgIGtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0YXJnZXQucHJvdG90eXBlKTtcbiAgICAvLyB1c2Ugc3ltYm9scyBpZiBzdXBwb3J0IGlzIHByb3ZpZGVkXG4gICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBrZXlzID0ga2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQucHJvdG90eXBlKSk7XG4gICAgfVxuICB9XG5cbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAvLyBJZ25vcmUgc3BlY2lhbCBjYXNlIHRhcmdldCBtZXRob2RcbiAgICBpZiAoa2V5ID09PSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldC5wcm90b3R5cGUsIGtleSk7XG5cbiAgICAvLyBPbmx5IG1ldGhvZHMgbmVlZCBiaW5kaW5nXG4gICAgaWYgKHR5cGVvZiBkZXNjcmlwdG9yLnZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LnByb3RvdHlwZSwga2V5LCBib3VuZE1ldGhvZCh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcikpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbi8qKlxuICogUmV0dXJuIGEgZGVzY3JpcHRvciByZW1vdmluZyB0aGUgdmFsdWUgYW5kIHJldHVybmluZyBhIGdldHRlclxuICogVGhlIGdldHRlciB3aWxsIHJldHVybiBhIC5iaW5kIHZlcnNpb24gb2YgdGhlIGZ1bmN0aW9uXG4gKiBhbmQgbWVtb2l6ZSB0aGUgcmVzdWx0IGFnYWluc3QgYSBzeW1ib2wgb24gdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIGJvdW5kTWV0aG9kKHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKSB7XG4gIHZhciBmbiA9IGRlc2NyaXB0b3IudmFsdWU7XG5cbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBFcnJvcignQGF1dG9iaW5kIGRlY29yYXRvciBjYW4gb25seSBiZSBhcHBsaWVkIHRvIG1ldGhvZHMgbm90OiAnICsgdHlwZW9mIGZuKTtcbiAgfVxuXG4gIC8vIEluIElFMTEgY2FsbGluZyBPYmplY3QuZGVmaW5lUHJvcGVydHkgaGFzIGEgc2lkZS1lZmZlY3Qgb2YgZXZhbHVhdGluZyB0aGVcbiAgLy8gZ2V0dGVyIGZvciB0aGUgcHJvcGVydHkgd2hpY2ggaXMgYmVpbmcgcmVwbGFjZWQuIFRoaXMgY2F1c2VzIGluZmluaXRlXG4gIC8vIHJlY3Vyc2lvbiBhbmQgYW4gXCJPdXQgb2Ygc3RhY2sgc3BhY2VcIiBlcnJvci5cbiAgdmFyIGRlZmluaW5nUHJvcGVydHkgPSBmYWxzZTtcblxuICByZXR1cm4ge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIGlmIChkZWZpbmluZ1Byb3BlcnR5IHx8IHRoaXMgPT09IHRhcmdldC5wcm90b3R5cGUgfHwgdGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHJldHVybiBmbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGJvdW5kRm4gPSBmbi5iaW5kKHRoaXMpO1xuICAgICAgZGVmaW5pbmdQcm9wZXJ0eSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywga2V5LCB7XG4gICAgICAgIHZhbHVlOiBib3VuZEZuLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9KTtcbiAgICAgIGRlZmluaW5nUHJvcGVydHkgPSBmYWxzZTtcbiAgICAgIHJldHVybiBib3VuZEZuO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2lucHV0UmFuZ2UgPSByZXF1aXJlKCcuL2lucHV0LXJhbmdlL2lucHV0LXJhbmdlJyk7XG5cbnZhciBfaW5wdXRSYW5nZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnB1dFJhbmdlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuLyoqXG4gKiBAaWdub3JlXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBDbGllbnRSZWN0XG4gKiBAcHJvcGVydHkge251bWJlcn0gaGVpZ2h0XG4gKiBAcHJvcGVydHkge251bWJlcn0gbGVmdFxuICogQHByb3BlcnR5IHtudW1iZXJ9IHRvcFxuICogQHByb3BlcnR5IHtudW1iZXJ9IHdpZHRoXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBJbnB1dFJhbmdlQ2xhc3NOYW1lc1xuICogQHByb3BlcnR5IHtzdHJpbmd9IGFjdGl2ZVRyYWNrXG4gKiBAcHJvcGVydHkge3N0cmluZ30gZGlzYWJsZWRJbnB1dFJhbmdlXG4gKiBAcHJvcGVydHkge3N0cmluZ30gaW5wdXRSYW5nZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGxhYmVsQ29udGFpbmVyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbWF4TGFiZWxcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtaW5MYWJlbFxuICogQHByb3BlcnR5IHtzdHJpbmd9IHNsaWRlclxuICogQHByb3BlcnR5IHtzdHJpbmd9IHNsaWRlckNvbnRhaW5lclxuICogQHByb3BlcnR5IHtzdHJpbmd9IHRyYWNrXG4gKiBAcHJvcGVydHkge3N0cmluZ30gdmFsdWVMYWJlbFxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge0Z1bmN0aW9ufSBMYWJlbEZvcm1hdHRlclxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5cbi8qKlxuICogQGlnbm9yZVxuICogQHR5cGVkZWYge09iamVjdH0gUG9pbnRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB4XG4gKiBAcHJvcGVydHkge251bWJlcn0geVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gUmFuZ2VcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBtaW4gLSBNaW4gdmFsdWVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBtYXggLSBNYXggdmFsdWVcbiAqL1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfaW5wdXRSYW5nZTIuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuLyoqXG4gKiBEZWZhdWx0IENTUyBjbGFzcyBuYW1lc1xuICogQGlnbm9yZVxuICogQHR5cGUge0lucHV0UmFuZ2VDbGFzc05hbWVzfVxuICovXG52YXIgREVGQVVMVF9DTEFTU19OQU1FUyA9IHtcbiAgYWN0aXZlVHJhY2s6ICdpbnB1dC1yYW5nZV9fdHJhY2sgaW5wdXQtcmFuZ2VfX3RyYWNrLS1hY3RpdmUnLFxuICBkaXNhYmxlZElucHV0UmFuZ2U6ICdpbnB1dC1yYW5nZSBpbnB1dC1yYW5nZS0tZGlzYWJsZWQnLFxuICBpbnB1dFJhbmdlOiAnaW5wdXQtcmFuZ2UnLFxuICBsYWJlbENvbnRhaW5lcjogJ2lucHV0LXJhbmdlX19sYWJlbC1jb250YWluZXInLFxuICBtYXhMYWJlbDogJ2lucHV0LXJhbmdlX19sYWJlbCBpbnB1dC1yYW5nZV9fbGFiZWwtLW1heCcsXG4gIG1pbkxhYmVsOiAnaW5wdXQtcmFuZ2VfX2xhYmVsIGlucHV0LXJhbmdlX19sYWJlbC0tbWluJyxcbiAgc2xpZGVyOiAnaW5wdXQtcmFuZ2VfX3NsaWRlcicsXG4gIHNsaWRlckNvbnRhaW5lcjogJ2lucHV0LXJhbmdlX19zbGlkZXItY29udGFpbmVyJyxcbiAgdHJhY2s6ICdpbnB1dC1yYW5nZV9fdHJhY2sgaW5wdXQtcmFuZ2VfX3RyYWNrLS1iYWNrZ3JvdW5kJyxcbiAgdmFsdWVMYWJlbDogJ2lucHV0LXJhbmdlX19sYWJlbCBpbnB1dC1yYW5nZV9fbGFiZWwtLXZhbHVlJ1xufTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gREVGQVVMVF9DTEFTU19OQU1FUztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVmYXVsdC1jbGFzcy1uYW1lcy5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZGVzYywgX3ZhbHVlLCBfY2xhc3M7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfYXV0b2JpbmREZWNvcmF0b3IgPSByZXF1aXJlKCdhdXRvYmluZC1kZWNvcmF0b3InKTtcblxudmFyIF9hdXRvYmluZERlY29yYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hdXRvYmluZERlY29yYXRvcik7XG5cbnZhciBfdmFsdWVUcmFuc2Zvcm1lciA9IHJlcXVpcmUoJy4vdmFsdWUtdHJhbnNmb3JtZXInKTtcblxudmFyIHZhbHVlVHJhbnNmb3JtZXIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfdmFsdWVUcmFuc2Zvcm1lcik7XG5cbnZhciBfZGVmYXVsdENsYXNzTmFtZXMgPSByZXF1aXJlKCcuL2RlZmF1bHQtY2xhc3MtbmFtZXMnKTtcblxudmFyIF9kZWZhdWx0Q2xhc3NOYW1lczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZhdWx0Q2xhc3NOYW1lcyk7XG5cbnZhciBfbGFiZWwgPSByZXF1aXJlKCcuL2xhYmVsJyk7XG5cbnZhciBfbGFiZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGFiZWwpO1xuXG52YXIgX3JhbmdlUHJvcFR5cGUgPSByZXF1aXJlKCcuL3JhbmdlLXByb3AtdHlwZScpO1xuXG52YXIgX3JhbmdlUHJvcFR5cGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmFuZ2VQcm9wVHlwZSk7XG5cbnZhciBfdmFsdWVQcm9wVHlwZSA9IHJlcXVpcmUoJy4vdmFsdWUtcHJvcC10eXBlJyk7XG5cbnZhciBfdmFsdWVQcm9wVHlwZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92YWx1ZVByb3BUeXBlKTtcblxudmFyIF9zbGlkZXIgPSByZXF1aXJlKCcuL3NsaWRlcicpO1xuXG52YXIgX3NsaWRlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zbGlkZXIpO1xuXG52YXIgX3RyYWNrID0gcmVxdWlyZSgnLi90cmFjaycpO1xuXG52YXIgX3RyYWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3RyYWNrKTtcblxudmFyIF91dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbnZhciBfa2V5Q29kZXMgPSByZXF1aXJlKCcuL2tleS1jb2RlcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHsgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkgeyByZXR1cm4gb2JqOyB9IGVsc2UgeyB2YXIgbmV3T2JqID0ge307IGlmIChvYmogIT0gbnVsbCkgeyBmb3IgKHZhciBrZXkgaW4gb2JqKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSBuZXdPYmpba2V5XSA9IG9ialtrZXldOyB9IH0gbmV3T2JqLmRlZmF1bHQgPSBvYmo7IHJldHVybiBuZXdPYmo7IH0gfVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVjb3JhdG9ycywgZGVzY3JpcHRvciwgY29udGV4dCkge1xuICB2YXIgZGVzYyA9IHt9O1xuICBPYmplY3RbJ2tlJyArICd5cyddKGRlc2NyaXB0b3IpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGRlc2Nba2V5XSA9IGRlc2NyaXB0b3Jba2V5XTtcbiAgfSk7XG4gIGRlc2MuZW51bWVyYWJsZSA9ICEhZGVzYy5lbnVtZXJhYmxlO1xuICBkZXNjLmNvbmZpZ3VyYWJsZSA9ICEhZGVzYy5jb25maWd1cmFibGU7XG5cbiAgaWYgKCd2YWx1ZScgaW4gZGVzYyB8fCBkZXNjLmluaXRpYWxpemVyKSB7XG4gICAgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gIH1cblxuICBkZXNjID0gZGVjb3JhdG9ycy5zbGljZSgpLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGRlc2MsIGRlY29yYXRvcikge1xuICAgIHJldHVybiBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYykgfHwgZGVzYztcbiAgfSwgZGVzYyk7XG5cbiAgaWYgKGNvbnRleHQgJiYgZGVzYy5pbml0aWFsaXplciAhPT0gdm9pZCAwKSB7XG4gICAgZGVzYy52YWx1ZSA9IGRlc2MuaW5pdGlhbGl6ZXIgPyBkZXNjLmluaXRpYWxpemVyLmNhbGwoY29udGV4dCkgOiB2b2lkIDA7XG4gICAgZGVzYy5pbml0aWFsaXplciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChkZXNjLmluaXRpYWxpemVyID09PSB2b2lkIDApIHtcbiAgICBPYmplY3RbJ2RlZmluZScgKyAnUHJvcGVydHknXSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjKTtcbiAgICBkZXNjID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkZXNjO1xufVxuXG4vKipcbiAqIEEgUmVhY3QgY29tcG9uZW50IHRoYXQgYWxsb3dzIHVzZXJzIHRvIGlucHV0IG51bWVyaWMgdmFsdWVzIHdpdGhpbiBhIHJhbmdlXG4gKiBieSBkcmFnZ2luZyBpdHMgc2xpZGVycy5cbiAqL1xudmFyIElucHV0UmFuZ2UgPSAoX2NsYXNzID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKElucHV0UmFuZ2UsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIF9jcmVhdGVDbGFzcyhJbnB1dFJhbmdlLCBudWxsLCBbe1xuICAgIGtleTogJ3Byb3BUeXBlcycsXG5cbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICogQG92ZXJyaWRlXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWxsb3dTYW1lVmFsdWVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gICAgICAgIGFyaWFMYWJlbGxlZGJ5OiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICAgICAgYXJpYUNvbnRyb2xzOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICAgICAgY2xhc3NOYW1lczogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3RPZihfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyksXG4gICAgICAgIGRpc2FibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gICAgICAgIGRyYWdnYWJsZVRyYWNrOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gICAgICAgIGZvcm1hdExhYmVsOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gICAgICAgIG1heFZhbHVlOiBfcmFuZ2VQcm9wVHlwZTIuZGVmYXVsdCxcbiAgICAgICAgbWluVmFsdWU6IF9yYW5nZVByb3BUeXBlMi5kZWZhdWx0LFxuICAgICAgICBuYW1lOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgICAgICAgb25DaGFuZ2VTdGFydDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgICAgICBvbkNoYW5nZTogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLmlzUmVxdWlyZWQsXG4gICAgICAgIG9uQ2hhbmdlQ29tcGxldGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuYyxcbiAgICAgICAgc3RlcDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gICAgICAgIHZhbHVlOiBfdmFsdWVQcm9wVHlwZTIuZGVmYXVsdFxuICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICogQG92ZXJyaWRlXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdkZWZhdWx0UHJvcHMnLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWxsb3dTYW1lVmFsdWVzOiBmYWxzZSxcbiAgICAgICAgY2xhc3NOYW1lczogX2RlZmF1bHRDbGFzc05hbWVzMi5kZWZhdWx0LFxuICAgICAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgICAgIG1heFZhbHVlOiAxMCxcbiAgICAgICAgbWluVmFsdWU6IDAsXG4gICAgICAgIHN0ZXA6IDFcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbcHJvcHMuYWxsb3dTYW1lVmFsdWVzXVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMuYXJpYUxhYmVsbGVkYnldXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5hcmlhQ29udHJvbHNdXG4gICAgICogQHBhcmFtIHtJbnB1dFJhbmdlQ2xhc3NOYW1lc30gW3Byb3BzLmNsYXNzTmFtZXNdXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbcHJvcHMuZGlzYWJsZWQgPSBmYWxzZV1cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcHJvcHMuZm9ybWF0TGFiZWxdXG4gICAgICogQHBhcmFtIHtudW1iZXJ8UmFuZ2V9IFtwcm9wcy5tYXhWYWx1ZSA9IDEwXVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfFJhbmdlfSBbcHJvcHMubWluVmFsdWUgPSAwXVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcHJvcHMubmFtZV1cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcHJvcHMub25DaGFuZ2VcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcHJvcHMub25DaGFuZ2VDb21wbGV0ZV1cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcHJvcHMub25DaGFuZ2VTdGFydF1cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3Byb3BzLnN0ZXAgPSAxXVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfFJhbmdlfSBwcm9wcy52YWx1ZVxuICAgICAqL1xuXG4gIH1dKTtcblxuICBmdW5jdGlvbiBJbnB1dFJhbmdlKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIElucHV0UmFuZ2UpO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7P251bWJlcn1cbiAgICAgKi9cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoSW5wdXRSYW5nZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKElucHV0UmFuZ2UpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy5zdGFydFZhbHVlID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUgez9Db21wb25lbnR9XG4gICAgICovXG4gICAgX3RoaXMubm9kZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHs/Q29tcG9uZW50fVxuICAgICAqL1xuICAgIF90aGlzLnRyYWNrTm9kZSA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtib29sfVxuICAgICAqL1xuICAgIF90aGlzLmlzU2xpZGVyRHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHR5cGUgez9zdHJpbmd9XG4gICAgICovXG4gICAgX3RoaXMubGFzdEtleU1vdmVkID0gbnVsbDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKiBAb3ZlcnJpZGVcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoSW5wdXRSYW5nZSwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5yZW1vdmVEb2N1bWVudE1vdXNlVXBMaXN0ZW5lcigpO1xuICAgICAgdGhpcy5yZW1vdmVEb2N1bWVudFRvdWNoRW5kTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIENTUyBjbGFzcyBuYW1lIG9mIHRoZSBjb21wb25lbnRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0Q29tcG9uZW50Q2xhc3NOYW1lJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0Q29tcG9uZW50Q2xhc3NOYW1lKCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNsYXNzTmFtZXMuaW5wdXRSYW5nZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2xhc3NOYW1lcy5kaXNhYmxlZElucHV0UmFuZ2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBib3VuZGluZyByZWN0IG9mIHRoZSB0cmFja1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7Q2xpZW50UmVjdH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0VHJhY2tDbGllbnRSZWN0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VHJhY2tDbGllbnRSZWN0KCkge1xuICAgICAgcmV0dXJuIHRoaXMudHJhY2tOb2RlLmdldENsaWVudFJlY3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdGhlIHNsaWRlciBrZXkgY2xvc2VzdCB0byBhIHBvaW50XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1BvaW50fSBwb3NpdGlvblxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnZ2V0S2V5QnlQb3NpdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEtleUJ5UG9zaXRpb24ocG9zaXRpb24pIHtcbiAgICAgIHZhciB2YWx1ZXMgPSB2YWx1ZVRyYW5zZm9ybWVyLmdldFZhbHVlRnJvbVByb3BzKHRoaXMucHJvcHMsIHRoaXMuaXNNdWx0aVZhbHVlKCkpO1xuICAgICAgdmFyIHBvc2l0aW9ucyA9IHZhbHVlVHJhbnNmb3JtZXIuZ2V0UG9zaXRpb25zRnJvbVZhbHVlcyh2YWx1ZXMsIHRoaXMucHJvcHMubWluVmFsdWUsIHRoaXMucHJvcHMubWF4VmFsdWUsIHRoaXMuZ2V0VHJhY2tDbGllbnRSZWN0KCkpO1xuXG4gICAgICBpZiAodGhpcy5pc011bHRpVmFsdWUoKSkge1xuICAgICAgICB2YXIgZGlzdGFuY2VUb01pbiA9ICgwLCBfdXRpbHMuZGlzdGFuY2VUbykocG9zaXRpb24sIHBvc2l0aW9ucy5taW4pO1xuICAgICAgICB2YXIgZGlzdGFuY2VUb01heCA9ICgwLCBfdXRpbHMuZGlzdGFuY2VUbykocG9zaXRpb24sIHBvc2l0aW9ucy5tYXgpO1xuXG4gICAgICAgIGlmIChkaXN0YW5jZVRvTWluIDwgZGlzdGFuY2VUb01heCkge1xuICAgICAgICAgIHJldHVybiAnbWluJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gJ21heCc7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIGFsbCB0aGUgc2xpZGVyIGtleXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ1tdfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXRLZXlzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0S2V5cygpIHtcbiAgICAgIGlmICh0aGlzLmlzTXVsdGlWYWx1ZSgpKSB7XG4gICAgICAgIHJldHVybiBbJ21pbicsICdtYXgnXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFsnbWF4J107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRydWUgaWYgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgbmV3IGFuZCB0aGUgY3VycmVudCB2YWx1ZSBpc1xuICAgICAqIGdyZWF0ZXIgb3IgZXF1YWwgdG8gdGhlIHN0ZXAgYW1vdW50IG9mIHRoZSBjb21wb25lbnRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7UmFuZ2V9IHZhbHVlc1xuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2hhc1N0ZXBEaWZmZXJlbmNlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFzU3RlcERpZmZlcmVuY2UodmFsdWVzKSB7XG4gICAgICB2YXIgY3VycmVudFZhbHVlcyA9IHZhbHVlVHJhbnNmb3JtZXIuZ2V0VmFsdWVGcm9tUHJvcHModGhpcy5wcm9wcywgdGhpcy5pc011bHRpVmFsdWUoKSk7XG5cbiAgICAgIHJldHVybiAoMCwgX3V0aWxzLmxlbmd0aCkodmFsdWVzLm1pbiwgY3VycmVudFZhbHVlcy5taW4pID49IHRoaXMucHJvcHMuc3RlcCB8fCAoMCwgX3V0aWxzLmxlbmd0aCkodmFsdWVzLm1heCwgY3VycmVudFZhbHVlcy5tYXgpID49IHRoaXMucHJvcHMuc3RlcDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgY29tcG9uZW50IGFjY2VwdHMgYSBtaW4gYW5kIG1heCB2YWx1ZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaXNNdWx0aVZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNNdWx0aVZhbHVlKCkge1xuICAgICAgcmV0dXJuICgwLCBfdXRpbHMuaXNPYmplY3QpKHRoaXMucHJvcHMudmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiB0cnVlIGlmIHRoZSByYW5nZSBpcyB3aXRoaW4gdGhlIG1heCBhbmQgbWluIHZhbHVlIG9mIHRoZSBjb21wb25lbnRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7UmFuZ2V9IHZhbHVlc1xuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2lzV2l0aGluUmFuZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc1dpdGhpblJhbmdlKHZhbHVlcykge1xuICAgICAgaWYgKHRoaXMuaXNNdWx0aVZhbHVlKCkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlcy5taW4gPj0gdGhpcy5wcm9wcy5taW5WYWx1ZSAmJiB2YWx1ZXMubWF4IDw9IHRoaXMucHJvcHMubWF4VmFsdWUgJiYgdGhpcy5wcm9wcy5hbGxvd1NhbWVWYWx1ZXMgPyB2YWx1ZXMubWluIDw9IHZhbHVlcy5tYXggOiB2YWx1ZXMubWluIDwgdmFsdWVzLm1heDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlcy5tYXggPj0gdGhpcy5wcm9wcy5taW5WYWx1ZSAmJiB2YWx1ZXMubWF4IDw9IHRoaXMucHJvcHMubWF4VmFsdWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRydWUgaWYgdGhlIG5ldyB2YWx1ZSBzaG91bGQgdHJpZ2dlciBhIHJlbmRlclxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtSYW5nZX0gdmFsdWVzXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnc2hvdWxkVXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdWxkVXBkYXRlKHZhbHVlcykge1xuICAgICAgcmV0dXJuIHRoaXMuaXNXaXRoaW5SYW5nZSh2YWx1ZXMpICYmIHRoaXMuaGFzU3RlcERpZmZlcmVuY2UodmFsdWVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHBvc2l0aW9uIG9mIGEgc2xpZGVyXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAgICogQHBhcmFtIHtQb2ludH0gcG9zaXRpb25cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICd1cGRhdGVQb3NpdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uKGtleSwgcG9zaXRpb24pIHtcbiAgICAgIHZhciB2YWx1ZXMgPSB2YWx1ZVRyYW5zZm9ybWVyLmdldFZhbHVlRnJvbVByb3BzKHRoaXMucHJvcHMsIHRoaXMuaXNNdWx0aVZhbHVlKCkpO1xuICAgICAgdmFyIHBvc2l0aW9ucyA9IHZhbHVlVHJhbnNmb3JtZXIuZ2V0UG9zaXRpb25zRnJvbVZhbHVlcyh2YWx1ZXMsIHRoaXMucHJvcHMubWluVmFsdWUsIHRoaXMucHJvcHMubWF4VmFsdWUsIHRoaXMuZ2V0VHJhY2tDbGllbnRSZWN0KCkpO1xuXG4gICAgICBwb3NpdGlvbnNba2V5XSA9IHBvc2l0aW9uO1xuICAgICAgdGhpcy5sYXN0S2V5TW92ZWQgPSBrZXk7XG5cbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb25zKHBvc2l0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSBwb3NpdGlvbnMgb2YgbXVsdGlwbGUgc2xpZGVyc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHBvc2l0aW9uc1xuICAgICAqIEBwYXJhbSB7UG9pbnR9IHBvc2l0aW9ucy5taW5cbiAgICAgKiBAcGFyYW0ge1BvaW50fSBwb3NpdGlvbnMubWF4XG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlUG9zaXRpb25zJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlUG9zaXRpb25zKHBvc2l0aW9ucykge1xuICAgICAgdmFyIHZhbHVlcyA9IHtcbiAgICAgICAgbWluOiB2YWx1ZVRyYW5zZm9ybWVyLmdldFZhbHVlRnJvbVBvc2l0aW9uKHBvc2l0aW9ucy5taW4sIHRoaXMucHJvcHMubWluVmFsdWUsIHRoaXMucHJvcHMubWF4VmFsdWUsIHRoaXMuZ2V0VHJhY2tDbGllbnRSZWN0KCkpLFxuICAgICAgICBtYXg6IHZhbHVlVHJhbnNmb3JtZXIuZ2V0VmFsdWVGcm9tUG9zaXRpb24ocG9zaXRpb25zLm1heCwgdGhpcy5wcm9wcy5taW5WYWx1ZSwgdGhpcy5wcm9wcy5tYXhWYWx1ZSwgdGhpcy5nZXRUcmFja0NsaWVudFJlY3QoKSlcbiAgICAgIH07XG5cbiAgICAgIHZhciB0cmFuc2Zvcm1lZFZhbHVlcyA9IHtcbiAgICAgICAgbWluOiB2YWx1ZVRyYW5zZm9ybWVyLmdldFN0ZXBWYWx1ZUZyb21WYWx1ZSh2YWx1ZXMubWluLCB0aGlzLnByb3BzLnN0ZXApLFxuICAgICAgICBtYXg6IHZhbHVlVHJhbnNmb3JtZXIuZ2V0U3RlcFZhbHVlRnJvbVZhbHVlKHZhbHVlcy5tYXgsIHRoaXMucHJvcHMuc3RlcClcbiAgICAgIH07XG5cbiAgICAgIHRoaXMudXBkYXRlVmFsdWVzKHRyYW5zZm9ybWVkVmFsdWVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHZhbHVlIG9mIGEgc2xpZGVyXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlVmFsdWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVWYWx1ZShrZXksIHZhbHVlKSB7XG4gICAgICB2YXIgdmFsdWVzID0gdmFsdWVUcmFuc2Zvcm1lci5nZXRWYWx1ZUZyb21Qcm9wcyh0aGlzLnByb3BzLCB0aGlzLmlzTXVsdGlWYWx1ZSgpKTtcblxuICAgICAgdmFsdWVzW2tleV0gPSB2YWx1ZTtcblxuICAgICAgdGhpcy51cGRhdGVWYWx1ZXModmFsdWVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHZhbHVlcyBvZiBtdWx0aXBsZSBzbGlkZXJzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1JhbmdlfG51bWJlcn0gdmFsdWVzXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlVmFsdWVzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlVmFsdWVzKHZhbHVlcykge1xuICAgICAgaWYgKCF0aGlzLnNob3VsZFVwZGF0ZSh2YWx1ZXMpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSh0aGlzLmlzTXVsdGlWYWx1ZSgpID8gdmFsdWVzIDogdmFsdWVzLm1heCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5jcmVtZW50IHRoZSB2YWx1ZSBvZiBhIHNsaWRlciBieSBrZXkgbmFtZVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2luY3JlbWVudFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5jcmVtZW50VmFsdWUoa2V5KSB7XG4gICAgICB2YXIgdmFsdWVzID0gdmFsdWVUcmFuc2Zvcm1lci5nZXRWYWx1ZUZyb21Qcm9wcyh0aGlzLnByb3BzLCB0aGlzLmlzTXVsdGlWYWx1ZSgpKTtcbiAgICAgIHZhciB2YWx1ZSA9IHZhbHVlc1trZXldICsgdGhpcy5wcm9wcy5zdGVwO1xuXG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKGtleSwgdmFsdWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlY3JlbWVudCB0aGUgdmFsdWUgb2YgYSBzbGlkZXIgYnkga2V5IG5hbWVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdkZWNyZW1lbnRWYWx1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlY3JlbWVudFZhbHVlKGtleSkge1xuICAgICAgdmFyIHZhbHVlcyA9IHZhbHVlVHJhbnNmb3JtZXIuZ2V0VmFsdWVGcm9tUHJvcHModGhpcy5wcm9wcywgdGhpcy5pc011bHRpVmFsdWUoKSk7XG4gICAgICB2YXIgdmFsdWUgPSB2YWx1ZXNba2V5XSAtIHRoaXMucHJvcHMuc3RlcDtcblxuICAgICAgdGhpcy51cGRhdGVWYWx1ZShrZXksIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gdG8gbW91c2V1cCBldmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnYWRkRG9jdW1lbnRNb3VzZVVwTGlzdGVuZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGREb2N1bWVudE1vdXNlVXBMaXN0ZW5lcigpIHtcbiAgICAgIHRoaXMucmVtb3ZlRG9jdW1lbnRNb3VzZVVwTGlzdGVuZXIoKTtcbiAgICAgIHRoaXMubm9kZS5vd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZU1vdXNlVXApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpc3RlbiB0byB0b3VjaGVuZCBldmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnYWRkRG9jdW1lbnRUb3VjaEVuZExpc3RlbmVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkRG9jdW1lbnRUb3VjaEVuZExpc3RlbmVyKCkge1xuICAgICAgdGhpcy5yZW1vdmVEb2N1bWVudFRvdWNoRW5kTGlzdGVuZXIoKTtcbiAgICAgIHRoaXMubm9kZS5vd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5oYW5kbGVUb3VjaEVuZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RvcCBsaXN0ZW5pbmcgdG8gbW91c2V1cCBldmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlRG9jdW1lbnRNb3VzZVVwTGlzdGVuZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVEb2N1bWVudE1vdXNlVXBMaXN0ZW5lcigpIHtcbiAgICAgIHRoaXMubm9kZS5vd25lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZU1vdXNlVXApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3AgbGlzdGVuaW5nIHRvIHRvdWNoZW5kIGV2ZW50XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmVEb2N1bWVudFRvdWNoRW5kTGlzdGVuZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVEb2N1bWVudFRvdWNoRW5kTGlzdGVuZXIoKSB7XG4gICAgICB0aGlzLm5vZGUub3duZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuaGFuZGxlVG91Y2hFbmQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBhbnkgXCJtb3VzZW1vdmVcIiBldmVudCByZWNlaXZlZCBieSB0aGUgc2xpZGVyXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVTbGlkZXJEcmFnJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlU2xpZGVyRHJhZyhldmVudCwga2V5KSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgcG9zaXRpb24gPSB2YWx1ZVRyYW5zZm9ybWVyLmdldFBvc2l0aW9uRnJvbUV2ZW50KGV2ZW50LCB0aGlzLmdldFRyYWNrQ2xpZW50UmVjdCgpKTtcbiAgICAgIHRoaXMuaXNTbGlkZXJEcmFnZ2luZyA9IHRydWU7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLnVwZGF0ZVBvc2l0aW9uKGtleSwgcG9zaXRpb24pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGFueSBcIm1vdXNlbW92ZVwiIGV2ZW50IHJlY2VpdmVkIGJ5IHRoZSB0cmFja1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtTeW50aGV0aWNFdmVudH0gZXZlbnRcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVUcmFja0RyYWcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUcmFja0RyYWcoZXZlbnQsIHByZXZFdmVudCkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQgfHwgIXRoaXMucHJvcHMuZHJhZ2dhYmxlVHJhY2sgfHwgdGhpcy5pc1NsaWRlckRyYWdnaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgbWF4VmFsdWUgPSBfcHJvcHMubWF4VmFsdWUsXG4gICAgICAgICAgbWluVmFsdWUgPSBfcHJvcHMubWluVmFsdWUsXG4gICAgICAgICAgX3Byb3BzJHZhbHVlID0gX3Byb3BzLnZhbHVlLFxuICAgICAgICAgIG1heCA9IF9wcm9wcyR2YWx1ZS5tYXgsXG4gICAgICAgICAgbWluID0gX3Byb3BzJHZhbHVlLm1pbjtcblxuXG4gICAgICB2YXIgcG9zaXRpb24gPSB2YWx1ZVRyYW5zZm9ybWVyLmdldFBvc2l0aW9uRnJvbUV2ZW50KGV2ZW50LCB0aGlzLmdldFRyYWNrQ2xpZW50UmVjdCgpKTtcbiAgICAgIHZhciB2YWx1ZSA9IHZhbHVlVHJhbnNmb3JtZXIuZ2V0VmFsdWVGcm9tUG9zaXRpb24ocG9zaXRpb24sIG1pblZhbHVlLCBtYXhWYWx1ZSwgdGhpcy5nZXRUcmFja0NsaWVudFJlY3QoKSk7XG4gICAgICB2YXIgc3RlcFZhbHVlID0gdmFsdWVUcmFuc2Zvcm1lci5nZXRTdGVwVmFsdWVGcm9tVmFsdWUodmFsdWUsIHRoaXMucHJvcHMuc3RlcCk7XG5cbiAgICAgIHZhciBwcmV2UG9zaXRpb24gPSB2YWx1ZVRyYW5zZm9ybWVyLmdldFBvc2l0aW9uRnJvbUV2ZW50KHByZXZFdmVudCwgdGhpcy5nZXRUcmFja0NsaWVudFJlY3QoKSk7XG4gICAgICB2YXIgcHJldlZhbHVlID0gdmFsdWVUcmFuc2Zvcm1lci5nZXRWYWx1ZUZyb21Qb3NpdGlvbihwcmV2UG9zaXRpb24sIG1pblZhbHVlLCBtYXhWYWx1ZSwgdGhpcy5nZXRUcmFja0NsaWVudFJlY3QoKSk7XG4gICAgICB2YXIgcHJldlN0ZXBWYWx1ZSA9IHZhbHVlVHJhbnNmb3JtZXIuZ2V0U3RlcFZhbHVlRnJvbVZhbHVlKHByZXZWYWx1ZSwgdGhpcy5wcm9wcy5zdGVwKTtcblxuICAgICAgdmFyIG9mZnNldCA9IHByZXZTdGVwVmFsdWUgLSBzdGVwVmFsdWU7XG5cbiAgICAgIHZhciB0cmFuc2Zvcm1lZFZhbHVlcyA9IHtcbiAgICAgICAgbWluOiBtaW4gLSBvZmZzZXQsXG4gICAgICAgIG1heDogbWF4IC0gb2Zmc2V0XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlcyh0cmFuc2Zvcm1lZFZhbHVlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGFueSBcImtleWRvd25cIiBldmVudCByZWNlaXZlZCBieSB0aGUgc2xpZGVyXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVTbGlkZXJLZXlEb3duJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlU2xpZGVyS2V5RG93bihldmVudCwga2V5KSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5kaXNhYmxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgICBjYXNlIF9rZXlDb2Rlcy5MRUZUX0FSUk9XOlxuICAgICAgICBjYXNlIF9rZXlDb2Rlcy5ET1dOX0FSUk9XOlxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5kZWNyZW1lbnRWYWx1ZShrZXkpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgX2tleUNvZGVzLlJJR0hUX0FSUk9XOlxuICAgICAgICBjYXNlIF9rZXlDb2Rlcy5VUF9BUlJPVzpcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIHRoaXMuaW5jcmVtZW50VmFsdWUoa2V5KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSBhbnkgXCJtb3VzZWRvd25cIiBldmVudCByZWNlaXZlZCBieSB0aGUgdHJhY2tcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7U3ludGhldGljRXZlbnR9IGV2ZW50XG4gICAgICogQHBhcmFtIHtQb2ludH0gcG9zaXRpb25cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVUcmFja01vdXNlRG93bicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRyYWNrTW91c2VEb3duKGV2ZW50LCBwb3NpdGlvbikge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgX3Byb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgbWF4VmFsdWUgPSBfcHJvcHMyLm1heFZhbHVlLFxuICAgICAgICAgIG1pblZhbHVlID0gX3Byb3BzMi5taW5WYWx1ZSxcbiAgICAgICAgICBfcHJvcHMyJHZhbHVlID0gX3Byb3BzMi52YWx1ZSxcbiAgICAgICAgICBtYXggPSBfcHJvcHMyJHZhbHVlLm1heCxcbiAgICAgICAgICBtaW4gPSBfcHJvcHMyJHZhbHVlLm1pbjtcblxuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB2YXIgdmFsdWUgPSB2YWx1ZVRyYW5zZm9ybWVyLmdldFZhbHVlRnJvbVBvc2l0aW9uKHBvc2l0aW9uLCBtaW5WYWx1ZSwgbWF4VmFsdWUsIHRoaXMuZ2V0VHJhY2tDbGllbnRSZWN0KCkpO1xuICAgICAgdmFyIHN0ZXBWYWx1ZSA9IHZhbHVlVHJhbnNmb3JtZXIuZ2V0U3RlcFZhbHVlRnJvbVZhbHVlKHZhbHVlLCB0aGlzLnByb3BzLnN0ZXApO1xuXG4gICAgICBpZiAoIXRoaXMucHJvcHMuZHJhZ2dhYmxlVHJhY2sgfHwgc3RlcFZhbHVlID4gbWF4IHx8IHN0ZXBWYWx1ZSA8IG1pbikge1xuICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKHRoaXMuZ2V0S2V5QnlQb3NpdGlvbihwb3NpdGlvbiksIHBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGhlIHN0YXJ0IG9mIGFueSBtb3VzZS90b3VjaCBldmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaGFuZGxlSW50ZXJhY3Rpb25TdGFydCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUludGVyYWN0aW9uU3RhcnQoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZVN0YXJ0KSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2VTdGFydCh0aGlzLnByb3BzLnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2VDb21wbGV0ZSAmJiAhKDAsIF91dGlscy5pc0RlZmluZWQpKHRoaXMuc3RhcnRWYWx1ZSkpIHtcbiAgICAgICAgdGhpcy5zdGFydFZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGhlIGVuZCBvZiBhbnkgbW91c2UvdG91Y2ggZXZlbnRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2hhbmRsZUludGVyYWN0aW9uRW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlSW50ZXJhY3Rpb25FbmQoKSB7XG4gICAgICBpZiAodGhpcy5pc1NsaWRlckRyYWdnaW5nKSB7XG4gICAgICAgIHRoaXMuaXNTbGlkZXJEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXRoaXMucHJvcHMub25DaGFuZ2VDb21wbGV0ZSB8fCAhKDAsIF91dGlscy5pc0RlZmluZWQpKHRoaXMuc3RhcnRWYWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zdGFydFZhbHVlICE9PSB0aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2VDb21wbGV0ZSh0aGlzLnByb3BzLnZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdGFydFZhbHVlID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgYW55IFwia2V5ZG93blwiIGV2ZW50IHJlY2VpdmVkIGJ5IHRoZSBjb21wb25lbnRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7U3ludGhldGljRXZlbnR9IGV2ZW50XG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaGFuZGxlS2V5RG93bicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICAgIHRoaXMuaGFuZGxlSW50ZXJhY3Rpb25TdGFydChldmVudCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGFueSBcImtleXVwXCIgZXZlbnQgcmVjZWl2ZWQgYnkgdGhlIGNvbXBvbmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtTeW50aGV0aWNFdmVudH0gZXZlbnRcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVLZXlVcCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZUtleVVwKGV2ZW50KSB7XG4gICAgICB0aGlzLmhhbmRsZUludGVyYWN0aW9uRW5kKGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgYW55IFwibW91c2Vkb3duXCIgZXZlbnQgcmVjZWl2ZWQgYnkgdGhlIGNvbXBvbmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtTeW50aGV0aWNFdmVudH0gZXZlbnRcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVNb3VzZURvd24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcbiAgICAgIHRoaXMuaGFuZGxlSW50ZXJhY3Rpb25TdGFydChldmVudCk7XG4gICAgICB0aGlzLmFkZERvY3VtZW50TW91c2VVcExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGFueSBcIm1vdXNldXBcIiBldmVudCByZWNlaXZlZCBieSB0aGUgY29tcG9uZW50XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVNb3VzZVVwJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VVcChldmVudCkge1xuICAgICAgdGhpcy5oYW5kbGVJbnRlcmFjdGlvbkVuZChldmVudCk7XG4gICAgICB0aGlzLnJlbW92ZURvY3VtZW50TW91c2VVcExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIGFueSBcInRvdWNoc3RhcnRcIiBldmVudCByZWNlaXZlZCBieSB0aGUgY29tcG9uZW50XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2hhbmRsZVRvdWNoU3RhcnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0KGV2ZW50KSB7XG4gICAgICB0aGlzLmhhbmRsZUludGVyYWN0aW9uU3RhcnQoZXZlbnQpO1xuICAgICAgdGhpcy5hZGREb2N1bWVudFRvdWNoRW5kTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgYW55IFwidG91Y2hlbmRcIiBldmVudCByZWNlaXZlZCBieSB0aGUgY29tcG9uZW50XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVUb3VjaEVuZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kKGV2ZW50KSB7XG4gICAgICB0aGlzLmhhbmRsZUludGVyYWN0aW9uRW5kKGV2ZW50KTtcbiAgICAgIHRoaXMucmVtb3ZlRG9jdW1lbnRUb3VjaEVuZExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIEpTWCBvZiBzbGlkZXJzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJuIHtKU1guRWxlbWVudH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyU2xpZGVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlclNsaWRlcnMoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIHZhbHVlcyA9IHZhbHVlVHJhbnNmb3JtZXIuZ2V0VmFsdWVGcm9tUHJvcHModGhpcy5wcm9wcywgdGhpcy5pc011bHRpVmFsdWUoKSk7XG4gICAgICB2YXIgcGVyY2VudGFnZXMgPSB2YWx1ZVRyYW5zZm9ybWVyLmdldFBlcmNlbnRhZ2VzRnJvbVZhbHVlcyh2YWx1ZXMsIHRoaXMucHJvcHMubWluVmFsdWUsIHRoaXMucHJvcHMubWF4VmFsdWUpO1xuICAgICAgdmFyIGtleXMgPSB0aGlzLnByb3BzLmFsbG93U2FtZVZhbHVlcyAmJiB0aGlzLmxhc3RLZXlNb3ZlZCA9PT0gJ21pbicgPyB0aGlzLmdldEtleXMoKS5yZXZlcnNlKCkgOiB0aGlzLmdldEtleXMoKTtcblxuICAgICAgcmV0dXJuIGtleXMubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVzW2tleV07XG4gICAgICAgIHZhciBwZXJjZW50YWdlID0gcGVyY2VudGFnZXNba2V5XTtcblxuICAgICAgICB2YXIgX3Byb3BzMyA9IF90aGlzMy5wcm9wcyxcbiAgICAgICAgICAgIG1heFZhbHVlID0gX3Byb3BzMy5tYXhWYWx1ZSxcbiAgICAgICAgICAgIG1pblZhbHVlID0gX3Byb3BzMy5taW5WYWx1ZTtcblxuXG4gICAgICAgIGlmIChrZXkgPT09ICdtaW4nKSB7XG4gICAgICAgICAgbWF4VmFsdWUgPSB2YWx1ZXMubWF4O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1pblZhbHVlID0gdmFsdWVzLm1pbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzbGlkZXIgPSBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfc2xpZGVyMi5kZWZhdWx0LCB7XG4gICAgICAgICAgYXJpYUxhYmVsbGVkYnk6IF90aGlzMy5wcm9wcy5hcmlhTGFiZWxsZWRieSxcbiAgICAgICAgICBhcmlhQ29udHJvbHM6IF90aGlzMy5wcm9wcy5hcmlhQ29udHJvbHMsXG4gICAgICAgICAgY2xhc3NOYW1lczogX3RoaXMzLnByb3BzLmNsYXNzTmFtZXMsXG4gICAgICAgICAgZm9ybWF0TGFiZWw6IF90aGlzMy5wcm9wcy5mb3JtYXRMYWJlbCxcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICBtYXhWYWx1ZTogbWF4VmFsdWUsXG4gICAgICAgICAgbWluVmFsdWU6IG1pblZhbHVlLFxuICAgICAgICAgIG9uU2xpZGVyRHJhZzogX3RoaXMzLmhhbmRsZVNsaWRlckRyYWcsXG4gICAgICAgICAgb25TbGlkZXJLZXlEb3duOiBfdGhpczMuaGFuZGxlU2xpZGVyS2V5RG93bixcbiAgICAgICAgICBwZXJjZW50YWdlOiBwZXJjZW50YWdlLFxuICAgICAgICAgIHR5cGU6IGtleSxcbiAgICAgICAgICB2YWx1ZTogdmFsdWUgfSk7XG5cbiAgICAgICAgcmV0dXJuIHNsaWRlcjtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybiBKU1ggb2YgaGlkZGVuIGlucHV0c1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7SlNYLkVsZW1lbnR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlckhpZGRlbklucHV0cycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckhpZGRlbklucHV0cygpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICBpZiAoIXRoaXMucHJvcHMubmFtZSkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG5cbiAgICAgIHZhciBpc011bHRpVmFsdWUgPSB0aGlzLmlzTXVsdGlWYWx1ZSgpO1xuICAgICAgdmFyIHZhbHVlcyA9IHZhbHVlVHJhbnNmb3JtZXIuZ2V0VmFsdWVGcm9tUHJvcHModGhpcy5wcm9wcywgaXNNdWx0aVZhbHVlKTtcblxuICAgICAgcmV0dXJuIHRoaXMuZ2V0S2V5cygpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlc1trZXldO1xuICAgICAgICB2YXIgbmFtZSA9IGlzTXVsdGlWYWx1ZSA/ICcnICsgX3RoaXM0LnByb3BzLm5hbWUgKyAoMCwgX3V0aWxzLmNhcHRpYWxpemUpKGtleSkgOiBfdGhpczQucHJvcHMubmFtZTtcblxuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JywgeyBrZXk6IGtleSwgdHlwZTogJ2hpZGRlbicsIG5hbWU6IG5hbWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKiBAcmV0dXJuIHtKU1guRWxlbWVudH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIHZhciBjb21wb25lbnRDbGFzc05hbWUgPSB0aGlzLmdldENvbXBvbmVudENsYXNzTmFtZSgpO1xuICAgICAgdmFyIHZhbHVlcyA9IHZhbHVlVHJhbnNmb3JtZXIuZ2V0VmFsdWVGcm9tUHJvcHModGhpcy5wcm9wcywgdGhpcy5pc011bHRpVmFsdWUoKSk7XG4gICAgICB2YXIgcGVyY2VudGFnZXMgPSB2YWx1ZVRyYW5zZm9ybWVyLmdldFBlcmNlbnRhZ2VzRnJvbVZhbHVlcyh2YWx1ZXMsIHRoaXMucHJvcHMubWluVmFsdWUsIHRoaXMucHJvcHMubWF4VmFsdWUpO1xuXG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgJ2FyaWEtZGlzYWJsZWQnOiB0aGlzLnByb3BzLmRpc2FibGVkLFxuICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKG5vZGUpIHtcbiAgICAgICAgICAgIF90aGlzNS5ub2RlID0gbm9kZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNsYXNzTmFtZTogY29tcG9uZW50Q2xhc3NOYW1lLFxuICAgICAgICAgIG9uS2V5RG93bjogdGhpcy5oYW5kbGVLZXlEb3duLFxuICAgICAgICAgIG9uS2V5VXA6IHRoaXMuaGFuZGxlS2V5VXAsXG4gICAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlTW91c2VEb3duLFxuICAgICAgICAgIG9uVG91Y2hTdGFydDogdGhpcy5oYW5kbGVUb3VjaFN0YXJ0IH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9sYWJlbDIuZGVmYXVsdCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWVzOiB0aGlzLnByb3BzLmNsYXNzTmFtZXMsXG4gICAgICAgICAgICBmb3JtYXRMYWJlbDogdGhpcy5wcm9wcy5mb3JtYXRMYWJlbCxcbiAgICAgICAgICAgIHR5cGU6ICdtaW4nIH0sXG4gICAgICAgICAgdGhpcy5wcm9wcy5taW5WYWx1ZVxuICAgICAgICApLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfdHJhY2syLmRlZmF1bHQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lczogdGhpcy5wcm9wcy5jbGFzc05hbWVzLFxuICAgICAgICAgICAgZHJhZ2dhYmxlVHJhY2s6IHRoaXMucHJvcHMuZHJhZ2dhYmxlVHJhY2ssXG4gICAgICAgICAgICByZWY6IGZ1bmN0aW9uIHJlZih0cmFja05vZGUpIHtcbiAgICAgICAgICAgICAgX3RoaXM1LnRyYWNrTm9kZSA9IHRyYWNrTm9kZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwZXJjZW50YWdlczogcGVyY2VudGFnZXMsXG4gICAgICAgICAgICBvblRyYWNrRHJhZzogdGhpcy5oYW5kbGVUcmFja0RyYWcsXG4gICAgICAgICAgICBvblRyYWNrTW91c2VEb3duOiB0aGlzLmhhbmRsZVRyYWNrTW91c2VEb3duIH0sXG4gICAgICAgICAgdGhpcy5yZW5kZXJTbGlkZXJzKClcbiAgICAgICAgKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX2xhYmVsMi5kZWZhdWx0LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZXM6IHRoaXMucHJvcHMuY2xhc3NOYW1lcyxcbiAgICAgICAgICAgIGZvcm1hdExhYmVsOiB0aGlzLnByb3BzLmZvcm1hdExhYmVsLFxuICAgICAgICAgICAgdHlwZTogJ21heCcgfSxcbiAgICAgICAgICB0aGlzLnByb3BzLm1heFZhbHVlXG4gICAgICAgICksXG4gICAgICAgIHRoaXMucmVuZGVySGlkZGVuSW5wdXRzKClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIElucHV0UmFuZ2U7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpLCAoX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnaGFuZGxlU2xpZGVyRHJhZycsIFtfYXV0b2JpbmREZWNvcmF0b3IyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVTbGlkZXJEcmFnJyksIF9jbGFzcy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVUcmFja0RyYWcnLCBbX2F1dG9iaW5kRGVjb3JhdG9yMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnaGFuZGxlVHJhY2tEcmFnJyksIF9jbGFzcy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVTbGlkZXJLZXlEb3duJywgW19hdXRvYmluZERlY29yYXRvcjIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZVNsaWRlcktleURvd24nKSwgX2NsYXNzLnByb3RvdHlwZSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZVRyYWNrTW91c2VEb3duJywgW19hdXRvYmluZERlY29yYXRvcjIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZVRyYWNrTW91c2VEb3duJyksIF9jbGFzcy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVJbnRlcmFjdGlvblN0YXJ0JywgW19hdXRvYmluZERlY29yYXRvcjIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZUludGVyYWN0aW9uU3RhcnQnKSwgX2NsYXNzLnByb3RvdHlwZSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZUludGVyYWN0aW9uRW5kJywgW19hdXRvYmluZERlY29yYXRvcjIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZUludGVyYWN0aW9uRW5kJyksIF9jbGFzcy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVLZXlEb3duJywgW19hdXRvYmluZERlY29yYXRvcjIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZUtleURvd24nKSwgX2NsYXNzLnByb3RvdHlwZSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZUtleVVwJywgW19hdXRvYmluZERlY29yYXRvcjIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZUtleVVwJyksIF9jbGFzcy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVNb3VzZURvd24nLCBbX2F1dG9iaW5kRGVjb3JhdG9yMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnaGFuZGxlTW91c2VEb3duJyksIF9jbGFzcy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVNb3VzZVVwJywgW19hdXRvYmluZERlY29yYXRvcjIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZU1vdXNlVXAnKSwgX2NsYXNzLnByb3RvdHlwZSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZVRvdWNoU3RhcnQnLCBbX2F1dG9iaW5kRGVjb3JhdG9yMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnaGFuZGxlVG91Y2hTdGFydCcpLCBfY2xhc3MucHJvdG90eXBlKSwgX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnaGFuZGxlVG91Y2hFbmQnLCBbX2F1dG9iaW5kRGVjb3JhdG9yMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnaGFuZGxlVG91Y2hFbmQnKSwgX2NsYXNzLnByb3RvdHlwZSkpLCBfY2xhc3MpO1xuZXhwb3J0cy5kZWZhdWx0ID0gSW5wdXRSYW5nZTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5wdXQtcmFuZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vKiogQGlnbm9yZSAqL1xudmFyIERPV05fQVJST1cgPSBleHBvcnRzLkRPV05fQVJST1cgPSA0MDtcblxuLyoqIEBpZ25vcmUgKi9cbnZhciBMRUZUX0FSUk9XID0gZXhwb3J0cy5MRUZUX0FSUk9XID0gMzc7XG5cbi8qKiBAaWdub3JlICovXG52YXIgUklHSFRfQVJST1cgPSBleHBvcnRzLlJJR0hUX0FSUk9XID0gMzk7XG5cbi8qKiBAaWdub3JlICovXG52YXIgVVBfQVJST1cgPSBleHBvcnRzLlVQX0FSUk9XID0gMzg7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1rZXktY29kZXMuanMubWFwIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gTGFiZWw7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8qKlxuICogQGlnbm9yZVxuICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge0lucHV0UmFuZ2VDbGFzc05hbWVzfSBwcm9wcy5jbGFzc05hbWVzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9wcy5mb3JtYXRMYWJlbFxuICogQHBhcmFtIHtzdHJpbmd9IHByb3BzLnR5cGVcbiAqL1xuZnVuY3Rpb24gTGFiZWwocHJvcHMpIHtcbiAgdmFyIGxhYmVsVmFsdWUgPSBwcm9wcy5mb3JtYXRMYWJlbCA/IHByb3BzLmZvcm1hdExhYmVsKHByb3BzLmNoaWxkcmVuLCBwcm9wcy50eXBlKSA6IHByb3BzLmNoaWxkcmVuO1xuXG4gIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAnc3BhbicsXG4gICAgeyBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZXNbcHJvcHMudHlwZSArICdMYWJlbCddIH0sXG4gICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnc3BhbicsXG4gICAgICB7IGNsYXNzTmFtZTogcHJvcHMuY2xhc3NOYW1lcy5sYWJlbENvbnRhaW5lciB9LFxuICAgICAgbGFiZWxWYWx1ZVxuICAgIClcbiAgKTtcbn1cblxuLyoqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2hpbGRyZW5cbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNsYXNzTmFtZXNcbiAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGZvcm1hdExhYmVsXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSB0eXBlXG4gKi9cbkxhYmVsLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZS5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdE9mKF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nKS5pc1JlcXVpcmVkLFxuICBmb3JtYXRMYWJlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICB0eXBlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZy5pc1JlcXVpcmVkXG59O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG4vLyMgc291cmNlTWFwcGluZ1VSTD1sYWJlbC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSByYW5nZVByb3BUeXBlO1xuXG52YXIgX3V0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBAaWdub3JlXG4gKiBAcGFyYW0ge09iamVjdH0gcHJvcHMgLSBSZWFjdCBjb21wb25lbnQgcHJvcHNcbiAqIEByZXR1cm4gez9FcnJvcn0gUmV0dXJuIEVycm9yIGlmIHZhbGlkYXRpb24gZmFpbHNcbiAqL1xuZnVuY3Rpb24gcmFuZ2VQcm9wVHlwZShwcm9wcykge1xuICB2YXIgbWF4VmFsdWUgPSBwcm9wcy5tYXhWYWx1ZSxcbiAgICAgIG1pblZhbHVlID0gcHJvcHMubWluVmFsdWU7XG5cblxuICBpZiAoISgwLCBfdXRpbHMuaXNOdW1iZXIpKG1pblZhbHVlKSB8fCAhKDAsIF91dGlscy5pc051bWJlcikobWF4VmFsdWUpKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcignXCJtaW5WYWx1ZVwiIGFuZCBcIm1heFZhbHVlXCIgbXVzdCBiZSBhIG51bWJlcicpO1xuICB9XG5cbiAgaWYgKG1pblZhbHVlID49IG1heFZhbHVlKSB7XG4gICAgcmV0dXJuIG5ldyBFcnJvcignXCJtaW5WYWx1ZVwiIG11c3QgYmUgc21hbGxlciB0aGFuIFwibWF4VmFsdWVcIicpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJhbmdlLXByb3AtdHlwZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfZGVzYywgX3ZhbHVlLCBfY2xhc3M7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfYXV0b2JpbmREZWNvcmF0b3IgPSByZXF1aXJlKCdhdXRvYmluZC1kZWNvcmF0b3InKTtcblxudmFyIF9hdXRvYmluZERlY29yYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hdXRvYmluZERlY29yYXRvcik7XG5cbnZhciBfbGFiZWwgPSByZXF1aXJlKCcuL2xhYmVsJyk7XG5cbnZhciBfbGFiZWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbGFiZWwpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVjb3JhdG9ycywgZGVzY3JpcHRvciwgY29udGV4dCkge1xuICB2YXIgZGVzYyA9IHt9O1xuICBPYmplY3RbJ2tlJyArICd5cyddKGRlc2NyaXB0b3IpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGRlc2Nba2V5XSA9IGRlc2NyaXB0b3Jba2V5XTtcbiAgfSk7XG4gIGRlc2MuZW51bWVyYWJsZSA9ICEhZGVzYy5lbnVtZXJhYmxlO1xuICBkZXNjLmNvbmZpZ3VyYWJsZSA9ICEhZGVzYy5jb25maWd1cmFibGU7XG5cbiAgaWYgKCd2YWx1ZScgaW4gZGVzYyB8fCBkZXNjLmluaXRpYWxpemVyKSB7XG4gICAgZGVzYy53cml0YWJsZSA9IHRydWU7XG4gIH1cblxuICBkZXNjID0gZGVjb3JhdG9ycy5zbGljZSgpLnJldmVyc2UoKS5yZWR1Y2UoZnVuY3Rpb24gKGRlc2MsIGRlY29yYXRvcikge1xuICAgIHJldHVybiBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYykgfHwgZGVzYztcbiAgfSwgZGVzYyk7XG5cbiAgaWYgKGNvbnRleHQgJiYgZGVzYy5pbml0aWFsaXplciAhPT0gdm9pZCAwKSB7XG4gICAgZGVzYy52YWx1ZSA9IGRlc2MuaW5pdGlhbGl6ZXIgPyBkZXNjLmluaXRpYWxpemVyLmNhbGwoY29udGV4dCkgOiB2b2lkIDA7XG4gICAgZGVzYy5pbml0aWFsaXplciA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChkZXNjLmluaXRpYWxpemVyID09PSB2b2lkIDApIHtcbiAgICBPYmplY3RbJ2RlZmluZScgKyAnUHJvcGVydHknXSh0YXJnZXQsIHByb3BlcnR5LCBkZXNjKTtcbiAgICBkZXNjID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBkZXNjO1xufVxuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xudmFyIFNsaWRlciA9IChfY2xhc3MgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoU2xpZGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBfY3JlYXRlQ2xhc3MoU2xpZGVyLCBudWxsLCBbe1xuICAgIGtleTogJ3Byb3BUeXBlcycsXG5cbiAgICAvKipcbiAgICAgKiBBY2NlcHRlZCBwcm9wVHlwZXMgb2YgU2xpZGVyXG4gICAgICogQG92ZXJyaWRlXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGFyaWFMYWJlbGxlZGJ5XG4gICAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gYXJpYUNvbnRyb2xzXG4gICAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2xhc3NOYW1lXG4gICAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gZm9ybWF0TGFiZWxcbiAgICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBtYXhWYWx1ZVxuICAgICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IG1pblZhbHVlXG4gICAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gb25TbGlkZXJEcmFnXG4gICAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gb25TbGlkZXJLZXlEb3duXG4gICAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gcGVyY2VudGFnZVxuICAgICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IHR5cGVcbiAgICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSB2YWx1ZVxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYXJpYUxhYmVsbGVkYnk6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAgICAgICBhcmlhQ29udHJvbHM6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICAgICAgICBjbGFzc05hbWVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdE9mKF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nKS5pc1JlcXVpcmVkLFxuICAgICAgICBmb3JtYXRMYWJlbDogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgICAgICBtYXhWYWx1ZTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gICAgICAgIG1pblZhbHVlOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcixcbiAgICAgICAgb25TbGlkZXJEcmFnOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAgb25TbGlkZXJLZXlEb3duOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAgcGVyY2VudGFnZTogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIuaXNSZXF1aXJlZCxcbiAgICAgICAgdHlwZTogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgICAgdmFsdWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLmlzUmVxdWlyZWRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtwcm9wcy5hcmlhTGFiZWxsZWRieV1cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3Byb3BzLmFyaWFDb250cm9sc11cbiAgICAgKiBAcGFyYW0ge0lucHV0UmFuZ2VDbGFzc05hbWVzfSBwcm9wcy5jbGFzc05hbWVzXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gW3Byb3BzLmZvcm1hdExhYmVsXVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbcHJvcHMubWF4VmFsdWVdXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtwcm9wcy5taW5WYWx1ZV1cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9wcy5vblNsaWRlcktleURvd25cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9wcy5vblNsaWRlckRyYWdcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcHJvcHMucGVyY2VudGFnZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwcm9wcy50eXBlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHByb3BzLnZhbHVlXG4gICAgICovXG5cbiAgfV0pO1xuXG4gIGZ1bmN0aW9uIFNsaWRlcihwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTbGlkZXIpO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7P0NvbXBvbmVudH1cbiAgICAgKi9cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoU2xpZGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU2xpZGVyKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMubm9kZSA9IG51bGw7XG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICogQG92ZXJyaWRlXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFNsaWRlciwgW3tcbiAgICBrZXk6ICdjb21wb25lbnRXaWxsVW5tb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgdGhpcy5yZW1vdmVEb2N1bWVudE1vdXNlTW92ZUxpc3RlbmVyKCk7XG4gICAgICB0aGlzLnJlbW92ZURvY3VtZW50TW91c2VVcExpc3RlbmVyKCk7XG4gICAgICB0aGlzLnJlbW92ZURvY3VtZW50VG91Y2hFbmRMaXN0ZW5lcigpO1xuICAgICAgdGhpcy5yZW1vdmVEb2N1bWVudFRvdWNoTW92ZUxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dldFN0eWxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3R5bGUoKSB7XG4gICAgICB2YXIgcGVyYyA9ICh0aGlzLnByb3BzLnBlcmNlbnRhZ2UgfHwgMCkgKiAxMDA7XG4gICAgICB2YXIgc3R5bGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICBsZWZ0OiBwZXJjICsgJyUnXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGlzdGVuIHRvIG1vdXNlbW92ZSBldmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnYWRkRG9jdW1lbnRNb3VzZU1vdmVMaXN0ZW5lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZERvY3VtZW50TW91c2VNb3ZlTGlzdGVuZXIoKSB7XG4gICAgICB0aGlzLnJlbW92ZURvY3VtZW50TW91c2VNb3ZlTGlzdGVuZXIoKTtcbiAgICAgIHRoaXMubm9kZS5vd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlTW91c2VNb3ZlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gdG8gbW91c2V1cCBldmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnYWRkRG9jdW1lbnRNb3VzZVVwTGlzdGVuZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGREb2N1bWVudE1vdXNlVXBMaXN0ZW5lcigpIHtcbiAgICAgIHRoaXMucmVtb3ZlRG9jdW1lbnRNb3VzZVVwTGlzdGVuZXIoKTtcbiAgICAgIHRoaXMubm9kZS5vd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZU1vdXNlVXApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIExpc3RlbiB0byB0b3VjaG1vdmUgZXZlbnRcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2FkZERvY3VtZW50VG91Y2hNb3ZlTGlzdGVuZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGREb2N1bWVudFRvdWNoTW92ZUxpc3RlbmVyKCkge1xuICAgICAgdGhpcy5yZW1vdmVEb2N1bWVudFRvdWNoTW92ZUxpc3RlbmVyKCk7XG4gICAgICB0aGlzLm5vZGUub3duZXJEb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmhhbmRsZVRvdWNoTW92ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGlzdGVuIHRvIHRvdWNoZW5kIGV2ZW50XG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdhZGREb2N1bWVudFRvdWNoRW5kTGlzdGVuZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGREb2N1bWVudFRvdWNoRW5kTGlzdGVuZXIoKSB7XG4gICAgICB0aGlzLnJlbW92ZURvY3VtZW50VG91Y2hFbmRMaXN0ZW5lcigpO1xuICAgICAgdGhpcy5ub2RlLm93bmVyRG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLmhhbmRsZVRvdWNoRW5kKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3JlbW92ZURvY3VtZW50TW91c2VNb3ZlTGlzdGVuZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVEb2N1bWVudE1vdXNlTW92ZUxpc3RlbmVyKCkge1xuICAgICAgdGhpcy5ub2RlLm93bmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5oYW5kbGVNb3VzZU1vdmUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlRG9jdW1lbnRNb3VzZVVwTGlzdGVuZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVEb2N1bWVudE1vdXNlVXBMaXN0ZW5lcigpIHtcbiAgICAgIHRoaXMubm9kZS5vd25lckRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZU1vdXNlVXApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlRG9jdW1lbnRUb3VjaE1vdmVMaXN0ZW5lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZURvY3VtZW50VG91Y2hNb3ZlTGlzdGVuZXIoKSB7XG4gICAgICB0aGlzLm5vZGUub3duZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCB0aGlzLmhhbmRsZVRvdWNoTW92ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmVEb2N1bWVudFRvdWNoRW5kTGlzdGVuZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW1vdmVEb2N1bWVudFRvdWNoRW5kTGlzdGVuZXIoKSB7XG4gICAgICB0aGlzLm5vZGUub3duZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuaGFuZGxlVG91Y2hFbmQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaGFuZGxlTW91c2VEb3duJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duKCkge1xuICAgICAgdGhpcy5hZGREb2N1bWVudE1vdXNlTW92ZUxpc3RlbmVyKCk7XG4gICAgICB0aGlzLmFkZERvY3VtZW50TW91c2VVcExpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVNb3VzZVVwJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTW91c2VVcCgpIHtcbiAgICAgIHRoaXMucmVtb3ZlRG9jdW1lbnRNb3VzZU1vdmVMaXN0ZW5lcigpO1xuICAgICAgdGhpcy5yZW1vdmVEb2N1bWVudE1vdXNlVXBMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtTeW50aGV0aWNFdmVudH0gZXZlbnRcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVNb3VzZU1vdmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmUoZXZlbnQpIHtcbiAgICAgIHRoaXMucHJvcHMub25TbGlkZXJEcmFnKGV2ZW50LCB0aGlzLnByb3BzLnR5cGUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaGFuZGxlVG91Y2hTdGFydCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnQoKSB7XG4gICAgICB0aGlzLmFkZERvY3VtZW50VG91Y2hFbmRMaXN0ZW5lcigpO1xuICAgICAgdGhpcy5hZGREb2N1bWVudFRvdWNoTW92ZUxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2hhbmRsZVRvdWNoTW92ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZShldmVudCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNsaWRlckRyYWcoZXZlbnQsIHRoaXMucHJvcHMudHlwZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVUb3VjaEVuZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kKCkge1xuICAgICAgdGhpcy5yZW1vdmVEb2N1bWVudFRvdWNoTW92ZUxpc3RlbmVyKCk7XG4gICAgICB0aGlzLnJlbW92ZURvY3VtZW50VG91Y2hFbmRMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtTeW50aGV0aWNFdmVudH0gZXZlbnRcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVLZXlEb3duJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgICAgdGhpcy5wcm9wcy5vblNsaWRlcktleURvd24oZXZlbnQsIHRoaXMucHJvcHMudHlwZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICogQHJldHVybiB7SlNYLkVsZW1lbnR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB2YXIgc3R5bGUgPSB0aGlzLmdldFN0eWxlKCk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ3NwYW4nLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzTmFtZXMuc2xpZGVyQ29udGFpbmVyLFxuICAgICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKG5vZGUpIHtcbiAgICAgICAgICAgIF90aGlzMi5ub2RlID0gbm9kZTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN0eWxlOiBzdHlsZSB9LFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfbGFiZWwyLmRlZmF1bHQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lczogdGhpcy5wcm9wcy5jbGFzc05hbWVzLFxuICAgICAgICAgICAgZm9ybWF0TGFiZWw6IHRoaXMucHJvcHMuZm9ybWF0TGFiZWwsXG4gICAgICAgICAgICB0eXBlOiAndmFsdWUnIH0sXG4gICAgICAgICAgdGhpcy5wcm9wcy52YWx1ZVxuICAgICAgICApLFxuICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgICdhcmlhLWxhYmVsbGVkYnknOiB0aGlzLnByb3BzLmFyaWFMYWJlbGxlZGJ5LFxuICAgICAgICAgICdhcmlhLWNvbnRyb2xzJzogdGhpcy5wcm9wcy5hcmlhQ29udHJvbHMsXG4gICAgICAgICAgJ2FyaWEtdmFsdWVtYXgnOiB0aGlzLnByb3BzLm1heFZhbHVlLFxuICAgICAgICAgICdhcmlhLXZhbHVlbWluJzogdGhpcy5wcm9wcy5taW5WYWx1ZSxcbiAgICAgICAgICAnYXJpYS12YWx1ZW5vdyc6IHRoaXMucHJvcHMudmFsdWUsXG4gICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzTmFtZXMuc2xpZGVyLFxuICAgICAgICAgIGRyYWdnYWJsZTogJ2ZhbHNlJyxcbiAgICAgICAgICBvbktleURvd246IHRoaXMuaGFuZGxlS2V5RG93bixcbiAgICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVNb3VzZURvd24sXG4gICAgICAgICAgb25Ub3VjaFN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG4gICAgICAgICAgcm9sZTogJ3NsaWRlcicsXG4gICAgICAgICAgdGFiSW5kZXg6ICcwJyB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU2xpZGVyO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KSwgKF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZU1vdXNlRG93bicsIFtfYXV0b2JpbmREZWNvcmF0b3IyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVNb3VzZURvd24nKSwgX2NsYXNzLnByb3RvdHlwZSksIF9hcHBseURlY29yYXRlZERlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZU1vdXNlVXAnLCBbX2F1dG9iaW5kRGVjb3JhdG9yMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnaGFuZGxlTW91c2VVcCcpLCBfY2xhc3MucHJvdG90eXBlKSwgX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnaGFuZGxlTW91c2VNb3ZlJywgW19hdXRvYmluZERlY29yYXRvcjIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZU1vdXNlTW92ZScpLCBfY2xhc3MucHJvdG90eXBlKSwgX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnaGFuZGxlVG91Y2hTdGFydCcsIFtfYXV0b2JpbmREZWNvcmF0b3IyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVUb3VjaFN0YXJ0JyksIF9jbGFzcy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVUb3VjaE1vdmUnLCBbX2F1dG9iaW5kRGVjb3JhdG9yMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnaGFuZGxlVG91Y2hNb3ZlJyksIF9jbGFzcy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVUb3VjaEVuZCcsIFtfYXV0b2JpbmREZWNvcmF0b3IyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVUb3VjaEVuZCcpLCBfY2xhc3MucHJvdG90eXBlKSwgX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnaGFuZGxlS2V5RG93bicsIFtfYXV0b2JpbmREZWNvcmF0b3IyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVLZXlEb3duJyksIF9jbGFzcy5wcm90b3R5cGUpKSwgX2NsYXNzKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFNsaWRlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2xpZGVyLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9kZXNjLCBfdmFsdWUsIF9jbGFzcztcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9hdXRvYmluZERlY29yYXRvciA9IHJlcXVpcmUoJ2F1dG9iaW5kLWRlY29yYXRvcicpO1xuXG52YXIgX2F1dG9iaW5kRGVjb3JhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2F1dG9iaW5kRGVjb3JhdG9yKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5mdW5jdGlvbiBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHksIGRlY29yYXRvcnMsIGRlc2NyaXB0b3IsIGNvbnRleHQpIHtcbiAgdmFyIGRlc2MgPSB7fTtcbiAgT2JqZWN0WydrZScgKyAneXMnXShkZXNjcmlwdG9yKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBkZXNjW2tleV0gPSBkZXNjcmlwdG9yW2tleV07XG4gIH0pO1xuICBkZXNjLmVudW1lcmFibGUgPSAhIWRlc2MuZW51bWVyYWJsZTtcbiAgZGVzYy5jb25maWd1cmFibGUgPSAhIWRlc2MuY29uZmlndXJhYmxlO1xuXG4gIGlmICgndmFsdWUnIGluIGRlc2MgfHwgZGVzYy5pbml0aWFsaXplcikge1xuICAgIGRlc2Mud3JpdGFibGUgPSB0cnVlO1xuICB9XG5cbiAgZGVzYyA9IGRlY29yYXRvcnMuc2xpY2UoKS5yZXZlcnNlKCkucmVkdWNlKGZ1bmN0aW9uIChkZXNjLCBkZWNvcmF0b3IpIHtcbiAgICByZXR1cm4gZGVjb3JhdG9yKHRhcmdldCwgcHJvcGVydHksIGRlc2MpIHx8IGRlc2M7XG4gIH0sIGRlc2MpO1xuXG4gIGlmIChjb250ZXh0ICYmIGRlc2MuaW5pdGlhbGl6ZXIgIT09IHZvaWQgMCkge1xuICAgIGRlc2MudmFsdWUgPSBkZXNjLmluaXRpYWxpemVyID8gZGVzYy5pbml0aWFsaXplci5jYWxsKGNvbnRleHQpIDogdm9pZCAwO1xuICAgIGRlc2MuaW5pdGlhbGl6ZXIgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAoZGVzYy5pbml0aWFsaXplciA9PT0gdm9pZCAwKSB7XG4gICAgT2JqZWN0WydkZWZpbmUnICsgJ1Byb3BlcnR5J10odGFyZ2V0LCBwcm9wZXJ0eSwgZGVzYyk7XG4gICAgZGVzYyA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gZGVzYztcbn1cblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbnZhciBUcmFjayA9IChfY2xhc3MgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoVHJhY2ssIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIF9jcmVhdGVDbGFzcyhUcmFjaywgbnVsbCwgW3tcbiAgICBrZXk6ICdwcm9wVHlwZXMnLFxuXG4gICAgLyoqXG4gICAgICogQG92ZXJyaWRlXG4gICAgICogQHJldHVybiB7T2JqZWN0fVxuICAgICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IGNoaWxkcmVuXG4gICAgICogQHByb3BlcnR5IHtGdW5jdGlvbn0gY2xhc3NOYW1lc1xuICAgICAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZHJhZ2dhYmxlVHJhY2tcbiAgICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBvblRyYWNrRHJhZ1xuICAgICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259IG9uVHJhY2tNb3VzZURvd25cbiAgICAgKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBwZXJjZW50YWdlc1xuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY2hpbGRyZW46IF9wcm9wVHlwZXMyLmRlZmF1bHQubm9kZS5pc1JlcXVpcmVkLFxuICAgICAgICBjbGFzc05hbWVzOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdE9mKF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nKS5pc1JlcXVpcmVkLFxuICAgICAgICBkcmFnZ2FibGVUcmFjazogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICAgICAgICBvblRyYWNrRHJhZzogX3Byb3BUeXBlczIuZGVmYXVsdC5mdW5jLFxuICAgICAgICBvblRyYWNrTW91c2VEb3duOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZCxcbiAgICAgICAgcGVyY2VudGFnZXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0T2YoX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIpLmlzUmVxdWlyZWRcbiAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BzXG4gICAgICogQHBhcmFtIHtJbnB1dFJhbmdlQ2xhc3NOYW1lc30gcHJvcHMuY2xhc3NOYW1lc1xuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gcHJvcHMuZHJhZ2dhYmxlVHJhY2tcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcm9wcy5vblRyYWNrRHJhZ1xuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHByb3BzLm9uVHJhY2tNb3VzZURvd25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcHJvcHMucGVyY2VudGFnZXNcbiAgICAgKi9cblxuICB9XSk7XG5cbiAgZnVuY3Rpb24gVHJhY2socHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVHJhY2spO1xuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7P0NvbXBvbmVudH1cbiAgICAgKi9cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoVHJhY2suX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihUcmFjaykpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLm5vZGUgPSBudWxsO1xuICAgIF90aGlzLnRyYWNrRHJhZ0V2ZW50ID0gbnVsbDtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQHJldHVybiB7Q2xpZW50UmVjdH1cbiAgICovXG5cblxuICBfY3JlYXRlQ2xhc3MoVHJhY2ssIFt7XG4gICAga2V5OiAnZ2V0Q2xpZW50UmVjdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldENsaWVudFJlY3QoKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7T2JqZWN0fSBDU1Mgc3R5bGVzXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2dldEFjdGl2ZVRyYWNrU3R5bGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRBY3RpdmVUcmFja1N0eWxlKCkge1xuICAgICAgdmFyIHdpZHRoID0gKHRoaXMucHJvcHMucGVyY2VudGFnZXMubWF4IC0gdGhpcy5wcm9wcy5wZXJjZW50YWdlcy5taW4pICogMTAwICsgJyUnO1xuICAgICAgdmFyIGxlZnQgPSB0aGlzLnByb3BzLnBlcmNlbnRhZ2VzLm1pbiAqIDEwMCArICclJztcblxuICAgICAgcmV0dXJuIHsgbGVmdDogbGVmdCwgd2lkdGg6IHdpZHRoIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGlzdGVuIHRvIG1vdXNlbW92ZSBldmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnYWRkRG9jdW1lbnRNb3VzZU1vdmVMaXN0ZW5lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFkZERvY3VtZW50TW91c2VNb3ZlTGlzdGVuZXIoKSB7XG4gICAgICB0aGlzLnJlbW92ZURvY3VtZW50TW91c2VNb3ZlTGlzdGVuZXIoKTtcbiAgICAgIHRoaXMubm9kZS5vd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuaGFuZGxlTW91c2VNb3ZlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBMaXN0ZW4gdG8gbW91c2V1cCBldmVudFxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnYWRkRG9jdW1lbnRNb3VzZVVwTGlzdGVuZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGREb2N1bWVudE1vdXNlVXBMaXN0ZW5lcigpIHtcbiAgICAgIHRoaXMucmVtb3ZlRG9jdW1lbnRNb3VzZVVwTGlzdGVuZXIoKTtcbiAgICAgIHRoaXMubm9kZS5vd25lckRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLmhhbmRsZU1vdXNlVXApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVtb3ZlRG9jdW1lbnRNb3VzZU1vdmVMaXN0ZW5lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZURvY3VtZW50TW91c2VNb3ZlTGlzdGVuZXIoKSB7XG4gICAgICB0aGlzLm5vZGUub3duZXJEb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmhhbmRsZU1vdXNlTW92ZSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdyZW1vdmVEb2N1bWVudE1vdXNlVXBMaXN0ZW5lcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbW92ZURvY3VtZW50TW91c2VVcExpc3RlbmVyKCkge1xuICAgICAgdGhpcy5ub2RlLm93bmVyRG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuaGFuZGxlTW91c2VVcCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2hhbmRsZU1vdXNlTW92ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZShldmVudCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmRyYWdnYWJsZVRyYWNrKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMudHJhY2tEcmFnRXZlbnQgIT09IG51bGwpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vblRyYWNrRHJhZyhldmVudCwgdGhpcy50cmFja0RyYWdFdmVudCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMudHJhY2tEcmFnRXZlbnQgPSBldmVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogJ2hhbmRsZU1vdXNlVXAnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZVVwKCkge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmRyYWdnYWJsZVRyYWNrKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZW1vdmVEb2N1bWVudE1vdXNlTW92ZUxpc3RlbmVyKCk7XG4gICAgICB0aGlzLnJlbW92ZURvY3VtZW50TW91c2VVcExpc3RlbmVyKCk7XG4gICAgICB0aGlzLnRyYWNrRHJhZ0V2ZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7U3ludGhldGljRXZlbnR9IGV2ZW50IC0gVXNlciBldmVudFxuICAgICAqL1xuXG4gIH0sIHtcbiAgICBrZXk6ICdoYW5kbGVNb3VzZURvd24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcbiAgICAgIHZhciBjbGllbnRYID0gZXZlbnQudG91Y2hlcyA/IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCA6IGV2ZW50LmNsaWVudFg7XG4gICAgICB2YXIgdHJhY2tDbGllbnRSZWN0ID0gdGhpcy5nZXRDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgcG9zaXRpb24gPSB7XG4gICAgICAgIHg6IGNsaWVudFggLSB0cmFja0NsaWVudFJlY3QubGVmdCxcbiAgICAgICAgeTogMFxuICAgICAgfTtcblxuICAgICAgdGhpcy5wcm9wcy5vblRyYWNrTW91c2VEb3duKGV2ZW50LCBwb3NpdGlvbik7XG5cbiAgICAgIGlmICh0aGlzLnByb3BzLmRyYWdnYWJsZVRyYWNrKSB7XG4gICAgICAgIHRoaXMuYWRkRG9jdW1lbnRNb3VzZU1vdmVMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLmFkZERvY3VtZW50TW91c2VVcExpc3RlbmVyKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudCAtIFVzZXIgZXZlbnRcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnaGFuZGxlVG91Y2hTdGFydCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnQoZXZlbnQpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIHRoaXMuaGFuZGxlTW91c2VEb3duKGV2ZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAb3ZlcnJpZGVcbiAgICAgKiBAcmV0dXJuIHtKU1guRWxlbWVudH1cbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBhY3RpdmVUcmFja1N0eWxlID0gdGhpcy5nZXRBY3RpdmVUcmFja1N0eWxlKCk7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3NOYW1lcy50cmFjayxcbiAgICAgICAgICBvbk1vdXNlRG93bjogdGhpcy5oYW5kbGVNb3VzZURvd24sXG4gICAgICAgICAgb25Ub3VjaFN0YXJ0OiB0aGlzLmhhbmRsZVRvdWNoU3RhcnQsXG4gICAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYobm9kZSkge1xuICAgICAgICAgICAgX3RoaXMyLm5vZGUgPSBub2RlO1xuICAgICAgICAgIH0gfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtcbiAgICAgICAgICBzdHlsZTogYWN0aXZlVHJhY2tTdHlsZSxcbiAgICAgICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3NOYW1lcy5hY3RpdmVUcmFjayB9KSxcbiAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVHJhY2s7XG59KF9yZWFjdDIuZGVmYXVsdC5Db21wb25lbnQpLCAoX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnaGFuZGxlTW91c2VNb3ZlJywgW19hdXRvYmluZERlY29yYXRvcjIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZU1vdXNlTW92ZScpLCBfY2xhc3MucHJvdG90eXBlKSwgX2FwcGx5RGVjb3JhdGVkRGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnaGFuZGxlTW91c2VVcCcsIFtfYXV0b2JpbmREZWNvcmF0b3IyLmRlZmF1bHRdLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVNb3VzZVVwJyksIF9jbGFzcy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVNb3VzZURvd24nLCBbX2F1dG9iaW5kRGVjb3JhdG9yMi5kZWZhdWx0XSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihfY2xhc3MucHJvdG90eXBlLCAnaGFuZGxlTW91c2VEb3duJyksIF9jbGFzcy5wcm90b3R5cGUpLCBfYXBwbHlEZWNvcmF0ZWREZXNjcmlwdG9yKF9jbGFzcy5wcm90b3R5cGUsICdoYW5kbGVUb3VjaFN0YXJ0JywgW19hdXRvYmluZERlY29yYXRvcjIuZGVmYXVsdF0sIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoX2NsYXNzLnByb3RvdHlwZSwgJ2hhbmRsZVRvdWNoU3RhcnQnKSwgX2NsYXNzLnByb3RvdHlwZSkpLCBfY2xhc3MpO1xuZXhwb3J0cy5kZWZhdWx0ID0gVHJhY2s7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyYWNrLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZhbHVlUHJvcFR5cGU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICogQHJldHVybiB7P0Vycm9yfSBSZXR1cm4gRXJyb3IgaWYgdmFsaWRhdGlvbiBmYWlsc1xuICovXG5mdW5jdGlvbiB2YWx1ZVByb3BUeXBlKHByb3BzLCBwcm9wTmFtZSkge1xuICB2YXIgbWF4VmFsdWUgPSBwcm9wcy5tYXhWYWx1ZSxcbiAgICAgIG1pblZhbHVlID0gcHJvcHMubWluVmFsdWU7XG5cbiAgdmFyIHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuXG4gIGlmICghKDAsIF91dGlscy5pc051bWJlcikodmFsdWUpICYmICghKDAsIF91dGlscy5pc09iamVjdCkodmFsdWUpIHx8ICEoMCwgX3V0aWxzLmlzTnVtYmVyKSh2YWx1ZS5taW4pIHx8ICEoMCwgX3V0aWxzLmlzTnVtYmVyKSh2YWx1ZS5tYXgpKSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoJ1wiJyArIHByb3BOYW1lICsgJ1wiIG11c3QgYmUgYSBudW1iZXIgb3IgYSByYW5nZSBvYmplY3QnKTtcbiAgfVxuXG4gIGlmICgoMCwgX3V0aWxzLmlzTnVtYmVyKSh2YWx1ZSkgJiYgKHZhbHVlIDwgbWluVmFsdWUgfHwgdmFsdWUgPiBtYXhWYWx1ZSkpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKCdcIicgKyBwcm9wTmFtZSArICdcIiBtdXN0IGJlIGluIGJldHdlZW4gXCJtaW5WYWx1ZVwiIGFuZCBcIm1heFZhbHVlXCInKTtcbiAgfVxuXG4gIGlmICgoMCwgX3V0aWxzLmlzT2JqZWN0KSh2YWx1ZSkgJiYgKHZhbHVlLm1pbiA8IG1pblZhbHVlIHx8IHZhbHVlLm1pbiA+IG1heFZhbHVlIHx8IHZhbHVlLm1heCA8IG1pblZhbHVlIHx8IHZhbHVlLm1heCA+IG1heFZhbHVlKSkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoJ1wiJyArIHByb3BOYW1lICsgJ1wiIG11c3QgYmUgaW4gYmV0d2VlbiBcIm1pblZhbHVlXCIgYW5kIFwibWF4VmFsdWVcIicpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZhbHVlLXByb3AtdHlwZS5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZ2V0UGVyY2VudGFnZUZyb21Qb3NpdGlvbiA9IGdldFBlcmNlbnRhZ2VGcm9tUG9zaXRpb247XG5leHBvcnRzLmdldFZhbHVlRnJvbVBvc2l0aW9uID0gZ2V0VmFsdWVGcm9tUG9zaXRpb247XG5leHBvcnRzLmdldFZhbHVlRnJvbVByb3BzID0gZ2V0VmFsdWVGcm9tUHJvcHM7XG5leHBvcnRzLmdldFBlcmNlbnRhZ2VGcm9tVmFsdWUgPSBnZXRQZXJjZW50YWdlRnJvbVZhbHVlO1xuZXhwb3J0cy5nZXRQZXJjZW50YWdlc0Zyb21WYWx1ZXMgPSBnZXRQZXJjZW50YWdlc0Zyb21WYWx1ZXM7XG5leHBvcnRzLmdldFBvc2l0aW9uRnJvbVZhbHVlID0gZ2V0UG9zaXRpb25Gcm9tVmFsdWU7XG5leHBvcnRzLmdldFBvc2l0aW9uc0Zyb21WYWx1ZXMgPSBnZXRQb3NpdGlvbnNGcm9tVmFsdWVzO1xuZXhwb3J0cy5nZXRQb3NpdGlvbkZyb21FdmVudCA9IGdldFBvc2l0aW9uRnJvbUV2ZW50O1xuZXhwb3J0cy5nZXRTdGVwVmFsdWVGcm9tVmFsdWUgPSBnZXRTdGVwVmFsdWVGcm9tVmFsdWU7XG5cbnZhciBfdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG4vKipcbiAqIENvbnZlcnQgYSBwb2ludCBpbnRvIGEgcGVyY2VudGFnZSB2YWx1ZVxuICogQGlnbm9yZVxuICogQHBhcmFtIHtQb2ludH0gcG9zaXRpb25cbiAqIEBwYXJhbSB7Q2xpZW50UmVjdH0gY2xpZW50UmVjdFxuICogQHJldHVybiB7bnVtYmVyfSBQZXJjZW50YWdlIHZhbHVlXG4gKi9cbmZ1bmN0aW9uIGdldFBlcmNlbnRhZ2VGcm9tUG9zaXRpb24ocG9zaXRpb24sIGNsaWVudFJlY3QpIHtcbiAgdmFyIGxlbmd0aCA9IGNsaWVudFJlY3Qud2lkdGg7XG4gIHZhciBzaXplUGVyYyA9IHBvc2l0aW9uLnggLyBsZW5ndGg7XG5cbiAgcmV0dXJuIHNpemVQZXJjIHx8IDA7XG59XG5cbi8qKlxuICogQ29udmVydCBhIHBvaW50IGludG8gYSBtb2RlbCB2YWx1ZVxuICogQGlnbm9yZVxuICogQHBhcmFtIHtQb2ludH0gcG9zaXRpb25cbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW5WYWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IG1heFZhbHVlXG4gKiBAcGFyYW0ge0NsaWVudFJlY3R9IGNsaWVudFJlY3RcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWVGcm9tUG9zaXRpb24ocG9zaXRpb24sIG1pblZhbHVlLCBtYXhWYWx1ZSwgY2xpZW50UmVjdCkge1xuICB2YXIgc2l6ZVBlcmMgPSBnZXRQZXJjZW50YWdlRnJvbVBvc2l0aW9uKHBvc2l0aW9uLCBjbGllbnRSZWN0KTtcbiAgdmFyIHZhbHVlRGlmZiA9IG1heFZhbHVlIC0gbWluVmFsdWU7XG5cbiAgcmV0dXJuIG1pblZhbHVlICsgdmFsdWVEaWZmICogc2l6ZVBlcmM7XG59XG5cbi8qKlxuICogQ29udmVydCBwcm9wcyBpbnRvIGEgcmFuZ2UgdmFsdWVcbiAqIEBpZ25vcmVcbiAqIEBwYXJhbSB7T2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtib29sZWFufSBpc011bHRpVmFsdWVcbiAqIEByZXR1cm4ge1JhbmdlfVxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZUZyb21Qcm9wcyhwcm9wcywgaXNNdWx0aVZhbHVlKSB7XG4gIGlmIChpc011bHRpVmFsdWUpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHByb3BzLnZhbHVlKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbWluOiBwcm9wcy5taW5WYWx1ZSxcbiAgICBtYXg6IHByb3BzLnZhbHVlXG4gIH07XG59XG5cbi8qKlxuICogQ29udmVydCBhIG1vZGVsIHZhbHVlIGludG8gYSBwZXJjZW50YWdlIHZhbHVlXG4gKiBAaWdub3JlXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW5WYWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IG1heFZhbHVlXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldFBlcmNlbnRhZ2VGcm9tVmFsdWUodmFsdWUsIG1pblZhbHVlLCBtYXhWYWx1ZSkge1xuICB2YXIgdmFsaWRWYWx1ZSA9ICgwLCBfdXRpbHMuY2xhbXApKHZhbHVlLCBtaW5WYWx1ZSwgbWF4VmFsdWUpO1xuICB2YXIgdmFsdWVEaWZmID0gbWF4VmFsdWUgLSBtaW5WYWx1ZTtcbiAgdmFyIHZhbHVlUGVyYyA9ICh2YWxpZFZhbHVlIC0gbWluVmFsdWUpIC8gdmFsdWVEaWZmO1xuXG4gIHJldHVybiB2YWx1ZVBlcmMgfHwgMDtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IG1vZGVsIHZhbHVlcyBpbnRvIHBlcmNlbnRhZ2UgdmFsdWVzXG4gKiBAaWdub3JlXG4gKiBAcGFyYW0ge1JhbmdlfSB2YWx1ZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW5WYWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IG1heFZhbHVlXG4gKiBAcmV0dXJuIHtSYW5nZX1cbiAqL1xuZnVuY3Rpb24gZ2V0UGVyY2VudGFnZXNGcm9tVmFsdWVzKHZhbHVlcywgbWluVmFsdWUsIG1heFZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgbWluOiBnZXRQZXJjZW50YWdlRnJvbVZhbHVlKHZhbHVlcy5taW4sIG1pblZhbHVlLCBtYXhWYWx1ZSksXG4gICAgbWF4OiBnZXRQZXJjZW50YWdlRnJvbVZhbHVlKHZhbHVlcy5tYXgsIG1pblZhbHVlLCBtYXhWYWx1ZSlcbiAgfTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgdmFsdWUgaW50byBhIHBvaW50XG4gKiBAaWdub3JlXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW5WYWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IG1heFZhbHVlXG4gKiBAcGFyYW0ge0NsaWVudFJlY3R9IGNsaWVudFJlY3RcbiAqIEByZXR1cm4ge1BvaW50fSBQb3NpdGlvblxuICovXG5mdW5jdGlvbiBnZXRQb3NpdGlvbkZyb21WYWx1ZSh2YWx1ZSwgbWluVmFsdWUsIG1heFZhbHVlLCBjbGllbnRSZWN0KSB7XG4gIHZhciBsZW5ndGggPSBjbGllbnRSZWN0LndpZHRoO1xuICB2YXIgdmFsdWVQZXJjID0gZ2V0UGVyY2VudGFnZUZyb21WYWx1ZSh2YWx1ZSwgbWluVmFsdWUsIG1heFZhbHVlKTtcbiAgdmFyIHBvc2l0aW9uVmFsdWUgPSB2YWx1ZVBlcmMgKiBsZW5ndGg7XG5cbiAgcmV0dXJuIHtcbiAgICB4OiBwb3NpdGlvblZhbHVlLFxuICAgIHk6IDBcbiAgfTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0IGEgcmFuZ2Ugb2YgdmFsdWVzIGludG8gcG9pbnRzXG4gKiBAaWdub3JlXG4gKiBAcGFyYW0ge1JhbmdlfSB2YWx1ZXNcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW5WYWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IG1heFZhbHVlXG4gKiBAcGFyYW0ge0NsaWVudFJlY3R9IGNsaWVudFJlY3RcbiAqIEByZXR1cm4ge1JhbmdlfVxuICovXG5mdW5jdGlvbiBnZXRQb3NpdGlvbnNGcm9tVmFsdWVzKHZhbHVlcywgbWluVmFsdWUsIG1heFZhbHVlLCBjbGllbnRSZWN0KSB7XG4gIHJldHVybiB7XG4gICAgbWluOiBnZXRQb3NpdGlvbkZyb21WYWx1ZSh2YWx1ZXMubWluLCBtaW5WYWx1ZSwgbWF4VmFsdWUsIGNsaWVudFJlY3QpLFxuICAgIG1heDogZ2V0UG9zaXRpb25Gcm9tVmFsdWUodmFsdWVzLm1heCwgbWluVmFsdWUsIG1heFZhbHVlLCBjbGllbnRSZWN0KVxuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnQgYW4gZXZlbnQgaW50byBhIHBvaW50XG4gKiBAaWdub3JlXG4gKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICogQHBhcmFtIHtDbGllbnRSZWN0fSBjbGllbnRSZWN0XG4gKiBAcmV0dXJuIHtQb2ludH1cbiAqL1xuZnVuY3Rpb24gZ2V0UG9zaXRpb25Gcm9tRXZlbnQoZXZlbnQsIGNsaWVudFJlY3QpIHtcbiAgdmFyIGxlbmd0aCA9IGNsaWVudFJlY3Qud2lkdGg7XG5cbiAgdmFyIF9yZWYgPSBldmVudC50b3VjaGVzID8gZXZlbnQudG91Y2hlc1swXSA6IGV2ZW50LFxuICAgICAgY2xpZW50WCA9IF9yZWYuY2xpZW50WDtcblxuICByZXR1cm4ge1xuICAgIHg6ICgwLCBfdXRpbHMuY2xhbXApKGNsaWVudFggLSBjbGllbnRSZWN0LmxlZnQsIDAsIGxlbmd0aCksXG4gICAgeTogMFxuICB9O1xufVxuXG4vKipcbiAqIENvbnZlcnQgYSB2YWx1ZSBpbnRvIGEgc3RlcCB2YWx1ZVxuICogQGlnbm9yZVxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVQZXJTdGVwXG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbmZ1bmN0aW9uIGdldFN0ZXBWYWx1ZUZyb21WYWx1ZSh2YWx1ZSwgdmFsdWVQZXJTdGVwKSB7XG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlIC8gdmFsdWVQZXJTdGVwKSAqIHZhbHVlUGVyU3RlcDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXZhbHVlLXRyYW5zZm9ybWVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY2FwdGlhbGl6ZTtcbi8qKlxuICogQ2FwdGlhbGl6ZSBhIHN0cmluZ1xuICogQGlnbm9yZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBjYXB0aWFsaXplKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNhcHRpYWxpemUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjbGFtcDtcbi8qKlxuICogQ2xhbXAgYSB2YWx1ZSBiZXR3ZWVuIGEgbWluIGFuZCBtYXggdmFsdWVcbiAqIEBpZ25vcmVcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXJ9IG1pblxuICogQHBhcmFtIHtudW1iZXJ9IG1heFxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBtaW4pLCBtYXgpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsYW1wLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZGlzdGFuY2VUbztcbi8qKlxuICogQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHBvaW50QSBhbmQgcG9pbnRCXG4gKiBAaWdub3JlXG4gKiBAcGFyYW0ge1BvaW50fSBwb2ludEFcbiAqIEBwYXJhbSB7UG9pbnR9IHBvaW50QlxuICogQHJldHVybiB7bnVtYmVyfSBEaXN0YW5jZVxuICovXG5mdW5jdGlvbiBkaXN0YW5jZVRvKHBvaW50QSwgcG9pbnRCKSB7XG4gIHZhciB4RGlmZiA9IE1hdGgucG93KHBvaW50Qi54IC0gcG9pbnRBLngsIDIpO1xuICB2YXIgeURpZmYgPSBNYXRoLnBvdyhwb2ludEIueSAtIHBvaW50QS55LCAyKTtcblxuICByZXR1cm4gTWF0aC5zcXJ0KHhEaWZmICsgeURpZmYpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRpc3RhbmNlLXRvLmpzLm1hcCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jYXB0aWFsaXplID0gcmVxdWlyZSgnLi9jYXB0aWFsaXplJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY2FwdGlhbGl6ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhcHRpYWxpemUpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2NsYW1wID0gcmVxdWlyZSgnLi9jbGFtcCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NsYW1wJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2xhbXApLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2Rpc3RhbmNlVG8gPSByZXF1aXJlKCcuL2Rpc3RhbmNlLXRvJyk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnZGlzdGFuY2VUbycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2Rpc3RhbmNlVG8pLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2lzRGVmaW5lZCA9IHJlcXVpcmUoJy4vaXMtZGVmaW5lZCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzRGVmaW5lZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzRGVmaW5lZCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbnZhciBfaXNOdW1iZXIgPSByZXF1aXJlKCcuL2lzLW51bWJlcicpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzTnVtYmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNOdW1iZXIpLmRlZmF1bHQ7XG4gIH1cbn0pO1xuXG52YXIgX2lzT2JqZWN0ID0gcmVxdWlyZSgnLi9pcy1vYmplY3QnKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc09iamVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lzT2JqZWN0KS5kZWZhdWx0O1xuICB9XG59KTtcblxudmFyIF9sZW5ndGggPSByZXF1aXJlKCcuL2xlbmd0aCcpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2xlbmd0aCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xlbmd0aCkuZGVmYXVsdDtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGlzRGVmaW5lZDtcbi8qKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBkZWZpbmVkXG4gKiBAaWdub3JlXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IG51bGw7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMtZGVmaW5lZC5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBpc051bWJlcjtcbi8qKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhIG51bWJlclxuICogQGlnbm9yZVxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLW51bWJlci5qcy5tYXAiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gaXNPYmplY3Q7XG4vKipcbiAqIENoZWNrIGlmIGEgdmFsdWUgaXMgYW4gb2JqZWN0XG4gKiBAaWdub3JlXG4gKiBAcGFyYW0geyp9IHZhbHVlXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodmFsdWUpKSA9PT0gJ29iamVjdCc7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzLW9iamVjdC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGxlbmd0aDtcbi8qKlxuICogQ2FsY3VsYXRlIHRoZSBhYnNvbHV0ZSBkaWZmZXJlbmNlIGJldHdlZW4gdHdvIG51bWJlcnNcbiAqIEBpZ25vcmVcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1BXG4gKiBAcGFyYW0ge251bWJlcn0gbnVtQlxuICogQHJldHVybiB7bnVtYmVyfVxuICovXG5mdW5jdGlvbiBsZW5ndGgobnVtQSwgbnVtQikge1xuICByZXR1cm4gTWF0aC5hYnMobnVtQSAtIG51bUIpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxlbmd0aC5qcy5tYXAiLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBBbGVydCwgQmFkZ2UsIEJ1dHRvbiwgQ29sLCBDb250YWluZXIsIElucHV0LCBSb3cgfSBmcm9tIFwicmVhY3RzdHJhcFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERhdGFUYWJsZSBmcm9tIFwicmVhY3QtZGF0YS10YWJsZS1jb21wb25lbnRcIjtcbmltcG9ydCBjYXRlZ29yaWVzSGllcmFyaHkgZnJvbSBcIi4uL2NhdGVnb3JpZXNfaGllcmFyY2h5Lmpzb25cIjtcbmltcG9ydCB7IFlNSW5pdGlhbGl6ZXIgfSBmcm9tIFwicmVhY3QteWFuZGV4LW1ldHJpa2FcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBJbnB1dFJhbmdlIGZyb20gXCJyZWFjdC1pbnB1dC1yYW5nZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgY29kZXMsIHByb2R1Y3RzIH0pIHtcbiAgY29uc3QgW3NlbGVjdGVkQ2F0ZWdvcnksIHNldFNlbGVjdGVkQ2F0ZWdyeV0gPSB1c2VTdGF0ZShcItCS0YHQtVwiKTtcbiAgY29uc3QgW3NlbGVjdGVkU3ViQ2F0ZWdvcnksIHNldFNlbGVjdGVkU3ViQ2F0ZWdvcnldID0gdXNlU3RhdGUoXCLQktGB0LVcIik7XG4gIGNvbnN0IFtzZWxlY3RlZENvZGUsIHNldFNlbGVjdGVkQ29kZV0gPSB1c2VTdGF0ZShcItCS0YHQtVwiKTtcbiAgY29uc3QgW2Rpc3BsYXllZEl0ZW1zLCBzZXREaXNwbGF5ZWRJdGVtc10gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbc2hvd1N1YmNhdGVnb3JpZXNGb3IsIHNldFNob3dTdWJjYXRlZ29yaWVzRm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFttaW5Qcm9kdWN0UHJpY2UsIHNldE1pblByb2R1Y3RQcmljZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW21heFByb2R1Y3RQcmljZSwgbWF4TWluUHJvZHVjdFByaWNlXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RGlzcGxheWVkSXRlbXMoXG4gICAgICBwcm9kdWN0cy5maWx0ZXIoXG4gICAgICAgIChpdGVtKSA9PlxuICAgICAgICAgIChzZWxlY3RlZENvZGUgPT09IFwi0JLRgdC1XCIgfHxcbiAgICAgICAgICAgIGl0ZW0uY29kZS50b1VwcGVyQ2FzZSgpID09PSBzZWxlY3RlZENvZGUudG9VcHBlckNhc2UoKSkgJiZcbiAgICAgICAgICAoc2VsZWN0ZWRDYXRlZ29yeSA9PT0gXCLQktGB0LVcIiB8fCBpdGVtLmNhdGVnb3J5ID09PSBzZWxlY3RlZENhdGVnb3J5KSAmJlxuICAgICAgICAgIChzZWxlY3RlZFN1YkNhdGVnb3J5ID09PSBcItCS0YHQtVwiIHx8XG4gICAgICAgICAgICBpdGVtLnN1YmNhdGVnb3J5ID09PSBzZWxlY3RlZFN1YkNhdGVnb3J5KSAmJlxuICAgICAgICAgIGl0ZW0ubmFtZS50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoLnRvTG93ZXJDYXNlKCkpICE9PSAtMSAmJlxuICAgICAgICAgICghaXRlbS5pc0FkdWx0IHx8XG4gICAgICAgICAgICAoc2VsZWN0ZWRDYXRlZ29yeSA9PT0gXCLQotC+0LLQsNGA0Ysg0LTQu9GPINCy0LfRgNC+0YHQu9GL0YVcIiAmJlxuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlzQWR1bHRcIikgPT09IFwidHJ1ZVwiKSlcbiAgICAgIClcbiAgICApO1xuICAgIHNldE1pblByb2R1Y3RQcmljZShNYXRoLm1pbihkaXNwbGF5ZWRJdGVtcy5tYXAoKHApID0+IHAucHJpY2UpKSk7XG4gICAgc2V0TWF4UHJvZHVjdFByaWNlKE1hdGgubWF4KGRpc3BsYXllZEl0ZW1zLm1hcCgocCkgPT4gcC5wcmljZSkpKTtcbiAgfSwgW3NlbGVjdGVkQ29kZSwgc2VsZWN0ZWRDYXRlZ29yeSwgc2VsZWN0ZWRTdWJDYXRlZ29yeSwgc2VhcmNoXSk7XG5cbiAgY29uc3QgY29sdW1ucyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcItCY0LfQvtCx0YDQsNC20LXQvdC40LVcIixcbiAgICAgIHNlbGVjdG9yOiBcImltYWdlXCIsXG4gICAgICBjZWxsOiAocm93KSA9PiAoXG4gICAgICAgIDxpbWcgc3JjPXtyb3cuaW1nfSB3aWR0aD1cIjUwXCIgaGVpZ2h0PVwiNTBcIiBhbHQ9e3Jvdy5uYW1lfSAvPlxuICAgICAgKSxcbiAgICAgIGNlbnRlcjogdHJ1ZSxcbiAgICAgIGdyb3c6IFwiMFwiLFxuICAgICAgY29tcGFjdDogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi0J3QsNC30LLQsNC90LjQtVwiLFxuICAgICAgc2VsZWN0b3I6IFwibmFtZVwiLFxuICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICBncm93OiBcIjJcIixcbiAgICAgIHdyYXA6IHRydWUsXG4gICAgICBjb21wYWN0OiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLQodGC0LDRgNCw0Y8g0YbQtdC90LBcIixcbiAgICAgIHNlbGVjdG9yOiBcIm9sZF9wcmljZVwiLFxuICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICBjZWxsOiAocm93KSA9PiA8c3Bhbj57cm93Lm9sZF9wcmljZX3igr08L3NwYW4+LFxuICAgICAgZ3JvdzogXCIwXCIsXG4gICAgICBjb21wYWN0OiB0cnVlLFxuICAgICAgbWluV2lkdGg6IFwiNjBweFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLQptC10L3QsCDRgdC+INGB0LrQuNC00LrQvtC5XCIsXG4gICAgICBzZWxlY3RvcjogXCJwcmljZVwiLFxuICAgICAgc29ydGFibGU6IHRydWUsXG4gICAgICBjZWxsOiAocm93KSA9PiA8c3Bhbj57cm93LnByaWNlfeKCvTwvc3Bhbj4sXG4gICAgICBncm93OiBcIjBcIixcbiAgICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgICBtaW5XaWR0aDogXCI2MHB4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcItCg0LXQsNC70YzQvdCw0Y8g0LLRi9Cz0L7QtNCwXCIsXG4gICAgICBzZWxlY3RvcjogXCJyZWFsX2Rpc2NvdW50XCIsXG4gICAgICBzb3J0YWJsZTogdHJ1ZSxcbiAgICAgIGRlZmF1bHRTb3J0QXNjOiBmYWxzZSxcbiAgICAgIGNlbGw6IChyb3cpID0+IDxzcGFuPntyb3cucmVhbF9kaXNjb3VudH3igr08L3NwYW4+LFxuICAgICAgc29ydEZ1bmN0aW9uOiAocm93QSwgcm93QikgPT5cbiAgICAgICAgKHBhcnNlSW50KHJvd0EucmVhbF9kaXNjb3VudCkgKyAwLjEgfHwgMC41KSAtXG4gICAgICAgIChwYXJzZUludChyb3dCLnJlYWxfZGlzY291bnQpICsgMC4xIHx8IDAuNSksXG4gICAgICBncm93OiBcIjBcIixcbiAgICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgICBtaW5XaWR0aDogXCI2MHB4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcItCf0YDQvtC80L7QutC+0LRcIixcbiAgICAgIHNlbGVjdG9yOiBcImNvZGVcIixcbiAgICAgIHNvcnRhYmxlOiB0cnVlLFxuICAgICAgY2VsbDogKHJvdykgPT4gPHNwYW4+e3Jvdy5jb2RlLnRvVXBwZXJDYXNlKCl9PC9zcGFuPixcbiAgICAgIHNvcnRGdW5jdGlvbjogKHJvd0EsIHJvd0IpID0+XG4gICAgICAgIHBhcnNlSW50KChyb3dBLmNvZGUubWF0Y2goL1xcZCsvKSB8fCBbXCIwXCJdKVswXSkgLVxuICAgICAgICBwYXJzZUludCgocm93Qi5jb2RlLm1hdGNoKC9cXGQrLykgfHwgW1wiMFwiXSlbMF0pLFxuICAgICAgZGVmYXVsdFNvcnRBc2M6IGZhbHNlLFxuICAgICAgZ3JvdzogXCIwXCIsXG4gICAgICBjb21wYWN0OiB0cnVlLFxuICAgICAgbWluV2lkdGg6IFwiNzBweFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCLQmtGD0L/QuNGC0YxcIixcbiAgICAgIHNlbGVjdG9yOiBcImJ1eVwiLFxuICAgICAgY2VsbDogKHJvdykgPT4gKFxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY29sb3I9XCJ3YXJuaW5nXCJcbiAgICAgICAgICBocmVmPXtgaHR0cHM6Ly9wb2t1cGtpLm1hcmtldC55YW5kZXgucnUvcHJvZHVjdC8ke3Jvdy5pZH1gfVxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXJcIlxuICAgICAgICA+XG4gICAgICAgICAg0JrRg9C/0LjRgtGMXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgKSxcbiAgICAgIG1pbldpZHRoOiBcIjEwMHB4XCIsXG4gICAgICBncm93OiBcIjBcIixcbiAgICAgIGNvbXBhY3Q6IHRydWUsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBjYXRlZ29yaWVzID0gW1xuICAgIFwi0JLRgdC1XCIsXG4gICAgLi4uW1xuICAgICAgLi4ucHJvZHVjdHNcbiAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAoaXRlbSkgPT5cbiAgICAgICAgICAgIHNlbGVjdGVkQ29kZSA9PT0gXCLQktGB0LVcIiB8fFxuICAgICAgICAgICAgaXRlbS5jb2RlLnRvVXBwZXJDYXNlKCkgPT09IHNlbGVjdGVkQ29kZS50b1VwcGVyQ2FzZSgpXG4gICAgICAgIClcbiAgICAgICAgLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgICAgICAgIHJldHVybiBwcmV2LmFkZChjdXJyLmNhdGVnb3J5KTtcbiAgICAgICAgfSwgbmV3IFNldCgpKSxcbiAgICBdLnNvcnQoKGEsIGIpID0+XG4gICAgICBhID09PSBcItCi0L7QstCw0YDRiyDQtNC70Y8g0LLQt9GA0L7RgdC70YvRhVwiXG4gICAgICAgID8gMVxuICAgICAgICA6IGIgPT09IFwi0KLQvtCy0LDRgNGLINC00LvRjyDQstC30YDQvtGB0LvRi9GFXCJcbiAgICAgICAgPyAtMVxuICAgICAgICA6IGEubG9jYWxlQ29tcGFyZShiKVxuICAgICksXG4gIF07XG5cbiAgY29uc3Qgc3ViQ2F0ZWdvcmllcyA9IFtcbiAgICBcItCS0YHQtVwiLFxuICAgIC4uLltcbiAgICAgIC4uLnByb2R1Y3RzXG4gICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgKGl0ZW0pID0+XG4gICAgICAgICAgICAoc2VsZWN0ZWRDb2RlID09PSBcItCS0YHQtVwiIHx8XG4gICAgICAgICAgICAgIGl0ZW0uY29kZS50b1VwcGVyQ2FzZSgpID09PSBzZWxlY3RlZENvZGUudG9VcHBlckNhc2UoKSkgJiZcbiAgICAgICAgICAgIHNob3dTdWJjYXRlZ29yaWVzRm9yID09PSBpdGVtLmNhdGVnb3J5XG4gICAgICAgIClcbiAgICAgICAgLnJlZHVjZSgocHJldiwgY3VycikgPT4ge1xuICAgICAgICAgIHJldHVybiBwcmV2LmFkZChjdXJyLnN1YmNhdGVnb3J5KTtcbiAgICAgICAgfSwgbmV3IFNldCgpKSxcbiAgICBdLnNvcnQoKSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLXZoLTEwMCBkLWZsZXggZmxleC1jb2x1bW5cIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+0J/RgNC+0LzQvtC60L7QtNGLINC00LvRjyDQr9C90LTQtdC60YEu0JzQsNGA0LrQtdGC0LA8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwi0JrQsNGC0LDQu9C+0LMg0LLRgdC10YUg0YLQvtCy0LDRgNC+0LIg0LTQvtGB0YLRg9C/0L3Ri9GFINC00LvRjyDQv9C+0LrRg9C/0LrQuCDQvdCwINCv0L3QtNC10LrRgS7QnNCw0YDQutC10YLQtSDRgdC+INGB0LrQuNC00LrQvtC5INC/0L4g0L/RgNC+0LzQvtC60L7QtNCw0LwgQ1VUNC1DVVQyNSDQuCBHTzMtR08yOS5cIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJiZy13YXJuaW5nIG1iLTNcIj5cbiAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIHB5LTJcIj5cbiAgICAgICAgICAgIDxoMT7Qn9GA0L7QvNC+0LrQvtC00Ysg0LTQu9GPINCv0L3QtNC10LrRgS7QnNCw0YDQutC10YLQsDwvaDE+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJvdmVyZmxvdy1hdXRvIG1iLTNcIj5cbiAgICAgICAgPENvbnRhaW5lciBmbHVpZD1cIm1kXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXItMlwiPtCf0YDQvtC80L7QutC+0LTRizo8L2gzPlxuICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgW1wi0JLRgdC1XCIsIC4uLmNvZGVzXS5tYXAoKGNvZGUpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgzIG1yLTFcIiBrZXk9e2NvZGV9PlxuICAgICAgICAgICAgICAgICAgPEJhZGdlXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtjb2RlID09PSBzZWxlY3RlZENvZGUgPyBcIndhcm5pbmdcIiA6IFwic2Vjb25kYXJ5XCJ9XG4gICAgICAgICAgICAgICAgICAgIHBpbGxcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRDb2RlKGNvZGUpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y29kZS50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSksXG4gICAgICAgICAgICBdfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1yLTJcIj7QmtCw0YLQtdCz0L7RgNC40Lg6PC9oNT5cbiAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNSBtci0xXCIga2V5PXtjYXRlZ29yeX0+XG4gICAgICAgICAgICAgICAgPEJhZGdlXG4gICAgICAgICAgICAgICAgICBjb2xvcj17XG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5ID09PSBzZWxlY3RlZENhdGVnb3J5XG4gICAgICAgICAgICAgICAgICAgICAgPyBcIndhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIDogY2F0ZWdvcnkgPT09IFwi0KLQvtCy0LDRgNGLINC00LvRjyDQstC30YDQvtGB0LvRi9GFXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHBpbGxcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5ID09PSBcItCi0L7QstCw0YDRiyDQtNC70Y8g0LLQt9GA0L7RgdC70YvRhVwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImlzQWR1bHRcIikgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaXNBZHVsdFwiKSAhPT0gXCJ0cnVlXCIpXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQWR1bHQgPSBjb25maXJtKFwi0JLQsNC8INC10YHRgtGMIDE4INC70LXRgj9cIik7XG4gICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJpc0FkdWx0XCIsIGlzQWR1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICghaXNBZHVsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZENhdGVncnkoY2F0ZWdvcnkpO1xuICAgICAgICAgICAgICAgICAgICBzZXRTaG93U3ViY2F0ZWdvcmllc0ZvcihcbiAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeSA9PT0gXCLQktGB0LVcIiA/IG51bGwgOiBjYXRlZ29yeVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFN1YkNhdGVnb3J5KFwi0JLRgdC1XCIpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7c2hvd1N1YmNhdGVnb3JpZXNGb3IgIT09IG51bGwgPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXItMiBtYi0wXCI+0J/QvtC00LrQsNGC0LXQs9C+0YDQuNC4OjwvcD5cbiAgICAgICAgICAgICAge3N1YkNhdGVnb3JpZXMubWFwKChzdWIpID0+IChcbiAgICAgICAgICAgICAgICA8QmFkZ2VcbiAgICAgICAgICAgICAgICAgIGNvbG9yPXtzdWIgPT09IHNlbGVjdGVkU3ViQ2F0ZWdvcnkgPyBcIndhcm5pbmdcIiA6IFwic2Vjb25kYXJ5XCJ9XG4gICAgICAgICAgICAgICAgICBwaWxsXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZFN1YkNhdGVnb3J5KHN1Yil9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJteS0xIG1yLTFcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtzdWJ9XG4gICAgICAgICAgICAgICAgPC9CYWRnZT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8Um93IGNsYXNzTmFtZT1cIm10LTNcIj5cbiAgICAgICAgICAgIDxDb2wgbWQ9ezR9PlxuICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCf0L7QuNGB0LpcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICA8Q29sIG1kPXs0fT5cbiAgICAgICAgICAgICAgPElucHV0UmFuZ2VcbiAgICAgICAgICAgICAgICBtYXhWYWx1ZT17MjB9XG4gICAgICAgICAgICAgICAgbWluVmFsdWU9ezB9XG4gICAgICAgICAgICAgICAgdmFsdWU9ezEwfVxuICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXsodmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyB2YWx1ZSB9KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICAgIDxEYXRhVGFibGVcbiAgICAgICAgICAgIG5vSGVhZGVyPXt0cnVlfVxuICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cbiAgICAgICAgICAgIGRhdGE9e2Rpc3BsYXllZEl0ZW1zfVxuICAgICAgICAgICAgbm9EYXRhQ29tcG9uZW50PVwi0J3QtSDQvdCw0LnQtNC10L3QviDRgtC+0LLQsNGA0L7QsiDRgdC+0L7RgtCy0LXRgtCy0YPRidC40Lkg0LrRgNC40YLQtdGA0LjRj9C8XCJcbiAgICAgICAgICAgIHBhZ2luYXRpb249e3RydWV9XG4gICAgICAgICAgICBwYWdpbmF0aW9uUm93c1BlclBhZ2VPcHRpb25zPXtbMTAsIDUwLCAxMDAsIDUwMCwgMTAwMF19XG4gICAgICAgICAgICBwYWdpbmF0aW9uQ29tcG9uZW50T3B0aW9ucz17e1xuICAgICAgICAgICAgICByb3dzUGVyUGFnZVRleHQ6IFwi0KLQvtCy0LDRgNC+0LIg0L3QsCDRgdGC0YDQsNC90LjRhtC1OlwiLFxuICAgICAgICAgICAgICByYW5nZVNlcGFyYXRvclRleHQ6IFwi0LjQt1wiLFxuICAgICAgICAgICAgICBub1Jvd3NQZXJQYWdlOiBmYWxzZSxcbiAgICAgICAgICAgICAgc2VsZWN0QWxsUm93c0l0ZW06IGZhbHNlLFxuICAgICAgICAgICAgICBzZWxlY3RBbGxSb3dzSXRlbVRleHQ6IFwi0JLRgdC1XCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9tYWluPlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJiZy1zZWNvbmRhcnkgdGV4dC13aGl0ZSBweS0wIHctMTAwXCI+XG4gICAgICAgIDxBbGVydCBjb2xvcj1cImluZm9cIiBjbGFzc05hbWU9XCJtYi0wXCI+XG4gICAgICAgICAg0JLRi9Cz0YDRg9C30LrQsCDRgtC+0LLQsNGA0L7QsiDQvdCw0LvQsNC20LXQvdCwLiDQmtGA0L7QvNC1INGN0YLQvtCz0L4g0LIg0YLQsNCx0LvQuNGG0YMg0LTQvtCx0LDQstC70LXQvdCwINC60L7Qu9C+0L3QutCwXG4gICAgICAgICAgXCLQoNC10LDQu9GM0L3QsNGPINCy0YvQs9C+0LTQsFwiLCDQvtC90LAg0L/QvtC60LDQt9GL0LLQsNC10YIg0YDQsNC30L3QuNGG0YMg0YEg0LzQuNC90LjQvNCw0LvRjNC90L7QuSDRhtC10L3QvtC5INC90LAg0YLQvtCy0LDRgFxuICAgICAgICAgINC/0L4g0LzQsNGA0LXQutGC0YMg0LIg0JzQvtGB0LrQstC1ICjQt9CwINC40LTQtdGOINGB0L/QsNGB0LjQsdC+e1wiIFwifVxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5wZXBwZXIucnUvcHJvZmlsZS9SdXN0aWtfVWZhXCI+UnVzdGlrX1VmYTwvYT4pLFxuICAgICAgICAgINC/0L7QutCwINGH0YLQviDQsiDRjdGC0L7QuSDQutC+0LvQvtC90LrQtSDQstC+0LfQvNC+0LbQvdGLINC+0YjQuNCx0LrQuCDQuCDQv9GA0L7Qv9GD0YHQutC4LiDQktC+0L/RgNC+0YHRiywg0YHQvtCy0LXRgtGLINC4XG4gICAgICAgICAg0LfQsNC80LXRh9Cw0L3QuNGPINC/0L4g0YHQsNC50YLRgywg0LzQvtC20LXRgtC1INC90LDQv9C40YHQsNGC0Ywg0LzQvdC1INCye1wiIFwifVxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cucGVwcGVyLnJ1L3Byb2ZpbGUvc2V2c2tpaVwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgINC70LjRh9C60YMg0L3QsCBQZXBwZXJcbiAgICAgICAgICA8L2E+e1wiIFwifVxuICAgICAgICAgINC40LvQuCDQvdCwINC/0L7Rh9GC0YN7XCIgXCJ9XG4gICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzpzZXZza2lpMTExQGdtYWlsLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCI+XG4gICAgICAgICAgICBzZXZza2lpMTExQGdtYWlsLmNvbVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICAuXG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICAgIHsvKiA8QWxlcnQgY29sb3I9XCJkYW5nZXJcIiBjbGFzc05hbWU9XCJtYi0wXCI+XG4gICAgICAgICAg0JrQsNGA0YLQuNC90LrQuCDQvdC10LrQvtGC0L7RgNGL0YUg0YLQvtCy0LDRgNC+0LIg0LzQvtCz0YPRgiDQsdGL0YLRjCDQvtGCINGC0L7QstCw0YDQvtCyINGBINC/0L7RhdC+0LbQuNC80LhcbiAgICAgICAgICDQvdCw0LfQstCw0L3QuNGP0LzQuC4g0J/RgNC+0LHQu9C10LzQsCDQt9Cw0YLRgNCw0LPQuNCy0LDQtdGCINGC0L7Qu9GM0LrQviDRgdCw0LzQuCDQutCw0YDRgtC40L3QutC4INC4INGPINC/0L7RgdGC0LDRgNCw0Y7RgdGMXG4gICAgICAgICAg0LXRkSDQutCw0Log0LzQvtC20L3QviDRgdC60L7RgNC10LUg0LjRgdC/0YDQsNCy0LjRgtGMLlxuICAgICAgICA8L0FsZXJ0PiAqL31cbiAgICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9XCJweS0yXCI+XG4gICAgICAgICAg0KHQvtC30LTQsNGC0LXQu9GMINGB0LDQudGC0LAg0L3QtSDQuNC80LXQtdGCINC+0YLQvdC+0YjQtdC90LjRjyDQuiDQutC+0LzQv9Cw0L3QuNGP0Lwg0K/QvdC00LXQutGBINC4INCv0L3QtNC10LrRgS7QnNCw0YDQtdC60YJcbiAgICAgICAgPC9Db250YWluZXI+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICAgIDxZTUluaXRpYWxpemVyIGFjY291bnRzPXtbNzEyNTY0ODRdfSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICBsZXQgY29kZXMgPSBuZXcgU2V0KCk7XG4gIGNvbnN0IHByb2R1Y3RzID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoXCIuL3Byb2R1Y3RzLmpzb25cIikpO1xuICBsZXQgdW5pcXVlUHJvZHVjdHMgPSBbXTtcbiAgbGV0IGFkZGVkUHJvZHVjdHMgPSBuZXcgU2V0KCk7XG4gIGxldCBiYWRfcHJpY2VzID0gW107XG5cbiAgZm9yIChjb25zdCBwcm9kdWN0IG9mIHByb2R1Y3RzKSB7XG4gICAgaWYgKCFhZGRlZFByb2R1Y3RzLmhhcyhwcm9kdWN0LmlkKSkge1xuICAgICAgaWYgKCFwcm9kdWN0LmNvZGUpIHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdCk7XG4gICAgICB9XG4gICAgICBjb2Rlcy5hZGQocHJvZHVjdC5jb2RlKTtcbiAgICAgIHVuaXF1ZVByb2R1Y3RzLnB1c2goe1xuICAgICAgICAuLi5wcm9kdWN0LFxuICAgICAgICByZWFsX2Rpc2NvdW50OlxuICAgICAgICAgIHByb2R1Y3QubWluX3ByaWNlIDwgcHJvZHVjdC5vbGRfcHJpY2VcbiAgICAgICAgICAgID8gcHJvZHVjdC5taW5fcHJpY2UgLSBwcm9kdWN0LnByaWNlXG4gICAgICAgICAgICA6IFwiP1wiLFxuICAgICAgfSk7XG4gICAgICBpZiAocHJvZHVjdC5taW5fcHJpY2UgPiBwcm9kdWN0Lm9sZF9wcmljZSkge1xuICAgICAgICBiYWRfcHJpY2VzLnB1c2gocHJvZHVjdCk7XG4gICAgICB9XG4gICAgICBhZGRlZFByb2R1Y3RzLmFkZChwcm9kdWN0LmlkKTtcbiAgICB9XG4gIH1cbiAgY29uc29sZS5sb2coYCR7YmFkX3ByaWNlcy5sZW5ndGh9IHByaWNlcyBhcmUgYmFkYCk7XG4gIGNvbnNvbGUubG9nKGJhZF9wcmljZXMpO1xuICBmb3IgKGNvbnN0IHByb2R1Y3Qgb2YgdW5pcXVlUHJvZHVjdHMpIHtcbiAgICBpZiAoIXByb2R1Y3Quc3ViY2F0ZWdvcnkpIHtcbiAgICAgIHByb2R1Y3Quc3ViY2F0ZWdvcnkgPSBwcm9kdWN0LmNhdGVnb3J5O1xuICAgICAgcHJvZHVjdC5jYXRlZ29yeSA9IGNhdGVnb3JpZXNIaWVyYXJoeVtwcm9kdWN0LmNhdGVnb3J5XTtcbiAgICAgIHByb2R1Y3QuaXNBZHVsdCA9IHByb2R1Y3QuY2F0ZWdvcnkgPT09IFwi0KLQvtCy0LDRgNGLINC00LvRjyDQstC30YDQvtGB0LvRi9GFXCI7XG4gICAgICBpZiAoIXByb2R1Y3QuY2F0ZWdvcnkpIHtcbiAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnMud3JpdGVGaWxlU3luYyhcIi4vcHJvZHVjdHNfanNvbi5qc29uXCIsIEpTT04uc3RyaW5naWZ5KHByb2R1Y3RzKSwgXCJ1dGY4XCIpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGNvZGVzOiBbLi4uY29kZXNdLnNvcnQoXG4gICAgICAgIChhLCBiKSA9PlxuICAgICAgICAgIChiLm1hdGNoKC9cXGQrLykgPyBiLm1hdGNoKC9cXGQrLylbMF0gOiAwKSAtXG4gICAgICAgICAgKGEubWF0Y2goL1xcZCsvKSA/IGEubWF0Y2goL1xcZCsvKVswXSA6IDApXG4gICAgICApLFxuICAgICAgcHJvZHVjdHM6IHVuaXF1ZVByb2R1Y3RzLnNvcnQoXG4gICAgICAgIChhLCBiKSA9PlxuICAgICAgICAgIChwYXJzZUludChiLnJlYWxfZGlzY291bnQpICsgMC4xIHx8IDAuNSkgLVxuICAgICAgICAgIChwYXJzZUludChhLnJlYWxfZGlzY291bnQpICsgMC4xIHx8IDAuNSlcbiAgICAgICksXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=