/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/layouts/header/edit.js":
/*!************************************!*\
  !*** ./src/layouts/header/edit.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.css */ "./src/layouts/header/editor.css");




function Edit({
  attributes,
  setAttributes
}) {
  const {
    imgUrl,
    text1,
    text2,
    paddingLeft,
    paddingRight,
    fontFamily,
    fontSize,
    lineHeight,
    color,
    textTransform,
    fontWeight
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  const onSelectImage = media => setAttributes({
    imgUrl: media.url
  });
  const onChangeText1 = value => setAttributes({
    text1: value
  });
  const onChangeText2 = value => setAttributes({
    text2: value
  });
  const onChangePaddingLeft = value => setAttributes({
    paddingLeft: parseInt(value) || 0
  });
  const onChangePaddingRight = value => setAttributes({
    paddingRight: parseInt(value) || 0
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Text Settings",
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Font Family",
    value: fontFamily,
    onChange: value => setAttributes({
      fontFamily: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Font Size (px)",
    type: "number",
    value: fontSize,
    onChange: value => setAttributes({
      fontSize: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Line Height (px)",
    type: "number",
    value: lineHeight,
    onChange: value => setAttributes({
      lineHeight: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
    label: "Text Color",
    value: color,
    onChange: value => setAttributes({
      color: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Font Weight",
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
    onChange: value => setAttributes({
      fontWeight: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    label: "Text Transform",
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
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Padding Settings",
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Padding Left (px)",
    type: "number",
    value: paddingLeft,
    onChange: onChangePaddingLeft
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Padding Right (px)",
    type: "number",
    value: paddingRight,
    onChange: onChangePaddingRight
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      background: '#181b24',
      paddingLeft: `${paddingLeft}px`,
      paddingRight: `${paddingRight}px`,
      paddingTop: '20px',
      paddingBottom: '32px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      maxWidth: '114px',
      height: '60px',
      width: '100%'
    }
  }, imgUrl ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: imgUrl,
    alt: "Uploaded",
    style: {
      height: '100%',
      width: '100%',
      objectFit: 'contain'
    }
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "No image uploaded")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: onSelectImage,
    allowedTypes: ['image'],
    value: imgUrl,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: open
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "dashicons dashicons-upload"
    }), " Upload Image")
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      position: 'relative'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      marginRight: '12px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    value: text1,
    onChange: onChangeText1,
    placeholder: "Enter the first text...",
    style: {
      margin: '0 0 8px 0',
      color,
      fontFamily,
      fontSize: `${fontSize}px`,
      lineHeight: `${lineHeight}px`,
      fontWeight,
      textTransform
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    value: text2,
    onChange: onChangeText2,
    placeholder: "Enter the second text...",
    style: {
      margin: 0,
      color,
      fontFamily,
      fontSize: `${fontSize}px`,
      lineHeight: `${lineHeight}px`,
      fontWeight,
      textTransform
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      position: 'absolute',
      right: '0px',
      top: '0px',
      height: '32px',
      width: '2px',
      backgroundColor: '#164BDC'
    }
  })))));
}

/***/ }),

/***/ "./src/layouts/header/save.js":
/*!************************************!*\
  !*** ./src/layouts/header/save.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function Save({
  attributes
}) {
  const {
    id,
    imgUrl,
    text1,
    text2,
    paddingLeft,
    paddingRight,
    fontFamily,
    fontSize,
    lineHeight,
    color,
    fontWeight,
    textTransform
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    ...blockProps,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: '#181b24',
      paddingLeft: `${paddingLeft}px`,
      paddingRight: `${paddingRight}px`,
      paddingTop: '20px',
      paddingBottom: '32px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      maxWidth: '114px',
      height: '60px',
      width: '100%'
    }
  }, imgUrl ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: imgUrl,
    alt: "Uploaded",
    style: {
      height: '100%',
      width: '100%',
      objectFit: 'contain'
    },
    className: "uploaded-img"
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "No image uploaded"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      position: 'relative'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      marginRight: '12px'
    }
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    value: text1,
    style: {
      margin: '0px 0px 8px 0px',
      color: color,
      fontFamily: fontFamily,
      fontSize: `${fontSize}px`,
      lineHeight: `${lineHeight}px`,
      fontWeight: fontWeight,
      textTransform: textTransform
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    value: text2,
    style: {
      margin: '0px',
      color: color,
      fontFamily: fontFamily,
      fontSize: `${fontSize}px`,
      lineHeight: `${lineHeight}px`,
      fontWeight: fontWeight,
      textTransform: textTransform
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      position: 'absolute',
      right: '0px',
      top: '0px',
      height: '32px',
      width: '2px',
      backgroundColor: '#164BDC'
    }
  })));
}

/***/ }),

/***/ "./src/layouts/header/editor.css":
/*!***************************************!*\
  !*** ./src/layouts/header/editor.css ***!
  \***************************************/
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

/***/ "./src/layouts/header/block.json":
/*!***************************************!*\
  !*** ./src/layouts/header/block.json ***!
  \***************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":3,"title":"Header","name":"app/header","category":"advanced","icon":"table-row-before","keywords":["layouts"],"description":"","attributes":{"imgUrl":{"type":"string","default":""},"text1":{"type":"string","default":"Enter your paragraph"},"text2":{"type":"string","default":"Enter your paragraph"},"paddingLeft":{"type":"number","default":0},"paddingRight":{"type":"number","default":0},"fontFamily":{"type":"string","default":"Bai Jamjuree, sans-serif"},"fontSize":{"type":"number","default":16},"lineHeight":{"type":"number","default":20},"color":{"type":"string","default":"#fff"},"textTransform":{"type":"string","default":"none"},"fontWeight":{"type":"string","default":"400"}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style.css"}');

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
/*!*************************************!*\
  !*** ./src/layouts/header/index.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/layouts/header/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/layouts/header/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/layouts/header/save.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map