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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _views_admin_view_admin_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/admin-view/admin-view.component */ "./src/app/views/admin-view/admin-view.component.ts");
/* harmony import */ var _views_ui_view_ui_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/ui-view/ui-view.component */ "./src/app/views/ui-view/ui-view.component.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _views_access_code_login_access_code_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/access-code-login/access-code-login.component */ "./src/app/views/access-code-login/access-code-login.component.ts");
/* harmony import */ var _views_game_ui_game_ui_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/game-ui/game-ui.component */ "./src/app/views/game-ui/game-ui.component.ts");
/* harmony import */ var _modules_visualisations_more_or_less_viz_more_or_less_viz_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/visualisations/more-or-less-viz/more-or-less-viz.component */ "./src/app/modules/visualisations/more-or-less-viz/more-or-less-viz.component.ts");




//import { VizViewComponent } from './views/viz-view/viz-view.component';


//import { MoreOrLessVizComponent } from './games/more-or-less/viz/more-or-less-viz/more-or-less-viz.component';



const routes = [
    // { path: 'visualisations',     loadChildren: '../app/modules/visualisations/visualisations.module#VisualisationsModule' },  
    { path: 'MoreOrLessViz', component: _modules_visualisations_more_or_less_viz_more_or_less_viz_component__WEBPACK_IMPORTED_MODULE_8__["MoreOrLessVizComponent"] },
    { path: 'AccessCode/:GameId', component: _views_access_code_login_access_code_login_component__WEBPACK_IMPORTED_MODULE_6__["AccessCodeLoginView"] },
    { path: 'GameUI/:GameId', component: _views_game_ui_game_ui_component__WEBPACK_IMPORTED_MODULE_7__["GameUIView"] },
    { path: 'admin', component: _views_admin_view_admin_view_component__WEBPACK_IMPORTED_MODULE_3__["AdminViewComponent"] },
    // { path: 'viz',                  component: VizViewComponent },   
    { path: 'ui', component: _views_ui_view_ui_view_component__WEBPACK_IMPORTED_MODULE_4__["UiViewComponent"] },
    { path: '', component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div id=\"main-container\" >\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-spacer {\n  flex: 1 1 auto; }\n\n.home-button {\n  float: right; }\n\n.example-card {\n  margin-top: 4px; }\n\n.example-header-image {\n  background-size: cover; }\n\n.title {\n  font-weight: bold; }\n\n.img-article {\n  height: 350px; }\n\n.action-buttons {\n  text-align: center; }\n\n.example-container {\n  width: 100%;\n  height: auto;\n  border: 1px solid rgba(111, 111, 111, 0.5); }\n\n.container {\n  min-height: calc(100% - 300px); }\n\n.example-sidenav-content {\n  display: flex;\n  height: 75%;\n  align-items: center;\n  justify-content: center; }\n\n.example-sidenav {\n  padding: 20px; }\n\n.source-name {\n  margin-left: 5px; }\n\n.list-item:hover {\n  cursor: pointer;\n  background-color: #3f51b5;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXF9EYXRhXFxQcml2YXRlQ29kZVxcX2dpdFB6ZUtubVxcVHJlYXN1cmVIdW50XFxBbmd1bGFyU1BBXFxTYW5kZ2F0ZVRIL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNFLHNCQUFzQixFQUFBOztBQUd4QjtFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDBDQUEyQyxFQUFBOztBQUcvQztFQUlFLDhCQUE4QixFQUFBOztBQUdoQztFQUNJLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxnQkFBZSxFQUFBOztBQUduQjtFQUNJLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuXHJcbi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5ob21lLWJ1dHRvbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uZXhhbXBsZS1jYXJke1xyXG4gICAgbWFyZ2luLXRvcDogNHB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2UgeyBcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4udGl0bGV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmltZy1hcnRpY2xle1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxufVxyXG5cclxuLmFjdGlvbi1idXR0b25ze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiAgICBcclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxMTEsIDExMSwgMTExLCAwLjUwKTtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcblxyXG4gIG1pbi1oZWlnaHQ6IC13ZWJraXQtY2FsYygxMDAlIC0gMzAwcHgpO1xyXG4gIG1pbi1oZWlnaHQ6IC1tb3otY2FsYygxMDAlIC0gMzAwcHgpO1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwJSAtIDMwMHB4KTtcclxufVxyXG4gIFxyXG4uZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogNzUlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbiAgXHJcbi5leGFtcGxlLXNpZGVuYXYge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLnNvdXJjZS1uYW1lIHtcclxuICAgIG1hcmdpbi1sZWZ0OjVweDsgXHJcbn1cclxuXHJcbi5saXN0LWl0ZW06aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _services_guid_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/guid.service */ "./src/app/services/guid.service.ts");
/* harmony import */ var _services_data_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/data-cache.service */ "./src/app/services/data-cache.service.ts");





let AppComponent = class AppComponent {
    constructor(srvCookie, srvGuid, srvDataCache) {
        this.srvCookie = srvCookie;
        this.srvGuid = srvGuid;
        this.srvDataCache = srvDataCache;
        this.title = 'Sandgate Treasure Hunt';
        this.cookieValue = 'UNKNOWN';
        console.log('AppComponent');
    }
    ngOnInit() {
        if (!this.srvCookie.check('UserId')) {
            const gUserId = this.srvGuid.newGuidAsString();
            this.srvCookie.set('UserId', gUserId, 999);
        }
        this.srvDataCache.userId = this.srvCookie.get('UserId');
        this.srvDataCache.EnsureInitialize().then();
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
        _services_guid_service__WEBPACK_IMPORTED_MODULE_3__["GuidService"],
        _services_data_cache_service__WEBPACK_IMPORTED_MODULE_4__["DataCacheService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/app-footer/app-footer.component */ "./src/app/components/app-footer/app-footer.component.ts");
/* harmony import */ var _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/alert/alert.component */ "./src/app/components/alert/alert.component.ts");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _services_signal_r_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/signal-r.service */ "./src/app/services/signal-r.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _services_guid_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/guid.service */ "./src/app/services/guid.service.ts");
/* harmony import */ var _inteceptors_add_header_inteceptor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./inteceptors/add-header-inteceptor.service */ "./src/app/inteceptors/add-header-inteceptor.service.ts");
/* harmony import */ var _views_admin_view_admin_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./views/admin-view/admin-view.component */ "./src/app/views/admin-view/admin-view.component.ts");
/* harmony import */ var _components_game_over_game_over_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/game-over/game-over.component */ "./src/app/components/game-over/game-over.component.ts");
/* harmony import */ var _components_pre_game_pre_game_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pre-game/pre-game.component */ "./src/app/components/pre-game/pre-game.component.ts");
/* harmony import */ var _components_game_summary_game_summary_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/game-summary/game-summary.component */ "./src/app/components/game-summary/game-summary.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_numpad_numpad_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/numpad/numpad.component */ "./src/app/components/numpad/numpad.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/app-header/app-header.component */ "./src/app/components/app-header/app-header.component.ts");
/* harmony import */ var _services_visualisation_data_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/visualisation-data.service */ "./src/app/services/visualisation-data.service.ts");
/* harmony import */ var _views_ui_view_ui_view_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/ui-view/ui-view.component */ "./src/app/views/ui-view/ui-view.component.ts");
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./views/home/home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _games_more_or_less_ui_more_or_less_ui_more_or_less_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./games/more-or-less/ui/more-or-less-ui/more-or-less.component */ "./src/app/games/more-or-less/ui/more-or-less-ui/more-or-less.component.ts");
/* harmony import */ var _views_access_code_login_access_code_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./views/access-code-login/access-code-login.component */ "./src/app/views/access-code-login/access-code-login.component.ts");
/* harmony import */ var _views_game_ui_game_ui_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./views/game-ui/game-ui.component */ "./src/app/views/game-ui/game-ui.component.ts");
/* harmony import */ var _services_global_error_handler__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/global-error-handler */ "./src/app/services/global-error-handler.ts");
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _modules_visualisations_visualisations_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./modules/visualisations/visualisations.module */ "./src/app/modules/visualisations/visualisations.module.ts");































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _views_home_home_component__WEBPACK_IMPORTED_MODULE_24__["HomeComponent"],
            _views_ui_view_ui_view_component__WEBPACK_IMPORTED_MODULE_23__["UiViewComponent"],
            _views_admin_view_admin_view_component__WEBPACK_IMPORTED_MODULE_14__["AdminViewComponent"],
            _views_access_code_login_access_code_login_component__WEBPACK_IMPORTED_MODULE_26__["AccessCodeLoginView"],
            _views_game_ui_game_ui_component__WEBPACK_IMPORTED_MODULE_27__["GameUIView"],
            _components_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_6__["AppFooterComponent"],
            _components_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_21__["AppHeaderComponent"],
            _components_alert_alert_component__WEBPACK_IMPORTED_MODULE_7__["AlertComponent"],
            _games_more_or_less_ui_more_or_less_ui_more_or_less_component__WEBPACK_IMPORTED_MODULE_25__["MoreOrLessComponent"],
            _components_game_over_game_over_component__WEBPACK_IMPORTED_MODULE_15__["GameOverComponent"],
            _components_pre_game_pre_game_component__WEBPACK_IMPORTED_MODULE_16__["PreGameComponent"],
            _components_game_summary_game_summary_component__WEBPACK_IMPORTED_MODULE_17__["GameSummaryComponent"],
            _components_numpad_numpad_component__WEBPACK_IMPORTED_MODULE_19__["NumpadComponent"],
        ],
        exports: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__["FontAwesomeModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_29__["SharedModule"],
            _modules_visualisations_visualisations_module__WEBPACK_IMPORTED_MODULE_30__["VisualisationsModule"],
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], useClass: _inteceptors_add_header_inteceptor_service__WEBPACK_IMPORTED_MODULE_13__["AddHeaderInteceptorService"], multi: true },
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"], useClass: _services_global_error_handler__WEBPACK_IMPORTED_MODULE_28__["GlobalErrorHandler"] },
            _services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
            _services_signal_r_service__WEBPACK_IMPORTED_MODULE_9__["SignalRService"],
            _services_visualisation_data_service__WEBPACK_IMPORTED_MODULE_22__["VisualisationDataService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__["CookieService"],
            _services_guid_service__WEBPACK_IMPORTED_MODULE_12__["GuidService"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/alert/alert.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/alert/alert.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\"\r\n[ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">\r\n{{message.text}}\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/alert/alert.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/alert/alert.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWxlcnQvYWxlcnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/alert/alert.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/alert/alert.component.ts ***!
  \*****************************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");



let AlertComponent = class AlertComponent {
    constructor(alertService) {
        this.alertService = alertService;
    }
    ngOnInit() {
        this.subscription = this.alertService.getMessage().subscribe(message => {
            this.message = message;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'alert',
        template: __webpack_require__(/*! ./alert.component.html */ "./src/app/components/alert/alert.component.html"),
        styles: [__webpack_require__(/*! ./alert.component.scss */ "./src/app/components/alert/alert.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
], AlertComponent);



/***/ }),

/***/ "./src/app/components/app-footer/app-footer.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/app-footer/app-footer.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div ngClass=\"footer\">\r\n  <div>Token details: {{gameTokenDetails}}</div>\r\n  <div>\r\n  <a [routerLink]=\"['/admin']\">\r\n    <span style=\"color: white;\">   Admin  </span>\r\n  </a> \r\n  <a [routerLink]=\"['/viz']\">\r\n    <span style=\"color: white;\">   Viz  </span>\r\n  </a> \r\n  <a [routerLink]=\"['/ui']\">\r\n    <span style=\"color: white;\">   UI  </span>\r\n  </a> \r\n\r\n</div>\r\n  <div style=\"font-size: 2vh;\">Build timestamp: {{getBuildTimeStamp()}}</div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/app-footer/app-footer.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/app-footer/app-footer.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwLWZvb3Rlci9hcHAtZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/app-footer/app-footer.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/app-footer/app-footer.component.ts ***!
  \***************************************************************/
/*! exports provided: AppFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFooterComponent", function() { return AppFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_data_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data-cache.service */ "./src/app/services/data-cache.service.ts");





let AppFooterComponent = class AppFooterComponent {
    constructor(dataCache) {
        this.dataCache = dataCache;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
    }
    ngOnInit() {
        /*
        this.dataCache.EnsureInitialize().then(
          (res) => {
            this.subscriptions.add(
              this.dataCache.accessResult$.subscribe(
                res => {
                  this.gameTokenDetails = res.token;
                }
              )
            );
          }
        );
    */
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    getBuildTimeStamp() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].timeStamp;
    }
};
AppFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! ./app-footer.component.html */ "./src/app/components/app-footer/app-footer.component.html"),
        styles: [__webpack_require__(/*! ./app-footer.component.scss */ "./src/app/components/app-footer/app-footer.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_cache_service__WEBPACK_IMPORTED_MODULE_4__["DataCacheService"]])
], AppFooterComponent);



/***/ }),

/***/ "./src/app/components/app-header/app-header.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/app-header/app-header.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div  ngClass=\"banner\"   >\r\n  <!-- color=\"primary\"\r\n    <button mat-button (click)=\"sidenav.open ()\" ><mat-icon>menu</mat-icon></button>\r\n    -->\r\n   \r\n   \r\n   \r\n    <!--  <span ngClass=\"ApplicationTitle\" >{{ title }} </span>  \r\n    -->\r\n  \r\n    <span ngClass=\"home-button\">\r\n    <a [routerLink]=\"['/']\">\r\n      <span style=\"color: white;\" >   Home  </span>\r\n    </a>  \r\n  \r\n    </span>\r\n  \r\n  </div>"

/***/ }),

/***/ "./src/app/components/app-header/app-header.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/app-header/app-header.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwLWhlYWRlci9hcHAtaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/app-header/app-header.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/app-header/app-header.component.ts ***!
  \***************************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");


// import { DataCacheService } from '../services/data-cache.service';


let AppHeaderComponent = class AppHeaderComponent {
    constructor( /*private dataCache: DataCacheService*/) {
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
    }
    ngOnInit() {
        /*
        this.dataCache.EnsureInitialize().then(
          (res) => {
            this.subscriptions.add(
              this.dataCache.accessResult$.subscribe(
                res => {
                  this.gameTokenDetails = res.token;
                }
              )
            );
          }
        );
    */
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    getBuildTimeStamp() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].timeStamp;
    }
};
AppHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! ./app-header.component.html */ "./src/app/components/app-header/app-header.component.html"),
        styles: [__webpack_require__(/*! ./app-header.component.scss */ "./src/app/components/app-header/app-header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppHeaderComponent);



/***/ }),

/***/ "./src/app/components/game-over/game-over.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/game-over/game-over.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<p>GameOver</p>\r\n\r\n<p>Final score was: {{score}}</p>\r\n\r\n<a [routerLink]=\"['/']\">\r\n  <span>   Home  </span>\r\n</a>  \r\n"

/***/ }),

/***/ "./src/app/components/game-over/game-over.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/game-over/game-over.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1vdmVyL2dhbWUtb3Zlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/game-over/game-over.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/game-over/game-over.component.ts ***!
  \*************************************************************/
/*! exports provided: GameOverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameOverComponent", function() { return GameOverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GameOverComponent = class GameOverComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], GameOverComponent.prototype, "score", void 0);
GameOverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game-over',
        template: __webpack_require__(/*! ./game-over.component.html */ "./src/app/components/game-over/game-over.component.html"),
        styles: [__webpack_require__(/*! ./game-over.component.scss */ "./src/app/components/game-over/game-over.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GameOverComponent);



/***/ }),

/***/ "./src/app/components/game-summary/game-summary.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/game-summary/game-summary.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- \r\n<mat-card >\r\n  <mat-card-header>  \r\n    <mat-card-title >{{gameSummary.name}}</mat-card-title>\r\n    <mat-card-subtitle>{{gameSummary.description}}</mat-card-subtitle>\r\n  </mat-card-header>\r\n \r\n  <mat-card-content>\r\n    <div>Status: {{gameSummary.status}}</div>  -->\r\n<!-- \r\n    <a *ngIf=\"gameSummary.status === 'Online'\" [routerLink]=\"['/AccessCode', gameSummary.id]\">{{gameSummary.name}}</a>      \r\n    \r\n    <strong *ngIf=\"gameSummary.status !== 'Online'\">Game Not Active</strong> - \r\n    -->\r\n    <!-- \r\n    <div>(Last Contact  {{gameSummary.lastContactDate}} )</div>\r\n  </mat-card-content>\r\n  <mat-card-actions class=\"action-buttons\">\r\n    <a *ngIf=\"gameSummary.status === 'Online'\" \r\n      mat-button color=\"primary\" \r\n      [routerLink]=\"['/AccessCode', gameSummary.id]\" > \r\n      {{gameSummary?.name}}\r\n    </a>\r\n\r\n    <strong *ngIf=\"gameSummary.status !== 'Online'\">Game Not Active</strong>\r\n\r\n  </mat-card-actions>\r\n</mat-card>  -->\r\n\r\n<div ngClass=\"summaryTile\">\r\n  <div ngClass=\"summaryTitle\">{{gameSummary.name}}</div>\r\n\r\n  <div ngClass=\"summarySubTitle\">{{gameSummary.description}}</div>\r\n\r\n  <div>Status: {{gameSummary.status}}</div>\r\n\r\n  <div>(Last Contact  {{gameSummary.lastContactDate}} )</div>\r\n\r\n  <a *ngIf=\"isReadyToPlay() === true\" \r\n      mat-button color=\"primary\" \r\n      [routerLink]=\"['/AccessCode', gameSummary.id]\" > \r\n      {{gameSummary?.name}}\r\n    </a>\r\n\r\n  <strong *ngIf=\"isReadyToPlay() === false\">Game Not Active</strong>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/game-summary/game-summary.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/game-summary/game-summary.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".summaryTile {\n  font-size: 2vh;\n  margin: 1vw;\n  border-radius: 2vw;\n  border: 3px solid red; }\n\n.summaryTitle {\n  font-size: 4vh; }\n\n.summarySubTitle {\n  font-size: 3vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYW1lLXN1bW1hcnkvRDpcXF9EYXRhXFxQcml2YXRlQ29kZVxcX2dpdFB6ZUtubVxcVHJlYXN1cmVIdW50XFxBbmd1bGFyU1BBXFxTYW5kZ2F0ZVRIL3NyY1xcYXBwXFxjb21wb25lbnRzXFxnYW1lLXN1bW1hcnlcXGdhbWUtc3VtbWFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dhbWUtc3VtbWFyeS9nYW1lLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG5cclxuXHJcbi5zdW1tYXJ5VGlsZSB7XHJcbiAgZm9udC1zaXplOiAydmg7XHJcbiAgbWFyZ2luOiAxdnc7XHJcbiAgYm9yZGVyLXJhZGl1czogMnZ3O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkIHJlZDsgXHJcbn1cclxuXHJcbi5zdW1tYXJ5VGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogNHZoOyAgXHJcbn1cclxuXHJcbi5zdW1tYXJ5U3ViVGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogM3ZoOyAgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/game-summary/game-summary.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/game-summary/game-summary.component.ts ***!
  \*******************************************************************/
/*! exports provided: GameSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameSummaryComponent", function() { return GameSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_model_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/model/game */ "./src/app/shared/model/game.ts");



let GameSummaryComponent = class GameSummaryComponent {
    constructor() {
        this.gameSummary = {
            id: 'dummyId',
            name: 'dummyName',
            description: 'dummyName',
            status: 'dummyName',
            lastContactDate: new Date(),
        };
    }
    ngOnInit() {
    }
    isReadyToPlay() {
        if (this.gameSummary.status === 'Online_Ready' ||
            this.gameSummary.status === 'Online_Demo' ||
            this.gameSummary.status === 'Online_Dormant')
            return true;
        return false;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_shared_model_game__WEBPACK_IMPORTED_MODULE_2__["GameDto"])
], GameSummaryComponent.prototype, "gameSummary", void 0);
GameSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game-summary',
        template: __webpack_require__(/*! ./game-summary.component.html */ "./src/app/components/game-summary/game-summary.component.html"),
        styles: [__webpack_require__(/*! ./game-summary.component.scss */ "./src/app/components/game-summary/game-summary.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GameSummaryComponent);



/***/ }),

/***/ "./src/app/components/numpad/numpad.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/numpad/numpad.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div  ngClass=\"container\" >\r\n  <div ngClass=\"row\" style=\"align-items: center; background-color: rgb(245, 200, 81);\"  >\r\n    <div ngClass=\"code\">{{text}}</div>\r\n  </div>\r\n  <div ngClass=\"row\">\r\n    <button ngClass=\"digitButton\" (click)=\"pushButton('1')\">1</button>\r\n    <button ngClass=\"digitButton\" (click)=\"pushButton('2')\">2</button>\r\n    <button ngClass=\"digitButton\" (click)=\"pushButton('3')\">3</button>\r\n  </div>\r\n  <div ngClass=\"row\">\r\n    <button ngClass=\"digitButton\" (click)=\"pushButton('4')\">4</button>\r\n    <button ngClass=\"digitButton\" (click)=\"pushButton('5')\">5</button>\r\n    <button ngClass=\"digitButton\" (click)=\"pushButton('6')\">6</button>\r\n  </div>\r\n  <div ngClass=\"row\">\r\n    <button ngClass=\"digitButton\" (click)=\"pushButton('7')\">7</button>\r\n    <button ngClass=\"digitButton\" (click)=\"pushButton('8')\">8</button>\r\n    <button ngClass=\"digitButton\" (click)=\"pushButton('9')\">9</button>\r\n  </div>\r\n  <div ngClass=\"row\">\r\n    <button ngClass=\"digitButton\" (click)=\"pushButton('')\" disabled=\"true\" ></button>\r\n    <button ngClass=\"digitButton\" (click)=\"pushButton('0')\">0</button>\r\n    <button ngClass=\"digitButton\" (click)=\"pushButton('B')\"><fa-icon [icon]=\"iconBackSpace\"></fa-icon></button>\r\n  </div>\r\n  <div ngClass=\"row\"   >\r\n    <button ngClass=\"enterButton\" (click)=\"pushButton('E')\" [disabled]= \"isEnterDisabled()\"><fa-icon [icon]=\"iconEnter\"></fa-icon></button>\r\n  </div> \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/numpad/numpad.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/numpad/numpad.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column; }\n\n.row {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  min-height: 6vh; }\n\n.code {\n  text-align: center;\n  font-size: 10vw;\n  min-height: 7vh; }\n\n.digitButton {\n  display: block;\n  width: 33%;\n  font-size: 10vw; }\n\n.enterButton {\n  display: block;\n  width: 100%;\n  font-size: 10vw;\n  color: lime; }\n\n.enterButton:disabled {\n  color: #C6C6C6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9udW1wYWQvRDpcXF9EYXRhXFxQcml2YXRlQ29kZVxcX2dpdFB6ZUtubVxcVHJlYXN1cmVIdW50XFxBbmd1bGFyU1BBXFxTYW5kZ2F0ZVRIL3NyY1xcYXBwXFxjb21wb25lbnRzXFxudW1wYWRcXG51bXBhZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBRTdCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxjQUFjO0VBQ2QsVUFBUztFQUNULGVBQWUsRUFBQTs7QUFHakI7RUFDRSxjQUFjO0VBQ2QsV0FBVTtFQUNWLGVBQWU7RUFDZixXQUFvQixFQUFBOztBQUd0QjtFQUNFLGNBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbnVtcGFkL251bXBhZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4vLyAgaGVpZ2h0OiAxNyU7XHJcbiAgbWluLWhlaWdodDogNnZoO1xyXG59XHJcblxyXG4uY29kZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTB2dztcclxuICBtaW4taGVpZ2h0OiA3dmg7XHJcbn1cclxuXHJcbi5kaWdpdEJ1dHRvbntcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDozMyU7XHJcbiAgZm9udC1zaXplOiAxMHZ3O1xyXG59XHJcblxyXG4uZW50ZXJCdXR0b257XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBmb250LXNpemU6IDEwdnc7XHJcbiAgY29sb3I6cmdiKDAsIDI1NSwgMCk7XHJcbn1cclxuXHJcbi5lbnRlckJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgY29sb3I6I0M2QzZDNjtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/numpad/numpad.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/numpad/numpad.component.ts ***!
  \*******************************************************/
/*! exports provided: NumpadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumpadComponent", function() { return NumpadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



let NumpadComponent = class NumpadComponent {
    constructor() {
        /** number of digits in code, after which the "enter" button will be enabled */
        this.codeLength = 4;
        /** after how many chars to auto emit the text. 0 means don't */
        this.autoEnterLength = 0;
        this.textEntered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.text = ' ';
        this.iconEnter = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCheck"];
        this.iconBackSpace = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faBackspace"];
    }
    ngOnInit() {
        this.text = '';
    }
    pushButton(s) {
        if (s == 'B') {
            if (this.text.length > 0) {
                this.text = this.text.substr(0, this.text.length - 1);
            }
            return;
        }
        if (s == 'E' && this.text.length > 0) {
            this.textEntered.emit(this.text);
            return;
        }
        this.text += s;
        if (this.autoEnterLength > 0 && this.text.length === this.autoEnterLength) {
            this.textEntered.emit(this.text);
        }
    }
    reset() {
        this.text = '';
    }
    isEnterDisabled() {
        if (this.codeLength === 0) {
            return false;
        }
        return (this.text.length !== this.codeLength);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], NumpadComponent.prototype, "codeLength", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], NumpadComponent.prototype, "autoEnterLength", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NumpadComponent.prototype, "textEntered", void 0);
NumpadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-numpad',
        template: __webpack_require__(/*! ./numpad.component.html */ "./src/app/components/numpad/numpad.component.html"),
        styles: [__webpack_require__(/*! ./numpad.component.scss */ "./src/app/components/numpad/numpad.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NumpadComponent);



/***/ }),

/***/ "./src/app/components/pre-game/pre-game.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/pre-game/pre-game.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <p>\r\n    We're ready to go!\r\n  </p>\r\n\r\n  <p>When you're ready too, Press \"START\"!</p>\r\n\r\n  <button id=\"startButton\" (click)=\"doCommand('BeginGame')\">START!</button>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/pre-game/pre-game.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/pre-game/pre-game.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#startButton {\n  width: 100%;\n  height: 40vw;\n  border-radius: 1vw;\n  border: 3px solid #e01b22;\n  font-size: 8vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmUtZ2FtZS9EOlxcX0RhdGFcXFByaXZhdGVDb2RlXFxfZ2l0UHplS25tXFxUcmVhc3VyZUh1bnRcXEFuZ3VsYXJTUEFcXFNhbmRnYXRlVEgvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHByZS1nYW1lXFxwcmUtZ2FtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQVBzQztFQVF0QyxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3ByZS1nYW1lL3ByZS1nYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4kbGFiZWxIaWdobGlnaHRCb3JkZXJDb2w6IHJnYigyMjQsMjcsMzQpO1xyXG5cclxuXHJcbiNzdGFydEJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEwMCU7ICBcclxuICBoZWlnaHQ6IDQwdnc7XHJcbiAgYm9yZGVyLXJhZGl1czogMXZ3O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICRsYWJlbEhpZ2hsaWdodEJvcmRlckNvbDtcclxuICBmb250LXNpemU6IDh2aDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/pre-game/pre-game.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/pre-game/pre-game.component.ts ***!
  \***********************************************************/
/*! exports provided: PreGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreGameComponent", function() { return PreGameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PreGameComponent = class PreGameComponent {
    constructor() {
        this.command = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    doCommand(cmd) {
        this.command.emit(cmd);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PreGameComponent.prototype, "command", void 0);
PreGameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pre-game',
        template: __webpack_require__(/*! ./pre-game.component.html */ "./src/app/components/pre-game/pre-game.component.html"),
        styles: [__webpack_require__(/*! ./pre-game.component.scss */ "./src/app/components/pre-game/pre-game.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PreGameComponent);



/***/ }),

/***/ "./src/app/games/more-or-less/ui/more-or-less-ui/more-or-less.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/games/more-or-less/ui/more-or-less-ui/more-or-less.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"moreOrLessGameUI\">\r\n\r\n  <div id=\"scoreWrapper\">\r\n    <div>Score: </div>\r\n    <div id=\"scoreValue\" >{{score}}</div>    \r\n  </div>   \r\n\r\n  <div id=\"buttonWrapper\"  >\r\n    <app-more-or-less-button [isMin]=true   type=\"DecLo\" (command)=\"doCommand('DecLo')\" ></app-more-or-less-button>        \r\n    <app-more-or-less-button [isMin]=true  type=\"IncLo\" (command)=\"doCommand('IncLo')\" ></app-more-or-less-button>\r\n    <div style=\"margin:1vw\"  > </div>\r\n    <app-more-or-less-button [isMin]=false  type=\"DecHi\" (command)=\"doCommand('DecHi')\" ></app-more-or-less-button>  \r\n    <app-more-or-less-button [isMin]=false  type=\"IncHi\" (command)=\"doCommand('IncHi')\" ></app-more-or-less-button>\r\n  </div>  \r\n\r\n  <div id=\"answerWrapper\">\r\n    <button id=\"answerButton\" (click)=\"doCommand('AcceptAnswer')\">Answer</button> \r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/games/more-or-less/ui/more-or-less-ui/more-or-less.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/games/more-or-less/ui/more-or-less-ui/more-or-less.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n$range-marker-gradientmin1: #ffffff;\r\n$range-marker-gradientmin2: #ffc040;\r\n$range-marker-gradientmin3: #ff8040;\r\n$range-marker-gradientmin4: #000000;\r\n\r\n\r\n$range-marker-gradientmax1: #ffffff;\r\n$range-marker-gradientmax2: #87a77f;\r\n$range-marker-gradientmax3: #dcfdf0;\r\n$range-marker-gradientmax4: #000000;\r\n*/\n/*\r\n$range-marker-gradient1: #ffffff;\r\n$range-marker-gradient2: #4d40ff;\r\n$range-marker-gradient3: #ff40a6;\r\n$range-marker-gradient4: #000000;\r\n*/\n#moreOrLessGameUI {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n#scoreWrapper {\n  display: flex;\n  flex-direction: row;\n  place-content: space-evenly;\n  width: 90vw; }\n#scoreValue {\n  width: 20vw;\n  background-color: white;\n  border-radius: 1vw;\n  border: 3px solid #ea1881; }\n#buttonWrapper {\n  margin-top: 10vh;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: 90vw;\n  height: 10vh; }\n#answerWrapper {\n  margin-top: 10vh;\n  display: flex;\n  flex-direction: row;\n  place-content: space-evenly;\n  width: 90vw; }\n#answerButton {\n  width: 100%;\n  height: 20vw;\n  font-size: 5vh;\n  border-radius: 1vw; }\n/*\r\n.moreOrLessButton {\r\n  width: 20vw;\r\n  height: 20vw;\r\n  font-size: 8vh;\r\n  margin: 1vw;\r\n  border-radius: 1vw;\r\n  border: 3px solid $labelBorderCol; \r\n}\r\n\r\n*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZXMvbW9yZS1vci1sZXNzL3VpL21vcmUtb3ItbGVzcy11aS9EOlxcX0RhdGFcXFByaXZhdGVDb2RlXFxfZ2l0UHplS25tXFxUcmVhc3VyZUh1bnRcXEFuZ3VsYXJTUEFcXFNhbmRnYXRlVEgvc3JjXFxhcHBcXHN0eWxlc1xcbW9yZS1vci1sZXNzLWNvbG91cnMuc2NzcyIsInNyYy9hcHAvZ2FtZXMvbW9yZS1vci1sZXNzL3VpL21vcmUtb3ItbGVzcy11aS9tb3JlLW9yLWxlc3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2dhbWVzL21vcmUtb3ItbGVzcy91aS9tb3JlLW9yLWxlc3MtdWkvRDpcXF9EYXRhXFxQcml2YXRlQ29kZVxcX2dpdFB6ZUtubVxcVHJlYXN1cmVIdW50XFxBbmd1bGFyU1BBXFxTYW5kZ2F0ZVRIL3NyY1xcYXBwXFxnYW1lc1xcbW9yZS1vci1sZXNzXFx1aVxcbW9yZS1vci1sZXNzLXVpXFxtb3JlLW9yLWxlc3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNENBOzs7Ozs7Ozs7OztDQ2pDQztBRDZDRDs7Ozs7Q0N2Q0M7QUNaRDtFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CLEVBQUE7QUFJckI7RUFFRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDJCQUEyQjtFQUMzQixXQUFVLEVBQUE7QUFHWjtFQUNFLFdBQVU7RUFDVix1QkZsQnlDO0VFbUJ6QyxrQkFBa0I7RUFDbEIseUJGbkJvQyxFQUFBO0FFc0J0QztFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFpQjtFQUNqQixXQUFVO0VBQ1YsWUFDRixFQUFBO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiwyQkFBMkI7RUFDM0IsV0FBVSxFQUFBO0FBR1o7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTtBQUtwQjs7Ozs7Ozs7OztDRFlDIiwiZmlsZSI6InNyYy9hcHAvZ2FtZXMvbW9yZS1vci1sZXNzL3VpL21vcmUtb3ItbGVzcy11aS9tb3JlLW9yLWxlc3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcGxhY2Ugd2hlcmUgdGhlIGNvbG9yIHNjaGVtZSBmb3IgdGhlIG5vbi1nYW1lIHBhcnRzIG9mIHRoZSBhcHBcclxuXHJcbi8vIFxyXG4vLyBodHRwczovL215Y29sb3Iuc3BhY2UvP2hleD0lMjNCRDIyMkUmc3ViPTFcclxuXHJcbiRzY29yZS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiRzY29yZS1ib3JkZXItY29sb3I6IHJnYigyMzQsIDI0LCAxMjkpO1xyXG5cclxuXHJcbiRyYW5nZS1zZWxlY3Rvci1iYWNrZ3JvdW5kLWZpbGwtY29sb3I6ICNkNmY0ZmY7XHJcbiRyYW5nZS1zZWxlY3Rvci1iYWNrZ3JvdW5kLXN0cm9rZS1jb2xvcjogIzVkN2E5ODtcclxuXHJcbiRyYW5nZS1zZWxlY3Rvci1zbGlkZXItZmlsbC1jb2xvcjogcmdiKDgwLDgwLDgwKTtcclxuJHJhbmdlLXNlbGVjdG9yLXNsaWRlci1zdHJva2UtY29sb3I6ICNiZDIyMmU7XHJcblxyXG4vLyBUb3Agcm93IHN0YXRpYyBsYWJlbHNcclxuJHJhbmdlLXNlbGVjdG9yLW1pbm1heC1maWxsLWNvbG9yOiAjYmZhNWEyO1xyXG4kcmFuZ2Utc2VsZWN0b3ItbWlubWF4LXN0cm9rZS1jb2xvcjogIzVkN2E5ODtcclxuXHJcbi8vIE1vdmluZyBsYWJlbHNcclxuJHJhbmdlLXNlbGVjdG9yLWxhYmVsLWZpbGwtY29sb3I6ICM2NWIxZjM7XHJcbiRyYW5nZS1zZWxlY3Rvci1sYWJlbC1zdHJva2UtY29sb3I6ICM1ZDdhOTg7XHJcblxyXG4vLyBhbnN3ZXIgc2hhcGVcclxuJHJhbmdlLXNlbGVjdG9yLWFuc3dlci1maWxsLWNvbG9yOiAjNzZhMjE4O1xyXG4kcmFuZ2Utc2VsZWN0b3ItYW5zd2VyLXN0cm9rZS1jb2xvcjogIzNmNmUwMDtcclxuXHJcblxyXG5cclxuXHJcbiRyYW5nZS1zZWxlY3Rvci1iYWxsLWZpbGwtY29sb3I6ICNiY2QxNDQ7XHJcbiRyYW5nZS1zZWxlY3Rvci1iYWxsLXN0cm9rZS1jb2xvcjogIzBlMTU1MztcclxuXHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4xOiAjZmZmZmZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMjogcmdiKDI1NCwgMjQ1LCAxNzApO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMzogcmdiKDIxMSwgMTYzLCA5NCk7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW40OiAjMDAwMDAwO1xyXG5cclxuXHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgxOiAjZmZmZmZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MjogcmdiKDI1MiwgMjI0LCAxODUpO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MzogcmdiKDE1MSwgMTIwLCA5Myk7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXg0OiAjMDAwMDAwO1xyXG5cclxuLypcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjE6ICNmZmZmZmY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4yOiAjZmZjMDQwO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMzogI2ZmODA0MDtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjQ6ICMwMDAwMDA7XHJcblxyXG5cclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDE6ICNmZmZmZmY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgyOiAjODdhNzdmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MzogI2RjZmRmMDtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDQ6ICMwMDAwMDA7XHJcbiovXHJcbi8qXHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnQxOiAjZmZmZmZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50MjogIzRkNDBmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudDM6ICNmZjQwYTY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnQ0OiAjMDAwMDAwO1xyXG4qL1xyXG5cclxuXHJcblxyXG4iLCIvKlxyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMTogI2ZmZmZmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjI6ICNmZmMwNDA7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4zOiAjZmY4MDQwO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluNDogIzAwMDAwMDtcclxuXHJcblxyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MTogI2ZmZmZmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDI6ICM4N2E3N2Y7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgzOiAjZGNmZGYwO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4NDogIzAwMDAwMDtcclxuKi9cbi8qXHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnQxOiAjZmZmZmZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50MjogIzRkNDBmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudDM6ICNmZjQwYTY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnQ0OiAjMDAwMDAwO1xyXG4qL1xuI21vcmVPckxlc3NHYW1lVUkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG5cbiNzY29yZVdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwbGFjZS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHdpZHRoOiA5MHZ3OyB9XG5cbiNzY29yZVZhbHVlIHtcbiAgd2lkdGg6IDIwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxdnc7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNlYTE4ODE7IH1cblxuI2J1dHRvbldyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAxMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA5MHZ3O1xuICBoZWlnaHQ6IDEwdmg7IH1cblxuI2Fuc3dlcldyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAxMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwbGFjZS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIHdpZHRoOiA5MHZ3OyB9XG5cbiNhbnN3ZXJCdXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMHZ3O1xuICBmb250LXNpemU6IDV2aDtcbiAgYm9yZGVyLXJhZGl1czogMXZ3OyB9XG5cbi8qXHJcbi5tb3JlT3JMZXNzQnV0dG9uIHtcclxuICB3aWR0aDogMjB2dztcclxuICBoZWlnaHQ6IDIwdnc7XHJcbiAgZm9udC1zaXplOiA4dmg7XHJcbiAgbWFyZ2luOiAxdnc7XHJcbiAgYm9yZGVyLXJhZGl1czogMXZ3O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICRsYWJlbEJvcmRlckNvbDsgXHJcbn1cclxuXHJcbiovXG4iLCJcclxuXHJcblxyXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzL21vcmUtb3ItbGVzcy1jb2xvdXJzLnNjc3NcIjtcclxuXHJcbiNtb3JlT3JMZXNzR2FtZVVJIHtcclxuIC8vIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kQ29sO1xyXG4gIGRpc3BsYXk6IGZsZXg7IFxyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbiNzY29yZVdyYXBwZXIge1xyXG4gIFxyXG4gIGRpc3BsYXk6IGZsZXg7ICBcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHBsYWNlLWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB3aWR0aDo5MHZ3OyAgXHJcbn1cclxuXHJcbiNzY29yZVZhbHVlIHtcclxuICB3aWR0aDoyMHZ3OyBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2NvcmUtYmFja2dyb3VuZC1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAxdnc7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgJHNjb3JlLWJvcmRlci1jb2xvcjtcclxufVxyXG5cclxuI2J1dHRvbldyYXBwZXIge1xyXG4gIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgZGlzcGxheTogZmxleDsgXHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTsgXHJcbiAgd2lkdGg6OTB2dzsgXHJcbiAgaGVpZ2h0OjEwdmhcclxufVxyXG5cclxuI2Fuc3dlcldyYXBwZXIge1xyXG4gIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgZGlzcGxheTogZmxleDsgIFxyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgcGxhY2UtY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIHdpZHRoOjkwdnc7IFxyXG59XHJcblxyXG4jYW5zd2VyQnV0dG9uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwdnc7XHJcbiAgZm9udC1zaXplOiA1dmg7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDF2dztcclxuIC8vIGJvcmRlcjogM3B4IHNvbGlkICRsYWJlbEhpZ2hsaWdodEJvcmRlckNvbDtcclxufVxyXG5cclxuXHJcbi8qXHJcbi5tb3JlT3JMZXNzQnV0dG9uIHtcclxuICB3aWR0aDogMjB2dztcclxuICBoZWlnaHQ6IDIwdnc7XHJcbiAgZm9udC1zaXplOiA4dmg7XHJcbiAgbWFyZ2luOiAxdnc7XHJcbiAgYm9yZGVyLXJhZGl1czogMXZ3O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICRsYWJlbEJvcmRlckNvbDsgXHJcbn1cclxuXHJcbiovICJdfQ== */"

/***/ }),

/***/ "./src/app/games/more-or-less/ui/more-or-less-ui/more-or-less.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/games/more-or-less/ui/more-or-less-ui/more-or-less.component.ts ***!
  \*********************************************************************************/
/*! exports provided: MoreOrLessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreOrLessComponent", function() { return MoreOrLessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MoreOrLessComponent = class MoreOrLessComponent {
    constructor() {
        this.score = 0;
        this.command = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    doCommand(cmd) {
        this.command.emit(cmd);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], MoreOrLessComponent.prototype, "score", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MoreOrLessComponent.prototype, "command", void 0);
MoreOrLessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-more-or-less',
        template: __webpack_require__(/*! ./more-or-less.component.html */ "./src/app/games/more-or-less/ui/more-or-less-ui/more-or-less.component.html"),
        styles: [__webpack_require__(/*! ./more-or-less.component.scss */ "./src/app/games/more-or-less/ui/more-or-less-ui/more-or-less.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MoreOrLessComponent);



/***/ }),

/***/ "./src/app/inteceptors/add-header-inteceptor.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/inteceptors/add-header-inteceptor.service.ts ***!
  \**************************************************************/
/*! exports provided: AddHeaderInteceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHeaderInteceptorService", function() { return AddHeaderInteceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data-cache.service */ "./src/app/services/data-cache.service.ts");



let AddHeaderInteceptorService = class AddHeaderInteceptorService {
    constructor(srvDataCache) {
        this.srvDataCache = srvDataCache;
    }
    intercept(request, next) {
        // Clone the request to add the new header.
        const authReq = request.clone({
            headers: request.headers.set('TreasureHuntUserID', this.srvDataCache.userId)
        });
        return next.handle(authReq);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"];
    }
};
AddHeaderInteceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_cache_service__WEBPACK_IMPORTED_MODULE_2__["DataCacheService"]])
], AddHeaderInteceptorService);



/***/ }),

/***/ "./src/app/modules/shared/countdown/countdown.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/modules/shared/countdown/countdown.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Add a comment here   -->\r\n\r\n<!-- preserveAspectRatio=\"none\"  -->\r\n  <svg height=\"100%\" width=\"100%\" [attr.viewBox.]=\"getViewbox()\" >\r\n\r\n    <!-- just mark the outside for debugging\r\n    <rect id=\"outside\" x=\"0\" y=\"0\" \r\n    [attr.width.]=\"controlWidth\" [attr.height.]=\"controlHeight\" />-->\r\n\r\n    <!-- Grey outline  -->  \r\n    <path id=\"outline\" [attr.d.]=\"getOutlinePath()\" \r\n        [attr.stroke-width.]=\"strokeWidthOutline\"                /> \r\n \r\n    <!-- Remaining total  --> \r\n    <path id=\"remainingTotal\" [attr.d.]=\"getRemainingTotalPath()\"\r\n    [attr.stroke-width.]=\"strokeWidthRemaining\"  /> \r\n\r\n    <!-- Remaining question  --> \r\n    <path id=\"remainingQuestion\" [attr.d.]=\"getRemainingQuestionPath()\"\r\n    [attr.stroke-width.]=\"strokeWidthRemaining\"  />  \r\n  </svg> \r\n"

/***/ }),

/***/ "./src/app/modules/shared/countdown/countdown.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/shared/countdown/countdown.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#outside {\n  stroke-width: 0;\n  stroke: black;\n  fill: #37e07d; }\n\n#outline {\n  stroke: grey;\n  fill: #d6f4ff; }\n\n#remainingTotal {\n  stroke: black;\n  fill: #7fb0e1; }\n\n#remainingQuestion {\n  stroke: black;\n  fill: #5d7a98; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY291bnRkb3duL0Q6XFxfRGF0YVxcUHJpdmF0ZUNvZGVcXF9naXRQemVLbm1cXFRyZWFzdXJlSHVudFxcQW5ndWxhclNQQVxcU2FuZGdhdGVUSC9zcmNcXGFwcFxcbW9kdWxlc1xcc2hhcmVkXFxjb3VudGRvd25cXGNvdW50ZG93bi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY291bnRkb3duL0Q6XFxfRGF0YVxcUHJpdmF0ZUNvZGVcXF9naXRQemVLbm1cXFRyZWFzdXJlSHVudFxcQW5ndWxhclNQQVxcU2FuZGdhdGVUSC9zcmNcXGFwcFxcc3R5bGVzXFxnZW5lcmFsLWNvbG91cnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNFLGVBQWU7RUFDZixhQUFrQjtFQUNsQixhQUF1QixFQUFBOztBQUt6QjtFQUNFLFlDTm1DO0VET25DLGFDTm9DLEVBQUE7O0FEV3RDO0VBQ0UsYUNYMkM7RURZM0MsYUNYc0MsRUFBQTs7QURleEM7RUFDRSxhQ2YwQztFRGdCMUMsYUNmcUMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvdW50ZG93bi9jb3VudGRvd24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi8vLy8gQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3MnO1xyXG5cclxuLy9AaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMuc2Nzcyc7XHJcblxyXG5AaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvZ2VuZXJhbC1jb2xvdXJzLnNjc3MnO1xyXG5cclxuLy8ganVzdCBzaG93IHRoZSBjb250cm9sIG91dGxpbmUgZm9yIGRlYnVnZ2luZ1xyXG4jb3V0c2lkZSB7XHJcbiAgc3Ryb2tlLXdpZHRoOiAwO1xyXG4gIHN0cm9rZTogcmdiKDAsMCwwKTtcclxuICBmaWxsOiByZ2IoNTUsIDIyNCwgMTI1KTtcclxufVxyXG5cclxuXHJcbi8vIFRoZSBncmV5IG91dGxpbmUgZm9yIHRoZSBiYXIgc28geW91IHNlZSBob3cgYmlnIGl0IGlzIGluIHRvdGFsXHJcbiNvdXRsaW5lIHtcclxuICBzdHJva2U6ICRjb3VudGRvd24tb3V0bGluZS1zdHJva2UtY29sb3I7XHJcbiAgZmlsbDogJGNvdW50ZG93bi1vdXRsaW5lLWZpbGwtY29sb3I7XHJcbn1cclxuXHJcblxyXG4vLyBIb3cgbXVjaCBpcyByZW1haW5pbmdcclxuI3JlbWFpbmluZ1RvdGFsIHtcclxuICBzdHJva2U6ICRjb3VudGRvd24tcmVtYWluaW5nLXN0cm9rZS1jb2xvcjtcclxuICBmaWxsOiAkY291bnRkb3duLXJlbWFpbmluZy1maWxsLWNvbG9yO1xyXG59XHJcblxyXG4vLyBTaG93cyB3aGVuIHRoZSBjdXJyZW50IHF1ZXN0aW9uIHdpbGwgYmUgYXV0by1hbnN3ZXJlZFxyXG4jcmVtYWluaW5nUXVlc3Rpb24ge1xyXG4gIHN0cm9rZTogJGNvdW50ZG93bi1xdWVzdGlvbi1zdHJva2UtY29sb3I7XHJcbiAgZmlsbDogJGNvdW50ZG93bi1xdWVzdGlvbi1maWxsLWNvbG9yO1xyXG59XHJcblxyXG5cclxuIiwiLy8gVGhlIHBsYWNlIHdoZXJlIHRoZSBjb2xvciBzY2hlbWUgZm9yIHRoZSBub24tZ2FtZSBwYXJ0cyBvZiB0aGUgYXBwXHJcblxyXG5cclxuJGJvZHktYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuJGJhbm5lci1iYWNrZ3JvdW5kLWNvbG9yOiAjMGMwZDNhO1xyXG5cclxuXHJcblxyXG4kbWVzc2FnZS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjA5LCAxMDYsIDEwNik7XHJcblxyXG5cclxuXHJcbiRjb3VudGRvd24tb3V0bGluZS1zdHJva2UtY29sb3I6IGdyZXk7XHJcbiRjb3VudGRvd24tb3V0bGluZS1maWxsLWNvbG9yOiAjZDZmNGZmO1xyXG4kY291bnRkb3duLXJlbWFpbmluZy1zdHJva2UtY29sb3I6IHJnYigwLDAsMCk7XHJcbiRjb3VudGRvd24tcmVtYWluaW5nLWZpbGwtY29sb3I6ICM3ZmIwZTE7XHJcbiRjb3VudGRvd24tcXVlc3Rpb24tc3Ryb2tlLWNvbG9yOiByZ2IoMCwwLDApO1xyXG4kY291bnRkb3duLXF1ZXN0aW9uLWZpbGwtY29sb3I6ICM1ZDdhOTg7XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/shared/countdown/countdown.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/shared/countdown/countdown.component.ts ***!
  \*****************************************************************/
/*! exports provided: Countdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countdown", function() { return Countdown; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Countdown = class Countdown {
    constructor() {
        this.totalSecs = 60;
        this.remainingSecs = 0;
        this.remainingQuestionSecs = 0;
        // The Height of the control
        this.controlHeight = 10;
        this.controlWidth = 500;
        // The "dead space" at the terminus of each end
        this.endcapRadius = (this.controlHeight / 2);
        // The width of the perimeter
        this.strokeWidthOutline = 1.0;
        // The width of the "remaining" bar
        this.strokeWidthRemaining = 0.0;
    }
    ngOnInit() {
    }
    getViewbox() {
        return '0, 0, ' + this.controlWidth.toString() + ', ' + this.controlHeight.toString();
    }
    getRealWorldBarLength(value) {
        const effectiveWidth = (this.controlWidth - (this.endcapRadius * 2));
        let val = (effectiveWidth / this.totalSecs) * value;
        if (val < 0) {
            val = 0;
        }
        return val;
    }
    // returns the length of the bar that represents the remaininf seconds
    getRemainingWidth() {
        return this.getRealWorldBarLength(this.remainingSecs);
    }
    getQuestionXPos() {
        let pos = this.getRealWorldBarLength(this.remainingSecs - this.remainingQuestionSecs);
        if (pos < 0) {
            pos = 0;
        }
        return pos;
    }
    getQuestionWidth() {
        return this.getRealWorldBarLength(this.remainingQuestionSecs);
    }
    getOutlinePath() {
        const offset = (this.controlHeight / 2);
        return this.getOvalPath(offset, this.strokeWidthOutline, 0, this.controlWidth - (this.endcapRadius * 2));
    }
    getRemainingTotalPath() {
        const offset = (this.controlHeight / 2) - this.strokeWidthOutline;
        return this.getOvalPath(offset, this.strokeWidthRemaining, 0, this.getRemainingWidth());
    }
    getRemainingQuestionPath() {
        const offset = (this.controlHeight / 2) - this.strokeWidthOutline;
        return this.getOvalPath(offset, this.strokeWidthRemaining, this.getQuestionXPos(), this.getQuestionWidth());
    }
    // The centre of the half cicles is always (5, 5) and (95, 5).
    // perimeterOffset is the distance from the middle (y = 5) to the outside of the stroke.
    // strokeWidth will be drawn inside of the perimeter
    // length excludes 2 radii, so length should be > 0 and < 90
    getOvalPath(perimeterOffset, strokeWidth, start, length) {
        if (length === 0) {
            return '';
        }
        const ht = (this.endcapRadius - perimeterOffset) + strokeWidth / 2;
        const r = perimeterOffset - (strokeWidth / 2);
        const aStub = ' A ' + r + ',' + r + ' 0 0 0 ';
        const l = length;
        const s = 'M ' + (start + this.endcapRadius).toString() + ',' + ht +
            aStub + ' ' + (start + ht).toString() + ',5' +
            aStub + ' ' + (start + 5).toString() + ',' + (10 - ht).toString() +
            ' H ' + (start + this.endcapRadius + l).toString() +
            aStub + ' ' + (start + this.endcapRadius + l + r).toString() + ',5' +
            aStub + ' ' + (start + this.endcapRadius + l).toString() + ',' + ht +
            ' Z';
        return s;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], Countdown.prototype, "totalSecs", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], Countdown.prototype, "remainingSecs", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], Countdown.prototype, "remainingQuestionSecs", void 0);
Countdown = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-countdown',
        template: __webpack_require__(/*! ./countdown.component.html */ "./src/app/modules/shared/countdown/countdown.component.html"),
        styles: [__webpack_require__(/*! ./countdown.component.scss */ "./src/app/modules/shared/countdown/countdown.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Countdown);



/***/ }),

/***/ "./src/app/modules/shared/frame-text/frame-text.html":
/*!***********************************************************!*\
  !*** ./src/app/modules/shared/frame-text/frame-text.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n    <svg width=\"100%\" height=\"100%\"  [attr.viewBox.]=\"getViewbox()\" >\r\n      <defs>\r\n        <!--  \r\n          x, y, width and height of pattern set the area that will be one pattern \"stamp\".\r\n          Within this stamp, the viewbox coord reigns. It should be large\r\n          enough to accomodate the svg from the file, else the svg will be clipped.\r\n          To make the svg scale up bigger, use a larger width and height.\r\n        -->\r\n\r\n          <!-- Checkerplate-->\r\n          <pattern [attr.id.]=\"getCheckerplateId()\" x=\"0\" y=\"0\" width=\"40\" height=\"40\" \r\n              viewBox=\"0 0 10 10\"  patternUnits=\"userSpaceOnUse\">                 \r\n            <rect x=\"0\" y=\"0\" width=\"10\" height=\"10\" [attr.fill.]=\"getFillColour()\"></rect>              \r\n            <g transform=\"matrix(.99471 .99471 -.70328 .70328 205.06 -199.21)\">\r\n              <g>\r\n              <g transform=\"translate(-2.9259 -4.1383)\">\r\n                <path transform=\"matrix(.26458 0 0 .26458 0 287)\" \r\n                  d=\"m9.4492 15.697a9.4488 1.5152 0 0 0-9.4453 1.5039h18.893a9.4488 1.5152 0 0 0-9.4473-1.5039z\" \r\n                  [attr.fill.]=\"getCheckerplateColourA()\"/>\r\n                <path d=\"m2.5001 291.95a2.5 0.4009 0 0 1-2.4991-0.3979h4.9987a2.5 0.4009 0 0 1-2.4996 0.3979z\" \r\n                  [attr.fill.]=\"getCheckerplateColourB()\"/>\r\n              </g>\r\n              <g transform=\"matrix(0 -1.4144 .70702 0 -201.56 290.95)\">\r\n                <path transform=\"matrix(.26458 0 0 .26458 0 287)\" d=\"m9.4492 15.697a9.4488 1.5152 0 0 0-9.4453 1.5039h18.893a9.4488 1.5152 0 0 0-9.4473-1.5039z\" \r\n                  [attr.fill.]=\"getCheckerplateColourA()\"/>\r\n                <path d=\"m2.5001 291.95a2.5 0.4009 0 0 1-2.4991-0.3979h4.9987a2.5 0.4009 0 0 1-2.4996 0.3979z\" \r\n                  [attr.fill.]=\"getCheckerplateColourB()\"/>\r\n              </g>\r\n              </g>\r\n            </g>                \r\n          </pattern>\r\n\r\n          <!-- Cogs    -->\r\n          <pattern [attr.id.]=\"getCogsId()\" x=\"0\" y=\"0\" [attr.width.]=\"getWidth()\" [attr.height.]=\"getHeight()\"\r\n              viewBox=\"0 0 360 360\"  patternUnits=\"userSpaceOnUse\">                 \r\n         <!--    <rect x=\"0\" y=\"0\" width=\"10\" height=\"10\" [attr.fill.]=\"getFillColour()\"></rect> \r\n           -->\r\n            <!--   -->\r\n            <g [attr.fill.]=\"getFillColour()\"  >\r\n              <path [attr.d.]=\"getCogsPoints()\">\r\n              </path>\r\n            </g>\r\n\r\n          </pattern>\r\n\r\n      </defs>\r\n\r\n      <!-- Fill a shape with the pattern/background. -->\r\n      <path [attr.d.]=\"getPath()\"\r\n            [attr.stroke-width.]=\"strokeWidth\"\r\n            [attr.stroke.]=\"getStrokeColour()\"\r\n            [attr.fill.]=\"getFill()\"    />  \r\n      \r\n      <!-- Add to the frame with wahtever content there was  -->\r\n      <foreignObject width=\"100%\" height=\"100%\">\r\n            <ng-content></ng-content>\r\n      </foreignObject>\r\n    </svg> \r\n"

/***/ }),

/***/ "./src/app/modules/shared/frame-text/frame-text.scss":
/*!***********************************************************!*\
  !*** ./src/app/modules/shared/frame-text/frame-text.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2ZyYW1lLXRleHQvZnJhbWUtdGV4dC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/shared/frame-text/frame-text.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/shared/frame-text/frame-text.ts ***!
  \*********************************************************/
/*! exports provided: FrameText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameText", function() { return FrameText; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FrameText = class FrameText {
    constructor(elRef) {
        this.elRef = elRef;
        // enables having more than one instance on same page
        this.instanceId = Math.floor((Math.random() * 1000000)).toString();
        // for border
        this.strokeWidth = 1;
        // for border
        this.strokeColour = '#000';
        this.frameType = 'chamfer';
        // the colour of the background svg
        this.fillColour = '#fff';
        // 'checkerplate' | 'cogs'
        this.fillType = 'checkerplate';
        // size of the repeating pattern (100 = 100%)
        this.fillSize = 100;
        this.radius = 5;
        this.parentHeight = 100;
        this.parentWidth = 100;
    }
    ngOnInit() {
        this.parentHeight = this.elRef.nativeElement.parentNode.clientHeight;
        this.parentWidth = this.elRef.nativeElement.parentNode.clientWidth;
        this.cornerSize = this.parentHeight / 10;
    }
    ngAfterViewInit() {
    }
    getViewbox() {
        const s = '0 0 ' + this.parentWidth + ' ' + this.parentHeight;
        return s;
    }
    getPath() {
        let s = '';
        if (this.frameType === 'chamfer') {
            const c = this.cornerSize;
            const h = this.parentHeight;
            const w = this.parentWidth;
            const ht = this.strokeWidth / 2;
            s = 'M' + c + ' 0' +
                'L' + (w - c) + ' 0' +
                'L' + w + ' ' + c +
                'L' + w + ' ' + (h - c) +
                'L' + (w - c) + ' ' + h +
                'L' + c + ' ' + h +
                'L' + 0 + ' ' + (h - c) +
                'L' + 0 + ' ' + c +
                'Z';
        }
        return s;
    }
    getStrokeColour() {
        return this.strokeColour;
    }
    getFillColour() {
        return this.fillColour;
    }
    getId() {
        return (Math.random() * 1000000).toString();
    }
    getCheckerplateId() {
        return 'checkerplate_' + this.instanceId;
    }
    getCheckerplateColourA() {
        return '#c8beb7';
    }
    getCheckerplateColourB() {
        return '#ac9d93';
    }
    getCogsId() {
        return 'cogs_' + this.instanceId;
    }
    /** supplies the background to use from the coded patterns in the svg def section */
    getFill() {
        // return  this.fillColour; //   'url(#checker-plate)';
        if (this.fillType === 'cogs')
            return 'url(#' + this.getCogsId() + ')';
        if (this.fillType === 'checkerplate')
            return 'url(#' + this.getCheckerplateId() + ')';
        return 'url(#' + this.getCheckerplateId() + ')';
    }
    getWidth() {
        return 360 * (this.fillSize / 100);
    }
    getHeight() {
        return 360 * (this.fillSize / 100);
    }
    getCogsPoints() {
        return 'M0 85.02l4.62-4.27a49.09 49.09 0 0 0 7.33 3.74l-1.2 10.24 2.66.87 5.05-9c2.62.65 5.34 1.08 8.12 1.28L28.6 98h2.8l2.02-10.12c2.74-.2 5.46-.62 8.12-1.28l5.05 8.99 2.66-.86-1.2-10.24' +
            'c2.55-1.03 5-2.29 7.33-3.74l7.58 7 2.26-1.65-4.3-9.38a48.3 48.3 0 0 0 5.8-5.8l9.38 4.3 1.65-2.26-7-7.58a49.09 49.09 0 0 0 3.74-7.33l10.24 1.2.87-2.66-9-5.05a48.07 48.07 0 0 0 1.28-8.12' +
            'L88 41.4v-2.8l-10.12-2.02c-.2-2.74-.62-5.46-1.28-8.12l8.99-5.05-.86-2.66-10.24 1.2c-1.03-2.55-2.29-5-3.74-7.33l7-7.58-1.65-2.26-9.38 4.3a48.3 48.3 0 0 0-5.8-5.8L62.42 0h2.16l-1.25 2.72' +
            'a50.31 50.31 0 0 1 3.95 3.95l9.5-4.36 3.52 4.85-7.08 7.68c.94 1.6 1.79 3.27 2.54 4.98l10.38-1.21 1.85 5.7-9.11 5.12c.39 1.8.68 3.65.87 5.52L90 37v6l-10.25 2.05' +
            'a49.9 49.9 0 0 1-.87 5.52l9.11 5.12-1.85 5.7-10.38-1.21c-.75 1.7-1.6 3.37-2.54 4.98l7.08 7.68-3.52 4.85-9.5-4.36a50.31 50.31 0 0 1-3.95 3.95l4.36 9.5-4.85 3.52-7.68-7.08' +
            'c-1.6.94-3.27 1.79-4.98 2.54l1.21 10.38-5.7 1.85-5.12-9.11c-1.8.39-3.65.68-5.52.87L33 100h-6l-2.05-10.25a49.9 49.9 0 0 1-5.52-.87l-5.12 9.11-5.7-1.85 1.21-10.38c-1.7-.75-3.37-1.6-4.98-2.54' +
            'L0 87.68v-2.66zM0 52.7V27.3l8.38 4.84a22.96 22.96 0 0 0 0 15.72L0 52.7zm0-39.16A39.91 39.91 0 0 1 26 .2v17.15a22.98 22.98 0 0 0-13.62 7.86L0 18.06v-4.52zm0 52.92v-4.52l12.38-7.15' +
            'A22.98 22.98 0 0 0 26 62.65V79.8A39.91 39.91 0 0 1 0 66.46zM34 79.8V62.65a22.98 22.98 0 0 0 13.62-7.86l14.85 8.58A39.97 39.97 0 0 1 34 79.8zm32.48-23.36l-14.86-8.58' +
            'a22.96 22.96 0 0 0 0-15.72l14.86-8.58A39.86 39.86 0 0 1 70 40a39.9 39.9 0 0 1-3.52 16.44zm-4.01-39.8L47.62 25.2A22.98 22.98 0 0 0 34 17.35V.2a39.97 39.97 0 0 1 28.47 16.43' +
            'v.01zM0 50.38l5.98-3.45a25.01 25.01 0 0 1 0-13.88L0 29.6v20.78zm.5-34.35l11.48 6.63c3.27-3.4 7.44-5.8 12.02-6.94V2.47A37.96 37.96 0 0 0 .5 16.04v-.01zm0 47.92A37.96 37.96 0 0 0 24 77.53' +
            'V64.28a24.97 24.97 0 0 1-12.02-6.95L.5 63.96v-.01zM36 77.53a37.96 37.96 0 0 0 23.5-13.57l-11.48-6.63A24.97 24.97 0 0 1 36 64.28v13.25zm29.5-23.96a37.91 37.91 0 0 0 0-27.14l-11.48 6.63' +
            'a25.01 25.01 0 0 1 0 13.88l11.49 6.63h-.01zm-6-37.53A37.96 37.96 0 0 0 36 2.47v13.25c4.66 1.15 8.8 3.6 12.02 6.95l11.48-6.63zM30 54a14 14 0 1 1 0-28 14 14 0 0 1 0 28zm0-2' +
            'a12 12 0 1 0 0-24 12 12 0 0 0 0 24zm0-2a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm77.47 45.17l-1.62-5.97 5.67-2.06 2.61 5.64c1.09-.25 2.2-.44 3.33-.58l.52-6.2' +
            'h6.04l.52 6.2c1.13.14 2.24.33 3.33.58l2.6-5.64 5.68 2.06-1.62 5.97c1.02.51 2 1.07 2.95 1.69l4.35-4.38 4.62 3.88-3.53 5c.8.84 1.53 1.71 2.23 2.62l5.52-2.6 3.02 5.23-4.98 3.46' +
            'c.46 1.06.86 2.14 1.2 3.25l6.02-.54 1.05 5.94-5.84 1.54c.07 1.16.07 2.32 0 3.48l5.84 1.54-1.05 5.94-6.02-.54c-.34 1.1-.74 2.2-1.2 3.25l4.98 3.46-3.02 5.22-5.52-2.6' +
            'c-.7.92-1.44 1.8-2.23 2.62l3.53 5-4.62 3.89-4.35-4.38a30.2 30.2 0 0 1-2.95 1.69l1.62 5.97-5.67 2.06-2.61-5.64c-1.09.25-2.2.44-3.33.58l-.52 6.2h-6.04l-.52-6.2' +
            'a30.27 30.27 0 0 1-3.33-.58l-2.6 5.64-5.68-2.06 1.62-5.97c-1.01-.5-2-1.07-2.95-1.69l-4.35 4.38-4.62-3.88 3.53-5a32.5 32.5 0 0 1-2.23-2.62l-5.52 2.6-3.02-5.23 4.98-3.46' +
            'a29.66 29.66 0 0 1-1.2-3.25l-6.02.54-1.05-5.94 5.84-1.54a30.28 30.28 0 0 1 0-3.48l-5.84-1.54 1.05-5.94 6.02.54c.34-1.1.74-2.2 1.2-3.25l-4.98-3.46 3.02-5.22 5.52 2.6' +
            'c.7-.92 1.44-1.8 2.23-2.62l-3.53-5 4.62-3.89 4.35 4.38a30.2 30.2 0 0 1 2.95-1.69zm15.2-1.12l-.5-6.05h-2.34l-.5 6.05c-2.18.13-4.3.5-6.32 1.1l-2.54-5.5-2.2.8 1.6 5.85' +
            'a27.97 27.97 0 0 0-5.56 3.21l-4.27-4.3-1.79 1.5 3.5 4.95a28.14 28.14 0 0 0-4.12 4.92l-5.5-2.59-1.16 2.02 4.98 3.46a27.8 27.8 0 0 0-2.2 6.03l-6.03-.55-.4 2.3 5.86 1.54' +
            'a28.3 28.3 0 0 0 0 6.42l-5.87 1.55.4 2.3 6.05-.56a27.8 27.8 0 0 0 2.2 6.03l-5 3.47 1.17 2.02 5.49-2.59a28.14 28.14 0 0 0 4.12 4.92l-3.5 4.96 1.79 1.5 4.27-4.31' +
            'a27.97 27.97 0 0 0 5.56 3.21l-1.6 5.85 2.2.8 2.54-5.5c2.02.6 4.14.97 6.32 1.1l.5 6.05h2.34l.5-6.05c2.18-.13 4.3-.5 6.32-1.1l2.54 5.5 2.2-.8-1.6-5.85' +
            'a27.97 27.97 0 0 0 5.56-3.21l4.27 4.3 1.79-1.5-3.5-4.95a28.14 28.14 0 0 0 4.12-4.92l5.5 2.59 1.16-2.02-4.98-3.46a27.8 27.8 0 0 0 2.2-6.03l6.03.55.4-2.3-5.86-1.54' +
            'a28.3 28.3 0 0 0 0-6.42l5.87-1.55-.4-2.3-6.05.56a27.8 27.8 0 0 0-2.2-6.03l4.99-3.46-1.17-2.02-5.49 2.59a28.14 28.14 0 0 0-4.12-4.92l3.5-4.96-1.79-1.5-4.27 4.31' +
            'a27.97 27.97 0 0 0-5.56-3.21l1.6-5.85-2.2-.8-2.54 5.5c-2.02-.6-4.14-.97-6.32-1.1l.01-.01zM121 128a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0-18' +
            'a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm8.49 3.51a5 5 0 1 1 6.95-7.2 5 5 0 0 1-6.95 7.2zM133 120a5 5 0 1 1 10 0 5 5 0 0 1-10 0zm-3.51 8.49a5 5 0 1 1 7.2 6.95 5 5 0 0 1-7.2-6.95' +
            'zM121 132a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm-8.49-3.51a5 5 0 1 1-6.95 7.2 5 5 0 0 1 6.95-7.2zM109 120a5 5 0 1 1-10 0 5 5 0 0 1 10 0zm3.51-8.49a5 5 0 1 1-7.2-6.95 5 5 0 0 1 7.2 6.95' +
            'zM121 106a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9.9 4.1a3 3 0 1 0 4.39-4.09 3 3 0 0 0-4.39 4.09zm4.1 9.9a3 3 0 1 0 6 0 3 3 0 0 0-6 0zm-4.1 9.9a3 3 0 1 0 4.09 4.39 3 3 0 0 0-4.09-4.39' +
            'zM121 134a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm-9.9-4.1a3 3 0 1 0-4.39 4.09 3 3 0 0 0 4.39-4.09zM107 120a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm4.1-9.9a3 3 0 1 0-4.09-4.39 3 3 0 0 0 4.09 4.39' +
            'zm129.42-6.95v.01c.87.07 1.74.17 2.6.3l1.5-3.91 1.94-3.64 3.89.97v4.13l-.5 4.13c.83.28 1.64.59 2.44.93l2.42-3.43 2.76-3.07 3.54 1.88-1 4-1.49 3.89' +
            'c.73.47 1.45.97 2.15 1.49l3.19-2.76 3.42-2.3 2.97 2.67-1.93 3.65-2.38 3.4c.6.64 1.2 1.3 1.76 1.99l3.68-1.94 3.85-1.48 2.29 3.28-2.7 3.11-3.12 2.82' +
            'c.43.76.84 1.53 1.22 2.32l4.04-1 4.1-.5 1.43 3.73-3.37 2.37-3.7 1.98c.23.84.44 1.68.62 2.54l4.17.01 4.1.5.48 3.97-3.85 1.48-4.06 1.02c.03.87.03 1.75 0 2.62l4.06 1.02 3.85 1.48-.48 3.97-4.1.51h-4.17' +
            'c-.18.86-.39 1.71-.63 2.54l3.7 1.98 3.38 2.37-1.43 3.73-4.1-.5-4.04-1c-.38.79-.79 1.56-1.22 2.32l3.13 2.82 2.7 3.11-2.3 3.28-3.85-1.48-3.68-1.95' +
            'a37 37 0 0 1-1.76 2l2.38 3.41 1.93 3.64-2.97 2.67-3.42-2.3-3.19-2.76a40.1 40.1 0 0 1-2.15 1.48l1.48 3.9 1 4-3.53 1.88-2.76-3.07-2.42-3.43c-.8.33-1.61.65-2.45.93l.5 4.13' +
            'v4.13l-3.88.97-1.94-3.65-1.5-3.9c-.86.13-1.73.23-2.6.31L240 187l-1 4h-4l-1-4-.52-4.16a37.6 37.6 0 0 1-2.6-.3l-1.5 3.91-1.94 3.64-3.89-.97v-4.13l.5-4.13' +
            'c-.83-.28-1.64-.59-2.44-.93l-2.42 3.43-2.76 3.07-3.54-1.88 1-4 1.49-3.89c-.74-.47-1.45-.97-2.15-1.49l-3.19 2.76-3.42 2.3-2.97-2.67 1.93-3.65 2.38-3.4' +
            'c-.61-.65-1.2-1.31-1.76-1.99l-3.68 1.94-3.85 1.48-2.29-3.28 2.7-3.11 3.12-2.82c-.43-.76-.84-1.53-1.22-2.32l-4.04 1-4.1.5-1.43-3.73 3.37-2.37 3.7-1.98' +
            'c-.23-.84-.44-1.68-.62-2.54l-4.17-.01-4.1-.5-.48-3.97 3.85-1.48 4.06-1.02c-.03-.87-.03-1.75 0-2.62l-4.06-1.02-3.85-1.48.48-3.97 4.1-.51h4.17' +
            'c.18-.86.39-1.71.63-2.54l-3.7-1.98-3.38-2.37 1.43-3.73 4.1.5 4.04 1c.38-.79.79-1.56 1.22-2.32l-3.13-2.82-2.7-3.11 2.3-3.28 3.85 1.48 3.68 1.95' +
            'a37 37 0 0 1 1.76-2l-2.38-3.41-1.93-3.64 2.97-2.67 3.42 2.3 3.19 2.76c.7-.52 1.41-1.02 2.15-1.48l-1.48-3.9-1-4 3.53-1.88 2.76 3.07 2.42 3.43c.8-.33 1.61-.65 2.45-.93l-.5-4.13' +
            'v-4.13l3.88-.97 1.94 3.65 1.5 3.9c.86-.13 1.73-.23 2.6-.31L234 99l1-4h4l1 4 .52 4.15zm-14.3 3.4c-1.83.54-3.6 1.21-5.3 2l-3.5-4.97-1.38-1.53-.88.47.5 2 2.16 5.67' +
            'a38.09 38.09 0 0 0-4.66 3.22l-4.61-4-1.71-1.15-.75.67.97 1.82 3.47 4.98a38.22 38.22 0 0 0-3.79 4.28l-5.37-2.84-1.92-.74-.57.82 1.35 1.56 4.52 4.09' +
            'a37.9 37.9 0 0 0-2.64 5l-5.89-1.45-2.04-.25-.36.94 1.69 1.18 5.36 2.87a37.74 37.74 0 0 0-1.35 5.5l-6.08.01-2.04.25-.12 1 1.92.73 5.9 1.5' +
            'a38.54 38.54 0 0 0 0 5.65l-5.9 1.49-1.92.74.12.99 2.04.25 6.08.01c.31 1.86.77 3.7 1.35 5.5l-5.36 2.87-1.7 1.18.37.94 2.04-.25 5.9-1.46' +
            'a37.9 37.9 0 0 0 2.63 5.01l-4.52 4.1-1.35 1.55.57.82 1.92-.74 5.37-2.84a38.22 38.22 0 0 0 3.8 4.28l-3.48 4.98-.97 1.82.75.67 1.7-1.15 4.62-4' +
            'a38.09 38.09 0 0 0 4.66 3.22l-2.17 5.67-.5 2 .89.47 1.38-1.53 3.5-4.98c1.7.8 3.47 1.47 5.3 2l-.73 6.04v2.06l.97.24.97-1.82 2.2-5.68c1.83.36 3.7.6 5.62.68' +
            'L236 187l.5 2h1l.5-2 .75-6.04a38.2 38.2 0 0 0 5.62-.68l2.2 5.68.97 1.82.97-.24v-2.06l-.73-6.03c1.83-.54 3.6-1.21 5.3-2l3.5 4.97 1.38 1.53.88-.47-.5-2-2.16-5.67' +
            'a38.09 38.09 0 0 0 4.66-3.22l4.61 4 1.71 1.15.75-.67-.97-1.82-3.47-4.98a38.22 38.22 0 0 0 3.79-4.28l5.37 2.84 1.92.74.57-.82-1.35-1.56-4.52-4.09' +
            'c1-1.6 1.88-3.27 2.64-5l5.89 1.45 2.04.25.36-.94-1.69-1.18-5.36-2.87a37.4 37.4 0 0 0 1.35-5.5l6.08-.01 2.04-.25.12-1-1.92-.73-5.9-1.5' +
            'c.14-1.88.14-3.77 0-5.65l5.9-1.49 1.92-.74-.12-.99-2.04-.25-6.08-.01a37.4 37.4 0 0 0-1.35-5.5l5.36-2.87 1.7-1.18-.37-.94-2.04.25-5.9 1.46' +
            'a37.9 37.9 0 0 0-2.63-5.01l4.52-4.1 1.35-1.55-.57-.82-1.92.74-5.37 2.84a38.22 38.22 0 0 0-3.8-4.28l3.48-4.98.97-1.82-.75-.67-1.7 1.15-4.62 4' +
            'a38.09 38.09 0 0 0-4.66-3.22l2.17-5.67.5-2-.89-.47-1.38 1.53-3.5 4.98c-1.7-.8-3.47-1.47-5.3-2l.73-6.04v-2.06l-.97-.24-.97 1.82-2.2 5.68' +
            'c-1.83-.36-3.7-.6-5.62-.68L238 99l-.5-2h-1l-.5 2-.75 6.04c-1.92.09-3.8.32-5.62.68l-2.2-5.68-.97-1.82-.97.24v2.06l.73 6.03zm-5.85 5.65A34.82 34.82 0 0 1 236 108' +
            'v6a28.8 28.8 0 0 0-12.63 3.39l-3-5.2v.01zm2.8.83l1 1.74a30.8 30.8 0 0 1 9.83-2.63v-2.01a32.8 32.8 0 0 0-10.83 2.9zm-4.53.17l3 5.2a29.12 29.12 0 0 0-9.24 9.24l-5.2-3' +
            'a35.18 35.18 0 0 1 11.44-11.44zm-.67 2.84a33.19 33.19 0 0 0-7.93 7.93l1.74 1a31.18 31.18 0 0 1 7.2-7.2l-1.01-1.73zm-11.77 10.33h-.01l5.2 3A28.8 28.8 0 0 0 208 142h-6' +
            'a34.82 34.82 0 0 1 4.2-15.63zm.83 2.8a32.8 32.8 0 0 0-2.9 10.83h2.01a30.8 30.8 0 0 1 2.63-9.83l-1.74-1zM202.01 144h6.01c.15 4.41 1.3 8.73 3.38 12.63l-5.2 3' +
            'a34.82 34.82 0 0 1-4.19-15.63zm2.12 2a32.8 32.8 0 0 0 2.9 10.84l1.74-1a30.8 30.8 0 0 1-2.63-9.84h-2.01zm3.07 15.36l5.2-3c2.34 3.74 5.5 6.9 9.24 9.24l-3 5.2' +
            'a35.18 35.18 0 0 1-11.44-11.44zm2.84.67a33.19 33.19 0 0 0 7.93 7.93l1-1.74a31.18 31.18 0 0 1-7.2-7.2l-1.73 1.01zm10.33 11.77v.01l3-5.2A28.85 28.85 0 0 0 236 172' +
            'v6a34.82 34.82 0 0 1-15.63-4.2zm2.8-.83a32.8 32.8 0 0 0 10.83 2.9v-2.01a30.8 30.8 0 0 1-9.83-2.63l-1 1.74zm14.83 5.02v-6.01c4.41-.15 8.73-1.3 12.63-3.38l3 5.2' +
            'a34.82 34.82 0 0 1-15.63 4.19zm2-2.12a32.8 32.8 0 0 0 10.84-2.9l-1-1.74a30.8 30.8 0 0 1-9.84 2.63v2.01zm15.36-3.07l-3-5.2c3.74-2.34 6.9-5.5 9.24-9.24l5.2 3' +
            'a35.18 35.18 0 0 1-11.44 11.44zm.67-2.84a33.19 33.19 0 0 0 7.93-7.93l-1.74-1a31.18 31.18 0 0 1-7.2 7.2l1.01 1.73zm11.77-10.33h.01l-5.2-3A28.85 28.85 0 0 0 266 144' +
            'h6a34.82 34.82 0 0 1-4.2 15.63zm-.83-2.8a32.8 32.8 0 0 0 2.9-10.83h-2.01a30.8 30.8 0 0 1-2.63 9.83l1.74 1zm5.02-14.83h-6.01a28.85 28.85 0 0 0-3.38-12.63l5.2-3' +
            'a34.82 34.82 0 0 1 4.19 15.63zm-2.12-2a32.8 32.8 0 0 0-2.9-10.84l-1.74 1a30.8 30.8 0 0 1 2.63 9.84h2.01zm-3.07-15.36l-5.2 3a29.12 29.12 0 0 0-9.24-9.24l3-5.2' +
            'a35.18 35.18 0 0 1 11.44 11.44zm-2.84-.67a33.19 33.19 0 0 0-7.93-7.93l-1 1.74a31.18 31.18 0 0 1 7.2 7.2l1.73-1.01zM238 108a34.82 34.82 0 0 1 15.63 4.19l-3 5.2' +
            'a28.85 28.85 0 0 0-12.63-3.38V108zm12.84 5.02a32.8 32.8 0 0 0-10.84-2.9v2.01a30.8 30.8 0 0 1 9.83 2.63l1-1.74h.01zM237 156a13 13 0 1 1 0-26 13 13 0 0 1 0 26' +
            'zm0-2a11 11 0 1 0 0-22 11 11 0 0 0 0 22zM137.54 0h56.92l-.74 1.03c.57.7 1.12 1.4 1.64 2.14l7.75-2.9 2 3.46-6.38 5.25c.37.82.72 1.65 1.03 2.5l8.22-.8 1.04 3.86-7.52 3.43' +
            'c.15.88.26 1.77.35 2.67L210 22v4l-8.15 1.36c-.09.9-.2 1.8-.35 2.67l7.52 3.43-1.04 3.86-8.22-.8c-.31.85-.66 1.68-1.03 2.5l6.38 5.25-2 3.46-7.75-2.9' +
            'c-.52.74-1.07 1.45-1.64 2.14l4.8 6.73-2.82 2.83-6.73-4.8c-.7.56-1.4 1.11-2.14 1.63l2.9 7.75-3.46 2-5.25-6.38c-.82.37-1.65.72-2.5 1.03l.8 8.22-3.86 1.04-3.43-7.52' +
            'c-.88.15-1.77.26-2.67.35L168 68h-4l-1.36-8.15c-.9-.09-1.8-.2-2.67-.35l-3.43 7.52-3.86-1.04.8-8.22c-.85-.31-1.68-.66-2.5-1.03l-5.25 6.38-3.46-2 2.9-7.75' +
            'a36.15 36.15 0 0 1-2.14-1.64l-6.73 4.8-2.83-2.82 4.8-6.73c-.56-.7-1.11-1.4-1.63-2.14l-7.75 2.9-2-3.46 6.38-5.25c-.37-.82-.72-1.65-1.03-2.5l-8.22.8-1.04-3.86 7.52-3.43' +
            'c-.15-.88-.26-1.77-.35-2.67L122 26v-4l8.15-1.36c.09-.9.2-1.8.35-2.67l-7.52-3.43 1.04-3.86 8.22.8c.31-.85.66-1.68 1.03-2.5l-6.38-5.25 2-3.46 7.75 2.9' +
            'c.52-.74 1.07-1.45 1.64-2.14L137.54 0zm2.43 0l.83 1.17a34.14 34.14 0 0 0-3.38 4.4l-7.63-2.86-.33.58 6.29 5.18a33.79 33.79 0 0 0-2.13 5.12l-8.1-.78-.18.64 7.42 3.37' +
            'a34.02 34.02 0 0 0-.72 5.5L124 23.68v.66l8.04 1.34c.1 1.88.33 3.72.72 5.5l-7.42 3.38.18.64 8.1-.78a33.88 33.88 0 0 0 2.13 5.12l-6.29 5.18.33.58 7.63-2.86' +
            'c1 1.56 2.14 3.03 3.38 4.4l-4.73 6.63.47.47 6.63-4.73a34.14 34.14 0 0 0 4.4 3.38l-2.86 7.63.58.33 5.18-6.29c1.63.84 3.35 1.56 5.12 2.13l-.78 8.1.64.18 3.37-7.42' +
            'c1.79.39 3.63.63 5.5.72l1.35 8.04h.66l1.34-8.04c1.88-.1 3.72-.33 5.5-.72l3.38 7.42.64-.18-.78-8.1a33.88 33.88 0 0 0 5.12-2.13l5.18 6.29.58-.33-2.86-7.63' +
            'c1.56-1 3.03-2.14 4.4-3.38l6.63 4.73.47-.47-4.73-6.63a34.14 34.14 0 0 0 3.38-4.4l7.63 2.86.33-.58-6.29-5.18a33.79 33.79 0 0 0 2.13-5.12l8.1.78.18-.64-7.42-3.37' +
            'c.39-1.79.63-3.63.72-5.5l8.04-1.35v-.66l-8.04-1.34c-.1-1.88-.33-3.72-.72-5.5l7.42-3.38-.18-.64-8.1.78a33.79 33.79 0 0 0-2.13-5.12l6.29-5.18-.33-.58-7.63 2.86' +
            'c-1-1.56-2.14-3.03-3.38-4.4l.83-1.17h-52.06V0zm-2.82 27h14.15A15.02 15.02 0 0 0 163 38.7v14.15A29.01 29.01 0 0 1 137.15 27zm12.57-27H163v9.3A15.02 15.02 0 0 0 151.3 21h-14.15' +
            'a28.99 28.99 0 0 1 12.57-21zM169 52.85V38.7A15.02 15.02 0 0 0 180.7 27h14.15A29.01 29.01 0 0 1 169 52.85zM182.28 0a28.99 28.99 0 0 1 12.57 21H180.7A15.02 15.02 0 0 0 169 9.3' +
            'V0h13.28zm-42.82 29A27.03 27.03 0 0 0 161 50.54V40.25A17.04 17.04 0 0 1 149.75 29h-10.29zm14.16-29a27.04 27.04 0 0 0-14.16 19h10.29A17.04 17.04 0 0 1 161 7.75V0h-7.38' +
            'zM171 50.54A27.03 27.03 0 0 0 192.54 29h-10.29A17.04 17.04 0 0 1 171 40.25v10.29zM178.38 0H171v7.75A17.04 17.04 0 0 1 182.25 19h10.29a27.04 27.04 0 0 0-14.16-19' +
            'zM166 34a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-39.51 176.15l-10.67-7.95 6-10.4 12.23 5.27a23.97 23.97 0 0 1 8.4-4.86L144 177' +
            'h12l1.55 13.21a23.97 23.97 0 0 1 8.4 4.86l12.23-5.27 6 10.4-10.67 7.95a24 24 0 0 1 0 9.7l10.67 7.95-6 10.4-12.23-5.27a23.97 23.97 0 0 1-8.4 4.86L156 249' +
            'h-12l-1.55-13.21a23.97 23.97 0 0 1-8.4-4.86l-12.23 5.27-6-10.4 10.67-7.95a24.1 24.1 0 0 1 0-9.7zm29.25-16.4l-1.5-12.75h-8.48l-1.5 12.76c-3.75 1-7.1 2.99-9.79 5.65l-11.8-5.08-4.23 7.34 10.3 7.68' +
            'c-.98 3.7-.98 7.6 0 11.3l-10.3 7.68 4.23 7.34 11.8-5.08a22.1 22.1 0 0 0 9.8 5.65l1.5 12.76h8.47l1.5-12.76c3.75-1 7.1-2.99 9.79-5.65l11.8 5.08 4.23-7.34-10.3-7.68' +
            'c.98-3.7.98-7.6 0-11.3l10.3-7.68-4.23-7.34-11.8 5.08a21.98 21.98 0 0 0-9.8-5.65l.01-.01zM150 225a12 12 0 1 1 0-24 12 12 0 0 1 0 24zm0-2a10 10 0 1 0 0-20 10 10 0 0 0 0 20' +
            'zm3.53 67.72l4.26.07.51 1.93-3.65 2.19c.11.63.2 1.27.25 1.92L159 298v2l-4.1 1.17c-.05.65-.14 1.29-.25 1.92l3.65 2.2-.51 1.92-4.26.07c-.22.61-.47 1.21-.74 1.8l2.96 3.05-1 1.74-4.13-1.04' +
            'a24.1 24.1 0 0 1-1.18 1.54l2.07 3.72-1.42 1.42-3.72-2.07c-.5.41-1.01.8-1.54 1.18l1.04 4.13-1.74 1-3.05-2.96c-.59.27-1.19.52-1.8.74l-.07 4.26-1.93.51-2.19-3.65c-.63.11-1.27.2-1.92.25' +
            'L132 327h-2l-1.17-4.1c-.65-.05-1.29-.14-1.92-.25l-2.2 3.65-1.92-.51-.07-4.26c-.61-.22-1.21-.47-1.8-.74l-3.05 2.96-1.74-1 1.04-4.13a24.1 24.1 0 0 1-1.54-1.18l-3.72 2.07-1.42-1.42 2.07-3.72' +
            'c-.41-.5-.8-1.01-1.18-1.54l-4.13 1.04-1-1.74 2.96-3.05c-.27-.59-.52-1.19-.74-1.8l-4.26-.07-.51-1.93 3.65-2.19c-.11-.63-.2-1.27-.25-1.92L103 300v-2l4.1-1.17c.05-.65.14-1.29.25-1.92l-3.65-2.2.51-1.92 4.26-.07' +
            'c.22-.61.47-1.21.74-1.8l-2.96-3.05 1-1.74 4.13 1.04c.38-.53.77-1.04 1.18-1.54l-2.07-3.72 1.42-1.42 3.72 2.07c.5-.41 1.01-.8 1.54-1.18l-1.04-4.13 1.74-1 3.05 2.96' +
            'c.59-.27 1.19-.52 1.8-.74l.07-4.26 1.93-.51 2.19 3.65c.63-.11 1.27-.2 1.92-.25L130 271h2l1.17 4.1c.65.05 1.29.14 1.92.25l2.2-3.65 1.92.51.07 4.26c.61.22 1.21.47 1.8.74l3.05-2.96 1.74 1-1.04 4.13' +
            'c.53.38 1.04.77 1.54 1.18l3.72-2.07 1.42 1.42-2.07 3.72c.41.5.8 1.01 1.18 1.54l4.13-1.04 1 1.74-2.96 3.05c.27.59.52 1.19.74 1.8zM109 299a22 22 0 1 0 44 0 22 22 0 0 0-44 0' +
            'zm27.11-10.86l-3 5.22a6 6 0 0 0-4.21 0l-3.01-5.22a11.95 11.95 0 0 1 10.22 0zm1.74 1a12 12 0 0 1 5.1 8.86h-6.01a6.01 6.01 0 0 0-2.1-3.64l3-5.22h.01zm-13.7 0l3.02 5.22' +
            'a6.01 6.01 0 0 0-2.1 3.64h-6.03a12 12 0 0 1 5.11-8.86zm-5.1 10.86h6.01a6.01 6.01 0 0 0 2.1 3.64l-3 5.22a12 12 0 0 1-5.12-8.86h.01zm6.84 9.86l3-5.22a6 6 0 0 0 4.21 0l3.01 5.22' +
            'a11.95 11.95 0 0 1-10.22 0zm11.96-1l-3.02-5.22a6.01 6.01 0 0 0 2.1-3.64h6.03a12 12 0 0 1-5.11 8.86zm-4.68-19.62a10.04 10.04 0 0 0-4.34 0l1.05 1.82c.74-.1 1.5-.1 2.24 0l1.05-1.82' +
            'zm5.2 3l-1.05 1.82c.46.59.84 1.24 1.12 1.94h2.1a9.99 9.99 0 0 0-2.17-3.76zm-14.74 0a9.99 9.99 0 0 0-2.17 3.76h2.1c.28-.7.66-1.35 1.12-1.94l-1.05-1.82zm-2.17 9.76' +
            'a9.99 9.99 0 0 0 2.17 3.76l1.05-1.82a8.01 8.01 0 0 1-1.12-1.94h-2.1zm7.37 6.76c1.43.32 2.91.32 4.34 0l-1.05-1.82c-.74.1-1.5.1-2.24 0l-1.05 1.82zm9.54-3a9.99 9.99 0 0 0 2.17-3.76' +
            'h-2.1c-.28.7-.66 1.35-1.12 1.94l1.05 1.82zM127 299a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm2 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm15 0a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm-6.5 11.26' +
            'a4 4 0 1 1 4 6.93 4 4 0 0 1-4-6.93zm-13 0a4 4 0 1 1-4 6.93 4 4 0 0 1 4-6.93zM118 299a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm6.5-11.26a4 4 0 1 1-4-6.93 4 4 0 0 1 4 6.93' +
            'zm13 0a4 4 0 1 1 4-6.93 4 4 0 0 1-4 6.93zM146 299a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm-7.5 12.99a2 2 0 1 0 1.66 3.64 2 2 0 0 0-1.66-3.64zm-15 0a2 2 0 1 0-2.15 3.38 2 2 0 0 0 2.15-3.38' +
            'zM116 299a2 2 0 1 0-4 0 2 2 0 0 0 4 0zm7.5-12.99a2 2 0 1 0-1.66-3.64 2 2 0 0 0 1.66 3.64zm15 0a2 2 0 1 0 2.15-3.38 2 2 0 0 0-2.15 3.38zm103.8-61.7l-.8-8.22 5.8-1.55 3.42 7.52' +
            'c2.26-.43 4.57-.74 6.92-.9L259 213h6l1.36 8.16c2.35.16 4.66.47 6.92.9l3.42-7.52 5.8 1.55-.8 8.22c2.21.77 4.37 1.66 6.45 2.68l5.25-6.38 5.2 3-2.9 7.74' +
            'a60.25 60.25 0 0 1 5.53 4.25l6.73-4.8 4.24 4.24-4.8 6.73a60.25 60.25 0 0 1 4.25 5.53l7.74-2.9 3 5.2-6.38 5.25a59.62 59.62 0 0 1 2.68 6.45l8.22-.8 1.55 5.8-7.52 3.42' +
            'c.43 2.26.74 4.57.9 6.92L330 278v6l-8.16 1.36a60.03 60.03 0 0 1-.9 6.92l7.52 3.42-1.55 5.8-8.22-.8a59.62 59.62 0 0 1-2.68 6.45l6.38 5.25-3 5.2-7.74-2.9' +
            'a60.25 60.25 0 0 1-4.25 5.53l4.8 6.73-4.24 4.24-6.73-4.8a60.25 60.25 0 0 1-5.53 4.25l2.9 7.74-5.2 3-5.25-6.38a59.62 59.62 0 0 1-6.45 2.68l.8 8.22-5.8 1.55-3.42-7.52' +
            'c-2.26.43-4.57.74-6.92.9L265 349h-6l-1.36-8.16a60.03 60.03 0 0 1-6.92-.9l-3.42 7.52-5.8-1.55.8-8.22a59.62 59.62 0 0 1-6.45-2.68l-5.25 6.38-5.2-3 2.9-7.74' +
            'a60.25 60.25 0 0 1-5.53-4.25l-6.73 4.8-4.24-4.24 4.8-6.73a60.25 60.25 0 0 1-4.25-5.53l-7.74 2.9-3-5.2 6.38-5.25a59.62 59.62 0 0 1-2.68-6.45l-8.22.8-1.55-5.8 7.52-3.42c-.43-2.29-.73-4.6-.9-6.92' +
            'L194 284v-6l8.16-1.36c.16-2.35.47-4.66.9-6.92l-7.52-3.42 1.55-5.8 8.22.8c.77-2.2 1.66-4.35 2.68-6.45l-6.38-5.25 3-5.2 7.74 2.9a60.25 60.25 0 0 1 4.25-5.53l-4.8-6.73 4.24-4.24 6.73 4.8' +
            'a60.25 60.25 0 0 1 5.53-4.25l-2.9-7.74 5.2-3 5.25 6.38a59.62 59.62 0 0 1 6.45-2.68zm2.12 1.4c-3.15 1-6.19 2.27-9.08 3.77l-5.19-6.3-2.3 1.33 2.86 7.65' +
            'a58.24 58.24 0 0 0-7.79 5.98l-6.65-4.75-1.88 1.88 4.75 6.65a58.24 58.24 0 0 0-5.98 7.79l-7.65-2.86-1.33 2.3 6.3 5.2a57.64 57.64 0 0 0-3.77 9.07l-8.12-.79-.69 2.58 7.43 3.38' +
            'a58 58 0 0 0-1.27 9.73l-8.06 1.35v2.66l8.06 1.35c.15 3.32.58 6.58 1.27 9.73l-7.43 3.38.7 2.58 8.11-.79c1 3.15 2.27 6.19 3.77 9.08l-6.3 5.19 1.33 2.3 7.65-2.86' +
            'a58.24 58.24 0 0 0 5.98 7.79l-4.75 6.65 1.88 1.88 6.65-4.75a60.3 60.3 0 0 0 7.79 5.98l-2.86 7.65 2.3 1.33 5.2-6.3a56.99 56.99 0 0 0 9.07 3.77l-.79 8.12 2.58.69 3.38-7.43' +
            'c3.15.69 6.4 1.12 9.73 1.27l1.35 8.06h2.66l1.35-8.06c3.32-.15 6.58-.58 9.73-1.27l3.38 7.43 2.58-.7-.79-8.11c3.15-1 6.19-2.27 9.08-3.77l5.19 6.3 2.3-1.33-2.86-7.65' +
            'a58.24 58.24 0 0 0 7.79-5.98l6.65 4.75 1.88-1.88-4.75-6.65a60.3 60.3 0 0 0 5.98-7.79l7.65 2.86 1.33-2.3-6.3-5.2a56.99 56.99 0 0 0 3.77-9.07l8.12.79.69-2.58-7.43-3.38' +
            'a58 58 0 0 0 1.27-9.73l8.06-1.35v-2.66l-8.06-1.35a58.04 58.04 0 0 0-1.27-9.73l7.43-3.38-.7-2.58-8.11.79c-1-3.15-2.27-6.19-3.77-9.08l6.3-5.19-1.33-2.3-7.65 2.86' +
            'a58.24 58.24 0 0 0-5.98-7.79l4.75-6.65-1.88-1.88-6.65 4.75a58.24 58.24 0 0 0-7.79-5.98l2.86-7.65-2.3-1.33-5.2 6.3a57.64 57.64 0 0 0-9.07-3.77l.79-8.12-2.58-.69-3.38 7.43' +
            'a58 58 0 0 0-9.73-1.27l-1.35-8.06h-2.66l-1.35 8.06c-3.32.15-6.58.58-9.73 1.27l-3.38-7.43-2.58.7.79 8.11zm4.58 50.1a13.96 13.96 0 0 0 0 10.39l-33.88 19.55A52.77 52.77 0 0 1 209 281' +
            'c0-8.94 2.21-17.37 6.12-24.75L249 275.8v.01zm2-3.47l-33.87-19.56A52.97 52.97 0 0 1 260 228.04v39.1a13.99 13.99 0 0 0-9 5.2zm0 17.32a13.99 13.99 0 0 0 9 5.2v39.1a52.97 52.97 0 0 1-42.87-24.74' +
            'L251 289.66zm13 5.2a13.99 13.99 0 0 0 9-5.2l33.87 19.56A52.97 52.97 0 0 1 264 333.96v-39.1zm11-8.66a13.96 13.96 0 0 0 0-10.4l33.88-19.55A52.77 52.77 0 0 1 315 281c0 8.94-2.21 17.37-6.12 24.75' +
            'L275 286.2zm-2-13.86a13.99 13.99 0 0 0-9-5.2v-39.1a52.97 52.97 0 0 1 42.87 24.74L273 272.34zm-57.04-13.3A50.8 50.8 0 0 0 211 281a50.8 50.8 0 0 0 4.96 21.96l30.62-17.68' +
            'c-.78-2.8-.78-5.76 0-8.56l-30.62-17.68zm4-6.93l30.62 17.68a16.08 16.08 0 0 1 7.42-4.29v-35.35a50.96 50.96 0 0 0-38.04 21.96zm0 57.78A50.96 50.96 0 0 0 258 331.85V296.5' +
            'a15.98 15.98 0 0 1-7.42-4.29l-30.62 17.68zM266 331.85a50.96 50.96 0 0 0 38.04-21.96l-30.62-17.68a16.08 16.08 0 0 1-7.42 4.29v35.35zm42.04-28.89A50.8 50.8 0 0 0 313 281' +
            'a50.8 50.8 0 0 0-4.96-21.96l-30.62 17.68c.78 2.8.78 5.76 0 8.56l30.62 17.68zm-4-50.85A50.96 50.96 0 0 0 266 230.15v35.35c2.86.74 5.41 2.25 7.42 4.29l30.62-17.68zM262 290' +
            'a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm0-2a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM0 242.64l2.76.4 4.75 2.27a38.2 38.2 0 0 1 2.85-3.4l-3.06-4.28-1.69-5.11 3.07-2.58 4.74 2.55 3.69 3.76' +
            'a37.96 37.96 0 0 1 3.84-2.22l-1.42-5.07.17-5.38 3.76-1.37 3.6 4.02 2.17 4.79c1.42-.34 2.88-.6 4.37-.77L34 225l2-5h4l2 5 .4 5.25c1.49.17 2.95.43 4.37.77l2.18-4.8 3.59-4 3.76 1.36.17 5.38-1.42 5.07' +
            'c1.33.67 2.6 1.41 3.84 2.22l3.69-3.76 4.74-2.55 3.07 2.58-1.69 5.11-3.06 4.29a38.2 38.2 0 0 1 2.85 3.4l4.75-2.28 5.33-.77 2 3.46-3.33 4.23-4.34 2.98' +
            'c.59 1.36 1.1 2.75 1.52 4.17l5.23-.52 5.27 1.1.7 3.94-4.58 2.84-5.1 1.31a38.6 38.6 0 0 1 0 4.44l5.1 1.3 4.58 2.85-.7 3.93-5.27 1.1-5.23-.5' +
            'a36.3 36.3 0 0 1-1.52 4.16l4.34 2.98 3.33 4.23-2 3.46-5.33-.77-4.75-2.27a38.2 38.2 0 0 1-2.85 3.4l3.06 4.28 1.69 5.11-3.07 2.58-4.74-2.55-3.69-3.76' +
            'a37.96 37.96 0 0 1-3.84 2.22l1.42 5.07-.17 5.38-3.76 1.37-3.6-4.02-2.17-4.79c-1.42.34-2.88.6-4.37.77L42 311l-2 5h-4l-2-5-.4-5.25a37.87 37.87 0 0 1-4.37-.77l-2.18 4.8-3.59 4-3.76-1.36-.17-5.38 1.42-5.07' +
            'c-1.32-.66-2.6-1.4-3.84-2.22l-3.69 3.76-4.74 2.55-3.07-2.58 1.69-5.11 3.06-4.29a38.2 38.2 0 0 1-2.85-3.4l-4.75 2.28-2.76.4v-8.17l3.1-2.13a37.72 37.72 0 0 1-1.52-4.17l-1.58.16v-8.82l.06-.01' +
            'a38.6 38.6 0 0 1 0-4.44l-.06-.01v-8.82l1.58.16c.43-1.43.94-2.82 1.52-4.17L0 250.8v-8.17.01zm0 1.87v3.89l5.62 3.84a35.74 35.74 0 0 0-2.55 7.02l-3.07-.3v4.75l2.2.56' +
            'a36.42 36.42 0 0 0 0 7.46l-2.2.56v4.75l3.07-.3a35.2 35.2 0 0 0 2.55 7.02L0 287.6v3.89l1.76-.26 6.41-3.07c1.4 2.06 3 3.98 4.8 5.71l-4.14 5.78-1.01 3.07 1.22 1.03 2.85-1.52 4.98-5.08' +
            'c2 1.45 4.16 2.7 6.45 3.73l-1.9 6.84.1 3.23 1.5.55 2.15-2.4 2.94-6.48a35.9 35.9 0 0 0 7.34 1.3L36 311l1.2 3h1.6l1.2-3 .55-7.09a35.9 35.9 0 0 0 7.34-1.29l2.94 6.47 2.15 2.4 1.5-.54.1-3.23-1.9-6.84' +
            'a35.96 35.96 0 0 0 6.45-3.73l4.98 5.08 2.85 1.52 1.22-1.03-1-3.07-4.15-5.78a35.8 35.8 0 0 0 4.8-5.7l6.4 3.06 3.2.46.8-1.38-2-2.54-5.85-4.01' +
            'c1.1-2.24 1.95-4.6 2.55-7.02l7.07.7 3.16-.66.28-1.58-2.75-1.7-6.88-1.77c.26-2.48.26-4.98 0-7.46l6.88-1.77 2.75-1.7-.28-1.58-3.16-.66-7.07.7' +
            'a35.74 35.74 0 0 0-2.55-7.02l5.86-4 2-2.55-.8-1.38-3.2.46-6.41 3.07c-1.4-2.06-3-3.98-4.8-5.71l4.14-5.78 1.01-3.07-1.22-1.03-2.85 1.52-4.98 5.08' +
            'c-2-1.45-4.16-2.7-6.45-3.73l1.9-6.84-.1-3.23-1.5-.55-2.15 2.4-2.94 6.48a35.9 35.9 0 0 0-7.34-1.3L40 225l-1.2-3h-1.6l-1.2 3-.55 7.09c-2.48.17-4.94.6-7.34 1.29l-2.94-6.47-2.15-2.4-1.5.54-.1 3.23 1.9 6.84' +
            'a35.96 35.96 0 0 0-6.45 3.73l-4.98-5.08-2.85-1.52-1.22 1.03 1 3.07 4.15 5.78a36.18 36.18 0 0 0-4.8 5.7l-6.4-3.06L0 244.5v.01zM38 272a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2' +
            'a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0-26a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm24 24a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm-24 24a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm-24-24a4 4 0 1 1-8 0 4 4 0 0 1 8 0zm24-26' +
            'a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm26 26a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm-26 26a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-26-26a2 2 0 1 0-4 0 2 2 0 0 0 4 0zm3.37 22.63a12 12 0 1 1 16.17-17.74 12 12 0 0 1-16.17 17.74' +
            'zm0-45.26a12 12 0 1 1 17.74 16.17 12 12 0 0 1-17.74-16.17zm45.26 0a12 12 0 1 1-16.17 17.74 12 12 0 0 1 16.17-17.74zm0 45.26a12 12 0 1 1-17.74-16.17 12 12 0 0 1 17.74 16.17' +
            'zm-15.56-29.7a10 10 0 1 0 14.39-13.9 10 10 0 0 0-14.39 13.9zm0 14.14a10 10 0 1 0 13.9 14.39 10 10 0 0 0-13.9-14.39zm-14.14 0a10 10 0 1 0-14.39 13.9 10 10 0 0 0 14.39-13.9' +
            'zm0-14.14a10 10 0 1 0-13.9-14.39 10 10 0 0 0 13.9 14.39zm230.9-245.4l-.08-4.18 1.93-.52 2.04 3.67c1.07-.2 2.16-.35 3.26-.43L270 10h2l1.02 4.07c1.1.08 2.2.22 3.26.43l2.04-3.67 1.93.52-.07 4.19' +
            'a27 27 0 0 1 3.04 1.26l2.91-3.01 1.74 1-1.16 4.03c.91.62 1.78 1.29 2.61 2l3.6-2.15 1.41 1.41-2.16 3.6c.72.83 1.4 1.7 2 2.6l4.04-1.15 1 1.74-3.01 2.91c.48.98.9 2 1.26 3.04l4.2-.07.5 1.93-3.66 2.04' +
            'c.2 1.07.35 2.16.43 3.26L303 41v2l-4.07 1.02a26.9 26.9 0 0 1-.43 3.26l3.67 2.04-.52 1.93-4.19-.07a27.82 27.82 0 0 1-1.26 3.04l3.01 2.91-1 1.74-4.03-1.16' +
            'c-.62.91-1.29 1.78-2 2.61l2.15 3.6-1.41 1.41-3.6-2.16c-.83.72-1.7 1.4-2.6 2l1.15 4.04-1.74 1-2.91-3.01a27 27 0 0 1-3.04 1.26l.07 4.2-1.93.5-2.04-3.66c-1.07.2-2.16.35-3.26.43' +
            'L272 74h-2l-1.02-4.07a26.9 26.9 0 0 1-3.26-.43l-2.04 3.67-1.93-.52.07-4.19a27.82 27.82 0 0 1-3.04-1.26l-2.91 3.01-1.74-1 1.16-4.03c-.9-.62-1.78-1.29-2.61-2l-3.6 2.15-1.41-1.41 2.16-3.6' +
            'c-.72-.83-1.4-1.7-2-2.6l-4.04 1.15-1-1.74 3.01-2.91a27 27 0 0 1-1.26-3.04l-4.2.07-.5-1.93 3.66-2.04c-.2-1.07-.35-2.16-.43-3.26L239 43v-2l4.07-1.02c.08-1.1.22-2.2.43-3.26l-3.67-2.04.52-1.93 4.19.07' +
            'a27 27 0 0 1 1.26-3.04l-3.01-2.91 1-1.74 4.03 1.16c.62-.91 1.29-1.78 2-2.61l-2.15-3.6 1.41-1.41 3.6 2.16c.83-.72 1.7-1.4 2.6-2l-1.15-4.04 1.74-1 2.91 3.01a27 27 0 0 1 3.04-1.26l.01-.01zM271 68' +
            'a26 26 0 1 0 0-52 26 26 0 0 0 0 52zm0-9a17 17 0 1 1 0-34 17 17 0 0 1 0 34zm0-2a15 15 0 1 0 0-30 15 15 0 0 0 0 30zm0-8a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-2a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-14' +
            'a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm9 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm-9 9a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-9-9a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm47.93 53.79l-1.8-3.91 1.63-1.18 3.15 2.92c.4-.17.82-.3 1.25-.4' +
            'L315 89h2l.84 4.21c.43.1.85.24 1.25.4l3.15-2.9 1.62 1.17-1.8 3.9c.3.33.55.69.78 1.06l4.26-.5.62 1.9-3.75 2.1c.04.44.04.87 0 1.31l3.75 2.1-.62 1.9-4.26-.5' +
            'c-.23.38-.49.74-.77 1.06l1.8 3.91-1.63 1.18-3.15-2.92c-.4.17-.82.3-1.25.4L317 113h-2l-.84-4.21c-.43-.1-.85-.24-1.25-.4l-3.15 2.9-1.62-1.17 1.8-3.9a8.03 8.03 0 0 1-.78-1.06l-4.26.5-.62-1.9 3.75-2.1' +
            'a8.1 8.1 0 0 1 0-1.31l-3.75-2.1.62-1.9 4.26.5c.23-.38.49-.74.77-1.06zM316 106a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM75.73 179.2l-.6-2.1 1.74-1 1.51 1.57a9.93 9.93 0 0 1 2.1-.55L81 175h2l.53 2.12' +
            'c.72.1 1.42.3 2.09.55l1.51-1.56 1.74 1-.6 2.1c.56.45 1.07.96 1.52 1.52l2.1-.6 1 1.74-1.56 1.51c.25.67.44 1.37.55 2.1L94 186v2l-2.12.53a9.9 9.9 0 0 1-.55 2.09l1.56 1.51-1 1.74-2.1-.6' +
            'a9.93 9.93 0 0 1-1.52 1.52l.6 2.1-1.74 1-1.51-1.56c-.67.25-1.37.44-2.1.55L83 199h-2l-.53-2.12c-.71-.1-1.42-.3-2.09-.55l-1.51 1.56-1.74-1 .6-2.1a9.93 9.93 0 0 1-1.52-1.52l-2.1.6-1-1.74 1.56-1.51' +
            'a9.93 9.93 0 0 1-.55-2.1L70 188v-2l2.12-.53c.1-.72.3-1.42.55-2.09l-1.56-1.51 1-1.74 2.1.6c.45-.56.96-1.07 1.52-1.52v-.01zm2.15.94a8.04 8.04 0 0 0-2.74 2.74l-.14.25a7.96 7.96 0 0 0 0 7.74l.14.25' +
            'a8.04 8.04 0 0 0 2.74 2.74l.25.14a7.96 7.96 0 0 0 7.74 0l.25-.14a8.04 8.04 0 0 0 2.74-2.74l.14-.25a7.96 7.96 0 0 0 0-7.74l-.14-.25a8.04 8.04 0 0 0-2.74-2.74l-.25-.14a7.96 7.96 0 0 0-7.74 0l-.25.14' +
            'zM82 193a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm278 3.18l-3.8 5.6-7.18-3.51 2.6-8.07a32.15 32.15 0 0 1-3.07-2.46l-7.27 4.35-5.04-6.22 5.82-6.26' +
            'c-.64-1.13-1.2-2.3-1.7-3.52l-8.45.73-1.8-7.8 7.95-3.07a32.5 32.5 0 0 1 0-3.9l-7.95-3.07 1.8-7.8 8.45.73a31.7 31.7 0 0 1 1.7-3.52l-5.82-6.26 5.04-6.22 7.27 4.35' +
            'c.97-.88 2-1.7 3.07-2.46l-2.6-8.07 7.19-3.5 3.79 5.59v64.36zm0-3.53v-57.3l-4.46-6.58-4.1 2 2.53 7.87a30.14 30.14 0 0 0-5.13 4.1l-7.08-4.24-2.88 3.55 5.65 6.09' +
            'a29.87 29.87 0 0 0-2.82 5.86l-8.24-.7-1.03 4.46 7.73 2.99a30.34 30.34 0 0 0 0 6.5l-7.73 3 1.03 4.45 8.24-.7a29.87 29.87 0 0 0 2.82 5.86l-5.65 6.1 2.88 3.54 7.08-4.23' +
            'a30.14 30.14 0 0 0 5.13 4.09l-2.54 7.86 4.11 2 4.46-6.57zm0-51.57v5.71l-3.56-3.8a24.94 24.94 0 0 1 3.56-1.91zm0 22.68l-14.17 6.64c-2.5-9.5.77-19.57 8.38-25.78l5.79 10.5v8.64zm0 23.16' +
            'a25.08 25.08 0 0 1-13.32-13.9l13.32-2.55v16.45zm0-43.64l-.39.2.39.4v-.6zm0 18.29v-2.35l-6.3-11.44a22.93 22.93 0 0 0-6.43 19.76l12.73-5.97zm0 23.15v-12.23l-10.47 2.01A23.1 23.1 0 0 0 360 182.72' +
            'zM0 129.82l1 1.46a31.8 31.8 0 0 1 3.8-.86L6 122h8l1.2 8.42c1.3.21 2.57.5 3.8.86l4.8-7.06 7.18 3.51-2.6 8.07c1.07.76 2.1 1.58 3.07 2.46l7.27-4.35 5.04 6.22-5.82 6.26' +
            'c.64 1.13 1.2 2.3 1.7 3.52l8.45-.73 1.8 7.8-7.95 3.07c.08 1.3.08 2.6 0 3.9l7.95 3.07-1.8 7.8-8.45-.73a33.5 33.5 0 0 1-1.7 3.52l5.82 6.26-5.04 6.22-7.27-4.35c-.97.88-2 1.7-3.07 2.46l2.6 8.07-7.19 3.5-4.78-7.05' +
            'c-1.24.36-2.51.65-3.8.86L14 202H6l-1.2-8.42a31.8 31.8 0 0 1-3.8-.86l-1 1.46v-64.36zm0 3.53v57.3l.2-.29c2.02.7 4.15 1.2 6.34 1.44l1.17 8.2h4.58l1.17-8.2c2.2-.25 4.32-.74 6.35-1.44l4.65 6.87 4.1-2-2.53-7.87' +
            'a30.14 30.14 0 0 0 5.13-4.1l7.08 4.24 2.88-3.55-5.65-6.09c1.14-1.83 2.1-3.8 2.82-5.86l8.24.7 1.03-4.46-7.73-2.99a30.7 30.7 0 0 0 0-6.5l7.73-3-1.03-4.45-8.24.7' +
            'a29.87 29.87 0 0 0-2.82-5.86l5.65-6.1-2.88-3.54-7.08 4.23a30.14 30.14 0 0 0-5.13-4.09l2.54-7.86-4.11-2-4.65 6.86a29.82 29.82 0 0 0-6.35-1.44l-1.17-8.2H7.7l-1.17 8.2c-2.2.25-4.32.74-6.35 1.44l-.19-.29H0' +
            'zm34.17 35.05l-16.26-7.62a7.94 7.94 0 0 0-.8-2.44l8.68-15.72a24.95 24.95 0 0 1 8.38 25.78zm-.85 2.63a25.01 25.01 0 0 1-21.94 15.93l2.23-17.82a8.3 8.3 0 0 0 2.07-1.5l17.64 3.39zM0 139.08' +
            'A24.92 24.92 0 0 1 10 137c5 0 9.65 1.47 13.56 4l-12.28 13.1a8.06 8.06 0 0 0-2.56 0L0 144.8v-5.72zm0 22.68v-8.65l2.88 5.23c-.4.77-.66 1.59-.79 2.44l-2.09.98zm0 23.16v-16.45l4.32-.83' +
            'c.6.6 1.3 1.11 2.07 1.5l2.23 17.82c-2.97-.16-5.9-.85-8.62-2.04zM10 156a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM0 141.28v.6l9.48 10.13c.35-.02.7-.02 1.04 0l9.87-10.54' +
            'A22.9 22.9 0 0 0 10 139c-3.58 0-6.98.82-10 2.28zm0 18.29l.34-.16c.09-.34.2-.67.32-.99l-.66-1.2v2.35zm0 23.15c1.97.95 4.1 1.63 6.34 1.99l-1.8-14.33a11.6 11.6 0 0 1-.83-.6l-3.71.7v12.24' +
            'zm13.66 1.99a23.03 23.03 0 0 0 16.8-12.21l-14.17-2.72c-.27.21-.55.42-.84.6l-1.79 14.33zm19.07-19.17a22.93 22.93 0 0 0-6.42-19.75l-6.97 12.63c.12.32.23.65.32.99l13.07 6.13' +
            'zM137.54 360l-4.07-5.7 2.83-2.83 6.73 4.8c.7-.56 1.4-1.11 2.14-1.63l-2.9-7.75 3.46-2 5.25 6.38c.82-.37 1.65-.72 2.5-1.03l-.8-8.22 3.86-1.04 3.43 7.52c.88-.15 1.77-.26 2.67-.35' +
            'L164 340h4l1.36 8.15c.9.09 1.8.2 2.67.35l3.43-7.52 3.86 1.04-.8 8.22c.85.31 1.68.66 2.5 1.03l5.25-6.38 3.46 2-2.9 7.75c.74.52 1.45 1.07 2.14 1.64l6.73-4.8 2.83 2.82-4.07 5.7h-56.92' +
            'zm2.43 0h52.06l3.9-5.46-.47-.47-6.63 4.73a34.14 34.14 0 0 0-4.4-3.38l2.86-7.63-.58-.33-5.18 6.29a33.79 33.79 0 0 0-5.12-2.13l.78-8.1-.64-.18-3.37 7.42a' +
            '34.02 34.02 0 0 0-5.5-.72l-1.35-8.04h-.66l-1.34 8.04c-1.88.1-3.72.33-5.5.72l-3.38-7.42-.64.18.78 8.1a33.88 33.88 0 0 0-5.12 2.13l-5.18-6.29-.58.33 2.86 7.63' +
            'c-1.56 1-3.03 2.14-4.4 3.38l-6.63-4.73-.47.47 3.9 5.46zm9.75 0a28.83 28.83 0 0 1 13.28-4.85V360h-13.28zm32.56 0H169v-4.85c4.9.5 9.42 2.22 13.28 4.85zm-28.66 0H161v-2.54' +
            'a26.8 26.8 0 0 0-7.38 2.54zm24.76 0a26.8 26.8 0 0 0-7.38-2.54V360h7.38zM358.79 0h-1.21l1.5 3.28a48.3 48.3 0 0 0-5.8 5.8l-9.38-4.3-1.65 2.26 7 7.58a47.84 47.84 0 0 0-3.74 7.33l-10.24-1.2-.86 2.66 8.99 5.05' +
            'a47.91 47.91 0 0 0-1.28 8.12L332 38.6v2.8l10.12 2.02c.2 2.78.63 5.5 1.28 8.12l-9 5.05.87 2.66 10.24-1.2c1.04 2.54 2.29 5 3.74 7.33l-7 7.58 1.65 2.26 9.38-4.3' +
            'a48.3 48.3 0 0 0 5.8 5.8l-4.3 9.38 2.26 1.65 2.96-2.73v2.66l-2.84 2.62-4.85-3.52 4.36-9.5a50.31 50.31 0 0 1-3.95-3.95l-9.5 4.36-3.52-4.85 7.08-7.68a49.83 49.83 0 0 1-2.54-4.98l-10.38 1.21-1.85-5.7 9.11-5.12' +
            'a49.9 49.9 0 0 1-.87-5.52L330 43v-6l10.25-2.05c.19-1.87.48-3.72.87-5.52l-9.11-5.12 1.85-5.7 10.38 1.21c.75-1.71 1.6-3.37 2.54-4.98l-7.08-7.68 3.52-4.85 9.5 4.36a50.31 50.31 0 0 1 3.95-3.95' +
            'L355.42 0h3.37zM360 52.7l-6.48 3.74A39.86 39.86 0 0 1 350 40a39.9 39.9 0 0 1 3.52-16.44L360 27.3v25.4zm0-39.16v4.52l-2.47-1.43c.77-1.07 1.6-2.1 2.47-3.09zm0 52.92c-.87-.99-1.7-2.02-2.47-3.1l2.47-1.42' +
            'v4.52zm0-16.07V29.61l-5.5-3.18a37.91 37.91 0 0 0 0 27.14l5.5-3.18zM62.42 360h2.16l3.11-6.78-4.85-3.52-7.68 7.08a49.83 49.83 0 0 0-4.98-2.54l1.21-10.38-5.7-1.85-5.12 9.11a49.9 49.9 0 0 0-5.52-.87' +
            'L33 340h-6l-2.05 10.25c-1.85.19-3.7.48-5.52.87l-5.12-9.11-5.7 1.85 1.21 10.38c-1.71.75-3.37 1.6-4.98 2.54L0 352.32v5.17-2.5l4.62 4.26a47.84 47.84 0 0 1 7.33-3.74l-1.2-10.24 2.66-.86 5.05 8.99' +
            'a47.91 47.91 0 0 1 8.12-1.28L28.6 342h2.8l2.02 10.12c2.78.2 5.5.63 8.12 1.28l5.05-9 2.66.87-1.2 10.24c2.54 1.04 5 2.29 7.33 3.74l7.58-7 2.26 1.65-2.8 6.1zM360 244.51l-1.44-.2-.8 1.38 2 2.54.24.17' +
            'v-3.89zm0 14.45l-4-.4-3.16.66-.28 1.58 2.75 1.7 4.69 1.2v-4.74zm0 13.33l-4.7 1.2-2.74 1.71.28 1.58 3.16.66 4-.4v-4.75zm0 15.31l-.24.17-2 2.54.8 1.38 1.44-.2v-3.89' +
            'zm0 5.76l-2.57.37-2-3.46 3.33-4.23 1.24-.85v8.17zm0-14.31l-3.65.36-5.27-1.1-.7-3.94 4.58-2.84 5.04-1.3v8.82zm0-13.28l-5.04-1.3-4.58-2.84.7-3.93 5.27-1.1 3.65.35v8.82' +
            'zm0-14.96l-1.24-.85-3.33-4.23 2-3.46 2.57.37v8.17zm0 101.5V360h-4.58l-3.11-6.78 4.85-3.52 2.84 2.62v-.01zm0 2.67l-2.96-2.73-2.26 1.65 2.8 6.1H360v-5.02z';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], FrameText.prototype, "strokeWidth", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FrameText.prototype, "strokeColour", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FrameText.prototype, "frameType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FrameText.prototype, "fillColour", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FrameText.prototype, "fillType", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], FrameText.prototype, "fillSize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], FrameText.prototype, "radius", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("self"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], FrameText.prototype, "self", void 0);
FrameText = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-frame-text',
        template: __webpack_require__(/*! ./frame-text.html */ "./src/app/modules/shared/frame-text/frame-text.html"),
        styles: [__webpack_require__(/*! ./frame-text.scss */ "./src/app/modules/shared/frame-text/frame-text.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], FrameText);



/***/ }),

/***/ "./src/app/modules/shared/more-or-less-button/more-or-less-button.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shared/more-or-less-button/more-or-less-button.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div id=\"buttonWrapper\"  >\r\n    <button  class=\"moreOrLessButton\" (click)=\"doCommand(type)\">\r\n      <svg width=\"100%\" height=\"100%\" viewBox=\"0 0 100 100\" >\r\n        <rect class=\"slider\" [attr.x.]=\"getRectX()\" y=\"40\" width=\"50\" height=\"20\" style=\"stroke-width:3\" />\r\n        \r\n        <!--  -->\r\n        <g #marker range-marker-symbol [x]=\"50\" [y]=\"50\" \r\n        [radius]=\"30\"  [isMin]=\"isMin\"/>  \r\n        \r\n        \r\n        <polygon [attr.points.]=\"getPoints()\" style=\"fill:lime;stroke:purple;stroke-width:1\" /> \r\n      </svg> \r\n    </button>\r\n  </div> \r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/shared/more-or-less-button/more-or-less-button.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shared/more-or-less-button/more-or-less-button.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n$range-marker-gradientmin1: #ffffff;\r\n$range-marker-gradientmin2: #ffc040;\r\n$range-marker-gradientmin3: #ff8040;\r\n$range-marker-gradientmin4: #000000;\r\n\r\n\r\n$range-marker-gradientmax1: #ffffff;\r\n$range-marker-gradientmax2: #87a77f;\r\n$range-marker-gradientmax3: #dcfdf0;\r\n$range-marker-gradientmax4: #000000;\r\n*/\n/*\r\n$range-marker-gradient1: #ffffff;\r\n$range-marker-gradient2: #4d40ff;\r\n$range-marker-gradient3: #ff40a6;\r\n$range-marker-gradient4: #000000;\r\n*/\n.slider {\n  stroke: #bd222e;\n  fill: #505050; }\n#buttonWrapper {\n  display: flex;\n  flex-direction: row;\n  place-content: space-evenly; }\n/*\r\n.moreOrLessButton {\r\n  width: 20vw;\r\n  height: 20vw;\r\n  font-size: 8vh;\r\n  margin: 1vw;\r\n  border-radius: 1vw;\r\n  border: 3px solid $labelBorderCol; \r\n}\r\n*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvbW9yZS1vci1sZXNzLWJ1dHRvbi9EOlxcX0RhdGFcXFByaXZhdGVDb2RlXFxfZ2l0UHplS25tXFxUcmVhc3VyZUh1bnRcXEFuZ3VsYXJTUEFcXFNhbmRnYXRlVEgvc3JjXFxhcHBcXHN0eWxlc1xcbW9yZS1vci1sZXNzLWNvbG91cnMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvbW9yZS1vci1sZXNzLWJ1dHRvbi9tb3JlLW9yLWxlc3MtYnV0dG9uLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL21vcmUtb3ItbGVzcy1idXR0b24vRDpcXF9EYXRhXFxQcml2YXRlQ29kZVxcX2dpdFB6ZUtubVxcVHJlYXN1cmVIdW50XFxBbmd1bGFyU1BBXFxTYW5kZ2F0ZVRIL3NyY1xcYXBwXFxtb2R1bGVzXFxzaGFyZWRcXG1vcmUtb3ItbGVzcy1idXR0b25cXG1vcmUtb3ItbGVzcy1idXR0b24uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q0E7Ozs7Ozs7Ozs7O0NDakNDO0FENkNEOzs7OztDQ3ZDQztBQ1hEO0VBQ0UsZUZNMEM7RUVMMUMsYUZJOEMsRUFBQTtBRUVoRDtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCLEVBQUE7QUFJN0I7Ozs7Ozs7OztDRGVDIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvbW9yZS1vci1sZXNzLWJ1dHRvbi9tb3JlLW9yLWxlc3MtYnV0dG9uLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcGxhY2Ugd2hlcmUgdGhlIGNvbG9yIHNjaGVtZSBmb3IgdGhlIG5vbi1nYW1lIHBhcnRzIG9mIHRoZSBhcHBcclxuXHJcbi8vIFxyXG4vLyBodHRwczovL215Y29sb3Iuc3BhY2UvP2hleD0lMjNCRDIyMkUmc3ViPTFcclxuXHJcbiRzY29yZS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiRzY29yZS1ib3JkZXItY29sb3I6IHJnYigyMzQsIDI0LCAxMjkpO1xyXG5cclxuXHJcbiRyYW5nZS1zZWxlY3Rvci1iYWNrZ3JvdW5kLWZpbGwtY29sb3I6ICNkNmY0ZmY7XHJcbiRyYW5nZS1zZWxlY3Rvci1iYWNrZ3JvdW5kLXN0cm9rZS1jb2xvcjogIzVkN2E5ODtcclxuXHJcbiRyYW5nZS1zZWxlY3Rvci1zbGlkZXItZmlsbC1jb2xvcjogcmdiKDgwLDgwLDgwKTtcclxuJHJhbmdlLXNlbGVjdG9yLXNsaWRlci1zdHJva2UtY29sb3I6ICNiZDIyMmU7XHJcblxyXG4vLyBUb3Agcm93IHN0YXRpYyBsYWJlbHNcclxuJHJhbmdlLXNlbGVjdG9yLW1pbm1heC1maWxsLWNvbG9yOiAjYmZhNWEyO1xyXG4kcmFuZ2Utc2VsZWN0b3ItbWlubWF4LXN0cm9rZS1jb2xvcjogIzVkN2E5ODtcclxuXHJcbi8vIE1vdmluZyBsYWJlbHNcclxuJHJhbmdlLXNlbGVjdG9yLWxhYmVsLWZpbGwtY29sb3I6ICM2NWIxZjM7XHJcbiRyYW5nZS1zZWxlY3Rvci1sYWJlbC1zdHJva2UtY29sb3I6ICM1ZDdhOTg7XHJcblxyXG4vLyBhbnN3ZXIgc2hhcGVcclxuJHJhbmdlLXNlbGVjdG9yLWFuc3dlci1maWxsLWNvbG9yOiAjNzZhMjE4O1xyXG4kcmFuZ2Utc2VsZWN0b3ItYW5zd2VyLXN0cm9rZS1jb2xvcjogIzNmNmUwMDtcclxuXHJcblxyXG5cclxuXHJcbiRyYW5nZS1zZWxlY3Rvci1iYWxsLWZpbGwtY29sb3I6ICNiY2QxNDQ7XHJcbiRyYW5nZS1zZWxlY3Rvci1iYWxsLXN0cm9rZS1jb2xvcjogIzBlMTU1MztcclxuXHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4xOiAjZmZmZmZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMjogcmdiKDI1NCwgMjQ1LCAxNzApO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMzogcmdiKDIxMSwgMTYzLCA5NCk7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW40OiAjMDAwMDAwO1xyXG5cclxuXHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgxOiAjZmZmZmZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MjogcmdiKDI1MiwgMjI0LCAxODUpO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MzogcmdiKDE1MSwgMTIwLCA5Myk7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXg0OiAjMDAwMDAwO1xyXG5cclxuLypcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjE6ICNmZmZmZmY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4yOiAjZmZjMDQwO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMzogI2ZmODA0MDtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjQ6ICMwMDAwMDA7XHJcblxyXG5cclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDE6ICNmZmZmZmY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgyOiAjODdhNzdmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MzogI2RjZmRmMDtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDQ6ICMwMDAwMDA7XHJcbiovXHJcbi8qXHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnQxOiAjZmZmZmZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50MjogIzRkNDBmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudDM6ICNmZjQwYTY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnQ0OiAjMDAwMDAwO1xyXG4qL1xyXG5cclxuXHJcblxyXG4iLCIvKlxyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMTogI2ZmZmZmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjI6ICNmZmMwNDA7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4zOiAjZmY4MDQwO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluNDogIzAwMDAwMDtcclxuXHJcblxyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MTogI2ZmZmZmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDI6ICM4N2E3N2Y7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgzOiAjZGNmZGYwO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4NDogIzAwMDAwMDtcclxuKi9cbi8qXHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnQxOiAjZmZmZmZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50MjogIzRkNDBmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudDM6ICNmZjQwYTY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnQ0OiAjMDAwMDAwO1xyXG4qL1xuLnNsaWRlciB7XG4gIHN0cm9rZTogI2JkMjIyZTtcbiAgZmlsbDogIzUwNTA1MDsgfVxuXG4jYnV0dG9uV3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHBsYWNlLWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgfVxuXG4vKlxyXG4ubW9yZU9yTGVzc0J1dHRvbiB7XHJcbiAgd2lkdGg6IDIwdnc7XHJcbiAgaGVpZ2h0OiAyMHZ3O1xyXG4gIGZvbnQtc2l6ZTogOHZoO1xyXG4gIG1hcmdpbjogMXZ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDF2dztcclxuICBib3JkZXI6IDNweCBzb2xpZCAkbGFiZWxCb3JkZXJDb2w7IFxyXG59XHJcbiovXG4iLCJcclxuXHJcblxyXG5AaW1wb3J0IFwiLi4vLi4vLi4vc3R5bGVzL21vcmUtb3ItbGVzcy1jb2xvdXJzLnNjc3NcIjtcclxuXHJcblxyXG4uc2xpZGVyIHtcclxuICBzdHJva2U6ICRyYW5nZS1zZWxlY3Rvci1zbGlkZXItc3Ryb2tlLWNvbG9yOyBcclxuICBmaWxsOiAkcmFuZ2Utc2VsZWN0b3Itc2xpZGVyLWZpbGwtY29sb3I7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiNidXR0b25XcmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4OyBcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHBsYWNlLWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuXHJcbi8qXHJcbi5tb3JlT3JMZXNzQnV0dG9uIHtcclxuICB3aWR0aDogMjB2dztcclxuICBoZWlnaHQ6IDIwdnc7XHJcbiAgZm9udC1zaXplOiA4dmg7XHJcbiAgbWFyZ2luOiAxdnc7XHJcbiAgYm9yZGVyLXJhZGl1czogMXZ3O1xyXG4gIGJvcmRlcjogM3B4IHNvbGlkICRsYWJlbEJvcmRlckNvbDsgXHJcbn1cclxuKi8iXX0= */"

/***/ }),

/***/ "./src/app/modules/shared/more-or-less-button/more-or-less-button.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/shared/more-or-less-button/more-or-less-button.ts ***!
  \***************************************************************************/
/*! exports provided: MoreOrLessButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreOrLessButton", function() { return MoreOrLessButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MoreOrLessButton = class MoreOrLessButton {
    constructor() {
        this.size = '10vw';
        this.isMin = true;
        this.command = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    doCommand(cmd) {
        this.command.emit(cmd);
    }
    getPoints() {
        if (this.type == 'DecLo' || this.type == 'DecHi') {
            return '30,50 60,30 60,70';
        }
        if (this.type == 'IncLo' || this.type == 'IncHi') {
            return '70,50 40,30 40,70';
        }
        return '30,50 60,30 60,70';
    }
    getRectX() {
        if (this.type == 'DecLo' || this.type == 'IncLo') {
            return 50;
        }
        return 0;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MoreOrLessButton.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], MoreOrLessButton.prototype, "size", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], MoreOrLessButton.prototype, "isMin", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MoreOrLessButton.prototype, "command", void 0);
MoreOrLessButton = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-more-or-less-button',
        template: __webpack_require__(/*! ./more-or-less-button.html */ "./src/app/modules/shared/more-or-less-button/more-or-less-button.html"),
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [__webpack_require__(/*! ./more-or-less-button.scss */ "./src/app/modules/shared/more-or-less-button/more-or-less-button.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MoreOrLessButton);



/***/ }),

/***/ "./src/app/modules/shared/range-marker-symbol/range-marker-symbol.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shared/range-marker-symbol/range-marker-symbol.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n <svg>\r\n\r\n  <defs>\r\n    <radialGradient id=\"ShinyMin\"\r\n      cx=\"0.5\" cy=\"0.5\" r=\"0.5\" fx=\"0.25\" fy=\"0.25\">\r\n\r\n     <stop class=\"gradient_min1\" offset=\"0%\"/>\r\n     <stop class=\"gradient_min2\" offset=\"50%\"/>  \r\n     <stop class=\"gradient_min3\" offset=\"75%\"/>\r\n     <stop class=\"gradient_min4\" offset=\"100%\"/>  \r\n\r\n    </radialGradient>\r\n\r\n    <radialGradient id=\"ShinyMax\"\r\n      cx=\"0.5\" cy=\"0.5\" r=\"0.5\" fx=\"0.25\" fy=\"0.25\">\r\n\r\n      <stop class=\"gradient_max1\" offset=\"0%\"/>\r\n      <stop class=\"gradient_max2\" offset=\"50%\"/>  \r\n      <stop class=\"gradient_max3\" offset=\"75%\"/>\r\n      <stop class=\"gradient_max4\" offset=\"100%\"/>  \r\n\r\n    </radialGradient>\r\n\r\n   </defs>\r\n \r\n  <!-- fill=\"url(#Shiny)\" -->\r\n  <circle  [attr.cx.] =\"getXPos()\" [attr.cy.]=\"getYPos()\" [attr.r.]=\"getRadius()\"\r\n       [attr.fill.] =\"getFill()\" />\r\n\r\n</svg>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/shared/range-marker-symbol/range-marker-symbol.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shared/range-marker-symbol/range-marker-symbol.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n$range-marker-gradientmin1: #ffffff;\r\n$range-marker-gradientmin2: #ffc040;\r\n$range-marker-gradientmin3: #ff8040;\r\n$range-marker-gradientmin4: #000000;\r\n\r\n\r\n$range-marker-gradientmax1: #ffffff;\r\n$range-marker-gradientmax2: #87a77f;\r\n$range-marker-gradientmax3: #dcfdf0;\r\n$range-marker-gradientmax4: #000000;\r\n*/\n/*\r\n$range-marker-gradient1: #ffffff;\r\n$range-marker-gradient2: #4d40ff;\r\n$range-marker-gradient3: #ff40a6;\r\n$range-marker-gradient4: #000000;\r\n*/\n.gradient_min1 {\n  stop-color: #ffffff; }\n.gradient_min2 {\n  stop-color: #fef5aa; }\n.gradient_min3 {\n  stop-color: #d3a35e; }\n.gradient_min4 {\n  stop-color: #000000; }\n.gradient_max1 {\n  stop-color: #ffffff; }\n.gradient_max2 {\n  stop-color: #fce0b9; }\n.gradient_max3 {\n  stop-color: #97785d; }\n.gradient_max4 {\n  stop-color: #000000; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvcmFuZ2UtbWFya2VyLXN5bWJvbC9EOlxcX0RhdGFcXFByaXZhdGVDb2RlXFxfZ2l0UHplS25tXFxUcmVhc3VyZUh1bnRcXEFuZ3VsYXJTUEFcXFNhbmRnYXRlVEgvc3JjXFxhcHBcXHN0eWxlc1xcbW9yZS1vci1sZXNzLWNvbG91cnMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvcmFuZ2UtbWFya2VyLXN5bWJvbC9yYW5nZS1tYXJrZXItc3ltYm9sLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL3JhbmdlLW1hcmtlci1zeW1ib2wvRDpcXF9EYXRhXFxQcml2YXRlQ29kZVxcX2dpdFB6ZUtubVxcVHJlYXN1cmVIdW50XFxBbmd1bGFyU1BBXFxTYW5kZ2F0ZVRIL3NyY1xcYXBwXFxtb2R1bGVzXFxzaGFyZWRcXHJhbmdlLW1hcmtlci1zeW1ib2xcXHJhbmdlLW1hcmtlci1zeW1ib2wuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q0E7Ozs7Ozs7Ozs7O0NDakNDO0FENkNEOzs7OztDQ3ZDQztBQ1pEO0VBQ0UsbUJGMkJpQyxFQUFBO0FFeEJuQztFQUNFLG1CRndCNEMsRUFBQTtBRXJCOUM7RUFDRSxtQkZxQjJDLEVBQUE7QUVsQjdDO0VBQ0UsbUJGa0JpQyxFQUFBO0FFZG5DO0VBQ0UsbUJGZ0JpQyxFQUFBO0FFYm5DO0VBQ0UsbUJGYTRDLEVBQUE7QUVWOUM7RUFDRSxtQkZVMkMsRUFBQTtBRVA3QztFQUNFLG1CRk9pQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvcmFuZ2UtbWFya2VyLXN5bWJvbC9yYW5nZS1tYXJrZXItc3ltYm9sLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcGxhY2Ugd2hlcmUgdGhlIGNvbG9yIHNjaGVtZSBmb3IgdGhlIG5vbi1nYW1lIHBhcnRzIG9mIHRoZSBhcHBcclxuXHJcbi8vIFxyXG4vLyBodHRwczovL215Y29sb3Iuc3BhY2UvP2hleD0lMjNCRDIyMkUmc3ViPTFcclxuXHJcbiRzY29yZS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiRzY29yZS1ib3JkZXItY29sb3I6IHJnYigyMzQsIDI0LCAxMjkpO1xyXG5cclxuXHJcbiRyYW5nZS1zZWxlY3Rvci1iYWNrZ3JvdW5kLWZpbGwtY29sb3I6ICNkNmY0ZmY7XHJcbiRyYW5nZS1zZWxlY3Rvci1iYWNrZ3JvdW5kLXN0cm9rZS1jb2xvcjogIzVkN2E5ODtcclxuXHJcbiRyYW5nZS1zZWxlY3Rvci1zbGlkZXItZmlsbC1jb2xvcjogcmdiKDgwLDgwLDgwKTtcclxuJHJhbmdlLXNlbGVjdG9yLXNsaWRlci1zdHJva2UtY29sb3I6ICNiZDIyMmU7XHJcblxyXG4vLyBUb3Agcm93IHN0YXRpYyBsYWJlbHNcclxuJHJhbmdlLXNlbGVjdG9yLW1pbm1heC1maWxsLWNvbG9yOiAjYmZhNWEyO1xyXG4kcmFuZ2Utc2VsZWN0b3ItbWlubWF4LXN0cm9rZS1jb2xvcjogIzVkN2E5ODtcclxuXHJcbi8vIE1vdmluZyBsYWJlbHNcclxuJHJhbmdlLXNlbGVjdG9yLWxhYmVsLWZpbGwtY29sb3I6ICM2NWIxZjM7XHJcbiRyYW5nZS1zZWxlY3Rvci1sYWJlbC1zdHJva2UtY29sb3I6ICM1ZDdhOTg7XHJcblxyXG4vLyBhbnN3ZXIgc2hhcGVcclxuJHJhbmdlLXNlbGVjdG9yLWFuc3dlci1maWxsLWNvbG9yOiAjNzZhMjE4O1xyXG4kcmFuZ2Utc2VsZWN0b3ItYW5zd2VyLXN0cm9rZS1jb2xvcjogIzNmNmUwMDtcclxuXHJcblxyXG5cclxuXHJcbiRyYW5nZS1zZWxlY3Rvci1iYWxsLWZpbGwtY29sb3I6ICNiY2QxNDQ7XHJcbiRyYW5nZS1zZWxlY3Rvci1iYWxsLXN0cm9rZS1jb2xvcjogIzBlMTU1MztcclxuXHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4xOiAjZmZmZmZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMjogcmdiKDI1NCwgMjQ1LCAxNzApO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMzogcmdiKDIxMSwgMTYzLCA5NCk7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW40OiAjMDAwMDAwO1xyXG5cclxuXHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgxOiAjZmZmZmZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MjogcmdiKDI1MiwgMjI0LCAxODUpO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MzogcmdiKDE1MSwgMTIwLCA5Myk7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXg0OiAjMDAwMDAwO1xyXG5cclxuLypcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjE6ICNmZmZmZmY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4yOiAjZmZjMDQwO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMzogI2ZmODA0MDtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjQ6ICMwMDAwMDA7XHJcblxyXG5cclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDE6ICNmZmZmZmY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgyOiAjODdhNzdmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MzogI2RjZmRmMDtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDQ6ICMwMDAwMDA7XHJcbiovXHJcbi8qXHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnQxOiAjZmZmZmZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50MjogIzRkNDBmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudDM6ICNmZjQwYTY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnQ0OiAjMDAwMDAwO1xyXG4qL1xyXG5cclxuXHJcblxyXG4iLCIvKlxyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMTogI2ZmZmZmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjI6ICNmZmMwNDA7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4zOiAjZmY4MDQwO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluNDogIzAwMDAwMDtcclxuXHJcblxyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MTogI2ZmZmZmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDI6ICM4N2E3N2Y7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgzOiAjZGNmZGYwO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4NDogIzAwMDAwMDtcclxuKi9cbi8qXHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnQxOiAjZmZmZmZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50MjogIzRkNDBmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudDM6ICNmZjQwYTY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnQ0OiAjMDAwMDAwO1xyXG4qL1xuLmdyYWRpZW50X21pbjEge1xuICBzdG9wLWNvbG9yOiAjZmZmZmZmOyB9XG5cbi5ncmFkaWVudF9taW4yIHtcbiAgc3RvcC1jb2xvcjogI2ZlZjVhYTsgfVxuXG4uZ3JhZGllbnRfbWluMyB7XG4gIHN0b3AtY29sb3I6ICNkM2EzNWU7IH1cblxuLmdyYWRpZW50X21pbjQge1xuICBzdG9wLWNvbG9yOiAjMDAwMDAwOyB9XG5cbi5ncmFkaWVudF9tYXgxIHtcbiAgc3RvcC1jb2xvcjogI2ZmZmZmZjsgfVxuXG4uZ3JhZGllbnRfbWF4MiB7XG4gIHN0b3AtY29sb3I6ICNmY2UwYjk7IH1cblxuLmdyYWRpZW50X21heDMge1xuICBzdG9wLWNvbG9yOiAjOTc3ODVkOyB9XG5cbi5ncmFkaWVudF9tYXg0IHtcbiAgc3RvcC1jb2xvcjogIzAwMDAwMDsgfVxuIiwiXHJcblxyXG5cclxuQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL21vcmUtb3ItbGVzcy1jb2xvdXJzLnNjc3MnO1xyXG5cclxuLmdyYWRpZW50X21pbjEge1xyXG4gIHN0b3AtY29sb3I6ICRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4xO1xyXG59XHJcblxyXG4uZ3JhZGllbnRfbWluMiB7XHJcbiAgc3RvcC1jb2xvcjogJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjI7XHJcbn1cclxuXHJcbi5ncmFkaWVudF9taW4zIHtcclxuICBzdG9wLWNvbG9yOiAkcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMztcclxufVxyXG5cclxuLmdyYWRpZW50X21pbjQge1xyXG4gIHN0b3AtY29sb3I6ICRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW40O1xyXG59XHJcblxyXG5cclxuLmdyYWRpZW50X21heDEge1xyXG4gIHN0b3AtY29sb3I6ICRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgxO1xyXG59XHJcblxyXG4uZ3JhZGllbnRfbWF4MiB7XHJcbiAgc3RvcC1jb2xvcjogJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDI7XHJcbn1cclxuXHJcbi5ncmFkaWVudF9tYXgzIHtcclxuICBzdG9wLWNvbG9yOiAkcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MztcclxufVxyXG5cclxuLmdyYWRpZW50X21heDQge1xyXG4gIHN0b3AtY29sb3I6ICRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXg0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/shared/range-marker-symbol/range-marker-symbol.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/shared/range-marker-symbol/range-marker-symbol.ts ***!
  \***************************************************************************/
/*! exports provided: RangeMarkerSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeMarkerSymbol", function() { return RangeMarkerSymbol; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// The ball that goes up and down the slider
let RangeMarkerSymbol = class RangeMarkerSymbol {
    constructor() {
        // The position in svg coordinates
        this.position = 99;
        this.x = 0;
        this.y = 0;
        this.radius = 10;
        // whther the marker is for a min or a max
        this.isMin = false;
    }
    ngOnInit() {
    }
    getXPos() {
        return this.x;
    }
    getYPos() {
        return this.y;
    }
    getRadius() {
        return this.radius;
    }
    getFill() {
        if (this.isMin) {
            return 'url(#ShinyMin)';
        }
        else {
            return 'url(#ShinyMax)';
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], RangeMarkerSymbol.prototype, "position", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], RangeMarkerSymbol.prototype, "x", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], RangeMarkerSymbol.prototype, "y", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], RangeMarkerSymbol.prototype, "radius", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], RangeMarkerSymbol.prototype, "isMin", void 0);
RangeMarkerSymbol = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '[range-marker-symbol]',
        template: __webpack_require__(/*! ./range-marker-symbol.html */ "./src/app/modules/shared/range-marker-symbol/range-marker-symbol.html"),
        styles: [__webpack_require__(/*! ./range-marker-symbol.scss */ "./src/app/modules/shared/range-marker-symbol/range-marker-symbol.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RangeMarkerSymbol);



/***/ }),

/***/ "./src/app/modules/shared/score/score.component.html":
/*!***********************************************************!*\
  !*** ./src/app/modules/shared/score/score.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div style=\"display: flex; flex-direction: row;\" >\r\n\r\n  <div>Score: </div>\r\n\r\n  <div class=\"placeoverWrapper\">\r\n\r\n    <div id=\"scoreValue\" >{{currentScore}}</div>\r\n    <div id=\"placeover\"  [@myAnimationtrigger]=\"myAnimationStep\"\r\n        (@myAnimationtrigger.done)=\"myAnimationDone($event)\" >\r\n      <div id=\"scoreValue\" >{{oldScore}}</div>  \r\n    </div>   \r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n \r\n\r\n"

/***/ }),

/***/ "./src/app/modules/shared/score/score.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/modules/shared/score/score.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n$range-marker-gradientmin1: #ffffff;\r\n$range-marker-gradientmin2: #ffc040;\r\n$range-marker-gradientmin3: #ff8040;\r\n$range-marker-gradientmin4: #000000;\r\n\r\n\r\n$range-marker-gradientmax1: #ffffff;\r\n$range-marker-gradientmax2: #87a77f;\r\n$range-marker-gradientmax3: #dcfdf0;\r\n$range-marker-gradientmax4: #000000;\r\n*/\n/*\r\n$range-marker-gradient1: #ffffff;\r\n$range-marker-gradient2: #4d40ff;\r\n$range-marker-gradient3: #ff40a6;\r\n$range-marker-gradient4: #000000;\r\n*/\n#scoreWrapper {\n  display: flex;\n  flex-direction: row;\n  width: 90vw; }\n#scoreValue {\n  width: 10vw;\n  background-color: white;\n  border-radius: 1vw;\n  border: 3px solid #ea1881; }\n.placeoverWrapper {\n  position: relative; }\n#placeover {\n  position: absolute;\n  top: 0;\n  left: 0; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvc2NvcmUvRDpcXF9EYXRhXFxQcml2YXRlQ29kZVxcX2dpdFB6ZUtubVxcVHJlYXN1cmVIdW50XFxBbmd1bGFyU1BBXFxTYW5kZ2F0ZVRIL3NyY1xcYXBwXFxzdHlsZXNcXG1vcmUtb3ItbGVzcy1jb2xvdXJzLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL3Njb3JlL3Njb3JlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3NoYXJlZC9zY29yZS9EOlxcX0RhdGFcXFByaXZhdGVDb2RlXFxfZ2l0UHplS25tXFxUcmVhc3VyZUh1bnRcXEFuZ3VsYXJTUEFcXFNhbmRnYXRlVEgvc3JjXFxhcHBcXG1vZHVsZXNcXHNoYXJlZFxcc2NvcmVcXHNjb3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDQTs7Ozs7Ozs7Ozs7Q0NqQ0M7QUQ2Q0Q7Ozs7O0NDdkNDO0FDWkQ7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVUsRUFBQTtBQUdaO0VBQ0UsV0FBVTtFQUNWLHVCRlJ5QztFRVN6QyxrQkFBa0I7RUFDbEIseUJGVG9DLEVBQUE7QUVZdEM7RUFDRSxrQkFBa0IsRUFBQTtBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvc2NvcmUvc2NvcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcGxhY2Ugd2hlcmUgdGhlIGNvbG9yIHNjaGVtZSBmb3IgdGhlIG5vbi1nYW1lIHBhcnRzIG9mIHRoZSBhcHBcclxuXHJcbi8vIFxyXG4vLyBodHRwczovL215Y29sb3Iuc3BhY2UvP2hleD0lMjNCRDIyMkUmc3ViPTFcclxuXHJcbiRzY29yZS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiRzY29yZS1ib3JkZXItY29sb3I6IHJnYigyMzQsIDI0LCAxMjkpO1xyXG5cclxuXHJcbiRyYW5nZS1zZWxlY3Rvci1iYWNrZ3JvdW5kLWZpbGwtY29sb3I6ICNkNmY0ZmY7XHJcbiRyYW5nZS1zZWxlY3Rvci1iYWNrZ3JvdW5kLXN0cm9rZS1jb2xvcjogIzVkN2E5ODtcclxuXHJcbiRyYW5nZS1zZWxlY3Rvci1zbGlkZXItZmlsbC1jb2xvcjogcmdiKDgwLDgwLDgwKTtcclxuJHJhbmdlLXNlbGVjdG9yLXNsaWRlci1zdHJva2UtY29sb3I6ICNiZDIyMmU7XHJcblxyXG4vLyBUb3Agcm93IHN0YXRpYyBsYWJlbHNcclxuJHJhbmdlLXNlbGVjdG9yLW1pbm1heC1maWxsLWNvbG9yOiAjYmZhNWEyO1xyXG4kcmFuZ2Utc2VsZWN0b3ItbWlubWF4LXN0cm9rZS1jb2xvcjogIzVkN2E5ODtcclxuXHJcbi8vIE1vdmluZyBsYWJlbHNcclxuJHJhbmdlLXNlbGVjdG9yLWxhYmVsLWZpbGwtY29sb3I6ICM2NWIxZjM7XHJcbiRyYW5nZS1zZWxlY3Rvci1sYWJlbC1zdHJva2UtY29sb3I6ICM1ZDdhOTg7XHJcblxyXG4vLyBhbnN3ZXIgc2hhcGVcclxuJHJhbmdlLXNlbGVjdG9yLWFuc3dlci1maWxsLWNvbG9yOiAjNzZhMjE4O1xyXG4kcmFuZ2Utc2VsZWN0b3ItYW5zd2VyLXN0cm9rZS1jb2xvcjogIzNmNmUwMDtcclxuXHJcblxyXG5cclxuXHJcbiRyYW5nZS1zZWxlY3Rvci1iYWxsLWZpbGwtY29sb3I6ICNiY2QxNDQ7XHJcbiRyYW5nZS1zZWxlY3Rvci1iYWxsLXN0cm9rZS1jb2xvcjogIzBlMTU1MztcclxuXHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4xOiAjZmZmZmZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMjogcmdiKDI1NCwgMjQ1LCAxNzApO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMzogcmdiKDIxMSwgMTYzLCA5NCk7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW40OiAjMDAwMDAwO1xyXG5cclxuXHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgxOiAjZmZmZmZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MjogcmdiKDI1MiwgMjI0LCAxODUpO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MzogcmdiKDE1MSwgMTIwLCA5Myk7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXg0OiAjMDAwMDAwO1xyXG5cclxuLypcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjE6ICNmZmZmZmY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4yOiAjZmZjMDQwO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMzogI2ZmODA0MDtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjQ6ICMwMDAwMDA7XHJcblxyXG5cclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDE6ICNmZmZmZmY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgyOiAjODdhNzdmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MzogI2RjZmRmMDtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDQ6ICMwMDAwMDA7XHJcbiovXHJcbi8qXHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnQxOiAjZmZmZmZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50MjogIzRkNDBmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudDM6ICNmZjQwYTY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnQ0OiAjMDAwMDAwO1xyXG4qL1xyXG5cclxuXHJcblxyXG4iLCIvKlxyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMTogI2ZmZmZmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjI6ICNmZmMwNDA7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4zOiAjZmY4MDQwO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluNDogIzAwMDAwMDtcclxuXHJcblxyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MTogI2ZmZmZmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDI6ICM4N2E3N2Y7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgzOiAjZGNmZGYwO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4NDogIzAwMDAwMDtcclxuKi9cbi8qXHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnQxOiAjZmZmZmZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50MjogIzRkNDBmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudDM6ICNmZjQwYTY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnQ0OiAjMDAwMDAwO1xyXG4qL1xuI3Njb3JlV3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiA5MHZ3OyB9XG5cbiNzY29yZVZhbHVlIHtcbiAgd2lkdGg6IDEwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxdnc7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNlYTE4ODE7IH1cblxuLnBsYWNlb3ZlcldyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuI3BsYWNlb3ZlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwOyB9XG4iLCJcclxuXHJcblxyXG5AaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMvbW9yZS1vci1sZXNzLWNvbG91cnMuc2Nzcyc7XHJcblxyXG4jc2NvcmVXcmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4OyAgXHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB3aWR0aDo5MHZ3OyAgXHJcbn1cclxuXHJcbiNzY29yZVZhbHVlIHtcclxuICB3aWR0aDoxMHZ3OyBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2NvcmUtYmFja2dyb3VuZC1jb2xvcjtcclxuICBib3JkZXItcmFkaXVzOiAxdnc7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgJHNjb3JlLWJvcmRlci1jb2xvcjtcclxufVxyXG5cclxuLnBsYWNlb3ZlcldyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuI3BsYWNlb3ZlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG59ICJdfQ== */"

/***/ }),

/***/ "./src/app/modules/shared/score/score.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/shared/score/score.component.ts ***!
  \*********************************************************/
/*! exports provided: Score */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Score", function() { return Score; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



let Score = class Score {
    constructor() {
        this.score = 0;
        // The data attribute that will be manipulated to cause the animation
        this.myAnimationStep = 'stable'; // 'exitRight'
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.score !== undefined) {
            this.targetScore = changes.score.currentValue;
            if (changes.score.previousValue !== undefined) {
                // Changes to the score, not through initialisation      
                this.myAnimationStep = 'exitRight';
                this.currentScore++;
            }
            else {
                this.currentScore = changes.score.currentValue;
                this.oldScore = changes.score.currentValue;
            }
        }
    }
    myAnimationDone(event) {
        if (event.fromState === 'void') {
            return;
        }
        if (event.toState == 'exitRight') {
            // update the background display and reset the moving display
            this.oldScore = this.currentScore;
            this.myAnimationStep = 'stable';
        }
        if (event.toState == 'stable') {
            // One increment iterate has completed, do we need another one?
            if (this.currentScore !== this.targetScore) {
                this.myAnimationStep = 'exitRight';
                this.currentScore++;
            }
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], Score.prototype, "score", void 0);
Score = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-score',
        template: __webpack_require__(/*! ./score.component.html */ "./src/app/modules/shared/score/score.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('myAnimationtrigger', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('stable', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0%)', opacity: 1 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('exitRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(-100%)', opacity: 0 })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('stable => exitRight', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.2s')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('exitRight => stable', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.0s'))
            ])
        ],
        styles: [__webpack_require__(/*! ./score.component.scss */ "./src/app/modules/shared/score/score.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Score);



/***/ }),

/***/ "./src/app/modules/shared/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _frame_text_frame_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./frame-text/frame-text */ "./src/app/modules/shared/frame-text/frame-text.ts");
/* harmony import */ var _countdown_countdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./countdown/countdown.component */ "./src/app/modules/shared/countdown/countdown.component.ts");
/* harmony import */ var _more_or_less_button_more_or_less_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./more-or-less-button/more-or-less-button */ "./src/app/modules/shared/more-or-less-button/more-or-less-button.ts");
/* harmony import */ var _score_score_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./score/score.component */ "./src/app/modules/shared/score/score.component.ts");
/* harmony import */ var _range_marker_symbol_range_marker_symbol__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./range-marker-symbol/range-marker-symbol */ "./src/app/modules/shared/range-marker-symbol/range-marker-symbol.ts");








let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _frame_text_frame_text__WEBPACK_IMPORTED_MODULE_3__["FrameText"],
            _countdown_countdown_component__WEBPACK_IMPORTED_MODULE_4__["Countdown"],
            _more_or_less_button_more_or_less_button__WEBPACK_IMPORTED_MODULE_5__["MoreOrLessButton"],
            _score_score_component__WEBPACK_IMPORTED_MODULE_6__["Score"],
            _range_marker_symbol_range_marker_symbol__WEBPACK_IMPORTED_MODULE_7__["RangeMarkerSymbol"],
        ],
        exports: [
            _frame_text_frame_text__WEBPACK_IMPORTED_MODULE_3__["FrameText"],
            _countdown_countdown_component__WEBPACK_IMPORTED_MODULE_4__["Countdown"],
            _more_or_less_button_more_or_less_button__WEBPACK_IMPORTED_MODULE_5__["MoreOrLessButton"],
            _score_score_component__WEBPACK_IMPORTED_MODULE_6__["Score"],
            _range_marker_symbol_range_marker_symbol__WEBPACK_IMPORTED_MODULE_7__["RangeMarkerSymbol"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/modules/visualisations/more-or-less-viz/authentication-page/authentication-page.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/visualisations/more-or-less-viz/authentication-page/authentication-page.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div style=\"display: flex; flex-direction: column;\" >\r\n\r\n  <div id=\"more-or-lessBanner\"  >\r\n    <img id=\"more-or-lessBannerImg\" src='assets/images/more-or-less-banner-logo.svg' alt='image'>\r\n  </div>\r\n\r\n  <div style=\"display: flex; flex-direction: row;\" >\r\n\r\n    <div class=\"instructions\" style=\"display: flex; flex-direction: column; flex-basis: 65%;\"   >\r\n\r\n      <div id=\"authText\"   >\r\n        Enter access code\r\n      </div>\r\n  \r\n      <div style=\"display: flex; flex-direction: row; justify-content: center;\" >\r\n  \r\n        <div style=\"display: flex;    position:relative; width:30vh; height:30vh\" >\r\n          <app-graphic-display picture=\"HandRight\"    ></app-graphic-display>\r\n        </div>\r\n\r\n        <div style=\"position:relative; width:30vh; height:30vh\" >\r\n          <!-- xxx  -->\r\n          <app-mini-phone [showKeyPad]=\"true\" >\r\n          </app-mini-phone> \r\n        </div>\r\n  \r\n      </div>\r\n    </div>\r\n\r\n    <div style=\"display: flex; flex-direction: column; flex-basis: 35%; align-self: center;\" >\r\n\r\n      <app-flourish-text   > \r\n        <div id=\"authCode\"  >\r\n          {{vizData.accessCode}}\r\n        </div>\r\n      </app-flourish-text>  \r\n\r\n    </div>\r\n  \r\n  </div>\r\n\r\n\r\n  <div style=\"height: 5vh; margin-top: 5vh;\">\r\n    <app-countdown  [totalSecs]=\"vizData.totalGameSecs\" \r\n                    [remainingSecs]=\"vizData.remainingSecs\" \r\n                    [remainingQuestionSecs]=\"vizData.remainingQuestionSecs\"  >\r\n    </app-countdown>    \r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/visualisations/more-or-less-viz/authentication-page/authentication-page.component.scss":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/visualisations/more-or-less-viz/authentication-page/authentication-page.component.scss ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#more-or-lessBanner {\n  position: relative;\n  width: 100%;\n  height: 30vh; }\n\n#more-or-lessBannerImg {\n  display: block;\n  margin: 0 auto;\n  height: 25vh; }\n\n#authText {\n  font-size: 10vh;\n  text-align: center; }\n\n#authCode {\n  font-size: 20vh;\n  text-align: center; }\n\n.instructions {\n  font-size: 4vh;\n  border-radius: 15px;\n  background: white;\n  align-self: flex-end;\n  padding: 2vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9tb3JlLW9yLWxlc3Mtdml6L2F1dGhlbnRpY2F0aW9uLXBhZ2UvRDpcXF9EYXRhXFxQcml2YXRlQ29kZVxcX2dpdFB6ZUtubVxcVHJlYXN1cmVIdW50XFxBbmd1bGFyU1BBXFxTYW5kZ2F0ZVRIL3NyY1xcYXBwXFxtb2R1bGVzXFx2aXN1YWxpc2F0aW9uc1xcbW9yZS1vci1sZXNzLXZpelxcbW9yZS1vci1sZXNzLXZpei5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9tb3JlLW9yLWxlc3Mtdml6L2F1dGhlbnRpY2F0aW9uLXBhZ2UvRDpcXF9EYXRhXFxQcml2YXRlQ29kZVxcX2dpdFB6ZUtubVxcVHJlYXN1cmVIdW50XFxBbmd1bGFyU1BBXFxTYW5kZ2F0ZVRIL3NyY1xcYXBwXFxtb2R1bGVzXFx2aXN1YWxpc2F0aW9uc1xcbW9yZS1vci1sZXNzLXZpelxcYXV0aGVudGljYXRpb24tcGFnZVxcYXV0aGVudGljYXRpb24tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLGtCQUFpQjtFQUNqQixXQUFVO0VBQ1YsWUFDRixFQUFBOztBQUdBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxZQUFZLEVBQUE7O0FDZGQ7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsaUJBQThCO0VBRTlCLG9CQUFvQjtFQUNwQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Zpc3VhbGlzYXRpb25zL21vcmUtb3ItbGVzcy12aXovYXV0aGVudGljYXRpb24tcGFnZS9hdXRoZW50aWNhdGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuLy9AaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuXHJcblxyXG4jbW9yZS1vci1sZXNzQmFubmVyIHtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTsgXHJcbiAgd2lkdGg6MTAwJTsgXHJcbiAgaGVpZ2h0OjMwdmhcclxufVxyXG5cclxuXHJcbiNtb3JlLW9yLWxlc3NCYW5uZXJJbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGhlaWdodDogMjV2aDtcclxufVxyXG5cclxuXHJcblxyXG4iLCJAaW1wb3J0IFwiLi4vbW9yZS1vci1sZXNzLXZpei5jb21wb25lbnQuc2Nzc1wiO1xyXG5cclxuI2F1dGhUZXh0IHtcclxuICBmb250LXNpemU6IDEwdmg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jYXV0aENvZGUge1xyXG4gIGZvbnQtc2l6ZTogMjB2aDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbnN0cnVjdGlvbnMge1xyXG4gIGZvbnQtc2l6ZTogNHZoO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIFxyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gIHBhZGRpbmc6IDJ2aDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/visualisations/more-or-less-viz/authentication-page/authentication-page.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/visualisations/more-or-less-viz/authentication-page/authentication-page.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: AuthenticationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationPageComponent", function() { return AuthenticationPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_visualisation_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/visualisation-data.service */ "./src/app/services/visualisation-data.service.ts");



let AuthenticationPageComponent = class AuthenticationPageComponent {
    constructor() {
        this.vizData = undefined;
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_services_visualisation_data_service__WEBPACK_IMPORTED_MODULE_2__["VisualisationData"])
], AuthenticationPageComponent.prototype, "vizData", void 0);
AuthenticationPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-authentication-page',
        template: __webpack_require__(/*! ./authentication-page.component.html */ "./src/app/modules/visualisations/more-or-less-viz/authentication-page/authentication-page.component.html"),
        styles: [__webpack_require__(/*! ./authentication-page.component.scss */ "./src/app/modules/visualisations/more-or-less-viz/authentication-page/authentication-page.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AuthenticationPageComponent);



/***/ }),

/***/ "./src/app/modules/visualisations/more-or-less-viz/demo-page/demo-page.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/visualisations/more-or-less-viz/demo-page/demo-page.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- xxx\r\n<div id=\"introWrapper\">\r\n\r\n  <div id=\"more-or-lessBanner\"  >\r\n    <img id=\"more-or-lessBannerImg\" src='assets/images/more-or-less-banner-logo.svg' alt='image'>\r\n  </div>\r\n \r\n  <div style=\"font-family: 'Vast Shadow';padding:0vh; position:relative; width:100%; height:10vh\">\r\n    \r\n    <app-corrie-text text=\"A quiz game for those who... just aren't sure\"   \r\n      vbHeight=\"5\" vbWidth=\"100\" \r\n      radius=\"1\"  strokeWidth=\"0.6\" strokeColour=\"#000\" fillColour=\"#fff\"\r\n      fontSize=\"0.15\" fontSizeUnit=\"vw\"  >          \r\n    </app-corrie-text>\r\n  </div>  \r\n \r\n</div>\r\n xxx  -->\r\n\r\n\r\n<img src=\"{{imageSourcePath}}\"   width=\"100%\" height=\"auto\">\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/visualisations/more-or-less-viz/demo-page/demo-page.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/visualisations/more-or-less-viz/demo-page/demo-page.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#more-or-lessBanner {\n  position: relative;\n  width: 100%;\n  height: 30vh; }\n\n#more-or-lessBannerImg {\n  display: block;\n  margin: 0 auto;\n  height: 25vh; }\n\n#introWrapper {\n  display: flex;\n  flex-direction: column; }\n\n#introTagLine {\n  font-size: 8vh;\n  margin: 0 auto; }\n\n#introHori {\n  display: flex;\n  flex-direction: row;\n  border: 5px solid #0c0d3a;\n  height: 55vh; }\n\n#introInstructions {\n  flex-basis: 75%;\n  position: relative;\n  margin: 1vh; }\n\n.introInstructionText {\n  font-size: 4.5vh;\n  margin-top: 2vh;\n  padding: 2vh; }\n\n#introScanCode {\n  flex-basis: 25%;\n  display: flex;\n  flex-direction: column;\n  font-size: 3.5vh;\n  margin: 1vh; }\n\n/*\r\n#introTitle {\r\n  font-size: 10vh;\r\n  border: solid 1px;\r\n}*/\n\n.introText {\n  font-size: 3vh;\n  border: solid 1px;\n  background-color: whitesmoke;\n  -moz-text-align-last: center;\n       text-align-last: center;\n  position: relative; }\n\n#introQRCode {\n  height: 35vh; }\n\n#introScanToPlay {\n  font-size: 7vh; }\n\n.instructions {\n  font-size: 4vh;\n  border-radius: 15px;\n  background: white;\n  max-width: 40vw;\n  align-self: flex-end;\n  padding: 2vh; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9tb3JlLW9yLWxlc3Mtdml6L2RlbW8tcGFnZS9EOlxcX0RhdGFcXFByaXZhdGVDb2RlXFxfZ2l0UHplS25tXFxUcmVhc3VyZUh1bnRcXEFuZ3VsYXJTUEFcXFNhbmRnYXRlVEgvc3JjXFxhcHBcXG1vZHVsZXNcXHZpc3VhbGlzYXRpb25zXFxtb3JlLW9yLWxlc3Mtdml6XFxtb3JlLW9yLWxlc3Mtdml6LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3Zpc3VhbGlzYXRpb25zL21vcmUtb3ItbGVzcy12aXovZGVtby1wYWdlL0Q6XFxfRGF0YVxcUHJpdmF0ZUNvZGVcXF9naXRQemVLbm1cXFRyZWFzdXJlSHVudFxcQW5ndWxhclNQQVxcU2FuZGdhdGVUSC9zcmNcXGFwcFxcbW9kdWxlc1xcdmlzdWFsaXNhdGlvbnNcXG1vcmUtb3ItbGVzcy12aXpcXGRlbW8tcGFnZVxcZGVtby1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3Zpc3VhbGlzYXRpb25zL21vcmUtb3ItbGVzcy12aXovZGVtby1wYWdlL2RlbW8tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLGtCQUFpQjtFQUNqQixXQUFVO0VBQ1YsWUFDRixFQUFBOztBQUdBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxZQUFZLEVBQUE7O0FDZGQ7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBT3hCO0VBQ0UsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBRW5CLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2Ysa0JBQWlCO0VBRWpCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBRWhCLFdBQVcsRUFBQTs7QUFHYjs7OztFQ0RFOztBRE9GO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsNEJBQXVCO09BQXZCLHVCQUF1QjtFQUN2QixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFHRSxjQUFjLEVBQUE7O0FBSWhCO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixpQkFBOEI7RUFDOUIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Zpc3VhbGlzYXRpb25zL21vcmUtb3ItbGVzcy12aXovZGVtby1wYWdlL2RlbW8tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi8vQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzXCI7XHJcblxyXG5cclxuI21vcmUtb3ItbGVzc0Jhbm5lciB7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7IFxyXG4gIHdpZHRoOjEwMCU7IFxyXG4gIGhlaWdodDozMHZoXHJcbn1cclxuXHJcblxyXG4jbW9yZS1vci1sZXNzQmFubmVySW1nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBoZWlnaHQ6IDI1dmg7XHJcbn1cclxuXHJcblxyXG5cclxuIiwiXHJcbkBpbXBvcnQgXCIuLi9tb3JlLW9yLWxlc3Mtdml6LmNvbXBvbmVudC5zY3NzXCI7XHJcbiNpbnRyb1dyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7IFxyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuI2ludHJvVGFnTGluZSB7XHJcbiAgZm9udC1zaXplOiA4dmg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbiNpbnRyb0hvcmkge1xyXG4gIGRpc3BsYXk6IGZsZXg7IFxyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7IFxyXG5cclxuICBib3JkZXI6IDVweCBzb2xpZCAjMGMwZDNhO1xyXG4gIGhlaWdodDogNTV2aDtcclxufVxyXG5cclxuI2ludHJvSW5zdHJ1Y3Rpb25zIHtcclxuICBmbGV4LWJhc2lzOiA3NSU7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7IFxyXG4gIC8vIGJvcmRlcjogNXB4IHNvbGlkICM4M2U2MzI7XHJcbiAgbWFyZ2luOiAxdmg7XHJcbn1cclxuXHJcbi5pbnRyb0luc3RydWN0aW9uVGV4dCB7XHJcbiAgZm9udC1zaXplOiA0LjV2aDtcclxuICBtYXJnaW4tdG9wOiAydmg7XHJcbiAgcGFkZGluZzogMnZoO1xyXG59XHJcblxyXG4jaW50cm9TY2FuQ29kZSB7XHJcbiAgZmxleC1iYXNpczogMjUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7IFxyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgXHJcbiAgZm9udC1zaXplOiAzLjV2aDtcclxuICAvLyBib3JkZXI6IDVweCBzb2xpZCAjNGY1MWRiO1xyXG4gIG1hcmdpbjogMXZoO1xyXG59XHJcblxyXG4vKlxyXG4jaW50cm9UaXRsZSB7XHJcbiAgZm9udC1zaXplOiAxMHZoO1xyXG4gIGJvcmRlcjogc29saWQgMXB4O1xyXG59Ki9cclxuXHJcbi5pbnRyb1RleHQge1xyXG4gIGZvbnQtc2l6ZTogM3ZoO1xyXG4gIGJvcmRlcjogc29saWQgMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgdGV4dC1hbGlnbi1sYXN0OiBjZW50ZXI7IFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuI2ludHJvUVJDb2RlIHtcclxuICBoZWlnaHQ6IDM1dmg7XHJcbn1cclxuXHJcbiNpbnRyb1NjYW5Ub1BsYXl7XHJcbiAvLyBkaXNwbGF5OiBmbGV4OyBcclxuIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgXHJcbiAgZm9udC1zaXplOiA3dmg7XHJcbn1cclxuXHJcblxyXG4uaW5zdHJ1Y3Rpb25zIHtcclxuICBmb250LXNpemU6IDR2aDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBtYXgtd2lkdGg6IDQwdnc7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgcGFkZGluZzogMnZoO1xyXG59IiwiI21vcmUtb3ItbGVzc0Jhbm5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzB2aDsgfVxuXG4jbW9yZS1vci1sZXNzQmFubmVySW1nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDI1dmg7IH1cblxuI2ludHJvV3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cblxuI2ludHJvVGFnTGluZSB7XG4gIGZvbnQtc2l6ZTogOHZoO1xuICBtYXJnaW46IDAgYXV0bzsgfVxuXG4jaW50cm9Ib3JpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYm9yZGVyOiA1cHggc29saWQgIzBjMGQzYTtcbiAgaGVpZ2h0OiA1NXZoOyB9XG5cbiNpbnRyb0luc3RydWN0aW9ucyB7XG4gIGZsZXgtYmFzaXM6IDc1JTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDF2aDsgfVxuXG4uaW50cm9JbnN0cnVjdGlvblRleHQge1xuICBmb250LXNpemU6IDQuNXZoO1xuICBtYXJnaW4tdG9wOiAydmg7XG4gIHBhZGRpbmc6IDJ2aDsgfVxuXG4jaW50cm9TY2FuQ29kZSB7XG4gIGZsZXgtYmFzaXM6IDI1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1zaXplOiAzLjV2aDtcbiAgbWFyZ2luOiAxdmg7IH1cblxuLypcclxuI2ludHJvVGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTB2aDtcclxuICBib3JkZXI6IHNvbGlkIDFweDtcclxufSovXG4uaW50cm9UZXh0IHtcbiAgZm9udC1zaXplOiAzdmg7XG4gIGJvcmRlcjogc29saWQgMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbiNpbnRyb1FSQ29kZSB7XG4gIGhlaWdodDogMzV2aDsgfVxuXG4jaW50cm9TY2FuVG9QbGF5IHtcbiAgZm9udC1zaXplOiA3dmg7IH1cblxuLmluc3RydWN0aW9ucyB7XG4gIGZvbnQtc2l6ZTogNHZoO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWF4LXdpZHRoOiA0MHZ3O1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMnZoOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/visualisations/more-or-less-viz/demo-page/demo-page.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/visualisations/more-or-less-viz/demo-page/demo-page.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DemoPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoPageComponent", function() { return DemoPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_visualisation_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/visualisation-data.service */ "./src/app/services/visualisation-data.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let DemoPageComponent = class DemoPageComponent {
    constructor() {
        this.vizData = undefined;
        this.imageSourcePath = '';
        this.imageIndex = 0;
        this.imageURLs = [
            'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
            'https://images.pexels.com/photos/414579/pexels-photo-414579.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/633850/machine-mill-industry-steam-633850.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/3785935/pexels-photo-3785935.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/149387/pexels-photo-149387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/159275/macro-focus-cogwheel-gear-159275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/357440/pexels-photo-357440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/9333/sky-red-art-blue-9333.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/210881/pexels-photo-210881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/259988/pexels-photo-259988.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/289665/pexels-photo-289665.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/207367/pexels-photo-207367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/977526/pexels-photo-977526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/220237/pexels-photo-220237.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/859895/pexels-photo-859895.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/114108/pexels-photo-114108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/38920/pexels-photo-38920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/1410448/pexels-photo-1410448.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
            'https://images.pexels.com/photos/3784316/pexels-photo-3784316.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
        ];
        this.changeImage$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 20000);
    }
    ngOnInit() {
        this.getNewImage();
        this.changeImage$.subscribe((val) => {
            this.getNewImage();
        });
    }
    getNewImage() {
        this.imageSourcePath = this.imageURLs[this.imageIndex];
        this.imageIndex++;
        if (this.imageIndex > this.imageURLs.length - 1)
            this.imageIndex = 0;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_services_visualisation_data_service__WEBPACK_IMPORTED_MODULE_2__["VisualisationData"])
], DemoPageComponent.prototype, "vizData", void 0);
DemoPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-demo-page',
        template: __webpack_require__(/*! ./demo-page.component.html */ "./src/app/modules/visualisations/more-or-less-viz/demo-page/demo-page.component.html"),
        styles: [__webpack_require__(/*! ./demo-page.component.scss */ "./src/app/modules/visualisations/more-or-less-viz/demo-page/demo-page.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DemoPageComponent);



/***/ }),

/***/ "./src/app/modules/visualisations/more-or-less-viz/dormant-page/dormant-page.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/visualisations/more-or-less-viz/dormant-page/dormant-page.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"introWrapper\">\r\n\r\n  <!-- \r\n  <div >\r\n    env: {{vizData.environmentStatus}}\r\n  </div>  -->\r\n\r\n  <div id=\"more-or-lessBanner\"  >\r\n    <img id=\"more-or-lessBannerImg\" src='assets/images/more-or-less-banner-logo.svg' alt='image'>\r\n  </div>\r\n \r\n  <div id=\"introHori\">\r\n\r\n    <div style=\"display: flex; width: 100%;\">\r\n      <img id=\"sleepyEyes\" src='assets/images/sleepyEyes.png' alt='image'>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/visualisations/more-or-less-viz/dormant-page/dormant-page.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/visualisations/more-or-less-viz/dormant-page/dormant-page.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#more-or-lessBanner {\n  position: relative;\n  width: 100%;\n  height: 30vh; }\n\n#more-or-lessBannerImg {\n  display: block;\n  margin: 0 auto;\n  height: 25vh; }\n\n#introWrapper {\n  display: flex;\n  flex-direction: column; }\n\n#introTagLine {\n  font-size: 8vh;\n  margin: 0 auto; }\n\n#introHori {\n  display: flex;\n  flex-direction: row;\n  border: 5px solid #0c0d3a;\n  height: 55vh; }\n\n#introInstructions {\n  flex-basis: 75%;\n  position: relative;\n  margin: 1vh; }\n\n.introInstructionText {\n  font-size: 4.5vh;\n  margin-top: 2vh;\n  padding: 2vh; }\n\n#introScanCode {\n  flex-basis: 25%;\n  display: flex;\n  flex-direction: column;\n  font-size: 3.5vh;\n  margin: 1vh; }\n\n/*\r\n#introTitle {\r\n  font-size: 10vh;\r\n  border: solid 1px;\r\n}*/\n\n.introText {\n  font-size: 3vh;\n  border: solid 1px;\n  background-color: whitesmoke;\n  -moz-text-align-last: center;\n       text-align-last: center;\n  position: relative; }\n\n#sleepyEyes {\n  height: 35vh;\n  margin: auto; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9tb3JlLW9yLWxlc3Mtdml6L2Rvcm1hbnQtcGFnZS9EOlxcX0RhdGFcXFByaXZhdGVDb2RlXFxfZ2l0UHplS25tXFxUcmVhc3VyZUh1bnRcXEFuZ3VsYXJTUEFcXFNhbmRnYXRlVEgvc3JjXFxhcHBcXG1vZHVsZXNcXHZpc3VhbGlzYXRpb25zXFxtb3JlLW9yLWxlc3Mtdml6XFxtb3JlLW9yLWxlc3Mtdml6LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3Zpc3VhbGlzYXRpb25zL21vcmUtb3ItbGVzcy12aXovZG9ybWFudC1wYWdlL0Q6XFxfRGF0YVxcUHJpdmF0ZUNvZGVcXF9naXRQemVLbm1cXFRyZWFzdXJlSHVudFxcQW5ndWxhclNQQVxcU2FuZGdhdGVUSC9zcmNcXGFwcFxcbW9kdWxlc1xcdmlzdWFsaXNhdGlvbnNcXG1vcmUtb3ItbGVzcy12aXpcXGRvcm1hbnQtcGFnZVxcZG9ybWFudC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3Zpc3VhbGlzYXRpb25zL21vcmUtb3ItbGVzcy12aXovZG9ybWFudC1wYWdlL2Rvcm1hbnQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLGtCQUFpQjtFQUNqQixXQUFVO0VBQ1YsWUFDRixFQUFBOztBQUdBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxZQUFZLEVBQUE7O0FDZGQ7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBT3hCO0VBQ0UsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBRW5CLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2Ysa0JBQWlCO0VBRWpCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBRWhCLFdBQVcsRUFBQTs7QUFHYjs7OztFQ0RFOztBRE9GO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsNEJBQXVCO09BQXZCLHVCQUF1QjtFQUN2QixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxZQUFZO0VBQ1osWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9tb3JlLW9yLWxlc3Mtdml6L2Rvcm1hbnQtcGFnZS9kb3JtYW50LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4vL0BpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xyXG5cclxuXHJcbiNtb3JlLW9yLWxlc3NCYW5uZXIge1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlOyBcclxuICB3aWR0aDoxMDAlOyBcclxuICBoZWlnaHQ6MzB2aFxyXG59XHJcblxyXG5cclxuI21vcmUtb3ItbGVzc0Jhbm5lckltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgaGVpZ2h0OiAyNXZoO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIlxyXG5AaW1wb3J0IFwiLi4vbW9yZS1vci1sZXNzLXZpei5jb21wb25lbnQuc2Nzc1wiO1xyXG4jaW50cm9XcmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4OyBcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiNpbnRyb1RhZ0xpbmUge1xyXG4gIGZvbnQtc2l6ZTogOHZoO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4jaW50cm9Ib3JpIHtcclxuICBkaXNwbGF5OiBmbGV4OyBcclxuICBmbGV4LWRpcmVjdGlvbjogcm93OyBcclxuXHJcbiAgYm9yZGVyOiA1cHggc29saWQgIzBjMGQzYTtcclxuICBoZWlnaHQ6IDU1dmg7XHJcbn1cclxuXHJcbiNpbnRyb0luc3RydWN0aW9ucyB7XHJcbiAgZmxleC1iYXNpczogNzUlO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlOyBcclxuICAvLyBib3JkZXI6IDVweCBzb2xpZCAjODNlNjMyO1xyXG4gIG1hcmdpbjogMXZoO1xyXG59XHJcblxyXG4uaW50cm9JbnN0cnVjdGlvblRleHQge1xyXG4gIGZvbnQtc2l6ZTogNC41dmg7XHJcbiAgbWFyZ2luLXRvcDogMnZoO1xyXG4gIHBhZGRpbmc6IDJ2aDtcclxufVxyXG5cclxuI2ludHJvU2NhbkNvZGUge1xyXG4gIGZsZXgtYmFzaXM6IDI1JTtcclxuICBkaXNwbGF5OiBmbGV4OyBcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAgIFxyXG4gIGZvbnQtc2l6ZTogMy41dmg7XHJcbiAgLy8gYm9yZGVyOiA1cHggc29saWQgIzRmNTFkYjtcclxuICBtYXJnaW46IDF2aDtcclxufVxyXG5cclxuLypcclxuI2ludHJvVGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTB2aDtcclxuICBib3JkZXI6IHNvbGlkIDFweDtcclxufSovXHJcblxyXG4uaW50cm9UZXh0IHtcclxuICBmb250LXNpemU6IDN2aDtcclxuICBib3JkZXI6IHNvbGlkIDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHRleHQtYWxpZ24tbGFzdDogY2VudGVyOyBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbiNzbGVlcHlFeWVzIHtcclxuICBoZWlnaHQ6IDM1dmg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4iLCIjbW9yZS1vci1sZXNzQmFubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHZoOyB9XG5cbiNtb3JlLW9yLWxlc3NCYW5uZXJJbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMjV2aDsgfVxuXG4jaW50cm9XcmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuXG4jaW50cm9UYWdMaW5lIHtcbiAgZm9udC1zaXplOiA4dmg7XG4gIG1hcmdpbjogMCBhdXRvOyB9XG5cbiNpbnRyb0hvcmkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBib3JkZXI6IDVweCBzb2xpZCAjMGMwZDNhO1xuICBoZWlnaHQ6IDU1dmg7IH1cblxuI2ludHJvSW5zdHJ1Y3Rpb25zIHtcbiAgZmxleC1iYXNpczogNzUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMXZoOyB9XG5cbi5pbnRyb0luc3RydWN0aW9uVGV4dCB7XG4gIGZvbnQtc2l6ZTogNC41dmg7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbiAgcGFkZGluZzogMnZoOyB9XG5cbiNpbnRyb1NjYW5Db2RlIHtcbiAgZmxleC1iYXNpczogMjUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LXNpemU6IDMuNXZoO1xuICBtYXJnaW46IDF2aDsgfVxuXG4vKlxyXG4jaW50cm9UaXRsZSB7XHJcbiAgZm9udC1zaXplOiAxMHZoO1xyXG4gIGJvcmRlcjogc29saWQgMXB4O1xyXG59Ki9cbi5pbnRyb1RleHQge1xuICBmb250LXNpemU6IDN2aDtcbiAgYm9yZGVyOiBzb2xpZCAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuI3NsZWVweUV5ZXMge1xuICBoZWlnaHQ6IDM1dmg7XG4gIG1hcmdpbjogYXV0bzsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/visualisations/more-or-less-viz/dormant-page/dormant-page.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/visualisations/more-or-less-viz/dormant-page/dormant-page.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DormantPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DormantPageComponent", function() { return DormantPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_visualisation_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/visualisation-data.service */ "./src/app/services/visualisation-data.service.ts");



let DormantPageComponent = class DormantPageComponent {
    constructor() {
        this.vizData = undefined;
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_services_visualisation_data_service__WEBPACK_IMPORTED_MODULE_2__["VisualisationData"])
], DormantPageComponent.prototype, "vizData", void 0);
DormantPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dormant-page',
        template: __webpack_require__(/*! ./dormant-page.component.html */ "./src/app/modules/visualisations/more-or-less-viz/dormant-page/dormant-page.component.html"),
        styles: [__webpack_require__(/*! ./dormant-page.component.scss */ "./src/app/modules/visualisations/more-or-less-viz/dormant-page/dormant-page.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DormantPageComponent);



/***/ }),

/***/ "./src/app/modules/visualisations/more-or-less-viz/final-page/final-page.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/visualisations/more-or-less-viz/final-page/final-page.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"finalWrapper\">\r\n\r\n  <div id=\"more-or-lessBanner\"  >\r\n    <img id=\"more-or-lessBannerImg\" src='assets/images/more-or-less-banner-logo.svg' alt='image'>\r\n  </div>\r\n\r\n  <app-score \r\n    [score]=\"vizData.score\" \r\n    style=\"font-size: 5vw; margin:auto; height: 15vh;\" >\r\n  </app-score>  \r\n\r\n  \r\n\r\n  <app-flourish-text   > \r\n    <div style=\"height: 25vh\"  >\r\n      {{getScoreCommentary()}}\r\n    </div>\r\n  </app-flourish-text>  \r\n\r\n<!--\r\n  <div style=\"height: 25vh\">\r\n\r\n    {{getScoreCommentary()}}\r\n\r\n  </div>  -->\r\n\r\n  <div style=\"height: 5vh; width: 90vw;\">\r\n    <app-countdown  [totalSecs]=\"vizData.totalGameSecs\" \r\n                    [remainingSecs]=\"vizData.remainingSecs\" \r\n                    [remainingQuestionSecs]=\"vizData.remainingQuestionSecs\"  >\r\n    </app-countdown>    \r\n  </div>\r\n  \r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/visualisations/more-or-less-viz/final-page/final-page.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/visualisations/more-or-less-viz/final-page/final-page.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#more-or-lessBanner {\n  position: relative;\n  width: 100%;\n  height: 30vh; }\n\n#more-or-lessBannerImg {\n  display: block;\n  margin: 0 auto;\n  height: 25vh; }\n\n#finalWrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n#score {\n  font-size: 10vh;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9tb3JlLW9yLWxlc3Mtdml6L2ZpbmFsLXBhZ2UvRDpcXF9EYXRhXFxQcml2YXRlQ29kZVxcX2dpdFB6ZUtubVxcVHJlYXN1cmVIdW50XFxBbmd1bGFyU1BBXFxTYW5kZ2F0ZVRIL3NyY1xcYXBwXFxtb2R1bGVzXFx2aXN1YWxpc2F0aW9uc1xcbW9yZS1vci1sZXNzLXZpelxcbW9yZS1vci1sZXNzLXZpei5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9tb3JlLW9yLWxlc3Mtdml6L2ZpbmFsLXBhZ2UvRDpcXF9EYXRhXFxQcml2YXRlQ29kZVxcX2dpdFB6ZUtubVxcVHJlYXN1cmVIdW50XFxBbmd1bGFyU1BBXFxTYW5kZ2F0ZVRIL3NyY1xcYXBwXFxtb2R1bGVzXFx2aXN1YWxpc2F0aW9uc1xcbW9yZS1vci1sZXNzLXZpelxcZmluYWwtcGFnZVxcZmluYWwtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLGtCQUFpQjtFQUNqQixXQUFVO0VBQ1YsWUFDRixFQUFBOztBQUdBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxZQUFZLEVBQUE7O0FDWmQ7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGVBQWU7RUFDZixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmlzdWFsaXNhdGlvbnMvbW9yZS1vci1sZXNzLXZpei9maW5hbC1wYWdlL2ZpbmFsLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4vL0BpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xyXG5cclxuXHJcbiNtb3JlLW9yLWxlc3NCYW5uZXIge1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlOyBcclxuICB3aWR0aDoxMDAlOyBcclxuICBoZWlnaHQ6MzB2aFxyXG59XHJcblxyXG5cclxuI21vcmUtb3ItbGVzc0Jhbm5lckltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgaGVpZ2h0OiAyNXZoO1xyXG59XHJcblxyXG5cclxuXHJcbiIsIlxyXG5cclxuQGltcG9ydCBcIi4uL21vcmUtb3ItbGVzcy12aXouY29tcG9uZW50LnNjc3NcIjtcclxuXHJcbiNmaW5hbFdyYXBwZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7IFxyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNzY29yZSB7XHJcbiAgZm9udC1zaXplOiAxMHZoO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSBcclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/visualisations/more-or-less-viz/final-page/final-page.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/visualisations/more-or-less-viz/final-page/final-page.component.ts ***!
  \********************************************************************************************/
/*! exports provided: FinalPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalPageComponent", function() { return FinalPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_visualisation_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/visualisation-data.service */ "./src/app/services/visualisation-data.service.ts");



let FinalPageComponent = class FinalPageComponent {
    constructor() {
        this.vizData = undefined;
    }
    ngOnInit() {
    }
    getScoreCommentary() {
        if (this.vizData.score > 50) {
            return 'Pigging brilliant!!';
        }
        if (this.vizData.score > 40) {
            return 'Trotters alive! A stirling effort';
        }
        if (this.vizData.score > 30) {
            return 'Oh...My...Gammon!';
        }
        if (this.vizData.score > 20) {
            return 'Snout to be ashamed of';
        }
        if (this.vizData.score > 10) {
            return 'So close, and yet sow far';
        }
        return 'Pork scratchings for brains!';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_services_visualisation_data_service__WEBPACK_IMPORTED_MODULE_2__["VisualisationData"])
], FinalPageComponent.prototype, "vizData", void 0);
FinalPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-final-page',
        template: __webpack_require__(/*! ./final-page.component.html */ "./src/app/modules/visualisations/more-or-less-viz/final-page/final-page.component.html"),
        styles: [__webpack_require__(/*! ./final-page.component.scss */ "./src/app/modules/visualisations/more-or-less-viz/final-page/final-page.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FinalPageComponent);



/***/ }),

/***/ "./src/app/modules/visualisations/more-or-less-viz/intro-page/intro-page.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/visualisations/more-or-less-viz/intro-page/intro-page.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"introWrapper\">\r\n\r\n  <!-- \r\n  <div >\r\n    env: {{vizData.environmentStatus}}\r\n  </div>  -->\r\n\r\n  <div id=\"more-or-lessBanner\"  >\r\n    <img id=\"more-or-lessBannerImg\" src='assets/images/more-or-less-banner-logo.svg' alt='image'>\r\n  </div>\r\n \r\n\r\n  <div style=\"font-family: 'Vast Shadow';padding:0vh; position:relative; width:100%; height:10vh\">\r\n      <!-- xxx  xxx  -->\r\n    <app-corrie-text text=\"A quiz game for those who... just aren't sure\"   \r\n      vbHeight=\"5\" vbWidth=\"100\" \r\n      radius=\"1\"  strokeWidth=\"0.6\" strokeColour=\"#000\" fillColour=\"#fff\"\r\n      fontSize=\"0.15\" fontSizeUnit=\"vw\"  >          \r\n    </app-corrie-text>\r\n  </div> \r\n\r\n  <div id=\"introHori\">\r\n\r\n\r\n    <!--   xxx xxx -->\r\n    <div id=\"introInstructions\"    > \r\n      <app-frame-text  fillType=\"cogs\" fillSize=\"100\"\r\n        radius=\"1\"  strokeWidth=\"0.6\" strokeColour=\"#000\" fillColour=\"#ccc\" >\r\n\r\n        <div class=\"introInstructionText\">The questions always have numeric answers. </div> \r\n        <div class=\"introInstructionText\">Don't worry if you don't know the exact answer; have a guess by \r\n          selecting a range that you think is...more or less right!   </div>\r\n        <div class=\"introInstructionText\">The narrower your range, the more points you can score.  </div>  \r\n       \r\n      </app-frame-text>\r\n      \r\n    </div>\r\n\r\n     \r\n    <div id=\"introScanCode\">\r\n     <!-- <app-frame-text  \r\n        vbHeight=\"30\" vbWidth=\"20\" radius=\"1\"  strokeWidth=\"0.6\" strokeColour=\"#000\" fillColour=\"#eee\" >\r\n          <div style=\"display:flex; flex-direction: column; margin-top: 5vh; align-items: center;\">\r\n\r\n            <div>\r\n              <img id=\"introQRCode\" src='assets/images/QrCodeMoreOrLess.png' alt='image'>\r\n            </div>\r\n            <span id=\"introScanToPlay\">Scan to play</span>\r\n          </div> \r\n\r\n      </app-frame-text>-->\r\n\r\n      <div class=\"instructions\" style=\"margin-top: 0vh;\"   >\r\n        <div>\r\n          <img id=\"introQRCode\" src='assets/images/QrCodeMoreOrLess.png' alt='image'>\r\n        </div>\r\n        <span id=\"introScanToPlay\">Scan to play</span>\r\n      </div>\r\n\r\n      \r\n    </div> \r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/visualisations/more-or-less-viz/intro-page/intro-page.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/visualisations/more-or-less-viz/intro-page/intro-page.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#more-or-lessBanner {\n  position: relative;\n  width: 100%;\n  height: 30vh; }\n\n#more-or-lessBannerImg {\n  display: block;\n  margin: 0 auto;\n  height: 25vh; }\n\n#introWrapper {\n  display: flex;\n  flex-direction: column; }\n\n#introTagLine {\n  font-size: 8vh;\n  margin: 0 auto; }\n\n#introHori {\n  display: flex;\n  flex-direction: row;\n  border: 5px solid #0c0d3a;\n  height: 55vh; }\n\n#introInstructions {\n  flex-basis: 75%;\n  position: relative;\n  margin: 1vh; }\n\n.introInstructionText {\n  font-size: 4.5vh;\n  margin-top: 2vh;\n  padding: 2vh; }\n\n#introScanCode {\n  flex-basis: 25%;\n  display: flex;\n  flex-direction: column;\n  font-size: 3.5vh;\n  margin: 1vh; }\n\n/*\r\n#introTitle {\r\n  font-size: 10vh;\r\n  border: solid 1px;\r\n}*/\n\n.introText {\n  font-size: 3vh;\n  border: solid 1px;\n  background-color: whitesmoke;\n  -moz-text-align-last: center;\n       text-align-last: center;\n  position: relative; }\n\n#introQRCode {\n  height: 35vh; }\n\n#introScanToPlay {\n  font-size: 7vh; }\n\n.instructions {\n  font-size: 4vh;\n  border-radius: 15px;\n  background: white;\n  max-width: 40vw;\n  align-self: flex-end;\n  padding: 2vh; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9tb3JlLW9yLWxlc3Mtdml6L2ludHJvLXBhZ2UvRDpcXF9EYXRhXFxQcml2YXRlQ29kZVxcX2dpdFB6ZUtubVxcVHJlYXN1cmVIdW50XFxBbmd1bGFyU1BBXFxTYW5kZ2F0ZVRIL3NyY1xcYXBwXFxtb2R1bGVzXFx2aXN1YWxpc2F0aW9uc1xcbW9yZS1vci1sZXNzLXZpelxcbW9yZS1vci1sZXNzLXZpei5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9tb3JlLW9yLWxlc3Mtdml6L2ludHJvLXBhZ2UvRDpcXF9EYXRhXFxQcml2YXRlQ29kZVxcX2dpdFB6ZUtubVxcVHJlYXN1cmVIdW50XFxBbmd1bGFyU1BBXFxTYW5kZ2F0ZVRIL3NyY1xcYXBwXFxtb2R1bGVzXFx2aXN1YWxpc2F0aW9uc1xcbW9yZS1vci1sZXNzLXZpelxcaW50cm8tcGFnZVxcaW50cm8tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9tb3JlLW9yLWxlc3Mtdml6L2ludHJvLXBhZ2UvaW50cm8tcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLGtCQUFpQjtFQUNqQixXQUFVO0VBQ1YsWUFDRixFQUFBOztBQUdBO0VBQ0UsY0FBYztFQUNkLGNBQWM7RUFDZCxZQUFZLEVBQUE7O0FDZGQ7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBT3hCO0VBQ0UsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBRW5CLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxlQUFlO0VBQ2Ysa0JBQWlCO0VBRWpCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUdkO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBRWhCLFdBQVcsRUFBQTs7QUFHYjs7OztFQ0RFOztBRE9GO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsNEJBQXVCO09BQXZCLHVCQUF1QjtFQUN2QixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFHRSxjQUFjLEVBQUE7O0FBSWhCO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixpQkFBOEI7RUFDOUIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Zpc3VhbGlzYXRpb25zL21vcmUtb3ItbGVzcy12aXovaW50cm8tcGFnZS9pbnRyby1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuLy9AaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuXHJcblxyXG4jbW9yZS1vci1sZXNzQmFubmVyIHtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTsgXHJcbiAgd2lkdGg6MTAwJTsgXHJcbiAgaGVpZ2h0OjMwdmhcclxufVxyXG5cclxuXHJcbiNtb3JlLW9yLWxlc3NCYW5uZXJJbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGhlaWdodDogMjV2aDtcclxufVxyXG5cclxuXHJcblxyXG4iLCJcclxuQGltcG9ydCBcIi4uL21vcmUtb3ItbGVzcy12aXouY29tcG9uZW50LnNjc3NcIjtcclxuI2ludHJvV3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDsgXHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4jaW50cm9UYWdMaW5lIHtcclxuICBmb250LXNpemU6IDh2aDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuI2ludHJvSG9yaSB7XHJcbiAgZGlzcGxheTogZmxleDsgXHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgXHJcblxyXG4gIGJvcmRlcjogNXB4IHNvbGlkICMwYzBkM2E7XHJcbiAgaGVpZ2h0OiA1NXZoO1xyXG59XHJcblxyXG4jaW50cm9JbnN0cnVjdGlvbnMge1xyXG4gIGZsZXgtYmFzaXM6IDc1JTtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTsgXHJcbiAgLy8gYm9yZGVyOiA1cHggc29saWQgIzgzZTYzMjtcclxuICBtYXJnaW46IDF2aDtcclxufVxyXG5cclxuLmludHJvSW5zdHJ1Y3Rpb25UZXh0IHtcclxuICBmb250LXNpemU6IDQuNXZoO1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxuICBwYWRkaW5nOiAydmg7XHJcbn1cclxuXHJcbiNpbnRyb1NjYW5Db2RlIHtcclxuICBmbGV4LWJhc2lzOiAyNSU7XHJcbiAgZGlzcGxheTogZmxleDsgXHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICBcclxuICBmb250LXNpemU6IDMuNXZoO1xyXG4gIC8vIGJvcmRlcjogNXB4IHNvbGlkICM0ZjUxZGI7XHJcbiAgbWFyZ2luOiAxdmg7XHJcbn1cclxuXHJcbi8qXHJcbiNpbnRyb1RpdGxlIHtcclxuICBmb250LXNpemU6IDEwdmg7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHg7XHJcbn0qL1xyXG5cclxuLmludHJvVGV4dCB7XHJcbiAgZm9udC1zaXplOiAzdmg7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICB0ZXh0LWFsaWduLWxhc3Q6IGNlbnRlcjsgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jaW50cm9RUkNvZGUge1xyXG4gIGhlaWdodDogMzV2aDtcclxufVxyXG5cclxuI2ludHJvU2NhblRvUGxheXtcclxuIC8vIGRpc3BsYXk6IGZsZXg7IFxyXG4gLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICBcclxuICBmb250LXNpemU6IDd2aDtcclxufVxyXG5cclxuXHJcbi5pbnN0cnVjdGlvbnMge1xyXG4gIGZvbnQtc2l6ZTogNHZoO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIG1heC13aWR0aDogNDB2dztcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICBwYWRkaW5nOiAydmg7XHJcbn0iLCIjbW9yZS1vci1sZXNzQmFubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHZoOyB9XG5cbiNtb3JlLW9yLWxlc3NCYW5uZXJJbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGhlaWdodDogMjV2aDsgfVxuXG4jaW50cm9XcmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuXG4jaW50cm9UYWdMaW5lIHtcbiAgZm9udC1zaXplOiA4dmg7XG4gIG1hcmdpbjogMCBhdXRvOyB9XG5cbiNpbnRyb0hvcmkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBib3JkZXI6IDVweCBzb2xpZCAjMGMwZDNhO1xuICBoZWlnaHQ6IDU1dmg7IH1cblxuI2ludHJvSW5zdHJ1Y3Rpb25zIHtcbiAgZmxleC1iYXNpczogNzUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMXZoOyB9XG5cbi5pbnRyb0luc3RydWN0aW9uVGV4dCB7XG4gIGZvbnQtc2l6ZTogNC41dmg7XG4gIG1hcmdpbi10b3A6IDJ2aDtcbiAgcGFkZGluZzogMnZoOyB9XG5cbiNpbnRyb1NjYW5Db2RlIHtcbiAgZmxleC1iYXNpczogMjUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LXNpemU6IDMuNXZoO1xuICBtYXJnaW46IDF2aDsgfVxuXG4vKlxyXG4jaW50cm9UaXRsZSB7XHJcbiAgZm9udC1zaXplOiAxMHZoO1xyXG4gIGJvcmRlcjogc29saWQgMXB4O1xyXG59Ki9cbi5pbnRyb1RleHQge1xuICBmb250LXNpemU6IDN2aDtcbiAgYm9yZGVyOiBzb2xpZCAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuI2ludHJvUVJDb2RlIHtcbiAgaGVpZ2h0OiAzNXZoOyB9XG5cbiNpbnRyb1NjYW5Ub1BsYXkge1xuICBmb250LXNpemU6IDd2aDsgfVxuXG4uaW5zdHJ1Y3Rpb25zIHtcbiAgZm9udC1zaXplOiA0dmg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXgtd2lkdGg6IDQwdnc7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiAydmg7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/visualisations/more-or-less-viz/intro-page/intro-page.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/visualisations/more-or-less-viz/intro-page/intro-page.component.ts ***!
  \********************************************************************************************/
/*! exports provided: IntroPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageComponent", function() { return IntroPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_visualisation_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/visualisation-data.service */ "./src/app/services/visualisation-data.service.ts");



let IntroPageComponent = class IntroPageComponent {
    constructor() {
        this.vizData = undefined;
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_services_visualisation_data_service__WEBPACK_IMPORTED_MODULE_2__["VisualisationData"])
], IntroPageComponent.prototype, "vizData", void 0);
IntroPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-intro-page',
        template: __webpack_require__(/*! ./intro-page.component.html */ "./src/app/modules/visualisations/more-or-less-viz/intro-page/intro-page.component.html"),
        styles: [__webpack_require__(/*! ./intro-page.component.scss */ "./src/app/modules/visualisations/more-or-less-viz/intro-page/intro-page.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IntroPageComponent);



/***/ }),

/***/ "./src/app/modules/visualisations/more-or-less-viz/more-or-less-viz.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/visualisations/more-or-less-viz/more-or-less-viz.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"(isConnected === true); else elseBlock\">\r\n\r\n  <div *ngIf=\"isActivePage('Online_Dormant')\">\r\n    <app-dormant-page [vizData]=\"vizData\"   ></app-dormant-page>\r\n  </div>\r\n\r\n  <div *ngIf=\"isActivePage('Online_Demo')\">\r\n    <app-demo-page [vizData]=\"vizData\"   ></app-demo-page>\r\n  </div>\r\n  \r\n  <div *ngIf=\"isActivePage('Online_Ready')\">\r\n    <app-intro-page [vizData]=\"vizData\" ></app-intro-page>\r\n  </div>\r\n\r\n  <div *ngIf=\"isActivePage('Authenticating')\">\r\n    <app-authentication-page [vizData]=\"vizData\"   ></app-authentication-page>\r\n  </div>\r\n\r\n  <div *ngIf=\"isActivePage('PreGame')\">\r\n    <app-pregame-page    [vizData]=\"vizData\"></app-pregame-page>\r\n  </div>\r\n\r\n  <div *ngIf=\"isActivePage('GamePlaying')\">\r\n    <app-playing-page [vizData]=\"vizData\"></app-playing-page>\r\n  </div>\r\n\r\n  <div *ngIf=\"isActivePage('PostGame')\">\r\n    <app-final-page [vizData]=\"vizData\"></app-final-page>\r\n  </div>\r\n \r\n</div>\r\n\r\n<ng-template #elseBlock><p>\r\n  There doesn't appear to be a connection to the game....\r\n</p></ng-template>\r\n\r\n<p class=\"dev\">Build timestamp: {{getBuildTimeStamp()}}</p>\r\n\r\n<div class=\"dev\">\r\n  {{vizData | json}}\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/visualisations/more-or-less-viz/more-or-less-viz.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/visualisations/more-or-less-viz/more-or-less-viz.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#more-or-lessBanner {\n  position: relative;\n  width: 100%;\n  height: 30vh; }\n\n#more-or-lessBannerImg {\n  display: block;\n  margin: 0 auto;\n  height: 25vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9tb3JlLW9yLWxlc3Mtdml6L0Q6XFxfRGF0YVxcUHJpdmF0ZUNvZGVcXF9naXRQemVLbm1cXFRyZWFzdXJlSHVudFxcQW5ndWxhclNQQVxcU2FuZGdhdGVUSC9zcmNcXGFwcFxcbW9kdWxlc1xcdmlzdWFsaXNhdGlvbnNcXG1vcmUtb3ItbGVzcy12aXpcXG1vcmUtb3ItbGVzcy12aXouY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxrQkFBaUI7RUFDakIsV0FBVTtFQUNWLFlBQ0YsRUFBQTs7QUFHQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0VBQ2QsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9tb3JlLW9yLWxlc3Mtdml6L21vcmUtb3ItbGVzcy12aXouY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4vL0BpbXBvcnQgXCIuLi8uLi8uLi8uLi9zdHlsZXMuc2Nzc1wiO1xyXG5cclxuXHJcbiNtb3JlLW9yLWxlc3NCYW5uZXIge1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlOyBcclxuICB3aWR0aDoxMDAlOyBcclxuICBoZWlnaHQ6MzB2aFxyXG59XHJcblxyXG5cclxuI21vcmUtb3ItbGVzc0Jhbm5lckltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgaGVpZ2h0OiAyNXZoO1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/visualisations/more-or-less-viz/more-or-less-viz.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/visualisations/more-or-less-viz/more-or-less-viz.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ActivePage, MoreOrLessVizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivePage", function() { return ActivePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreOrLessVizComponent", function() { return MoreOrLessVizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_visualisation_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/visualisation-data.service */ "./src/app/services/visualisation-data.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var ActivePage;
(function (ActivePage) {
    ActivePage[ActivePage["None"] = 0] = "None";
    ActivePage[ActivePage["Intro"] = 1] = "Intro";
    ActivePage[ActivePage["Authentication"] = 2] = "Authentication";
    ActivePage[ActivePage["PreGame"] = 3] = "PreGame";
    ActivePage[ActivePage["Playing"] = 4] = "Playing";
    ActivePage[ActivePage["Final"] = 5] = "Final";
})(ActivePage || (ActivePage = {}));
let MoreOrLessVizComponent = class MoreOrLessVizComponent {
    constructor(vizSrv) {
        this.vizSrv = vizSrv;
        this.isConnected = false;
        this.vizData = undefined;
        console.log('ctor');
    }
    ngOnInit() {
        this.vizSrv.isConnected$.subscribe(connected => this.isConnected = connected);
        this.vizSrv.incomingData$.subscribe(data => this.handleIncomingData(data));
        this.vizSrv.initialise();
    }
    handleIncomingData(viz) {
        this.vizData = viz;
    }
    isActivePage(pg) {
        if (this.vizData === undefined) {
            return false;
        }
        return (this.vizData.gameState === pg);
    }
    /*
    getActivePage(): ActivePage {
  
      if(this.vizData.gameState === "Initialised") {
        return ActivePage.Intro;
      }
  
      if(this.vizData.gameState === "Activated") {
        return ActivePage.Intro;
      }
  
      if(this.vizData.gameState === "Online") {
        return ActivePage.Intro;
      }
  
      if(this.vizData.gameState === "Authenticating") {
        return ActivePage.Authentication;
      }
  
      if(this.vizData.gameState === "PreGame") {
        return ActivePage.PreGame;
      }
  
      if(this.vizData.gameState === "GamePlaying") {
        return ActivePage.Playing;
      }
  
      if(this.vizData.gameState === "PostGame") {
        return ActivePage.Final;
      }
  
      return ActivePage.None;
    }*/
    /*
    public isDisplayIntroPage(): boolean {
      if( this.vizData.gameState === "Online_Ready" ||
          this.vizData.gameState === "Online_Dormant" ||
          this.vizData.gameState === "Online_Demo" ) {
        return true;
      }
  
      return false;
    }*/
    getBuildTimeStamp() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].timeStamp;
    }
};
MoreOrLessVizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-more-or-less-viz',
        template: __webpack_require__(/*! ./more-or-less-viz.component.html */ "./src/app/modules/visualisations/more-or-less-viz/more-or-less-viz.component.html"),
        styles: [__webpack_require__(/*! ./more-or-less-viz.component.scss */ "./src/app/modules/visualisations/more-or-less-viz/more-or-less-viz.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_visualisation_data_service__WEBPACK_IMPORTED_MODULE_2__["VisualisationDataService"]])
], MoreOrLessVizComponent);

/*


  if(m_visData.GameState == "GamePlaying")
  {
    if(nCurrentIndex != 3)
    {
      m_pPlayingPage->Initialise();
    }
    ui->stackedWidget->setCurrentIndex(3);
    m_pPlayingPage->Data2Gui(&m_visData);
  }

  if(m_visData.GameState == "PostGame")
  {
    ui->stackedWidget->setCurrentIndex(4);
  }


*/


/***/ }),

/***/ "./src/app/modules/visualisations/more-or-less-viz/playing-page/playing-page.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/visualisations/more-or-less-viz/playing-page/playing-page.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!--  \r\n{{vizData | json}}\r\n -->\r\n\r\n<div style=\"display: flex; flex-direction: column;\" >\r\n\r\n  <!--  <button (click)=\"incScore()\"  >Inc score</button>-->\r\n  <app-score [score]=\"vizData.score\" style=\"font-size: 5vw; margin:auto; height: 15vh;\" >\r\n  </app-score>\r\n\r\n  <!--\r\n  <button (click)=\"changeQuestion()\"  >change Q</button>-->\r\n\r\n  <app-question requiredHeight=\"10vh\" \r\n    style=\"font-size: 4vw; width:80%; height: 20vh; margin:auto\" \r\n    [question]=\"vizData.currentQuestion.questionText\"   >\r\n  </app-question>\r\n\r\n\r\n  <app-answer-hint \r\n    [min]=\"vizData.currentQuestionMin\" [max]=\"vizData.currentQuestionMax\" \r\n    style=\"height: 10vh; font-size: 3vw; text-align: center;\" ></app-answer-hint>\r\n\r\n  <app-range-selector style=\"height: 45vh; \"\r\n                      [min]=\"vizData.currentQuestionMin\"\r\n                      [max]=\"vizData.currentQuestionMax\"\r\n                      [lo]=\"vizData.currentAnswerLo\"\r\n                      [hi]=\"vizData.currentAnswerHi\" \r\n                      [answer]=\"vizData.currentQuestion.answer\" \r\n                      [showAnswer]=\"vizData.internalState === 'DisplayAnswer'\"\r\n                      [potentialScore]=\"vizData.potentialScore\" >\r\n  </app-range-selector>\r\n\r\n  <div style=\"height: 5vh\">\r\n    <app-countdown  [totalSecs]=\"vizData.totalGameSecs\" \r\n                    [remainingSecs]=\"vizData.remainingSecs\" \r\n                    [remainingQuestionSecs]=\"vizData.remainingQuestionSecs\"  >\r\n    </app-countdown>    \r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/visualisations/more-or-less-viz/playing-page/playing-page.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/visualisations/more-or-less-viz/playing-page/playing-page.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmlzdWFsaXNhdGlvbnMvbW9yZS1vci1sZXNzLXZpei9wbGF5aW5nLXBhZ2UvcGxheWluZy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/visualisations/more-or-less-viz/playing-page/playing-page.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/visualisations/more-or-less-viz/playing-page/playing-page.component.ts ***!
  \************************************************************************************************/
/*! exports provided: PlayingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayingPageComponent", function() { return PlayingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_visualisation_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/visualisation-data.service */ "./src/app/services/visualisation-data.service.ts");



let PlayingPageComponent = class PlayingPageComponent {
    constructor() {
        this.vizData = undefined;
    }
    ngOnInit() {
    }
    incScore() {
        this.vizData.score++;
    }
    changeQuestion() {
        this.vizData.currentQuestion.questionText =
            this.vizData.currentQuestion.questionText + 'foo';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_services_visualisation_data_service__WEBPACK_IMPORTED_MODULE_2__["VisualisationData"])
], PlayingPageComponent.prototype, "vizData", void 0);
PlayingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-playing-page',
        template: __webpack_require__(/*! ./playing-page.component.html */ "./src/app/modules/visualisations/more-or-less-viz/playing-page/playing-page.component.html"),
        styles: [__webpack_require__(/*! ./playing-page.component.scss */ "./src/app/modules/visualisations/more-or-less-viz/playing-page/playing-page.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PlayingPageComponent);



/***/ }),

/***/ "./src/app/modules/visualisations/more-or-less-viz/pregame-page/pregame-page.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/visualisations/more-or-less-viz/pregame-page/pregame-page.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"preGameWrapper\">\r\n \r\n  <div style=\"display: flex; flex-direction: row; font-size: 3vh;\" >\r\n\r\n    <div style=\"display: flex; flex-direction: column;flex-basis: 35%;\" >\r\n\r\n      <div class=\"instructions\" style=\"margin-top: 0vh;\"   >\r\n        A question will appear together with a minimum and maximum value for the answer.\r\n      </div>\r\n \r\n      <div class=\"instructions\" style=\"margin-top: 5vh; display: flex; flex-direction: row\"  >\r\n        <div>\r\n          <section>\r\n            Using the buttons on your phone, adjust the range that you think covers the answer.\r\n          </section>\r\n          <section>\r\n            Smaller ranges attract higher points!  \r\n          </section>\r\n        </div>\r\n        <div style=\"position:relative; width:30vh; height:30vh\" >\r\n          <!-- xxx  -->\r\n          <app-mini-phone [showSliderButtons]=\"true\" ></app-mini-phone> \r\n        </div>   \r\n      </div>    \r\n    \r\n      <div class=\"instructions\" style=\"margin-top: 3vh; display: flex; flex-direction: row\"  >\r\n        <div>\r\n          When you're happy with the range, press \"Answer\".         \r\n        </div> \r\n        <div style=\"position:relative; width:20vh; height:20vh\" >\r\n          <app-mini-phone [showSliderButtons]=\"true\" ></app-mini-phone>\r\n        </div> \r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div style=\"display: flex; flex-direction: column;flex-basis: 45%; align-items: center;\" >\r\n\r\n      <app-question requiredHeight=\"15vh\" style=\"font-size: 3vw; width:80%; height: 15vh\" question=\"When was the Battle of Waterloo?\"   >\r\n      </app-question> \r\n\r\n      <app-answer-hint  style=\"width:80%\"  min=1750 [max]=1832 ></app-answer-hint>\r\n   \r\n      <app-range-selector style=\"width:80%\" \r\n        min=1750 max=1832 lo=1765 hi=1820 [showAnswer]=false potentialScore = 9     >\r\n      </app-range-selector>\r\n \r\n      <div  style=\"display:flex; flex-direction: row; position:relative; width:50vh; height:15vh\" >\r\n        <app-more-or-less-button [isMin]=true type=\"DecLo\" ></app-more-or-less-button>        \r\n        <app-more-or-less-button [isMin]=true type=\"IncLo\"  ></app-more-or-less-button>\r\n        <div style=\"margin:1vw\"  > </div>\r\n        <app-more-or-less-button [isMin]=false type=\"DecHi\" ></app-more-or-less-button>  \r\n        <app-more-or-less-button [isMin]=false type=\"IncHi\" ></app-more-or-less-button>\r\n      </div>   \r\n\r\n    </div>\r\n\r\n    <div style=\"display: flex; flex-direction: column;flex-basis: 20%;\"  >\r\n\r\n      <app-flourish-text      > \r\n\r\n        <div  style=\"display: flex; flex-direction: column; align-items: center;\">\r\n\r\n          <div style=\"position:relative; width:100%\"  >\r\n            <img id=\"more-or-lessBannerImg\" src='assets/images/more-or-less-banner-logo.svg' \r\n            alt='image' style=\"width:100%; height:10vh\"  >\r\n          </div>\r\n\r\n          <!-- hand pointing down -->\r\n          <div style=\"display: flex; height:20vh\" >\r\n            <svg width=\"100%\" height=\"100%\" version=\"1.0\" viewBox=\"0 0 23 49\" xmlns=\"http://www.w3.org/2000/svg\">\r\n              <g transform=\"rotate(180 25.373 21.533)\">\r\n              <path d=\"m47.802 0.47498c0.207 0.68752 1.075 3.726 1.676 7.6819 1.668 10.967 1.127 17.806-1.169 22.307-1.1 2.156-2 5.757-2 8.003v4.081l-7.75-0.292-6.51 0.084-0.236-5.353c-0.067-2.2-1.115-6.173-2.007-9.15-1.242-4.145-1.084-6.724-0.317-9.573 0.309-1.147 3.05-4.462 5.006-3.42 1.159-2.81 2.94-1.556 3.589-1.643 2.413-1.45 2.072-1.515 2.414-1.037l0.571-1.522 1.341-0.8851 2.839 4.0781-0.691-8.155c7e-3 -4.2347-0.341-6.2011 1.626-6.2011 0.457 2e-5 1.412 0.30858 1.618 0.99608zm-12.729 38.898c-0.989 2.425-0.448 1.61 4.872 1.887 5.15 0.269 5.205 0.126 5.205-2.311 0-2.282 0.481-2.259-3.012-2.259-2.929 0-5.949 0.98-7.065 2.683z\" fill=\"#d0d0d0\"/>\r\n              <path d=\"m48.226 0.62908c0.206 0.68752 1.856 7.5515 2.042 11.549 0.498 10.754-0.522 15.533-1.893 18.675-0.968 2.219-1.624 5.193-1.624 7.439l-0.112 4.006-7.187 0.046-7.75-0.292-0.123-4c-0.068-2.2-0.853-6.436-1.744-9.413-1.242-4.145-0.485-7.65 0.283-10.499 0.308-1.147 1.44-2.678 2.275-3.57 0.836-0.891 0.843 0.372 1.773-0.13 0.465-0.25 1.176-1.233 2.012-1.384s1.322 0.681 1.731 0.272c1.805-1.803 1.488-1.575 2.907-0.605-0.286-2.029 0.471-3.0546 1.604-2.8254 0.876 1.4634 2.782 3.6124 2.782 3.6124l-0.476-7.3699c7e-3 -4.2347-0.618-6.6612 1.349-6.6612 0.457 2e-5 1.945 0.46268 2.151 1.1502zm-2.9 1.5547c-0.113 3.3275-0.495 3.5535 1.369 3.4153 1.333-0.0466 2.417 1.2369 2.692 1.2369 0.55 0-1.044-4.5838-1.044-5.7163 0-1.1324-0.279-0.36779-0.84-0.6889-0.566-0.32362-1.892-0.19968-2.177 1.753zm0.463 5.6234c0 1.6042 0.119 3.4818 0.877 3.5068 1.476 0.048 3.374 1.168 0.181 0.516-1.031-0.21-0.759 1.057 0.407 3.312 0.831 1.607 2.189 3.636 2.512 3.636 0.572 0 0.406-6.654-0.171-11.276-0.159-1.2732-2.501-1.5413-3.051-1.5244-0.549 0.0169-0.755 0.1074-0.755 1.8296zm-6.907 9.2548c0 2.671 2.761 8.153 4.179 7.251 0.387-0.247 0.167-2.966-0.403-4.03-0.569-1.064-1.947-5.335-1.947-6.778 0-1.496-1.01-1.011-1.899 0.43-0.34 0.551 0.07 1.619 0.07 3.127zm3.565 0.117c3.436 4.774 0.478 4.096 3.844 7.681-2.591-0.107-3.738 1.355-5.615 2.899-1.448 1.057-0.787 2.79-0.805 3.203-1.462-1.751-1.225-4.387 0.578-4.994-0.626-0.289-2.641 1.36-7.125-0.82-2.827 1.313-0.401 4.894 0.596 6.757 0.733 3.093 1.666 3.647 6.119 3.647 4.481 0 4.793-0.191 7.421-4.54 2.789-4.618 4.041-9.931 2.38-9.931-0.507 0-0.925 0.351-1.287-1.299-0.363-1.65-2.561-2.126-2.785-2.681-0.41-1.014-1.372 0.58-1.431 0.072-0.089-0.775 2.091-0.651 0.18-3.981-0.956-1.665-1.556-2.59-1.976-2.775s-0.635 0.608-0.902 1.662c-0.215 1.8 0.82 5.46 0.808 5.1zm-6.901-1.763c0 1.31 0.596 5.393 0.756 6.019 0.972 3.807 3.164 3.199 2.974 1.05-0.094-1.06-1.227-4.625-1.41-6.218s-0.074-2.794-0.407-2.901c-1.565-0.506-1.913 0.74-1.913 2.05zm-2.321 6.293c0.908 1.535 1.877-0.19 1.708-2.359-0.525-6.746-1.8-4.424-2.088-3.271-0.175 0.698-0.202 4.647 0.38 5.63zm0.615 17.255c-0.959 3.098 0.719 2.588 6.368 2.588 5.758 0 5.994-0.1 5.994-2.55 0-2.467-0.182-2.54-5.654-2.25-4.987 0.265-6.409 0.228-6.708 2.212z\" fill=\"#8c8c8c\"/>\r\n              <path d=\"m48.663 1.3373c0.319 0.9318 0.792 3.0962 1.206 6.8643 1.211 11.026 1.39 17.806-0.906 22.307-1.038 2.656-2 5.255-2 7.5v4.752h-15.623v-4.752c-0.068-2.2-0.853-6.436-1.745-9.413-1.241-4.145-1.236-6.172-0.469-9.021 0.618-2.295 1.813-4.274 3.1-5.333 0.643-0.529 2.628-1.177 2.539-0.061-0.061 0.764-0.493-0.291 0.132-0.91 1.232-1.22 2.319-0.822 2.841-0.217 0.142-0.292 0.303-0.655 0.94-1.218s1.868-0.188 1.944 0.414c0.08 0.638-0.756 0.563-0.089-1.673 0.293-0.9824 2.17-1.4567 2.308-0.6719 1.085 1.8739 1.572 2.6809 1.572 2.6809l-0.282-6.0078c6e-3 -4.2346-0.718-7.494 2.378-7.2683 1.318 0.09728 1.948 1.3399 2.154 2.0274zm-3.686 4.5514c-0.056 5.2313 0.047 7.8023 1.914 10.528 2.764 4.033 4.322 8.379 2.241-8.3031-0.559-4.4911-1.086-7.852-2.575-7.9486-1.873-0.1215-1.875 1.1195-1.58 5.7234zm-6.394 7.1693c-0.396 0.362-0.505 1.676-0.951 0.567-2.03-1.284-3.271 0.968-2.641 3.942 0 0 0.492 4.781 0.831 5.412 0.526 1.615-0.14 0.199-0.53 0.728-0.109 1.287-0.908-3.031-0.971-4.152-0.355-2.071-0.421-3.651-0.281-4.333 0.14-0.683-1.241-0.443-1.381 0.3-0.734 1.857-0.799 4.765-0.063 7.321 0.372 1.295 2.673 0.706 3.228 0.161 0.272 0.916 0.868 2.083 1.74 2.396 4.478 1.441 0.583-4.625 0.159-7.292-0.427-2.687-0.357-3.95-0.139-4.613 0.109-0.331 0.783-0.446 0.729-0.053s-0.275 1.636-0.079 2.514c0.347 1.554 0.289 2.632 0.815 4.099 0.97 2.881 0.092 0.449 1.209 3.082 0.978 1.791 0.72 1.228 1.404 2.053 3.486 1.066 0.847-4.009-0.201-6.765-0.475-1.931-1.154-3.807-1.136-5.794-0.847-0.364-1.46-0.107-1.742 0.427zm3.761 5.077c0.751 1.528 1.019 3.138 1.569 4.366 0.425 2.151 0.357 2.53-0.026 3.141-0.828 0.943-2.539 0.787-3.861-1.183 0-0.396 0.807 1.664-1.382 1.617-0.721-0.106-0.727 0.146-1.993-0.632-0.704-0.642-1.189-1.115-1.24-1.381-0.563 0-0.701 0.155-1.298 0.127-1.862 2e-3 -2.282-1.641-2.536-2.464s-0.468-4.178 0.338-5.982c0.797-1.785-1.586 2.014-2.019 3.907-0.432 1.893-0.286 5.305 0.545 7.382 0.704 1.759 1.03 4.465 1.476 5.565 0.447 1.1 0.066 2.836 0.618 2.836 1.573 0 3.971 0.336 7.29 0.221l6.336-0.221 1.317-4.266c0.823-1.216 2.903-6.694 1.285-10.185-0.874-1.498-2.066-2.893-2.815-4.45-0.603-0.997-1.174-1.605-1.609-2.604-0.548-1.258-0.862-1.943-1.875-3.587-2.075-0.4495-1.198 6.243-0.12 7.793zm2.745 22.958v-4.025h-12.297v4.025c3.828 0.018 8.461-0.049 12.297 0z\"/>\r\n              <path d=\"m32.38-0.93445v7.0841-7.0842z\" fill=\"#333\"/>\r\n              </g>\r\n            </svg>\r\n          </div>\r\n\r\n          <div style=\"position:relative; width:20vh; height:40vh\" >\r\n            <app-mini-phone [showStartButton]=\"true\" >\r\n            </app-mini-phone>\r\n          </div>\r\n\r\n          <div style=\"font-size: 2.5vh;\">\r\n            Press START to begin.      \r\n          </div> \r\n        </div>     \r\n\r\n      </app-flourish-text>\r\n    </div>\r\n  \r\n  </div>\r\n\r\n  <div style=\"height: 5vh; margin-top: 5vh;\">\r\n    <app-countdown  [totalSecs]=\"vizData.totalGameSecs\" \r\n                    [remainingSecs]=\"vizData.remainingSecs\" \r\n                    [remainingQuestionSecs]=\"vizData.remainingQuestionSecs\"  >\r\n    </app-countdown>    \r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/visualisations/more-or-less-viz/pregame-page/pregame-page.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/visualisations/more-or-less-viz/pregame-page/pregame-page.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#more-or-lessBanner {\n  position: relative;\n  width: 100%;\n  height: 30vh; }\n\n#more-or-lessBannerImg {\n  display: block;\n  margin: 0 auto;\n  height: 25vh; }\n\n#preGameWrapper {\n  display: flex;\n  flex-direction: column; }\n\n.instructions {\n  font-size: 4vh;\n  border-radius: 15px;\n  background: white;\n  max-width: 40vw;\n  align-self: flex-end;\n  padding: 2vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9tb3JlLW9yLWxlc3Mtdml6L3ByZWdhbWUtcGFnZS9EOlxcX0RhdGFcXFByaXZhdGVDb2RlXFxfZ2l0UHplS25tXFxUcmVhc3VyZUh1bnRcXEFuZ3VsYXJTUEFcXFNhbmRnYXRlVEgvc3JjXFxhcHBcXG1vZHVsZXNcXHZpc3VhbGlzYXRpb25zXFxtb3JlLW9yLWxlc3Mtdml6XFxtb3JlLW9yLWxlc3Mtdml6LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3Zpc3VhbGlzYXRpb25zL21vcmUtb3ItbGVzcy12aXovcHJlZ2FtZS1wYWdlL0Q6XFxfRGF0YVxcUHJpdmF0ZUNvZGVcXF9naXRQemVLbm1cXFRyZWFzdXJlSHVudFxcQW5ndWxhclNQQVxcU2FuZGdhdGVUSC9zcmNcXGFwcFxcbW9kdWxlc1xcdmlzdWFsaXNhdGlvbnNcXG1vcmUtb3ItbGVzcy12aXpcXHByZWdhbWUtcGFnZVxccHJlZ2FtZS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0Usa0JBQWlCO0VBQ2pCLFdBQVU7RUFDVixZQUNGLEVBQUE7O0FBR0E7RUFDRSxjQUFjO0VBQ2QsY0FBYztFQUNkLFlBQVksRUFBQTs7QUNiZDtFQUNFLGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFJeEI7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGlCQUE4QjtFQUM5QixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmlzdWFsaXNhdGlvbnMvbW9yZS1vci1sZXNzLXZpei9wcmVnYW1lLXBhZ2UvcHJlZ2FtZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuLy9AaW1wb3J0IFwiLi4vLi4vLi4vLi4vc3R5bGVzLnNjc3NcIjtcclxuXHJcblxyXG4jbW9yZS1vci1sZXNzQmFubmVyIHtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTsgXHJcbiAgd2lkdGg6MTAwJTsgXHJcbiAgaGVpZ2h0OjMwdmhcclxufVxyXG5cclxuXHJcbiNtb3JlLW9yLWxlc3NCYW5uZXJJbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGhlaWdodDogMjV2aDtcclxufVxyXG5cclxuXHJcblxyXG4iLCJcclxuQGltcG9ydCBcIi4uL21vcmUtb3ItbGVzcy12aXouY29tcG9uZW50LnNjc3NcIjtcclxuXHJcbiNwcmVHYW1lV3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDsgXHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgXHJcbn1cclxuXHJcblxyXG4uaW5zdHJ1Y3Rpb25zIHtcclxuICBmb250LXNpemU6IDR2aDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBtYXgtd2lkdGg6IDQwdnc7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgcGFkZGluZzogMnZoO1xyXG59ICJdfQ== */"

/***/ }),

/***/ "./src/app/modules/visualisations/more-or-less-viz/pregame-page/pregame-page.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/visualisations/more-or-less-viz/pregame-page/pregame-page.component.ts ***!
  \************************************************************************************************/
/*! exports provided: PregamePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PregamePageComponent", function() { return PregamePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_visualisation_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/visualisation-data.service */ "./src/app/services/visualisation-data.service.ts");



let PregamePageComponent = class PregamePageComponent {
    constructor() {
        this.vizData = undefined;
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_services_visualisation_data_service__WEBPACK_IMPORTED_MODULE_2__["VisualisationData"])
], PregamePageComponent.prototype, "vizData", void 0);
PregamePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pregame-page',
        template: __webpack_require__(/*! ./pregame-page.component.html */ "./src/app/modules/visualisations/more-or-less-viz/pregame-page/pregame-page.component.html"),
        styles: [__webpack_require__(/*! ./pregame-page.component.scss */ "./src/app/modules/visualisations/more-or-less-viz/pregame-page/pregame-page.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PregamePageComponent);



/***/ }),

/***/ "./src/app/modules/visualisations/parts/answer-hint/answer-hint.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/answer-hint/answer-hint.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div ngClass=\"divHint\">\r\n  <div> (Somewhere between \r\n    <span id=\"minmax\">{{min}}</span> \r\n    and \r\n    <span id=\"minmax\">{{max}}</span> ) </div>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/visualisations/parts/answer-hint/answer-hint.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/answer-hint/answer-hint.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divHint {\n  font-size: 4vh;\n  display: inline-block; }\n\n#minmax {\n  font-size: 4vh;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9wYXJ0cy9hbnN3ZXItaGludC9EOlxcX0RhdGFcXFByaXZhdGVDb2RlXFxfZ2l0UHplS25tXFxUcmVhc3VyZUh1bnRcXEFuZ3VsYXJTUEFcXFNhbmRnYXRlVEgvc3JjXFxhcHBcXG1vZHVsZXNcXHZpc3VhbGlzYXRpb25zXFxwYXJ0c1xcYW5zd2VyLWhpbnRcXGFuc3dlci1oaW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUUsY0FBYztFQUNkLHFCQUFxQixFQUFBOztBQUd2QjtFQUNDLGNBQWM7RUFDZCxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmlzdWFsaXNhdGlvbnMvcGFydHMvYW5zd2VyLWhpbnQvYW5zd2VyLWhpbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5kaXZIaW50IHtcclxuIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDYsIDE2OCwgMjI2KTtcclxuICBmb250LXNpemU6IDR2aDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbiNtaW5tYXgge1xyXG4gZm9udC1zaXplOiA0dmg7XHJcbiBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/modules/visualisations/parts/answer-hint/answer-hint.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/answer-hint/answer-hint.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AnswerHint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerHint", function() { return AnswerHint; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AnswerHint = class AnswerHint {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], AnswerHint.prototype, "min", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], AnswerHint.prototype, "max", void 0);
AnswerHint = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-answer-hint',
        template: __webpack_require__(/*! ./answer-hint.component.html */ "./src/app/modules/visualisations/parts/answer-hint/answer-hint.component.html"),
        styles: [__webpack_require__(/*! ./answer-hint.component.scss */ "./src/app/modules/visualisations/parts/answer-hint/answer-hint.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AnswerHint);



/***/ }),

/***/ "./src/app/modules/visualisations/parts/corrie-text/corrie-text.html":
/*!***************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/corrie-text/corrie-text.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n      <div [ngStyle]=\"getStyle()\"  >\r\n\r\n \r\n        <svg width=\"100%\" height=\"100%\"  [attr.viewBox.]=\"getViewbox()\" >\r\n          \r\n          <path  [attr.d.]=\"getPath()\"\r\n                [attr.stroke-width.]=\"strokeWidth\"\r\n                [attr.stroke.]=\"getStrokeColour()\"\r\n                [attr.fill.]=\"getFillColour()\"\r\n          />    \r\n\r\n          <text [attr.x.]=\"getTextX()\"  [attr.y.]=\"getTextY()\"  \r\n            text-anchor=\"middle\" \r\n            alignment-baseline=\"central\" >\r\n            {{text}}\r\n          </text>\r\n        </svg>\r\n\r\n\r\n      </div>"

/***/ }),

/***/ "./src/app/modules/visualisations/parts/corrie-text/corrie-text.scss":
/*!***************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/corrie-text/corrie-text.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#corrie {\n  font-size: 1vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9wYXJ0cy9jb3JyaWUtdGV4dC9EOlxcX0RhdGFcXFByaXZhdGVDb2RlXFxfZ2l0UHplS25tXFxUcmVhc3VyZUh1bnRcXEFuZ3VsYXJTUEFcXFNhbmRnYXRlVEgvc3JjXFxhcHBcXG1vZHVsZXNcXHZpc3VhbGlzYXRpb25zXFxwYXJ0c1xcY29ycmllLXRleHRcXGNvcnJpZS10ZXh0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFNQyxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Zpc3VhbGlzYXRpb25zL3BhcnRzL2NvcnJpZS10ZXh0L2NvcnJpZS10ZXh0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi8vLyBAaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMuc2Nzcyc7XHJcblxyXG4jY29ycmllIHtcclxuIC8vIHBhZGRpbmc6IDR2aDtcclxuIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyBmaXQgZnJhbWUgdG8gZW5jbG9zZSBjb250ZW50IGFuZCBubyBtb3JlXHJcbiAvLyBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuIC8vIGJvcmRlcjogMXB4IHNvbGlkICRiYW5uZXItYmFja2dyb3VuZC1jb2xvcjtcclxuIGZvbnQtc2l6ZTogMXZoO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/visualisations/parts/corrie-text/corrie-text.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/corrie-text/corrie-text.ts ***!
  \*************************************************************************/
/*! exports provided: CorrieText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorrieText", function() { return CorrieText; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CorrieText = class CorrieText {
    constructor(elRef) {
        this.elRef = elRef;
        this.fontSize = 1;
        this.fontSizeUnit = 'vh';
        this.vbHeight = 20;
        this.vbWidth = 100;
        this.radius = 5;
        this.strokeWidth = 1;
        this.strokeColour = '#000';
        this.fillColour = '#c8beb7';
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        // console.log(this.elRef.nativeElement.parentNode);
        // let parentHeight = this.self.nativeElement.offsetParent.clientHeight;
        //  this.elementView.nativeElement.
        //  console.log(parentHeight);
    }
    getViewbox() {
        const s = '0 0 ' + this.vbWidth + ' ' + this.vbHeight;
        return s;
    }
    getTextX() {
        return (this.vbWidth / 2).toString();
    }
    getTextY() {
        return (this.vbHeight / 2).toString();
    }
    getPath() {
        const r = this.radius;
        const ht = this.strokeWidth / 2;
        const a = 'a' + r + ' ' + r + ' 0 0 1 ';
        const b = r - ht;
        const s = 'm' + r + ' ' + ht +
            a + (b * -1) + ' ' + (b * 1) + ' ' +
            'v' + (this.vbHeight - (r * 2)) +
            a + (b * 1) + ' ' + (b * 1) + ' ' +
            'h' + (this.vbWidth - (r * 2)) +
            a + (b * 1) + ' ' + (b * -1) + ' ' +
            'v' + (this.vbHeight - (r * 2)) * -1 +
            a + (b * -1) + ' ' + (b * -1) + ' ' +
            'z';
        /*
            const s2 = 'm5 0.5' +
            'a5 5 0 0 1 -4.47 4.47' +
            'v10.00' +
            'a5 5 0 0 1  4.47 4.47' +
            'h90.0' +
            'a5 5 0 0 1  4.47-4.47' +
            'v-10.0' +
            'a5 5 0 0 1 -4.47-4.47' +
            'z'; */
        return s;
    }
    getStrokeColour() {
        return this.strokeColour;
    }
    getFillColour() {
        return this.fillColour;
    }
    getStyle() {
        const fontSize = 'font-size.' + this.fontSizeUnit;
        const objRet = {};
        objRet[fontSize] = this.fontSize;
        return objRet;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CorrieText.prototype, "text", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], CorrieText.prototype, "fontSize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CorrieText.prototype, "fontSizeUnit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], CorrieText.prototype, "vbHeight", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], CorrieText.prototype, "vbWidth", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], CorrieText.prototype, "radius", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], CorrieText.prototype, "strokeWidth", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CorrieText.prototype, "strokeColour", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], CorrieText.prototype, "fillColour", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("self"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], CorrieText.prototype, "self", void 0);
CorrieText = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-corrie-text',
        template: __webpack_require__(/*! ./corrie-text.html */ "./src/app/modules/visualisations/parts/corrie-text/corrie-text.html"),
        styles: [__webpack_require__(/*! ./corrie-text.scss */ "./src/app/modules/visualisations/parts/corrie-text/corrie-text.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], CorrieText);



/***/ }),

/***/ "./src/app/modules/visualisations/parts/flourish-text/flourish-text.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/flourish-text/flourish-text.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n      <div id=\"flourishBorder\" \r\n        [ngStyle]=\"{background: getUrl() }\">\r\n\r\n        <ng-content></ng-content>\r\n \r\n        <!-- Corner-Ornament-3-By-RebeccaRead -->\r\n        <svg class='svgCorner svgCornerTR' viewBox=\"0 0 1841.4 1732.5\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <path d=\"m1657 1636.2c-1.15 14.484-13.733 31.753-38.55 29.904-29.204-4.076-42.908-45.411-8.953-64.39-0.023-60.887-0.07-552.72 0.01-570.26-38.034-27.832-49.897-75.373-48.848-122.5 16.504-188.41 190.19-324.39 180.68-564.55-1.477-12.405 1.462-120.69-59.234-189.03-41.404-45.424-106.15-65.484-144.66-61.721-0.01 0.217-0.025 0.653-0.035 0.87 101.17 51.399 226.04 227.92 76.517 543.64-63.962 135.2-126.93 191.68-97.933 292.9-25.013-1.679-55.741-13.99-68.385-38.53-37.641-72.201 74.811-159.09 91.294-182.9 0.638-1.483-1.241-1.122-1.804-0.386-66.486 54.828-80.583 14.788-224.16 55.398 2.803-29.004 17.49-60.919 43.306-81.97 40.102-32.437 92.657-27.109 152.85-63.669 24.711-15.401 40.752-35.538 47.473-52.427-4.069 1.374-22.147 11.821-53.51 20.842-109.77 32.011-219.62-2.926-259.84-99.243-73.343-179.04 170.41-316.57 276.35-182.59 34.819 44.759 25.714 103.21-4.652 123.82-1.622 1.177-3.614 1.933-4.761 3.653 30.783 3.947 65.948-51.188 47.226-114.72-38.729-133.52-279.28-176.48-398.26-57.781-38.612 37.569-68.479 108.46-44.547 155.74 18.193 37.729 57.937 36.345 62.804 82.464 2.762 50.859-60.605 60.299-84.303 15.711-0.771-1.285-1.29-2.966-2.857-3.51 7.765 45.051 47.815 113.14 83.839 140.67 0.01 0.227 0.025 0.682 0.035 0.91-30.333 7.572-51.561 4.551-59.704 4.4 37.721 112.28-18.498 176.69-80.517 183.16-27.057 4.285-78.192-10.172-77.007-48.813-0.526-20.185 15.404-39.847 20.195-22.592 1.56 4.961-0.958 21.982 13.669 33.003 15.829 12.263 42.279 8.734 55.245-11.192 55.269-81.238-181.19-219.38-102.99-317.39-33.196 1.605-52.222-21.494-57.9-45.521 18.135 0.985 21.631 11.204 71.475-71.109 25.625-41.334 60.584-78.848 95.881-105.69 1.518-1.216 3.505-2.121 4.158-4.118-11.689 2.368-46.189 28.835-57.296 37.957-94.629 77.732-128.73 135.38-239.42 110.53-21.531-5.01-30.999-9.577-34.833-10.718 8.894-26.039 24.603-36.121 44.893-42.545 0.114-0.267 0.341-0.801 0.455-1.068-28.557-2.119-53.529-23.403-59.704-50.736-192.24-0.044-384.47-0.025-576.71-0.01-15.283 26.042-52.749 21.042-61.592-5.947-13.052-39.741 43.46-63.559 63.071-24.535 291.08-0.076 576.28 0.056 578.03-0.084 1.33-1.127 1.953-2.828 2.951-4.232 22.205-31.744 58.788-21.901 64.816-18.573-2.645 0.292-5.314-0.049-7.974 0.143-42.13 2.471-40.518 54.133-11.672 72.681 10.145 7.151 30.452 11.674 43.336 12.779 136.14 4.945 250.62-166.13 515.98-168.05-1.288-50.475 52.655-93.797 141.53-83.018 34.4 4.311 23.027 7.397 34.64 3.915 73.552-24.828 155.42 4.746 198.1 56.308 55.492 62.957 83.424 182.37 66.126 297.44-3.442 23.872-15.723 70.315-5.596 122.87 4.835 25.755 15.503 52.649 15.518 78.341 1.172 50.249-19.305 90.939-15.933 118.68 0.198 2.333 0.539 4.657 0.593 6.99-14.591-7.231-41.682-29.066-50.919-62.982-5.006-18.17-2.906-32.105-3.179-35.03-1.463 1.582-2.155 3.658-3.03 5.581-34.931 81.401 63.977 103.57 14.129 222.57-50.281-12.177-83.149-48.884-78.129-111.48 0.45-4.805 1.364-9.551 1.963-14.341-4.373 3.68-46.006 80.086-40.829 149.83 2.328 35.437 11.496 82.418 47.004 80.808 15.512-2.457 19.603-12.066 29.662-15.36 26.231-8.804 40.365 43.123-11.029 60.757-6.946 2.229-14.084 4.331-21.455 4.192-0.01 31.06-0.073 537.77 0.04 562.95 10.829 5.983 17.274 16.301 16.903 32.882m-211.38-1546.1c-66.063-10.096-95.962 36.85-72.859 69.235 1.117 1.913 3.658 1.577 5.517 2.096 170.09 34.001 211.96 148.23 205.19 199.84-1.73 71.28-57.756 112.69-104.83 103.79-60.029-9.739-75.038-74.317-29.731-83.428 6.238-1.475 20.58-2.308 28.099 4.123 7.742 7.076 7.962 21.503 6.946 31.901 37.145-11.637 45.122-83.882-9.803-110.63-113.07-56.562-191.34 87.317-141.39 172.65 23.058 40.393 81.69 75.012 149.94 74.075 250-7.385 223.61-429.97-37.082-463.65z\"/>\r\n        </svg>\r\n\r\n        <svg class='svgCorner svgCornerTL' viewBox=\"0 0 1841.4 1732.5\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <path d=\"m184.66 1636.2c1.15 14.484 13.733 31.753 38.55 29.904 29.204-4.076 42.908-45.411 8.953-64.39 0.023-60.887 0.07-552.72-0.01-570.26 38.034-27.832 49.897-75.373 48.848-122.5-16.504-188.41-190.19-324.39-180.68-564.55 1.477-12.405-1.462-120.69 59.234-189.03 41.404-45.424 106.15-65.484 144.66-61.721 0.01 0.217 0.025 0.653 0.035 0.87-101.17 51.399-226.04 227.92-76.517 543.64 63.962 135.2 126.93 191.68 97.933 292.9 25.013-1.679 55.741-13.99 68.385-38.53 37.641-72.201-74.811-159.09-91.294-182.9-0.638-1.483 1.241-1.122 1.804-0.386 66.486 54.828 80.583 14.788 224.16 55.398-2.803-29.004-17.49-60.919-43.306-81.97-40.102-32.437-92.657-27.109-152.85-63.669-24.711-15.401-40.752-35.538-47.473-52.427 4.069 1.374 22.147 11.821 53.51 20.842 109.77 32.011 219.62-2.926 259.84-99.243 73.343-179.04-170.41-316.57-276.35-182.59-34.819 44.759-25.714 103.21 4.652 123.82 1.622 1.177 3.614 1.933 4.761 3.653-30.783 3.947-65.948-51.188-47.226-114.72 38.729-133.52 279.28-176.48 398.26-57.781 38.612 37.569 68.479 108.46 44.547 155.74-18.193 37.729-57.937 36.345-62.804 82.464-2.762 50.859 60.605 60.299 84.303 15.711 0.771-1.285 1.29-2.966 2.857-3.51-7.765 45.051-47.815 113.14-83.839 140.67-0.01 0.227-0.025 0.682-0.035 0.91 30.333 7.572 51.561 4.551 59.704 4.4-37.721 112.28 18.498 176.69 80.517 183.16 27.057 4.285 78.192-10.172 77.007-48.813 0.526-20.185-15.404-39.847-20.195-22.592-1.56 4.961 0.958 21.982-13.669 33.003-15.829 12.263-42.279 8.734-55.245-11.192-55.269-81.238 181.19-219.38 102.99-317.39 33.196 1.605 52.222-21.494 57.9-45.521-18.135 0.985-21.631 11.204-71.475-71.109-25.625-41.334-60.584-78.848-95.881-105.69-1.518-1.216-3.505-2.121-4.158-4.118 11.689 2.368 46.189 28.835 57.296 37.957 94.629 77.732 128.73 135.38 239.42 110.53 21.531-5.01 30.999-9.577 34.833-10.718-8.894-26.039-24.603-36.121-44.893-42.545-0.114-0.267-0.341-0.801-0.455-1.068 28.557-2.119 53.529-23.403 59.704-50.736 192.24-0.044 384.47-0.025 576.71-0.01 15.283 26.042 52.749 21.042 61.592-5.947 13.052-39.741-43.46-63.559-63.071-24.535-291.08-0.076-576.28 0.056-578.03-0.084-1.33-1.127-1.953-2.828-2.951-4.232-22.205-31.744-58.788-21.901-64.816-18.573 2.645 0.292 5.314-0.049 7.974 0.143 42.13 2.471 40.518 54.133 11.672 72.681-10.145 7.151-30.452 11.674-43.336 12.779-136.14 4.945-250.62-166.13-515.98-168.05 1.288-50.475-52.655-93.797-141.53-83.018-34.4 4.311-23.027 7.397-34.64 3.915-73.552-24.828-155.42 4.746-198.1 56.308-55.492 62.957-83.424 182.37-66.126 297.44 3.442 23.872 15.723 70.315 5.596 122.87-4.835 25.755-15.503 52.649-15.518 78.341-1.172 50.249 19.305 90.939 15.933 118.68-0.198 2.333-0.539 4.657-0.593 6.99 14.591-7.231 41.682-29.066 50.919-62.982 5.006-18.17 2.906-32.105 3.179-35.03 1.463 1.582 2.155 3.658 3.03 5.581 34.931 81.401-63.977 103.57-14.129 222.57 50.281-12.177 83.149-48.884 78.129-111.48-0.45-4.805-1.364-9.551-1.963-14.341 4.373 3.68 46.006 80.086 40.829 149.83-2.328 35.437-11.496 82.418-47.004 80.808-15.512-2.457-19.603-12.066-29.662-15.36-26.231-8.804-40.365 43.123 11.029 60.757 6.946 2.229 14.084 4.331 21.455 4.192 0.01 31.06 0.073 537.77-0.04 562.95-10.829 5.983-17.274 16.301-16.903 32.882m211.38-1546.1c66.063-10.096 95.962 36.85 72.859 69.235-1.117 1.913-3.658 1.577-5.517 2.096-170.09 34.001-211.96 148.23-205.19 199.84 1.73 71.28 57.756 112.69 104.83 103.79 60.029-9.739 75.038-74.317 29.731-83.428-6.238-1.475-20.58-2.308-28.099 4.123-7.742 7.076-7.962 21.503-6.946 31.901-37.145-11.637-45.122-83.882 9.803-110.63 113.07-56.562 191.34 87.317 141.39 172.65-23.058 40.393-81.69 75.012-149.94 74.075-250-7.385-223.61-429.97 37.082-463.65z\"/>\r\n         </svg>\r\n\r\n        <svg class='svgCorner svgCornerBL' viewBox=\"0 0 1841.4 1732.5\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <path d=\"m184.65 96.295c1.15-14.484 13.733-31.753 38.55-29.904 29.204 4.076 42.908 45.411 8.953 64.39 0.023 60.887 0.07 552.72-5e-3 570.26 38.034 27.832 49.897 75.373 48.848 122.5-16.504 188.41-190.19 324.39-180.68 564.55 1.477 12.405-1.462 120.69 59.234 189.03 41.404 45.424 106.15 65.484 144.66 61.721 0.01-0.217 0.025-0.653 0.035-0.87-101.17-51.399-226.04-227.92-76.517-543.64 63.962-135.2 126.93-191.68 97.933-292.9 25.013 1.679 55.741 13.99 68.385 38.53 37.641 72.201-74.811 159.09-91.294 182.9-0.638 1.483 1.241 1.122 1.804 0.386 66.486-54.828 80.583-14.788 224.16-55.398-2.803 29.004-17.49 60.919-43.306 81.97-40.102 32.437-92.657 27.109-152.85 63.669-24.711 15.401-40.752 35.538-47.473 52.427 4.069-1.374 22.147-11.821 53.51-20.842 109.77-32.011 219.62 2.926 259.84 99.243 73.343 179.04-170.41 316.57-276.35 182.59-34.819-44.759-25.714-103.21 4.652-123.82 1.622-1.177 3.614-1.933 4.761-3.653-30.783-3.947-65.948 51.188-47.226 114.72 38.729 133.52 279.28 176.48 398.26 57.781 38.612-37.569 68.479-108.46 44.547-155.74-18.193-37.729-57.937-36.345-62.804-82.464-2.762-50.859 60.605-60.299 84.303-15.711 0.771 1.285 1.29 2.966 2.857 3.51-7.765-45.051-47.815-113.14-83.839-140.67-0.01-0.227-0.025-0.682-0.035-0.91 30.333-7.572 51.561-4.551 59.704-4.4-37.721-112.28 18.498-176.69 80.517-183.16 27.057-4.285 78.192 10.172 77.007 48.813 0.526 20.185-15.404 39.847-20.195 22.592-1.56-4.961 0.958-21.982-13.669-33.003-15.829-12.263-42.279-8.734-55.245 11.192-55.269 81.238 181.19 219.38 103 317.39 33.196-1.605 52.222 21.494 57.9 45.521-18.135-0.985-21.631-11.204-71.475 71.109-25.625 41.334-60.584 78.848-95.881 105.69-1.518 1.216-3.505 2.121-4.158 4.118 11.689-2.368 46.189-28.835 57.296-37.957 94.629-77.732 128.73-135.38 239.42-110.53 21.531 5.01 30.999 9.577 34.833 10.718-8.894 26.039-24.603 36.121-44.893 42.545-0.114 0.267-0.341 0.801-0.455 1.068 28.557 2.119 53.529 23.403 59.704 50.736 192.24 0.044 384.47 0.025 576.71 0.01 15.283-26.042 52.749-21.042 61.592 5.947 13.052 39.741-43.46 63.559-63.071 24.535-291.08 0.076-576.28-0.056-578.03 0.084-1.33 1.127-1.953 2.828-2.951 4.232-22.205 31.744-58.788 21.901-64.816 18.573 2.645-0.292 5.314 0.049 7.974-0.143 42.13-2.471 40.518-54.133 11.672-72.681-10.145-7.151-30.452-11.674-43.336-12.779-136.14-4.945-250.62 166.13-515.98 168.05 1.288 50.475-52.655 93.797-141.53 83.018-34.4-4.311-23.027-7.397-34.64-3.915-73.552 24.828-155.42-4.746-198.1-56.308-55.492-62.957-83.424-182.37-66.126-297.44 3.442-23.872 15.723-70.315 5.596-122.87-4.835-25.755-15.503-52.649-15.518-78.341-1.172-50.249 19.305-90.939 15.933-118.68-0.198-2.333-0.539-4.657-0.593-6.99 14.591 7.231 41.682 29.066 50.919 62.982 5.006 18.17 2.906 32.105 3.179 35.03 1.463-1.582 2.155-3.658 3.03-5.581 34.931-81.401-63.977-103.57-14.129-222.57 50.281 12.177 83.149 48.884 78.129 111.48-0.45 4.805-1.364 9.551-1.963 14.341 4.373-3.68 46.006-80.086 40.829-149.83-2.328-35.437-11.496-82.418-47.004-80.808-15.512 2.457-19.603 12.066-29.662 15.36-26.231 8.804-40.365-43.123 11.029-60.757 6.946-2.229 14.084-4.331 21.455-4.192 0.01-31.06 0.073-537.77-0.04-562.95-10.829-5.983-17.274-16.301-16.903-32.882m211.38 1546.1c66.063 10.096 95.962-36.85 72.859-69.235-1.117-1.913-3.658-1.577-5.517-2.096-170.09-34.001-211.96-148.23-205.19-199.84 1.73-71.28 57.756-112.69 104.83-103.79 60.029 9.739 75.038 74.317 29.731 83.428-6.238 1.475-20.58 2.308-28.099-4.123-7.742-7.076-7.962-21.503-6.946-31.901-37.145 11.637-45.122 83.882 9.803 110.63 113.07 56.562 191.34-87.317 141.39-172.65-23.058-40.393-81.69-75.012-149.94-74.075-250 7.385-223.61 429.97 37.082 463.65z\"/>\r\n         </svg>\r\n\r\n        <svg class='svgCorner svgCornerBR' viewBox=\"0 0 1841.4 1732.5\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <path d=\"m1657 96.295c-1.15-14.484-13.733-31.753-38.55-29.904-29.204 4.076-42.908 45.411-8.953 64.39-0.023 60.887-0.07 552.72 0.01 570.26-38.034 27.832-49.897 75.373-48.848 122.5 16.504 188.41 190.19 324.39 180.68 564.55-1.477 12.405 1.462 120.69-59.234 189.03-41.404 45.424-106.15 65.484-144.66 61.721-0.01-0.217-0.025-0.653-0.035-0.87 101.17-51.399 226.04-227.92 76.517-543.64-63.962-135.2-126.93-191.68-97.933-292.9-25.013 1.679-55.741 13.99-68.385 38.53-37.641 72.201 74.811 159.09 91.294 182.9 0.638 1.483-1.241 1.122-1.804 0.386-66.486-54.828-80.583-14.788-224.16-55.398 2.803 29.004 17.49 60.919 43.306 81.97 40.102 32.437 92.657 27.109 152.85 63.669 24.711 15.401 40.752 35.538 47.473 52.427-4.069-1.374-22.147-11.821-53.51-20.842-109.77-32.011-219.62 2.926-259.84 99.243-73.343 179.04 170.41 316.57 276.35 182.59 34.819-44.759 25.714-103.21-4.652-123.82-1.622-1.177-3.614-1.933-4.761-3.653 30.783-3.947 65.948 51.188 47.226 114.72-38.729 133.52-279.28 176.48-398.26 57.781-38.612-37.569-68.479-108.46-44.547-155.74 18.193-37.729 57.937-36.345 62.804-82.464 2.762-50.859-60.605-60.299-84.303-15.711-0.771 1.285-1.29 2.966-2.857 3.51 7.765-45.051 47.815-113.14 83.839-140.67 0.01-0.227 0.025-0.682 0.035-0.91-30.333-7.572-51.561-4.551-59.704-4.4 37.721-112.28-18.498-176.69-80.517-183.16-27.057-4.285-78.192 10.172-77.007 48.813-0.526 20.185 15.404 39.847 20.195 22.592 1.56-4.961-0.958-21.982 13.669-33.003 15.829-12.263 42.279-8.734 55.245 11.192 55.269 81.238-181.19 219.38-102.99 317.39-33.196-1.605-52.222 21.494-57.9 45.521 18.135-0.985 21.631-11.204 71.475 71.109 25.625 41.334 60.584 78.848 95.881 105.69 1.518 1.216 3.505 2.121 4.158 4.118-11.689-2.368-46.189-28.835-57.296-37.957-94.629-77.732-128.73-135.38-239.42-110.53-21.531 5.01-30.999 9.577-34.833 10.718 8.894 26.039 24.603 36.121 44.893 42.545 0.114 0.267 0.341 0.801 0.455 1.068-28.557 2.119-53.529 23.403-59.704 50.736-192.24 0.044-384.47 0.025-576.71 0.01-15.283-26.042-52.749-21.042-61.592 5.947-13.052 39.741 43.46 63.559 63.071 24.535 291.08 0.076 576.28-0.056 578.03 0.084 1.33 1.127 1.953 2.828 2.951 4.232 22.205 31.744 58.788 21.901 64.816 18.573-2.645-0.292-5.314 0.049-7.974-0.143-42.13-2.471-40.518-54.133-11.672-72.681 10.145-7.151 30.452-11.674 43.336-12.779 136.14-4.945 250.62 166.13 515.98 168.05-1.288 50.475 52.655 93.797 141.53 83.018 34.4-4.311 23.027-7.397 34.64-3.915 73.552 24.828 155.42-4.746 198.1-56.308 55.492-62.957 83.424-182.37 66.126-297.44-3.442-23.872-15.723-70.315-5.596-122.87 4.835-25.755 15.503-52.649 15.518-78.341 1.172-50.249-19.305-90.939-15.933-118.68 0.198-2.333 0.539-4.657 0.593-6.99-14.591 7.231-41.682 29.066-50.919 62.982-5.006 18.17-2.906 32.105-3.179 35.03-1.463-1.582-2.155-3.658-3.03-5.581-34.931-81.401 63.977-103.57 14.129-222.57-50.281 12.177-83.149 48.884-78.129 111.48 0.45 4.805 1.364 9.551 1.963 14.341-4.373-3.68-46.006-80.086-40.829-149.83 2.328-35.437 11.496-82.418 47.004-80.808 15.512 2.457 19.603 12.066 29.662 15.36 26.231 8.804 40.365-43.123-11.029-60.757-6.946-2.229-14.084-4.331-21.455-4.192-0.01-31.06-0.073-537.77 0.04-562.95 10.829-5.983 17.274-16.301 16.903-32.882m-211.38 1546.1c-66.063 10.096-95.962-36.85-72.859-69.235 1.117-1.913 3.658-1.577 5.517-2.096 170.09-34.001 211.96-148.23 205.19-199.84-1.73-71.28-57.756-112.69-104.83-103.79-60.029 9.739-75.038 74.317-29.731 83.428 6.238 1.475 20.58 2.308 28.099-4.123 7.742-7.076 7.962-21.503 6.946-31.901 37.145 11.637 45.122 83.882-9.803 110.63-113.07 56.562-191.34-87.317-141.39-172.65 23.058-40.393 81.69-75.012 149.94-74.075 250 7.385 223.61 429.97-37.082 463.65z\"/>\r\n         </svg>\r\n         \r\n      </div>"

/***/ }),

/***/ "./src/app/modules/visualisations/parts/flourish-text/flourish-text.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/flourish-text/flourish-text.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#flourishBorder {\n  padding: 4vh;\n  position: relative;\n  display: inline-block;\n  border: 1px solid #0c0d3a; }\n\n.svgCorner {\n  width: 8vh;\n  position: absolute; }\n\n.svgCornerTR {\n  top: 0;\n  right: 0; }\n\n.svgCornerTL {\n  top: 0;\n  left: 0; }\n\n.svgCornerBL {\n  bottom: 0;\n  left: 0; }\n\n.svgCornerBR {\n  bottom: 0;\n  right: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9wYXJ0cy9mbG91cmlzaC10ZXh0L0Q6XFxfRGF0YVxcUHJpdmF0ZUNvZGVcXF9naXRQemVLbm1cXFRyZWFzdXJlSHVudFxcQW5ndWxhclNQQVxcU2FuZGdhdGVUSC9zcmNcXGFwcFxcbW9kdWxlc1xcdmlzdWFsaXNhdGlvbnNcXHBhcnRzXFxmbG91cmlzaC10ZXh0XFxmbG91cmlzaC10ZXh0LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvdmlzdWFsaXNhdGlvbnMvcGFydHMvZmxvdXJpc2gtdGV4dC9EOlxcX0RhdGFcXFByaXZhdGVDb2RlXFxfZ2l0UHplS25tXFxUcmVhc3VyZUh1bnRcXEFuZ3VsYXJTUEFcXFNhbmRnYXRlVEgvc3JjXFxhcHBcXHN0eWxlc1xcZ2VuZXJhbC1jb2xvdXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBRWxCLHFCQUFvQjtFQUNwQix5QkNSK0IsRUFBQTs7QURZakM7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsTUFBTTtFQUNOLFFBQVEsRUFBQTs7QUFHVjtFQUNFLE1BQU07RUFDTixPQUFPLEVBQUE7O0FBR1Q7RUFDRSxTQUFTO0VBQ1QsT0FBTyxFQUFBOztBQUdUO0VBQ0UsU0FBUztFQUNULFFBQVEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmlzdWFsaXNhdGlvbnMvcGFydHMvZmxvdXJpc2gtdGV4dC9mbG91cmlzaC10ZXh0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4vL0BpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGVzL2dlbmVyYWwtY29sb3Vycy5zY3NzJztcclxuXHJcblxyXG4jZmxvdXJpc2hCb3JkZXIge1xyXG4gIHBhZGRpbmc6IDR2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy8gZml0IGZyYW1lIHRvIGVuY2xvc2UgY29udGVudCBhbmQgbm8gbW9yZVxyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRiYW5uZXItYmFja2dyb3VuZC1jb2xvcjtcclxuICBcclxufVxyXG5cclxuLnN2Z0Nvcm5lciB7XHJcbiAgd2lkdGg6IDh2aDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5zdmdDb3JuZXJUUnsgIFxyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLnN2Z0Nvcm5lclRMe1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uc3ZnQ29ybmVyQkx7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5zdmdDb3JuZXJCUiB7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcbiIsIi8vIFRoZSBwbGFjZSB3aGVyZSB0aGUgY29sb3Igc2NoZW1lIGZvciB0aGUgbm9uLWdhbWUgcGFydHMgb2YgdGhlIGFwcFxyXG5cclxuXHJcbiRib2R5LWJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiRiYW5uZXItYmFja2dyb3VuZC1jb2xvcjogIzBjMGQzYTtcclxuXHJcblxyXG5cclxuJG1lc3NhZ2UtYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwOSwgMTA2LCAxMDYpO1xyXG5cclxuXHJcblxyXG4kY291bnRkb3duLW91dGxpbmUtc3Ryb2tlLWNvbG9yOiBncmV5O1xyXG4kY291bnRkb3duLW91dGxpbmUtZmlsbC1jb2xvcjogI2Q2ZjRmZjtcclxuJGNvdW50ZG93bi1yZW1haW5pbmctc3Ryb2tlLWNvbG9yOiByZ2IoMCwwLDApO1xyXG4kY291bnRkb3duLXJlbWFpbmluZy1maWxsLWNvbG9yOiAjN2ZiMGUxO1xyXG4kY291bnRkb3duLXF1ZXN0aW9uLXN0cm9rZS1jb2xvcjogcmdiKDAsMCwwKTtcclxuJGNvdW50ZG93bi1xdWVzdGlvbi1maWxsLWNvbG9yOiAjNWQ3YTk4O1xyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/visualisations/parts/flourish-text/flourish-text.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/flourish-text/flourish-text.ts ***!
  \*****************************************************************************/
/*! exports provided: FlourishText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlourishText", function() { return FlourishText; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FlourishText = class FlourishText {
    constructor() { }
    ngOnInit() {
    }
    getUrl() {
        if (this.flourishStyle === undefined || this.flourishStyle === '') {
            return '';
        }
        return 'url(./assets/images/' + this.flourishStyle + ')';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FlourishText.prototype, "flourishStyle", void 0);
FlourishText = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flourish-text',
        template: __webpack_require__(/*! ./flourish-text.html */ "./src/app/modules/visualisations/parts/flourish-text/flourish-text.html"),
        styles: [__webpack_require__(/*! ./flourish-text.scss */ "./src/app/modules/visualisations/parts/flourish-text/flourish-text.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FlourishText);



/***/ }),

/***/ "./src/app/modules/visualisations/parts/graphic-display/graphic-display.html":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/graphic-display/graphic-display.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n        <svg width=\"100%\" height=\"100%\" [attr.viewBox.]=\"getViewbox()\" xmlns=\"http://www.w3.org/2000/svg\">\r\n          <g [attr.transform.]=\"getTransform()\">\r\n            <!-- hand, originally pointing up -->\r\n            <path d=\"m68.861 2.2968c0.48015 1.5963 2.4935 8.6512 3.8876 17.836 3.8691 25.464 2.6142 41.343-2.7116 51.794-2.5515 5.0059-4.6392 13.367-4.6392 18.582v9.4755l-17.977-0.67798-15.1 0.19504-0.54742-12.429c-0.15541-5.1081-2.5863-14.333-4.6554-21.245-2.8809-9.6241-2.5144-15.612-0.73531-22.227 0.71675-2.6632 7.0747-10.36 11.612-7.9407 2.6884-6.5244 6.8196-3.6128 8.325-3.8148 5.5971-3.3667 4.8062-3.5176 5.5995-2.4078l1.3245-3.5339 3.1106-2.0551 6.5853 9.4687-1.6028-18.935c0.01624-9.8323-0.79098-14.398 3.7716-14.398 1.06 4.6e-5 3.2752 0.71648 3.7531 2.3127zm-29.526 90.315c-2.2941 5.6305-1.0392 3.7382 11.301 4.3813 11.946 0.62458 12.073 0.29255 12.073-5.3658 0-5.2985 1.1157-5.2451-6.9866-5.2451-6.794 0-13.799 2.2754-16.388 6.2295z\" fill=\"#d0d0d0\" stroke-width=\"2.3207\"/>\r\n            <path d=\"m69.699 2.5651c0.48108 1.6039 4.3344 17.617 4.7688 26.943 1.163 25.088-1.2191 36.237-4.4208 43.567-2.2606 5.1767-3.7926 12.115-3.7926 17.354l-0.26156 9.3456-16.784 0.10731-18.099-0.68121-0.28725-9.3316c-0.1588-5.1324-1.9921-15.015-4.0729-21.96-2.9005-9.6699-1.1326-17.847 0.6609-24.493 0.71929-2.6758 3.3629-6.2475 5.3129-8.3285 1.9524-2.0786 1.9687 0.86784 4.1406-0.30328 1.0859-0.58322 2.7464-2.8765 4.6987-3.2287s3.0873 1.5887 4.0425 0.63455c4.2153-4.2062 3.475-3.6743 6.7889-1.4114-0.66791-4.7335 1.1-7.1261 3.7459-6.5914 2.0458 3.414 6.497 8.4274 6.497 8.4274l-1.1116-17.193c0.01635-9.8791-1.4432-15.54 3.1504-15.54 1.0673 4.7e-5 4.5423 1.0794 5.0234 2.6833zm-6.7725 3.627c-0.2639 7.7627-1.156 8.29 3.1971 7.9676 3.113-0.10871 5.6446 2.8856 6.2868 2.8856 1.2844 0-2.4381-10.694-2.4381-13.336 0-2.6418-0.65156-0.85802-1.9617-1.6071-1.3218-0.75497-4.4185-0.46583-5.0841 4.0896zm1.0813 13.119c0 3.7424 0.27791 8.1227 2.0481 8.181 3.447 0.11198 7.8795 2.7248 0.4227 1.2038-2.4078-0.48991-1.7725 2.4659 0.95049 7.7266 1.9407 3.749 5.1121 8.4824 5.8664 8.4824 1.3358 0 0.94815-15.523-0.39935-26.306-0.37132-2.9702-5.8407-3.5957-7.1252-3.5563-1.2821 0.03943-1.7632 0.25055-1.7632 4.2683zm-16.13 21.591c0 6.2312 6.4479 19.02 9.7595 16.916 0.90378-0.57623 0.39-6.9194-0.94115-9.4016-1.3288-2.4822-4.5469-12.446-4.5469-15.812 0-3.49-2.3587-2.3586-4.4348 1.0031-0.79402 1.2854 0.16348 3.777 0.16348 7.295zm8.3255 0.27295c8.0243 11.137 1.1163 9.5556 8.9771 17.919-6.0509-0.24962-8.7296 3.1611-13.113 6.7631-3.3816 2.4659-1.8379 6.5088-1.88 7.4723-3.4143-4.0849-2.8608-10.234 1.3498-11.651-1.4619-0.67421-6.1677 3.1727-16.639-1.913-6.6021 3.0631-0.93648 11.417 1.3919 15.763 1.7118 7.2157 3.8907 8.5081 14.29 8.5081 10.465 0 11.193-0.44558 17.331-10.591 6.5133-10.773 9.4372-23.168 5.5581-23.168-1.184 0-2.1602 0.81885-3.0056-3.0304-0.84774-3.8493-5.9808-4.9597-6.504-6.2545-0.9575-2.3656-3.2041 1.3531-3.3419 0.16797-0.20785-1.808 4.8832-1.5187 0.42036-9.2873-2.2326-3.8843-3.6338-6.0422-4.6147-6.4738-0.98085-0.43159-1.483 1.4184-2.1065 3.8773-0.5021 4.1992 1.915 12.738 1.887 11.898zm-16.116-4.1129c0 3.0561 1.3919 12.581 1.7655 14.042 2.27 8.8814 7.3891 7.4629 6.9453 2.4495-0.21952-2.4729-2.8655-10.79-3.2929-14.506s-0.17282-6.5181-0.95049-6.7677c-3.6548-1.1804-4.4675 1.7263-4.4675 4.7824zm-5.4204 14.681c2.1205 3.581 4.3835-0.44325 3.9888-5.5033-1.2261-15.738-4.2036-10.321-4.8762-7.6309-0.40869 1.6284-0.47174 10.841 0.88744 13.134zm1.4362 40.254c-2.2396 7.2273 1.6791 6.0375 14.872 6.0375 13.447 0 13.998-0.23329 13.998-5.9489 0-5.7553-0.42504-5.9256-13.204-5.249-11.646 0.61822-14.967 0.5319-15.666 5.1604z\" fill=\"#8c8c8c\" stroke-width=\"2.3341\"/>\r\n            <path d=\"m70.299 4.6911c0.72015 2.1439 1.788 7.1239 2.7226 15.794 2.7339 25.369 3.138 40.969-2.0453 51.325-2.3433 6.1111-4.5151 12.091-4.5151 17.256v10.934h-35.269v-10.934c-0.15351-5.0619-1.9257-14.808-3.9394-21.658-2.8016-9.537-2.7903-14.201-1.0588-20.756 1.3952-5.2805 4.0929-9.8338 6.9983-12.27 1.4516-1.2172 5.9328-2.7081 5.7319-0.14035-0.13771 1.7579-1.113-0.66955 0.29799-2.0938 2.7813-2.807 5.2352-1.8913 6.4136-0.49928 0.32057-0.67185 0.68403-1.5071 2.1221-2.8024s4.2171-0.43256 4.3886 0.95255c0.1806 1.4679-1.7067 1.2954-0.20092-3.8493 0.66146-2.2604 4.8988-3.3517 5.2104-1.5459 2.4494 4.3116 3.5488 6.1684 3.5488 6.1684l-0.63662-13.823c0.01354-9.7432-1.6209-17.243 5.3684-16.723 2.9754 0.22383 4.3977 3.0829 4.8627 4.6647zm-8.3213 10.472c-0.12642 12.036 0.1061 17.952 4.3209 24.223 6.2398 9.2793 9.757 19.279 5.0591-19.104-1.262-10.333-2.4517-18.066-5.8131-18.289-4.2284-0.27955-4.2329 2.5758-3.5669 13.169zm-14.435 16.496c-0.89398 0.83291-1.1401 3.8562-2.1469 1.3046-4.5828-2.9543-7.3844 2.2272-5.9621 9.07 0 0 1.1107 11 1.876 12.452 1.1875 3.7159-0.31605 0.45787-1.1965 1.675-0.24607 2.9612-2.0498-6.9739-2.1921-9.5531-0.80142-4.7651-0.95042-8.4004-0.63436-9.9696 0.31605-1.5715-2.8016-1.0193-3.1176 0.69026-1.657 4.2727-1.8038 10.964-0.14222 16.845 0.8398 2.9796 6.0344 1.6244 7.2873 0.37044 0.61405 2.1076 1.9595 4.7927 3.9281 5.5128 10.109 3.3155 1.3161-10.641 0.35895-16.778-0.96396-6.1824-0.80594-9.0884-0.3138-10.614 0.24607-0.76158 1.7676-1.0262 1.6457-0.12194-0.12191 0.90424-0.62082 3.7642-0.17834 5.7843 0.78336 3.5755 0.65243 6.0558 1.8399 9.4312 2.1898 6.6288 0.20769 1.0331 2.7294 7.0912 2.2079 4.1208 1.6254 2.8254 3.1696 4.7236 7.8697 2.4527 1.9121-9.2241-0.45376-15.565-1.0723-4.4429-2.6052-8.7593-2.5646-13.331-1.9121-0.83751-3.296-0.24619-3.9326 0.98246zm8.4906 11.681c1.6954 3.5157 2.3004 7.2201 3.5421 10.046 0.95945 4.9491 0.80594 5.8212-0.0587 7.227-1.8692 2.1697-5.7319 1.8108-8.7163-2.7219 0-0.91114 1.8218 3.8286-3.1199 3.7205-1.6277-0.24389-1.6412 0.33592-4.4993-1.4541-1.5893-1.4771-2.6842-2.5655-2.7993-3.1775-1.271 0-1.5825 0.35663-2.9303 0.29221-4.2035 0.0046-5.1517-3.7757-5.7251-5.6693-0.57341-1.8936-1.0565-9.613 0.76304-13.764 1.7993-4.107-3.5804 4.6339-4.558 8.9894-0.97525 4.3555-0.64565 12.206 1.2304 16.985 1.5893 4.0472 2.3253 10.273 3.3321 12.804 1.0091 2.5309 0.149 6.5252 1.3952 6.5252 3.5511 0 8.9646 0.77309 16.457 0.50849l14.304-0.50849 2.9732-9.8154c1.858-2.7978 6.5536-15.402 2.9009-23.434-1.9731-3.4467-4.6641-6.6564-6.3549-10.239-1.3613-2.294-2.6503-3.6929-3.6324-5.9914-1.2371-2.8945-1.946-4.4706-4.2329-8.2532-4.6844-1.0342-2.7045 14.364-0.2709 17.931zm6.1969 52.823v-9.2609h-27.761v9.2609c8.6418 0.04142 19.101-0.11274 27.761 0z\" stroke-width=\"2.2791\"/>\r\n          </g>\r\n        </svg>\r\n     "

/***/ }),

/***/ "./src/app/modules/visualisations/parts/graphic-display/graphic-display.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/graphic-display/graphic-display.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmlzdWFsaXNhdGlvbnMvcGFydHMvZ3JhcGhpYy1kaXNwbGF5L2dyYXBoaWMtZGlzcGxheS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/visualisations/parts/graphic-display/graphic-display.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/graphic-display/graphic-display.ts ***!
  \*********************************************************************************/
/*! exports provided: GraphicDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphicDisplay", function() { return GraphicDisplay; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GraphicDisplay = class GraphicDisplay {
    constructor(elRef) {
        this.elRef = elRef;
        this.fontSize = 1;
        this.fontSizeUnit = 'vh';
        this.vbHeight = 20;
        this.vbWidth = 100;
        this.radius = 5;
        this.strokeWidth = 1;
        this.strokeColour = '#000';
        this.fillColour = '#c8beb7';
    }
    ngOnInit() {
    }
    getTransform() {
        if (this.picture === 'HandLeft') {
            return 'rotate(-90 50 50)';
        }
        if (this.picture === 'HandRight') {
            return 'rotate(90 50 50) scale(-1, 1) translate(-100, 0) ';
        }
        if (this.picture === 'HandDown') {
            return 'rotate(180 50 50)';
        }
        return '';
    }
    getViewbox() {
        return '0 0 100 100'; // '0 0 24 50'
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], GraphicDisplay.prototype, "picture", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], GraphicDisplay.prototype, "fontSize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], GraphicDisplay.prototype, "fontSizeUnit", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], GraphicDisplay.prototype, "vbHeight", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], GraphicDisplay.prototype, "vbWidth", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], GraphicDisplay.prototype, "radius", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], GraphicDisplay.prototype, "strokeWidth", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], GraphicDisplay.prototype, "strokeColour", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], GraphicDisplay.prototype, "fillColour", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("self"),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], GraphicDisplay.prototype, "self", void 0);
GraphicDisplay = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-graphic-display',
        template: __webpack_require__(/*! ./graphic-display.html */ "./src/app/modules/visualisations/parts/graphic-display/graphic-display.html"),
        styles: [__webpack_require__(/*! ./graphic-display.scss */ "./src/app/modules/visualisations/parts/graphic-display/graphic-display.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], GraphicDisplay);



/***/ }),

/***/ "./src/app/modules/visualisations/parts/mini-phone/mini-phone.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/mini-phone/mini-phone.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<svg width=\"100%\" height=\"100%\" viewBox=\"0 0 80 140\" >\r\n    <defs>\r\n      <!-- a digit key for the numpad-->\r\n      <g id=\"digitKey\" >\r\n        <rect width=\"12\" height=\"12\" style=\"fill:#b3b3b3;stroke:#151a0e\"  />\r\n      </g>  \r\n\r\n      <!-- a button to move the slider-->\r\n      <g id=\"sliderButtonMin\" >\r\n        <rect  height=\"13\" width=\"13\" style=\"fill:#cccccc;stroke:#151a0e\" />\r\n        <g #marker range-marker-symbol [x]=\"6\" [y]=\"6\" \r\n           [radius]=\"5\" [isMin]=true/> \r\n      </g>   \r\n      \r\n      <g id=\"sliderButtonMax\" >\r\n        <rect  height=\"13\" width=\"13\" style=\"fill:#cccccc;stroke:#151a0e\" />\r\n        <g #marker range-marker-symbol [x]=\"6\" [y]=\"6\" \r\n           [radius]=\"5\" [isMin]=false/> \r\n      </g>        \r\n\r\n    </defs>\r\n\r\n    <!-- \r\n\r\n  <g stroke=\"#151a0e\" >\r\n    <rect x=\"0\" y=\"0\" width=\"80\" height=\"140\" rx=\"12\" ry=\"9\" fill=\"#28220b\" stroke-width=\".1\"/>\r\n    <rect x=\"1.2442\" y=\"2.5342\" width=\"76\" height=\"135.97\" rx=\"11.225\" ry=\"9.3544\" fill=\"#241c1c\" stroke-width=\".062435\"/>\r\n    <rect x=\"1.1339\" y=\"14.841\" width=\"75.973\" height=\"112.45\" fill=\"#e3dbdb\" stroke-width=\".065\"/>\r\n    <circle cx=\"39.244\" cy=\"133.43\" r=\"3\" fill=\"#ac9393\" stroke-width=\".065\"/>\r\n  </g>\r\n -->\r\n\r\n<!--  stroke=\"#151a0e\"\r\n   -->\r\n<g id=\"Phone\"  >\r\n  <rect x=\"0\" y=\"0\" width=\"80\" height=\"140\" rx=\"12\" ry=\"10\" style=\"fill:#000000\" />\r\n  <rect x=\"1\" y=\"11\" style=\"fill:#ffffff;stroke:#151a0e\" width=\"78\" height=\"116\" />\r\n  <circle cx=\"40\"   cy=\"134\"   r=\"5\" style=\"fill:#cccccc;\"      />\r\n</g>\r\n\r\n<g [attr.display.]=\"getKeyPadVisibility()\"    id=\"keypad\"  >\r\n  <use xlink:href=\"#digitKey\" x=\"18\" y=\"30\" />\r\n  <use xlink:href=\"#digitKey\" x=\"34\" y=\"30\" />\r\n  <use xlink:href=\"#digitKey\" x=\"50\" y=\"30\" />\r\n\r\n  <use xlink:href=\"#digitKey\" x=\"18\" y=\"45\" />\r\n  <use xlink:href=\"#digitKey\" x=\"34\" y=\"45\" />\r\n  <use xlink:href=\"#digitKey\" x=\"50\" y=\"45\" />  \r\n\r\n  <use xlink:href=\"#digitKey\" x=\"18\" y=\"60\" />\r\n  <use xlink:href=\"#digitKey\" x=\"34\" y=\"60\" />\r\n  <use xlink:href=\"#digitKey\" x=\"50\" y=\"60\" />\r\n\r\n  <use xlink:href=\"#digitKey\" x=\"18\" y=\"75\" />\r\n  <use xlink:href=\"#digitKey\" x=\"34\" y=\"75\" />\r\n  <use xlink:href=\"#digitKey\" x=\"50\" y=\"75\" /> \r\n\r\n  <rect x=\"18\" y=\"90\" width=\"44\" height=\"12\" style=\"fill:#b4be29;stroke:#151a0e\"  />\r\n  <rect x=\"18\" y=\"105\" width=\"44\" height=\"12\" style=\"fill:#b3b3b3;stroke:#151a0e\"  />\r\n</g>\r\n\r\n<!-- START button   -->\r\n<g [attr.display.]=\"getStartButtonVisibility()\" id=\"startButton\"  >\r\n  <rect x=\"15\"  y=\"20\" height=\"15\" width=\"50\"    \r\n      style=\"fill:#cccccc;stroke:#151a0e\" />\r\n\r\n  <text x=\"40\" y=\"28\" fill=\"#000000\"  text-anchor=\"middle\" alignment-baseline=\"central\"\r\n      font-family=\"sans-serif\" font-size=\"10.583px\"  letter-spacing=\"0px\" \r\n      stroke-width=\".26458\"  word-spacing=\"0px\"  style=\"line-height:1.25\" >\r\n      START\r\n  </text> \r\n</g>\r\n\r\n<!-- Slider buttons   -->\r\n<g [attr.display.]=\"getSliderButtonsVisibility()\" id=\"sliderButtons\"  >\r\n  <use xlink:href=\"#sliderButtonMin\" x=\"10\" y=\"50\" />\r\n  <use xlink:href=\"#sliderButtonMin\" x=\"25\" y=\"50\" />\r\n  <use xlink:href=\"#sliderButtonMax\" x=\"42\" y=\"50\" />\r\n  <use xlink:href=\"#sliderButtonMax\" x=\"57\" y=\"50\" />  \r\n</g>\r\n\r\n<!-- ANSWER button   -->\r\n<g [attr.display.]=\"getSliderButtonsVisibility()\" id=\"answerButton\"  >\r\n\r\n  <rect x=\"10\" y=\"70\"  height=\"15\" width=\"60\"    \r\n      style=\"fill:#cccccc;stroke:#151a0e\" />\r\n\r\n  <text x=\"40\" y=\"78\" fill=\"#000000\"  text-anchor=\"middle\" alignment-baseline=\"central\"\r\n      font-family=\"sans-serif\" font-size=\"10.583px\"  letter-spacing=\"0px\" \r\n      stroke-width=\".26458\"  word-spacing=\"0px\"  style=\"line-height:1.25\" >\r\n      ANSWER\r\n  </text> \r\n</g>\r\n \r\n \r\n</svg> \r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/visualisations/parts/mini-phone/mini-phone.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/mini-phone/mini-phone.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmlzdWFsaXNhdGlvbnMvcGFydHMvbWluaS1waG9uZS9taW5pLXBob25lLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/modules/visualisations/parts/mini-phone/mini-phone.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/mini-phone/mini-phone.ts ***!
  \***********************************************************************/
/*! exports provided: MiniPhone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniPhone", function() { return MiniPhone; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MiniPhone = class MiniPhone {
    constructor() {
        this.showKeyPad = false;
        this.showStartButton = false;
        this.showSliderButtons = false;
    }
    ngOnInit() {
    }
    getKeyPadVisibility() {
        if (this.showKeyPad) {
            return 'inline';
        }
        return 'none';
    }
    getStartButtonVisibility() {
        if (this.showStartButton) {
            return 'inline';
        }
        return 'none';
    }
    getSliderButtonsVisibility() {
        if (this.showSliderButtons) {
            return 'inline';
        }
        return 'none';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], MiniPhone.prototype, "showKeyPad", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], MiniPhone.prototype, "showStartButton", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], MiniPhone.prototype, "showSliderButtons", void 0);
MiniPhone = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mini-phone',
        template: __webpack_require__(/*! ./mini-phone.html */ "./src/app/modules/visualisations/parts/mini-phone/mini-phone.html"),
        styles: [__webpack_require__(/*! ./mini-phone.scss */ "./src/app/modules/visualisations/parts/mini-phone/mini-phone.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MiniPhone);



/***/ }),

/***/ "./src/app/modules/visualisations/parts/movie-text/movie-text.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/movie-text/movie-text.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n      \r\n      \r\n\r\n  <div class=\"main-content\">\r\n    <canvas  #canvas ></canvas>   \r\n    <div class=\"line\" [ngStyle]=\"getLineStyles()\"></div>    \r\n    \r\n    <div class=\"main-title\" [ngStyle]=\"getMainStyles()\"   >\r\n      <ng-content></ng-content>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/visualisations/parts/movie-text/movie-text.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/movie-text/movie-text.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column;\n  height: 100vh;\n  background: linear-gradient(to right, #241f1f 0%, #241f1f 32%, #4a4746 100%);\n  color: #fff;\n  text-align: center; }\n\n.titleCont {\n  position: relative; }\n\n.main-title {\n  padding: .3em 1em .25em;\n  font-weight: 400;\n  font-size: 6vh;\n  color: white;\n  font-family: 'Bellefair', serif;\n  position: relative;\n  line-height: 1.3; }\n\n.vignette {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  box-shadow: inset 0px 0px 150px 20px black;\n  mix-blend-mode: multiply;\n  /* Safari 4+ */\n  /* Fx 5+ */\n  /* Opera 12+ */\n  animation: vignette-anim 3s infinite;\n  /* IE 10+, Fx 29+ */ }\n\n/*\r\n@-moz-keyframes vignette-anim {\r\n  0%   , 100%{ opacity: 1; }\r\n  50% { opacity: 0.7; }\r\n}*/\n\n.noise {\n  z-index: 100;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  opacity: .15; }\n\n.line {\n  position: absolute;\n  height: 100%;\n  width: 5px;\n  opacity: 0.1;\n  background-color: #000; }\n\n.overTitle {\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.dot {\n  width: 3px;\n  height: 2px;\n  background-color: white;\n  position: absolute;\n  opacity: 0.3; }\n\n@keyframes vignette-anim {\n  0%, 100% {\n    opacity: 1; }\n  50% {\n    opacity: 0.7; } }\n\n/*\r\n#flourishBorder {\r\n  padding: 4vh;\r\n  position: relative;\r\n  // fit frame to enclose content and no more\r\n  display:inline-block;\r\n  border: 1px solid $banner-background-color;\r\n  \r\n}\r\n\r\n.svgCorner {\r\n  width: 8vh;\r\n  position: absolute;\r\n}\r\n\r\n.svgCornerTR{  \r\n  top: 0;\r\n  right: 0;\r\n}\r\n\r\n.svgCornerTL{\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n.svgCornerBL{\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n\r\n.svgCornerBR {\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9wYXJ0cy9tb3ZpZS10ZXh0L0Q6XFxfRGF0YVxcUHJpdmF0ZUNvZGVcXF9naXRQemVLbm1cXFRyZWFzdXJlSHVudFxcQW5ndWxhclNQQVxcU2FuZGdhdGVUSC9zcmNcXGFwcFxcbW9kdWxlc1xcdmlzdWFsaXNhdGlvbnNcXHBhcnRzXFxtb3ZpZS10ZXh0XFxtb3ZpZS10ZXh0LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvdmlzdWFsaXNhdGlvbnMvcGFydHMvbW92aWUtdGV4dC9tb3ZpZS10ZXh0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDRSxnQkFBZTtFQUNmLGtCQUFrQjtFQUVsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFFakIsYUFBYTtFQUViLDRFQUF1RztFQUN2RyxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBS3BCO0VBQVcsa0JBQWlCLEVBQUE7O0FBRTVCO0VBQ0ksdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixrQkFBaUI7RUFDakIsZ0JBQWUsRUFBQTs7QUFNbkI7RUFDRSxrQkFBaUI7RUFDakIsV0FBVTtFQUFFLFlBQVc7RUFDdkIsMENBQXlDO0VBQ3pDLHdCQUF3QjtFQUNzQixjQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDOUMsb0NBQTRDO0VBQUUsbUJBQUEsRUFBb0I7O0FBR3BFOzs7O0VDWEU7O0FEaUJGO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUVQLFdBQVc7RUFDWCxZQUFZO0VBRVosb0JBQW9CO0VBQ3BCLFlBQVksRUFBQTs7QUFHaEI7RUFDRSxrQkFBaUI7RUFDakIsWUFBVztFQUFFLFVBQVM7RUFDdEIsWUFBVztFQUNYLHNCQUFxQixFQUFBOztBQUl2QjtFQUNJLGtCQUFpQjtFQUNqQixNQUFLO0VBQ0wsT0FBTSxFQUFBOztBQUdWO0VBQ0UsVUFBUztFQUNULFdBQVU7RUFDVix1QkFBc0I7RUFDdEIsa0JBQWlCO0VBQ2pCLFlBQVcsRUFBQTs7QUFnQmI7RUFDRTtJQUFhLFVBQVUsRUFBQTtFQUN2QjtJQUFNLFlBQVksRUFBQSxFQUFBOztBQUlwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ2lCQyIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmlzdWFsaXNhdGlvbnMvcGFydHMvbW92aWUtdGV4dC9tb3ZpZS10ZXh0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4vL0BpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy5zY3NzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGVzL2dlbmVyYWwtY29sb3Vycy5zY3NzJztcclxuXHJcblxyXG5cclxuXHJcblxyXG4ubWFpbi1jb250ZW50IHtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIFxyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgzNiwzMSwzMSwxKSAwJSwgcmdiYSgzNiwzMSwzMSwxKSAzMiUsIHJnYmEoNzQsNzEsNzAsMSkgMTAwJSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5cclxuXHJcbi50aXRsZUNvbnR7cG9zaXRpb246cmVsYXRpdmU7fVxyXG5cclxuLm1haW4tdGl0bGUge1xyXG4gICAgcGFkZGluZzogLjNlbSAxZW0gLjI1ZW07ICAgIFxyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogNnZoO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdCZWxsZWZhaXInLCBzZXJpZjtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgbGluZS1oZWlnaHQ6MS4zO1xyXG4gICAgLy93aGl0ZS1zcGFjaW5nOlxyXG59XHJcblxyXG5cclxuXHJcbi52aWduZXR0ZXtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB3aWR0aDoxMDAlOyBoZWlnaHQ6MTAwJTtcclxuICBib3gtc2hhZG93Omluc2V0IDBweCAwcHggMTUwcHggMjBweCBibGFjaztcclxuICBtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHZpZ25ldHRlLWFuaW0gM3MgaW5maW5pdGU7IC8qIFNhZmFyaSA0KyAqL1xyXG4gIC1tb3otYW5pbWF0aW9uOiAgICB2aWduZXR0ZS1hbmltIDNzIGluZmluaXRlOyAvKiBGeCA1KyAqL1xyXG4gIC1vLWFuaW1hdGlvbjogICAgICB2aWduZXR0ZS1hbmltIDNzIGluZmluaXRlOyAvKiBPcGVyYSAxMisgKi9cclxuICBhbmltYXRpb246ICAgICAgICAgdmlnbmV0dGUtYW5pbSAzcyBpbmZpbml0ZTsgLyogSUUgMTArLCBGeCAyOSsgKi9cclxufVxyXG5cclxuLypcclxuQC1tb3ota2V5ZnJhbWVzIHZpZ25ldHRlLWFuaW0ge1xyXG4gIDAlICAgLCAxMDAleyBvcGFjaXR5OiAxOyB9XHJcbiAgNTAlIHsgb3BhY2l0eTogMC43OyB9XHJcbn0qL1xyXG5cclxuLm5vaXNlIHtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgXHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIG9wYWNpdHk6IC4xNTtcclxufVxyXG5cclxuLmxpbmV7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgaGVpZ2h0OjEwMCU7IHdpZHRoOjVweDtcclxuICBvcGFjaXR5OjAuMTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7XHJcbn1cclxuXHJcblxyXG4ub3ZlclRpdGxle1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6MDtcclxufVxyXG5cclxuLmRvdHtcclxuICB3aWR0aDozcHg7XHJcbiAgaGVpZ2h0OjJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIG9wYWNpdHk6MC4zO1xyXG59XHJcblxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHZpZ25ldHRlLWFuaW0ge1xyXG4gIDAlICAgLCAxMDAleyBvcGFjaXR5OiAxOyB9XHJcbiAgNTAlIHsgb3BhY2l0eTogMC43OyB9XHJcbn1cclxuQC1tb3ota2V5ZnJhbWVzIHZpZ25ldHRlLWFuaW0ge1xyXG4gIDAlICAgLCAxMDAleyBvcGFjaXR5OiAxOyB9XHJcbiAgNTAlIHsgb3BhY2l0eTogMC43OyB9XHJcbn1cclxuQC1vLWtleWZyYW1lcyB2aWduZXR0ZS1hbmltIHtcclxuICAwJSAgICwgMTAwJXsgb3BhY2l0eTogMTsgfVxyXG4gIDUwJSB7IG9wYWNpdHk6IDAuNzsgfVxyXG59XHJcbkBrZXlmcmFtZXMgdmlnbmV0dGUtYW5pbSB7XHJcbiAgMCUgICAsIDEwMCV7IG9wYWNpdHk6IDE7IH1cclxuICA1MCUgeyBvcGFjaXR5OiAwLjc7IH1cclxufVxyXG5cclxuXHJcbi8qXHJcbiNmbG91cmlzaEJvcmRlciB7XHJcbiAgcGFkZGluZzogNHZoO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyBmaXQgZnJhbWUgdG8gZW5jbG9zZSBjb250ZW50IGFuZCBubyBtb3JlXHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJGJhbm5lci1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIFxyXG59XHJcblxyXG4uc3ZnQ29ybmVyIHtcclxuICB3aWR0aDogOHZoO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnN2Z0Nvcm5lclRSeyAgXHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uc3ZnQ29ybmVyVEx7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5zdmdDb3JuZXJCTHtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLnN2Z0Nvcm5lckJSIHtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuKi8iLCIubWFpbi1jb250ZW50IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzI0MWYxZiAwJSwgIzI0MWYxZiAzMiUsICM0YTQ3NDYgMTAwJSk7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLnRpdGxlQ29udCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4ubWFpbi10aXRsZSB7XG4gIHBhZGRpbmc6IC4zZW0gMWVtIC4yNWVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDZ2aDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogJ0JlbGxlZmFpcicsIHNlcmlmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7IH1cblxuLnZpZ25ldHRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDE1MHB4IDIwcHggYmxhY2s7XG4gIG1peC1ibGVuZC1tb2RlOiBtdWx0aXBseTtcbiAgLXdlYmtpdC1hbmltYXRpb246IHZpZ25ldHRlLWFuaW0gM3MgaW5maW5pdGU7XG4gIC8qIFNhZmFyaSA0KyAqL1xuICAtbW96LWFuaW1hdGlvbjogdmlnbmV0dGUtYW5pbSAzcyBpbmZpbml0ZTtcbiAgLyogRnggNSsgKi9cbiAgLW8tYW5pbWF0aW9uOiB2aWduZXR0ZS1hbmltIDNzIGluZmluaXRlO1xuICAvKiBPcGVyYSAxMisgKi9cbiAgYW5pbWF0aW9uOiB2aWduZXR0ZS1hbmltIDNzIGluZmluaXRlO1xuICAvKiBJRSAxMCssIEZ4IDI5KyAqLyB9XG5cbi8qXHJcbkAtbW96LWtleWZyYW1lcyB2aWduZXR0ZS1hbmltIHtcclxuICAwJSAgICwgMTAwJXsgb3BhY2l0eTogMTsgfVxyXG4gIDUwJSB7IG9wYWNpdHk6IDAuNzsgfVxyXG59Ki9cbi5ub2lzZSB7XG4gIHotaW5kZXg6IDEwMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAuMTU7IH1cblxuLmxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDVweDtcbiAgb3BhY2l0eTogMC4xO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwOyB9XG5cbi5vdmVyVGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDsgfVxuXG4uZG90IHtcbiAgd2lkdGg6IDNweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDAuMzsgfVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgdmlnbmV0dGUtYW5pbSB7XG4gIDAlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAxOyB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC43OyB9IH1cblxuQC1tb3ota2V5ZnJhbWVzIHZpZ25ldHRlLWFuaW0ge1xuICAwJSwgMTAwJSB7XG4gICAgb3BhY2l0eTogMTsgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDAuNzsgfSB9XG5cbkAtby1rZXlmcmFtZXMgdmlnbmV0dGUtYW5pbSB7XG4gIDAlLCAxMDAlIHtcbiAgICBvcGFjaXR5OiAxOyB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC43OyB9IH1cblxuQGtleWZyYW1lcyB2aWduZXR0ZS1hbmltIHtcbiAgMCUsIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7IH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjc7IH0gfVxuXG4vKlxyXG4jZmxvdXJpc2hCb3JkZXIge1xyXG4gIHBhZGRpbmc6IDR2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy8gZml0IGZyYW1lIHRvIGVuY2xvc2UgY29udGVudCBhbmQgbm8gbW9yZVxyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICRiYW5uZXItYmFja2dyb3VuZC1jb2xvcjtcclxuICBcclxufVxyXG5cclxuLnN2Z0Nvcm5lciB7XHJcbiAgd2lkdGg6IDh2aDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5zdmdDb3JuZXJUUnsgIFxyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLnN2Z0Nvcm5lclRMe1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG4uc3ZnQ29ybmVyQkx7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbi5zdmdDb3JuZXJCUiB7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcbiovXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/visualisations/parts/movie-text/movie-text.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/movie-text/movie-text.ts ***!
  \***********************************************************************/
/*! exports provided: MovieText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieText", function() { return MovieText; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MovieText = class MovieText {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.lineXPos = 300;
    }
    ngOnInit() {
        this.ctx = this.canvas.nativeElement.getContext('2d');
        this.ngZone.runOutsideAngular(() => this.tick());
        setInterval(() => {
            this.tick();
        }, 200);
    }
    tick() {
        this.requestId = requestAnimationFrame(() => this.tick);
    }
    randomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    getMainStyles() {
        return {
            'opacity': 0.7 + Math.random() / 4,
            'transform': 'translate3d(' + Math.random() * 1 + 'px, ' +
                Math.random() * 1 + 'px, 0px)'
        };
    }
    getLineStyles() {
        this.lineXPos += Math.random() * 3;
        if (this.lineXPos < 0) {
            this.lineXPos = this.ctx.canvas.width - 10;
        }
        if (this.lineXPos > this.ctx.canvas.width) {
            this.lineXPos = 10;
        }
        return {
            'transform': 'translate3d(' + this.lineXPos + 'px, ' +
                Math.random() * 1 + 'px, 0px)'
        };
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', {}),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], MovieText.prototype, "canvas", void 0);
MovieText = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-movie-text',
        template: __webpack_require__(/*! ./movie-text.html */ "./src/app/modules/visualisations/parts/movie-text/movie-text.html"),
        styles: [__webpack_require__(/*! ./movie-text.scss */ "./src/app/modules/visualisations/parts/movie-text/movie-text.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], MovieText);



/***/ }),

/***/ "./src/app/modules/visualisations/parts/question-display/question-display.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/question-display/question-display.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<!--  -->\r\n<div ngClass=\"divQuestion\"  \r\n    [@questionChanged]=\"questionStatus\"\r\n    (@questionChanged.done)=\"animationDone($event)\"\r\n    style=\"text-align: center; height: 100%;\"  >\r\n \r\n    <!--  vbHeight=\"30\" vbWidth=\"20\"  -->\r\n  <app-frame-text   fillType=\"cogs\" fillSize=\"100\"\r\n    radius=\"1\"  strokeWidth=\"0.6\" strokeColour=\"#000\" fillColour=\"#ccc\" >\r\n   \r\n      <div class=\"questionText\" \r\n        style=\" display: flex; justify-content: center; align-items: center;\"\r\n          > \r\n        {{displayedText}} \r\n      </div> \r\n      <!--  [style.height]=\"requiredHeight\"  -->    \r\n\r\n  </app-frame-text>\r\n\r\n</div> \r\n\r\n"

/***/ }),

/***/ "./src/app/modules/visualisations/parts/question-display/question-display.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/question-display/question-display.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n.divQuestion {\r\n  text-align: center; \r\n}*/\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9wYXJ0cy9xdWVzdGlvbi1kaXNwbGF5L0Q6XFxfRGF0YVxcUHJpdmF0ZUNvZGVcXF9naXRQemVLbm1cXFRyZWFzdXJlSHVudFxcQW5ndWxhclNQQVxcU2FuZGdhdGVUSC9zcmNcXGFwcFxcbW9kdWxlc1xcdmlzdWFsaXNhdGlvbnNcXHBhcnRzXFxxdWVzdGlvbi1kaXNwbGF5XFxxdWVzdGlvbi1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3Zpc3VhbGlzYXRpb25zL3BhcnRzL3F1ZXN0aW9uLWRpc3BsYXkvcXVlc3Rpb24tZGlzcGxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7O0VDRUUiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Zpc3VhbGlzYXRpb25zL3BhcnRzL3F1ZXN0aW9uLWRpc3BsYXkvcXVlc3Rpb24tZGlzcGxheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4vKlxyXG4uZGl2UXVlc3Rpb24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbn0qL1xyXG5cclxuXHJcbiIsIi8qXHJcbi5kaXZRdWVzdGlvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxufSovXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/visualisations/parts/question-display/question-display.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/question-display/question-display.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: QuestionDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionDisplay", function() { return QuestionDisplay; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



let QuestionDisplay = class QuestionDisplay {
    constructor() {
        this.requiredHeight = '10vh';
        this.questionStatus = 'onscreen';
    }
    ngOnInit() {
    }
    ngOnChanges(changes) {
        if (changes.question !== undefined) {
            if (changes.question.previousValue !== undefined) {
                this.questionStatus = 'offscreen';
                this.pendingText = changes.question.currentValue;
            }
            else {
                this.pendingText = '';
                this.displayedText = changes.question.currentValue;
            }
        }
    }
    animationDone(event) {
        if (this.questionStatus === 'onscreen') {
            return;
        }
        this.displayedText = this.pendingText;
        this.questionStatus = 'onscreen';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], QuestionDisplay.prototype, "question", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], QuestionDisplay.prototype, "requiredHeight", void 0);
QuestionDisplay = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-question',
        template: __webpack_require__(/*! ./question-display.component.html */ "./src/app/modules/visualisations/parts/question-display/question-display.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('questionChanged', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('onscreen', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(0%)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('offscreen', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(-120%)' })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1.5s'))
            ])
        ],
        styles: [__webpack_require__(/*! ./question-display.component.scss */ "./src/app/modules/visualisations/parts/question-display/question-display.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], QuestionDisplay);



/***/ }),

/***/ "./src/app/modules/visualisations/parts/range-selector/parts/answer-label.html":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/range-selector/parts/answer-label.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <!-- \r\n <svg [style.opacity]=\"opacityValue\"  >\r\n  <rect class=\"answerlabel\" style=\"fill:rgb(103, 224, 55);stroke-width:0.1;stroke:rgb(0,0,0)\"\r\n      [attr.x.]=\"getRectXPos()\" \r\n      [attr.y.]=\"getRectYPos()\"\r\n      [attr.width.]=\"width\" \r\n      [attr.height.]=\"height\"   /> \r\n  <text [attr.x.]=\"getTextXPos()\"  [attr.y.]=\"getTextYPos()\"  \r\n  text-anchor=\"middle\" alignment-baseline=\"central\" class=\"answerLabel\" >{{value}}</text>\r\n\r\n  <polygon [attr.points.]=\"getPoints()\" style=\"fill:rgb(103, 224, 55);stroke-width:0.1;stroke:rgb(0,0,0)\" /> \r\n  \r\n  \r\n</svg>\r\n--> \r\n\r\n<svg *ngIf=\"visible\" >\r\n <!-- -->\r\n  <rect class=\"answerLabel\" \r\n      [attr.x.]=\"getRectXPos()\" \r\n      [attr.y.]=\"getRectYPos()\"\r\n      [attr.width.]=\"width\" \r\n      [attr.height.]=\"height\"   /> \r\n  \r\n  <polygon [attr.points.]=\"getPoints()\" class=\"answerLabel\"   />  \r\n  \r\n   <text [attr.x.]=\"getTextXPos()\"  [attr.y.]=\"getTextYPos()\"  \r\n    text-anchor=\"middle\" alignment-baseline=\"central\" \r\n    class=\"answerLabelText\" >{{value}}</text> \r\n\r\n</svg>\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/visualisations/parts/range-selector/parts/answer-label.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/range-selector/parts/answer-label.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n$range-marker-gradientmin1: #ffffff;\r\n$range-marker-gradientmin2: #ffc040;\r\n$range-marker-gradientmin3: #ff8040;\r\n$range-marker-gradientmin4: #000000;\r\n\r\n\r\n$range-marker-gradientmax1: #ffffff;\r\n$range-marker-gradientmax2: #87a77f;\r\n$range-marker-gradientmax3: #dcfdf0;\r\n$range-marker-gradientmax4: #000000;\r\n*/\n/*\r\n$range-marker-gradient1: #ffffff;\r\n$range-marker-gradient2: #4d40ff;\r\n$range-marker-gradient3: #ff40a6;\r\n$range-marker-gradient4: #000000;\r\n*/\n.gradient_min1 {\n  stop-color: #ffffff; }\n.gradient_min2 {\n  stop-color: #fef5aa; }\n.gradient_min3 {\n  stop-color: #d3a35e; }\n.gradient_min4 {\n  stop-color: #000000; }\n.gradient_max1 {\n  stop-color: #ffffff; }\n.gradient_max2 {\n  stop-color: #fce0b9; }\n.gradient_max3 {\n  stop-color: #97785d; }\n.gradient_max4 {\n  stop-color: #000000; }\n.bar {\n  stroke: black;\n  stroke-width: 0.3;\n  fill: blue; }\n#perimeter {\n  stroke-width: 1.0;\n  stroke: #5d7a98;\n  fill: #d6f4ff; }\n#slider {\n  stroke-width: 0.3;\n  stroke: #bd222e;\n  fill: #505050; }\n.label {\n  stroke-width: 0.3;\n  stroke: #5d7a98;\n  fill: #65b1f3; }\n.answerLabel {\n  stroke-width: 0.3;\n  stroke: #3f6e00;\n  fill: #76a218; }\n.answerLabelText {\n  font: 0.30vh sans-serif;\n  stroke: black;\n  stroke-width: 0.2; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9wYXJ0cy9yYW5nZS1zZWxlY3Rvci9wYXJ0cy9EOlxcX0RhdGFcXFByaXZhdGVDb2RlXFxfZ2l0UHplS25tXFxUcmVhc3VyZUh1bnRcXEFuZ3VsYXJTUEFcXFNhbmRnYXRlVEgvc3JjXFxhcHBcXHN0eWxlc1xcbW9yZS1vci1sZXNzLWNvbG91cnMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9wYXJ0cy9yYW5nZS1zZWxlY3Rvci9wYXJ0cy9hbnN3ZXItbGFiZWwuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9wYXJ0cy9yYW5nZS1zZWxlY3Rvci9wYXJ0cy9EOlxcX0RhdGFcXFByaXZhdGVDb2RlXFxfZ2l0UHplS25tXFxUcmVhc3VyZUh1bnRcXEFuZ3VsYXJTUEFcXFNhbmRnYXRlVEgvc3JjXFxhcHBcXG1vZHVsZXNcXHZpc3VhbGlzYXRpb25zXFxwYXJ0c1xccmFuZ2Utc2VsZWN0b3JcXHJhbmdlLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3Zpc3VhbGlzYXRpb25zL3BhcnRzL3JhbmdlLXNlbGVjdG9yL3BhcnRzL0Q6XFxfRGF0YVxcUHJpdmF0ZUNvZGVcXF9naXRQemVLbm1cXFRyZWFzdXJlSHVudFxcQW5ndWxhclNQQVxcU2FuZGdhdGVUSC9zcmNcXGFwcFxcbW9kdWxlc1xcdmlzdWFsaXNhdGlvbnNcXHBhcnRzXFxyYW5nZS1zZWxlY3RvclxccGFydHNcXGFuc3dlci1sYWJlbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDQTs7Ozs7Ozs7Ozs7Q0NqQ0M7QUQ2Q0Q7Ozs7O0NDdkNDO0FDVkQ7RUFDRSxtQkZ5QmlDLEVBQUE7QUV0Qm5DO0VBQ0UsbUJGc0I0QyxFQUFBO0FFbkI5QztFQUNFLG1CRm1CMkMsRUFBQTtBRWhCN0M7RUFDRSxtQkZnQmlDLEVBQUE7QUVabkM7RUFDRSxtQkZjaUMsRUFBQTtBRVhuQztFQUNFLG1CRlc0QyxFQUFBO0FFUjlDO0VBQ0UsbUJGUTJDLEVBQUE7QUVMN0M7RUFDRSxtQkZLaUMsRUFBQTtBRUNuQztFQUNFLGFBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixVQUFrQixFQUFBO0FBR3BCO0VBQ0UsaUJBQWlCO0VBQ2pCLGVGekM4QztFRTBDOUMsYUYzQzRDLEVBQUE7QUUrQzlDO0VBQ0UsaUJBQWlCO0VBQ2pCLGVGN0MwQztFRThDMUMsYUYvQzhDLEVBQUE7QUVtRGhEO0VBQ0UsaUJBQWlCO0VBQ2pCLGVGNUN5QztFRTZDekMsYUY5Q3VDLEVBQUE7QUdkekM7RUFDRSxpQkFBaUI7RUFDakIsZUhpQjBDO0VHaEIxQyxhSGV3QyxFQUFBO0FHWjFDO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmlzdWFsaXNhdGlvbnMvcGFydHMvcmFuZ2Utc2VsZWN0b3IvcGFydHMvYW5zd2VyLWxhYmVsLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcGxhY2Ugd2hlcmUgdGhlIGNvbG9yIHNjaGVtZSBmb3IgdGhlIG5vbi1nYW1lIHBhcnRzIG9mIHRoZSBhcHBcclxuXHJcbi8vIFxyXG4vLyBodHRwczovL215Y29sb3Iuc3BhY2UvP2hleD0lMjNCRDIyMkUmc3ViPTFcclxuXHJcbiRzY29yZS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiRzY29yZS1ib3JkZXItY29sb3I6IHJnYigyMzQsIDI0LCAxMjkpO1xyXG5cclxuXHJcbiRyYW5nZS1zZWxlY3Rvci1iYWNrZ3JvdW5kLWZpbGwtY29sb3I6ICNkNmY0ZmY7XHJcbiRyYW5nZS1zZWxlY3Rvci1iYWNrZ3JvdW5kLXN0cm9rZS1jb2xvcjogIzVkN2E5ODtcclxuXHJcbiRyYW5nZS1zZWxlY3Rvci1zbGlkZXItZmlsbC1jb2xvcjogcmdiKDgwLDgwLDgwKTtcclxuJHJhbmdlLXNlbGVjdG9yLXNsaWRlci1zdHJva2UtY29sb3I6ICNiZDIyMmU7XHJcblxyXG4vLyBUb3Agcm93IHN0YXRpYyBsYWJlbHNcclxuJHJhbmdlLXNlbGVjdG9yLW1pbm1heC1maWxsLWNvbG9yOiAjYmZhNWEyO1xyXG4kcmFuZ2Utc2VsZWN0b3ItbWlubWF4LXN0cm9rZS1jb2xvcjogIzVkN2E5ODtcclxuXHJcbi8vIE1vdmluZyBsYWJlbHNcclxuJHJhbmdlLXNlbGVjdG9yLWxhYmVsLWZpbGwtY29sb3I6ICM2NWIxZjM7XHJcbiRyYW5nZS1zZWxlY3Rvci1sYWJlbC1zdHJva2UtY29sb3I6ICM1ZDdhOTg7XHJcblxyXG4vLyBhbnN3ZXIgc2hhcGVcclxuJHJhbmdlLXNlbGVjdG9yLWFuc3dlci1maWxsLWNvbG9yOiAjNzZhMjE4O1xyXG4kcmFuZ2Utc2VsZWN0b3ItYW5zd2VyLXN0cm9rZS1jb2xvcjogIzNmNmUwMDtcclxuXHJcblxyXG5cclxuXHJcbiRyYW5nZS1zZWxlY3Rvci1iYWxsLWZpbGwtY29sb3I6ICNiY2QxNDQ7XHJcbiRyYW5nZS1zZWxlY3Rvci1iYWxsLXN0cm9rZS1jb2xvcjogIzBlMTU1MztcclxuXHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4xOiAjZmZmZmZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMjogcmdiKDI1NCwgMjQ1LCAxNzApO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMzogcmdiKDIxMSwgMTYzLCA5NCk7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW40OiAjMDAwMDAwO1xyXG5cclxuXHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgxOiAjZmZmZmZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MjogcmdiKDI1MiwgMjI0LCAxODUpO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MzogcmdiKDE1MSwgMTIwLCA5Myk7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXg0OiAjMDAwMDAwO1xyXG5cclxuLypcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjE6ICNmZmZmZmY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4yOiAjZmZjMDQwO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMzogI2ZmODA0MDtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjQ6ICMwMDAwMDA7XHJcblxyXG5cclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDE6ICNmZmZmZmY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgyOiAjODdhNzdmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MzogI2RjZmRmMDtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDQ6ICMwMDAwMDA7XHJcbiovXHJcbi8qXHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnQxOiAjZmZmZmZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50MjogIzRkNDBmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudDM6ICNmZjQwYTY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnQ0OiAjMDAwMDAwO1xyXG4qL1xyXG5cclxuXHJcblxyXG4iLCIvKlxyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMTogI2ZmZmZmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjI6ICNmZmMwNDA7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4zOiAjZmY4MDQwO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluNDogIzAwMDAwMDtcclxuXHJcblxyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MTogI2ZmZmZmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDI6ICM4N2E3N2Y7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgzOiAjZGNmZGYwO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4NDogIzAwMDAwMDtcclxuKi9cbi8qXHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnQxOiAjZmZmZmZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50MjogIzRkNDBmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudDM6ICNmZjQwYTY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnQ0OiAjMDAwMDAwO1xyXG4qL1xuLmdyYWRpZW50X21pbjEge1xuICBzdG9wLWNvbG9yOiAjZmZmZmZmOyB9XG5cbi5ncmFkaWVudF9taW4yIHtcbiAgc3RvcC1jb2xvcjogI2ZlZjVhYTsgfVxuXG4uZ3JhZGllbnRfbWluMyB7XG4gIHN0b3AtY29sb3I6ICNkM2EzNWU7IH1cblxuLmdyYWRpZW50X21pbjQge1xuICBzdG9wLWNvbG9yOiAjMDAwMDAwOyB9XG5cbi5ncmFkaWVudF9tYXgxIHtcbiAgc3RvcC1jb2xvcjogI2ZmZmZmZjsgfVxuXG4uZ3JhZGllbnRfbWF4MiB7XG4gIHN0b3AtY29sb3I6ICNmY2UwYjk7IH1cblxuLmdyYWRpZW50X21heDMge1xuICBzdG9wLWNvbG9yOiAjOTc3ODVkOyB9XG5cbi5ncmFkaWVudF9tYXg0IHtcbiAgc3RvcC1jb2xvcjogIzAwMDAwMDsgfVxuXG4uYmFyIHtcbiAgc3Ryb2tlOiBibGFjaztcbiAgc3Ryb2tlLXdpZHRoOiAwLjM7XG4gIGZpbGw6IGJsdWU7IH1cblxuI3BlcmltZXRlciB7XG4gIHN0cm9rZS13aWR0aDogMS4wO1xuICBzdHJva2U6ICM1ZDdhOTg7XG4gIGZpbGw6ICNkNmY0ZmY7IH1cblxuI3NsaWRlciB7XG4gIHN0cm9rZS13aWR0aDogMC4zO1xuICBzdHJva2U6ICNiZDIyMmU7XG4gIGZpbGw6ICM1MDUwNTA7IH1cblxuLmxhYmVsIHtcbiAgc3Ryb2tlLXdpZHRoOiAwLjM7XG4gIHN0cm9rZTogIzVkN2E5ODtcbiAgZmlsbDogIzY1YjFmMzsgfVxuXG4uYW5zd2VyTGFiZWwge1xuICBzdHJva2Utd2lkdGg6IDAuMztcbiAgc3Ryb2tlOiAjM2Y2ZTAwO1xuICBmaWxsOiAjNzZhMjE4OyB9XG5cbi5hbnN3ZXJMYWJlbFRleHQge1xuICBmb250OiAwLjMwdmggc2Fucy1zZXJpZjtcbiAgc3Ryb2tlOiBibGFjaztcbiAgc3Ryb2tlLXdpZHRoOiAwLjI7IH1cbiIsIlxyXG5cclxuQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGVzL21vcmUtb3ItbGVzcy1jb2xvdXJzLnNjc3MnO1xyXG5cclxuLy8gQGltcG9ydCBcIi4uLy4uL21vcmUtb3ItbGVzcy5zY3NzXCI7XHJcbi8vIGh0dHBzOi8vY29yeXJ5bGFuLmNvbS9ibG9nL3Nhc3MtYW5kLWNzcy1pbXBvcnQtcGVyZm9ybWFuY2UtaW4tYW5ndWxhclxyXG5cclxuLmdyYWRpZW50X21pbjEge1xyXG4gIHN0b3AtY29sb3I6ICRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4xO1xyXG59XHJcblxyXG4uZ3JhZGllbnRfbWluMiB7XHJcbiAgc3RvcC1jb2xvcjogJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjI7XHJcbn1cclxuXHJcbi5ncmFkaWVudF9taW4zIHtcclxuICBzdG9wLWNvbG9yOiAkcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMztcclxufVxyXG5cclxuLmdyYWRpZW50X21pbjQge1xyXG4gIHN0b3AtY29sb3I6ICRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW40O1xyXG59XHJcblxyXG5cclxuLmdyYWRpZW50X21heDEge1xyXG4gIHN0b3AtY29sb3I6ICRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgxO1xyXG59XHJcblxyXG4uZ3JhZGllbnRfbWF4MiB7XHJcbiAgc3RvcC1jb2xvcjogJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDI7XHJcbn1cclxuXHJcbi5ncmFkaWVudF9tYXgzIHtcclxuICBzdG9wLWNvbG9yOiAkcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MztcclxufVxyXG5cclxuLmdyYWRpZW50X21heDQge1xyXG4gIHN0b3AtY29sb3I6ICRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXg0O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uYmFyIHtcclxuICBzdHJva2U6IHJnYigwLDAsMCk7XHJcbiAgc3Ryb2tlLXdpZHRoOiAwLjM7XHJcbiAgZmlsbDogcmdiKDAsMCwyNTUpO1xyXG59XHJcblxyXG4jcGVyaW1ldGVyIHtcclxuICBzdHJva2Utd2lkdGg6IDEuMDsgIFxyXG4gIHN0cm9rZTogJHJhbmdlLXNlbGVjdG9yLWJhY2tncm91bmQtc3Ryb2tlLWNvbG9yO1xyXG4gIGZpbGw6ICRyYW5nZS1zZWxlY3Rvci1iYWNrZ3JvdW5kLWZpbGwtY29sb3I7XHJcbn1cclxuXHJcblxyXG4jc2xpZGVyIHtcclxuICBzdHJva2Utd2lkdGg6IDAuMztcclxuICBzdHJva2U6ICRyYW5nZS1zZWxlY3Rvci1zbGlkZXItc3Ryb2tlLWNvbG9yO1xyXG4gIGZpbGw6ICRyYW5nZS1zZWxlY3Rvci1zbGlkZXItZmlsbC1jb2xvcjtcclxufVxyXG5cclxuXHJcbi5sYWJlbCB7XHJcbiAgc3Ryb2tlLXdpZHRoOiAwLjM7ICBcclxuICBzdHJva2U6ICRyYW5nZS1zZWxlY3Rvci1sYWJlbC1zdHJva2UtY29sb3I7XHJcbiAgZmlsbDogJHJhbmdlLXNlbGVjdG9yLWxhYmVsLWZpbGwtY29sb3I7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsIlxyXG5cclxuQGltcG9ydCBcIi4uL3JhbmdlLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG5cclxuXHJcbi5hbnN3ZXJMYWJlbCB7XHJcbiAgc3Ryb2tlLXdpZHRoOiAwLjM7ICBcclxuICBzdHJva2U6ICRyYW5nZS1zZWxlY3Rvci1hbnN3ZXItc3Ryb2tlLWNvbG9yO1xyXG4gIGZpbGw6ICRyYW5nZS1zZWxlY3Rvci1hbnN3ZXItZmlsbC1jb2xvcjtcclxufVxyXG5cclxuLmFuc3dlckxhYmVsVGV4dCB7XHJcbiAgZm9udDogMC4zMHZoIHNhbnMtc2VyaWY7IFxyXG4gIHN0cm9rZTogYmxhY2s7XHJcbiAgc3Ryb2tlLXdpZHRoOiAwLjI7XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/visualisations/parts/range-selector/parts/answer-label.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/range-selector/parts/answer-label.ts ***!
  \***********************************************************************************/
/*! exports provided: AnswerLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerLabel", function() { return AnswerLabel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AnswerLabel = class AnswerLabel {
    constructor() {
        // The text for the label
        this.value = 99;
        // The position of the point that corresponds to the value. The
        // lable should be horizontally centred at this point, and offset above.
        this.x = 0;
        this.y = 0;
        this.width = 10;
        this.height = 5;
        this.visible = false;
        this.opacityValue = 0.5;
    }
    ngOnInit() {
    }
    getRectXPos() {
        return this.x - (this.width / 2);
    }
    getRectYPos() {
        return this.y - 9;
    }
    getTextXPos() {
        return this.x; //  + (this.width / 2);
    }
    getTextYPos() {
        return this.getRectYPos() + (this.height / 2);
    }
    getPoints() {
        const s = this.x.toString() + ',' + this.y.toString() + ' ' +
            (this.x - 1).toString() + ',' + (this.y - 4).toString() + ' ' +
            (this.x + 1).toString() + ',' + (this.y - 4).toString() + ' ';
        return s;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], AnswerLabel.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], AnswerLabel.prototype, "x", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], AnswerLabel.prototype, "y", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], AnswerLabel.prototype, "width", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], AnswerLabel.prototype, "height", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], AnswerLabel.prototype, "visible", void 0);
AnswerLabel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '[answer-label]',
        template: __webpack_require__(/*! ./answer-label.html */ "./src/app/modules/visualisations/parts/range-selector/parts/answer-label.html"),
        styles: [__webpack_require__(/*! ./answer-label.scss */ "./src/app/modules/visualisations/parts/range-selector/parts/answer-label.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AnswerLabel);



/***/ }),

/***/ "./src/app/modules/visualisations/parts/range-selector/parts/minmax-label.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/range-selector/parts/minmax-label.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n <svg>\r\n  <polygon [attr.points.]=\"getPoints()\" class=\"minmaxFlag\" /> \r\n  \r\n  <!-- style=\"fill:rgb(103, 224, 55);stroke:rgb(0,0,0)\"-->\r\n  <text [attr.x.]=\"getTextXPos()\"  [attr.y.]=\"getTextYPos()\"  \r\n        text-anchor=\"middle\" alignment-baseline=\"central\" \r\n        class=\"minmaxText\" >{{value}}</text>\r\n \r\n\r\n</svg>\r\n"

/***/ }),

/***/ "./src/app/modules/visualisations/parts/range-selector/parts/minmax-label.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/range-selector/parts/minmax-label.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n$range-marker-gradientmin1: #ffffff;\r\n$range-marker-gradientmin2: #ffc040;\r\n$range-marker-gradientmin3: #ff8040;\r\n$range-marker-gradientmin4: #000000;\r\n\r\n\r\n$range-marker-gradientmax1: #ffffff;\r\n$range-marker-gradientmax2: #87a77f;\r\n$range-marker-gradientmax3: #dcfdf0;\r\n$range-marker-gradientmax4: #000000;\r\n*/\n/*\r\n$range-marker-gradient1: #ffffff;\r\n$range-marker-gradient2: #4d40ff;\r\n$range-marker-gradient3: #ff40a6;\r\n$range-marker-gradient4: #000000;\r\n*/\n.minmaxFlag {\n  stroke: #5d7a98;\n  stroke-width: 0.3;\n  fill: #bfa5a2; }\n.minmaxText {\n  stroke: #5d7a98;\n  font: 0.30vh sans-serif;\n  stroke-width: 0.2; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9wYXJ0cy9yYW5nZS1zZWxlY3Rvci9wYXJ0cy9EOlxcX0RhdGFcXFByaXZhdGVDb2RlXFxfZ2l0UHplS25tXFxUcmVhc3VyZUh1bnRcXEFuZ3VsYXJTUEFcXFNhbmRnYXRlVEgvc3JjXFxhcHBcXHN0eWxlc1xcbW9yZS1vci1sZXNzLWNvbG91cnMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9wYXJ0cy9yYW5nZS1zZWxlY3Rvci9wYXJ0cy9taW5tYXgtbGFiZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvdmlzdWFsaXNhdGlvbnMvcGFydHMvcmFuZ2Utc2VsZWN0b3IvcGFydHMvRDpcXF9EYXRhXFxQcml2YXRlQ29kZVxcX2dpdFB6ZUtubVxcVHJlYXN1cmVIdW50XFxBbmd1bGFyU1BBXFxTYW5kZ2F0ZVRIL3NyY1xcYXBwXFxtb2R1bGVzXFx2aXN1YWxpc2F0aW9uc1xccGFydHNcXHJhbmdlLXNlbGVjdG9yXFxwYXJ0c1xcbWlubWF4LWxhYmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDQTs7Ozs7Ozs7Ozs7Q0NqQ0M7QUQ2Q0Q7Ozs7O0NDdkNDO0FDYkQ7RUFDRSxlRlkwQztFRVgxQyxpQkFBaUI7RUFDakIsYUZTd0MsRUFBQTtBRU4xQztFQUNFLGVGTTBDO0VFTDFDLHVCQUF1QjtFQUN2QixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmlzdWFsaXNhdGlvbnMvcGFydHMvcmFuZ2Utc2VsZWN0b3IvcGFydHMvbWlubWF4LWxhYmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHBsYWNlIHdoZXJlIHRoZSBjb2xvciBzY2hlbWUgZm9yIHRoZSBub24tZ2FtZSBwYXJ0cyBvZiB0aGUgYXBwXHJcblxyXG4vLyBcclxuLy8gaHR0cHM6Ly9teWNvbG9yLnNwYWNlLz9oZXg9JTIzQkQyMjJFJnN1Yj0xXHJcblxyXG4kc2NvcmUtYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4kc2NvcmUtYm9yZGVyLWNvbG9yOiByZ2IoMjM0LCAyNCwgMTI5KTtcclxuXHJcblxyXG4kcmFuZ2Utc2VsZWN0b3ItYmFja2dyb3VuZC1maWxsLWNvbG9yOiAjZDZmNGZmO1xyXG4kcmFuZ2Utc2VsZWN0b3ItYmFja2dyb3VuZC1zdHJva2UtY29sb3I6ICM1ZDdhOTg7XHJcblxyXG4kcmFuZ2Utc2VsZWN0b3Itc2xpZGVyLWZpbGwtY29sb3I6IHJnYig4MCw4MCw4MCk7XHJcbiRyYW5nZS1zZWxlY3Rvci1zbGlkZXItc3Ryb2tlLWNvbG9yOiAjYmQyMjJlO1xyXG5cclxuLy8gVG9wIHJvdyBzdGF0aWMgbGFiZWxzXHJcbiRyYW5nZS1zZWxlY3Rvci1taW5tYXgtZmlsbC1jb2xvcjogI2JmYTVhMjtcclxuJHJhbmdlLXNlbGVjdG9yLW1pbm1heC1zdHJva2UtY29sb3I6ICM1ZDdhOTg7XHJcblxyXG4vLyBNb3ZpbmcgbGFiZWxzXHJcbiRyYW5nZS1zZWxlY3Rvci1sYWJlbC1maWxsLWNvbG9yOiAjNjViMWYzO1xyXG4kcmFuZ2Utc2VsZWN0b3ItbGFiZWwtc3Ryb2tlLWNvbG9yOiAjNWQ3YTk4O1xyXG5cclxuLy8gYW5zd2VyIHNoYXBlXHJcbiRyYW5nZS1zZWxlY3Rvci1hbnN3ZXItZmlsbC1jb2xvcjogIzc2YTIxODtcclxuJHJhbmdlLXNlbGVjdG9yLWFuc3dlci1zdHJva2UtY29sb3I6ICMzZjZlMDA7XHJcblxyXG5cclxuXHJcblxyXG4kcmFuZ2Utc2VsZWN0b3ItYmFsbC1maWxsLWNvbG9yOiAjYmNkMTQ0O1xyXG4kcmFuZ2Utc2VsZWN0b3ItYmFsbC1zdHJva2UtY29sb3I6ICMwZTE1NTM7XHJcblxyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMTogI2ZmZmZmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjI6IHJnYigyNTQsIDI0NSwgMTcwKTtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjM6IHJnYigyMTEsIDE2MywgOTQpO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluNDogIzAwMDAwMDtcclxuXHJcblxyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MTogI2ZmZmZmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDI6IHJnYigyNTIsIDIyNCwgMTg1KTtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDM6IHJnYigxNTEsIDEyMCwgOTMpO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4NDogIzAwMDAwMDtcclxuXHJcbi8qXHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4xOiAjZmZmZmZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMjogI2ZmYzA0MDtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjM6ICNmZjgwNDA7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW40OiAjMDAwMDAwO1xyXG5cclxuXHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgxOiAjZmZmZmZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MjogIzg3YTc3ZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDM6ICNkY2ZkZjA7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXg0OiAjMDAwMDAwO1xyXG4qL1xyXG4vKlxyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50MTogI2ZmZmZmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudDI6ICM0ZDQwZmY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnQzOiAjZmY0MGE2O1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50NDogIzAwMDAwMDtcclxuKi9cclxuXHJcblxyXG5cclxuIiwiLypcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjE6ICNmZmZmZmY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4yOiAjZmZjMDQwO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMzogI2ZmODA0MDtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjQ6ICMwMDAwMDA7XHJcblxyXG5cclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDE6ICNmZmZmZmY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgyOiAjODdhNzdmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MzogI2RjZmRmMDtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDQ6ICMwMDAwMDA7XHJcbiovXG4vKlxyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50MTogI2ZmZmZmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudDI6ICM0ZDQwZmY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnQzOiAjZmY0MGE2O1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50NDogIzAwMDAwMDtcclxuKi9cbi5taW5tYXhGbGFnIHtcbiAgc3Ryb2tlOiAjNWQ3YTk4O1xuICBzdHJva2Utd2lkdGg6IDAuMztcbiAgZmlsbDogI2JmYTVhMjsgfVxuXG4ubWlubWF4VGV4dCB7XG4gIHN0cm9rZTogIzVkN2E5ODtcbiAgZm9udDogMC4zMHZoIHNhbnMtc2VyaWY7XG4gIHN0cm9rZS13aWR0aDogMC4yOyB9XG4iLCJcclxuXHJcbkBpbXBvcnQgXCIuLi8uLi8uLi8uLi8uLi9zdHlsZXMvbW9yZS1vci1sZXNzLWNvbG91cnMuc2Nzc1wiO1xyXG5cclxuLm1pbm1heEZsYWcge1xyXG4gIHN0cm9rZTogJHJhbmdlLXNlbGVjdG9yLW1pbm1heC1zdHJva2UtY29sb3I7XHJcbiAgc3Ryb2tlLXdpZHRoOiAwLjM7XHJcbiAgZmlsbDogJHJhbmdlLXNlbGVjdG9yLW1pbm1heC1maWxsLWNvbG9yO1xyXG59XHJcblxyXG4ubWlubWF4VGV4dCB7XHJcbiAgc3Ryb2tlOiAkcmFuZ2Utc2VsZWN0b3ItbWlubWF4LXN0cm9rZS1jb2xvcjtcclxuICBmb250OiAwLjMwdmggc2Fucy1zZXJpZjsgXHJcbiAgc3Ryb2tlLXdpZHRoOiAwLjI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/modules/visualisations/parts/range-selector/parts/minmax-label.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/range-selector/parts/minmax-label.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: MinMaxLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinMaxLabel", function() { return MinMaxLabel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MinMaxLabel = class MinMaxLabel {
    constructor() {
        // The text for the label
        this.value = 99;
        // The position of the point that corresponds to the value. The
        // lable should be horizontally centred at this point, and offset above.
        this.x = 0;
        this.y = 0;
        this.width = 9;
        this.height = 9;
        // Whether the flag lies to the left or right
        this.flagLeft = true;
    }
    ngOnInit() {
    }
    getRectXPos() {
        if (this.flagLeft) {
            return this.x - this.width;
        }
        else {
            return this.x;
        }
    }
    getTextXPos() {
        if (this.flagLeft) {
            return this.x - (this.width / 2);
        }
        else {
            return this.x + (this.width / 2);
        }
    }
    getTextYPos() {
        return this.y - this.height + (this.height / 4);
    }
    getPoints() {
        let side = 1;
        if (this.flagLeft) {
            side = -1;
        }
        const x = this.x;
        const y = this.y;
        const w = this.width;
        const h = this.height;
        const p = 0.15;
        const s = x.toString() + ',' + y.toString() + ' ' +
            x.toString() + ',' + (y - h).toString() + ' ' +
            (x + (w * side)).toString() + ',' + (y - h).toString() + ' ' +
            (x + (w * side)).toString() + ',' + (y - (h / 2)).toString() + ' ' +
            (x + ((w * p) * side)).toString() + ',' + (y - (h / 2)).toString() + ' ' +
            x.toString() + ',' + this.y.toString() + ' ';
        return s;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], MinMaxLabel.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], MinMaxLabel.prototype, "x", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], MinMaxLabel.prototype, "y", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], MinMaxLabel.prototype, "width", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], MinMaxLabel.prototype, "height", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], MinMaxLabel.prototype, "flagLeft", void 0);
MinMaxLabel = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '[minmax-label]',
        template: __webpack_require__(/*! ./minmax-label.component.html */ "./src/app/modules/visualisations/parts/range-selector/parts/minmax-label.component.html"),
        styles: [__webpack_require__(/*! ./minmax-label.component.scss */ "./src/app/modules/visualisations/parts/range-selector/parts/minmax-label.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MinMaxLabel);



/***/ }),

/***/ "./src/app/modules/visualisations/parts/range-selector/parts/potential-score.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/range-selector/parts/potential-score.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<!--\r\n<svg *ngIf=\"visible\" >\r\n  <rect class=\"potentialScore\" \r\n      [attr.x.]=\"getRectXPos()\" \r\n      [attr.y.]=\"getRectYPos()\"\r\n      [attr.width.]=\"width\" \r\n      [attr.height.]=\"height\"   /> \r\n  <text [attr.x.]=\"getTextXPos()\"  [attr.y.]=\"getTextYPos()\"  \r\n    text-anchor=\"middle\" alignment-baseline=\"central\" \r\n    class=\"potentialScoreText\" >{{value}}</text>\r\n  \r\n</svg>  -->\r\n\r\n\r\n<svg *ngIf=\"visible\"  [attr.x.]=\"getRectXPos()\" [attr.y.]=\"getRectYPos()\" \r\n      [attr.width.]=\"width\" [attr.height.]=\"height\" \r\n      viewBox=\"0, 0, 100, 100\" xmlns=\"http://www.w3.org/2000/svg\">\r\n  <!-- trapezoid with rounded top-->\r\n  <g  class=\"potentialScore\" \r\n      [attr.stroke-width.]=\"strokeWidth\"\r\n      [attr.stroke.]=\"getStrokeColour()\"\r\n      [attr.fill.]=\"getFillColour()\"    >    \r\n    <path d=\"M 49.971447,0.68567941 A 60.039032,60.039032 0 0 0 0.7434453,26.397289 L 31.894516,99.346323 H 67.991019 L 99.142089,26.397289 A 60.039032,60.039032 0 0 0 49.971447,0.68567941 Z\" />\r\n  </g>\r\n \r\n\r\n</svg>\r\n\r\n<svg *ngIf=\"visible\" >\r\n   <text [attr.x.]=\"getTextXPos()\"  [attr.y.]=\"getTextYPos()\"  \r\n    text-anchor=\"middle\" alignment-baseline=\"central\" \r\n    class=\"potentialScoreText\" >{{value}}</text>\r\n  \r\n</svg>\r\n"

/***/ }),

/***/ "./src/app/modules/visualisations/parts/range-selector/parts/potential-score.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/range-selector/parts/potential-score.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n$range-marker-gradientmin1: #ffffff;\r\n$range-marker-gradientmin2: #ffc040;\r\n$range-marker-gradientmin3: #ff8040;\r\n$range-marker-gradientmin4: #000000;\r\n\r\n\r\n$range-marker-gradientmax1: #ffffff;\r\n$range-marker-gradientmax2: #87a77f;\r\n$range-marker-gradientmax3: #dcfdf0;\r\n$range-marker-gradientmax4: #000000;\r\n*/\n/*\r\n$range-marker-gradient1: #ffffff;\r\n$range-marker-gradient2: #4d40ff;\r\n$range-marker-gradient3: #ff40a6;\r\n$range-marker-gradient4: #000000;\r\n*/\n.gradient_min1 {\n  stop-color: #ffffff; }\n.gradient_min2 {\n  stop-color: #fef5aa; }\n.gradient_min3 {\n  stop-color: #d3a35e; }\n.gradient_min4 {\n  stop-color: #000000; }\n.gradient_max1 {\n  stop-color: #ffffff; }\n.gradient_max2 {\n  stop-color: #fce0b9; }\n.gradient_max3 {\n  stop-color: #97785d; }\n.gradient_max4 {\n  stop-color: #000000; }\n.bar {\n  stroke: black;\n  stroke-width: 0.3;\n  fill: blue; }\n#perimeter {\n  stroke-width: 1.0;\n  stroke: #5d7a98;\n  fill: #d6f4ff; }\n#slider {\n  stroke-width: 0.3;\n  stroke: #bd222e;\n  fill: #505050; }\n.label {\n  stroke-width: 0.3;\n  stroke: #5d7a98;\n  fill: #65b1f3; }\n.potentialScore {\n  stroke-width: 5; }\n.potentialScoreText {\n  font: 0.30vh sans-serif;\n  stroke: black;\n  stroke-width: 0.2; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9wYXJ0cy9yYW5nZS1zZWxlY3Rvci9wYXJ0cy9EOlxcX0RhdGFcXFByaXZhdGVDb2RlXFxfZ2l0UHplS25tXFxUcmVhc3VyZUh1bnRcXEFuZ3VsYXJTUEFcXFNhbmRnYXRlVEgvc3JjXFxhcHBcXHN0eWxlc1xcbW9yZS1vci1sZXNzLWNvbG91cnMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9wYXJ0cy9yYW5nZS1zZWxlY3Rvci9wYXJ0cy9wb3RlbnRpYWwtc2NvcmUuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9wYXJ0cy9yYW5nZS1zZWxlY3Rvci9wYXJ0cy9EOlxcX0RhdGFcXFByaXZhdGVDb2RlXFxfZ2l0UHplS25tXFxUcmVhc3VyZUh1bnRcXEFuZ3VsYXJTUEFcXFNhbmRnYXRlVEgvc3JjXFxhcHBcXG1vZHVsZXNcXHZpc3VhbGlzYXRpb25zXFxwYXJ0c1xccmFuZ2Utc2VsZWN0b3JcXHJhbmdlLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3Zpc3VhbGlzYXRpb25zL3BhcnRzL3JhbmdlLXNlbGVjdG9yL3BhcnRzL0Q6XFxfRGF0YVxcUHJpdmF0ZUNvZGVcXF9naXRQemVLbm1cXFRyZWFzdXJlSHVudFxcQW5ndWxhclNQQVxcU2FuZGdhdGVUSC9zcmNcXGFwcFxcbW9kdWxlc1xcdmlzdWFsaXNhdGlvbnNcXHBhcnRzXFxyYW5nZS1zZWxlY3RvclxccGFydHNcXHBvdGVudGlhbC1zY29yZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDQTs7Ozs7Ozs7Ozs7Q0NqQ0M7QUQ2Q0Q7Ozs7O0NDdkNDO0FDVkQ7RUFDRSxtQkZ5QmlDLEVBQUE7QUV0Qm5DO0VBQ0UsbUJGc0I0QyxFQUFBO0FFbkI5QztFQUNFLG1CRm1CMkMsRUFBQTtBRWhCN0M7RUFDRSxtQkZnQmlDLEVBQUE7QUVabkM7RUFDRSxtQkZjaUMsRUFBQTtBRVhuQztFQUNFLG1CRlc0QyxFQUFBO0FFUjlDO0VBQ0UsbUJGUTJDLEVBQUE7QUVMN0M7RUFDRSxtQkZLaUMsRUFBQTtBRUNuQztFQUNFLGFBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixVQUFrQixFQUFBO0FBR3BCO0VBQ0UsaUJBQWlCO0VBQ2pCLGVGekM4QztFRTBDOUMsYUYzQzRDLEVBQUE7QUUrQzlDO0VBQ0UsaUJBQWlCO0VBQ2pCLGVGN0MwQztFRThDMUMsYUYvQzhDLEVBQUE7QUVtRGhEO0VBQ0UsaUJBQWlCO0VBQ2pCLGVGNUN5QztFRTZDekMsYUY5Q3VDLEVBQUE7QUdkekM7RUFDRSxlQUFjLEVBQUE7QUFLaEI7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9wYXJ0cy9yYW5nZS1zZWxlY3Rvci9wYXJ0cy9wb3RlbnRpYWwtc2NvcmUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBwbGFjZSB3aGVyZSB0aGUgY29sb3Igc2NoZW1lIGZvciB0aGUgbm9uLWdhbWUgcGFydHMgb2YgdGhlIGFwcFxyXG5cclxuLy8gXHJcbi8vIGh0dHBzOi8vbXljb2xvci5zcGFjZS8/aGV4PSUyM0JEMjIyRSZzdWI9MVxyXG5cclxuJHNjb3JlLWJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuJHNjb3JlLWJvcmRlci1jb2xvcjogcmdiKDIzNCwgMjQsIDEyOSk7XHJcblxyXG5cclxuJHJhbmdlLXNlbGVjdG9yLWJhY2tncm91bmQtZmlsbC1jb2xvcjogI2Q2ZjRmZjtcclxuJHJhbmdlLXNlbGVjdG9yLWJhY2tncm91bmQtc3Ryb2tlLWNvbG9yOiAjNWQ3YTk4O1xyXG5cclxuJHJhbmdlLXNlbGVjdG9yLXNsaWRlci1maWxsLWNvbG9yOiByZ2IoODAsODAsODApO1xyXG4kcmFuZ2Utc2VsZWN0b3Itc2xpZGVyLXN0cm9rZS1jb2xvcjogI2JkMjIyZTtcclxuXHJcbi8vIFRvcCByb3cgc3RhdGljIGxhYmVsc1xyXG4kcmFuZ2Utc2VsZWN0b3ItbWlubWF4LWZpbGwtY29sb3I6ICNiZmE1YTI7XHJcbiRyYW5nZS1zZWxlY3Rvci1taW5tYXgtc3Ryb2tlLWNvbG9yOiAjNWQ3YTk4O1xyXG5cclxuLy8gTW92aW5nIGxhYmVsc1xyXG4kcmFuZ2Utc2VsZWN0b3ItbGFiZWwtZmlsbC1jb2xvcjogIzY1YjFmMztcclxuJHJhbmdlLXNlbGVjdG9yLWxhYmVsLXN0cm9rZS1jb2xvcjogIzVkN2E5ODtcclxuXHJcbi8vIGFuc3dlciBzaGFwZVxyXG4kcmFuZ2Utc2VsZWN0b3ItYW5zd2VyLWZpbGwtY29sb3I6ICM3NmEyMTg7XHJcbiRyYW5nZS1zZWxlY3Rvci1hbnN3ZXItc3Ryb2tlLWNvbG9yOiAjM2Y2ZTAwO1xyXG5cclxuXHJcblxyXG5cclxuJHJhbmdlLXNlbGVjdG9yLWJhbGwtZmlsbC1jb2xvcjogI2JjZDE0NDtcclxuJHJhbmdlLXNlbGVjdG9yLWJhbGwtc3Ryb2tlLWNvbG9yOiAjMGUxNTUzO1xyXG5cclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjE6ICNmZmZmZmY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4yOiByZ2IoMjU0LCAyNDUsIDE3MCk7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4zOiByZ2IoMjExLCAxNjMsIDk0KTtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjQ6ICMwMDAwMDA7XHJcblxyXG5cclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDE6ICNmZmZmZmY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgyOiByZ2IoMjUyLCAyMjQsIDE4NSk7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgzOiByZ2IoMTUxLCAxMjAsIDkzKTtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDQ6ICMwMDAwMDA7XHJcblxyXG4vKlxyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMTogI2ZmZmZmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjI6ICNmZmMwNDA7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4zOiAjZmY4MDQwO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluNDogIzAwMDAwMDtcclxuXHJcblxyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MTogI2ZmZmZmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDI6ICM4N2E3N2Y7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgzOiAjZGNmZGYwO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4NDogIzAwMDAwMDtcclxuKi9cclxuLypcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudDE6ICNmZmZmZmY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnQyOiAjNGQ0MGZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50MzogI2ZmNDBhNjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudDQ6ICMwMDAwMDA7XHJcbiovXHJcblxyXG5cclxuXHJcbiIsIi8qXHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4xOiAjZmZmZmZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMjogI2ZmYzA0MDtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjM6ICNmZjgwNDA7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW40OiAjMDAwMDAwO1xyXG5cclxuXHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgxOiAjZmZmZmZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MjogIzg3YTc3ZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDM6ICNkY2ZkZjA7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXg0OiAjMDAwMDAwO1xyXG4qL1xuLypcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudDE6ICNmZmZmZmY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnQyOiAjNGQ0MGZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50MzogI2ZmNDBhNjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudDQ6ICMwMDAwMDA7XHJcbiovXG4uZ3JhZGllbnRfbWluMSB7XG4gIHN0b3AtY29sb3I6ICNmZmZmZmY7IH1cblxuLmdyYWRpZW50X21pbjIge1xuICBzdG9wLWNvbG9yOiAjZmVmNWFhOyB9XG5cbi5ncmFkaWVudF9taW4zIHtcbiAgc3RvcC1jb2xvcjogI2QzYTM1ZTsgfVxuXG4uZ3JhZGllbnRfbWluNCB7XG4gIHN0b3AtY29sb3I6ICMwMDAwMDA7IH1cblxuLmdyYWRpZW50X21heDEge1xuICBzdG9wLWNvbG9yOiAjZmZmZmZmOyB9XG5cbi5ncmFkaWVudF9tYXgyIHtcbiAgc3RvcC1jb2xvcjogI2ZjZTBiOTsgfVxuXG4uZ3JhZGllbnRfbWF4MyB7XG4gIHN0b3AtY29sb3I6ICM5Nzc4NWQ7IH1cblxuLmdyYWRpZW50X21heDQge1xuICBzdG9wLWNvbG9yOiAjMDAwMDAwOyB9XG5cbi5iYXIge1xuICBzdHJva2U6IGJsYWNrO1xuICBzdHJva2Utd2lkdGg6IDAuMztcbiAgZmlsbDogYmx1ZTsgfVxuXG4jcGVyaW1ldGVyIHtcbiAgc3Ryb2tlLXdpZHRoOiAxLjA7XG4gIHN0cm9rZTogIzVkN2E5ODtcbiAgZmlsbDogI2Q2ZjRmZjsgfVxuXG4jc2xpZGVyIHtcbiAgc3Ryb2tlLXdpZHRoOiAwLjM7XG4gIHN0cm9rZTogI2JkMjIyZTtcbiAgZmlsbDogIzUwNTA1MDsgfVxuXG4ubGFiZWwge1xuICBzdHJva2Utd2lkdGg6IDAuMztcbiAgc3Ryb2tlOiAjNWQ3YTk4O1xuICBmaWxsOiAjNjViMWYzOyB9XG5cbi5wb3RlbnRpYWxTY29yZSB7XG4gIHN0cm9rZS13aWR0aDogNTsgfVxuXG4ucG90ZW50aWFsU2NvcmVUZXh0IHtcbiAgZm9udDogMC4zMHZoIHNhbnMtc2VyaWY7XG4gIHN0cm9rZTogYmxhY2s7XG4gIHN0cm9rZS13aWR0aDogMC4yOyB9XG4iLCJcclxuXHJcbkBpbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxlcy9tb3JlLW9yLWxlc3MtY29sb3Vycy5zY3NzJztcclxuXHJcbi8vIEBpbXBvcnQgXCIuLi8uLi9tb3JlLW9yLWxlc3Muc2Nzc1wiO1xyXG4vLyBodHRwczovL2NvcnlyeWxhbi5jb20vYmxvZy9zYXNzLWFuZC1jc3MtaW1wb3J0LXBlcmZvcm1hbmNlLWluLWFuZ3VsYXJcclxuXHJcbi5ncmFkaWVudF9taW4xIHtcclxuICBzdG9wLWNvbG9yOiAkcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMTtcclxufVxyXG5cclxuLmdyYWRpZW50X21pbjIge1xyXG4gIHN0b3AtY29sb3I6ICRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4yO1xyXG59XHJcblxyXG4uZ3JhZGllbnRfbWluMyB7XHJcbiAgc3RvcC1jb2xvcjogJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjM7XHJcbn1cclxuXHJcbi5ncmFkaWVudF9taW40IHtcclxuICBzdG9wLWNvbG9yOiAkcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluNDtcclxufVxyXG5cclxuXHJcbi5ncmFkaWVudF9tYXgxIHtcclxuICBzdG9wLWNvbG9yOiAkcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MTtcclxufVxyXG5cclxuLmdyYWRpZW50X21heDIge1xyXG4gIHN0b3AtY29sb3I6ICRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgyO1xyXG59XHJcblxyXG4uZ3JhZGllbnRfbWF4MyB7XHJcbiAgc3RvcC1jb2xvcjogJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDM7XHJcbn1cclxuXHJcbi5ncmFkaWVudF9tYXg0IHtcclxuICBzdG9wLWNvbG9yOiAkcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4NDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmJhciB7XHJcbiAgc3Ryb2tlOiByZ2IoMCwwLDApO1xyXG4gIHN0cm9rZS13aWR0aDogMC4zO1xyXG4gIGZpbGw6IHJnYigwLDAsMjU1KTtcclxufVxyXG5cclxuI3BlcmltZXRlciB7XHJcbiAgc3Ryb2tlLXdpZHRoOiAxLjA7ICBcclxuICBzdHJva2U6ICRyYW5nZS1zZWxlY3Rvci1iYWNrZ3JvdW5kLXN0cm9rZS1jb2xvcjtcclxuICBmaWxsOiAkcmFuZ2Utc2VsZWN0b3ItYmFja2dyb3VuZC1maWxsLWNvbG9yO1xyXG59XHJcblxyXG5cclxuI3NsaWRlciB7XHJcbiAgc3Ryb2tlLXdpZHRoOiAwLjM7XHJcbiAgc3Ryb2tlOiAkcmFuZ2Utc2VsZWN0b3Itc2xpZGVyLXN0cm9rZS1jb2xvcjtcclxuICBmaWxsOiAkcmFuZ2Utc2VsZWN0b3Itc2xpZGVyLWZpbGwtY29sb3I7XHJcbn1cclxuXHJcblxyXG4ubGFiZWwge1xyXG4gIHN0cm9rZS13aWR0aDogMC4zOyAgXHJcbiAgc3Ryb2tlOiAkcmFuZ2Utc2VsZWN0b3ItbGFiZWwtc3Ryb2tlLWNvbG9yO1xyXG4gIGZpbGw6ICRyYW5nZS1zZWxlY3Rvci1sYWJlbC1maWxsLWNvbG9yO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCJcclxuXHJcbkBpbXBvcnQgXCIuLi9yYW5nZS1zZWxlY3Rvci5jb21wb25lbnQuc2Nzc1wiO1xyXG5cclxuXHJcblxyXG4ucG90ZW50aWFsU2NvcmUge1xyXG4gIHN0cm9rZS13aWR0aDo1O1xyXG4gLy8gZmlsbDpyZ2IoMjI0LCAyMjEsIDU1KTtcclxuIC8vIHN0cm9rZTpyZ2IoMCwwLDApO1xyXG59XHJcblxyXG4ucG90ZW50aWFsU2NvcmVUZXh0IHtcclxuICBmb250OiAwLjMwdmggc2Fucy1zZXJpZjsgXHJcbiAgc3Ryb2tlOiBibGFjaztcclxuICBzdHJva2Utd2lkdGg6IDAuMjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/visualisations/parts/range-selector/parts/potential-score.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/range-selector/parts/potential-score.ts ***!
  \**************************************************************************************/
/*! exports provided: PotentialScore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PotentialScore", function() { return PotentialScore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PotentialScore = class PotentialScore {
    constructor() {
        // The text for the label, should be between 0 and 10
        this.value = 99;
        // The position of the point that corresponds to the value. The
        // lable should be horizontally centred at this point, and offset above.
        this.x = 0;
        this.y = 0;
        this.width = 10;
        this.height = 7;
        this.visible = false;
        this.opacityValue = 0.5;
        this.strokeWidth = 2;
        this.strokeColour = '#333';
        this.fillColour = '#999';
    }
    ngOnInit() {
    }
    getRectXPos() {
        return this.x - (this.width / 2);
    }
    getRectYPos() {
        return this.y - 5;
    }
    getTextXPos() {
        return this.x; //  + (this.width / 2);
    }
    getTextYPos() {
        return this.y - 1.5;
    }
    getPoints() {
        const s = this.x.toString() + ',' + this.y.toString() + ' ' +
            (this.x - 1).toString() + ',' + (this.y - 4).toString() + ' ' +
            (this.x + 1).toString() + ',' + (this.y - 4).toString() + ' ';
        return s;
    }
    getStrokeColour() {
        return this.strokeColour;
    }
    getFillColour() {
        // http://web-tech.ga-usa.com/2012/05/creating-a-custom-hot-to-cold-temperature-color-gradient-for-use-with-rrdtool/index.html
        if (this.value > 9) {
            return '#FF3200';
        }
        if (this.value > 8) {
            return '#FF7800';
        }
        if (this.value > 7) {
            return '#FFa000';
        }
        if (this.value > 6) {
            return '#FFc800';
        }
        if (this.value > 5) {
            return '#FFf000';
        }
        if (this.value > 4) {
            return '#d7ff00';
        }
        if (this.value > 3) {
            return '#65ff00';
        }
        if (this.value > 2) {
            return '#00ff10';
        }
        if (this.value > 1) {
            return '#00ff83';
        }
        return '#00fff4';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], PotentialScore.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], PotentialScore.prototype, "x", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], PotentialScore.prototype, "y", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], PotentialScore.prototype, "width", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], PotentialScore.prototype, "height", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], PotentialScore.prototype, "visible", void 0);
PotentialScore = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '[potential-score]',
        template: __webpack_require__(/*! ./potential-score.html */ "./src/app/modules/visualisations/parts/range-selector/parts/potential-score.html"),
        styles: [__webpack_require__(/*! ./potential-score.scss */ "./src/app/modules/visualisations/parts/range-selector/parts/potential-score.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PotentialScore);



/***/ }),

/***/ "./src/app/modules/visualisations/parts/range-selector/parts/range-marker.html":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/range-selector/parts/range-marker.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n <svg>\r\n\r\n  <defs>\r\n    <!-- \r\n    <radialGradient id=\"Shiny\"\r\n      cx=\"0.5\" cy=\"0.5\" r=\"0.5\" fx=\"0.25\" fy=\"0.25\">\r\n\r\n     <stop class=\"gradient_1\" offset=\"0%\"/>\r\n     <stop class=\"gradient_2\" offset=\"50%\"/>  \r\n     <stop class=\"gradient_3\" offset=\"75%\"/>\r\n     <stop class=\"gradient_4\" offset=\"100%\"/>  \r\n\r\n    </radialGradient>\r\n -->\r\n   </defs>\r\n \r\n  <!--  \r\n  <circle  [attr.cx.] =\"getXPos()\" [attr.cy.]=\"getYPos()\" fill=\"url(#Shiny)\"  r=\"4\"  />\r\n  -->\r\n  <g #marker range-marker-symbol [x]=\"getXPos()\" [y]=\"getYPos()\" \r\n    [radius]=\"4\" [isMin]=\"flagLeft\"   />\r\n  \r\n  <line class=\"label\" [attr.x1.]=\"getXPos()\" y1=\"10\" \r\n      [attr.x2.]=\"getXPos()\"  [attr.y2.]=\"getFlagYPos()\" />\r\n  <rect class=\"label\" \r\n    [attr.x.]=\"getFlagXPos()\" [attr.y.]=\"getFlagYPos()\" \r\n    [attr.width.]=\"getFlagWidth()\"  [attr.height.]=\"getFlagHeight()\"    />\r\n\r\n  <text [attr.x.]=\"getTextXPos()\"  [attr.y.]=\"getTextYPos()\"  \r\n    text-anchor=\"middle\" alignment-baseline=\"central\" \r\n    class=\"labelText\" >{{value}}</text>\r\n</svg>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/visualisations/parts/range-selector/parts/range-marker.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/range-selector/parts/range-marker.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n$range-marker-gradientmin1: #ffffff;\r\n$range-marker-gradientmin2: #ffc040;\r\n$range-marker-gradientmin3: #ff8040;\r\n$range-marker-gradientmin4: #000000;\r\n\r\n\r\n$range-marker-gradientmax1: #ffffff;\r\n$range-marker-gradientmax2: #87a77f;\r\n$range-marker-gradientmax3: #dcfdf0;\r\n$range-marker-gradientmax4: #000000;\r\n*/\n/*\r\n$range-marker-gradient1: #ffffff;\r\n$range-marker-gradient2: #4d40ff;\r\n$range-marker-gradient3: #ff40a6;\r\n$range-marker-gradient4: #000000;\r\n*/\n.gradient_min1 {\n  stop-color: #ffffff; }\n.gradient_min2 {\n  stop-color: #fef5aa; }\n.gradient_min3 {\n  stop-color: #d3a35e; }\n.gradient_min4 {\n  stop-color: #000000; }\n.gradient_max1 {\n  stop-color: #ffffff; }\n.gradient_max2 {\n  stop-color: #fce0b9; }\n.gradient_max3 {\n  stop-color: #97785d; }\n.gradient_max4 {\n  stop-color: #000000; }\n.bar {\n  stroke: black;\n  stroke-width: 0.3;\n  fill: blue; }\n#perimeter {\n  stroke-width: 1.0;\n  stroke: #5d7a98;\n  fill: #d6f4ff; }\n#slider {\n  stroke-width: 0.3;\n  stroke: #bd222e;\n  fill: #505050; }\n.label {\n  stroke-width: 0.3;\n  stroke: #5d7a98;\n  fill: #65b1f3; }\n.label {\n  stroke: black;\n  fill: lightblue; }\n.labelText {\n  font: bold 0.30vh sans-serif;\n  stroke: black;\n  stroke-width: 0.1; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9wYXJ0cy9yYW5nZS1zZWxlY3Rvci9wYXJ0cy9EOlxcX0RhdGFcXFByaXZhdGVDb2RlXFxfZ2l0UHplS25tXFxUcmVhc3VyZUh1bnRcXEFuZ3VsYXJTUEFcXFNhbmRnYXRlVEgvc3JjXFxhcHBcXHN0eWxlc1xcbW9yZS1vci1sZXNzLWNvbG91cnMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9wYXJ0cy9yYW5nZS1zZWxlY3Rvci9wYXJ0cy9yYW5nZS1tYXJrZXIuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9wYXJ0cy9yYW5nZS1zZWxlY3Rvci9wYXJ0cy9EOlxcX0RhdGFcXFByaXZhdGVDb2RlXFxfZ2l0UHplS25tXFxUcmVhc3VyZUh1bnRcXEFuZ3VsYXJTUEFcXFNhbmRnYXRlVEgvc3JjXFxhcHBcXG1vZHVsZXNcXHZpc3VhbGlzYXRpb25zXFxwYXJ0c1xccmFuZ2Utc2VsZWN0b3JcXHJhbmdlLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3Zpc3VhbGlzYXRpb25zL3BhcnRzL3JhbmdlLXNlbGVjdG9yL3BhcnRzL0Q6XFxfRGF0YVxcUHJpdmF0ZUNvZGVcXF9naXRQemVLbm1cXFRyZWFzdXJlSHVudFxcQW5ndWxhclNQQVxcU2FuZGdhdGVUSC9zcmNcXGFwcFxcbW9kdWxlc1xcdmlzdWFsaXNhdGlvbnNcXHBhcnRzXFxyYW5nZS1zZWxlY3RvclxccGFydHNcXHJhbmdlLW1hcmtlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDQTs7Ozs7Ozs7Ozs7Q0NqQ0M7QUQ2Q0Q7Ozs7O0NDdkNDO0FDVkQ7RUFDRSxtQkZ5QmlDLEVBQUE7QUV0Qm5DO0VBQ0UsbUJGc0I0QyxFQUFBO0FFbkI5QztFQUNFLG1CRm1CMkMsRUFBQTtBRWhCN0M7RUFDRSxtQkZnQmlDLEVBQUE7QUVabkM7RUFDRSxtQkZjaUMsRUFBQTtBRVhuQztFQUNFLG1CRlc0QyxFQUFBO0FFUjlDO0VBQ0UsbUJGUTJDLEVBQUE7QUVMN0M7RUFDRSxtQkZLaUMsRUFBQTtBRUNuQztFQUNFLGFBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixVQUFrQixFQUFBO0FBR3BCO0VBQ0UsaUJBQWlCO0VBQ2pCLGVGekM4QztFRTBDOUMsYUYzQzRDLEVBQUE7QUUrQzlDO0VBQ0UsaUJBQWlCO0VBQ2pCLGVGN0MwQztFRThDMUMsYUYvQzhDLEVBQUE7QUVtRGhEO0VBQ0UsaUJBQWlCO0VBQ2pCLGVGNUN5QztFRTZDekMsYUY5Q3VDLEVBQUE7QUdkekM7RUFDRSxhQUFhO0VBRWIsZUFBZSxFQUFBO0FBR2pCO0VBQ0UsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmlzdWFsaXNhdGlvbnMvcGFydHMvcmFuZ2Utc2VsZWN0b3IvcGFydHMvcmFuZ2UtbWFya2VyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcGxhY2Ugd2hlcmUgdGhlIGNvbG9yIHNjaGVtZSBmb3IgdGhlIG5vbi1nYW1lIHBhcnRzIG9mIHRoZSBhcHBcclxuXHJcbi8vIFxyXG4vLyBodHRwczovL215Y29sb3Iuc3BhY2UvP2hleD0lMjNCRDIyMkUmc3ViPTFcclxuXHJcbiRzY29yZS1iYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiRzY29yZS1ib3JkZXItY29sb3I6IHJnYigyMzQsIDI0LCAxMjkpO1xyXG5cclxuXHJcbiRyYW5nZS1zZWxlY3Rvci1iYWNrZ3JvdW5kLWZpbGwtY29sb3I6ICNkNmY0ZmY7XHJcbiRyYW5nZS1zZWxlY3Rvci1iYWNrZ3JvdW5kLXN0cm9rZS1jb2xvcjogIzVkN2E5ODtcclxuXHJcbiRyYW5nZS1zZWxlY3Rvci1zbGlkZXItZmlsbC1jb2xvcjogcmdiKDgwLDgwLDgwKTtcclxuJHJhbmdlLXNlbGVjdG9yLXNsaWRlci1zdHJva2UtY29sb3I6ICNiZDIyMmU7XHJcblxyXG4vLyBUb3Agcm93IHN0YXRpYyBsYWJlbHNcclxuJHJhbmdlLXNlbGVjdG9yLW1pbm1heC1maWxsLWNvbG9yOiAjYmZhNWEyO1xyXG4kcmFuZ2Utc2VsZWN0b3ItbWlubWF4LXN0cm9rZS1jb2xvcjogIzVkN2E5ODtcclxuXHJcbi8vIE1vdmluZyBsYWJlbHNcclxuJHJhbmdlLXNlbGVjdG9yLWxhYmVsLWZpbGwtY29sb3I6ICM2NWIxZjM7XHJcbiRyYW5nZS1zZWxlY3Rvci1sYWJlbC1zdHJva2UtY29sb3I6ICM1ZDdhOTg7XHJcblxyXG4vLyBhbnN3ZXIgc2hhcGVcclxuJHJhbmdlLXNlbGVjdG9yLWFuc3dlci1maWxsLWNvbG9yOiAjNzZhMjE4O1xyXG4kcmFuZ2Utc2VsZWN0b3ItYW5zd2VyLXN0cm9rZS1jb2xvcjogIzNmNmUwMDtcclxuXHJcblxyXG5cclxuXHJcbiRyYW5nZS1zZWxlY3Rvci1iYWxsLWZpbGwtY29sb3I6ICNiY2QxNDQ7XHJcbiRyYW5nZS1zZWxlY3Rvci1iYWxsLXN0cm9rZS1jb2xvcjogIzBlMTU1MztcclxuXHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4xOiAjZmZmZmZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMjogcmdiKDI1NCwgMjQ1LCAxNzApO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMzogcmdiKDIxMSwgMTYzLCA5NCk7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW40OiAjMDAwMDAwO1xyXG5cclxuXHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgxOiAjZmZmZmZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MjogcmdiKDI1MiwgMjI0LCAxODUpO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MzogcmdiKDE1MSwgMTIwLCA5Myk7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXg0OiAjMDAwMDAwO1xyXG5cclxuLypcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjE6ICNmZmZmZmY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4yOiAjZmZjMDQwO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMzogI2ZmODA0MDtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjQ6ICMwMDAwMDA7XHJcblxyXG5cclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDE6ICNmZmZmZmY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgyOiAjODdhNzdmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MzogI2RjZmRmMDtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDQ6ICMwMDAwMDA7XHJcbiovXHJcbi8qXHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnQxOiAjZmZmZmZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50MjogIzRkNDBmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudDM6ICNmZjQwYTY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnQ0OiAjMDAwMDAwO1xyXG4qL1xyXG5cclxuXHJcblxyXG4iLCIvKlxyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMTogI2ZmZmZmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjI6ICNmZmMwNDA7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4zOiAjZmY4MDQwO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluNDogIzAwMDAwMDtcclxuXHJcblxyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MTogI2ZmZmZmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDI6ICM4N2E3N2Y7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgzOiAjZGNmZGYwO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4NDogIzAwMDAwMDtcclxuKi9cbi8qXHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnQxOiAjZmZmZmZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50MjogIzRkNDBmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudDM6ICNmZjQwYTY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnQ0OiAjMDAwMDAwO1xyXG4qL1xuLmdyYWRpZW50X21pbjEge1xuICBzdG9wLWNvbG9yOiAjZmZmZmZmOyB9XG5cbi5ncmFkaWVudF9taW4yIHtcbiAgc3RvcC1jb2xvcjogI2ZlZjVhYTsgfVxuXG4uZ3JhZGllbnRfbWluMyB7XG4gIHN0b3AtY29sb3I6ICNkM2EzNWU7IH1cblxuLmdyYWRpZW50X21pbjQge1xuICBzdG9wLWNvbG9yOiAjMDAwMDAwOyB9XG5cbi5ncmFkaWVudF9tYXgxIHtcbiAgc3RvcC1jb2xvcjogI2ZmZmZmZjsgfVxuXG4uZ3JhZGllbnRfbWF4MiB7XG4gIHN0b3AtY29sb3I6ICNmY2UwYjk7IH1cblxuLmdyYWRpZW50X21heDMge1xuICBzdG9wLWNvbG9yOiAjOTc3ODVkOyB9XG5cbi5ncmFkaWVudF9tYXg0IHtcbiAgc3RvcC1jb2xvcjogIzAwMDAwMDsgfVxuXG4uYmFyIHtcbiAgc3Ryb2tlOiBibGFjaztcbiAgc3Ryb2tlLXdpZHRoOiAwLjM7XG4gIGZpbGw6IGJsdWU7IH1cblxuI3BlcmltZXRlciB7XG4gIHN0cm9rZS13aWR0aDogMS4wO1xuICBzdHJva2U6ICM1ZDdhOTg7XG4gIGZpbGw6ICNkNmY0ZmY7IH1cblxuI3NsaWRlciB7XG4gIHN0cm9rZS13aWR0aDogMC4zO1xuICBzdHJva2U6ICNiZDIyMmU7XG4gIGZpbGw6ICM1MDUwNTA7IH1cblxuLmxhYmVsIHtcbiAgc3Ryb2tlLXdpZHRoOiAwLjM7XG4gIHN0cm9rZTogIzVkN2E5ODtcbiAgZmlsbDogIzY1YjFmMzsgfVxuXG4ubGFiZWwge1xuICBzdHJva2U6IGJsYWNrO1xuICBmaWxsOiBsaWdodGJsdWU7IH1cblxuLmxhYmVsVGV4dCB7XG4gIGZvbnQ6IGJvbGQgMC4zMHZoIHNhbnMtc2VyaWY7XG4gIHN0cm9rZTogYmxhY2s7XG4gIHN0cm9rZS13aWR0aDogMC4xOyB9XG4iLCJcclxuXHJcbkBpbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxlcy9tb3JlLW9yLWxlc3MtY29sb3Vycy5zY3NzJztcclxuXHJcbi8vIEBpbXBvcnQgXCIuLi8uLi9tb3JlLW9yLWxlc3Muc2Nzc1wiO1xyXG4vLyBodHRwczovL2NvcnlyeWxhbi5jb20vYmxvZy9zYXNzLWFuZC1jc3MtaW1wb3J0LXBlcmZvcm1hbmNlLWluLWFuZ3VsYXJcclxuXHJcbi5ncmFkaWVudF9taW4xIHtcclxuICBzdG9wLWNvbG9yOiAkcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMTtcclxufVxyXG5cclxuLmdyYWRpZW50X21pbjIge1xyXG4gIHN0b3AtY29sb3I6ICRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4yO1xyXG59XHJcblxyXG4uZ3JhZGllbnRfbWluMyB7XHJcbiAgc3RvcC1jb2xvcjogJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjM7XHJcbn1cclxuXHJcbi5ncmFkaWVudF9taW40IHtcclxuICBzdG9wLWNvbG9yOiAkcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluNDtcclxufVxyXG5cclxuXHJcbi5ncmFkaWVudF9tYXgxIHtcclxuICBzdG9wLWNvbG9yOiAkcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MTtcclxufVxyXG5cclxuLmdyYWRpZW50X21heDIge1xyXG4gIHN0b3AtY29sb3I6ICRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgyO1xyXG59XHJcblxyXG4uZ3JhZGllbnRfbWF4MyB7XHJcbiAgc3RvcC1jb2xvcjogJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDM7XHJcbn1cclxuXHJcbi5ncmFkaWVudF9tYXg0IHtcclxuICBzdG9wLWNvbG9yOiAkcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4NDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmJhciB7XHJcbiAgc3Ryb2tlOiByZ2IoMCwwLDApO1xyXG4gIHN0cm9rZS13aWR0aDogMC4zO1xyXG4gIGZpbGw6IHJnYigwLDAsMjU1KTtcclxufVxyXG5cclxuI3BlcmltZXRlciB7XHJcbiAgc3Ryb2tlLXdpZHRoOiAxLjA7ICBcclxuICBzdHJva2U6ICRyYW5nZS1zZWxlY3Rvci1iYWNrZ3JvdW5kLXN0cm9rZS1jb2xvcjtcclxuICBmaWxsOiAkcmFuZ2Utc2VsZWN0b3ItYmFja2dyb3VuZC1maWxsLWNvbG9yO1xyXG59XHJcblxyXG5cclxuI3NsaWRlciB7XHJcbiAgc3Ryb2tlLXdpZHRoOiAwLjM7XHJcbiAgc3Ryb2tlOiAkcmFuZ2Utc2VsZWN0b3Itc2xpZGVyLXN0cm9rZS1jb2xvcjtcclxuICBmaWxsOiAkcmFuZ2Utc2VsZWN0b3Itc2xpZGVyLWZpbGwtY29sb3I7XHJcbn1cclxuXHJcblxyXG4ubGFiZWwge1xyXG4gIHN0cm9rZS13aWR0aDogMC4zOyAgXHJcbiAgc3Ryb2tlOiAkcmFuZ2Utc2VsZWN0b3ItbGFiZWwtc3Ryb2tlLWNvbG9yO1xyXG4gIGZpbGw6ICRyYW5nZS1zZWxlY3Rvci1sYWJlbC1maWxsLWNvbG9yO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iLCJcclxuQGltcG9ydCBcIi4uL3JhbmdlLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzXCI7XHJcblxyXG5cclxuXHJcblxyXG4ubGFiZWwge1xyXG4gIHN0cm9rZTogYmxhY2s7XHJcbiAvLyBzdHJva2Utd2lkdGg6IDAuMztcclxuICBmaWxsOiBsaWdodGJsdWU7XHJcbn1cclxuXHJcbi5sYWJlbFRleHQge1xyXG4gIGZvbnQ6IGJvbGQgMC4zMHZoIHNhbnMtc2VyaWY7XHJcbiAgc3Ryb2tlOiBibGFjaztcclxuICBzdHJva2Utd2lkdGg6IDAuMTtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/visualisations/parts/range-selector/parts/range-marker.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/range-selector/parts/range-marker.ts ***!
  \***********************************************************************************/
/*! exports provided: RangeMarker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeMarker", function() { return RangeMarker; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RangeMarker = class RangeMarker {
    constructor() {
        // The position in svg coordinates
        this.position = 99;
        // The text for the label
        this.value = 99;
        // Whether the flag lies to the left or right
        this.flagLeft = true;
        // The position of the point that corresponds to the value. The
        // lable should be horizontally centred at this point, and offset above.
        this.x = 0;
        this.y = 0;
        this.width = 10;
        this.height = 4;
    }
    ngOnInit() {
    }
    getXPos() {
        return this.position;
    }
    getYPos() {
        return 10;
    }
    getFlagXPos() {
        if (this.flagLeft) {
            return this.getXPos() - 10;
        }
        else {
            return this.getXPos();
        }
    }
    getFlagYPos() {
        return 15;
    }
    getFlagWidth() {
        return this.width;
    }
    getFlagHeight() {
        return this.height;
    }
    getTextXPos() {
        return this.getFlagXPos() + (this.width / 2);
    }
    getTextYPos() {
        return this.getFlagYPos() + (this.height / 2);
        ;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], RangeMarker.prototype, "position", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], RangeMarker.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], RangeMarker.prototype, "flagLeft", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], RangeMarker.prototype, "x", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], RangeMarker.prototype, "y", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], RangeMarker.prototype, "width", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], RangeMarker.prototype, "height", void 0);
RangeMarker = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: '[range-marker]',
        template: __webpack_require__(/*! ./range-marker.html */ "./src/app/modules/visualisations/parts/range-selector/parts/range-marker.html"),
        styles: [__webpack_require__(/*! ./range-marker.scss */ "./src/app/modules/visualisations/parts/range-selector/parts/range-marker.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RangeMarker);



/***/ }),

/***/ "./src/app/modules/visualisations/parts/range-selector/range-selector.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/range-selector/range-selector.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- \r\n<button (click)=\"doTest()\"  >Test</button>\r\n<button (click)=\"doCmd('LN')\"  >LN</button>\r\n<button (click)=\"doCmd('LP')\"  >LP</button>\r\n<button (click)=\"doCmd('RN')\"  >RN</button>\r\n\r\n<button (click)=\"doCmd('Answer')\"  >RP</button>\r\n\r\n<span   >{{showAnswer}}</span>\r\n\r\n-->\r\n\r\n<div >\r\n\r\n  <!-- The range selector is nominally 100 wide by 20 tall. The dimensions includes\r\n        any margins-->\r\n  <svg width=\"100%\" height=\"20%\" viewBox=\"0 0 100 20\" >\r\n\r\n    <defs>\r\n    </defs>\r\n \r\n    <!-- Perimeter of control -->\r\n    <rect id=\"perimeter\" x=\"0\"  y=\"0\" width=\"100\" height=\"20\"     />\r\n \r\n    <!-- Slider groove -->\r\n    <rect id=\"slider\" x=\"10\" y=\"9\" width=\"80\" height=\"2\" rx=\"1\" ry=\"1\"/>\r\n\r\n    <!-- range boundaries-->\r\n    <g #labMin minmax-label [value]=\"min\" [flagLeft]=\"true\"\r\n    [x]=\"getMinLabelXPos()\" [y]=\"getMinMaxLabelYPos()\"  />\r\n\r\n    <g #labMax minmax-label [value]=\"max\" [flagLeft]=\"false\"\r\n    [x]=\"getMaxLabelXPos()\" [y]=\"getMinMaxLabelYPos()\"  />\r\n\r\n\r\n    <!-- Lo -->\r\n    <g #loMarker range-marker [position]=\"getLoXPos()\" [value]=\"lo\" [flagLeft]=\"true\"  />\r\n    \r\n    <!-- Hi -->\r\n    <g #hiMarker range-marker [position]=\"getHiXPos()\" [value]=\"hi\" [flagLeft]=\"false\" />\r\n\r\n    <g #labPotentialScore class=\"labPotentialScore\" potential-score \r\n      [value]=\"potentialScore\" [visible]=\"getPotentialScoreVisibility()\"\r\n      [x]=\"50\" [y]=\"5.5\"  /> \r\n\r\n    <!-- class=\"labAnswer\"  -->\r\n    <g #labAnswer  answer-label \r\n      [value]=\"answer\" [visible]=\"showAnswer\"\r\n      [x]=\"getAnswerLabelXPos()\" [y]=\"getAnswerLabelYPos()\"  />\r\n\r\n\r\n<!-- \r\n\r\n  https://teropa.info/blog/2016/12/12/graphics-in-angular-2.html\r\n\r\n  https://books.google.com.au/books?id=Sgqqm6yDhigC&pg=PA63&lpg=PA63&dq=angular+nested+svg&source=bl&ots=5BUKNyzaon&sig=ACfU3U0ySRhvltyJ9SPcyjwm4HKe-3w4xg&hl=en&sa=X&ved=2ahUKEwi0gYS8uonoAhWD6XMBHRemBggQ6AEwB3oECAoQAQ#v=onepage&q&f=false\r\n  \r\n -->\r\n\r\n\r\n  </svg> \r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n  \r\n"

/***/ }),

/***/ "./src/app/modules/visualisations/parts/range-selector/range-selector.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/range-selector/range-selector.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n$range-marker-gradientmin1: #ffffff;\r\n$range-marker-gradientmin2: #ffc040;\r\n$range-marker-gradientmin3: #ff8040;\r\n$range-marker-gradientmin4: #000000;\r\n\r\n\r\n$range-marker-gradientmax1: #ffffff;\r\n$range-marker-gradientmax2: #87a77f;\r\n$range-marker-gradientmax3: #dcfdf0;\r\n$range-marker-gradientmax4: #000000;\r\n*/\n/*\r\n$range-marker-gradient1: #ffffff;\r\n$range-marker-gradient2: #4d40ff;\r\n$range-marker-gradient3: #ff40a6;\r\n$range-marker-gradient4: #000000;\r\n*/\n.gradient_min1 {\n  stop-color: #ffffff; }\n.gradient_min2 {\n  stop-color: #fef5aa; }\n.gradient_min3 {\n  stop-color: #d3a35e; }\n.gradient_min4 {\n  stop-color: #000000; }\n.gradient_max1 {\n  stop-color: #ffffff; }\n.gradient_max2 {\n  stop-color: #fce0b9; }\n.gradient_max3 {\n  stop-color: #97785d; }\n.gradient_max4 {\n  stop-color: #000000; }\n.bar {\n  stroke: black;\n  stroke-width: 0.3;\n  fill: blue; }\n#perimeter {\n  stroke-width: 1.0;\n  stroke: #5d7a98;\n  fill: #d6f4ff; }\n#slider {\n  stroke-width: 0.3;\n  stroke: #bd222e;\n  fill: #505050; }\n.label {\n  stroke-width: 0.3;\n  stroke: #5d7a98;\n  fill: #65b1f3; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9wYXJ0cy9yYW5nZS1zZWxlY3Rvci9EOlxcX0RhdGFcXFByaXZhdGVDb2RlXFxfZ2l0UHplS25tXFxUcmVhc3VyZUh1bnRcXEFuZ3VsYXJTUEFcXFNhbmRnYXRlVEgvc3JjXFxhcHBcXHN0eWxlc1xcbW9yZS1vci1sZXNzLWNvbG91cnMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9wYXJ0cy9yYW5nZS1zZWxlY3Rvci9yYW5nZS1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy92aXN1YWxpc2F0aW9ucy9wYXJ0cy9yYW5nZS1zZWxlY3Rvci9EOlxcX0RhdGFcXFByaXZhdGVDb2RlXFxfZ2l0UHplS25tXFxUcmVhc3VyZUh1bnRcXEFuZ3VsYXJTUEFcXFNhbmRnYXRlVEgvc3JjXFxhcHBcXG1vZHVsZXNcXHZpc3VhbGlzYXRpb25zXFxwYXJ0c1xccmFuZ2Utc2VsZWN0b3JcXHJhbmdlLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRDQTs7Ozs7Ozs7Ozs7Q0NqQ0M7QUQ2Q0Q7Ozs7O0NDdkNDO0FDVkQ7RUFDRSxtQkZ5QmlDLEVBQUE7QUV0Qm5DO0VBQ0UsbUJGc0I0QyxFQUFBO0FFbkI5QztFQUNFLG1CRm1CMkMsRUFBQTtBRWhCN0M7RUFDRSxtQkZnQmlDLEVBQUE7QUVabkM7RUFDRSxtQkZjaUMsRUFBQTtBRVhuQztFQUNFLG1CRlc0QyxFQUFBO0FFUjlDO0VBQ0UsbUJGUTJDLEVBQUE7QUVMN0M7RUFDRSxtQkZLaUMsRUFBQTtBRUNuQztFQUNFLGFBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixVQUFrQixFQUFBO0FBR3BCO0VBQ0UsaUJBQWlCO0VBQ2pCLGVGekM4QztFRTBDOUMsYUYzQzRDLEVBQUE7QUUrQzlDO0VBQ0UsaUJBQWlCO0VBQ2pCLGVGN0MwQztFRThDMUMsYUYvQzhDLEVBQUE7QUVtRGhEO0VBQ0UsaUJBQWlCO0VBQ2pCLGVGNUN5QztFRTZDekMsYUY5Q3VDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3Zpc3VhbGlzYXRpb25zL3BhcnRzL3JhbmdlLXNlbGVjdG9yL3JhbmdlLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHBsYWNlIHdoZXJlIHRoZSBjb2xvciBzY2hlbWUgZm9yIHRoZSBub24tZ2FtZSBwYXJ0cyBvZiB0aGUgYXBwXHJcblxyXG4vLyBcclxuLy8gaHR0cHM6Ly9teWNvbG9yLnNwYWNlLz9oZXg9JTIzQkQyMjJFJnN1Yj0xXHJcblxyXG4kc2NvcmUtYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4kc2NvcmUtYm9yZGVyLWNvbG9yOiByZ2IoMjM0LCAyNCwgMTI5KTtcclxuXHJcblxyXG4kcmFuZ2Utc2VsZWN0b3ItYmFja2dyb3VuZC1maWxsLWNvbG9yOiAjZDZmNGZmO1xyXG4kcmFuZ2Utc2VsZWN0b3ItYmFja2dyb3VuZC1zdHJva2UtY29sb3I6ICM1ZDdhOTg7XHJcblxyXG4kcmFuZ2Utc2VsZWN0b3Itc2xpZGVyLWZpbGwtY29sb3I6IHJnYig4MCw4MCw4MCk7XHJcbiRyYW5nZS1zZWxlY3Rvci1zbGlkZXItc3Ryb2tlLWNvbG9yOiAjYmQyMjJlO1xyXG5cclxuLy8gVG9wIHJvdyBzdGF0aWMgbGFiZWxzXHJcbiRyYW5nZS1zZWxlY3Rvci1taW5tYXgtZmlsbC1jb2xvcjogI2JmYTVhMjtcclxuJHJhbmdlLXNlbGVjdG9yLW1pbm1heC1zdHJva2UtY29sb3I6ICM1ZDdhOTg7XHJcblxyXG4vLyBNb3ZpbmcgbGFiZWxzXHJcbiRyYW5nZS1zZWxlY3Rvci1sYWJlbC1maWxsLWNvbG9yOiAjNjViMWYzO1xyXG4kcmFuZ2Utc2VsZWN0b3ItbGFiZWwtc3Ryb2tlLWNvbG9yOiAjNWQ3YTk4O1xyXG5cclxuLy8gYW5zd2VyIHNoYXBlXHJcbiRyYW5nZS1zZWxlY3Rvci1hbnN3ZXItZmlsbC1jb2xvcjogIzc2YTIxODtcclxuJHJhbmdlLXNlbGVjdG9yLWFuc3dlci1zdHJva2UtY29sb3I6ICMzZjZlMDA7XHJcblxyXG5cclxuXHJcblxyXG4kcmFuZ2Utc2VsZWN0b3ItYmFsbC1maWxsLWNvbG9yOiAjYmNkMTQ0O1xyXG4kcmFuZ2Utc2VsZWN0b3ItYmFsbC1zdHJva2UtY29sb3I6ICMwZTE1NTM7XHJcblxyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMTogI2ZmZmZmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjI6IHJnYigyNTQsIDI0NSwgMTcwKTtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjM6IHJnYigyMTEsIDE2MywgOTQpO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluNDogIzAwMDAwMDtcclxuXHJcblxyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MTogI2ZmZmZmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDI6IHJnYigyNTIsIDIyNCwgMTg1KTtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDM6IHJnYigxNTEsIDEyMCwgOTMpO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4NDogIzAwMDAwMDtcclxuXHJcbi8qXHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4xOiAjZmZmZmZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMjogI2ZmYzA0MDtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjM6ICNmZjgwNDA7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW40OiAjMDAwMDAwO1xyXG5cclxuXHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgxOiAjZmZmZmZmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MjogIzg3YTc3ZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDM6ICNkY2ZkZjA7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXg0OiAjMDAwMDAwO1xyXG4qL1xyXG4vKlxyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50MTogI2ZmZmZmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudDI6ICM0ZDQwZmY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnQzOiAjZmY0MGE2O1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50NDogIzAwMDAwMDtcclxuKi9cclxuXHJcblxyXG5cclxuIiwiLypcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjE6ICNmZmZmZmY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4yOiAjZmZjMDQwO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMzogI2ZmODA0MDtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjQ6ICMwMDAwMDA7XHJcblxyXG5cclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDE6ICNmZmZmZmY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgyOiAjODdhNzdmO1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MzogI2RjZmRmMDtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDQ6ICMwMDAwMDA7XHJcbiovXG4vKlxyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50MTogI2ZmZmZmZjtcclxuJHJhbmdlLW1hcmtlci1ncmFkaWVudDI6ICM0ZDQwZmY7XHJcbiRyYW5nZS1tYXJrZXItZ3JhZGllbnQzOiAjZmY0MGE2O1xyXG4kcmFuZ2UtbWFya2VyLWdyYWRpZW50NDogIzAwMDAwMDtcclxuKi9cbi5ncmFkaWVudF9taW4xIHtcbiAgc3RvcC1jb2xvcjogI2ZmZmZmZjsgfVxuXG4uZ3JhZGllbnRfbWluMiB7XG4gIHN0b3AtY29sb3I6ICNmZWY1YWE7IH1cblxuLmdyYWRpZW50X21pbjMge1xuICBzdG9wLWNvbG9yOiAjZDNhMzVlOyB9XG5cbi5ncmFkaWVudF9taW40IHtcbiAgc3RvcC1jb2xvcjogIzAwMDAwMDsgfVxuXG4uZ3JhZGllbnRfbWF4MSB7XG4gIHN0b3AtY29sb3I6ICNmZmZmZmY7IH1cblxuLmdyYWRpZW50X21heDIge1xuICBzdG9wLWNvbG9yOiAjZmNlMGI5OyB9XG5cbi5ncmFkaWVudF9tYXgzIHtcbiAgc3RvcC1jb2xvcjogIzk3Nzg1ZDsgfVxuXG4uZ3JhZGllbnRfbWF4NCB7XG4gIHN0b3AtY29sb3I6ICMwMDAwMDA7IH1cblxuLmJhciB7XG4gIHN0cm9rZTogYmxhY2s7XG4gIHN0cm9rZS13aWR0aDogMC4zO1xuICBmaWxsOiBibHVlOyB9XG5cbiNwZXJpbWV0ZXIge1xuICBzdHJva2Utd2lkdGg6IDEuMDtcbiAgc3Ryb2tlOiAjNWQ3YTk4O1xuICBmaWxsOiAjZDZmNGZmOyB9XG5cbiNzbGlkZXIge1xuICBzdHJva2Utd2lkdGg6IDAuMztcbiAgc3Ryb2tlOiAjYmQyMjJlO1xuICBmaWxsOiAjNTA1MDUwOyB9XG5cbi5sYWJlbCB7XG4gIHN0cm9rZS13aWR0aDogMC4zO1xuICBzdHJva2U6ICM1ZDdhOTg7XG4gIGZpbGw6ICM2NWIxZjM7IH1cbiIsIlxyXG5cclxuQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGVzL21vcmUtb3ItbGVzcy1jb2xvdXJzLnNjc3MnO1xyXG5cclxuLy8gQGltcG9ydCBcIi4uLy4uL21vcmUtb3ItbGVzcy5zY3NzXCI7XHJcbi8vIGh0dHBzOi8vY29yeXJ5bGFuLmNvbS9ibG9nL3Nhc3MtYW5kLWNzcy1pbXBvcnQtcGVyZm9ybWFuY2UtaW4tYW5ndWxhclxyXG5cclxuLmdyYWRpZW50X21pbjEge1xyXG4gIHN0b3AtY29sb3I6ICRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW4xO1xyXG59XHJcblxyXG4uZ3JhZGllbnRfbWluMiB7XHJcbiAgc3RvcC1jb2xvcjogJHJhbmdlLW1hcmtlci1ncmFkaWVudG1pbjI7XHJcbn1cclxuXHJcbi5ncmFkaWVudF9taW4zIHtcclxuICBzdG9wLWNvbG9yOiAkcmFuZ2UtbWFya2VyLWdyYWRpZW50bWluMztcclxufVxyXG5cclxuLmdyYWRpZW50X21pbjQge1xyXG4gIHN0b3AtY29sb3I6ICRyYW5nZS1tYXJrZXItZ3JhZGllbnRtaW40O1xyXG59XHJcblxyXG5cclxuLmdyYWRpZW50X21heDEge1xyXG4gIHN0b3AtY29sb3I6ICRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXgxO1xyXG59XHJcblxyXG4uZ3JhZGllbnRfbWF4MiB7XHJcbiAgc3RvcC1jb2xvcjogJHJhbmdlLW1hcmtlci1ncmFkaWVudG1heDI7XHJcbn1cclxuXHJcbi5ncmFkaWVudF9tYXgzIHtcclxuICBzdG9wLWNvbG9yOiAkcmFuZ2UtbWFya2VyLWdyYWRpZW50bWF4MztcclxufVxyXG5cclxuLmdyYWRpZW50X21heDQge1xyXG4gIHN0b3AtY29sb3I6ICRyYW5nZS1tYXJrZXItZ3JhZGllbnRtYXg0O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uYmFyIHtcclxuICBzdHJva2U6IHJnYigwLDAsMCk7XHJcbiAgc3Ryb2tlLXdpZHRoOiAwLjM7XHJcbiAgZmlsbDogcmdiKDAsMCwyNTUpO1xyXG59XHJcblxyXG4jcGVyaW1ldGVyIHtcclxuICBzdHJva2Utd2lkdGg6IDEuMDsgIFxyXG4gIHN0cm9rZTogJHJhbmdlLXNlbGVjdG9yLWJhY2tncm91bmQtc3Ryb2tlLWNvbG9yO1xyXG4gIGZpbGw6ICRyYW5nZS1zZWxlY3Rvci1iYWNrZ3JvdW5kLWZpbGwtY29sb3I7XHJcbn1cclxuXHJcblxyXG4jc2xpZGVyIHtcclxuICBzdHJva2Utd2lkdGg6IDAuMztcclxuICBzdHJva2U6ICRyYW5nZS1zZWxlY3Rvci1zbGlkZXItc3Ryb2tlLWNvbG9yO1xyXG4gIGZpbGw6ICRyYW5nZS1zZWxlY3Rvci1zbGlkZXItZmlsbC1jb2xvcjtcclxufVxyXG5cclxuXHJcbi5sYWJlbCB7XHJcbiAgc3Ryb2tlLXdpZHRoOiAwLjM7ICBcclxuICBzdHJva2U6ICRyYW5nZS1zZWxlY3Rvci1sYWJlbC1zdHJva2UtY29sb3I7XHJcbiAgZmlsbDogJHJhbmdlLXNlbGVjdG9yLWxhYmVsLWZpbGwtY29sb3I7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/modules/visualisations/parts/range-selector/range-selector.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/visualisations/parts/range-selector/range-selector.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: RangeSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangeSelector", function() { return RangeSelector; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RangeSelector = class RangeSelector {
    constructor() {
        this.min = 0;
        this.max = 100;
        this.lo = 25;
        this.hi = 60;
        this.answer = 30;
        //// @HostBinding('@profileAnimation')  
        this.showAnswer = false;
        this.potentialScore = 7;
        //// @Input() showPotentialScore: boolean = false; 
        // public animateProfile = true;
        this.xPos = 50;
        // total width of the control, always 100%. Nothing extends beyond this
        this.totalWidth = 100;
        // %age of width for the label
        this.labelWidth = 10;
        this.sliderWidth = this.totalWidth - (this.labelWidth * 2);
    }
    ngOnInit() {
    }
    doTest() {
        this.xPos += 10;
    }
    getMinLabelXPos() {
        return this.getSliderStartPos();
        // return this.labelWidth / 2;
    }
    getMaxLabelXPos() {
        return this.getSliderEndPos(); // - (this.labelWidth / 2);
    }
    getMinMaxLabelWidth() {
        return this.labelWidth;
    }
    getMinMaxLabelYPos() {
        return 10;
    }
    getMinMaxLabelHeight() {
        return 5;
    }
    getAnswerLabelXPos() {
        return this.getPosAlongSlider(this.answer);
    }
    getAnswerLabelYPos() {
        return 10;
    }
    getSliderStartPos() {
        return this.labelWidth;
    }
    getSliderEndPos() {
        return this.labelWidth + this.sliderWidth;
    }
    getSliderWidth() {
        return this.sliderWidth;
    }
    getPosAlongSlider(logicalValue) {
        return this.getSliderStartPos() + (logicalValue - this.min) / (this.max - this.min) * this.sliderWidth;
    }
    getPotentialScoreVisibility() {
        return (this.showAnswer === false);
    }
    getLoXPos() {
        return this.getPosAlongSlider(this.lo);
    }
    getHiXPos() {
        return this.getPosAlongSlider(this.hi);
    }
    doCmd(cmd) {
        if (cmd === 'LN') {
            this.lo -= 1;
        }
        if (cmd === 'LP') {
            this.lo += 1;
        }
        if (cmd === 'RN') {
            this.hi -= 1;
        }
        if (cmd === 'RP') {
            this.hi += 1;
        }
        if (cmd === 'Answer') {
            this.showAnswer = !this.showAnswer;
            //  this.animateProfile = !this.animateProfile;      
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], RangeSelector.prototype, "min", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], RangeSelector.prototype, "max", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], RangeSelector.prototype, "lo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], RangeSelector.prototype, "hi", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], RangeSelector.prototype, "answer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], RangeSelector.prototype, "showAnswer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], RangeSelector.prototype, "potentialScore", void 0);
RangeSelector = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-range-selector',
        template: __webpack_require__(/*! ./range-selector.component.html */ "./src/app/modules/visualisations/parts/range-selector/range-selector.component.html"),
        styles: [__webpack_require__(/*! ./range-selector.component.scss */ "./src/app/modules/visualisations/parts/range-selector/range-selector.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], RangeSelector);



/***/ }),

/***/ "./src/app/modules/visualisations/test-visualisation/test-visualisation.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/visualisations/test-visualisation/test-visualisation.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div ngClass=\"container\" >\r\n\r\n  <!-- \r\n  <app-header></app-header>\r\n  <alert></alert>\r\n   -->\r\n  <!--Content-->\r\n  \r\n\r\n\r\n<p ngClass=\"text\"  >\r\n  A convenient place to test the VIZ styling:\r\n</p>\r\n\r\n<app-movie-text>\r\n  \"As for Dr Frankenstein, we<br>\r\n  <span style=\"padding-left:100px\">believed him murdered by the </span><br>\r\n  <span style=\"padding-right:110px\">very monster he created, </span><br>\r\n  <span style=\"padding-left:-20px\">but a body was never found.\"</span>   \r\n</app-movie-text>\r\n\r\n\r\n<!--\r\n<app-flourish-text flourishStyle=\"cogsSml.svg\">\r\n  <div>Some text for small</div>\r\n</app-flourish-text>\r\n\r\n<app-flourish-text flourishStyle=\"cogsMed.svg\">\r\n  <div>Some text for medium</div>\r\n</app-flourish-text>\r\n\r\n<app-flourish-text flourishStyle=\"cogs.svg\">\r\n  <div>Some text for large</div>\r\n</app-flourish-text>\r\n  -->\r\n\r\n<!-- \r\n<div style=\"height:60vh\">\r\n\r\n  <div style=\"height:10vh\" >\r\n    <app-frame-text    fillType=\"checkerplate\"\r\n      radius=\"1\"  strokeWidth=\"0.6\" strokeColour=\"#000\" fillColour=\"#eee\" >\r\n      <div >checkerplate. checkerplate.checkerplate.</div> \r\n    </app-frame-text>\r\n  </div>\r\n\r\n  <div style=\"height:40vh\" >\r\n    <app-frame-text    fillType=\"cogs\" fillSize=\"30\"\r\n      radius=\"1\"  strokeWidth=\"0.6\" strokeColour=\"#000\" fillColour=\"#f00\" > \r\n      <div >cogs. cogs.cogs.</div> \r\n    </app-frame-text>    \r\n  </div>\r\n\r\n</div>\r\n -->\r\n<!--\r\n<div style=\"font-family: 'Vast Shadow';padding:0vh; position:relative; width:100%; height:10vh\">\r\n   \r\n<app-corrie-text text=\"A quiz game for those who... just aren't sure\"   \r\n  vbHeight=\"5\" vbWidth=\"100\" \r\n  radius=\"1\"  strokeWidth=\"0.6\" strokeColour=\"#000\" fillColour=\"#fff\"\r\n  fontSize=\"0.15\" fontSizeUnit=\"vw\"  >          \r\n</app-corrie-text> \r\n</div>  -->\r\n\r\n\r\n  <!--  \r\n  <button (click)=\"incScore(1)\"  >Inc score</button>\r\n  <button (click)=\"incScore(10)\"  >Inc score 10</button>\r\n  <app-score [score]=\"vizData.score\"  >\r\n  </app-score>\r\n-->\r\n\r\n<!--   -->\r\n\r\n<!--  \r\n<hr>\r\n \r\n<div style=\"padding:4vh; position:relative; width:40vw; height:40vh\">\r\n  <app-flourish-text flourishStyle=\"nice\"  > \r\n    It's a quiz game where the answers are always a number.   \r\n  </app-flourish-text>\r\n</div> -->\r\n\r\n<!---->\r\n<hr>\r\n<div style=\"width:100%\">  \r\n  <app-dormant-page [vizData]=\"vizDataDormant\" >  </app-dormant-page>\r\n</div>\r\n\r\n<hr>\r\n<div style=\"width:100%\">  \r\n  <app-demo-page [vizData]=\"vizDataDemo\" >  </app-demo-page>\r\n</div>\r\n\r\n<hr>\r\n<div style=\"width:100%\">  \r\n  <app-intro-page [vizData]=\"vizData\" >  </app-intro-page>\r\n</div>\r\n \r\n<!-- -->\r\n<hr>\r\n\r\n<hr>\r\n<!-- -->\r\n\r\n\r\n<div style=\"width:100%\">  \r\n  <app-authentication-page  [vizData]=\"vizData\" >  </app-authentication-page>\r\n</div>\r\n\r\n\r\n\r\n<hr>\r\n<div style=\"width:100%\">  \r\n  <app-pregame-page  [vizData]=\"vizData\" >  </app-pregame-page>\r\n</div>\r\n\r\n\r\n<hr>\r\n<!-- -->\r\n<div style=\"width:100%\">  \r\n  <app-playing-page  [vizData]=\"vizData\">\r\n  </app-playing-page>\r\n</div>\r\n \r\n\r\n<hr>\r\n<div style=\"width:100%\">  \r\n  <app-final-page  [vizData]=\"vizData\" >  </app-final-page>\r\n</div>\r\n\r\n\r\n\r\n  <!-- \r\n  <app-footer></app-footer>\r\n    -->\r\n</div>\r\n  \r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/modules/visualisations/test-visualisation/test-visualisation.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/visualisations/test-visualisation/test-visualisation.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdmlzdWFsaXNhdGlvbnMvdGVzdC12aXN1YWxpc2F0aW9uL3Rlc3QtdmlzdWFsaXNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/visualisations/test-visualisation/test-visualisation.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/visualisations/test-visualisation/test-visualisation.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: TestVisualisationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestVisualisationComponent", function() { return TestVisualisationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_visualisation_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/visualisation-data.service */ "./src/app/services/visualisation-data.service.ts");
/* harmony import */ var src_app_services_data_cache_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data-cache.service */ "./src/app/services/data-cache.service.ts");





// http://localhost:4200/visualisations/TestViz
let TestVisualisationComponent = class TestVisualisationComponent {
    constructor(dataCache) {
        this.dataCache = dataCache;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.users = [];
        this.amount = '';
    }
    ngOnInit() {
        this.subscriptions.add(this.dataCache.users$.subscribe(response => {
            this.users = response;
        }));
        this.subscriptions.add(this.dataCache.currentUser$.subscribe(response => {
            this.currentUser = response;
        }));
        this.dataCache.refreshCurrentUser();
        this.vizData = new src_app_services_visualisation_data_service__WEBPACK_IMPORTED_MODULE_3__["VisualisationData"]();
        this.vizData.gameState = 'Online_Ready';
        this.vizData.accessCode = 1234;
        this.vizData.internalState = 'DisplayQuestion'; // DisplayAnswer
        this.vizData.potentialScore = 8;
        this.vizData.score = 4;
        this.vizData.currentQuestion = new src_app_services_visualisation_data_service__WEBPACK_IMPORTED_MODULE_3__["Question"]();
        this.vizData.currentQuestion.questionText = 'When was the Battle of Hastings?';
        this.vizData.currentQuestion.answer = 1066;
        this.vizData.currentQuestionMin = 1016;
        this.vizData.currentQuestionMax = 1278;
        this.vizData.currentAnswerLo = 1047;
        this.vizData.currentAnswerHi = 1122;
        this.vizData.totalGameSecs = 60;
        this.vizData.remainingSecs = 40;
        this.vizData.remainingQuestionSecs = 7;
        this.vizDataDemo = new src_app_services_visualisation_data_service__WEBPACK_IMPORTED_MODULE_3__["VisualisationData"]();
        this.vizDataDemo.gameState = 'Online_Demo';
        this.vizDataDormant = new src_app_services_visualisation_data_service__WEBPACK_IMPORTED_MODULE_3__["VisualisationData"]();
        this.vizDataDormant.gameState = 'Online_Dormant';
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    onCodeEntered(s) {
        console.log('try using ' + s);
    }
    incScore(n) {
        this.vizData.score += n;
    }
};
TestVisualisationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test-visualisation',
        template: __webpack_require__(/*! ./test-visualisation.component.html */ "./src/app/modules/visualisations/test-visualisation/test-visualisation.component.html"),
        styles: [__webpack_require__(/*! ./test-visualisation.component.scss */ "./src/app/modules/visualisations/test-visualisation/test-visualisation.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_cache_service__WEBPACK_IMPORTED_MODULE_4__["DataCacheService"]])
], TestVisualisationComponent);



/***/ }),

/***/ "./src/app/modules/visualisations/visualisations-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/visualisations/visualisations-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: VisualisationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualisationsRoutingModule", function() { return VisualisationsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _test_visualisation_test_visualisation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test-visualisation/test-visualisation.component */ "./src/app/modules/visualisations/test-visualisation/test-visualisation.component.ts");
/* harmony import */ var _more_or_less_viz_more_or_less_viz_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./more-or-less-viz/more-or-less-viz.component */ "./src/app/modules/visualisations/more-or-less-viz/more-or-less-viz.component.ts");





const routes = [
    { path: 'MoreOrLessViz', component: _more_or_less_viz_more_or_less_viz_component__WEBPACK_IMPORTED_MODULE_4__["MoreOrLessVizComponent"] },
    { path: 'TestViz', component: _test_visualisation_test_visualisation_component__WEBPACK_IMPORTED_MODULE_3__["TestVisualisationComponent"] },
    { path: '', component: _test_visualisation_test_visualisation_component__WEBPACK_IMPORTED_MODULE_3__["TestVisualisationComponent"] }
];
let VisualisationsRoutingModule = class VisualisationsRoutingModule {
};
VisualisationsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], VisualisationsRoutingModule);



/***/ }),

/***/ "./src/app/modules/visualisations/visualisations.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/visualisations/visualisations.module.ts ***!
  \*****************************************************************/
/*! exports provided: VisualisationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualisationsModule", function() { return VisualisationsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _visualisations_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visualisations-routing.module */ "./src/app/modules/visualisations/visualisations-routing.module.ts");
/* harmony import */ var _test_visualisation_test_visualisation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test-visualisation/test-visualisation.component */ "./src/app/modules/visualisations/test-visualisation/test-visualisation.component.ts");
/* harmony import */ var _more_or_less_viz_more_or_less_viz_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./more-or-less-viz/more-or-less-viz.component */ "./src/app/modules/visualisations/more-or-less-viz/more-or-less-viz.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _more_or_less_viz_intro_page_intro_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./more-or-less-viz/intro-page/intro-page.component */ "./src/app/modules/visualisations/more-or-less-viz/intro-page/intro-page.component.ts");
/* harmony import */ var _more_or_less_viz_authentication_page_authentication_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./more-or-less-viz/authentication-page/authentication-page.component */ "./src/app/modules/visualisations/more-or-less-viz/authentication-page/authentication-page.component.ts");
/* harmony import */ var _parts_graphic_display_graphic_display__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./parts/graphic-display/graphic-display */ "./src/app/modules/visualisations/parts/graphic-display/graphic-display.ts");
/* harmony import */ var _parts_mini_phone_mini_phone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./parts/mini-phone/mini-phone */ "./src/app/modules/visualisations/parts/mini-phone/mini-phone.ts");
/* harmony import */ var _parts_flourish_text_flourish_text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parts/flourish-text/flourish-text */ "./src/app/modules/visualisations/parts/flourish-text/flourish-text.ts");
/* harmony import */ var _parts_range_selector_range_selector_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./parts/range-selector/range-selector.component */ "./src/app/modules/visualisations/parts/range-selector/range-selector.component.ts");
/* harmony import */ var _parts_range_selector_parts_minmax_label_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./parts/range-selector/parts/minmax-label.component */ "./src/app/modules/visualisations/parts/range-selector/parts/minmax-label.component.ts");
/* harmony import */ var _parts_range_selector_parts_answer_label__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./parts/range-selector/parts/answer-label */ "./src/app/modules/visualisations/parts/range-selector/parts/answer-label.ts");
/* harmony import */ var _parts_range_selector_parts_potential_score__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./parts/range-selector/parts/potential-score */ "./src/app/modules/visualisations/parts/range-selector/parts/potential-score.ts");
/* harmony import */ var _parts_range_selector_parts_range_marker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./parts/range-selector/parts/range-marker */ "./src/app/modules/visualisations/parts/range-selector/parts/range-marker.ts");
/* harmony import */ var _more_or_less_viz_pregame_page_pregame_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./more-or-less-viz/pregame-page/pregame-page.component */ "./src/app/modules/visualisations/more-or-less-viz/pregame-page/pregame-page.component.ts");
/* harmony import */ var _more_or_less_viz_playing_page_playing_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./more-or-less-viz/playing-page/playing-page.component */ "./src/app/modules/visualisations/more-or-less-viz/playing-page/playing-page.component.ts");
/* harmony import */ var _more_or_less_viz_final_page_final_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./more-or-less-viz/final-page/final-page.component */ "./src/app/modules/visualisations/more-or-less-viz/final-page/final-page.component.ts");
/* harmony import */ var _parts_question_display_question_display_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./parts/question-display/question-display.component */ "./src/app/modules/visualisations/parts/question-display/question-display.component.ts");
/* harmony import */ var _parts_answer_hint_answer_hint_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./parts/answer-hint/answer-hint.component */ "./src/app/modules/visualisations/parts/answer-hint/answer-hint.component.ts");
/* harmony import */ var _parts_corrie_text_corrie_text__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./parts/corrie-text/corrie-text */ "./src/app/modules/visualisations/parts/corrie-text/corrie-text.ts");
/* harmony import */ var _more_or_less_viz_demo_page_demo_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./more-or-less-viz/demo-page/demo-page.component */ "./src/app/modules/visualisations/more-or-less-viz/demo-page/demo-page.component.ts");
/* harmony import */ var _more_or_less_viz_dormant_page_dormant_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./more-or-less-viz/dormant-page/dormant-page.component */ "./src/app/modules/visualisations/more-or-less-viz/dormant-page/dormant-page.component.ts");
/* harmony import */ var _parts_movie_text_movie_text__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./parts/movie-text/movie-text */ "./src/app/modules/visualisations/parts/movie-text/movie-text.ts");


























let VisualisationsModule = class VisualisationsModule {
};
VisualisationsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _test_visualisation_test_visualisation_component__WEBPACK_IMPORTED_MODULE_4__["TestVisualisationComponent"],
            _more_or_less_viz_more_or_less_viz_component__WEBPACK_IMPORTED_MODULE_5__["MoreOrLessVizComponent"],
            _more_or_less_viz_demo_page_demo_page_component__WEBPACK_IMPORTED_MODULE_23__["DemoPageComponent"],
            _more_or_less_viz_dormant_page_dormant_page_component__WEBPACK_IMPORTED_MODULE_24__["DormantPageComponent"],
            _more_or_less_viz_intro_page_intro_page_component__WEBPACK_IMPORTED_MODULE_7__["IntroPageComponent"],
            _more_or_less_viz_authentication_page_authentication_page_component__WEBPACK_IMPORTED_MODULE_8__["AuthenticationPageComponent"],
            _more_or_less_viz_pregame_page_pregame_page_component__WEBPACK_IMPORTED_MODULE_17__["PregamePageComponent"],
            _more_or_less_viz_playing_page_playing_page_component__WEBPACK_IMPORTED_MODULE_18__["PlayingPageComponent"],
            _more_or_less_viz_final_page_final_page_component__WEBPACK_IMPORTED_MODULE_19__["FinalPageComponent"],
            _parts_graphic_display_graphic_display__WEBPACK_IMPORTED_MODULE_9__["GraphicDisplay"],
            _parts_mini_phone_mini_phone__WEBPACK_IMPORTED_MODULE_10__["MiniPhone"],
            _parts_flourish_text_flourish_text__WEBPACK_IMPORTED_MODULE_11__["FlourishText"],
            _parts_movie_text_movie_text__WEBPACK_IMPORTED_MODULE_25__["MovieText"],
            _parts_range_selector_range_selector_component__WEBPACK_IMPORTED_MODULE_12__["RangeSelector"],
            _parts_range_selector_parts_minmax_label_component__WEBPACK_IMPORTED_MODULE_13__["MinMaxLabel"],
            _parts_range_selector_parts_answer_label__WEBPACK_IMPORTED_MODULE_14__["AnswerLabel"],
            _parts_range_selector_parts_potential_score__WEBPACK_IMPORTED_MODULE_15__["PotentialScore"],
            _parts_range_selector_parts_range_marker__WEBPACK_IMPORTED_MODULE_16__["RangeMarker"],
            _parts_question_display_question_display_component__WEBPACK_IMPORTED_MODULE_20__["QuestionDisplay"],
            _parts_answer_hint_answer_hint_component__WEBPACK_IMPORTED_MODULE_21__["AnswerHint"],
            _parts_corrie_text_corrie_text__WEBPACK_IMPORTED_MODULE_22__["CorrieText"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _visualisations_routing_module__WEBPACK_IMPORTED_MODULE_3__["VisualisationsRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
        ],
        exports: [
            _more_or_less_viz_intro_page_intro_page_component__WEBPACK_IMPORTED_MODULE_7__["IntroPageComponent"],
            _more_or_less_viz_authentication_page_authentication_page_component__WEBPACK_IMPORTED_MODULE_8__["AuthenticationPageComponent"],
            _more_or_less_viz_pregame_page_pregame_page_component__WEBPACK_IMPORTED_MODULE_17__["PregamePageComponent"],
            _more_or_less_viz_playing_page_playing_page_component__WEBPACK_IMPORTED_MODULE_18__["PlayingPageComponent"],
            _more_or_less_viz_final_page_final_page_component__WEBPACK_IMPORTED_MODULE_19__["FinalPageComponent"],
        ],
        entryComponents: []
    })
], VisualisationsModule);



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertMessage, AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertMessage", function() { return AlertMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




class AlertMessage {
    constructor(type, text) {
        this.type = type;
        this.text = text;
    }
}
let AlertService = class AlertService {
    constructor(router) {
        this.router = router;
        this.messages$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // For storing the subscription so that they can be cleaned up.
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        // clear alert message on route change
        this.subscriptions.add(router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                if (this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    this.messages$.next();
                }
            }
        }));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    success(message, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        const mess = new AlertMessage('success', message);
        this.messages$.next(mess);
    }
    error(message, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        const mess = new AlertMessage('error', message);
        this.messages$.next(mess);
    }
    /*
    processSwaggerException(exc: SwaggerException) {
      this.keepAfterNavigationChange = false;
      const str = this.getSwaggerErrorMessage(exc);
      const mess = new AlertMessage('error', str);
      this.messages$.next(mess);
    }*/
    getMessage() {
        return this.messages$.asObservable();
    }
};
AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AlertService);



/***/ }),

/***/ "./src/app/services/data-cache.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/data-cache.service.ts ***!
  \************************************************/
/*! exports provided: DataCacheService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataCacheService", function() { return DataCacheService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_model_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/model/game */ "./src/app/shared/model/game.ts");
/* harmony import */ var _dataAccess_gameRestApi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dataAccess/gameRestApi.service */ "./src/app/services/dataAccess/gameRestApi.service.ts");
/* harmony import */ var _signal_r_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signal-r.service */ "./src/app/services/signal-r.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert.service */ "./src/app/services/alert.service.ts");

var DataCacheService_1;






let DataCacheService = DataCacheService_1 = class DataCacheService {
    // private readonly _signalRService: SignalRService;
    // private readonly _signalRTest: SignalRTest;
    constructor(srvGameApi, signalRService, alertService) {
        this.srvGameApi = srvGameApi;
        this.signalRService = signalRService;
        this.alertService = alertService;
        // All the games in the system
        this.games$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.users$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.currentUser$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // Incoming client messages, for this client
        this.clientMessages$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // For storing the subscription so that they can be cleaned up.
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
        this.askServerForNewAccessCodeResult$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        //  this._signalRService = signalRService;
    }
    /** Use this before calling any signal R relevant code. */
    EnsureInitialize() {
        if (DataCacheService_1.isInitialised) {
            return Promise.resolve(true);
        }
        DataCacheService_1.isInitialised = true;
        const promise = new Promise((resolve, reject) => {
            console.log('before test');
            this.signalRService.init().then((res) => {
                this.signalRService.allClientMessages$.subscribe(cm => {
                    this.processAllClientMessage(cm);
                });
                this.subscriptions.add(this.srvGameApi.generateNewAccessCodeResult$.subscribe(data => {
                    this.askServerForNewAccessCodeResult$.next(data);
                }));
                resolve(true);
            });
        });
        this.refreshStations();
        this.refreshUsers();
        return promise;
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    /** Get game details/status. */
    getGameDetails(gameId) {
        const promise = new Promise((resolve, reject) => {
            this.srvGameApi.getStations().subscribe(games => {
                const g = games.find(x => x.id === gameId);
                if (g !== undefined) {
                    resolve(g);
                }
                else {
                    reject();
                }
            });
        });
        return promise;
    }
    /** checks whther the inputCode matches the one just generated by the game.
     * Resolves true for matching code, false for not matching. Never rejects.
     */
    checkAccessCode2(gameId, inputCode) {
        const promise = new Promise((resolve, reject) => {
            this.srvGameApi.checkAccessCode(gameId, inputCode).subscribe((data) => {
                // this.accessResult$.next(data);
                this.lastAccessResult = data;
                resolve(true);
            }, err => {
                console.log(err);
                let dto = new _shared_model_game__WEBPACK_IMPORTED_MODULE_3__["AccessResultDto"]();
                dto.success = false;
                //   this.accessResult$.next(dto);
                this.lastAccessResult = dto;
                resolve(false);
            });
        });
        return promise;
    }
    /** */
    // public checkAccessCode(gameId: string, inputCode: string) {
    //   this.subscriptions.add(
    //     this.srvGameApi.checkAccessCode(gameId, inputCode).subscribe(
    //       data => {
    //         this.accessResult$.next(data);
    //         this.lastAccessResult = data;
    //       },
    //       err => {
    //         console.log(err);     
    //         let dto = new AccessResultDto();
    //         dto.success = false;
    //         this.accessResult$.next(dto);
    //         this.lastAccessResult = dto;          
    //       }
    //     )
    //   );
    // }
    /** */
    refreshStations() {
        this.subscriptions.add(this.srvGameApi.getStations().subscribe(data => {
            this.games$.next(data);
        }));
    }
    refreshUsers() {
        /* todo
        this.subscriptions.add(
          this.srvGame.getUsers().subscribe(
            data => {
              this.users$.next(data);
          })
        );*/
    }
    hasValidGameToken(gameId) {
        if (this.lastAccessResult === undefined) {
            return false;
        }
        if (this.lastAccessResult.gameId !== gameId) {
            return false;
        }
        return this.lastAccessResult.success;
    }
    sendCommandToGame(gameId, command, parameters) {
        if (!this.hasValidGameToken(gameId)) {
            return;
        }
        console.log(command);
        this.srvGameApi.doCommand(gameId, this.lastAccessResult.token, command, parameters);
    }
    /** Since the replay from the server will be via signal R, we have to ensure
     * that signal R is up and running.
     */
    askServerForNewAccessCode(gameId) {
        this.EnsureInitialize().then((res) => {
            console.log('DataCacheService: askServerForNewAccessCode');
            this.srvGameApi.generateNewAccessCode(gameId);
        });
    }
    processAllClientMessage(cm) {
        if (!cm.direction || !(cm.direction === 'Station2SPA')) {
            return;
        }
        if (cm.command !== 'AuthenticationTimeout') {
            if (!this.lastAccessResult || !this.lastAccessResult.token) {
                return;
            }
            if (cm.command === 'GenerateAccessCode' || cm.command === 'BeginGame') {
                return;
            }
            if (this.lastAccessResult.token !== cm.accessToken) {
                return;
            }
        }
        // This client message is for this authenticated client
        this.processClientMessageCommand(cm);
    }
    processClientMessageCommand(cm) {
        // console.log('processClientMessageCommand');
        // Messages may be std messages, or specific to be passed on the the game, which observes them via
        // the observable.
        if (cm.command === 'DisplayText') {
            this.alertService.success(cm.parameters, false);
            console.log(cm.parameters);
            return;
        }
        this.clientMessages$.next(cm);
    }
    refreshCurrentUser() {
        this.users$.subscribe(users => {
            const u = users.find(x => x.id === this.userId);
            this.currentUser$.next(u);
        });
    }
};
// whether initial data has been taken from API
DataCacheService.isInitialised = false;
DataCacheService = DataCacheService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dataAccess_gameRestApi_service__WEBPACK_IMPORTED_MODULE_4__["GameRestApiService"],
        _signal_r_service__WEBPACK_IMPORTED_MODULE_5__["SignalRService"],
        _alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
], DataCacheService);



/***/ }),

/***/ "./src/app/services/dataAccess/gameRestApi.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/dataAccess/gameRestApi.service.ts ***!
  \************************************************************/
/*! exports provided: GameRestApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameRestApiService", function() { return GameRestApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let GameRestApiService = class GameRestApiService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.endpoint = 'https://treasurehuntrestapi.azurewebsites.net/api/';
        ////endpoint = 'http://localhost:7071/api/';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.generateNewAccessCodeResult$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    extractData(res) {
        let body = res;
        return body || {};
    }
    getStations() {
        // The wrapped data that comes from the web server, including errors and links
        const wrapped$ = this.http.get(this.endpoint + 'Stations').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            //  this.PublishDataEvent('Get', 'Version', '', err, true);
            const returnValue = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]();
            return returnValue;
        }));
        // The unwrapped data section from the web response
        const unwrapped$ = wrapped$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(v => v.data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(d => {
            // console.log(d);
        }));
        return unwrapped$;
    }
    generateNewAccessCode(gameId) {
        this.http.get(this.endpoint + 'GenerateNewAccessCode' + '?GameId=' + gameId).subscribe(data => {
            // Code generation allowed
            // GenerateNewAccessCode
            console.log(data);
            this.generateNewAccessCodeResult$.next(true);
        }, err => {
            console.log(err);
            this.generateNewAccessCodeResult$.next(false);
        });
    }
    checkAccessCode(gameId, inputCode) {
        // The wrapped data that comes from the web server, including errors and links
        const wrapped$ = this.http.get(this.endpoint + 'CheckAccessCode' + '?GameId=' + gameId + '&InputCode=' + inputCode).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            const returnValue = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]();
            return returnValue;
        }));
        // The unwrapped data section from the web response
        const unwrapped$ = wrapped$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(v => v.data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(d => {
            console.log(d);
        }));
        return unwrapped$;
    }
    doCommand(gameId, token, command, parameters) {
        this.http.get(this.endpoint + 'PassCommandToStation' + '?GameId=' + gameId
            + '&AccessToken=' + token
            + '&Command=' + command + '&Parameters=' + parameters).subscribe(data => {
            console.log(data);
        }, err => {
            console.log(err);
        });
    }
    getUsers() {
        // The wrapped data that comes from the web server, including errors and links
        const wrapped$ = this.http.get(this.endpoint + 'Users').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => {
            //  this.PublishDataEvent('Get', 'Version', '', err, true);
            const returnValue = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"]();
            return returnValue;
        }));
        // The unwrapped data section from the web response
        const unwrapped$ = wrapped$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(v => v.data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(d => {
            // console.log(d);
        }));
        return unwrapped$;
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
};
GameRestApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], GameRestApiService);



/***/ }),

/***/ "./src/app/services/global-error-handler.ts":
/*!**************************************************!*\
  !*** ./src/app/services/global-error-handler.ts ***!
  \**************************************************/
/*! exports provided: MyValidationError, MyAssertionError, getDebugContext, GlobalErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyValidationError", function() { return MyValidationError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAssertionError", function() { return MyAssertionError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDebugContext", function() { return getDebugContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalErrorHandler", function() { return GlobalErrorHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



class MyValidationError extends Error {
    constructor(message, extra) {
        super(message);
        this.extra = 'something extra';
        Object.setPrototypeOf(this, MyValidationError.prototype);
        this.message = message;
        this.name = this.constructor.name;
        this.extra = extra;
    }
}
class MyAssertionError extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, MyAssertionError.prototype);
    }
}
function getDebugContext(error) {
    return error['ngDebugContext'];
}
let GlobalErrorHandler = class GlobalErrorHandler {
    handleError(err) {
        console.error(err.name);
        console.error(err.message);
        if (err instanceof MyAssertionError) {
            console.warn(err.message);
        }
        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
            console.log('Its a HttpErrorResponse Error');
        }
        if (err instanceof Error) {
            console.log('Its a Error Error');
        }
        console.error("%O", err);
        // your custom error handling logic  
        if (err instanceof MyValidationError) {
            console.log('Its a Validation Error');
        }
        if (err instanceof SyntaxError) {
            console.log('Its a Syntax Error');
        }
    }
};
GlobalErrorHandler = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], GlobalErrorHandler);



/***/ }),

/***/ "./src/app/services/guid.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/guid.service.ts ***!
  \******************************************/
/*! exports provided: GuidService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuidService", function() { return GuidService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let GuidService = class GuidService {
    constructor(router) {
        this.router = router;
    }
    newGuidAsString() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
};
GuidService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], GuidService);



/***/ }),

/***/ "./src/app/services/signal-r.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/signal-r.service.ts ***!
  \**********************************************/
/*! exports provided: SignalRConnectionInfo, ClientMessage, SignalRService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalRConnectionInfo", function() { return SignalRConnectionInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientMessage", function() { return ClientMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalRService", function() { return SignalRService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




//import { SignalRConnectionInfo } from "./signalr-connection-info.model";


class SignalRConnectionInfo {
}
class ClientMessage {
}
let SignalRService = class SignalRService {
    constructor(http) {
        // private readonly _baseUrl: string = "http://localhost:7071/api/";
        this._baseUrl = "https://treasurehuntrestapi.azurewebsites.net/api/";
        // Incoming client messages, may not all be for this client
        this.allClientMessages$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this._http = http;
    }
    getConnectionInfo() {
        let requestUrl = `${this._baseUrl}negotiate`;
        return this._http.get(requestUrl, { withCredentials: false });
    }
    /**  */
    init() {
        const promise = new Promise((resolve, reject) => {
            const prm = this.getConnectionInfo().toPromise();
            prm.then((info) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let options = {
                    accessTokenFactory: () => info.accessToken,
                    withCredentials: false
                };
                this.hubConnection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_3__["HubConnectionBuilder"]()
                    .withUrl(info.url, options)
                    .configureLogging(_aspnet_signalr__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Information)
                    .build();
                this.hubConnection.on('ClientMessage', (data) => {
                    let cm = new ClientMessage();
                    cm.sender = data.Sender;
                    cm.stationId = data.StationId;
                    cm.direction = data.Direction;
                    cm.accessToken = data.AccessToken;
                    cm.command = data.Command;
                    cm.parameters = data.Parameters;
                    this.allClientMessages$.next(cm);
                });
                yield this.hubConnection.start()
                    .then(() => {
                    console.log('hubConnection started');
                    resolve(true);
                })
                    .catch(err => {
                    console.error(err.toString());
                    reject(false);
                });
            }));
        });
        return promise;
    }
    send(message) {
        let requestUrl = `${this._baseUrl}message`;
        return this._http.post(requestUrl, message).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((result) => { }));
    }
};
SignalRService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], SignalRService);



/***/ }),

/***/ "./src/app/services/visualisation-data.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/visualisation-data.service.ts ***!
  \********************************************************/
/*! exports provided: Question, VisualisationData, VisualisationDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualisationData", function() { return VisualisationData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualisationDataService", function() { return VisualisationDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





/*
export class SignalRConnectionInfo {
  url: string;
  accessToken: string;
}
*/
class Question {
}
class VisualisationData {
}
let VisualisationDataService = class VisualisationDataService {
    constructor(http) {
        //  private readonly _baseUrl: string = "http://localhost:7071/api/";
        this._baseUrl = "http://localhost:5000/";
        // Incoming client messages, may not all be for this client
        this.incomingData$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.isConnected$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this._http = http;
    }
    /*
    private getConnectionInfo(): Observable<SignalRConnectionInfo> {
        let requestUrl = `${this._baseUrl}`;
        return this._http.get<SignalRConnectionInfo>(requestUrl,
          { withCredentials: true });
    }*/
    /**  */
    init() {
        const promise = new Promise((resolve, reject) => {
            let requestUrl = "http://localhost:5000/hubs/visualisation";
            this.hubConnection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_3__["HubConnectionBuilder"]()
                .withUrl(requestUrl)
                .configureLogging(_aspnet_signalr__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Information)
                .build();
            this.hubConnection.start()
                .then(() => {
                console.log('hubConnection started');
                resolve(true);
            })
                .catch(err => {
                console.error(err.toString());
                reject(false);
            });
            this.hubConnection.on('SendVisualisation', (data) => {
                console.log(data);
                this.incomingData$.next(data);
            });
        });
        return promise;
    }
    initialise() {
        let requestUrl = "http://localhost:5000/hubs/visualisation";
        this.hubConnection = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_3__["HubConnectionBuilder"]()
            .withUrl(requestUrl)
            .configureLogging(_aspnet_signalr__WEBPACK_IMPORTED_MODULE_3__["LogLevel"].Information)
            .build();
        this.hubConnection.on('SendVisualisation', (data) => {
            //    console.log(data);
            let viz = data;
            this.incomingData$.next(viz);
        });
        this.hubConnection.onclose((err) => {
            //     console.log(err);
            this.tryToConnect();
        });
        this.tryToConnect();
    }
    tryToConnect() {
        if (this.reconnectTimer) {
            this.reconnectTimer.unsubscribe();
            this.reconnectTimer = undefined;
        }
        this.hubConnection.start()
            .then(() => {
            //    console.log('hubConnection started');
            this.isConnected$.next(true);
        })
            .catch(err => {
            //   console.error(err.toString());
            this.isConnected$.next(false);
            this.reconnectTimer = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["timer"])(10000, 10000).subscribe(() => {
                //     console.log('Trying to reconnect to the sigR.');
                this.tryToConnect();
            });
        });
        return true;
    }
};
VisualisationDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], VisualisationDataService);



/***/ }),

/***/ "./src/app/services/watch-dog.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/watch-dog.service.ts ***!
  \***********************************************/
/*! exports provided: WatchDogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchDogService", function() { return WatchDogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let WatchDogService = class WatchDogService {
    constructor() {
        /** whether the watchdog is running or not */
        this.running = false;
        /** The current time remaining in seconds */
        this.currentCount = 0;
        this.warnAt = 0;
        this.warn$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.expired$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // warn: Observable<any> = Observable.create();
        // expired: Observable<any> = Observable.create();
        this.initialCountValue = 0;
    }
    start(countdownFrom = 10, warnAt = 5) {
        this.clear();
        this.running = true;
        this.currentCount = countdownFrom;
        this.initialCountValue = countdownFrom;
        this.warnAt = warnAt;
        this.tickerInterval = setInterval(this.tick.bind(this), 1000);
    }
    clear() {
        clearInterval(this.tickerInterval);
        this.running = false;
        this.currentCount = this.initialCountValue;
    }
    restart() {
        this.currentCount = this.initialCountValue;
    }
    tick() {
        if (this.currentCount <= this.warnAt) {
            this.warn$.next(this.currentCount);
            // this.warn.next(this.currentCount);
        }
        if (this.currentCount === 0) {
            this.expired$.next(true);
            this.running = false;
            clearInterval(this.tickerInterval);
        }
        this.currentCount--;
    }
};
WatchDogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], WatchDogService);



/***/ }),

/***/ "./src/app/shared/model/game.ts":
/*!**************************************!*\
  !*** ./src/app/shared/model/game.ts ***!
  \**************************************/
/*! exports provided: GameDto, WrapperOfIEnumerableOfGameDto, Link, AccessResultDto, WrapperOfAccessResultDto, ApiResultDto, WrapperOfApiResultDto, UserDto, WrapperOfIEnumerableOfUserDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameDto", function() { return GameDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperOfIEnumerableOfGameDto", function() { return WrapperOfIEnumerableOfGameDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessResultDto", function() { return AccessResultDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperOfAccessResultDto", function() { return WrapperOfAccessResultDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiResultDto", function() { return ApiResultDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperOfApiResultDto", function() { return WrapperOfApiResultDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDto", function() { return UserDto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperOfIEnumerableOfUserDto", function() { return WrapperOfIEnumerableOfUserDto; });
class GameDto {
}
class WrapperOfIEnumerableOfGameDto {
}
class Link {
}
class AccessResultDto {
}
class WrapperOfAccessResultDto {
}
class ApiResultDto {
}
class WrapperOfApiResultDto {
}
class UserDto {
}
class WrapperOfIEnumerableOfUserDto {
}


/***/ }),

/***/ "./src/app/views/access-code-login/access-code-login.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/views/access-code-login/access-code-login.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n<div ngClass=\"container\" >\r\n  <app-header></app-header>\r\n  <alert></alert>  \r\n  \r\n  Content\r\n  <div ngClass=\"accessPage\">\r\n    <p style=\"min-height:10vh\" ngClass=\"messageText\">{{getMessageText()}}</p>\r\n\r\n    <div *ngIf=\"showInputControls() === true\">\r\n    \r\n      <app-numpad \r\n        [codeLength]=\"4\"\r\n        [autoEnterLength]=\"0\" \r\n        (textEntered)=\"onEnterCode($event)\">\r\n      </app-numpad>\r\n  \r\n      <p>{{getTimeRemaining()}}</p>\r\n  \r\n    </div>  \r\n  </div>  \r\n  <app-footer></app-footer>  \r\n</div>-->\r\n\r\n<div style=\"height:100vh; display:flex; flex-direction: column;\">\r\n  <div style=\"height:15vh\">\r\n    <div id=\"more-or-lessBanner\"  >\r\n      <img id=\"more-or-lessBannerImg\" src=\"{{getBannerImage()}}\" alt='image'\r\n          style=\"height:100%; width: 100%\">\r\n    </div>\r\n  </div>\r\n  <div style=\"height:80vh; background-color: rgb(130, 164, 238); display: flex; flex-direction: column; align-items: center;\">\r\n    \r\n    <div style=\"min-height:10vh\" ngClass=\"messageText\">\r\n      {{getMessageText()}}\r\n    </div>\r\n\r\n    <div style=\"height:59vh; width:60vw\">\r\n\r\n      <div *ngIf=\"showInputControls() === true\" >\r\n\r\n        <app-numpad \r\n          [codeLength]=\"4\"\r\n          [autoEnterLength]=\"0\" \r\n          (textEntered)=\"onEnterCode($event)\">\r\n        </app-numpad>\r\n    \r\n        <div style=\"height:4vh\">\r\n          <app-countdown  [totalSecs]=\"cAuthenticationTimeout\" \r\n            [remainingSecs]=\"getTimeRemaining()\" \r\n            remainingQuestionSecs=\"0\"  >\r\n          </app-countdown>        \r\n        </div>\r\n    \r\n      </div>  \r\n\r\n      <div *ngIf=\"showGraphic() === true\"   >      \r\n        <img id=\"more-or-lessBannerImg\" src=\"{{getGraphicImage()}}\" alt='image'\r\n              style=\"height:100%; width: 100%\">    \r\n      </div>  \r\n\r\n    </div>\r\n\r\n\r\n\r\n\r\n   \r\n  </div>\r\n  <div style=\"height:5vh; background-color: rgb(88, 209, 77);\">\r\n    <div>\r\n      Footer\r\n    </div>    \r\n  </div>\r\n\r\n</div>\r\n  \r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n\r\n"

/***/ }),

/***/ "./src/app/views/access-code-login/access-code-login.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/views/access-code-login/access-code-login.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".messageText {\n  border-radius: 20px;\n  background: #d16a6a;\n  max-width: 80vw;\n  padding: 2vh;\n  font-size: 3vh;\n  margin: 1vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYWNjZXNzLWNvZGUtbG9naW4vRDpcXF9EYXRhXFxQcml2YXRlQ29kZVxcX2dpdFB6ZUtubVxcVHJlYXN1cmVIdW50XFxBbmd1bGFyU1BBXFxTYW5kZ2F0ZVRIL3NyY1xcYXBwXFx2aWV3c1xcYWNjZXNzLWNvZGUtbG9naW5cXGFjY2Vzcy1jb2RlLWxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9hY2Nlc3MtY29kZS1sb2dpbi9EOlxcX0RhdGFcXFByaXZhdGVDb2RlXFxfZ2l0UHplS25tXFxUcmVhc3VyZUh1bnRcXEFuZ3VsYXJTUEFcXFNhbmRnYXRlVEgvc3JjXFxhcHBcXHN0eWxlc1xcZ2VuZXJhbC1jb2xvdXJzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxtQkFBbUI7RUFDbkIsbUJDQTJDO0VEQzNDLGVBQWU7RUFFZixZQUFZO0VBQ1osY0FBYztFQUNkLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FjY2Vzcy1jb2RlLWxvZ2luL2FjY2Vzcy1jb2RlLWxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8vQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzLnNjc3MnO1xyXG5cclxuXHJcbkBpbXBvcnQgJy4uLy4uL3N0eWxlcy9nZW5lcmFsLWNvbG91cnMuc2Nzcyc7XHJcblxyXG4ubWVzc2FnZVRleHQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogJG1lc3NhZ2UtYmFja2dyb3VuZC1jb2xvcjtcclxuICBtYXgtd2lkdGg6IDgwdnc7XHJcbiAvLyBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICBwYWRkaW5nOiAydmg7XHJcbiAgZm9udC1zaXplOiAzdmg7XHJcbiAgbWFyZ2luOiAxdmg7XHJcbn0iLCIvLyBUaGUgcGxhY2Ugd2hlcmUgdGhlIGNvbG9yIHNjaGVtZSBmb3IgdGhlIG5vbi1nYW1lIHBhcnRzIG9mIHRoZSBhcHBcclxuXHJcblxyXG4kYm9keS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4kYmFubmVyLWJhY2tncm91bmQtY29sb3I6ICMwYzBkM2E7XHJcblxyXG5cclxuXHJcbiRtZXNzYWdlLWJhY2tncm91bmQtY29sb3I6IHJnYigyMDksIDEwNiwgMTA2KTtcclxuXHJcblxyXG5cclxuJGNvdW50ZG93bi1vdXRsaW5lLXN0cm9rZS1jb2xvcjogZ3JleTtcclxuJGNvdW50ZG93bi1vdXRsaW5lLWZpbGwtY29sb3I6ICNkNmY0ZmY7XHJcbiRjb3VudGRvd24tcmVtYWluaW5nLXN0cm9rZS1jb2xvcjogcmdiKDAsMCwwKTtcclxuJGNvdW50ZG93bi1yZW1haW5pbmctZmlsbC1jb2xvcjogIzdmYjBlMTtcclxuJGNvdW50ZG93bi1xdWVzdGlvbi1zdHJva2UtY29sb3I6IHJnYigwLDAsMCk7XHJcbiRjb3VudGRvd24tcXVlc3Rpb24tZmlsbC1jb2xvcjogIzVkN2E5ODtcclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/access-code-login/access-code-login.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/access-code-login/access-code-login.component.ts ***!
  \************************************************************************/
/*! exports provided: PageState, AccessCodeLoginView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageState", function() { return PageState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccessCodeLoginView", function() { return AccessCodeLoginView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_data_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-cache.service */ "./src/app/services/data-cache.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_watch_dog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/watch-dog.service */ "./src/app/services/watch-dog.service.ts");
/* harmony import */ var src_app_components_numpad_numpad_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components/numpad/numpad.component */ "./src/app/components/numpad/numpad.component.ts");







/**/
var PageState;
(function (PageState) {
    PageState["GameNotOnline"] = "GameNotOnline";
    PageState["GameBusy"] = "GameBusy";
    PageState["GenerateCode"] = "GenerateCode";
    PageState["EnterCode"] = "EnterCode";
    PageState["NoCodeGenerated"] = "NoCodeGenerated";
    PageState["CheckingCode"] = "CheckingCode";
    PageState["WrongCode"] = "WrongCode";
    PageState["TimedOut"] = "TimedOut";
})(PageState || (PageState = {}));
;
let AccessCodeLoginView = class AccessCodeLoginView {
    constructor(activatedRoute, router, dataCache, watchDogAuthenticationCountdown) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.dataCache = dataCache;
        this.watchDogAuthenticationCountdown = watchDogAuthenticationCountdown;
        /** Input variable so that test ui can set the state. mkmkmk change this to a setter */
        this.pageState = PageState.GenerateCode;
        this.game = undefined;
        // ID of TStation (game ID)
        this.gameId = undefined;
        // How long the page will wait for the user to key in the code. Set by server
        this.cAuthenticationTimeout = 30;
        // How long the page will wait for the server to come back with a new code.
        this.cGeneratingCodeTimeout = 10;
        // Whether the request to generate a code is still underway.
        this.accessCodeGenerationOutstanding = true;
        // the result of the request to generate the access code.
        this.accessCodeGenerationSuccessful = false;
        // For storing the subscription so that they can be cleaned up.
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.activatedRoute.params.subscribe(params => {
            this.gameId = params['GameId'];
        });
    }
    ngOnInit() {
        this.dataCache.getGameDetails(this.gameId).then((game) => {
            this.game = game;
            this.afterGameFound();
        });
        // Subscribe to the results of trying an access code.
        // this.subscriptions.add(
        //   this.dataCache.accessResult$.subscribe(
        //     data => {
        //       this.onAccessResultArrived(data);
        //   })
        // );
        // subscribe to any commands coming in from Station
        this.subscriptions.add(this.dataCache.clientMessages$.subscribe(cm => {
            this.processClientMessage(cm);
        }));
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    afterGameFound() {
        if (this.game === undefined) {
            return;
        }
        if (this.game.status === 'Online_Ready' ||
            this.game.status === 'Online_Demo' ||
            this.game.status === 'Online_Dormant') {
            this.askServerForAccessCode();
        }
        else {
            if (this.game.status === 'Authenticating' || this.game.status === 'PreGame' ||
                this.game.status === 'GamePlaying' || this.game.status === 'PostGame') {
                this.pageState = PageState.GameBusy;
            }
            if (this.game.status === 'Deactivated') {
                this.pageState = PageState.GameNotOnline;
            }
        }
    }
    askServerForAccessCode() {
        console.log('AccesCode: enter askServerForAccessCode');
        // Subscribe to the results of asking for an access code.
        this.accessCodeGenerationOutstanding = true;
        this.accessCodeGenerationSuccessful = false;
        this.subscriptions.add(this.dataCache.askServerForNewAccessCodeResult$.subscribe(result => {
            console.log('AccesCode: askServerForNewAccessCodeResult$ has returned: ' + result);
            this.accessCodeGenerationOutstanding = false;
            if (result === true) {
                // The request to generate the code was accepted, but isn't yet updated
                // this.pageState = "EnterCode";
                // this.accessCodeGenerationSuccessful = true;
            }
            else {
                this.accessCodeGenerationSuccessful = false;
                this.pageState = PageState.NoCodeGenerated;
                // Navigate to home page
                //     this.router.navigate(['/'])
            }
        }));
        // Then kick off the request
        this.dataCache.askServerForNewAccessCode(this.game.id);
        this.pageState = PageState.GenerateCode;
        this.subscriptions.add(this.watchDogAuthenticationCountdown.expired$.subscribe(() => {
            this.watchDogBites_Timeout();
        }));
        this.watchDogAuthenticationCountdown.start(this.cGeneratingCodeTimeout);
    }
    getMessageText() {
        if (this.pageState === PageState.GameNotOnline) {
            return 'It looks like the game isn\'t online right now :-(';
        }
        if (this.pageState === PageState.GameBusy) {
            return 'It looks like the game is busy with someone else right now :-(';
        }
        if (this.pageState === PageState.GenerateCode) {
            return 'Generating access code for station.....';
        }
        if (this.pageState === PageState.NoCodeGenerated) {
            return 'No code generated.....';
        }
        if (this.pageState === PageState.WrongCode) {
            return 'Wrong code. Try again.';
        }
        if (this.pageState === PageState.CheckingCode) {
            return 'Checking code...';
        }
        if (this.pageState === PageState.TimedOut) {
            return 'Timed out. Go back to Home page';
        }
        if (this.pageState === PageState.EnterCode || this.pageState === PageState.WrongCode) {
            return 'Enter access code';
        }
        return 'who knows';
    }
    showInputControls() {
        return (this.pageState === PageState.EnterCode ||
            this.pageState === PageState.WrongCode ||
            this.pageState === PageState.CheckingCode);
    }
    showGraphic() {
        return (this.showInputControls() === false);
    }
    getBannerImage() {
        if (this.gameId !== undefined) {
            if (this.gameId === '141e3cd9-0002-4079-bc1e-5a8aa213098b') {
                return 'assets/images/more-or-less-banner-logo.svg';
            }
        }
        return 'assets/images/game-logo-banner.svg';
    }
    getGraphicImage() {
        if (this.pageState == PageState.GameNotOnline) {
            return 'assets/images/out-of-order.jpg';
        }
        if (this.pageState == PageState.GameBusy) {
            return 'assets/images/engaged.jpg';
        }
        if (this.pageState == PageState.GenerateCode) {
            return 'assets/images/generate-code.jpg';
        }
        if (this.pageState == PageState.NoCodeGenerated) {
            return 'assets/images/out-of-order.jpg';
        }
        if (this.pageState == PageState.TimedOut) {
            return 'assets/images/out-of-time.jpg';
        }
        return 'assets/images/out-of-order.jpg';
    }
    onEnterCode(code) {
        if (this.game === undefined) {
            return;
        }
        this.dataCache.checkAccessCode2(this.game.id, code).then((correctCode) => {
            if (correctCode === true) {
                this.router.navigate(['/GameUI', this.game.id]);
                console.log('Yay!');
            }
            else {
                this.pageState = PageState.WrongCode;
                // this.watchDog.restart();
                this.numpad.reset();
            }
        });
        // this.dataCache.checkAccessCode(this.game.id, code);    
        // this.pageState = PageState.CheckingCode;
    }
    // onAccessResultArrived(dto: AccessResultDto) {
    //   if(!dto ) {
    //     return;
    //   }
    //   if(dto.success === true) {
    //     this.router.navigate(['/GameUI', this.game.id]);
    //     console.log('Yay!');
    //   } else {
    //     this.pageState = PageState.WrongCode;
    //     // this.watchDog.restart();
    //     this.numpad.reset();
    //   }
    // }
    getTimeRemaining() {
        return this.watchDogAuthenticationCountdown.currentCount;
    }
    watchDogBites_Timeout() {
        this.pageState = PageState.TimedOut;
    }
    processClientMessage(cm) {
        console.log(cm);
        if (cm.command === 'AuthenticationTimeout') {
            this.pageState = PageState.EnterCode;
            this.accessCodeGenerationSuccessful = true;
            this.cAuthenticationTimeout = Number(cm.parameters);
            this.watchDogAuthenticationCountdown.start(this.cAuthenticationTimeout);
            return;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], AccessCodeLoginView.prototype, "pageState", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_components_numpad_numpad_component__WEBPACK_IMPORTED_MODULE_6__["NumpadComponent"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_components_numpad_numpad_component__WEBPACK_IMPORTED_MODULE_6__["NumpadComponent"])
], AccessCodeLoginView.prototype, "numpad", void 0);
AccessCodeLoginView = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-access-code-login',
        template: __webpack_require__(/*! ./access-code-login.component.html */ "./src/app/views/access-code-login/access-code-login.component.html"),
        styles: [__webpack_require__(/*! ./access-code-login.component.scss */ "./src/app/views/access-code-login/access-code-login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_data_cache_service__WEBPACK_IMPORTED_MODULE_3__["DataCacheService"],
        src_app_services_watch_dog_service__WEBPACK_IMPORTED_MODULE_5__["WatchDogService"]])
], AccessCodeLoginView);



/***/ }),

/***/ "./src/app/views/admin-view/admin-view.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/admin-view/admin-view.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div ngClass=\"container\" >\r\n\r\n  <app-header></app-header>\r\n  <alert></alert>\r\n  \r\n  <!--Content-->\r\n  \r\n  \r\n\r\n<!--\r\n<ng-container  *ngFor=\"let u of users\">\r\n   <div>\r\n    <strong>{{u.id}}</strong>  -     \r\n      <strong>{{u.name}}</strong>  -  \r\n      <em>{{u.userAgent}}</em>  - \r\n      <div>IP: {{u.ipAddr}}</div>      \r\n      <div>(Last Contact  {{u.lastContactDate}} )</div>\r\n      <hr>\r\n  </div>\r\n</ng-container>\r\n -->\r\n\r\n  \r\n  <app-footer></app-footer>\r\n  \r\n</div>\r\n  \r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/views/admin-view/admin-view.component.scss":
/*!************************************************************!*\
  !*** ./src/app/views/admin-view/admin-view.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2FkbWluLXZpZXcvYWRtaW4tdmlldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/admin-view/admin-view.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/admin-view/admin-view.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminViewComponent", function() { return AdminViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_data_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-cache.service */ "./src/app/services/data-cache.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_visualisation_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/visualisation-data.service */ "./src/app/services/visualisation-data.service.ts");





let AdminViewComponent = class AdminViewComponent {
    constructor(dataCache) {
        this.dataCache = dataCache;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.users = [];
        this.amount = '';
    }
    ngOnInit() {
        this.subscriptions.add(this.dataCache.users$.subscribe(response => {
            this.users = response;
        }));
        this.subscriptions.add(this.dataCache.currentUser$.subscribe(response => {
            this.currentUser = response;
        }));
        this.dataCache.refreshCurrentUser();
        this.vizData = new src_app_services_visualisation_data_service__WEBPACK_IMPORTED_MODULE_4__["VisualisationData"]();
        this.vizData.accessCode = 1234;
        this.vizData.internalState = 'DisplayAnswer';
        this.vizData.score = 24;
        this.vizData.currentQuestion = new src_app_services_visualisation_data_service__WEBPACK_IMPORTED_MODULE_4__["Question"]();
        this.vizData.currentQuestion.questionText = 'When was the Battle of Hastings?';
        this.vizData.currentQuestion.answer = 1066;
        this.vizData.currentQuestionMin = 1016;
        this.vizData.currentQuestionMax = 1278;
        this.vizData.currentAnswerLo = 1047;
        this.vizData.currentAnswerHi = 1122;
        this.vizData.totalGameSecs = 60;
        this.vizData.remainingSecs = 40;
        this.vizData.remainingQuestionSecs = 5;
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    onCodeEntered(s) {
        console.log('try using ' + s);
    }
};
AdminViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-view',
        template: __webpack_require__(/*! ./admin-view.component.html */ "./src/app/views/admin-view/admin-view.component.html"),
        styles: [__webpack_require__(/*! ./admin-view.component.scss */ "./src/app/views/admin-view/admin-view.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_cache_service__WEBPACK_IMPORTED_MODULE_2__["DataCacheService"]])
], AdminViewComponent);



/***/ }),

/***/ "./src/app/views/game-ui/game-ui.component.html":
/*!******************************************************!*\
  !*** ./src/app/views/game-ui/game-ui.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div style=\"height:100vh; display:flex; flex-direction: column;\">\r\n  <div style=\"height:15vh\">\r\n    <div id=\"more-or-lessBanner\"  >\r\n      <img id=\"more-or-lessBannerImg\" src=\"{{getBannerImage()}}\" alt='image'\r\n          style=\"height:100%; width: 100%\">\r\n    </div>\r\n  </div>\r\n  <div style=\"height:80vh; background-color: rgb(130, 164, 238); display: flex; flex-direction: column; align-items: center;\">\r\n    \r\n    <div *ngIf=\"gameState === 'PreGame'\"   >\r\n      <app-pre-game  (command)=\"sendCommandToStation($event)\"></app-pre-game>\r\n    </div>\r\n    \r\n    <div *ngIf=\"gameState === 'Playing'\">\r\n      <div  *ngIf=\"getStationID() === 'Station001'\">\r\n    \r\n        <div class=\"container\" fxLayout=\"row\" fxLayoutGap=\"15px\">\r\n          <button [disabled]=\"started\" fxFlex fxFlexAlign=\"start\" class=\"mat-raised-button\" \r\n            (click)=\"sendCommandToStation('Left')\">Left</button>\r\n          <button [disabled]=\"started\" fxFlex fxFlexAlign=\"start\" class=\"mat-raised-button mat-primary\" \r\n            (click)=\"sendCommandToStation('Right')\">Right</button>\r\n        </div>  \r\n      </div>\r\n      \r\n      <div  *ngIf=\"getStationID() === 'Station002'\">\r\n        <app-more-or-less \r\n          (command)=\"sendCommandToStation($event)\" \r\n          [score]=\"score\"   >\r\n        </app-more-or-less>\r\n      </div>\r\n    </div>\r\n    \r\n    <div *ngIf=\"gameState === 'GameOver'\"   >\r\n      <app-game-over\r\n        [score]=\"score\"    >\r\n      </app-game-over> \r\n    </div>\r\n      \r\n  </div>  \r\n   \r\n \r\n  <div style=\"height:5vh; background-color: rgb(88, 209, 77);\">\r\n    <div>\r\n      Footer\r\n    </div>    \r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/views/game-ui/game-ui.component.scss":
/*!******************************************************!*\
  !*** ./src/app/views/game-ui/game-ui.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2dhbWUtdWkvZ2FtZS11aS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/game-ui/game-ui.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/game-ui/game-ui.component.ts ***!
  \****************************************************/
/*! exports provided: GameUIView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameUIView", function() { return GameUIView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_data_cache_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-cache.service */ "./src/app/services/data-cache.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let GameUIView = class GameUIView {
    constructor(activatedRoute, router, dataCache) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.dataCache = dataCache;
        this.game = undefined;
        // PreGame, Playing, GameOver
        this.gameState = 'PreGame';
        this.score = 0;
        this.remainingTime = 999;
        // For storing the subscription so that they can be cleaned up.
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.activatedRoute.params.subscribe(params => {
            let id = params['GameId'];
            this.gameId = id;
        });
    }
    ngOnInit() {
        if (this.gameId === undefined) {
            return;
        }
        // Check that game Token is valid
        if (!this.dataCache.hasValidGameToken(this.gameId)) {
            this.router.navigate(['/AccessCode', this.gameId]);
        }
        this.dataCache.clientMessages$.subscribe(cm => {
            this.processClientMessage(cm);
        });
        this.gameState = 'PreGame';
        this.dataCache.getGameDetails(this.gameId).then((game) => {
            this.game = game;
        });
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    getStationID() {
        if (this.gameId === '141e3cd9-0002-4079-bc1e-5a8aa213098b') {
            return 'Station002';
        }
        return 'Station001';
    }
    sendCommandToStation(cmd) {
        console.log(cmd);
        if (cmd === 'BeginGame') {
            this.gameState = 'Playing';
        }
        this.dataCache.sendCommandToGame(this.gameId, cmd, '');
    }
    processClientMessage(cm) {
        if (cm.command == 'TimeRemaining') {
            this.remainingTime = Number(cm.parameters);
            return;
        }
        if (cm.command == 'NewScore') {
            this.score = Number(cm.parameters);
            return;
        }
        if (cm.command == 'GameOver') {
            this.gameOver();
            return;
        }
        if (cm.command == 'ClientDetached') {
            this.clientDetached();
            return;
        }
        console.log(cm);
    }
    gameOver() {
        console.log('gameOver');
        this.gameState = 'GameOver';
    }
    clientDetached() {
        this.gameOver();
    }
    getBannerImage() {
        if (this.gameId !== undefined) {
            if (this.gameId === '141e3cd9-0002-4079-bc1e-5a8aa213098b') {
                return 'assets/images/more-or-less-banner-logo.svg';
            }
        }
        return 'assets/images/game-logo-banner.svg';
    }
};
GameUIView = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game-ui',
        template: __webpack_require__(/*! ./game-ui.component.html */ "./src/app/views/game-ui/game-ui.component.html"),
        styles: [__webpack_require__(/*! ./game-ui.component.scss */ "./src/app/views/game-ui/game-ui.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_data_cache_service__WEBPACK_IMPORTED_MODULE_3__["DataCacheService"]])
], GameUIView);



/***/ }),

/***/ "./src/app/views/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/views/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div ngClass=\"container\" >\r\n\r\n  <app-header></app-header>\r\n  <alert></alert>\r\n  \r\n  <!--Content-->\r\n  <div style=\"font-size: 3vh;\"> The following games are available: </div>\r\n\r\n  <ng-container  *ngFor=\"let g of games\">\r\n      <app-game-summary \r\n        [gameSummary]=\"g\">\r\n      </app-game-summary  >\r\n  </ng-container>\r\n\r\n  \r\n  <app-footer></app-footer>\r\n  \r\n</div>\r\n  \r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/views/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/views/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_data_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-cache.service */ "./src/app/services/data-cache.service.ts");
/* harmony import */ var src_app_services_watch_dog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/watch-dog.service */ "./src/app/services/watch-dog.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let HomeComponent = class HomeComponent {
    constructor(dataCache, watchDogRefresh) {
        this.dataCache = dataCache;
        this.watchDogRefresh = watchDogRefresh;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.games = [];
        this.cAutoRefreshStationsTimeout = 30;
    }
    ngOnInit() {
        this.subscriptions.add(this.dataCache.games$.subscribe(response => {
            this.games = response;
            console.log(this.games);
        }));
        this.subscriptions.add(this.watchDogRefresh.expired$.subscribe(() => {
            this.watchDogRefresh_Timeout();
        }));
        this.dataCache.refreshStations();
        this.watchDogRefresh.start(this.cAutoRefreshStationsTimeout);
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    watchDogRefresh_Timeout() {
        this.dataCache.refreshStations();
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! ./home.component.html */ "./src/app/views/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/views/home/home.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_cache_service__WEBPACK_IMPORTED_MODULE_2__["DataCacheService"],
        src_app_services_watch_dog_service__WEBPACK_IMPORTED_MODULE_3__["WatchDogService"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/views/ui-view/ui-view.component.html":
/*!******************************************************!*\
  !*** ./src/app/views/ui-view/ui-view.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div ngClass=\"container\" >\r\n\r\n  <app-header></app-header>\r\n  <alert></alert>\r\n  \r\n  <!--Content-->\r\n  \r\n  \r\n\r\n\r\n<p ngClass=\"text\"  >\r\n  A convenient place to test the UI styling:\r\n</p>\r\n\r\n<button (click)=\"doTest()\">Test!</button>\r\n\r\n\r\n<hr>\r\n\r\n<!-- \r\n<app-home>  \r\n</app-home>\r\n\r\n<app-more-or-less> \r\n</app-more-or-less>\r\n \r\n<hr>\r\n\r\n<app-numpad \r\n    [autoEnterLength]=\"4\"\r\n    (textEntered)=\"onCodeEntered($event)\">\r\n</app-numpad>\r\n-->\r\n\r\n<!--   // GameNotOnline, GameBusy, GenerateCode, EnterCode, \r\n  NoCodeGenerated, CheckingCode, WrongCode, TimedOut\r\n   -->\r\n<br>\r\n\r\n\r\n<!-- -->\r\n<app-access-code-login\r\n  pageState=\"GenerateCode\">\r\n</app-access-code-login>\r\n\r\n<br>\r\n\r\n<app-access-code-login\r\n  pageState=\"GameNotOnline\">\r\n</app-access-code-login>\r\n\r\n<br>\r\n\r\n<app-access-code-login\r\n  pageState=\"GameBusy\">\r\n</app-access-code-login>\r\n \r\n<br>\r\n\r\n<app-access-code-login\r\n  pageState=\"EnterCode\">\r\n</app-access-code-login>\r\n\r\n<hr>\r\n\r\n60/60 - 15\r\n<div style=\"height: 5vh; width:100%\">\r\n  <app-countdown  [totalSecs]=\"60\" \r\n                  [remainingSecs]=\"60\" \r\n                  [remainingQuestionSecs]=\"15\"  >\r\n  </app-countdown>    \r\n</div>\r\n\r\n<br>\r\n\r\n59/60 - 15\r\n<div style=\"height: 5vh; width:100%\">\r\n  <app-countdown  [totalSecs]=\"60\" \r\n                  [remainingSecs]=\"59\" \r\n                  [remainingQuestionSecs]=\"0\"  >\r\n  </app-countdown>    \r\n</div>\r\n\r\n<br>\r\n\r\n50/100 - 25\r\n<div style=\"height: 5vh; width:100%\">\r\n  <app-countdown  [totalSecs]=\"100\" \r\n                  [remainingSecs]=\"50\" \r\n                  [remainingQuestionSecs]=\"25\"  >\r\n  </app-countdown>    \r\n</div>\r\n\r\n<br>\r\n\r\n1/100 - 25\r\n<div style=\"height: 5vh; width:100%\">\r\n  <app-countdown  [totalSecs]=\"100\" \r\n                  [remainingSecs]=\"1\" \r\n                  [remainingQuestionSecs]=\"0\"  >\r\n  </app-countdown>    \r\n</div>\r\n\r\n<br>\r\n\r\n0/100 - 25\r\n<div style=\"height: 5vh; width:100%\">\r\n  <app-countdown  [totalSecs]=\"100\" \r\n                  [remainingSecs]=\"0\" \r\n                  [remainingQuestionSecs]=\"0\"  >\r\n  </app-countdown>    \r\n</div>\r\n\r\n<br>\r\n<!--  \r\n<div style=\"height: 5vh; width:100%\">\r\n  <app-countdown  [totalSecs]=\"vizData.totalGameSecs\" \r\n                  [remainingSecs]=\"vizData.remainingSecs\" \r\n                  [remainingQuestionSecs]=\"vizData.remainingQuestionSecs\"  >\r\n  </app-countdown>    \r\n</div>\r\n-->\r\n<hr>\r\n<br>\r\n\r\n<app-access-code-login\r\n  pageState=\"NoCodeGenerated\">\r\n</app-access-code-login>\r\n\r\n<br>\r\n\r\n<app-access-code-login\r\n  pageState=\"CheckingCode\">\r\n</app-access-code-login>\r\n\r\n<br>\r\n\r\n<app-access-code-login\r\n  pageState=\"WrongCode\">\r\n</app-access-code-login>\r\n\r\n<br>\r\n\r\n<app-access-code-login\r\n  pageState=\"TimedOut\">\r\n</app-access-code-login>\r\n<!--  -->\r\n\r\n<br>\r\n\r\n<app-game-ui>\r\n\r\n</app-game-ui>\r\n<br>\r\n\r\n\r\n<app-more-or-less\r\n  score=\"42\">\r\n</app-more-or-less> \r\n  \r\n  <app-footer></app-footer>\r\n  \r\n</div>\r\n  \r\n  \r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/views/ui-view/ui-view.component.scss":
/*!******************************************************!*\
  !*** ./src/app/views/ui-view/ui-view.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3VpLXZpZXcvdWktdmlldy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/views/ui-view/ui-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/ui-view/ui-view.component.ts ***!
  \****************************************************/
/*! exports provided: UiViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiViewComponent", function() { return UiViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_data_cache_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data-cache.service */ "./src/app/services/data-cache.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_visualisation_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/visualisation-data.service */ "./src/app/services/visualisation-data.service.ts");
/* harmony import */ var src_app_services_global_error_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/global-error-handler */ "./src/app/services/global-error-handler.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");







let UiViewComponent = class UiViewComponent {
    constructor(dataCache) {
        this.dataCache = dataCache;
        this.subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.users = [];
        this.amount = '';
    }
    ngOnInit() {
        this.subscriptions.add(this.dataCache.users$.subscribe(response => {
            this.users = response;
        }));
        this.subscriptions.add(this.dataCache.currentUser$.subscribe(response => {
            this.currentUser = response;
        }));
        this.dataCache.refreshCurrentUser();
        this.vizData = new src_app_services_visualisation_data_service__WEBPACK_IMPORTED_MODULE_4__["VisualisationData"]();
        this.vizData.accessCode = 1234;
        this.vizData.internalState = 'DisplayAnswer';
        this.vizData.score = 24;
        this.vizData.currentQuestion = new src_app_services_visualisation_data_service__WEBPACK_IMPORTED_MODULE_4__["Question"]();
        this.vizData.currentQuestion.questionText = 'When was the Battle of Hastings?';
        this.vizData.currentQuestion.answer = 1066;
        this.vizData.currentQuestionMin = 1016;
        this.vizData.currentQuestionMax = 1278;
        this.vizData.currentAnswerLo = 1047;
        this.vizData.currentAnswerHi = 1122;
        this.vizData.totalGameSecs = 60;
        this.vizData.remainingSecs = 40;
        this.vizData.remainingQuestionSecs = 5;
    }
    ngOnDestroy() {
        this.subscriptions.unsubscribe();
    }
    onCodeEntered(s) {
        console.log('try using ' + s);
    }
    doTest() {
        /*
        try {
          throw new Error('An error occurred');
         }
         catch (error) {
          console.error('Here is the error message', error);
         }
         console.log('Execution continues');
    
         throw new Error('Another error occurred');
    */
        //const obj = JSON.parse('{ "name": "John", "age": 30 }}');  
        //   const s = new SyntaxError('fdsdsf');
        // FormControl
        // throw new MyValidationError('Another error occurred', 'fdsfds');
        //  try {
        throw new src_app_services_global_error_handler__WEBPACK_IMPORTED_MODULE_5__["MyAssertionError"]('this should not happen');
        const err = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpErrorResponse"]({
            error: 'My error',
            status: 499,
            statusText: 'hhtp error of some kind'
        });
        const c1 = (( /** @type {?} */(err)))["ngDebugContext"];
        // err["ngDebugContext"]='Dont overwrite me!';
        const c2 = (( /** @type {?} */(err)))["ngDebugContext"];
        if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpErrorResponse"]) {
            console.log('Its a HttpErrorResponse Error');
        }
        if (err instanceof Error) {
            console.log('Its a Error Error');
        }
        const synErr = new SyntaxError('gfdgfg');
        if (synErr instanceof SyntaxError) {
            console.log('Its a SyntaxError Error');
        }
        if (synErr instanceof Error) {
            console.log('Its a Error Error');
        }
        throw err;
        //  }
        /*
        catch (e) {
          if (e instanceof HttpErrorResponse) {
            console.log('Its a HttpErrorResponse Error');
            throw e;
          }
      
          if (e instanceof Error) {
            console.log('Its a Error');
          }
        }*/
        // throw new MySimpleError('A simple error');
        try {
            throw new src_app_services_global_error_handler__WEBPACK_IMPORTED_MODULE_5__["MyValidationError"]('Another error occurred', 'fdsfds');
            //  const obj = JSON.parse('{ "name": "John", "age": 30 }}');    
            //  console.log(obj);
        }
        catch (err) {
            if (err instanceof src_app_services_global_error_handler__WEBPACK_IMPORTED_MODULE_5__["MyValidationError"]) {
                console.log('Its a Validation Error');
            }
            if (err instanceof SyntaxError) {
                console.log('Its a Syntax Error');
            }
        }
    }
};
UiViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'ui-admin-view',
        template: __webpack_require__(/*! ./ui-view.component.html */ "./src/app/views/ui-view/ui-view.component.html"),
        styles: [__webpack_require__(/*! ./ui-view.component.scss */ "./src/app/views/ui-view/ui-view.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_cache_service__WEBPACK_IMPORTED_MODULE_2__["DataCacheService"]])
], UiViewComponent);



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    timeStamp: '01/10/2020 09:24:11 AM AEST',
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\_Data\PrivateCode\_gitPzeKnm\TreasureHunt\AngularSPA\SandgateTH\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map