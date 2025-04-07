/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/heading/edit.js":
/*!****************************************!*\
  !*** ./src/components/heading/edit.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);




const HeadingEdit = ({
  attributes,
  setAttributes
}) => {
  const {
    content,
    level,
    textAlign,
    color,
    fontWeight,
    fontSize,
    lineHeight,
    fontFamily,
    textTransform,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom
  } = attributes;
  const headingSize = hLevel => {
    switch (hLevel) {
      case 1:
        return '2.5rem';
      case 2:
        return '2.0rem';
      case 3:
        return '1.75rem';
      case 4:
        return '1.5rem';
      case 5:
        return '1.25rem';
      case 6:
        return '1.0rem';
      default:
        return '2rem';
    }
  };
  const onChangePadding = (side, value) => setAttributes({
    [side]: parseFloat(value || 0)
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarGroup, null, [1, 2, 3, 4, 5, 6].map(hLevel => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
    key: hLevel,
    isPressed: level === hLevel,
    onClick: () => setAttributes({
      level: hLevel
    })
  }, "H", hLevel)))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading Settings', 'custom-heading')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading Level', 'custom-heading'),
    value: level,
    options: Array.from({
      length: 6
    }, (_, i) => ({
      label: `H${i + 1}`,
      value: i + 1
    })),
    onChange: val => setAttributes({
      level: parseInt(val, 10)
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Align', 'custom-heading'),
    value: textAlign,
    options: [{
      label: 'Left',
      value: 'left'
    }, {
      label: 'Center',
      value: 'center'
    }, {
      label: 'Right',
      value: 'right'
    }],
    onChange: val => setAttributes({
      textAlign: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Color', 'custom-heading'),
    value: color,
    onChange: val => setAttributes({
      color: val || '#000000'
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Size (rem)', 'custom-heading'),
    type: "number",
    value: fontSize.replace('rem', ''),
    onChange: val => setAttributes({
      fontSize: `${val}rem`
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Line Height', 'custom-heading'),
    type: "number",
    step: "0.1",
    value: lineHeight,
    onChange: val => setAttributes({
      lineHeight: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Family', 'custom-heading'),
    value: fontFamily,
    onChange: val => setAttributes({
      fontFamily: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Weight', 'custom-heading'),
    value: fontWeight,
    options: [{
      label: 'Normal',
      value: '400'
    }, {
      label: 'Bold',
      value: '700'
    }, {
      label: 'Bolder',
      value: '900'
    }],
    onChange: val => setAttributes({
      fontWeight: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Transform', 'custom-heading'),
    value: textTransform,
    options: [{
      label: 'None',
      value: 'none'
    }, {
      label: 'Uppercase',
      value: 'uppercase'
    }, {
      label: 'Lowercase',
      value: 'lowercase'
    }, {
      label: 'Capitalize',
      value: 'capitalize'
    }],
    onChange: val => setAttributes({
      textTransform: val
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding Settings', 'custom-heading'),
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding Top (rem)', 'custom-heading'),
    value: paddingTop || 0,
    onChange: val => onChangePadding('paddingTop', val),
    type: "number",
    min: 0
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding Bottom (rem)', 'custom-heading'),
    value: paddingBottom || 0,
    onChange: val => onChangePadding('paddingBottom', val),
    type: "number",
    min: 0
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding Left (rem)', 'custom-heading'),
    value: paddingLeft || 0,
    onChange: val => onChangePadding('paddingLeft', val),
    type: "number",
    min: 0
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding Right (rem)', 'custom-heading'),
    value: paddingRight || 0,
    onChange: val => onChangePadding('paddingRight', val),
    type: "number",
    min: 0
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      style: {
        color,
        fontWeight,
        fontSize: headingSize(level),
        lineHeight,
        fontFamily,
        textTransform,
        textAlign,
        paddingTop: `${paddingTop}rem`,
        paddingBottom: `${paddingBottom}rem`,
        paddingLeft: `${paddingLeft}rem`,
        paddingRight: `${paddingRight}rem`,
        margin: "0px" // Added margin: 0px
      }
    }),
    tagName: `h${level}`,
    value: content,
    onChange: val => setAttributes({
      content: val
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter heading text...', 'custom-heading')
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeadingEdit);

/***/ }),

/***/ "./src/components/heading/save.js":
/*!****************************************!*\
  !*** ./src/components/heading/save.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


const save = ({
  attributes
}) => {
  const {
    content,
    level,
    textAlign,
    color,
    fontWeight,
    fontSize,
    lineHeight,
    fontFamily,
    textTransform,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom
  } = attributes;
  const headingSize = hLevel => {
    switch (hLevel) {
      case 1:
        return '2.5rem';
      case 2:
        return '2.0rem';
      case 3:
        return '1.75rem';
      case 4:
        return '1.5rem';
      case 5:
        return '1.25rem';
      case 6:
        return '1.0rem';
      default:
        return '2rem';
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(),
    className: "wp-heading"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: `h${level}`,
    value: content,
    style: {
      color,
      fontWeight,
      fontSize: headingSize(level),
      lineHeight,
      fontFamily,
      textTransform,
      textAlign,
      paddingTop: `${paddingTop}rem`,
      paddingBottom: `${paddingBottom}rem`,
      paddingLeft: `${paddingLeft}rem`,
      paddingRight: `${paddingRight}rem`,
      margin: "0px" // Added margin: 0px
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (save);

/***/ }),

/***/ "./src/base/styles/index.scss":
/*!************************************!*\
  !*** ./src/base/styles/index.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/components/heading/block.json":
/*!*******************************************!*\
  !*** ./src/components/heading/block.json ***!
  \*******************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":3,"name":"app/heading","title":"Custom Heading","category":"advanced","icon":"star-filled","description":"Heading block with customizable styles.","supports":{"html":false},"attributes":{"content":{"type":"string","default":"Enter your heading"},"level":{"type":"number","default":2},"textAlign":{"type":"string","default":"left"},"color":{"type":"string","default":"#1A1A1A"},"fontWeight":{"type":"string","default":"700"},"fontSize":{"type":"string","default":"1.625rem"},"lineHeight":{"type":"string","default":"1.2"},"fontFamily":{"type":"string","default":"Bai Jamjuree, sans-serif"},"textTransform":{"type":"string","default":"uppercase"},"paddingLeft":{"type":"number","default":3},"paddingRight":{"type":"number","default":3},"paddingTop":{"type":"number","default":0},"paddingBottom":{"type":"number","default":1.5}},"editorScript":"file:./index.js","editorStyle":"file:./editor.css","style":"file:./style.css"}');

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************************!*\
  !*** ./src/components/heading/index.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/components/heading/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/components/heading/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/components/heading/save.js");
/* harmony import */ var _src_base_styles_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../src/base/styles/index.scss */ "./src/base/styles/index.scss");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map