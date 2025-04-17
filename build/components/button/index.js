/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/button/edit.js":
/*!***************************************!*\
  !*** ./src/components/button/edit.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);




function Edit({
  attributes,
  setAttributes
}) {
  const {
    content,
    textAlign,
    color,
    backgroundColor,
    fontWeight,
    fontSize,
    lineHeight,
    fontFamily,
    textTransform,
    paddingX,
    paddingTop,
    paddingBottom
  } = attributes;
  const blockStyle = {
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: textAlign === 'center' ? 'center' : textAlign === 'right' ? 'flex-end' : 'flex-start',
    textAlign,
    paddingTop,
    paddingBottom,
    paddingLeft: paddingX,
    paddingRight: paddingX
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.AlignmentToolbar, {
    value: textAlign,
    onChange: newAlign => setAttributes({
      textAlign: newAlign || 'left'
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button Settings', 'app')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Size', 'app'),
    value: fontSize,
    onChange: value => setAttributes({
      fontSize: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Line Height', 'app'),
    value: lineHeight,
    onChange: value => setAttributes({
      lineHeight: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding Top (px)', 'app'),
    value: paddingTop,
    onChange: val => setAttributes({
      paddingTop: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding Bottom (px)', 'app'),
    value: paddingBottom,
    onChange: val => setAttributes({
      paddingBottom: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Padding X (px)', 'app'),
    value: paddingX,
    onChange: val => setAttributes({
      paddingX: val
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Font Weight', 'app'),
    value: fontWeight,
    options: [{
      label: 'Normal',
      value: '400'
    }, {
      label: 'Medium',
      value: '500'
    }, {
      label: 'Semi-Bold',
      value: '600'
    }, {
      label: 'Bold',
      value: '700'
    }],
    onChange: value => setAttributes({
      fontWeight: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Transform', 'app'),
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
    onChange: value => setAttributes({
      textTransform: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Color', 'app'),
    value: color,
    onChange: value => setAttributes({
      color: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background Color', 'app'),
    value: backgroundColor,
    onChange: value => setAttributes({
      backgroundColor: value
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: `
						@media (max-width: 768px) {
							.wp-button {
								padding-left: 12px !important;
								padding-right: 12px !important;
								padding-top: 16px !important;
								padding-bottom: 16px !important;
							}
						}
					`
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
      className: 'wp-button',
      style: blockStyle
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    style: {
      color,
      backgroundColor,
      fontWeight,
      fontSize,
      lineHeight,
      fontFamily,
      textTransform,
      border: 'none',
      cursor: 'pointer',
      display: 'inline-block',
      maxWidth: '256px',
      width: '100%',
      height: '56px',
      textDecoration: 'none',
      padding: '16px 24px',
      boxSizing: 'border-box',
      textAlign: 'center'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "span",
    value: content,
    onChange: value => setAttributes({
      content: value
    }),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter your button text', 'app')
  }))));
}

/***/ }),

/***/ "./src/components/button/save.js":
/*!***************************************!*\
  !*** ./src/components/button/save.js ***!
  \***************************************/
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
    textAlign,
    color,
    backgroundColor,
    fontWeight,
    fontSize,
    lineHeight,
    fontFamily,
    textTransform,
    paddingX,
    paddingTop,
    paddingBottom
  } = attributes;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", {
    dangerouslySetInnerHTML: {
      __html: `
						@media (max-width: 768px) {
							.wp-button {
								padding-left: 12px !important;
								padding-right: 12px !important;
							}
						}
					`
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: 'wp-button',
      style: {
        backgroundColor: '#fff',
        paddingTop,
        paddingBottom,
        paddingLeft: paddingX,
        paddingRight: paddingX,
        display: 'flex',
        justifyContent: textAlign === 'center' ? 'center' : textAlign === 'right' ? 'flex-end' : 'flex-start'
      }
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    style: {
      textAlign,
      color,
      backgroundColor,
      fontWeight,
      fontSize,
      lineHeight,
      fontFamily,
      textTransform,
      border: 'none',
      cursor: 'pointer',
      display: 'inline-block',
      maxWidth: '256px',
      width: '100%',
      height: '56px',
      textDecoration: 'none',
      padding: '16px 24px',
      boxSizing: 'border-box',
      textAlign: 'center'
    }
  }, content)));
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

/***/ "./src/components/button/block.json":
/*!******************************************!*\
  !*** ./src/components/button/block.json ***!
  \******************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":3,"name":"app/button","title":"Button","category":"design","icon":"button","description":"A customizable button block with flexible styles.","supports":{"html":false,"align":["left","center","right"]},"attributes":{"content":{"type":"string","source":"html","selector":"a span","default":"Click me"},"textAlign":{"type":"string","default":"center"},"color":{"type":"string","default":"#FFFFFF"},"backgroundColor":{"type":"string","default":"#164BDC"},"fontWeight":{"type":"string","default":"600"},"fontSize":{"type":"string","default":"14px"},"lineHeight":{"type":"string","default":"1.4"},"fontFamily":{"type":"string","default":"Bai Jamjuree, sans-serif"},"textTransform":{"type":"string","default":"uppercase"},"paddingX":{"type":"string","default":"48px"},"paddingTop":{"type":"string","default":"20px"},"paddingBottom":{"type":"string","default":"20px"},"url":{"type":"string","default":"#"}},"editorScript":"file:./index.js","editorStyle":"file:./editor.css","style":"file:./style.css","example":{"attributes":{"content":"Learn More","backgroundColor":"#1E40AF","color":"#FFFFFF"}}}');

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
/*!****************************************!*\
  !*** ./src/components/button/index.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/components/button/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/components/button/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/components/button/save.js");
/* harmony import */ var _src_base_styles_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../../src/base/styles/index.scss */ "./src/base/styles/index.scss");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map