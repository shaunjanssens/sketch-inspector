webpackJsonp([3],{

/***/ "../../../../../src/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/styles.scss");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--10-1!../node_modules/postcss-loader/index.js??postcss!../node_modules/sass-loader/lib/loader.js??ref--10-3!./styles.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--10-1!../node_modules/postcss-loader/index.js??postcss!../node_modules/sass-loader/lib/loader.js??ref--10-3!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../sass-loader/lib/loader.js?{\"sourceMap\":false,\"precision\":8,\"includePaths\":[]}!../../../../../src/styles.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Colors\n */\n/**\n * Dimensions\n */\n/**\n * Typography\n */\n* {\n  box-sizing: border-box; }\n\nhtml, body, div, span, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\nabbr, address, cite, code,\ndel, dfn, em, img, ins, kbd, q, samp,\nsmall, strong, sub, sup, var,\nb, i,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent; }\n\nbody {\n  line-height: 1; }\n\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nnav ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\na {\n  margin: 0;\n  padding: 0;\n  font-size: 100%;\n  vertical-align: baseline;\n  background: transparent; }\n\n/* change colours to suit your needs */\nins {\n  background-color: #ff9;\n  color: #000;\n  text-decoration: none; }\n\n/* change colours to suit your needs */\nmark {\n  background-color: #ff9;\n  color: #000;\n  font-style: italic;\n  font-weight: bold; }\n\ndel {\n  text-decoration: line-through; }\n\nabbr[title], dfn[title] {\n  border-bottom: 1px dotted;\n  cursor: help; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n/* change border colour to suit your needs */\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #cccccc;\n  margin: 1em 0;\n  padding: 0; }\n\ninput, select {\n  vertical-align: middle; }\n\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  font-size: 14px;\n  line-height: 1.4; }\n  @media (min-width: 850px) {\n    body {\n      font-size: 14px;\n      line-height: 1.4; } }\n  @media (min-width: 1260px) {\n    body {\n      font-size: 14px;\n      line-height: 1.4; } }\n\nh1, .h1,\nh2, .h2,\nh3, .h3,\nh4, .h4 {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-weight: 400; }\n  @media (min-width: 850px) {\n    h1, .h1,\n    h2, .h2,\n    h3, .h3,\n    h4, .h4 {\n      font-weight: 400; } }\n  @media (min-width: 1260px) {\n    h1, .h1,\n    h2, .h2,\n    h3, .h3,\n    h4, .h4 {\n      font-weight: 400; } }\n\nh1, .h1 {\n  font-size: 26px;\n  line-height: 1.1; }\n  @media (min-width: 850px) {\n    h1, .h1 {\n      font-size: 28px;\n      line-height: 1.1; } }\n  @media (min-width: 1260px) {\n    h1, .h1 {\n      font-size: 34px;\n      line-height: 1.1; } }\n\nh2, .h2 {\n  font-size: 22px;\n  line-height: 1.1; }\n  @media (min-width: 850px) {\n    h2, .h2 {\n      font-size: 24px;\n      line-height: 1.1; } }\n  @media (min-width: 1260px) {\n    h2, .h2 {\n      font-size: 28px;\n      line-height: 1.1; } }\n\nh3, .h3 {\n  font-size: 18px;\n  line-height: 1.1; }\n  @media (min-width: 850px) {\n    h3, .h3 {\n      font-size: 20px;\n      line-height: 1.1; } }\n  @media (min-width: 1260px) {\n    h3, .h3 {\n      font-size: 22px;\n      line-height: 1.1; } }\n\nh4, .h4 {\n  font-size: 16px;\n  line-height: 1.1; }\n  @media (min-width: 850px) {\n    h4, .h4 {\n      font-size: 16px;\n      line-height: 1.1; } }\n  @media (min-width: 1260px) {\n    h4, .h4 {\n      font-size: 16px;\n      line-height: 1.1; } }\n\np {\n  font-size: 14px;\n  line-height: 1.4;\n  line-height: 1.4;\n  padding-bottom: 16px; }\n  @media (min-width: 850px) {\n    p {\n      font-size: 14px;\n      line-height: 1.4; } }\n  @media (min-width: 1260px) {\n    p {\n      font-size: 14px;\n      line-height: 1.4; } }\n  p:last-child {\n    padding-bottom: 0; }\n\na:hover {\n  cursor: pointer; }\n\nstrong {\n  font-weight: 700; }\n\nimg {\n  width: 100%;\n  height: auto; }\n\n.button {\n  display: inline-block;\n  height: 30px;\n  border: 1px solid #FFFFFF;\n  border-radius: 3px;\n  padding: 0 15px;\n  line-height: 30px;\n  color: #FFFFFF;\n  text-decoration: none; }\n\nbody {\n  overflow: hidden; }\n\n.interface__header {\n  position: fixed;\n  width: 100vw;\n  height: 70px; }\n\n.interface__container {\n  position: relative;\n  top: 70px;\n  height: calc(100vh - 70px); }\n\n.interface__sidebar {\n  position: absolute;\n  height: 100%; }\n  .interface__sidebar.sidebar__left {\n    width: 300px;\n    left: 0; }\n  .interface__sidebar.sidebar__right {\n    width: 300px;\n    right: 0; }\n\n.interface__main {\n  position: absolute;\n  height: 100%;\n  width: calc(100vw - 300px - 300px);\n  left: 300px; }\n\n.header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 70px;\n  background: #323232;\n  background-image: linear-gradient(-180deg, #3F3F3F 0%, #323232 100%);\n  border-bottom: 1px solid #494949;\n  padding: 0 15px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  color: #FFFFFF; }\n  .header .header__logo {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n    .header .header__logo h1 {\n      font-size: 14px;\n      line-height: 1.4; }\n      @media (min-width: 850px) {\n        .header .header__logo h1 {\n          font-size: 14px;\n          line-height: 1.4; } }\n      @media (min-width: 1260px) {\n        .header .header__logo h1 {\n          font-size: 14px;\n          line-height: 1.4; } }\n  .header .header__filename {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    text-align: center; }\n  .header .header__actions {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    text-align: right; }\n    .header .header__actions .button {\n      margin-left: 7px; }\n      .header .header__actions .button:first-child {\n        margin-left: 0; }\n\n.sidebar {\n  background: #323232;\n  color: #FFFFFF; }\n  .sidebar.sidebar__left {\n    border-right: 1px solid #494949; }\n  .sidebar.sidebar__right {\n    border-left: 1px solid #494949; }\n  .sidebar .sidebar__box.properties {\n    margin-bottom: 20px; }\n  .sidebar .sidebar__title {\n    height: 40px;\n    background: #4C4C4C;\n    padding: 0 15px;\n    line-height: 40px; }\n  .sidebar .layercontrols {\n    position: absolute;\n    bottom: 0; }\n\n.sidebar__box ul {\n  display: block; }\n  .sidebar__box ul li {\n    list-style: none;\n    position: relative;\n    line-height: 45px; }\n    .sidebar__box ul li span {\n      display: block;\n      padding: 0 15px 0 36px;\n      height: 45px;\n      border-bottom: 1px solid #494949; }\n      .sidebar__box ul li span:hover {\n        cursor: pointer;\n        background: #2468EB; }\n      .sidebar__box ul li span:before, .sidebar__box ul li span:after {\n        position: absolute;\n        content: '';\n        top: 18px;\n        margin-left: -20px;\n        background-size: contain;\n        background-position: left center;\n        width: 10px;\n        height: 10px; }\n      .sidebar__box ul li span:after {\n        width: 8px;\n        height: 8px;\n        right: 15px; }\n    .sidebar__box ul li.selected > span {\n      background: #2468EB; }\n    .sidebar__box ul li.open > app-tree-view > ul {\n      display: block; }\n    .sidebar__box ul li ul {\n      display: none; }\n      .sidebar__box ul li ul li span {\n        padding-left: 51px; }\n      .sidebar__box ul li ul ul li span {\n        padding-left: 66px; }\n      .sidebar__box ul li ul ul ul li span {\n        padding-left: 81px; }\n\n/**\n * Colors\n */\n/**\n * Dimensions\n */\n/**\n * Typography\n */\n.propertygroup {\n  padding-left: 20px;\n  padding-top: 10px;\n  position: relative; }\n  .propertygroup:before, .propertygroup:after {\n    content: \" \";\n    display: table; }\n  .propertygroup:after {\n    display: block;\n    clear: both;\n    height: 1px;\n    margin-top: -1px;\n    visibility: hidden; }\n  .propertygroup {\n    *zoom: 1; }\n  .propertygroup .propertygroup__label {\n    display: block;\n    float: left;\n    font-weight: 500;\n    width: 90px;\n    line-height: 35px; }\n\n.property {\n  display: inline-block;\n  width: 80px;\n  margin-right: 10px; }\n  .property.property--full {\n    width: 170px;\n    margin-right: 0; }\n  .property.property--content {\n    width: 260px;\n    height: auto; }\n    .property.property--content .property__value {\n      text-align: left;\n      height: auto;\n      max-height: 69px;\n      overflow-y: auto;\n      line-height: 1.4;\n      padding: 7px 10px; }\n  .property.property--color {\n    position: relative;\n    float: right;\n    margin-bottom: 10px;\n    right: 15px; }\n    .property.property--color:before, .property.property--color:after {\n      content: \" \";\n      display: table; }\n    .property.property--color:after {\n      display: block;\n      clear: both;\n      height: 1px;\n      margin-top: -1px;\n      visibility: hidden; }\n    .property.property--color {\n      *zoom: 1; }\n    .property.property--color .property__color {\n      position: absolute;\n      display: block;\n      top: 1px;\n      left: 1px;\n      height: 33px;\n      width: 33px;\n      border-radius: 2px 0 0 2px; }\n    .property.property--color .property__value {\n      padding-left: 35px; }\n  .property .property__value {\n    display: block;\n    background: #282828;\n    height: 35px;\n    line-height: 35px;\n    text-align: center;\n    border-radius: 3px;\n    overflow: hidden;\n    border: 1px solid #474747; }\n    .property .property__value:hover {\n      cursor: pointer;\n      border: 1px solid #7F7F7F; }\n    .property .property__value:not(:active) {\n      transition: all 300ms ease-in-out; }\n    .property .property__value:active {\n      -webkit-transform: translateY(-6px);\n              transform: translateY(-6px);\n      opacity: .3;\n      transition: all 100ms ease-in-out; }\n  .property .property__extra {\n    display: block;\n    margin-top: 5px;\n    text-align: center;\n    font-size: 12px;\n    line-height: 1.4;\n    color: #ADADAD; }\n    @media (min-width: 850px) {\n      .property .property__extra {\n        font-size: 12px;\n        line-height: 1.4; } }\n    @media (min-width: 1260px) {\n      .property .property__extra {\n        font-size: 12px;\n        line-height: 1.4; } }\n\n.main {\n  background: #2C2C2C; }\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.scss");


/***/ })

},[3]);
//# sourceMappingURL=styles.bundle.js.map