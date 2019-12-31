(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main\">\n  <section class=\"sign-in\">\n    <div class=\"container\">\n      <div class=\"signin-content\">\n        <div class=\"signin-image\">\n          <figure>\n            <img src=\"../../assets/images/signin-image.jpg\" alt=\"{{imgDesc}}\">\n          </figure>\n          <a routerLink=\"/register\" class=\"signup-image-link\">Create an account</a>\n        </div>\n        <div class=\"signin-form\">\n          <h2 class=\"form-title\">{{titleText}}</h2>\n          <div class=\"row\" *ngIf=\"authError\">\n            <div class=\"alert alert-danger\">\n              {{ authError?.message }}\n            </div>\n          </div>\n          <form #loginForm=\"ngForm\" (ngSubmit)=\"login(loginForm)\" class=\"register-form\" id=\"login-form\">\n            <div class=\"form-group\">\n              <label for=\"your_name\"><i class=\"zmdi zmdi-account material-icons-name\"></i></label>\n              <input ngModel #email=\"ngModel\" type=\"text\" name=\"email\" id=\"email\" placeholder=\"Email\" />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"your_pass\"><i class=\"zmdi zmdi-lock\"></i></label>\n              <input ngModel #password=\"ngModel\" type=\"password\" name=\"password\" id=\"password\" placeholder=\"Password\" />\n            </div>\n            <div class=\"form-group form-button\">\n              <input type=\"submit\" name=\"signin\" id=\"signin\" class=\"form-submit\" value=\"Log in\" />\n            </div>\n          </form>\n          <div class=\"social-login\">\n            <span class=\"social-label\">Or login with</span>\n            <ul class=\"socials\">\n              <li><a href=\"#\"><i class=\"display-flex-center zmdi zmdi-facebook\"></i></a></li>\n              <li><a href=\"#\"><i class=\"display-flex-center zmdi zmdi-twitter\"></i></a></li>\n              <li><a href=\"#\"><i class=\"display-flex-center zmdi zmdi-google\"></i></a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/registration/registration.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/registration/registration.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main\">\n  <section class=\"signup\">\n    <div class=\"container\">\n      <div class=\"signup-content\">\n        <div class=\"signup-form\">\n          <h2 class=\"form-title\">Sign up</h2>\n          <div class=\"row\" *ngIf=\"authError\">\n            <div class=\"alert alert-danger\">\n              {{ authError?.message }}\n            </div>\n          </div>\n          <form #userRegForm=\"ngForm\" (ngSubmit)=\"createUser(userRegForm)\" class=\"register-form\" id=\"register-form\">\n            <div class=\"form-group\">\n              <label for=\"name\"><i class=\"zmdi zmdi-account material-icons-name\"></i></label>\n              <input ngModel #yourname=\"ngModel\" type=\"text\" name=\"name\" id=\"name\" placeholder=\"Your Name\" />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"email\"><i class=\"zmdi zmdi-email\"></i></label>\n              <input ngModel #email=\"ngModel\" type=\"email\" name=\"email\" id=\"email\" placeholder=\"Your Email\" />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"pass\"><i class=\"zmdi zmdi-lock\"></i></label>\n              <input ngModel #password=\"ngModel\" type=\" password\" name=\"pass\" id=\"pass\" placeholder=\"Password\" />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"re-pass\"><i class=\"zmdi zmdi-lock-outline\"></i></label>\n              <input type=\"password\" name=\"re_pass\" id=\"re_pass\" placeholder=\"Repeat your password\" />\n            </div>\n            <div class=\"form-group form-button\">\n              <input type=\"submit\" name=\"signup\" id=\"signup\" class=\"form-submit\" value=\"Register\" />\n            </div>\n          </form>\n        </div>\n        <div class=\"signup-image\">\n          <figure><img src=\"../../assets/images/signup-image.jpg\" alt=\"sing up image\"></figure>\n          <a href=\"\" class=\"signup-image-link\">I am already member</a>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"user\" class=\"dashboard\">\n  <h4>\n    Welcome {{ user?.displayName }}\n  </h4>\n  <button type=\"button\" class=\"btn btn-danger\" *ngIf=\"user\" (click)=\"logout()\">Logout</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/registration/registration.component */ "./src/app/auth/registration/registration.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");






const routes = [
    { path: "register", component: _auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"] },
    { path: "", component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: "dashboard", component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);

const routingComponents = [
    _auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"],
    _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
    _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"]
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Wisataku';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["routingComponents"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_8__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let AuthService = class AuthService {
    constructor(afAuth, db, router) {
        this.afAuth = afAuth;
        this.db = db;
        this.router = router;
        this.eventAuthError = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]("");
        this.eventAuthError$ = this.eventAuthError.asObservable();
    }
    getUserState() {
        return this.afAuth.authState;
    }
    createUser(user) {
        this.afAuth.auth
            .createUserWithEmailAndPassword(user.email, user.pass)
            .then(userCredential => {
            this.newUser = user;
            console.log(userCredential);
            userCredential.user.updateProfile({
                displayName: user.name
            });
            this.insertUserData(userCredential).then(() => {
                this.router.navigate([""]);
            });
        })
            .catch(error => {
            this.eventAuthError.next(error);
        });
    }
    insertUserData(userCredential) {
        return this.db.doc(`Users/${userCredential.user.uid}`).set({
            name: this.newUser.name,
            email: this.newUser.email,
            password: this.newUser.pass
        });
    }
    login(email, password) {
        this.afAuth.auth
            .signInWithEmailAndPassword(email, password)
            .catch(error => {
            this.eventAuthError.next(error);
        })
            .then(userCredential => {
            if (userCredential) {
                this.router.navigate(["/dashboard"]);
            }
        });
    }
    logout() {
        this.afAuth.auth.signOut();
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], AuthService);



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* @extend display-flex; */\r\ndisplay-flex,\r\n.display-flex,\r\n.display-flex-center,\r\n.signup-content,\r\n.signin-content,\r\n.social-login,\r\n.socials {\r\n  display: flex;\r\n  display: -webkit-flex;\r\n}\r\n/* @extend list-type-ulli; */\r\nlist-type-ulli,\r\n.socials {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n/* poppins-300 - latin */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: normal;\r\n  font-weight: 300;\r\n  src: url('poppins-v5-latin-300.eot');\r\n  /* IE9 Compat Modes */\r\n  src: local(\"Poppins Light\"), local(\"Poppins-Light\"), url('poppins-v5-latin-300.eot?#iefix') format(\"embedded-opentype\"), url('poppins-v5-latin-300.woff2') format(\"woff2\"), url('poppins-v5-latin-300.woff') format(\"woff\"), url('poppins-v5-latin-300.ttf') format(\"truetype\"), url('poppins-v5-latin-300.svg#Poppins') format(\"svg\");\r\n  /* Legacy iOS */\r\n}\r\n/* poppins-300italic - latin */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: italic;\r\n  font-weight: 300;\r\n  src: url('poppins-v5-latin-300italic.eot');\r\n  /* IE9 Compat Modes */\r\n  src: local(\"Poppins Light Italic\"), local(\"Poppins-LightItalic\"), url('poppins-v5-latin-300italic.eot?#iefix') format(\"embedded-opentype\"), url('poppins-v5-latin-300italic.woff2') format(\"woff2\"), url('poppins-v5-latin-300italic.woff') format(\"woff\"), url('poppins-v5-latin-300italic.ttf') format(\"truetype\"), url('poppins-v5-latin-300italic.svg#Poppins') format(\"svg\");\r\n  /* Legacy iOS */\r\n}\r\n/* poppins-regular - latin */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url('poppins-v5-latin-regular.eot');\r\n  /* IE9 Compat Modes */\r\n  src: local(\"Poppins Regular\"), local(\"Poppins-Regular\"), url('poppins-v5-latin-regular.eot?#iefix') format(\"embedded-opentype\"), url('poppins-v5-latin-regular.woff2') format(\"woff2\"), url('poppins-v5-latin-regular.woff') format(\"woff\"), url('poppins-v5-latin-regular.ttf') format(\"truetype\"), url('poppins-v5-latin-regular.svg#Poppins') format(\"svg\");\r\n  /* Legacy iOS */\r\n}\r\n/* poppins-italic - latin */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: url('poppins-v5-latin-italic.eot');\r\n  /* IE9 Compat Modes */\r\n  src: local(\"Poppins Italic\"), local(\"Poppins-Italic\"), url('poppins-v5-latin-italic.eot?#iefix') format(\"embedded-opentype\"), url('poppins-v5-latin-italic.woff2') format(\"woff2\"), url('poppins-v5-latin-italic.woff') format(\"woff\"), url('poppins-v5-latin-italic.ttf') format(\"truetype\"), url('poppins-v5-latin-italic.svg#Poppins') format(\"svg\");\r\n  /* Legacy iOS */\r\n}\r\n/* poppins-500 - latin */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  src: url('poppins-v5-latin-500.eot');\r\n  /* IE9 Compat Modes */\r\n  src: local(\"Poppins Medium\"), local(\"Poppins-Medium\"), url('poppins-v5-latin-500.eot?#iefix') format(\"embedded-opentype\"), url('poppins-v5-latin-500.woff2') format(\"woff2\"), url('poppins-v5-latin-500.woff') format(\"woff\"), url('poppins-v5-latin-500.ttf') format(\"truetype\"), url('poppins-v5-latin-500.svg#Poppins') format(\"svg\");\r\n  /* Legacy iOS */\r\n}\r\n/* poppins-500italic - latin */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: italic;\r\n  font-weight: 500;\r\n  src: url('poppins-v5-latin-500italic.eot');\r\n  /* IE9 Compat Modes */\r\n  src: local(\"Poppins Medium Italic\"), local(\"Poppins-MediumItalic\"), url('poppins-v5-latin-500italic.eot?#iefix') format(\"embedded-opentype\"), url('poppins-v5-latin-500italic.woff2') format(\"woff2\"), url('poppins-v5-latin-500italic.woff') format(\"woff\"), url('poppins-v5-latin-500italic.ttf') format(\"truetype\"), url('poppins-v5-latin-500italic.svg#Poppins') format(\"svg\");\r\n  /* Legacy iOS */\r\n}\r\n/* poppins-600 - latin */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  src: url('poppins-v5-latin-600.eot');\r\n  /* IE9 Compat Modes */\r\n  src: local(\"Poppins SemiBold\"), local(\"Poppins-SemiBold\"), url('poppins-v5-latin-600.eot?#iefix') format(\"embedded-opentype\"), url('poppins-v5-latin-600.woff2') format(\"woff2\"), url('poppins-v5-latin-600.woff') format(\"woff\"), url('poppins-v5-latin-600.ttf') format(\"truetype\"), url('poppins-v5-latin-600.svg#Poppins') format(\"svg\");\r\n  /* Legacy iOS */\r\n}\r\n/* poppins-700 - latin */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: url('poppins-v5-latin-700.eot');\r\n  /* IE9 Compat Modes */\r\n  src: local(\"Poppins Bold\"), local(\"Poppins-Bold\"), url('poppins-v5-latin-700.eot?#iefix') format(\"embedded-opentype\"), url('poppins-v5-latin-700.woff2') format(\"woff2\"), url('poppins-v5-latin-700.woff') format(\"woff\"), url('poppins-v5-latin-700.ttf') format(\"truetype\"), url('poppins-v5-latin-700.svg#Poppins') format(\"svg\");\r\n  /* Legacy iOS */\r\n}\r\n/* poppins-700italic - latin */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: url('poppins-v5-latin-700italic.eot');\r\n  /* IE9 Compat Modes */\r\n  src: local(\"Poppins Bold Italic\"), local(\"Poppins-BoldItalic\"), url('poppins-v5-latin-700italic.eot?#iefix') format(\"embedded-opentype\"), url('poppins-v5-latin-700italic.woff2') format(\"woff2\"), url('poppins-v5-latin-700italic.woff') format(\"woff\"), url('poppins-v5-latin-700italic.ttf') format(\"truetype\"), url('poppins-v5-latin-700italic.svg#Poppins') format(\"svg\");\r\n  /* Legacy iOS */\r\n}\r\n/* poppins-800 - latin */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: normal;\r\n  font-weight: 800;\r\n  src: url('poppins-v5-latin-800.eot');\r\n  /* IE9 Compat Modes */\r\n  src: local(\"Poppins ExtraBold\"), local(\"Poppins-ExtraBold\"), url('poppins-v5-latin-800.eot?#iefix') format(\"embedded-opentype\"), url('poppins-v5-latin-800.woff2') format(\"woff2\"), url('poppins-v5-latin-800.woff') format(\"woff\"), url('poppins-v5-latin-800.ttf') format(\"truetype\"), url('poppins-v5-latin-800.svg#Poppins') format(\"svg\");\r\n  /* Legacy iOS */\r\n}\r\n/* poppins-800italic - latin */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: italic;\r\n  font-weight: 800;\r\n  src: url('poppins-v5-latin-800italic.eot');\r\n  /* IE9 Compat Modes */\r\n  src: local(\"Poppins ExtraBold Italic\"), local(\"Poppins-ExtraBoldItalic\"), url('poppins-v5-latin-800italic.eot?#iefix') format(\"embedded-opentype\"), url('poppins-v5-latin-800italic.woff2') format(\"woff2\"), url('poppins-v5-latin-800italic.woff') format(\"woff\"), url('poppins-v5-latin-800italic.ttf') format(\"truetype\"), url('poppins-v5-latin-800italic.svg#Poppins') format(\"svg\");\r\n  /* Legacy iOS */\r\n}\r\n/* poppins-900 - latin */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: normal;\r\n  font-weight: 900;\r\n  src: url('poppins-v5-latin-900.eot');\r\n  /* IE9 Compat Modes */\r\n  src: local(\"Poppins Black\"), local(\"Poppins-Black\"), url('poppins-v5-latin-900.eot?#iefix') format(\"embedded-opentype\"), url('poppins-v5-latin-900.woff2') format(\"woff2\"), url('poppins-v5-latin-900.woff') format(\"woff\"), url('poppins-v5-latin-900.ttf') format(\"truetype\"), url('poppins-v5-latin-900.svg#Poppins') format(\"svg\");\r\n  /* Legacy iOS */\r\n}\r\na:focus,\r\na:active {\r\n  text-decoration: none;\r\n  outline: none;\r\n  transition: all 300ms ease 0s;\r\n  -moz-transition: all 300ms ease 0s;\r\n  -webkit-transition: all 300ms ease 0s;\r\n  -o-transition: all 300ms ease 0s;\r\n  -ms-transition: all 300ms ease 0s;\r\n}\r\ninput,\r\nselect,\r\ntextarea {\r\n  outline: none;\r\n  appearance: unset !important;\r\n  -moz-appearance: unset !important;\r\n  -webkit-appearance: unset !important;\r\n  -o-appearance: unset !important;\r\n  -ms-appearance: unset !important;\r\n}\r\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n  appearance: none !important;\r\n  -moz-appearance: none !important;\r\n  -webkit-appearance: none !important;\r\n  -o-appearance: none !important;\r\n  -ms-appearance: none !important;\r\n  margin: 0;\r\n}\r\ninput:focus,\r\nselect:focus,\r\ntextarea:focus {\r\n  outline: none;\r\n  box-shadow: none !important;\r\n  -moz-box-shadow: none !important;\r\n  -webkit-box-shadow: none !important;\r\n  -o-box-shadow: none !important;\r\n  -ms-box-shadow: none !important;\r\n}\r\ninput[type=checkbox] {\r\n  appearance: checkbox !important;\r\n  -moz-appearance: checkbox !important;\r\n  -webkit-appearance: checkbox !important;\r\n  -o-appearance: checkbox !important;\r\n  -ms-appearance: checkbox !important;\r\n}\r\ninput[type=radio] {\r\n  appearance: radio !important;\r\n  -moz-appearance: radio !important;\r\n  -webkit-appearance: radio !important;\r\n  -o-appearance: radio !important;\r\n  -ms-appearance: radio !important;\r\n}\r\nimg {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\nfigure {\r\n  margin: 0;\r\n}\r\np {\r\n  margin-bottom: 0px;\r\n  font-size: 15px;\r\n  color: #777;\r\n}\r\nh2 {\r\n  line-height: 1.66;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-weight: bold;\r\n  color: #222;\r\n  font-family: Poppins;\r\n  font-size: 36px;\r\n}\r\n.main {\r\n  background: #f8f8f8;\r\n  padding: 150px 0;\r\n}\r\n.clear {\r\n  clear: both;\r\n}\r\nbody {\r\n  font-size: 13px;\r\n  line-height: 1.8;\r\n  color: #222;\r\n  background: #f8f8f8;\r\n  font-weight: 400;\r\n  font-family: Poppins;\r\n}\r\n.container {\r\n  width: 900px;\r\n  background: #fff;\r\n  margin: 0 auto;\r\n  box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);\r\n  -moz-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);\r\n  -webkit-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);\r\n  -o-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);\r\n  -ms-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);\r\n  border-radius: 20px;\r\n  -moz-border-radius: 20px;\r\n  -webkit-border-radius: 20px;\r\n  -o-border-radius: 20px;\r\n  -ms-border-radius: 20px;\r\n}\r\n.display-flex {\r\n  justify-content: space-between;\r\n  -moz-justify-content: space-between;\r\n  -webkit-justify-content: space-between;\r\n  -o-justify-content: space-between;\r\n  -ms-justify-content: space-between;\r\n  align-items: center;\r\n  -moz-align-items: center;\r\n  -webkit-align-items: center;\r\n  -o-align-items: center;\r\n  -ms-align-items: center;\r\n}\r\n.display-flex-center {\r\n  justify-content: center;\r\n  -moz-justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -o-justify-content: center;\r\n  -ms-justify-content: center;\r\n  align-items: center;\r\n  -moz-align-items: center;\r\n  -webkit-align-items: center;\r\n  -o-align-items: center;\r\n  -ms-align-items: center;\r\n}\r\n.position-center {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  -moz-transform: translate(-50%, -50%);\r\n  -webkit-transform: translate(-50%, -50%);\r\n  -o-transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n}\r\n.signup {\r\n  margin-bottom: 150px;\r\n}\r\n.signup-content {\r\n  padding: 75px 0;\r\n}\r\n.signup-form,\r\n.signup-image,\r\n.signin-form,\r\n.signin-image {\r\n  width: 50%;\r\n  overflow: hidden;\r\n}\r\n.signup-image {\r\n  margin: 0 55px;\r\n}\r\n.form-title {\r\n  margin-bottom: 33px;\r\n}\r\n.signup-image {\r\n  margin-top: 45px;\r\n}\r\nfigure {\r\n  margin-bottom: 50px;\r\n  text-align: center;\r\n}\r\n.form-submit {\r\n  display: inline-block;\r\n  background: #6dabe4;\r\n  color: #fff;\r\n  border-bottom: none;\r\n  width: auto;\r\n  padding: 15px 39px;\r\n  border-radius: 5px;\r\n  -moz-border-radius: 5px;\r\n  -webkit-border-radius: 5px;\r\n  -o-border-radius: 5px;\r\n  -ms-border-radius: 5px;\r\n  margin-top: 25px;\r\n  cursor: pointer;\r\n}\r\n.form-submit:hover {\r\n  background: #4292dc;\r\n}\r\n#signin {\r\n  margin-top: 16px;\r\n}\r\n.signup-image-link {\r\n  font-size: 14px;\r\n  color: #222;\r\n  display: block;\r\n  text-align: center;\r\n}\r\n.term-service {\r\n  font-size: 13px;\r\n  color: #222;\r\n}\r\n.signup-form {\r\n  margin-left: 75px;\r\n  margin-right: 75px;\r\n  padding-left: 34px;\r\n}\r\n.register-form {\r\n  width: 100%;\r\n}\r\n.form-group {\r\n  position: relative;\r\n  margin-bottom: 25px;\r\n  overflow: hidden;\r\n}\r\n.form-group:last-child {\r\n  margin-bottom: 0px;\r\n}\r\ninput {\r\n  width: 100%;\r\n  display: block;\r\n  border: none;\r\n  border-bottom: 1px solid #999;\r\n  padding: 6px 30px;\r\n  font-family: Poppins;\r\n  box-sizing: border-box;\r\n}\r\ninput::-webkit-input-placeholder {\r\n  color: #999;\r\n}\r\ninput::-moz-placeholder {\r\n  color: #999;\r\n}\r\ninput:-ms-input-placeholder {\r\n  color: #999;\r\n}\r\ninput:-moz-placeholder {\r\n  color: #999;\r\n}\r\ninput:focus {\r\n  border-bottom: 1px solid #222;\r\n}\r\ninput:focus::-webkit-input-placeholder {\r\n  color: #222;\r\n}\r\ninput:focus::-moz-placeholder {\r\n  color: #222;\r\n}\r\ninput:focus:-ms-input-placeholder {\r\n  color: #222;\r\n}\r\ninput:focus:-moz-placeholder {\r\n  color: #222;\r\n}\r\ninput[type=checkbox]:not(old) {\r\n  width: 2em;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 1em;\r\n  display: none;\r\n}\r\ninput[type=checkbox]:not(old)+label {\r\n  display: inline-block;\r\n  line-height: 1.5em;\r\n  margin-top: 6px;\r\n}\r\ninput[type=checkbox]:not(old)+label>span {\r\n  display: inline-block;\r\n  width: 13px;\r\n  height: 13px;\r\n  margin-right: 15px;\r\n  margin-bottom: 3px;\r\n  border: 1px solid #999;\r\n  border-radius: 2px;\r\n  -moz-border-radius: 2px;\r\n  -webkit-border-radius: 2px;\r\n  -o-border-radius: 2px;\r\n  -ms-border-radius: 2px;\r\n  background: white;\r\n  background-image: linear-gradient(white, white);\r\n  vertical-align: bottom;\r\n}\r\ninput[type=checkbox]:not(old):checked+label>span {\r\n  background-image: linear-gradient(white, white);\r\n}\r\ninput[type=checkbox]:not(old):checked+label>span:before {\r\n  content: '\\f26b';\r\n  display: block;\r\n  color: #222;\r\n  font-size: 11px;\r\n  line-height: 1.2;\r\n  text-align: center;\r\n  font-family: 'Material-Design-Iconic-Font';\r\n  font-weight: bold;\r\n}\r\n.agree-term {\r\n  display: inline-block;\r\n  width: auto;\r\n}\r\nlabel {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  -moz-transform: translateY(-50%);\r\n  -webkit-transform: translateY(-50%);\r\n  -o-transform: translateY(-50%);\r\n  -ms-transform: translateY(-50%);\r\n  color: #222;\r\n}\r\n.label-has-error {\r\n  top: 22%;\r\n}\r\nlabel.error {\r\n  position: relative;\r\n  background-position-y: 3px;\r\n  padding-left: 20px;\r\n  display: block;\r\n  margin-top: 20px;\r\n}\r\nlabel.valid {\r\n  display: block;\r\n  position: absolute;\r\n  right: 0;\r\n  left: auto;\r\n  margin-top: -6px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: transparent;\r\n}\r\nlabel.valid:after {\r\n  font-family: 'Material-Design-Iconic-Font';\r\n  content: '\\f269';\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  /* right: 0; */\r\n  font-size: 16px;\r\n  color: green;\r\n}\r\n.label-agree-term {\r\n  position: relative;\r\n  top: 0%;\r\n  transform: translateY(0);\r\n  -moz-transform: translateY(0);\r\n  -webkit-transform: translateY(0);\r\n  -o-transform: translateY(0);\r\n  -ms-transform: translateY(0);\r\n}\r\n.material-icons-name {\r\n  font-size: 18px;\r\n}\r\n.signin-content {\r\n  padding-top: 67px;\r\n  padding-bottom: 87px;\r\n}\r\n.social-login {\r\n  align-items: center;\r\n  -moz-align-items: center;\r\n  -webkit-align-items: center;\r\n  -o-align-items: center;\r\n  -ms-align-items: center;\r\n  margin-top: 80px;\r\n}\r\n.social-label {\r\n  display: inline-block;\r\n  margin-right: 15px;\r\n}\r\n.socials li {\r\n  padding: 5px;\r\n}\r\n.socials li:last-child {\r\n  margin-right: 0px;\r\n}\r\n.socials li a {\r\n  text-decoration: none;\r\n}\r\n.socials li a i {\r\n  width: 30px;\r\n  height: 30px;\r\n  color: #fff;\r\n  font-size: 14px;\r\n  border-radius: 5px;\r\n  -moz-border-radius: 5px;\r\n  -webkit-border-radius: 5px;\r\n  -o-border-radius: 5px;\r\n  -ms-border-radius: 5px;\r\n  transform: translateZ(0);\r\n  -moz-transform: translateZ(0);\r\n  -webkit-transform: translateZ(0);\r\n  -o-transform: translateZ(0);\r\n  -ms-transform: translateZ(0);\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n  transition-timing-function: ease-out;\r\n}\r\n.socials li:hover a i {\r\n  transform: scale(1.3) translateZ(0);\r\n}\r\n.zmdi-facebook {\r\n  background: #3b5998;\r\n}\r\n.zmdi-twitter {\r\n  background: #1da0f2;\r\n}\r\n.zmdi-google {\r\n  background: #e72734;\r\n}\r\n.signin-form {\r\n  margin-right: 90px;\r\n  margin-left: 80px;\r\n}\r\n.signin-image {\r\n  margin-left: 110px;\r\n  margin-right: 20px;\r\n  margin-top: 10px;\r\n}\r\n@media screen and (max-width: 1200px) {\r\n  .container {\r\n    width: calc(100% - 30px);\r\n    max-width: 100%;\r\n  }\r\n}\r\n@media screen and (min-width: 1024px) {\r\n  .container {\r\n    max-width: 1200px;\r\n  }\r\n}\r\n@media screen and (max-width: 768px) {\r\n\r\n  .signup-content,\r\n  .signin-content {\r\n    flex-direction: column;\r\n    -moz-flex-direction: column;\r\n    -o-flex-direction: column;\r\n    justify-content: center;\r\n    -moz-justify-content: center;\r\n    -webkit-justify-content: center;\r\n    -o-justify-content: center;\r\n    -ms-justify-content: center;\r\n  }\r\n\r\n  .signup-form {\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n    padding-left: 0px;\r\n    /* box-sizing: border-box; */\r\n    padding: 0 30px;\r\n  }\r\n\r\n  .signin-image {\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n    margin-top: 50px;\r\n    order: 2;\r\n    -moz-order: 2;\r\n    -webkit-order: 2;\r\n    -o-order: 2;\r\n    -ms-order: 2;\r\n  }\r\n\r\n  .signup-form,\r\n  .signup-image,\r\n  .signin-form,\r\n  .signin-image {\r\n    width: auto;\r\n  }\r\n\r\n  .social-login {\r\n    justify-content: center;\r\n    -moz-justify-content: center;\r\n    -webkit-justify-content: center;\r\n    -o-justify-content: center;\r\n    -ms-justify-content: center;\r\n  }\r\n\r\n  .form-button {\r\n    text-align: center;\r\n  }\r\n\r\n  .signin-form {\r\n    order: 1;\r\n    -moz-order: 1;\r\n    -webkit-order: 1;\r\n    -o-order: 1;\r\n    -ms-order: 1;\r\n    margin-right: 0px;\r\n    margin-left: 0px;\r\n    padding: 0 30px;\r\n  }\r\n\r\n  .form-title {\r\n    text-align: center;\r\n  }\r\n}\r\n@media screen and (max-width: 400px) {\r\n  .social-login {\r\n    flex-direction: column;\r\n    -moz-flex-direction: column;\r\n    -o-flex-direction: column;\r\n  }\r\n\r\n  .social-label {\r\n    margin-right: 0px;\r\n    margin-bottom: 10px;\r\n  }\r\n}\r\n/*# sourceMappingURL=style.css.map */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBCQUEwQjtBQUMxQjs7Ozs7OztFQU9FLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7QUFFQSw0QkFBNEI7QUFDNUI7O0VBRUUscUJBQXFCO0VBQ3JCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQ0FBa0U7RUFDbEUscUJBQXFCO0VBQ3JCLHNVQUE0ZDtFQUM1ZCxlQUFlO0FBQ2pCO0FBRUEsOEJBQThCO0FBQzlCO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsMENBQXdFO0VBQ3hFLHFCQUFxQjtFQUNyQixpWEFBdWdCO0VBQ3ZnQixlQUFlO0FBQ2pCO0FBRUEsNEJBQTRCO0FBQzVCO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsd0NBQXNFO0VBQ3RFLHFCQUFxQjtFQUNyQiw4VkFBb2Y7RUFDcGYsZUFBZTtBQUNqQjtBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVDQUFxRTtFQUNyRSxxQkFBcUI7RUFDckIsdVZBQTZlO0VBQzdlLGVBQWU7QUFDakI7QUFFQSx3QkFBd0I7QUFDeEI7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQ0FBa0U7RUFDbEUscUJBQXFCO0VBQ3JCLHdVQUE4ZDtFQUM5ZCxlQUFlO0FBQ2pCO0FBRUEsOEJBQThCO0FBQzlCO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsMENBQXdFO0VBQ3hFLHFCQUFxQjtFQUNyQixtWEFBeWdCO0VBQ3pnQixlQUFlO0FBQ2pCO0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0Usc0JB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QUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtJQUN4QixlQUFlO0VBQ2pCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFFQTs7RUFFRTs7SUFFRSxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBRTNCLHlCQUF5QjtJQUV6Qix1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQiwwQkFBMEI7SUFDMUIsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixRQUFRO0lBQ1IsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtFQUNkOztFQUVBOzs7O0lBSUUsV0FBVztFQUNiOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0IsMEJBQTBCO0lBQzFCLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFFBQVE7SUFDUixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUUzQix5QkFBeUI7RUFFM0I7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCO0FBQ0Y7QUFFQSxvQ0FBb0MiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAZXh0ZW5kIGRpc3BsYXktZmxleDsgKi9cclxuZGlzcGxheS1mbGV4LFxyXG4uZGlzcGxheS1mbGV4LFxyXG4uZGlzcGxheS1mbGV4LWNlbnRlcixcclxuLnNpZ251cC1jb250ZW50LFxyXG4uc2lnbmluLWNvbnRlbnQsXHJcbi5zb2NpYWwtbG9naW4sXHJcbi5zb2NpYWxzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxufVxyXG5cclxuLyogQGV4dGVuZCBsaXN0LXR5cGUtdWxsaTsgKi9cclxubGlzdC10eXBlLXVsbGksXHJcbi5zb2NpYWxzIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi8qIHBvcHBpbnMtMzAwIC0gbGF0aW4gKi9cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBzcmM6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tMzAwLmVvdFwiKTtcclxuICAvKiBJRTkgQ29tcGF0IE1vZGVzICovXHJcbiAgc3JjOiBsb2NhbChcIlBvcHBpbnMgTGlnaHRcIiksIGxvY2FsKFwiUG9wcGlucy1MaWdodFwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi0zMDAuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi0zMDAud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tMzAwLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi0zMDAudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTMwMC5zdmcjUG9wcGluc1wiKSBmb3JtYXQoXCJzdmdcIik7XHJcbiAgLyogTGVnYWN5IGlPUyAqL1xyXG59XHJcblxyXG4vKiBwb3BwaW5zLTMwMGl0YWxpYyAtIGxhdGluICovXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTMwMGl0YWxpYy5lb3RcIik7XHJcbiAgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xyXG4gIHNyYzogbG9jYWwoXCJQb3BwaW5zIExpZ2h0IEl0YWxpY1wiKSwgbG9jYWwoXCJQb3BwaW5zLUxpZ2h0SXRhbGljXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTMwMGl0YWxpYy5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTMwMGl0YWxpYy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi0zMDBpdGFsaWMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTMwMGl0YWxpYy50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tMzAwaXRhbGljLnN2ZyNQb3BwaW5zXCIpIGZvcm1hdChcInN2Z1wiKTtcclxuICAvKiBMZWdhY3kgaU9TICovXHJcbn1cclxuXHJcbi8qIHBvcHBpbnMtcmVndWxhciAtIGxhdGluICovXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLXJlZ3VsYXIuZW90XCIpO1xyXG4gIC8qIElFOSBDb21wYXQgTW9kZXMgKi9cclxuICBzcmM6IGxvY2FsKFwiUG9wcGlucyBSZWd1bGFyXCIpLCBsb2NhbChcIlBvcHBpbnMtUmVndWxhclwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi1yZWd1bGFyLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tcmVndWxhci53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi1yZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi1yZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi1yZWd1bGFyLnN2ZyNQb3BwaW5zXCIpIGZvcm1hdChcInN2Z1wiKTtcclxuICAvKiBMZWdhY3kgaU9TICovXHJcbn1cclxuXHJcbi8qIHBvcHBpbnMtaXRhbGljIC0gbGF0aW4gKi9cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBzcmM6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4taXRhbGljLmVvdFwiKTtcclxuICAvKiBJRTkgQ29tcGF0IE1vZGVzICovXHJcbiAgc3JjOiBsb2NhbChcIlBvcHBpbnMgSXRhbGljXCIpLCBsb2NhbChcIlBvcHBpbnMtSXRhbGljXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLWl0YWxpYy5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLWl0YWxpYy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi1pdGFsaWMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLWl0YWxpYy50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4taXRhbGljLnN2ZyNQb3BwaW5zXCIpIGZvcm1hdChcInN2Z1wiKTtcclxuICAvKiBMZWdhY3kgaU9TICovXHJcbn1cclxuXHJcbi8qIHBvcHBpbnMtNTAwIC0gbGF0aW4gKi9cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBzcmM6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tNTAwLmVvdFwiKTtcclxuICAvKiBJRTkgQ29tcGF0IE1vZGVzICovXHJcbiAgc3JjOiBsb2NhbChcIlBvcHBpbnMgTWVkaXVtXCIpLCBsb2NhbChcIlBvcHBpbnMtTWVkaXVtXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTUwMC5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTUwMC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi01MDAud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTUwMC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tNTAwLnN2ZyNQb3BwaW5zXCIpIGZvcm1hdChcInN2Z1wiKTtcclxuICAvKiBMZWdhY3kgaU9TICovXHJcbn1cclxuXHJcbi8qIHBvcHBpbnMtNTAwaXRhbGljIC0gbGF0aW4gKi9cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBzcmM6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tNTAwaXRhbGljLmVvdFwiKTtcclxuICAvKiBJRTkgQ29tcGF0IE1vZGVzICovXHJcbiAgc3JjOiBsb2NhbChcIlBvcHBpbnMgTWVkaXVtIEl0YWxpY1wiKSwgbG9jYWwoXCJQb3BwaW5zLU1lZGl1bUl0YWxpY1wiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi01MDBpdGFsaWMuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi01MDBpdGFsaWMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tNTAwaXRhbGljLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi01MDBpdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTUwMGl0YWxpYy5zdmcjUG9wcGluc1wiKSBmb3JtYXQoXCJzdmdcIik7XHJcbiAgLyogTGVnYWN5IGlPUyAqL1xyXG59XHJcblxyXG4vKiBwb3BwaW5zLTYwMCAtIGxhdGluICovXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTYwMC5lb3RcIik7XHJcbiAgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xyXG4gIHNyYzogbG9jYWwoXCJQb3BwaW5zIFNlbWlCb2xkXCIpLCBsb2NhbChcIlBvcHBpbnMtU2VtaUJvbGRcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tNjAwLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tNjAwLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTYwMC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tNjAwLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi02MDAuc3ZnI1BvcHBpbnNcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG4gIC8qIExlZ2FjeSBpT1MgKi9cclxufVxyXG5cclxuLyogcG9wcGlucy03MDAgLSBsYXRpbiAqL1xyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi03MDAuZW90XCIpO1xyXG4gIC8qIElFOSBDb21wYXQgTW9kZXMgKi9cclxuICBzcmM6IGxvY2FsKFwiUG9wcGlucyBCb2xkXCIpLCBsb2NhbChcIlBvcHBpbnMtQm9sZFwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi03MDAuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi03MDAud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tNzAwLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi03MDAudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTcwMC5zdmcjUG9wcGluc1wiKSBmb3JtYXQoXCJzdmdcIik7XHJcbiAgLyogTGVnYWN5IGlPUyAqL1xyXG59XHJcblxyXG4vKiBwb3BwaW5zLTcwMGl0YWxpYyAtIGxhdGluICovXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTcwMGl0YWxpYy5lb3RcIik7XHJcbiAgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xyXG4gIHNyYzogbG9jYWwoXCJQb3BwaW5zIEJvbGQgSXRhbGljXCIpLCBsb2NhbChcIlBvcHBpbnMtQm9sZEl0YWxpY1wiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi03MDBpdGFsaWMuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi03MDBpdGFsaWMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tNzAwaXRhbGljLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi03MDBpdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTcwMGl0YWxpYy5zdmcjUG9wcGluc1wiKSBmb3JtYXQoXCJzdmdcIik7XHJcbiAgLyogTGVnYWN5IGlPUyAqL1xyXG59XHJcblxyXG4vKiBwb3BwaW5zLTgwMCAtIGxhdGluICovXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTgwMC5lb3RcIik7XHJcbiAgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xyXG4gIHNyYzogbG9jYWwoXCJQb3BwaW5zIEV4dHJhQm9sZFwiKSwgbG9jYWwoXCJQb3BwaW5zLUV4dHJhQm9sZFwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi04MDAuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi04MDAud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tODAwLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi04MDAudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTgwMC5zdmcjUG9wcGluc1wiKSBmb3JtYXQoXCJzdmdcIik7XHJcbiAgLyogTGVnYWN5IGlPUyAqL1xyXG59XHJcblxyXG4vKiBwb3BwaW5zLTgwMGl0YWxpYyAtIGxhdGluICovXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTgwMGl0YWxpYy5lb3RcIik7XHJcbiAgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xyXG4gIHNyYzogbG9jYWwoXCJQb3BwaW5zIEV4dHJhQm9sZCBJdGFsaWNcIiksIGxvY2FsKFwiUG9wcGlucy1FeHRyYUJvbGRJdGFsaWNcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tODAwaXRhbGljLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tODAwaXRhbGljLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTgwMGl0YWxpYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tODAwaXRhbGljLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi04MDBpdGFsaWMuc3ZnI1BvcHBpbnNcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG4gIC8qIExlZ2FjeSBpT1MgKi9cclxufVxyXG5cclxuLyogcG9wcGlucy05MDAgLSBsYXRpbiAqL1xyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi05MDAuZW90XCIpO1xyXG4gIC8qIElFOSBDb21wYXQgTW9kZXMgKi9cclxuICBzcmM6IGxvY2FsKFwiUG9wcGlucyBCbGFja1wiKSwgbG9jYWwoXCJQb3BwaW5zLUJsYWNrXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTkwMC5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTkwMC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi05MDAud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTkwMC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tOTAwLnN2ZyNQb3BwaW5zXCIpIGZvcm1hdChcInN2Z1wiKTtcclxuICAvKiBMZWdhY3kgaU9TICovXHJcbn1cclxuXHJcbmE6Zm9jdXMsXHJcbmE6YWN0aXZlIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZSAwcztcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlIDBzO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UgMHM7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UgMHM7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlIDBzO1xyXG59XHJcblxyXG5pbnB1dCxcclxuc2VsZWN0LFxyXG50ZXh0YXJlYSB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBhcHBlYXJhbmNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgLW8tYXBwZWFyYW5jZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAtbXMtYXBwZWFyYW5jZTogdW5zZXQgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbmlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICBhcHBlYXJhbmNlOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgLW8tYXBwZWFyYW5jZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIC1tcy1hcHBlYXJhbmNlOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyxcclxuc2VsZWN0OmZvY3VzLFxyXG50ZXh0YXJlYTpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgLW1vei1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgLW8tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIC1tcy1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcclxuICBhcHBlYXJhbmNlOiBjaGVja2JveCAhaW1wb3J0YW50O1xyXG4gIC1tb3otYXBwZWFyYW5jZTogY2hlY2tib3ggIWltcG9ydGFudDtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGNoZWNrYm94ICFpbXBvcnRhbnQ7XHJcbiAgLW8tYXBwZWFyYW5jZTogY2hlY2tib3ggIWltcG9ydGFudDtcclxuICAtbXMtYXBwZWFyYW5jZTogY2hlY2tib3ggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1yYWRpb10ge1xyXG4gIGFwcGVhcmFuY2U6IHJhZGlvICFpbXBvcnRhbnQ7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiByYWRpbyAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogcmFkaW8gIWltcG9ydGFudDtcclxuICAtby1hcHBlYXJhbmNlOiByYWRpbyAhaW1wb3J0YW50O1xyXG4gIC1tcy1hcHBlYXJhbmNlOiByYWRpbyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbmZpZ3VyZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5wIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGNvbG9yOiAjNzc3O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjY7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICMyMjI7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxuICBwYWRkaW5nOiAxNTBweCAwO1xyXG59XHJcblxyXG4uY2xlYXIge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuODtcclxuICBjb2xvcjogIzIyMjtcclxuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiA5MDBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IDBweCAxNXB4IDE2LjgzcHggMC4xN3B4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMTVweCAxNi44M3B4IDAuMTdweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDE1cHggMTYuODNweCAwLjE3cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAtby1ib3gtc2hhZG93OiAwcHggMTVweCAxNi44M3B4IDAuMTdweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIC1tcy1ib3gtc2hhZG93OiAwcHggMTVweCAxNi44M3B4IDAuMTdweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAtby1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIC1tcy1ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uZGlzcGxheS1mbGV4IHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgLW8tanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtbW96LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC1vLWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kaXNwbGF5LWZsZXgtY2VudGVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtbW96LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLW8tanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLW1zLWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLW1vei1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtby1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucG9zaXRpb24tY2VudGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5zaWdudXAge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1MHB4O1xyXG59XHJcblxyXG4uc2lnbnVwLWNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDc1cHggMDtcclxufVxyXG5cclxuLnNpZ251cC1mb3JtLFxyXG4uc2lnbnVwLWltYWdlLFxyXG4uc2lnbmluLWZvcm0sXHJcbi5zaWduaW4taW1hZ2Uge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnNpZ251cC1pbWFnZSB7XHJcbiAgbWFyZ2luOiAwIDU1cHg7XHJcbn1cclxuXHJcbi5mb3JtLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAzM3B4O1xyXG59XHJcblxyXG4uc2lnbnVwLWltYWdlIHtcclxuICBtYXJnaW4tdG9wOiA0NXB4O1xyXG59XHJcblxyXG5maWd1cmUge1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybS1zdWJtaXQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kOiAjNmRhYmU0O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgcGFkZGluZzogMTVweCAzOXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtby1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZvcm0tc3VibWl0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNDI5MmRjO1xyXG59XHJcblxyXG4jc2lnbmluIHtcclxuICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcblxyXG4uc2lnbnVwLWltYWdlLWxpbmsge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzIyMjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZXJtLXNlcnZpY2Uge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogIzIyMjtcclxufVxyXG5cclxuLnNpZ251cC1mb3JtIHtcclxuICBtYXJnaW4tbGVmdDogNzVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDc1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAzNHB4O1xyXG59XHJcblxyXG4ucmVnaXN0ZXItZm9ybSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cDpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTk7XHJcbiAgcGFkZGluZzogNnB4IDMwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbmlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbmlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyMjI7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzIyMjtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXM6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjMjIyO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjMjIyO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1czotbW96LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzIyMjtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1jaGVja2JveF06bm90KG9sZCkge1xyXG4gIHdpZHRoOiAyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZm9udC1zaXplOiAxZW07XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1jaGVja2JveF06bm90KG9sZCkrbGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBsaW5lLWhlaWdodDogMS41ZW07XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWNoZWNrYm94XTpub3Qob2xkKStsYWJlbD5zcGFuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEzcHg7XHJcbiAgaGVpZ2h0OiAxM3B4O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzk5OTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgLW8tYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIC1tcy1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1saW5lYXItZ3JhZGllbnQod2hpdGUsIHdoaXRlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbXMtbGluZWFyLWdyYWRpZW50KHdoaXRlLCB3aGl0ZSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW8tbGluZWFyLWdyYWRpZW50KHdoaXRlLCB3aGl0ZSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQod2hpdGUsIHdoaXRlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQod2hpdGUsIHdoaXRlKTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWNoZWNrYm94XTpub3Qob2xkKTpjaGVja2VkK2xhYmVsPnNwYW4ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHdoaXRlLCB3aGl0ZSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1zLWxpbmVhci1ncmFkaWVudCh3aGl0ZSwgd2hpdGUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh3aGl0ZSwgd2hpdGUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHdoaXRlLCB3aGl0ZSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHdoaXRlLCB3aGl0ZSk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdOm5vdChvbGQpOmNoZWNrZWQrbGFiZWw+c3BhbjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICdcXGYyNmInO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjMjIyO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogJ01hdGVyaWFsLURlc2lnbi1JY29uaWMtRm9udCc7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5hZ3JlZS10ZXJtIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgY29sb3I6ICMyMjI7XHJcbn1cclxuXHJcbi5sYWJlbC1oYXMtZXJyb3Ige1xyXG4gIHRvcDogMjIlO1xyXG59XHJcblxyXG5sYWJlbC5lcnJvciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb24teTogM3B4O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG5sYWJlbC52YWxpZCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogLTZweDtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmxhYmVsLnZhbGlkOmFmdGVyIHtcclxuICBmb250LWZhbWlseTogJ01hdGVyaWFsLURlc2lnbi1JY29uaWMtRm9udCc7XHJcbiAgY29udGVudDogJ1xcZjI2OSc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvKiByaWdodDogMDsgKi9cclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4ubGFiZWwtYWdyZWUtdGVybSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG59XHJcblxyXG4ubWF0ZXJpYWwtaWNvbnMtbmFtZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uc2lnbmluLWNvbnRlbnQge1xyXG4gIHBhZGRpbmctdG9wOiA2N3B4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA4N3B4O1xyXG59XHJcblxyXG4uc29jaWFsLWxvZ2luIHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC1tb3otYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLW8tYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiA4MHB4O1xyXG59XHJcblxyXG4uc29jaWFsLWxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uc29jaWFscyBsaSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uc29jaWFscyBsaTpsYXN0LWNoaWxkIHtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLnNvY2lhbHMgbGkgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uc29jaWFscyBsaSBhIGkge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIC1vLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtbXMtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XHJcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG59XHJcblxyXG4uc29jaWFscyBsaTpob3ZlciBhIGkge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjMpIHRyYW5zbGF0ZVooMCk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpIHRyYW5zbGF0ZVooMCk7XHJcbn1cclxuXHJcbi56bWRpLWZhY2Vib29rIHtcclxuICBiYWNrZ3JvdW5kOiAjM2I1OTk4O1xyXG59XHJcblxyXG4uem1kaS10d2l0dGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMWRhMGYyO1xyXG59XHJcblxyXG4uem1kaS1nb29nbGUge1xyXG4gIGJhY2tncm91bmQ6ICNlNzI3MzQ7XHJcbn1cclxuXHJcbi5zaWduaW4tZm9ybSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA5MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4MHB4O1xyXG59XHJcblxyXG4uc2lnbmluLWltYWdlIHtcclxuICBtYXJnaW4tbGVmdDogMTEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcblxyXG4gIC5zaWdudXAtY29udGVudCxcclxuICAuc2lnbmluLWNvbnRlbnQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC1vLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtby1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5zaWdudXAtZm9ybSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIC8qIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICovXHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgfVxyXG5cclxuICAuc2lnbmluLWltYWdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBvcmRlcjogMjtcclxuICAgIC1tb3otb3JkZXI6IDI7XHJcbiAgICAtd2Via2l0LW9yZGVyOiAyO1xyXG4gICAgLW8tb3JkZXI6IDI7XHJcbiAgICAtbXMtb3JkZXI6IDI7XHJcbiAgfVxyXG5cclxuICAuc2lnbnVwLWZvcm0sXHJcbiAgLnNpZ251cC1pbWFnZSxcclxuICAuc2lnbmluLWZvcm0sXHJcbiAgLnNpZ25pbi1pbWFnZSB7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcblxyXG4gIC5zb2NpYWwtbG9naW4ge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtbW96LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC1vLWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLW1zLWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tYnV0dG9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5zaWduaW4tZm9ybSB7XHJcbiAgICBvcmRlcjogMTtcclxuICAgIC1tb3otb3JkZXI6IDE7XHJcbiAgICAtd2Via2l0LW9yZGVyOiAxO1xyXG4gICAgLW8tb3JkZXI6IDE7XHJcbiAgICAtbXMtb3JkZXI6IDE7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDMwcHg7XHJcbiAgfVxyXG5cclxuICAuZm9ybS10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gIC5zb2NpYWwtbG9naW4ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC1tb3otZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC1vLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gIC5zb2NpYWwtbGFiZWwge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3R5bGUuY3NzLm1hcCAqL1xyXG4iXX0= */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");



let LoginComponent = class LoginComponent {
    constructor(auth) {
        this.auth = auth;
        this.titleText = "Sign In";
    }
    ngOnInit() {
        this.auth.eventAuthError$.subscribe(data => {
            this.authError = data;
        });
    }
    login(form) {
        this.auth.login(form.value.email, form.value.password);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/auth/registration/registration.component.css":
/*!**************************************************************!*\
  !*** ./src/app/auth/registration/registration.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* @extend display-flex; */\r\ndisplay-flex,\r\n.display-flex,\r\n.display-flex-center,\r\n.signup-content,\r\n.signin-content,\r\n.social-login,\r\n.socials {\r\n  display: flex;\r\n  display: -webkit-flex;\r\n}\r\n/* @extend list-type-ulli; */\r\nlist-type-ulli,\r\n.socials {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n/* poppins-300 - latin */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: normal;\r\n  font-weight: 300;\r\n  src: url('poppins-v5-latin-300.eot');\r\n  /* IE9 Compat Modes */\r\n  src: local(\"Poppins Light\"), local(\"Poppins-Light\"), url('poppins-v5-latin-300.eot?#iefix') format(\"embedded-opentype\"), url('poppins-v5-latin-300.woff2') format(\"woff2\"), url('poppins-v5-latin-300.woff') format(\"woff\"), url('poppins-v5-latin-300.ttf') format(\"truetype\"), url('poppins-v5-latin-300.svg#Poppins') format(\"svg\");\r\n  /* Legacy iOS */\r\n}\r\n/* poppins-300italic - latin */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: italic;\r\n  font-weight: 300;\r\n  src: url('poppins-v5-latin-300italic.eot');\r\n  /* IE9 Compat Modes */\r\n  src: local(\"Poppins Light Italic\"), local(\"Poppins-LightItalic\"), url('poppins-v5-latin-300italic.eot?#iefix') format(\"embedded-opentype\"), url('poppins-v5-latin-300italic.woff2') format(\"woff2\"), url('poppins-v5-latin-300italic.woff') format(\"woff\"), url('poppins-v5-latin-300italic.ttf') format(\"truetype\"), url('poppins-v5-latin-300italic.svg#Poppins') format(\"svg\");\r\n  /* Legacy iOS */\r\n}\r\n/* poppins-regular - latin */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url('poppins-v5-latin-regular.eot');\r\n  /* IE9 Compat Modes */\r\n  src: local(\"Poppins Regular\"), local(\"Poppins-Regular\"), url('poppins-v5-latin-regular.eot?#iefix') format(\"embedded-opentype\"), url('poppins-v5-latin-regular.woff2') format(\"woff2\"), url('poppins-v5-latin-regular.woff') format(\"woff\"), url('poppins-v5-latin-regular.ttf') format(\"truetype\"), url('poppins-v5-latin-regular.svg#Poppins') format(\"svg\");\r\n  /* Legacy iOS */\r\n}\r\n/* poppins-italic - latin */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: italic;\r\n  font-weight: 400;\r\n  src: url('poppins-v5-latin-italic.eot');\r\n  /* IE9 Compat Modes */\r\n  src: local(\"Poppins Italic\"), local(\"Poppins-Italic\"), url('poppins-v5-latin-italic.eot?#iefix') format(\"embedded-opentype\"), url('poppins-v5-latin-italic.woff2') format(\"woff2\"), url('poppins-v5-latin-italic.woff') format(\"woff\"), url('poppins-v5-latin-italic.ttf') format(\"truetype\"), url('poppins-v5-latin-italic.svg#Poppins') format(\"svg\");\r\n  /* Legacy iOS */\r\n}\r\n/* poppins-500 - latin */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  src: url('poppins-v5-latin-500.eot');\r\n  /* IE9 Compat Modes */\r\n  src: local(\"Poppins Medium\"), local(\"Poppins-Medium\"), url('poppins-v5-latin-500.eot?#iefix') format(\"embedded-opentype\"), url('poppins-v5-latin-500.woff2') format(\"woff2\"), url('poppins-v5-latin-500.woff') format(\"woff\"), url('poppins-v5-latin-500.ttf') format(\"truetype\"), url('poppins-v5-latin-500.svg#Poppins') format(\"svg\");\r\n  /* Legacy iOS */\r\n}\r\n/* poppins-500italic - latin */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: italic;\r\n  font-weight: 500;\r\n  src: url('poppins-v5-latin-500italic.eot');\r\n  /* IE9 Compat Modes */\r\n  src: local(\"Poppins Medium Italic\"), local(\"Poppins-MediumItalic\"), url('poppins-v5-latin-500italic.eot?#iefix') format(\"embedded-opentype\"), url('poppins-v5-latin-500italic.woff2') format(\"woff2\"), url('poppins-v5-latin-500italic.woff') format(\"woff\"), url('poppins-v5-latin-500italic.ttf') format(\"truetype\"), url('poppins-v5-latin-500italic.svg#Poppins') format(\"svg\");\r\n  /* Legacy iOS */\r\n}\r\n/* poppins-600 - latin */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: normal;\r\n  font-weight: 600;\r\n  src: url('poppins-v5-latin-600.eot');\r\n  /* IE9 Compat Modes */\r\n  src: local(\"Poppins SemiBold\"), local(\"Poppins-SemiBold\"), url('poppins-v5-latin-600.eot?#iefix') format(\"embedded-opentype\"), url('poppins-v5-latin-600.woff2') format(\"woff2\"), url('poppins-v5-latin-600.woff') format(\"woff\"), url('poppins-v5-latin-600.ttf') format(\"truetype\"), url('poppins-v5-latin-600.svg#Poppins') format(\"svg\");\r\n  /* Legacy iOS */\r\n}\r\n/* poppins-700 - latin */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: url('poppins-v5-latin-700.eot');\r\n  /* IE9 Compat Modes */\r\n  src: local(\"Poppins Bold\"), local(\"Poppins-Bold\"), url('poppins-v5-latin-700.eot?#iefix') format(\"embedded-opentype\"), url('poppins-v5-latin-700.woff2') format(\"woff2\"), url('poppins-v5-latin-700.woff') format(\"woff\"), url('poppins-v5-latin-700.ttf') format(\"truetype\"), url('poppins-v5-latin-700.svg#Poppins') format(\"svg\");\r\n  /* Legacy iOS */\r\n}\r\n/* poppins-700italic - latin */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: italic;\r\n  font-weight: 700;\r\n  src: url('poppins-v5-latin-700italic.eot');\r\n  /* IE9 Compat Modes */\r\n  src: local(\"Poppins Bold Italic\"), local(\"Poppins-BoldItalic\"), url('poppins-v5-latin-700italic.eot?#iefix') format(\"embedded-opentype\"), url('poppins-v5-latin-700italic.woff2') format(\"woff2\"), url('poppins-v5-latin-700italic.woff') format(\"woff\"), url('poppins-v5-latin-700italic.ttf') format(\"truetype\"), url('poppins-v5-latin-700italic.svg#Poppins') format(\"svg\");\r\n  /* Legacy iOS */\r\n}\r\n/* poppins-800 - latin */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: normal;\r\n  font-weight: 800;\r\n  src: url('poppins-v5-latin-800.eot');\r\n  /* IE9 Compat Modes */\r\n  src: local(\"Poppins ExtraBold\"), local(\"Poppins-ExtraBold\"), url('poppins-v5-latin-800.eot?#iefix') format(\"embedded-opentype\"), url('poppins-v5-latin-800.woff2') format(\"woff2\"), url('poppins-v5-latin-800.woff') format(\"woff\"), url('poppins-v5-latin-800.ttf') format(\"truetype\"), url('poppins-v5-latin-800.svg#Poppins') format(\"svg\");\r\n  /* Legacy iOS */\r\n}\r\n/* poppins-800italic - latin */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: italic;\r\n  font-weight: 800;\r\n  src: url('poppins-v5-latin-800italic.eot');\r\n  /* IE9 Compat Modes */\r\n  src: local(\"Poppins ExtraBold Italic\"), local(\"Poppins-ExtraBoldItalic\"), url('poppins-v5-latin-800italic.eot?#iefix') format(\"embedded-opentype\"), url('poppins-v5-latin-800italic.woff2') format(\"woff2\"), url('poppins-v5-latin-800italic.woff') format(\"woff\"), url('poppins-v5-latin-800italic.ttf') format(\"truetype\"), url('poppins-v5-latin-800italic.svg#Poppins') format(\"svg\");\r\n  /* Legacy iOS */\r\n}\r\n/* poppins-900 - latin */\r\n@font-face {\r\n  font-family: 'Poppins';\r\n  font-style: normal;\r\n  font-weight: 900;\r\n  src: url('poppins-v5-latin-900.eot');\r\n  /* IE9 Compat Modes */\r\n  src: local(\"Poppins Black\"), local(\"Poppins-Black\"), url('poppins-v5-latin-900.eot?#iefix') format(\"embedded-opentype\"), url('poppins-v5-latin-900.woff2') format(\"woff2\"), url('poppins-v5-latin-900.woff') format(\"woff\"), url('poppins-v5-latin-900.ttf') format(\"truetype\"), url('poppins-v5-latin-900.svg#Poppins') format(\"svg\");\r\n  /* Legacy iOS */\r\n}\r\na:focus,\r\na:active {\r\n  text-decoration: none;\r\n  outline: none;\r\n  transition: all 300ms ease 0s;\r\n  -moz-transition: all 300ms ease 0s;\r\n  -webkit-transition: all 300ms ease 0s;\r\n  -o-transition: all 300ms ease 0s;\r\n  -ms-transition: all 300ms ease 0s;\r\n}\r\ninput,\r\nselect,\r\ntextarea {\r\n  outline: none;\r\n  appearance: unset !important;\r\n  -moz-appearance: unset !important;\r\n  -webkit-appearance: unset !important;\r\n  -o-appearance: unset !important;\r\n  -ms-appearance: unset !important;\r\n}\r\ninput::-webkit-outer-spin-button,\r\ninput::-webkit-inner-spin-button {\r\n  appearance: none !important;\r\n  -moz-appearance: none !important;\r\n  -webkit-appearance: none !important;\r\n  -o-appearance: none !important;\r\n  -ms-appearance: none !important;\r\n  margin: 0;\r\n}\r\ninput:focus,\r\nselect:focus,\r\ntextarea:focus {\r\n  outline: none;\r\n  box-shadow: none !important;\r\n  -moz-box-shadow: none !important;\r\n  -webkit-box-shadow: none !important;\r\n  -o-box-shadow: none !important;\r\n  -ms-box-shadow: none !important;\r\n}\r\ninput[type=checkbox] {\r\n  appearance: checkbox !important;\r\n  -moz-appearance: checkbox !important;\r\n  -webkit-appearance: checkbox !important;\r\n  -o-appearance: checkbox !important;\r\n  -ms-appearance: checkbox !important;\r\n}\r\ninput[type=radio] {\r\n  appearance: radio !important;\r\n  -moz-appearance: radio !important;\r\n  -webkit-appearance: radio !important;\r\n  -o-appearance: radio !important;\r\n  -ms-appearance: radio !important;\r\n}\r\nimg {\r\n  max-width: 100%;\r\n  height: auto;\r\n}\r\nfigure {\r\n  margin: 0;\r\n}\r\np {\r\n  margin-bottom: 0px;\r\n  font-size: 15px;\r\n  color: #777;\r\n}\r\nh2 {\r\n  line-height: 1.66;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-weight: bold;\r\n  color: #222;\r\n  font-family: Poppins;\r\n  font-size: 36px;\r\n}\r\n.main {\r\n  background: #f8f8f8;\r\n  padding: 150px 0;\r\n}\r\n.clear {\r\n  clear: both;\r\n}\r\nbody {\r\n  font-size: 13px;\r\n  line-height: 1.8;\r\n  color: #222;\r\n  background: #f8f8f8;\r\n  font-weight: 400;\r\n  font-family: Poppins;\r\n}\r\n.container {\r\n  width: 900px;\r\n  background: #fff;\r\n  margin: 0 auto;\r\n  box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);\r\n  -moz-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);\r\n  -webkit-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);\r\n  -o-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);\r\n  -ms-box-shadow: 0px 15px 16.83px 0.17px rgba(0, 0, 0, 0.05);\r\n  border-radius: 20px;\r\n  -moz-border-radius: 20px;\r\n  -webkit-border-radius: 20px;\r\n  -o-border-radius: 20px;\r\n  -ms-border-radius: 20px;\r\n}\r\n.display-flex {\r\n  justify-content: space-between;\r\n  -moz-justify-content: space-between;\r\n  -webkit-justify-content: space-between;\r\n  -o-justify-content: space-between;\r\n  -ms-justify-content: space-between;\r\n  align-items: center;\r\n  -moz-align-items: center;\r\n  -webkit-align-items: center;\r\n  -o-align-items: center;\r\n  -ms-align-items: center;\r\n}\r\n.display-flex-center {\r\n  justify-content: center;\r\n  -moz-justify-content: center;\r\n  -webkit-justify-content: center;\r\n  -o-justify-content: center;\r\n  -ms-justify-content: center;\r\n  align-items: center;\r\n  -moz-align-items: center;\r\n  -webkit-align-items: center;\r\n  -o-align-items: center;\r\n  -ms-align-items: center;\r\n}\r\n.position-center {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  -moz-transform: translate(-50%, -50%);\r\n  -webkit-transform: translate(-50%, -50%);\r\n  -o-transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n}\r\n.signup {\r\n  margin-bottom: 150px;\r\n}\r\n.signup-content {\r\n  padding: 75px 0;\r\n}\r\n.signup-form,\r\n.signup-image,\r\n.signin-form,\r\n.signin-image {\r\n  width: 50%;\r\n  overflow: hidden;\r\n}\r\n.signup-image {\r\n  margin: 0 55px;\r\n}\r\n.form-title {\r\n  margin-bottom: 33px;\r\n}\r\n.signup-image {\r\n  margin-top: 45px;\r\n}\r\nfigure {\r\n  margin-bottom: 50px;\r\n  text-align: center;\r\n}\r\n.form-submit {\r\n  display: inline-block;\r\n  background: #6dabe4;\r\n  color: #fff;\r\n  border-bottom: none;\r\n  width: auto;\r\n  padding: 15px 39px;\r\n  border-radius: 5px;\r\n  -moz-border-radius: 5px;\r\n  -webkit-border-radius: 5px;\r\n  -o-border-radius: 5px;\r\n  -ms-border-radius: 5px;\r\n  margin-top: 25px;\r\n  cursor: pointer;\r\n}\r\n.form-submit:hover {\r\n  background: #4292dc;\r\n}\r\n#signin {\r\n  margin-top: 16px;\r\n}\r\n.signup-image-link {\r\n  font-size: 14px;\r\n  color: #222;\r\n  display: block;\r\n  text-align: center;\r\n}\r\n.term-service {\r\n  font-size: 13px;\r\n  color: #222;\r\n}\r\n.signup-form {\r\n  margin-left: 75px;\r\n  margin-right: 75px;\r\n  padding-left: 34px;\r\n}\r\n.register-form {\r\n  width: 100%;\r\n}\r\n.form-group {\r\n  position: relative;\r\n  margin-bottom: 25px;\r\n  overflow: hidden;\r\n}\r\n.form-group:last-child {\r\n  margin-bottom: 0px;\r\n}\r\ninput {\r\n  width: 100%;\r\n  display: block;\r\n  border: none;\r\n  border-bottom: 1px solid #999;\r\n  padding: 6px 30px;\r\n  font-family: Poppins;\r\n  box-sizing: border-box;\r\n}\r\ninput::-webkit-input-placeholder {\r\n  color: #999;\r\n}\r\ninput::-moz-placeholder {\r\n  color: #999;\r\n}\r\ninput:-ms-input-placeholder {\r\n  color: #999;\r\n}\r\ninput:-moz-placeholder {\r\n  color: #999;\r\n}\r\ninput:focus {\r\n  border-bottom: 1px solid #222;\r\n}\r\ninput:focus::-webkit-input-placeholder {\r\n  color: #222;\r\n}\r\ninput:focus::-moz-placeholder {\r\n  color: #222;\r\n}\r\ninput:focus:-ms-input-placeholder {\r\n  color: #222;\r\n}\r\ninput:focus:-moz-placeholder {\r\n  color: #222;\r\n}\r\ninput[type=checkbox]:not(old) {\r\n  width: 2em;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 1em;\r\n  display: none;\r\n}\r\ninput[type=checkbox]:not(old)+label {\r\n  display: inline-block;\r\n  line-height: 1.5em;\r\n  margin-top: 6px;\r\n}\r\ninput[type=checkbox]:not(old)+label>span {\r\n  display: inline-block;\r\n  width: 13px;\r\n  height: 13px;\r\n  margin-right: 15px;\r\n  margin-bottom: 3px;\r\n  border: 1px solid #999;\r\n  border-radius: 2px;\r\n  -moz-border-radius: 2px;\r\n  -webkit-border-radius: 2px;\r\n  -o-border-radius: 2px;\r\n  -ms-border-radius: 2px;\r\n  background: white;\r\n  background-image: linear-gradient(white, white);\r\n  vertical-align: bottom;\r\n}\r\ninput[type=checkbox]:not(old):checked+label>span {\r\n  background-image: linear-gradient(white, white);\r\n}\r\ninput[type=checkbox]:not(old):checked+label>span:before {\r\n  content: '\\f26b';\r\n  display: block;\r\n  color: #222;\r\n  font-size: 11px;\r\n  line-height: 1.2;\r\n  text-align: center;\r\n  font-family: 'Material-Design-Iconic-Font';\r\n  font-weight: bold;\r\n}\r\n.agree-term {\r\n  display: inline-block;\r\n  width: auto;\r\n}\r\nlabel {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n  -moz-transform: translateY(-50%);\r\n  -webkit-transform: translateY(-50%);\r\n  -o-transform: translateY(-50%);\r\n  -ms-transform: translateY(-50%);\r\n  color: #222;\r\n}\r\n.label-has-error {\r\n  top: 22%;\r\n}\r\nlabel.error {\r\n  position: relative;\r\n  background-position-y: 3px;\r\n  padding-left: 20px;\r\n  display: block;\r\n  margin-top: 20px;\r\n}\r\nlabel.valid {\r\n  display: block;\r\n  position: absolute;\r\n  right: 0;\r\n  left: auto;\r\n  margin-top: -6px;\r\n  width: 20px;\r\n  height: 20px;\r\n  background: transparent;\r\n}\r\nlabel.valid:after {\r\n  font-family: 'Material-Design-Iconic-Font';\r\n  content: '\\f269';\r\n  width: 100%;\r\n  height: 100%;\r\n  position: absolute;\r\n  /* right: 0; */\r\n  font-size: 16px;\r\n  color: green;\r\n}\r\n.label-agree-term {\r\n  position: relative;\r\n  top: 0%;\r\n  transform: translateY(0);\r\n  -moz-transform: translateY(0);\r\n  -webkit-transform: translateY(0);\r\n  -o-transform: translateY(0);\r\n  -ms-transform: translateY(0);\r\n}\r\n.material-icons-name {\r\n  font-size: 18px;\r\n}\r\n.signin-content {\r\n  padding-top: 67px;\r\n  padding-bottom: 87px;\r\n}\r\n.social-login {\r\n  align-items: center;\r\n  -moz-align-items: center;\r\n  -webkit-align-items: center;\r\n  -o-align-items: center;\r\n  -ms-align-items: center;\r\n  margin-top: 80px;\r\n}\r\n.social-label {\r\n  display: inline-block;\r\n  margin-right: 15px;\r\n}\r\n.socials li {\r\n  padding: 5px;\r\n}\r\n.socials li:last-child {\r\n  margin-right: 0px;\r\n}\r\n.socials li a {\r\n  text-decoration: none;\r\n}\r\n.socials li a i {\r\n  width: 30px;\r\n  height: 30px;\r\n  color: #fff;\r\n  font-size: 14px;\r\n  border-radius: 5px;\r\n  -moz-border-radius: 5px;\r\n  -webkit-border-radius: 5px;\r\n  -o-border-radius: 5px;\r\n  -ms-border-radius: 5px;\r\n  transform: translateZ(0);\r\n  -moz-transform: translateZ(0);\r\n  -webkit-transform: translateZ(0);\r\n  -o-transform: translateZ(0);\r\n  -ms-transform: translateZ(0);\r\n  transition-duration: 0.3s;\r\n  transition-property: transform;\r\n  transition-timing-function: ease-out;\r\n}\r\n.socials li:hover a i {\r\n  transform: scale(1.3) translateZ(0);\r\n}\r\n.zmdi-facebook {\r\n  background: #3b5998;\r\n}\r\n.zmdi-twitter {\r\n  background: #1da0f2;\r\n}\r\n.zmdi-google {\r\n  background: #e72734;\r\n}\r\n.signin-form {\r\n  margin-right: 90px;\r\n  margin-left: 80px;\r\n}\r\n.signin-image {\r\n  margin-left: 110px;\r\n  margin-right: 20px;\r\n  margin-top: 10px;\r\n}\r\n@media screen and (max-width: 1200px) {\r\n  .container {\r\n    width: calc(100% - 30px);\r\n    max-width: 100%;\r\n  }\r\n}\r\n@media screen and (min-width: 1024px) {\r\n  .container {\r\n    max-width: 1200px;\r\n  }\r\n}\r\n@media screen and (max-width: 768px) {\r\n\r\n  .signup-content,\r\n  .signin-content {\r\n    flex-direction: column;\r\n    -moz-flex-direction: column;\r\n    -o-flex-direction: column;\r\n    justify-content: center;\r\n    -moz-justify-content: center;\r\n    -webkit-justify-content: center;\r\n    -o-justify-content: center;\r\n    -ms-justify-content: center;\r\n  }\r\n\r\n  .signup-form {\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n    padding-left: 0px;\r\n    /* box-sizing: border-box; */\r\n    padding: 0 30px;\r\n  }\r\n\r\n  .signin-image {\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n    margin-top: 50px;\r\n    order: 2;\r\n    -moz-order: 2;\r\n    -webkit-order: 2;\r\n    -o-order: 2;\r\n    -ms-order: 2;\r\n  }\r\n\r\n  .signup-form,\r\n  .signup-image,\r\n  .signin-form,\r\n  .signin-image {\r\n    width: auto;\r\n  }\r\n\r\n  .social-login {\r\n    justify-content: center;\r\n    -moz-justify-content: center;\r\n    -webkit-justify-content: center;\r\n    -o-justify-content: center;\r\n    -ms-justify-content: center;\r\n  }\r\n\r\n  .form-button {\r\n    text-align: center;\r\n  }\r\n\r\n  .signin-form {\r\n    order: 1;\r\n    -moz-order: 1;\r\n    -webkit-order: 1;\r\n    -o-order: 1;\r\n    -ms-order: 1;\r\n    margin-right: 0px;\r\n    margin-left: 0px;\r\n    padding: 0 30px;\r\n  }\r\n\r\n  .form-title {\r\n    text-align: center;\r\n  }\r\n}\r\n@media screen and (max-width: 400px) {\r\n  .social-login {\r\n    flex-direction: column;\r\n    -moz-flex-direction: column;\r\n    -o-flex-direction: column;\r\n  }\r\n\r\n  .social-label {\r\n    margin-right: 0px;\r\n    margin-bottom: 10px;\r\n  }\r\n}\r\n/*# sourceMappingURL=style.css.map */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEJBQTBCO0FBQzFCOzs7Ozs7O0VBT0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QjtBQUVBLDRCQUE0QjtBQUM1Qjs7RUFFRSxxQkFBcUI7RUFDckIsU0FBUztFQUNULFVBQVU7QUFDWjtBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9DQUFrRTtFQUNsRSxxQkFBcUI7RUFDckIsc1VBQTRkO0VBQzVkLGVBQWU7QUFDakI7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwwQ0FBd0U7RUFDeEUscUJBQXFCO0VBQ3JCLGlYQUF1Z0I7RUFDdmdCLGVBQWU7QUFDakI7QUFFQSw0QkFBNEI7QUFDNUI7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix3Q0FBc0U7RUFDdEUscUJBQXFCO0VBQ3JCLDhWQUFvZjtFQUNwZixlQUFlO0FBQ2pCO0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsdUNBQXFFO0VBQ3JFLHFCQUFxQjtFQUNyQix1VkFBNmU7RUFDN2UsZUFBZTtBQUNqQjtBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9DQUFrRTtFQUNsRSxxQkFBcUI7RUFDckIsd1VBQThkO0VBQzlkLGVBQWU7QUFDakI7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiwwQ0FBd0U7RUFDeEUscUJBQXFCO0VBQ3JCLG1YQUF5Z0I7RUFDemdCLGVBQWU7QUFDakI7QUFFQSx3QkFBd0I7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QjtBQUNuQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFO0lBQ0Usd0JBQXdCO0lBQ3hCLGVBQWU7RUFDakI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjtBQUVBOztFQUVFOztJQUVFLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFFM0IseUJBQXlCO0lBRXpCLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsK0JBQStCO0lBQy9CLDBCQUEwQjtJQUMxQiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFFBQVE7SUFDUixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7O0VBRUE7Ozs7SUFJRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQiwwQkFBMEI7SUFDMUIsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsUUFBUTtJQUNSLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRjtBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBRTNCLHlCQUF5QjtFQUUzQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7QUFDRjtBQUVBLG9DQUFvQyIsImZpbGUiOiJzcmMvYXBwL2F1dGgvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGV4dGVuZCBkaXNwbGF5LWZsZXg7ICovXHJcbmRpc3BsYXktZmxleCxcclxuLmRpc3BsYXktZmxleCxcclxuLmRpc3BsYXktZmxleC1jZW50ZXIsXHJcbi5zaWdudXAtY29udGVudCxcclxuLnNpZ25pbi1jb250ZW50LFxyXG4uc29jaWFsLWxvZ2luLFxyXG4uc29jaWFscyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbn1cclxuXHJcbi8qIEBleHRlbmQgbGlzdC10eXBlLXVsbGk7ICovXHJcbmxpc3QtdHlwZS11bGxpLFxyXG4uc29jaWFscyB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4vKiBwb3BwaW5zLTMwMCAtIGxhdGluICovXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTMwMC5lb3RcIik7XHJcbiAgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xyXG4gIHNyYzogbG9jYWwoXCJQb3BwaW5zIExpZ2h0XCIpLCBsb2NhbChcIlBvcHBpbnMtTGlnaHRcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tMzAwLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tMzAwLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTMwMC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tMzAwLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi0zMDAuc3ZnI1BvcHBpbnNcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG4gIC8qIExlZ2FjeSBpT1MgKi9cclxufVxyXG5cclxuLyogcG9wcGlucy0zMDBpdGFsaWMgLSBsYXRpbiAqL1xyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi0zMDBpdGFsaWMuZW90XCIpO1xyXG4gIC8qIElFOSBDb21wYXQgTW9kZXMgKi9cclxuICBzcmM6IGxvY2FsKFwiUG9wcGlucyBMaWdodCBJdGFsaWNcIiksIGxvY2FsKFwiUG9wcGlucy1MaWdodEl0YWxpY1wiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi0zMDBpdGFsaWMuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi0zMDBpdGFsaWMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tMzAwaXRhbGljLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi0zMDBpdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTMwMGl0YWxpYy5zdmcjUG9wcGluc1wiKSBmb3JtYXQoXCJzdmdcIik7XHJcbiAgLyogTGVnYWN5IGlPUyAqL1xyXG59XHJcblxyXG4vKiBwb3BwaW5zLXJlZ3VsYXIgLSBsYXRpbiAqL1xyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi1yZWd1bGFyLmVvdFwiKTtcclxuICAvKiBJRTkgQ29tcGF0IE1vZGVzICovXHJcbiAgc3JjOiBsb2NhbChcIlBvcHBpbnMgUmVndWxhclwiKSwgbG9jYWwoXCJQb3BwaW5zLVJlZ3VsYXJcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tcmVndWxhci5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLXJlZ3VsYXIud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tcmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tcmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tcmVndWxhci5zdmcjUG9wcGluc1wiKSBmb3JtYXQoXCJzdmdcIik7XHJcbiAgLyogTGVnYWN5IGlPUyAqL1xyXG59XHJcblxyXG4vKiBwb3BwaW5zLWl0YWxpYyAtIGxhdGluICovXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLWl0YWxpYy5lb3RcIik7XHJcbiAgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xyXG4gIHNyYzogbG9jYWwoXCJQb3BwaW5zIEl0YWxpY1wiKSwgbG9jYWwoXCJQb3BwaW5zLUl0YWxpY1wiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi1pdGFsaWMuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi1pdGFsaWMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4taXRhbGljLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi1pdGFsaWMudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLWl0YWxpYy5zdmcjUG9wcGluc1wiKSBmb3JtYXQoXCJzdmdcIik7XHJcbiAgLyogTGVnYWN5IGlPUyAqL1xyXG59XHJcblxyXG4vKiBwb3BwaW5zLTUwMCAtIGxhdGluICovXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTUwMC5lb3RcIik7XHJcbiAgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xyXG4gIHNyYzogbG9jYWwoXCJQb3BwaW5zIE1lZGl1bVwiKSwgbG9jYWwoXCJQb3BwaW5zLU1lZGl1bVwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi01MDAuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi01MDAud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tNTAwLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi01MDAudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTUwMC5zdmcjUG9wcGluc1wiKSBmb3JtYXQoXCJzdmdcIik7XHJcbiAgLyogTGVnYWN5IGlPUyAqL1xyXG59XHJcblxyXG4vKiBwb3BwaW5zLTUwMGl0YWxpYyAtIGxhdGluICovXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgc3JjOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTUwMGl0YWxpYy5lb3RcIik7XHJcbiAgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xyXG4gIHNyYzogbG9jYWwoXCJQb3BwaW5zIE1lZGl1bSBJdGFsaWNcIiksIGxvY2FsKFwiUG9wcGlucy1NZWRpdW1JdGFsaWNcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tNTAwaXRhbGljLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tNTAwaXRhbGljLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTUwMGl0YWxpYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tNTAwaXRhbGljLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi01MDBpdGFsaWMuc3ZnI1BvcHBpbnNcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG4gIC8qIExlZ2FjeSBpT1MgKi9cclxufVxyXG5cclxuLyogcG9wcGlucy02MDAgLSBsYXRpbiAqL1xyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi02MDAuZW90XCIpO1xyXG4gIC8qIElFOSBDb21wYXQgTW9kZXMgKi9cclxuICBzcmM6IGxvY2FsKFwiUG9wcGlucyBTZW1pQm9sZFwiKSwgbG9jYWwoXCJQb3BwaW5zLVNlbWlCb2xkXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTYwMC5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTYwMC53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi02MDAud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTYwMC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tNjAwLnN2ZyNQb3BwaW5zXCIpIGZvcm1hdChcInN2Z1wiKTtcclxuICAvKiBMZWdhY3kgaU9TICovXHJcbn1cclxuXHJcbi8qIHBvcHBpbnMtNzAwIC0gbGF0aW4gKi9cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBzcmM6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tNzAwLmVvdFwiKTtcclxuICAvKiBJRTkgQ29tcGF0IE1vZGVzICovXHJcbiAgc3JjOiBsb2NhbChcIlBvcHBpbnMgQm9sZFwiKSwgbG9jYWwoXCJQb3BwaW5zLUJvbGRcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tNzAwLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tNzAwLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTcwMC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tNzAwLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi03MDAuc3ZnI1BvcHBpbnNcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG4gIC8qIExlZ2FjeSBpT1MgKi9cclxufVxyXG5cclxuLyogcG9wcGlucy03MDBpdGFsaWMgLSBsYXRpbiAqL1xyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi03MDBpdGFsaWMuZW90XCIpO1xyXG4gIC8qIElFOSBDb21wYXQgTW9kZXMgKi9cclxuICBzcmM6IGxvY2FsKFwiUG9wcGlucyBCb2xkIEl0YWxpY1wiKSwgbG9jYWwoXCJQb3BwaW5zLUJvbGRJdGFsaWNcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tNzAwaXRhbGljLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tNzAwaXRhbGljLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTcwMGl0YWxpYy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tNzAwaXRhbGljLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi03MDBpdGFsaWMuc3ZnI1BvcHBpbnNcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG4gIC8qIExlZ2FjeSBpT1MgKi9cclxufVxyXG5cclxuLyogcG9wcGlucy04MDAgLSBsYXRpbiAqL1xyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi04MDAuZW90XCIpO1xyXG4gIC8qIElFOSBDb21wYXQgTW9kZXMgKi9cclxuICBzcmM6IGxvY2FsKFwiUG9wcGlucyBFeHRyYUJvbGRcIiksIGxvY2FsKFwiUG9wcGlucy1FeHRyYUJvbGRcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tODAwLmVvdD8jaWVmaXhcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tODAwLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTgwMC53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tODAwLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi04MDAuc3ZnI1BvcHBpbnNcIikgZm9ybWF0KFwic3ZnXCIpO1xyXG4gIC8qIExlZ2FjeSBpT1MgKi9cclxufVxyXG5cclxuLyogcG9wcGlucy04MDBpdGFsaWMgLSBsYXRpbiAqL1xyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIHNyYzogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi04MDBpdGFsaWMuZW90XCIpO1xyXG4gIC8qIElFOSBDb21wYXQgTW9kZXMgKi9cclxuICBzcmM6IGxvY2FsKFwiUG9wcGlucyBFeHRyYUJvbGQgSXRhbGljXCIpLCBsb2NhbChcIlBvcHBpbnMtRXh0cmFCb2xkSXRhbGljXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTgwMGl0YWxpYy5lb3Q/I2llZml4XCIpIGZvcm1hdChcImVtYmVkZGVkLW9wZW50eXBlXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTgwMGl0YWxpYy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi04MDBpdGFsaWMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTgwMGl0YWxpYy50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tODAwaXRhbGljLnN2ZyNQb3BwaW5zXCIpIGZvcm1hdChcInN2Z1wiKTtcclxuICAvKiBMZWdhY3kgaU9TICovXHJcbn1cclxuXHJcbi8qIHBvcHBpbnMtOTAwIC0gbGF0aW4gKi9cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBzcmM6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tOTAwLmVvdFwiKTtcclxuICAvKiBJRTkgQ29tcGF0IE1vZGVzICovXHJcbiAgc3JjOiBsb2NhbChcIlBvcHBpbnMgQmxhY2tcIiksIGxvY2FsKFwiUG9wcGlucy1CbGFja1wiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi05MDAuZW90PyNpZWZpeFwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi05MDAud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250cy9wb3BwaW5zL3BvcHBpbnMtdjUtbGF0aW4tOTAwLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnRzL3BvcHBpbnMvcG9wcGlucy12NS1sYXRpbi05MDAudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udHMvcG9wcGlucy9wb3BwaW5zLXY1LWxhdGluLTkwMC5zdmcjUG9wcGluc1wiKSBmb3JtYXQoXCJzdmdcIik7XHJcbiAgLyogTGVnYWN5IGlPUyAqL1xyXG59XHJcblxyXG5hOmZvY3VzLFxyXG5hOmFjdGl2ZSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UgMHM7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZSAwcztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlIDBzO1xyXG4gIC1vLXRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlIDBzO1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZSAwcztcclxufVxyXG5cclxuaW5wdXQsXHJcbnNlbGVjdCxcclxudGV4dGFyZWEge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYXBwZWFyYW5jZTogdW5zZXQgIWltcG9ydGFudDtcclxuICAtbW96LWFwcGVhcmFuY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gIC1vLWFwcGVhcmFuY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgLW1zLWFwcGVhcmFuY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgYXBwZWFyYW5jZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIC1vLWFwcGVhcmFuY2U6IG5vbmUgIWltcG9ydGFudDtcclxuICAtbXMtYXBwZWFyYW5jZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMsXHJcbnNlbGVjdDpmb2N1cyxcclxudGV4dGFyZWE6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIC1tb3otYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIC1vLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAtbXMtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWNoZWNrYm94XSB7XHJcbiAgYXBwZWFyYW5jZTogY2hlY2tib3ggIWltcG9ydGFudDtcclxuICAtbW96LWFwcGVhcmFuY2U6IGNoZWNrYm94ICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBjaGVja2JveCAhaW1wb3J0YW50O1xyXG4gIC1vLWFwcGVhcmFuY2U6IGNoZWNrYm94ICFpbXBvcnRhbnQ7XHJcbiAgLW1zLWFwcGVhcmFuY2U6IGNoZWNrYm94ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9cmFkaW9dIHtcclxuICBhcHBlYXJhbmNlOiByYWRpbyAhaW1wb3J0YW50O1xyXG4gIC1tb3otYXBwZWFyYW5jZTogcmFkaW8gIWltcG9ydGFudDtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHJhZGlvICFpbXBvcnRhbnQ7XHJcbiAgLW8tYXBwZWFyYW5jZTogcmFkaW8gIWltcG9ydGFudDtcclxuICAtbXMtYXBwZWFyYW5jZTogcmFkaW8gIWltcG9ydGFudDtcclxufVxyXG5cclxuaW1nIHtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5maWd1cmUge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBjb2xvcjogIzc3NztcclxufVxyXG5cclxuaDIge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY2O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjMjIyO1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxufVxyXG5cclxuLm1haW4ge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbiAgcGFkZGluZzogMTUwcHggMDtcclxufVxyXG5cclxuLmNsZWFyIHtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgY29sb3I6ICMyMjI7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogOTAwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBib3gtc2hhZG93OiAwcHggMTVweCAxNi44M3B4IDAuMTdweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDE1cHggMTYuODNweCAwLjE3cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAxNXB4IDE2LjgzcHggMC4xN3B4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgLW8tYm94LXNoYWRvdzogMHB4IDE1cHggMTYuODNweCAwLjE3cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAtbXMtYm94LXNoYWRvdzogMHB4IDE1cHggMTYuODNweCAwLjE3cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgLW8tYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAtbXMtYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLmRpc3BsYXktZmxleCB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC1tb3otanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC1vLWp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAtbXMtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLW1vei1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtby1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC1tcy1hbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZGlzcGxheS1mbGV4LWNlbnRlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC1vLWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC1tb3otYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLW8tYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtbXMtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBvc2l0aW9uLWNlbnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4uc2lnbnVwIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNTBweDtcclxufVxyXG5cclxuLnNpZ251cC1jb250ZW50IHtcclxuICBwYWRkaW5nOiA3NXB4IDA7XHJcbn1cclxuXHJcbi5zaWdudXAtZm9ybSxcclxuLnNpZ251cC1pbWFnZSxcclxuLnNpZ25pbi1mb3JtLFxyXG4uc2lnbmluLWltYWdlIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zaWdudXAtaW1hZ2Uge1xyXG4gIG1hcmdpbjogMCA1NXB4O1xyXG59XHJcblxyXG4uZm9ybS10aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzNweDtcclxufVxyXG5cclxuLnNpZ251cC1pbWFnZSB7XHJcbiAgbWFyZ2luLXRvcDogNDVweDtcclxufVxyXG5cclxuZmlndXJlIHtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZvcm0tc3VibWl0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogIzZkYWJlNDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDE1cHggMzlweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLW8tYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIC1tcy1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mb3JtLXN1Ym1pdDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzQyOTJkYztcclxufVxyXG5cclxuI3NpZ25pbiB7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5cclxuLnNpZ251cC1pbWFnZS1saW5rIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICMyMjI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGVybS1zZXJ2aWNlIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6ICMyMjI7XHJcbn1cclxuXHJcbi5zaWdudXAtZm9ybSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDc1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA3NXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMzRweDtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWZvcm0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXA6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOTk5O1xyXG4gIHBhZGRpbmc6IDZweCAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzk5OTtcclxufVxyXG5cclxuaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjOTk5O1xyXG59XHJcblxyXG5pbnB1dDotbW96LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzk5OTtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMjIyO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICMyMjI7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzIyMjtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogIzIyMjtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXM6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICMyMjI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdOm5vdChvbGQpIHtcclxuICB3aWR0aDogMmVtO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogMWVtO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9Y2hlY2tib3hdOm5vdChvbGQpK2xhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNWVtO1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1jaGVja2JveF06bm90KG9sZCkrbGFiZWw+c3BhbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiAxM3B4O1xyXG4gIGhlaWdodDogMTNweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIC1vLWJvcmRlci1yYWRpdXM6IDJweDtcclxuICAtbXMtYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otbGluZWFyLWdyYWRpZW50KHdoaXRlLCB3aGl0ZSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogLW1zLWxpbmVhci1ncmFkaWVudCh3aGl0ZSwgd2hpdGUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1vLWxpbmVhci1ncmFkaWVudCh3aGl0ZSwgd2hpdGUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHdoaXRlLCB3aGl0ZSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHdoaXRlLCB3aGl0ZSk7XHJcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1jaGVja2JveF06bm90KG9sZCk6Y2hlY2tlZCtsYWJlbD5zcGFuIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh3aGl0ZSwgd2hpdGUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tcy1saW5lYXItZ3JhZGllbnQod2hpdGUsIHdoaXRlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtby1saW5lYXItZ3JhZGllbnQod2hpdGUsIHdoaXRlKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh3aGl0ZSwgd2hpdGUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh3aGl0ZSwgd2hpdGUpO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPWNoZWNrYm94XTpub3Qob2xkKTpjaGVja2VkK2xhYmVsPnNwYW46YmVmb3JlIHtcclxuICBjb250ZW50OiAnXFxmMjZiJztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogIzIyMjtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbC1EZXNpZ24tSWNvbmljLUZvbnQnO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYWdyZWUtdGVybSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIGNvbG9yOiAjMjIyO1xyXG59XHJcblxyXG4ubGFiZWwtaGFzLWVycm9yIHtcclxuICB0b3A6IDIyJTtcclxufVxyXG5cclxubGFiZWwuZXJyb3Ige1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDNweDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxubGFiZWwudmFsaWQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICBsZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IC02cHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5sYWJlbC52YWxpZDphZnRlciB7XHJcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbC1EZXNpZ24tSWNvbmljLUZvbnQnO1xyXG4gIGNvbnRlbnQ6ICdcXGYyNjknO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLyogcmlnaHQ6IDA7ICovXHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmxhYmVsLWFncmVlLXRlcm0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxufVxyXG5cclxuLm1hdGVyaWFsLWljb25zLW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnNpZ25pbi1jb250ZW50IHtcclxuICBwYWRkaW5nLXRvcDogNjdweDtcclxuICBwYWRkaW5nLWJvdHRvbTogODdweDtcclxufVxyXG5cclxuLnNvY2lhbC1sb2dpbiB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAtbW96LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC1vLWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLW1zLWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogODBweDtcclxufVxyXG5cclxuLnNvY2lhbC1sYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuLnNvY2lhbHMgbGkge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLnNvY2lhbHMgbGk6bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5zb2NpYWxzIGxpIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnNvY2lhbHMgbGkgYSBpIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAtby1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDVweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xyXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XHJcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xyXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxufVxyXG5cclxuLnNvY2lhbHMgbGk6aG92ZXIgYSBpIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4zKSB0cmFuc2xhdGVaKDApO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4zKSB0cmFuc2xhdGVaKDApO1xyXG59XHJcblxyXG4uem1kaS1mYWNlYm9vayB7XHJcbiAgYmFja2dyb3VuZDogIzNiNTk5ODtcclxufVxyXG5cclxuLnptZGktdHdpdHRlciB7XHJcbiAgYmFja2dyb3VuZDogIzFkYTBmMjtcclxufVxyXG5cclxuLnptZGktZ29vZ2xlIHtcclxuICBiYWNrZ3JvdW5kOiAjZTcyNzM0O1xyXG59XHJcblxyXG4uc2lnbmluLWZvcm0ge1xyXG4gIG1hcmdpbi1yaWdodDogOTBweDtcclxuICBtYXJnaW4tbGVmdDogODBweDtcclxufVxyXG5cclxuLnNpZ25pbi1pbWFnZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDExMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG5cclxuICAuc2lnbnVwLWNvbnRlbnQsXHJcbiAgLnNpZ25pbi1jb250ZW50IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAtby1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC1tb3otanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLW8tanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtbXMtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuc2lnbnVwLWZvcm0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAvKiBib3gtc2l6aW5nOiBib3JkZXItYm94OyAqL1xyXG4gICAgcGFkZGluZzogMCAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLnNpZ25pbi1pbWFnZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgb3JkZXI6IDI7XHJcbiAgICAtbW96LW9yZGVyOiAyO1xyXG4gICAgLXdlYmtpdC1vcmRlcjogMjtcclxuICAgIC1vLW9yZGVyOiAyO1xyXG4gICAgLW1zLW9yZGVyOiAyO1xyXG4gIH1cclxuXHJcbiAgLnNpZ251cC1mb3JtLFxyXG4gIC5zaWdudXAtaW1hZ2UsXHJcbiAgLnNpZ25pbi1mb3JtLFxyXG4gIC5zaWduaW4taW1hZ2Uge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuc29jaWFsLWxvZ2luIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgLW1vei1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAtby1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC1tcy1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5mb3JtLWJ1dHRvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuc2lnbmluLWZvcm0ge1xyXG4gICAgb3JkZXI6IDE7XHJcbiAgICAtbW96LW9yZGVyOiAxO1xyXG4gICAgLXdlYmtpdC1vcmRlcjogMTtcclxuICAgIC1vLW9yZGVyOiAxO1xyXG4gICAgLW1zLW9yZGVyOiAxO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZzogMCAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAuc29jaWFsLWxvZ2luIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAtbW96LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAtby1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICAuc29jaWFsLWxhYmVsIHtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9cclxuIl19 */");

/***/ }),

/***/ "./src/app/auth/registration/registration.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/auth/registration/registration.component.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");



let RegistrationComponent = class RegistrationComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
        this.auth.eventAuthError$.subscribe(data => {
            this.authError = data;
        });
    }
    createUser(form) {
        console.log(form.value);
        this.auth.createUser(form.value);
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-registration",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/registration/registration.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration.component.css */ "./src/app/auth/registration/registration.component.css")).default]
    })
], RegistrationComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dashboard {\r\n  margin: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZCB7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DashboardComponent = class DashboardComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
        this.auth.getUserState().subscribe(user => {
            this.user = user;
        });
    }
    logout() {
        this.auth.logout();
        this.router.navigate([""]);
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-dashboard",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBdJ5a-x5IvosMqLsLVjun7nFGKzYB2GX4",
        authDomain: "wisataku-cf8ef.firebaseapp.com",
        databaseURL: "https://wisataku-cf8ef.firebaseio.com",
        projectId: "wisataku-cf8ef",
        storageBucket: "wisataku-cf8ef.appspot.com",
        messagingSenderId: "13750174987",
        appId: "1:13750174987:web:bd9f7f1e7000d082e30e0e",
        measurementId: "G-Y8T6E78QFR"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular\wisataku\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);