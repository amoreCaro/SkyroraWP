/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/about/edit.js":
/*!**************************************!*\
  !*** ./src/components/about/edit.js ***!
  \**************************************/
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
/* harmony import */ var _editor_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.css */ "./src/components/about/editor.css");








function Edit({
  attributes,
  setAttributes
}) {
  const {
    id,
    aboutTitle,
    aboutText,
    imageUrl,
    iconUrl,
    sectionAlignment,
    sectionPadding,
    sectionOverlay,
    sectionVisibility,
    backgroundUrl,
    backgroundType,
    gradientColor1,
    gradientColor2,
    buttonColor,
    buttonText,
    buttonUrl,
    buttonOpenInNewTab
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();

  // Define new state for button color
  const [selectedButtonColor, setSelectedButtonColor] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(buttonColor || '#000000');
  const onSelectImage = media => {
    setAttributes({
      imageUrl: media.url,
      imageId: media.id
    });
  };
  const onRemoveImage = () => {
    setAttributes({
      imageUrl: '',
      imageId: undefined
    });
  };
  const onSelectIcon = media => {
    setAttributes({
      iconUrl: media.url,
      iconId: media.id
    });
  };
  const onRemoveIcon = () => {
    setAttributes({
      iconUrl: '',
      iconId: undefined
    });
  };
  const onSelectBackground = media => {
    setAttributes({
      backgroundUrl: media.url,
      backgroundId: media.id
    });
  };
  const onRemoveBackground = () => {
    setAttributes({
      backgroundUrl: '',
      backgroundId: undefined
    });
  };
  const onChangeBackgroundType = newType => {
    setAttributes({
      backgroundType: newType
    });
    // Reset background URL when changing to gradient
    if (newType === 'gradient') {
      setAttributes({
        backgroundUrl: ''
      });
    }
  };
  const onChangeGradientColor1 = newColor => {
    setAttributes({
      gradientColor1: newColor
    });
  };
  const onChangeGradientColor2 = newColor => {
    setAttributes({
      gradientColor2: newColor
    });
  };
  const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [buttonName, setButtonName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(buttonText || ''); // Use buttonText for initial value
  const [buttonUrlValue, setButtonUrlValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(buttonUrl || ''); // Use buttonUrl for initial value
  const [openInNewTab, setOpenInNewTab] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(buttonOpenInNewTab);
  const saveButtonDetails = () => {
    setAttributes({
      buttonText: buttonText,
      // Save button name
      buttonUrl: buttonUrlValue,
      // Save button URL
      buttonOpenInNewTab: openInNewTab,
      buttonColor: selectedButtonColor // Use the selectedButtonColor state
    });
    closeModal();
  };
  const openModal = () => {
    setButtonName(buttonText || ''); // Reset the state with current value
    setButtonUrlValue(buttonUrl || ''); // Reset the state with current value
    setOpenInNewTab(buttonOpenInNewTab);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // if(!attributes.aboutTitle){
  //     return null;
  // }

  console.log('test', attributes.buttonText);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    id: id,
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
    className: "tab-panel",
    activeClass: "active-tab",
    tabs: [{
      name: 'about_left',
      title: 'Content Left',
      className: 'tab-item'
    }, {
      name: 'about_right',
      title: 'Content Right',
      className: 'tab-item'
    }, {
      name: 'about_design',
      title: 'Design',
      className: 'tab-item'
    }]
  }, tab => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, tab.name === 'about_left' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-item content-tab"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: onSelectImage,
    allowedTypes: ['image'],
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, imageUrl ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-group__image"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      height: "150px",
      width: "150px",
      src: imageUrl,
      alt: "Selected image"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: onRemoveImage,
      isDestructive: true,
      className: "btn btn--green remove-image"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "#000000",
      width: "24px",
      height: "24px",
      viewBox: "-1.7 0 20.4 20.4",
      class: "cf-icon-svg"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-6.804.01 3.032-3.033a.792.792 0 0 0-1.12-1.12L8.494 9.173 5.46 6.14a.792.792 0 0 0-1.12 1.12l3.034 3.033-3.033 3.033a.792.792 0 0 0 1.12 1.119l3.032-3.033 3.033 3.033a.792.792 0 0 0 1.12-1.12z"
    })))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      className: "btn btn--green",
      onClick: open,
      isPrimary: true
    }, "Select Image"))
  }))), tab.name === 'about_right' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-item content-tab"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: onSelectIcon,
    allowedTypes: ['image'],
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, iconUrl ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-group__image"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      height: "100px",
      width: "100px",
      src: iconUrl,
      alt: "Selected icon"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: onRemoveIcon,
      isDestructive: true,
      className: "remove-icon"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "#000000",
      width: "24px",
      height: "24px",
      viewBox: "-1.7 0 20.4 20.4",
      class: "cf-icon-svg"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-6.804.01 3.032-3.033a.792.792 0 0 0-1.12-1.12L8.494 9.173 5.46 6.14a.792.792 0 0 0-1.12 1.12l3.034 3.033-3.033 3.033a.792.792 0 0 0 1.12 1.119l3.032-3.033 3.033 3.033a.792.792 0 0 0 1.12-1.12z"
    })))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: open,
      isPrimary: true
    }, "Select Icon"))
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "h2",
    value: aboutTitle,
    onChange: newTitle => setAttributes({
      aboutTitle: newTitle
    }),
    placeholder: "Enter title here"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    tagName: "p",
    value: aboutText,
    onChange: newText => setAttributes({
      aboutText: newText
    }),
    placeholder: "Enter text here"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    isPrimary: true,
    onClick: openModal
  }, "Add Button"), isModalOpen && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Modal, {
    title: "Button Details",
    onRequestClose: closeModal
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-button__top"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "wp-group__col"
  }, "Button Name:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    value: buttonText,
    onChange: e => setButtonName(e.target.value),
    placeholder: "Enter button name"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "wp-group__col"
  }, "Button URL:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    value: buttonUrlValue // Use buttonUrlValue here
    ,
    onChange: e => setButtonUrlValue(e.target.value) // Use setButtonUrlValue here
    ,
    placeholder: "Enter button URL"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "wp-group__row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    checked: openInNewTab,
    onChange: e => setOpenInNewTab(e.target.checked)
  }), "Open in new tab"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "wp-group__col"
  }, "Button Color:", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
    value: selectedButtonColor,
    onChange: color => setSelectedButtonColor(color)
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-button__bottom"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    isPrimary: true,
    onClick: saveButtonDetails
  }, "Save"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    onClick: closeModal
  }, "Cancel")))), tab.name === 'about_design' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tab-item design-tab"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RadioControl, {
    label: "Section Visibility",
    selected: sectionVisibility,
    options: [{
      label: 'Show',
      value: 'show'
    }, {
      label: 'Hide',
      value: 'hide'
    }],
    onChange: newVisibility => setAttributes({
      sectionVisibility: newVisibility
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RadioControl, {
    label: "Section Padding",
    selected: sectionPadding,
    options: [{
      label: 'Small',
      value: 'small-padding'
    }, {
      label: 'Large',
      value: 'large-padding'
    }],
    onChange: newPadding => setAttributes({
      sectionPadding: newPadding
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RadioControl, {
    label: "Section Overlay",
    selected: sectionOverlay,
    options: [{
      label: 'Show',
      value: 'overlay'
    }, {
      label: 'Hide',
      value: 'no-overlay'
    }],
    onChange: newOverlay => setAttributes({
      sectionOverlay: newOverlay
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RadioControl, {
    label: "Section Alignment",
    selected: sectionAlignment,
    options: [{
      label: 'Left Image',
      value: 'left'
    }, {
      label: 'Right Image',
      value: 'right'
    }],
    onChange: newAlignment => setAttributes({
      sectionAlignment: newAlignment
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RadioControl, {
    label: "Background Type",
    selected: backgroundType,
    options: [{
      label: 'Background Image',
      value: 'image'
    }, {
      label: 'Background Gradient',
      value: 'gradient'
    }],
    onChange: onChangeBackgroundType
  }), backgroundType === 'image' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
    onSelect: onSelectBackground,
    allowedTypes: ['image'],
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, backgroundUrl ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-group__image"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      height: "150px",
      width: "150px",
      src: backgroundUrl,
      alt: "Selected background"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: onRemoveBackground,
      isDestructive: true,
      className: "remove-image"
    }, "Remove Background")) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: open,
      isPrimary: true
    }, "Select Background Image"))
  })), backgroundType === 'gradient' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Select First Gradient Color"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
    value: gradientColor1,
    onChange: onChangeGradientColor1
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Select Second Gradient Color"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ColorPalette, {
    value: gradientColor2,
    onChange: onChangeGradientColor2
  })))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
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

/***/ "./src/components/about/save.js":
/*!**************************************!*\
  !*** ./src/components/about/save.js ***!
  \**************************************/
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
    aboutTitle,
    aboutText,
    imageUrl,
    iconUrl,
    buttonText,
    buttonUrl,
    buttonOpenInNewTab,
    sectionAlignment,
    backgroundUrl,
    gradientValue,
    colorValue,
    buttonColor,
    sectionOverlay,
    sectionPadding,
    sectionVisibility
  } = attributes;

  // Define alignment class
  const alignmentClass = sectionAlignment === 'right' ? 'section-right' : 'section-left';
  const overlay = sectionOverlay === 'overlay' ? 'overlay' : 'no-overlay';
  const padding = sectionPadding === 'small-padding' ? 'small-padding' : 'large-padding';
  const view = sectionVisibility;
  // Define section styles based on the presence of backgroundUrl
  const sectionStyle = backgroundUrl ? {
    backgroundImage: `url(${backgroundUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  } : {
    background: `${gradientValue}`
  };
  if (sectionVisibility === 'show') {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      id: id,
      ...blockProps,
      className: `info-block ${overlay} white-text ${alignmentClass}`,
      style: sectionStyle // Apply the style directly here
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `info-block__container container ${padding}`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "info-block__image"
    }, imageUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: imageUrl,
      loading: "lazy",
      alt: `Image for ${aboutTitle}`
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "info-block__main"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "info-block__text-wraper"
    }, iconUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: iconUrl,
      loading: "lazy",
      alt: "Icon"
    }), aboutTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "about-title",
      dangerouslySetInnerHTML: {
        __html: aboutTitle
      }
    }), aboutText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "about-text",
      dangerouslySetInnerHTML: {
        __html: aboutText
      }
    })), buttonText && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "info-block__button"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: buttonUrl,
      className: "btn btn--green",
      target: buttonOpenInNewTab ? "_blank" : "_self",
      rel: buttonOpenInNewTab ? "noopener noreferrer" : undefined,
      style: {
        backgroundColor: buttonColor
      } // Apply button color here
    }, buttonText)))));
  } else {
    return '';
  }
}

/***/ }),

/***/ "./src/components/about/editor.css":
/*!*****************************************!*\
  !*** ./src/components/about/editor.css ***!
  \*****************************************/
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

/***/ "./src/components/about/block.json":
/*!*****************************************!*\
  !*** ./src/components/about/block.json ***!
  \*****************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"apiVersion":3,"title":"About","name":"app/about","category":"advanced","icon":"star-filled","keywords":["hero"],"editorScript":"file:./index.js","editorStyle":"file:./editor.css","attributes":{"id":{"type":"string","default":""},"aboutTitle":{"type":"string","source":"html","selector":".about-title"},"aboutText":{"type":"string","source":"html","selector":".about-text"},"buttonText":{"type":"string","selector":".info-block__button a"},"buttonUrl":{"type":"string"},"buttonOpenInNewTab":{"type":"boolean","default":false},"buttonColor":{"type":"string","default":"#000000"},"imageUrl":{"type":"string"},"imageId":{"type":"number"},"backgroundUrl":{"type":"string"},"backgroundId":{"type":"number"},"backgroundType":{"type":"string"},"iconUrl":{"type":"string"},"iconId":{"type":"number"},"sectionAlignment":{"type":"string","default":"left"},"sectionVisibility":{"type":"string","default":"show"},"sectionOverlay":{"type":"string","default":"overlay"},"sectionPadding":{"type":"string","default":"large-padding"},"gradientColor1":{"type":"string","default":"#32ffb8"},"gradientColor2":{"type":"string","default":"#000000"}},"supports":{"html":false}}');

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
/*!***************************************!*\
  !*** ./src/components/about/index.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/components/about/block.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/components/about/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/components/about/save.js");
/* harmony import */ var _src_base_styles_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../src/base/styles/index.scss */ "./src/base/styles/index.scss");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_1__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map