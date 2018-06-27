(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-factory></app-factory>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _factory_factory_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./factory/factory.component */ "./src/app/factory/factory.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _factory_factory_component__WEBPACK_IMPORTED_MODULE_5__["FactoryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/factory/factory.component.css":
/*!***********************************************!*\
  !*** ./src/app/factory/factory.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/factory/factory.component.html":
/*!************************************************!*\
  !*** ./src/app/factory/factory.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class= \"row\">\r\n  <div class=\"col s12\">\r\n    <div class=\"card blue-grey darken-10\">\r\n      <div class=\"card-content white-text\">\r\n        <ul><h3>Root<span style=\"float:right;\"> <a class=\"waves-effect waves-light btn modal-trigger\" href=\"#modal1\" >+</a></span></h3>\r\n          <br>\r\n          <ul *ngFor=\"let fac of factoryService.factories\"data-role=\"treeview\" >\r\n            <li><h5>{{fac.name}} <span style=\"float:right;\"><a class=\"btn modal-trigger\" href=\"#modal1\" (click)=\"onEdit(fac)\">edit</a>\r\n              <a class=\"waves-effect waves-light btn\" (click)=\"onDelete(fac._id)\">Delete</a>\r\n            </span> </h5></li>\r\n            {{fac.lower}}:{{fac.upper}}\r\n            <ul>\r\n              <li>{{fac.children[0]}}</li>\r\n              <li>{{fac.children[1]}}</li>\r\n              <li>{{fac.children[2]}}</li>\r\n              <li>{{fac.children[3]}}</li>\r\n              <li>{{fac.children[4]}}</li>\r\n              <li>{{fac.children[5]}}</li>\r\n              <li>{{fac.children[6]}}</li>\r\n              <li>{{fac.children[7]}}</li>\r\n              <li>{{fac.children[8]}}</li>\r\n              <li>{{fac.children[9]}}</li>\r\n              <li>{{fac.children[10]}}</li>\r\n              <li>{{fac.children[11]}}</li>\r\n              <li>{{fac.children[12]}}</li>\r\n              <li>{{fac.children[13]}}</li>\r\n              <li>{{fac.children[14]}}</li>\r\n              <li>{{fac.children[15]}}</li>\r\n            </ul>\r\n          </ul>\r\n        </ul> \r\n</div>\r\n<div id=\"modal1\" class=\"modal\">\r\n  <div class=\"modal-content\">\r\n    <form [formGroup]=\"rForm\">\r\n      <div class=\"form-container\">\r\n      <input  type=\"hidden\" formControlName=\"_id\"  [(ngModel)] = \"this._id\">        \r\n        <label>Factory Name\r\n          <input type=\"text\" formControlName=\"name\" [(ngModel)] = \"this.name\">\r\n        </label>\r\n        <div class=\"alert\" *ngIf=\"!rForm.controls['name'].valid && rForm.controls['name'].touched\">This is required.</div>\r\n        <label>Lower Bound\r\n            <input type=\"number\" formControlName=\"lower\" [(ngModel)] = \"this.lower\">\r\n        </label>\r\n        <label>Upper Bound\r\n            <input type=\"number\" formControlName=\"upper\" [(ngModel)] = \"this.upper\">\r\n        </label>\r\n        <label>Number of Child Nodes\r\n            <input type=\"number\" formControlName=\"children\" [(ngModel)] = \"this.children\">\r\n        </label>\r\n        <div class=\"alert\" *ngIf=\"!rForm.controls['children'].valid && rForm.controls['children'].touched\">Must be between 1 and 15 inclusive.</div>\r\n\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <!-- <a href=\"#!\" class=\"modal-close waves-effect waves-green btn-flat\" (click)=\"onSubmit(factoryForm)\" [disabled]=\"!bookForm.form.valid\" >Submit</a> -->\r\n    <button class=\"modal-close waves-effect waves-green btn-flat\" [disabled]=\"!rForm.valid\" (click)=\"onSubmit(rForm)\">Submit</button>\r\n    <button class=\"modal-close waves-effect waves-green btn-flat\" (click)=\"onCancel(factoryForm)\">Cancel</button>\r\n  </div>\r\n</div> "

/***/ }),

/***/ "./src/app/factory/factory.component.ts":
/*!**********************************************!*\
  !*** ./src/app/factory/factory.component.ts ***!
  \**********************************************/
/*! exports provided: FactoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactoryComponent", function() { return FactoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_factory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/factory.service */ "./src/app/shared/factory.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// const io = require('socket.io-client');

var FactoryComponent = /** @class */ (function () {
    function FactoryComponent(factoryService, fb) {
        this.factoryService = factoryService;
        this.fb = fb;
        this.url = 'http://localhost:3000/';
        this._id = null;
        this.name = '';
        this.lower = null;
        this.upper = null;
        this.children = null;
        this.rForm = fb.group({
            'name': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'lower': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'upper': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'children': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(15)])],
            '_id': [null]
        }, { validator: this.boundValidator });
    }
    FactoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, { dismissible: false });
        });
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.url);
        this.socket.on('update', function () {
            _this.refreshFactoryList();
        });
        this.resetForm();
    };
    FactoryComponent.prototype.resetForm = function (rForm) {
        if (rForm) {
            rForm.reset();
            console.log("form reset");
        }
        this.name = null;
        this.lower = null;
        this.upper = null;
        this.children = null;
        this._id = null;
    };
    FactoryComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.value._id == null) {
            this.factoryService.postFactory(form.value).subscribe(function (res) {
                _this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(_this.url);
                _this.socket.close();
                _this.resetForm(form);
                _this.refreshFactoryList();
            });
        }
        else {
            this.factoryService.putFactory(form.value).subscribe(function (res) {
                _this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(_this.url);
                _this.socket.close();
                _this.resetForm(form);
                _this.refreshFactoryList();
            });
        }
    };
    FactoryComponent.prototype.refreshFactoryList = function () {
        var _this = this;
        this.factoryService.getFactoryList().subscribe(function (res) {
            _this.factoryService.factories = res;
        });
    };
    FactoryComponent.prototype.onEdit = function (fac) {
        this._id = fac._id;
        this.name = fac.name;
        this.lower = fac.lower;
        this.upper = fac.upper;
        this.children = 0;
    };
    FactoryComponent.prototype.onCancel = function (rForm) {
        this.refreshFactoryList();
        this.resetForm(rForm);
    };
    FactoryComponent.prototype.onDelete = function (_id) {
        var _this = this;
        if (confirm('Are you sure you want to delete this factory?') == true) {
            this.factoryService.deleteFactory(_id).subscribe(function (res) {
                _this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(_this.url);
                _this.socket.close();
                _this.refreshFactoryList();
            });
        }
    };
    FactoryComponent.prototype.boundValidator = function (group) {
        if (group.get(['upper']).value < group.get(['lower']).value) {
            return { notValid: true };
        }
        else {
            return null;
        }
        ;
    };
    FactoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-factory',
            template: __webpack_require__(/*! ./factory.component.html */ "./src/app/factory/factory.component.html"),
            styles: [__webpack_require__(/*! ./factory.component.css */ "./src/app/factory/factory.component.css")],
            providers: [_shared_factory_service__WEBPACK_IMPORTED_MODULE_3__["FactoryService"]]
        }),
        __metadata("design:paramtypes", [_shared_factory_service__WEBPACK_IMPORTED_MODULE_3__["FactoryService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FactoryComponent);
    return FactoryComponent;
}());



/***/ }),

/***/ "./src/app/shared/factory.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/factory.service.ts ***!
  \*******************************************/
/*! exports provided: FactoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FactoryService", function() { return FactoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FactoryService = /** @class */ (function () {
    // readonly baseURL = '/factories';
    function FactoryService(http) {
        this.http = http;
        // private socket;
        // private url = 'http://localhost:3000';
        this.baseURL = 'http://localhost:3000/factories';
    }
    FactoryService.prototype.postFactory = function (fac) {
        return this.http.post(this.baseURL, fac);
    };
    FactoryService.prototype.getFactoryList = function () {
        return this.http.get(this.baseURL);
    };
    FactoryService.prototype.putFactory = function (fac) {
        return this.http.put(this.baseURL + ("/" + fac._id), fac);
    };
    FactoryService.prototype.deleteFactory = function (_id) {
        return this.http.delete(this.baseURL + ("/" + _id));
    };
    FactoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FactoryService);
    return FactoryService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\passport\Angular\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map