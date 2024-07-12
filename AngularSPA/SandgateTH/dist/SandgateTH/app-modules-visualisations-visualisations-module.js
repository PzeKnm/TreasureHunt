(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-visualisations-visualisations-module"],{

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



/***/ })

}]);
//# sourceMappingURL=app-modules-visualisations-visualisations-module.js.map