/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/hero-banner/edit.js":
/*!********************************************!*\
  !*** ./src/components/hero-banner/edit.js ***!
  \********************************************/
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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.css */ "./src/components/hero-banner/editor.css");








function Edit({
  attributes,
  setAttributes
}) {
  const {
    id,
    title,
    content,
    imageUrl,
    videoUrl,
    gallery,
    text,
    backgroundType
  } = attributes;

  // Use blockProps to apply block-level properties
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();

  // Function for selecting an image
  const onSelectImage = media => {
    setAttributes({
      imageUrl: media.url,
      imageId: media.id,
      videoUrl: ''
    }); // Clear video when image is selected
  };

  // Function for selecting a video
  const onSelectVideo = media => {
    setAttributes({
      videoUrl: media.url,
      videoId: media.id,
      imageUrl: ''
    }); // Clear image when video is selected
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    activeClass: "active-tab",
    tabs: [{
      name: 'hero_content',
      title: 'Content',
      className: 'tab-item hero-content-tab'
    }, {
      name: 'hero_brands',
      title: 'Brands',
      className: 'tab-item hero-brands-tab'
    }, {
      name: 'hero_media',
      title: 'Media',
      className: 'tab-item hero-media-tab'
    }, {
      name: 'hero_design',
      title: 'Design',
      className: 'tab-item hero-design-tab'
    }]
  }, tab => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, tab.name === 'hero_content' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "content-tab"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "h1",
    value: title,
    onChange: newTitle => setAttributes({
      title: newTitle
    }),
    placeholder: "Text",
    allowedFormats: ""
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    value: content,
    onChange: newContent => setAttributes({
      content: newContent
    }),
    placeholder: "Text",
    allowedFormats: ['core/bold', 'core/link']
  })), tab.name === 'hero_brands' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "brands-tab"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    value: text,
    onChange: e => setAttributes({
      text: e.target.value
    }),
    placeholder: "Text"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: media => setAttributes({
      gallery: media.map(img => ({
        url: img.url,
        id: img.id
      }))
    }),
    allowedTypes: ['image'],
    multiple: true,
    gallery: true,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-group__gallery"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: open,
      className: "select-gallery-button"
    }, gallery && gallery.length ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "gallery-preview"
    }, gallery.map((image, index) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: index,
      className: "gallery-image"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: image.url,
      width: "150px",
      height: "150px",
      alt: `Gallery image ${index + 1}`
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: "remove-gallery-image-button",
      onClick: () => {
        const newGallery = [...gallery];
        newGallery.splice(index, 1);
        setAttributes({
          gallery: newGallery
        });
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "#000000",
      width: "24px",
      height: "24px",
      viewBox: "-1.7 0 20.4 20.4",
      class: "cf-icon-svg"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-6.804.01 3.032-3.033a.792.792 0 0 0-1.12-1.12L8.494 9.173 5.46 6.14a.792.792 0 0 0-1.12 1.12l3.034 3.033-3.033 3.033a.792.792 0 0 0 1.12 1.119l3.032-3.033 3.033 3.033a.792.792 0 0 0 1.12-1.12z"
    })))))) : 'Select Gallery'))
  }))), tab.name === 'hero_media' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "media-tab"
  }, !videoUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: onSelectImage,
    allowedTypes: ['image'],
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-group__image"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: open,
      className: "select-image-button"
    }, imageUrl ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: imageUrl,
      alt: "Selected",
      width: "150px",
      height: "150px",
      className: "selected-image"
    }) : 'Select Image'), imageUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: () => setAttributes({
        imageUrl: '',
        imageId: undefined
      }),
      className: "remove-image-button"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "#000000",
      width: "24px",
      height: "24px",
      viewBox: "-1.7 0 20.4 20.4",
      class: "cf-icon-svg"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-6.804.01 3.032-3.033a.792.792 0 0 0-1.12-1.12L8.494 9.173 5.46 6.14a.792.792 0 0 0-1.12 1.12l3.034 3.033-3.033 3.033a.792.792 0 0 0 1.12 1.119l3.032-3.033 3.033 3.033a.792.792 0 0 0 1.12-1.12z"
    }))))
  }), !imageUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: onSelectVideo,
    allowedTypes: ['video'],
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-group__video"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: open,
      className: "select-video-button"
    }, videoUrl ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
      src: videoUrl,
      className: "selected-video",
      controls: true
    }) : 'Select Video'), videoUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: () => setAttributes({
        videoUrl: '',
        videoId: undefined
      }),
      className: "remove-video-button"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "#000000",
      width: "24px",
      height: "24px",
      viewBox: "-1.7 0 20.4 20.4",
      class: "cf-icon-svg"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-6.804.01 3.032-3.033a.792.792 0 0 0-1.12-1.12L8.494 9.173 5.46 6.14a.792.792 0 0 0-1.12 1.12l3.034 3.033-3.033 3.033a.792.792 0 0 0 1.12 1.119l3.032-3.033 3.033 3.033a.792.792 0 0 0 1.12-1.12z"
    }))))
  })), tab.name === 'hero_design' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "design-tab"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RadioControl, {
    label: "Select Background Type",
    selected: backgroundType,
    options: [{
      label: 'Image',
      value: 'image'
    }, {
      label: 'Video',
      value: 'video'
    }],
    onChange: value => setAttributes({
      backgroundType: value
    })
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: "Section Settings",
    initialOpen: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: "Section ID",
    value: id,
    onChange: newId => setAttributes({
      id: newId
    }),
    placeholder: "Enter section ID"
  }))));
}

/***/ }),

/***/ "./src/components/hero-banner/save.js":
/*!********************************************!*\
  !*** ./src/components/hero-banner/save.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes
}) {
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();
  const {
    id,
    title,
    content,
    imageUrl,
    videoUrl,
    gallery,
    text
  } = attributes;

  // Default background color
  const DEFAULT_BACKGROUND_COLOR = '#f0f0f0';

  // Conditional background styles
  const sectionStyle = imageUrl ? {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover'
  } : videoUrl ? {} // No background style for video
  : {
    backgroundColor: DEFAULT_BACKGROUND_COLOR
  }; // Default background color if no image/video

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    id: id,
    ...blockProps,
    style: sectionStyle
  }, videoUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
    className: "hero__video",
    muted: true,
    playsInline: true,
    autoPlay: true,
    loop: true
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("source", {
    src: videoUrl,
    type: "video/mp4"
  }), "Your browser does not support the video tag."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hero__container container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hero__content"
  }, title && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", {
    className: "title--01",
    dangerouslySetInnerHTML: {
      __html: title
    }
  }), content && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    dangerouslySetInnerHTML: {
      __html: content
    }
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hero__partrers-block"
  }, text && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hero__partrers-title",
    dangerouslySetInnerHTML: {
      __html: text
    }
  }), gallery && gallery.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "hero__partrers-list"
  }, gallery.map(image => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    key: image.id // Use unique id from image
    ,
    src: image.url,
    alt: `Partner - ${image.url.split('/').pop()}` // Better alt text for accessibility
  }))))));
}

/***/ }),

/***/ "./src/components/hero-banner/editor.css":
/*!***********************************************!*\
  !*** ./src/components/hero-banner/editor.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "./src/components/hero-banner/block.json":
/*!***********************************************!*\
  !*** ./src/components/hero-banner/block.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":3,"title":"Hero Banner","name":"app/hero-banner","category":"advanced","icon":"star-filled","keywords":["hero"],"editorScript":"file:./index.js","editorStyle":"file:./editor.css","attributes":{"id":{"type":"string","default":""},"title":{"type":"string","source":"html","selector":"h1","default":"Your Title Here"},"content":{"type":"string","source":"html","selector":"p","default":"Your content here."},"text":{"type":"string","source":"html","selector":".hero__partners-title","default":"Our Partners"},"imageUrl":{"type":"string","default":""},"imageId":{"type":"number","default":0},"videoUrl":{"type":"string","default":""},"videoId":{"type":"number","default":0},"gallery":{"type":"array","items":{"type":"object","properties":{"url":{"type":"string"},"id":{"type":"number"}}},"default":[]},"backgroundType":{"type":"string","default":""}},"supports":{"html":false}}');

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
/*!*********************************************!*\
  !*** ./src/components/hero-banner/index.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/components/hero-banner/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/components/hero-banner/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/components/hero-banner/save.js");
/* harmony import */ var _src_base_styles_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../src/base/styles/index.scss */ "./src/base/styles/index.scss");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map