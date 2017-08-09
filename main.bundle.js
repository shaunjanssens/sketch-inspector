webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"interface__header\">\n  <div class=\"interface_content\">\n    <app-header></app-header>\n  </div>\n</header>\n<div class=\"interface__container\">\n  <div class=\"interface__sidebar sidebar sidebar__left\">\n    <div class=\"interface_content\">\n      <app-sidebar-left></app-sidebar-left>\n    </div>\n  </div>\n  <div class=\"interface__main main\">\n    <div class=\"interface_content\">\n      <app-viewer></app-viewer>\n    </div>\n  </div>\n  <div class=\"interface__sidebar sidebar sidebar__right\">\n    <div class=\"interface_content\">\n      <app-sidebar-right></app-sidebar-right>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(fileService) {
        this.fileService = fileService;
        /**this.fileService.getJson('testbestand1').subscribe(
          data => {
            this.fileService.pages.push(data);
          },
          error => console.error(error)
        );*/
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_file_service__["a" /* FileService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tree_view_tree_view_component__ = __webpack_require__("../../../../../src/app/tree-view/tree-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sidebar_left_sidebar_left_component__ = __webpack_require__("../../../../../src/app/sidebar-left/sidebar-left.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sidebar_left_layers_layers_component__ = __webpack_require__("../../../../../src/app/sidebar-left/layers/layers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sidebar_right_sidebar_right_component__ = __webpack_require__("../../../../../src/app/sidebar-right/sidebar-right.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__properties_properties_component__ = __webpack_require__("../../../../../src/app/properties/properties.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__properties_fills_fills_component__ = __webpack_require__("../../../../../src/app/properties/fills/fills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__properties_borders_borders_component__ = __webpack_require__("../../../../../src/app/properties/borders/borders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__properties_shadows_shadows_component__ = __webpack_require__("../../../../../src/app/properties/shadows/shadows.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__properties_dimensions_dimensions_component__ = __webpack_require__("../../../../../src/app/properties/dimensions/dimensions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__properties_text_text_component__ = __webpack_require__("../../../../../src/app/properties/text/text.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__viewer_viewer_component__ = __webpack_require__("../../../../../src/app/viewer/viewer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__dropzone_dropzone_component__ = __webpack_require__("../../../../../src/app/dropzone/dropzone.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_pipes__ = __webpack_require__("../../../../ngx-pipes/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_has_key_pipe__ = __webpack_require__("../../../../../src/app/pipes/has-key.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pipes_nscolor_to_hex_pipe__ = __webpack_require__("../../../../../src/app/pipes/nscolor-to-hex.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__tree_view_tree_view_component__["a" /* TreeViewComponent */],
            __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__sidebar_left_sidebar_left_component__["a" /* SidebarLeftComponent */],
            __WEBPACK_IMPORTED_MODULE_8__sidebar_left_layers_layers_component__["a" /* LayersComponent */],
            __WEBPACK_IMPORTED_MODULE_9__sidebar_right_sidebar_right_component__["a" /* SidebarRightComponent */],
            __WEBPACK_IMPORTED_MODULE_10__properties_properties_component__["a" /* PropertiesComponent */],
            __WEBPACK_IMPORTED_MODULE_14__properties_dimensions_dimensions_component__["a" /* DimensionsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__properties_text_text_component__["a" /* TextComponent */],
            __WEBPACK_IMPORTED_MODULE_11__properties_fills_fills_component__["a" /* FillsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__properties_borders_borders_component__["a" /* BordersComponent */],
            __WEBPACK_IMPORTED_MODULE_13__properties_shadows_shadows_component__["a" /* ShadowsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__viewer_viewer_component__["a" /* ViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_17__dropzone_dropzone_component__["a" /* DropzoneComponent */],
            __WEBPACK_IMPORTED_MODULE_23__pipes_has_key_pipe__["a" /* HasKeyPipe */],
            __WEBPACK_IMPORTED_MODULE_24__pipes_nscolor_to_hex_pipe__["a" /* NSColorToHexPipe */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_19_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_20_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_21_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_22_ngx_pipes__["a" /* NgPipesModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_18__services_file_service__["a" /* FileService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/dropzone/dropzone.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  dropzone works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/dropzone/dropzone.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dropzone/dropzone.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropzoneComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropzoneComponent = (function () {
    function DropzoneComponent() {
    }
    DropzoneComponent.prototype.ngOnInit = function () {
    };
    return DropzoneComponent;
}());
DropzoneComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-dropzone',
        template: __webpack_require__("../../../../../src/app/dropzone/dropzone.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dropzone/dropzone.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DropzoneComponent);

//# sourceMappingURL=dropzone.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <div class=\"header__logo\">\n    <h1><strong>Sketch</strong> inspector</h1>\n  </div>\n  <div class=\"header__filename\">\n    Testdesign\n  </div>\n  <div class=\"header__actions\">\n    <a href=\"#\" class=\"button\">Open dashboard</a>\n    <label for=\"file\" class=\"button\">Open new design</label>\n\n    <input type=\"file\" name=\"file\" id=\"file\" class=\"inputfile\" (change)=\"fileService.changeListener($event)\" style=\"display: none;\" />\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(fileService) {
        this.fileService = fileService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_file_service__["a" /* FileService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/has-key.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HasKeyPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HasKeyPipe = (function () {
    function HasKeyPipe() {
    }
    HasKeyPipe.prototype.transform = function (value, args) {
        return args.split('.').every(function (x) {
            if (typeof value != 'object' || value === null)
                return false;
            value = value[x];
            return true;
        });
    };
    return HasKeyPipe;
}());
HasKeyPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'hasKey'
    })
], HasKeyPipe);

//# sourceMappingURL=has-key.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/nscolor-to-hex.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NSColorToHexPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NSColorToHexPipe = (function () {
    function NSColorToHexPipe() {
    }
    NSColorToHexPipe.prototype.transform = function (value, args) {
        var hexValue = [];
        this.componentArray(hexValue, value.red, value.green, value.blue);
        return "#" + this.hex(hexValue[0]) + this.hex(hexValue[1]) + this.hex(hexValue[2]);
    };
    NSColorToHexPipe.prototype.msToRGB = function (value) {
        return (Math.round(value * 255));
    };
    NSColorToHexPipe.prototype.componentArray = function (hexValue, r, g, b) {
        hexValue.push(this.msToRGB(r));
        hexValue.push(this.msToRGB(g));
        hexValue.push(this.msToRGB(b));
        return hexValue;
    };
    NSColorToHexPipe.prototype.hex = function (x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    };
    return NSColorToHexPipe;
}());
NSColorToHexPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({
        name: 'NSColorToHex'
    })
], NSColorToHexPipe);

//# sourceMappingURL=nscolor-to-hex.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/properties/borders/borders.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  borders works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/properties/borders/borders.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/properties/borders/borders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BordersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BordersComponent = (function () {
    function BordersComponent() {
    }
    BordersComponent.prototype.ngOnInit = function () {
    };
    return BordersComponent;
}());
BordersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-borders',
        template: __webpack_require__("../../../../../src/app/properties/borders/borders.component.html"),
        styles: [__webpack_require__("../../../../../src/app/properties/borders/borders.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BordersComponent);

//# sourceMappingURL=borders.component.js.map

/***/ }),

/***/ "../../../../../src/app/properties/dimensions/dimensions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar__box properties dimensions\" *ngIf=\"layer?.frame\">\n  <div class=\"sidebar__title\">Dimensions</div>\n  <div class=\"propertygroup\">\n    <div class=\"propertygroup__label\">Position</div>\n    <div class=\"property\" *ngIf=\"layer.frame.x | isDefined\">\n      <span class=\"property__value\" data-clipboard-text=\"30px\">{{ layer.frame.x | round }}px</span>\n      <span class=\"property__extra\">X</span>\n    </div>\n    <div class=\"property\"  *ngIf=\"layer.frame.y | isDefined\">\n      <span class=\"property__value\" data-clipboard-text=\"30px\">{{ layer.frame.y | round }}px</span>\n      <span class=\"property__extra\">Y</span>\n    </div>\n  </div>\n  <div class=\"propertygroup\">\n    <div class=\"propertygroup__label\">Size</div>\n    <div class=\"property\" *ngIf=\"layer.frame.width | isDefined\">\n      <span class=\"property__value\" data-clipboard-text=\"30px\">{{ layer.frame.width | round }}px</span>\n      <span class=\"property__extra\">Width</span>\n    </div>\n    <div class=\"property\"  *ngIf=\"layer.frame.height | isDefined\">\n      <span class=\"property__value\" data-clipboard-text=\"30px\">{{ layer.frame.height | round }}px</span>\n      <span class=\"property__extra\">Height</span>\n    </div>\n  </div>\n  <div class=\"propertygroup\" *ngIf=\"layer.style | hasKey: 'contextSettings.opacity'\">\n    <div class=\"propertygroup__label\">Opacity</div>\n    <div class=\"property\">\n      <span class=\"property__value\">{{ layer.style.contextSettings.opacity * 100 | round }}%</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/properties/dimensions/dimensions.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/properties/dimensions/dimensions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DimensionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DimensionsComponent = (function () {
    function DimensionsComponent() {
    }
    DimensionsComponent.prototype.ngOnInit = function () {
    };
    return DimensionsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], DimensionsComponent.prototype, "layer", void 0);
DimensionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-dimensions',
        template: __webpack_require__("../../../../../src/app/properties/dimensions/dimensions.component.html"),
        styles: [__webpack_require__("../../../../../src/app/properties/dimensions/dimensions.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DimensionsComponent);

//# sourceMappingURL=dimensions.component.js.map

/***/ }),

/***/ "../../../../../src/app/properties/fills/fills.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar__box properties fills\" *ngIf=\"layer.style | hasKey: 'fills'\">\n  <div class=\"sidebar__title\">Fills</div>\n  <div class=\"propertygroup\" *ngFor=\"let fill of layer.style.fills\">\n    <!-- Solid color -->\n    <ng-container *ngIf=\"fill.fillType == 0\">\n      <div class=\"propertygroup__label\">Color</div>\n      <div class=\"property property--color property--full\">\n        <span class=\"property__color\" [ngStyle]=\"getBackgroundColorStyle('solid', fill.color | NSColorToHex)\"></span>\n        <span class=\"property__value\" data-clipboard-text=\"#FFFFFF 100%\">{{ fill.color | NSColorToHex }} {{ fill.color.alpha * 100 | round }}%</span>\n      </div>\n    </ng-container>\n\n    <!-- Gradient -->\n    <ng-container *ngIf=\"fill.fillType == 1\">\n      <div class=\"propertygroup__label\">Gradient</div>\n      <div class=\"property property--color property--full\" *ngFor=\"let stop of fill.gradient.stops\">\n        <span class=\"property__color\" [ngStyle]=\"getBackgroundColorStyle('solid', stop.color | NSColorToHex)\"></span>\n        <span class=\"property__value\" data-clipboard-text=\"30px\">{{ stop.color | NSColorToHex }} {{ stop.color.alpha * 100 | round }}%</span>\n        <span class=\"property__extra\">{{ stop.position * 100 | round}}%</span>\n      </div>\n    </ng-container>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/properties/fills/fills.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/properties/fills/fills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FillsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FillsComponent = (function () {
    function FillsComponent() {
    }
    FillsComponent.prototype.ngOnInit = function () {
    };
    FillsComponent.prototype.getBackgroundColorStyle = function (type, hexColor) {
        if (type === 'solid') {
            return { 'background-color': hexColor };
        }
    };
    return FillsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], FillsComponent.prototype, "layer", void 0);
FillsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-fills',
        template: __webpack_require__("../../../../../src/app/properties/fills/fills.component.html"),
        styles: [__webpack_require__("../../../../../src/app/properties/fills/fills.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FillsComponent);

//# sourceMappingURL=fills.component.js.map

/***/ }),

/***/ "../../../../../src/app/properties/properties.component.html":
/***/ (function(module, exports) {

module.exports = "<app-dimensions [layer]=\"layer\" *ngIf=\"layer\"></app-dimensions>\n<app-fills [layer]=\"layer\" *ngIf=\"layer\"></app-fills>\n"

/***/ }),

/***/ "../../../../../src/app/properties/properties.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/properties/properties.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PropertiesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PropertiesComponent = (function () {
    function PropertiesComponent() {
    }
    PropertiesComponent.prototype.ngOnInit = function () {
    };
    return PropertiesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], PropertiesComponent.prototype, "layer", void 0);
PropertiesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-properties',
        template: __webpack_require__("../../../../../src/app/properties/properties.component.html"),
        styles: [__webpack_require__("../../../../../src/app/properties/properties.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PropertiesComponent);

//# sourceMappingURL=properties.component.js.map

/***/ }),

/***/ "../../../../../src/app/properties/shadows/shadows.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  shadows works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/properties/shadows/shadows.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/properties/shadows/shadows.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShadowsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShadowsComponent = (function () {
    function ShadowsComponent() {
    }
    ShadowsComponent.prototype.ngOnInit = function () {
    };
    return ShadowsComponent;
}());
ShadowsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-shadows',
        template: __webpack_require__("../../../../../src/app/properties/shadows/shadows.component.html"),
        styles: [__webpack_require__("../../../../../src/app/properties/shadows/shadows.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ShadowsComponent);

//# sourceMappingURL=shadows.component.js.map

/***/ }),

/***/ "../../../../../src/app/properties/text/text.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  text works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/properties/text/text.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/properties/text/text.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextComponent = (function () {
    function TextComponent() {
    }
    TextComponent.prototype.ngOnInit = function () {
    };
    return TextComponent;
}());
TextComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-text',
        template: __webpack_require__("../../../../../src/app/properties/text/text.component.html"),
        styles: [__webpack_require__("../../../../../src/app/properties/text/text.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TextComponent);

//# sourceMappingURL=text.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/file.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jszip__ = __webpack_require__("../../../../jszip/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jszip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jszip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FileService = (function () {
    function FileService(http) {
        this.http = http;
        this.ready = false;
        this.data = {};
        this.artboards = [];
        this.imageData = null;
        this.XMin = 0;
        this.YMin = 0;
    }
    FileService.prototype.changeListener = function ($event) {
        this.readFile($event.target);
    };
    FileService.prototype.readFile = function (inputValue) {
        var zipFile = new __WEBPACK_IMPORTED_MODULE_2_jszip__();
        var self = this;
        zipFile.loadAsync(inputValue.files[0]).then(function (zip) {
            zip.forEach(function (relativePath, zipEntry) {
                if (relativePath === 'previews/preview.png') {
                    zipEntry.async('base64').then(function success(content) {
                        self.data['imageData'] = 'data:image/png;base64,' + content;
                        var preview = new Image;
                        preview.src = 'data:image/png;base64,' + content;
                        preview.onload = function () {
                            self.data['imageData_width'] = preview.width;
                            self.data['imageData_height'] = preview.height;
                        };
                    });
                }
                else if (relativePath.startsWith('pages/')) {
                    zipEntry.async('string').then(function success(content) {
                        var page = JSON.parse(content);
                        self.artboards.push(page.layers);
                        self.data.artboards = [];
                        self.data.artboards.push(page.layers);
                        self.calculateImageCoordinates(page.layers);
                    });
                }
            });
        });
    };
    FileService.prototype.calculateImageCoordinates = function (artboards) {
        var XJson = [];
        var YJson = [];
        artboards.forEach(function (artboard) {
            XJson.push(artboard.frame.x);
            YJson.push(artboard.frame.y);
        });
        this.XMin = Math.min.apply(null, XJson);
        this.YMin = Math.min.apply(null, YJson);
    };
    return FileService;
}());
FileService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FileService);

var _a;
//# sourceMappingURL=file.service.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar-left/layers/layers.component.html":
/***/ (function(module, exports) {

module.exports = "<ul *ngFor=\"let layer of layers\">\n  <li *ngIf=\"isVisible(layer)\" id=\"{{ layer.do_objectID }}\" [ngClass]=\"getClassName(layer)\">\n    <span (click)=\"select($event, layer)\">{{ layer.name }}</span>\n\n    <app-layers [layers]=\"layer.layers\" *ngIf=\"layer.layers\"></app-layers>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/sidebar-left/layers/layers.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar-left/layers/layers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayersComponent = (function () {
    function LayersComponent(renderer) {
        this.renderer = renderer;
    }
    LayersComponent.prototype.ngOnInit = function () { };
    LayersComponent.prototype.select = function (event, layer) {
        event.target.parentElement.classList.toggle('open');
        if (layer['<class>'] != 'group') {
            event.target.parentElement.classList.toggle('selected');
        }
        console.log(layer);
    };
    LayersComponent.prototype.layerInformation = function (layer) {
        var className;
        var visible = true;
        switch (layer['_class']) {
            case ('page'):
                className = 'page';
                break;
            case ('artboard'):
                className = 'artboard';
                break;
            case ('group'):
                className = 'group';
                break;
            case ('text'):
                className = 'text';
                break;
            case ('bitmap'):
                className = 'image';
                break;
            case ('shapeGroup'):
                switch (layer.layers[0]['_class']) {
                    case ('rectangle'):
                        className = 'rectangle';
                        break;
                    case ('oval'):
                        className = 'oval';
                        break;
                    case ('star'):
                        className = 'star';
                        break;
                    case ('triangle'):
                        className = 'triangle';
                        break;
                    case ('shapePath'):
                        className = 'vector';
                        break;
                }
                break;
            case ('rectangle'):
                className = 'rectangle';
                visible = false;
                break;
            case ('oval'):
                className = 'oval';
                visible = false;
                break;
            case ('star'):
                className = 'star';
                visible = false;
                break;
            case ('triangle'):
                className = 'triangle';
                visible = false;
                break;
            case ('shapePath'):
                className = 'vector';
                visible = false;
                break;
        }
        return { 'classname': className, 'visible': visible };
    };
    LayersComponent.prototype.getClassName = function (layer) {
        return this.layerInformation(layer).classname;
    };
    LayersComponent.prototype.isVisible = function (layer) {
        return this.layerInformation(layer).visible;
    };
    return LayersComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], LayersComponent.prototype, "layers", void 0);
LayersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-layers',
        template: __webpack_require__("../../../../../src/app/sidebar-left/layers/layers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sidebar-left/layers/layers.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */]) === "function" && _a || Object])
], LayersComponent);

var _a;
//# sourceMappingURL=layers.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar-left/sidebar-left.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar__box artboards\" *ngIf=\"fileService.artboards[0]\">\n  <div class=\"sidebar__title\" (click)=\"log(fileService.artboards)\">Artboards</div>\n  <ul>\n    <li *ngFor=\"let artboard of fileService.artboards[0] | reverse\" class=\"artboard\">\n      <span (click)=\"showLayersOfArtboard($event, artboard)\">{{ artboard.name }}</span>\n    </li>\n  </ul>\n</div>\n\n<div class=\"sidebar__box sidebar__scroll layers\" *ngIf=\"currentArtboard[0]\">\n  <div class=\"sidebar__title\">Layers</div>\n  <app-tree-view [layers]=\"currentArtboard[0]\" [type]=\"treetype\"></app-tree-view>\n</div>\n\n<div class=\"sidebar__box layercontrols\">\n  <div class=\"layercontrols__label\">Layers</div>\n  <span class=\"layercontrols__button\">open all</span>\n  <span class=\"layercontrols__button\">close all</span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/sidebar-left/sidebar-left.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page > span:before {\n  background: url(" + __webpack_require__("../../../../../src/assets/images/icon-group.svg") + ") no-repeat;\n  background-position: left center; }\n\n.artboard > span:before {\n  background: url(" + __webpack_require__("../../../../../src/assets/images/icon-group.svg") + ") no-repeat;\n  background-position: left center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar-left/sidebar-left.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarLeftComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarLeftComponent = (function () {
    function SidebarLeftComponent(fileService) {
        this.fileService = fileService;
        this.artboards = [];
        this.currentArtboard = [];
        this.treetype = 'layers';
    }
    SidebarLeftComponent.prototype.ngOnInit = function () {
    };
    SidebarLeftComponent.prototype.log = function (object) {
        console.log(object);
        console.log(this.fileService.data);
    };
    SidebarLeftComponent.prototype.showLayersOfArtboard = function (event, artboard) {
        // Remove all selected classes from every artboard
        var artboards = document.querySelectorAll('.sidebar__box.artboards li, .sidebar__box.layers li');
        [].forEach.call(artboards, function (el) {
            el.classList.remove('selected');
        });
        event.target.parentElement.classList.add('selected');
        this.currentArtboard = [];
        this.currentArtboard.push(artboard.layers);
    };
    return SidebarLeftComponent;
}());
SidebarLeftComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-sidebar-left',
        template: __webpack_require__("../../../../../src/app/sidebar-left/sidebar-left.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sidebar-left/sidebar-left.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_file_service__["a" /* FileService */]) === "function" && _a || Object])
], SidebarLeftComponent);

var _a;
//# sourceMappingURL=sidebar-left.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar-right/sidebar-right.component.html":
/***/ (function(module, exports) {

module.exports = "<app-properties [layer]=\"fileSerice.selectedLayer\"></app-properties>\n"

/***/ }),

/***/ "../../../../../src/app/sidebar-right/sidebar-right.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar-right/sidebar-right.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarRightComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarRightComponent = (function () {
    function SidebarRightComponent(fileSerice) {
        this.fileSerice = fileSerice;
    }
    SidebarRightComponent.prototype.ngOnInit = function () {
    };
    SidebarRightComponent.prototype.showLayer = function (layer) {
        console.log(layer);
    };
    return SidebarRightComponent;
}());
SidebarRightComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-sidebar-right',
        template: __webpack_require__("../../../../../src/app/sidebar-right/sidebar-right.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sidebar-right/sidebar-right.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_file_service__["a" /* FileService */]) === "function" && _a || Object])
], SidebarRightComponent);

var _a;
//# sourceMappingURL=sidebar-right.component.js.map

/***/ }),

/***/ "../../../../../src/app/tree-view/tree-view.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Layer tree -->\n<ng-container *ngIf=\"type === 'layers'\">\n  <ul *ngFor=\"let layer of layers | reverse\">\n    <li *ngIf=\"isVisible(layer)\" [attr.data-objectid]=\"layer.do_objectID\" [ngClass]=\"getClassname(layer)\">\n      <!-- Layer name -->\n      <span (click)=\"selectLayer($event, layer)\" (mouseover)=\"hightlightHotspot($event, layer, true)\" (mouseleave)=\"hightlightHotspot($event, layer, false)\">{{ layer.name }}</span>\n\n      <!-- Recursive loop -->\n      <app-tree-view *ngIf=\"layer.layers\" [layers]=\"layer.layers\" [type]=\"type\"></app-tree-view>\n    </li>\n  </ul>\n</ng-container>\n\n\n<!-- Hotspot tree -->\n<ng-container *ngIf=\"type === 'hotspots'\">\n  <ng-container *ngFor=\"let layer of layers; let idx = index\">\n    <div *ngIf=\"isVisible(layer)\" [attr.data-objectid]=\"layer.do_objectID\" class=\"hotspot\" [ngClass]=\"getClassname(layer)\" [ngStyle]=\"getStyle(layer, idx)\" (click)=\"selectHotspot($event, layer)\">\n      <!-- Create image for artboard background -->\n      <ng-container *ngIf=\"layer['_class'] === 'artboard'\">\n        <img [src]=\"fileService.data['imageData']\" [ngStyle]=\"getImageStyle(layer)\" />\n      </ng-container>\n\n      <!-- Recursive loop -->\n      <app-tree-view *ngIf=\"layer.layers\" [layers]=\"layer.layers\" [type]=\"type\"></app-tree-view>\n    </div>\n  </ng-container>\n</ng-container>\n"

/***/ }),

/***/ "../../../../../src/app/tree-view/tree-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * Colors\n */\n/**\n * Dimensions\n */\n/**\n * Typography\n */\n.group > span:before {\n  background: url(" + __webpack_require__("../../../../../src/assets/images/icon-group.svg") + ") no-repeat;\n  background-position: left center; }\n\n.group > span:after {\n  background: url(" + __webpack_require__("../../../../../src/assets/images/arrow.svg") + ") no-repeat;\n  background-position: left center; }\n\n.group.open > span:after {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  top: 21px;\n  right: 17px; }\n\n.rectangle > span:before {\n  background: url(" + __webpack_require__("../../../../../src/assets/images/icon-rectangle.svg") + ") no-repeat;\n  background-position: left center; }\n\n.oval > span:before {\n  background: url(" + __webpack_require__("../../../../../src/assets/images/icon-oval.svg") + ") no-repeat;\n  background-position: left center; }\n\n.triangle > span:before {\n  background: url(" + __webpack_require__("../../../../../src/assets/images/icon-rectangle.svg") + ") no-repeat;\n  background-position: left center; }\n\n.star > span:before {\n  background: url(" + __webpack_require__("../../../../../src/assets/images/icon-rectangle.svg") + ") no-repeat;\n  background-position: left center; }\n\n.shapePath > span:before {\n  background: url(" + __webpack_require__("../../../../../src/assets/images/icon-rectangle.svg") + ") no-repeat;\n  background-position: left center; }\n\n.text > span:before {\n  background: url(" + __webpack_require__("../../../../../src/assets/images/icon-text.svg") + ") no-repeat;\n  background-position: left center; }\n\n.image > span:before {\n  background: url(" + __webpack_require__("../../../../../src/assets/images/icon-image.svg") + ") no-repeat;\n  background-position: left center; }\n\n.highlight {\n  border: 1px solid red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tree-view/tree-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeViewComponent = (function () {
    function TreeViewComponent(renderer, fileService) {
        this.renderer = renderer;
        this.fileService = fileService;
    }
    TreeViewComponent.prototype.ngOnInit = function () { };
    TreeViewComponent.prototype.selectLayer = function (event, layer) {
        event.target.parentElement.classList.toggle('open');
        if (layer['_class'] !== 'group') {
            // Remove all selected classes from every layer
            var layers = document.querySelectorAll('.sidebar__box.layers li');
            [].forEach.call(layers, function (el) {
                el.classList.remove('selected');
            });
            // Remove all highlight classes from every highlight
            var hotspots = document.querySelectorAll('.main .hotspot');
            [].forEach.call(hotspots, function (el) {
                el.classList.remove('highlight');
            });
            // Add selected class to selected layer
            event.target.parentElement.classList.toggle('selected');
            // Add highlight class to selected hotspot
            this.hightlightHotspot(false, layer, true);
            this.fileService.selectedLayer = layer;
        }
    };
    TreeViewComponent.prototype.selectHotspot = function (event, layer) {
        event.stopPropagation();
        console.log(layer);
        // Remove all selected classes from every layer
        var layers = document.querySelectorAll('.sidebar__box.layers li');
        [].forEach.call(layers, function (el) {
            el.classList.remove('selected');
        });
        // Select layer in layerlist
        var objectID = layer['do_objectID'];
        var sidebarLayer = document.body.querySelector('.sidebar__left [data-objectid=\'' + objectID + '\']');
        sidebarLayer.classList.add('selected');
        $('.sidebar__left [data-objectid=\'' + objectID + '\']').parents('.group').addClass('open');
        // Remove all highlight classes from every highlight
        var hotspots = document.querySelectorAll('.main .hotspot');
        [].forEach.call(hotspots, function (el) {
            el.classList.remove('highlight');
        });
        this.hightlightHotspot(false, layer, true);
        this.fileService.selectedLayer = layer;
    };
    TreeViewComponent.prototype.hightlightHotspot = function (event, layer, hightlight) {
        var objectID = layer['do_objectID'];
        var hotspot = document.body.querySelector('.main [data-objectid=\'' + objectID + '\']');
        if (hightlight) {
            hotspot.classList.add('highlight');
        }
        else {
            if (event) {
                if (!event.target.parentElement.classList.contains('selected')) {
                    hotspot.classList.remove('highlight');
                }
            }
        }
    };
    TreeViewComponent.prototype.layerInformation = function (layer) {
        var classname = layer['_class'];
        var visible = true;
        if (layer['_class'] === 'shapeGroup') {
            classname = layer.layers[0]['_class'];
        }
        var hiddenElements = ['rectangle', 'oval', 'star', 'triangle', 'shapePath'];
        if (hiddenElements.indexOf(layer['_class']) > -1) {
            visible = false;
        }
        return { 'classname': classname, 'visible': visible };
    };
    TreeViewComponent.prototype.getClassname = function (layer) {
        return this.layerInformation(layer).classname;
    };
    TreeViewComponent.prototype.isVisible = function (layer) {
        return this.layerInformation(layer).visible;
    };
    TreeViewComponent.prototype.getStyle = function (layer, idx) {
        var styles;
        if (layer['_class'] == 'page') {
            styles = {
                'overflow': 'visible',
                'width': '99999px'
            };
        }
        else if (layer['_class'] == 'artboard') {
            styles = {
                'position': 'relative',
                'overflow': 'hidden',
                'float': 'none',
                'margin': '50px auto',
                'width': layer.frame.width + 'px',
                'height': layer.frame.height + 'px',
            };
        }
        else {
            styles = {
                'position': 'absolute',
                'overflow': 'hidden',
                'width': layer.frame.width + 'px',
                'height': layer.frame.height + 'px',
                'top': layer.frame.y + 'px',
                'left': layer.frame.x + 'px',
                'z-index': 9999 - idx
            };
        }
        return styles;
    };
    TreeViewComponent.prototype.getImageStyle = function (layer) {
        var styles;
        var X = layer.frame.x - this.fileService.XMin;
        var Y = layer.frame.y - this.fileService.YMin;
        var width = this.fileService.data['imageData_width'];
        var height = this.fileService.data['imageData_height'];
        styles = {
            'width': width + 'px',
            'height': height + 'px',
            'object-fit': 'none',
            'object-position': '-' + X + 'px -' + Y + 'px'
        };
        return styles;
    };
    return TreeViewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], TreeViewComponent.prototype, "layers", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], TreeViewComponent.prototype, "type", void 0);
TreeViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-tree-view',
        template: __webpack_require__("../../../../../src/app/tree-view/tree-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/tree-view/tree-view.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Renderer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_file_service__["a" /* FileService */]) === "function" && _b || Object])
], TreeViewComponent);

var _a, _b;
//# sourceMappingURL=tree-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/viewer/viewer.component.html":
/***/ (function(module, exports) {

module.exports = "<app-tree-view [layers]=\"fileService.data.artboards[0]\" [type]=\"treetype\" *ngIf=\"fileService.data.imageData\"></app-tree-view>\n"

/***/ }),

/***/ "../../../../../src/app/viewer/viewer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/viewer/viewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_file_service__ = __webpack_require__("../../../../../src/app/services/file.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewerComponent = (function () {
    function ViewerComponent(fileService) {
        this.fileService = fileService;
        this.treetype = 'hotspots';
    }
    ViewerComponent.prototype.ngOnChanges = function () {
    };
    return ViewerComponent;
}());
ViewerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-viewer',
        template: __webpack_require__("../../../../../src/app/viewer/viewer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/viewer/viewer.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_file_service__["a" /* FileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_file_service__["a" /* FileService */]) === "function" && _a || Object])
], ViewerComponent);

var _a;
//# sourceMappingURL=viewer.component.js.map

/***/ }),

/***/ "../../../../../src/assets/images/arrow.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "arrow.10f4a34b1991c7392df2.svg";

/***/ }),

/***/ "../../../../../src/assets/images/icon-group.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icon-group.a5c97bdfb3d68855658a.svg";

/***/ }),

/***/ "../../../../../src/assets/images/icon-image.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icon-image.49ee98063627261372dd.svg";

/***/ }),

/***/ "../../../../../src/assets/images/icon-oval.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icon-oval.a339a1c6e8effda1f758.svg";

/***/ }),

/***/ "../../../../../src/assets/images/icon-rectangle.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icon-rectangle.87115c6554bfeef8a049.svg";

/***/ }),

/***/ "../../../../../src/assets/images/icon-text.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icon-text.b35f67542bb1c4798a68.svg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyBTmmgl1LlLAg6T-sVl0HAybmSj1M3Qefg',
        authDomain: 'sketch-inspector.firebaseapp.com',
        databaseURL: 'https://sketch-inspector.firebaseio.com',
        projectId: 'sketch-inspector',
        storageBucket: '',
        messagingSenderId: '253830521761'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map