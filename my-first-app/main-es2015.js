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

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var creditcardpayments_creditCardPayments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! creditcardpayments/creditCardPayments */ "./node_modules/creditcardpayments/creditCardPayments.js");
/* harmony import */ var _services_mail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/mail.service */ "./src/app/services/mail.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function AboutComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AboutComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " invalid email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AboutComponent_p_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " at least write some words (20 characters length) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AboutComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " send ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function AboutComponent_ng_template_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { hidden: a0 }; };
// export class AboutComponent implements OnInit {
//   constructor() { }
//   ngOnInit() {
//   }
class AboutComponent {
    constructor(mailService) {
        this.mailService = mailService;
        this.color = '';
        this.showAlert = false;
        this.alertMessage = '';
        this.onSubmit = false;
        this.contactFormValues = {
            name: '',
            email: '',
            body: '',
        };
        Object(creditcardpayments_creditCardPayments__WEBPACK_IMPORTED_MODULE_2__["render"])({
            id: "#myPaypalButtons",
            currency: "USD",
            value: "1.00",
            onApprove: (details) => {
                alert("This would also send an email to the seller about the transaction and the info involved! \nhttps://www.youtube.com/watch?v=-HeadgoqJ7A");
            }
        });
    } //
    get alertColor() {
        return `text-${this.color}-400`;
    }
    hideAlert() {
        setTimeout(() => {
            this.showAlert = false;
        }, 5000);
    }
    submitEmail(contactForm) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.onSubmit = true;
            // -- set formData values
            let formData = new FormData();
            formData.append('name', this.contactFormValues.name);
            formData.append('email', this.contactFormValues.email);
            formData.append('body', this.contactFormValues.body);
            // -- email customization
            formData.append('access_key', "9eb85861-2991-4d54-b6b3-95d5c56c6ba0");
            formData.append('subject', 'Email Support From Your Site');
            formData.append('from_name', 'Contact Notification');
            try {
                // -- send email
                const res = yield this.mailService.sendEmail(formData);
                if (!res.ok) {
                    throw new Error();
                }
                this.alertMessage = 'Email sent successfully!';
                this.color = 'green';
                contactForm.reset();
            }
            catch (err) {
                // handle error
                this.alertMessage = 'Something went wrong, try again later!';
                this.color = 'red';
            }
            // -- reset submit and hide alert
            this.onSubmit = false;
            this.showAlert = true;
            this.hideAlert();
        });
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_mail_service__WEBPACK_IMPORTED_MODULE_3__["MailService"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 28, vars: 14, consts: [[1, "container", "video-body"], [1, "row"], [1, "col"], ["src", "../../assets/images/SmithEnsemblePics/SmithEnsemble-About.jpg", 1, "center"], [1, "mt-8"], [1, "flex", "flex-col", "gap-3", 3, "ngSubmit"], ["contactForm", "ngForm"], ["name", "name", "type", "text", "placeholder", "Full Name", "required", "", "minlength", "2", 1, "w-full", "p-2", "border", "border-gray-200", "rounded-md", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "ml-1 text-red-400 text-sm", 4, "ngIf"], ["name", "email", "type", "email", "placeholder", "Email", "required", "", "pattern", "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", 1, "w-full", "p-2", "border", "border-gray-200", "rounded-md", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["name", "body", "cols", "30", "rows", "10", "placeholder", "Message", "required", "", "minlength", "20", 1, "w-full", "p-2", "border", "border-gray-200", "rounded-md", 3, "ngModel", "ngModelChange"], ["body", "ngModel"], [3, "ngClass"], [1, "font-semibold", 3, "ngClass"], [1, "p-2", "rounded-md", "font-bold", "uppercase", "text-white", "bg-light-color", "hover:bg-primary-color", "transition", "disabled:opacity-50", "disabled:bg-light-color", 3, "disabled"], [4, "ngIf", "ngIfElse"], ["submittingEmail", ""], [1, "ml-1", "text-red-400", "text-sm"], [1, "animate-spin"], [1, "fa-solid", "fa-rotate-right"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AboutComponent_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8); return ctx.submitEmail(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AboutComponent_Template_input_ngModelChange_10_listener($event) { return ctx.contactFormValues.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, AboutComponent_p_12_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AboutComponent_Template_input_ngModelChange_14_listener($event) { return ctx.contactFormValues.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AboutComponent_p_16_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "textarea", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AboutComponent_Template_textarea_ngModelChange_18_listener($event) { return ctx.contactFormValues.body = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, AboutComponent_p_20_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, AboutComponent_ng_container_25_Template, 2, 0, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, AboutComponent_ng_template_26_Template, 2, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.contactFormValues.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.errors && _r1.touched && _r1.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.contactFormValues.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r3.errors && _r3.touched && _r3.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.contactFormValues.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r5.errors && _r5.touched && _r5.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, !ctx.showAlert));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.alertColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.alertMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.invalid || ctx.onSubmit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.onSubmit === false)("ngIfElse", _r8);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: [".container[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    text-align: center;\r\n    \r\n    background-color: #f5f5f5;\r\n\r\n    padding-bottom: 2em;\r\n    margin-bottom:2em;\r\n    margin-top:4em;\r\n\r\n  } \r\n\r\n  .row[_ngcontent-%COMP%]{\r\n    margin: 4em;\r\n  } \r\n\r\n  h3[_ngcontent-%COMP%]{\r\n    margin-top: 2em;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7O0lBRWxCLHlCQUF5Qjs7SUFFekIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixjQUFjOztFQUVoQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcblxyXG4gICAgcGFkZGluZy1ib3R0b206IDJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206MmVtO1xyXG4gICAgbWFyZ2luLXRvcDo0ZW07XHJcblxyXG4gIH0gXHJcblxyXG4gIC5yb3d7XHJcbiAgICBtYXJnaW46IDRlbTtcclxuICB9XHJcblxyXG4gIGgze1xyXG4gICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return [{ type: _services_mail_service__WEBPACK_IMPORTED_MODULE_3__["MailService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");





class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "head"], [1, "footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "main-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer", 1);
    } }, directives: [_main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_1__["MainNavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Yesteryear&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap')[_ngcontent-%COMP%];\r\n.footer[_ngcontent-%COMP%]{\r\n    margin-top: auto;\r\n    padding-top: 1em;\r\n    \r\n}\r\narticle[_ngcontent-%COMP%] {\r\n  font-family: \"Tangerine\", cursive;\r\n  font-weight: 400;\r\n  font-style: normal;\r\n}\r\n[_nghost-%COMP%] {\r\n    display: flex;\r\n    min-height: 100%; \r\n    flex-direction: column;\r\n  }\r\n.Site-content[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n  }\r\nh1[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n.head[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    padding-bottom: 1em;\r\n  }\r\napp-footer[_ngcontent-%COMP%]{\r\n    background-color: #725325;\r\n    color: white;\r\n  }\r\nmain-nav[_ngcontent-%COMP%]{\r\n    z-index: 5;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0VBQStFO0FBQy9FLDJGQUEyRjtBQUkzRjtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7O0FBRXBCO0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixzQkFBc0I7RUFDeEI7QUFFQTtJQUNFLE9BQU87RUFDVDtBQUVGO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCO0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtFQUNkO0FBRUE7SUFDRSxVQUFVO0VBQ1oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVllc3RlcnllYXImZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVRhbmdlcmluZTp3Z2h0QDQwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcblxyXG5cclxuXHJcbi5mb290ZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDFlbTtcclxuICAgIFxyXG59XHJcblxyXG5hcnRpY2xlIHtcclxuICBmb250LWZhbWlseTogXCJUYW5nZXJpbmVcIiwgY3Vyc2l2ZTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7IFxyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLlNpdGUtY29udGVudCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuXHJcbmgxe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5oZWFke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gIH1cclxuXHJcbiAgYXBwLWZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MjUzMjU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICBtYWluLW5hdntcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgfVxyXG4gICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _ensemble_ensemble_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ensemble/ensemble.component */ "./src/app/ensemble/ensemble.component.ts");
/* harmony import */ var _smithsix_smithsix_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./smithsix/smithsix.component */ "./src/app/smithsix/smithsix.component.ts");
/* harmony import */ var _videos_videos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./videos/videos.component */ "./src/app/videos/videos.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./icons/icons.component */ "./src/app/icons/icons.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main-nav/main-nav.component */ "./src/app/main-nav/main-nav.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _smithsixlinks_smithsixlinks_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./smithsixlinks/smithsixlinks.component */ "./src/app/smithsixlinks/smithsixlinks.component.ts");
/* harmony import */ var _smithensemblelinks_smithensemblelinks_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./smithensemblelinks/smithensemblelinks.component */ "./src/app/smithensemblelinks/smithensemblelinks.component.ts");
/* harmony import */ var _icons_smithsix_icons_smithsix_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./icons-smithsix/icons-smithsix.component */ "./src/app/icons-smithsix/icons-smithsix.component.ts");
/* harmony import */ var _buy_cds_buy_cds_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./buy-cds/buy-cds.component */ "./src/app/buy-cds/buy-cds.component.ts");
/* harmony import */ var _buy_cds_info_buy_cds_info_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./buy-cds-info/buy-cds-info.component */ "./src/app/buy-cds-info/buy-cds-info.component.ts");
/* harmony import */ var _buy_cds_cart_buy_cds_cart_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./buy-cds-cart/buy-cds-cart.component */ "./src/app/buy-cds-cart/buy-cds-cart.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
































// import { NgxPayPalModule } from 'ngx-paypal';
const appRoutes = [
    { path: '', component: _ensemble_ensemble_component__WEBPACK_IMPORTED_MODULE_6__["EnsembleComponent"] },
    { path: 'ensemble', component: _ensemble_ensemble_component__WEBPACK_IMPORTED_MODULE_6__["EnsembleComponent"] },
    { path: 'smithsix', component: _smithsix_smithsix_component__WEBPACK_IMPORTED_MODULE_7__["SmithsixComponent"] },
    { path: 'buy-cds', component: _buy_cds_buy_cds_component__WEBPACK_IMPORTED_MODULE_26__["BuyCdsComponent"] },
    { path: 'videos', component: _videos_videos_component__WEBPACK_IMPORTED_MODULE_8__["VideosComponent"] },
    { path: 'contact-us', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_29__["ContactUsComponent"] }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__["LayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _ensemble_ensemble_component__WEBPACK_IMPORTED_MODULE_6__["EnsembleComponent"],
        _smithsix_smithsix_component__WEBPACK_IMPORTED_MODULE_7__["SmithsixComponent"],
        _videos_videos_component__WEBPACK_IMPORTED_MODULE_8__["VideosComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
        _icons_icons_component__WEBPACK_IMPORTED_MODULE_13__["IconsComponent"],
        _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_15__["MainNavComponent"],
        _smithsixlinks_smithsixlinks_component__WEBPACK_IMPORTED_MODULE_23__["SmithsixlinksComponent"],
        _smithensemblelinks_smithensemblelinks_component__WEBPACK_IMPORTED_MODULE_24__["SmithensemblelinksComponent"],
        _icons_smithsix_icons_smithsix_component__WEBPACK_IMPORTED_MODULE_25__["IconsSmithsixComponent"],
        _buy_cds_buy_cds_component__WEBPACK_IMPORTED_MODULE_26__["BuyCdsComponent"],
        _buy_cds_info_buy_cds_info_component__WEBPACK_IMPORTED_MODULE_27__["BuyCdsInfoComponent"],
        _buy_cds_cart_buy_cds_cart_component__WEBPACK_IMPORTED_MODULE_28__["BuyCdsCartComponent"],
        _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_29__["ContactUsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__["LayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _ensemble_ensemble_component__WEBPACK_IMPORTED_MODULE_6__["EnsembleComponent"],
                    _smithsix_smithsix_component__WEBPACK_IMPORTED_MODULE_7__["SmithsixComponent"],
                    _videos_videos_component__WEBPACK_IMPORTED_MODULE_8__["VideosComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                    _icons_icons_component__WEBPACK_IMPORTED_MODULE_13__["IconsComponent"],
                    _main_nav_main_nav_component__WEBPACK_IMPORTED_MODULE_15__["MainNavComponent"],
                    _smithsixlinks_smithsixlinks_component__WEBPACK_IMPORTED_MODULE_23__["SmithsixlinksComponent"],
                    _smithensemblelinks_smithensemblelinks_component__WEBPACK_IMPORTED_MODULE_24__["SmithensemblelinksComponent"],
                    _icons_smithsix_icons_smithsix_component__WEBPACK_IMPORTED_MODULE_25__["IconsSmithsixComponent"],
                    _buy_cds_buy_cds_component__WEBPACK_IMPORTED_MODULE_26__["BuyCdsComponent"],
                    _buy_cds_info_buy_cds_info_component__WEBPACK_IMPORTED_MODULE_27__["BuyCdsInfoComponent"],
                    _buy_cds_cart_buy_cds_cart_component__WEBPACK_IMPORTED_MODULE_28__["BuyCdsCartComponent"],
                    _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_29__["ContactUsComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes),
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__["LayoutModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/buy-cds-cart/allCosts.ts":
/*!******************************************!*\
  !*** ./src/app/buy-cds-cart/allCosts.ts ***!
  \******************************************/
/*! exports provided: allCosts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allCosts", function() { return allCosts; });
class allCosts {
    constructor(sumTotal = 0, salesTax = 0, shipping = 0, grandTotal = 0) {
        this.sumTotal = sumTotal;
        this.salesTax = salesTax;
        this.shipping = shipping;
        this.grandTotal = grandTotal;
    }
}


/***/ }),

/***/ "./src/app/buy-cds-cart/buy-cds-cart.component.ts":
/*!********************************************************!*\
  !*** ./src/app/buy-cds-cart/buy-cds-cart.component.ts ***!
  \********************************************************/
/*! exports provided: BuyCdsCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyCdsCartComponent", function() { return BuyCdsCartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var creditcardpayments_creditCardPayments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! creditcardpayments/creditCardPayments */ "./node_modules/creditcardpayments/creditCardPayments.js");
/* harmony import */ var _services_mail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/mail.service */ "./src/app/services/mail.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");







const _c0 = ["popUp_cart"];
const _c1 = ["myPaypalButtons"];
const _c2 = ["contactForm"];
function BuyCdsCartComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BuyCdsCartComponent_li_4_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const item_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.removeItem(item_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", item_r10.orderName, " ($", item_r10.orderPrice, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Qty: ", item_r10.orderQuantity, "");
} }
function BuyCdsCartComponent_p_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BuyCdsCartComponent_p_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " invalid email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BuyCdsCartComponent_p_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " at least write some words (20 characters length) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c3 = function (a0) { return { "z-index": a0 }; };
const _c4 = function (a0) { return { hidden: a0 }; };
class BuyCdsCartComponent {
    constructor(mailService, renderer) {
        this.mailService = mailService;
        this.renderer = renderer;
        this.checkOutPopUp = false;
        this.soonToPurchase = [];
        this.cartPopUpChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.checkOutPopUpChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changedCart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.AllThingsCount = 1;
        this.BrightlyBeamsCount = 1;
        this.checkOutCount = 0;
        this.fullOrder = '';
        this.newCart = [];
        this.PurchaseCost = 2.99;
        this.taxPercentage = 0.07;
        this.shippingCost = 5;
        //EMAIL_STUFF_START
        this.color = '';
        this.showAlert = false;
        this.alertMessage = '';
        this.onSubmit = false;
        this.contactFormValues = {
            name: '',
            email: '',
            body: '',
        };
    }
    get alertColor() {
        return `text-${this.color}-400`;
    }
    hideAlert() {
        setTimeout(() => {
            this.showAlert = false;
        }, 5000);
    }
    goCheckOut() {
        Object(creditcardpayments_creditCardPayments__WEBPACK_IMPORTED_MODULE_2__["render"])({
            id: "#myPaypalButtons",
            currency: "USD",
            value: this.customerOrder.grandTotal.toString(),
            onApprove: (details) => {
                this.submitEmail(this.contactForm);
            }
        });
        this.checkOutPopUp = true;
        this.fullOrder = ""; //reset
        this.soonToPurchase.forEach(item => {
            this.fullOrder =
                this.fullOrder +
                    `* ${item.orderName} (Qty: ${item.orderQuantity})\n`;
        });
        this.fullOrder = this.fullOrder + `\nSum Total: $${this.customerOrder.sumTotal}\n`;
        this.fullOrder = this.fullOrder + `Sales Tax: $${this.customerOrder.salesTax}\n`;
        this.fullOrder = this.fullOrder + `Shipping: $${this.customerOrder.shipping}\n`;
        this.fullOrder = this.fullOrder + `Total = $${this.customerOrder.grandTotal}\n\n`;
        this.fullOrder = this.fullOrder + "Refer to your PayPal and compare prices/purchase times in order to determine the identity and mailing address of the customer";
        this.contactFormValues = {
            name: 'Erik Q. Birch',
            email: 'erikqbirch@gmail.com',
            body: this.fullOrder
        };
    }
    submitEmail(contactForm) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.onSubmit = true;
            // -- set formData values
            let formData = new FormData();
            formData.append('name', this.contactFormValues.name);
            formData.append('email', this.contactFormValues.email);
            formData.append('body', this.contactFormValues.body);
            // -- email customization
            formData.append('access_key', "9eb85861-2991-4d54-b6b3-95d5c56c6ba0");
            formData.append('subject', 'Email Support From Your Site');
            formData.append('from_name', 'Contact Notification');
            try {
                // -- send email
                const res = yield this.mailService.sendEmail(formData);
                if (!res.ok) {
                    throw new Error();
                }
                this.alertMessage = 'Email sent successfully!';
                this.color = 'green';
                contactForm.reset();
            }
            catch (err) {
                // handle error
                this.alertMessage = 'Something went wrong, try again later!';
                this.color = 'red';
            }
            // -- reset submit and hide alert
            this.onSubmit = false;
            this.showAlert = true;
            this.hideAlert();
            // this.customerOrder = new allCosts()
            this.soonToPurchase.forEach(item => {
                this.removeItem(item);
            });
            this.closeCart();
            this.closeCheckOut();
            alert("Your purchase has gone though!");
        });
    }
    //EMAIL_STUFF_END
    closeCart() {
        this.cartPopUp = false;
        this.cartPopUpChange.emit(this.cartPopUp);
    }
    closeCheckOut() {
        this.checkOutPopUp = false;
        this.checkOutPopUpChange.emit(this.checkOutPopUp);
        let childElements = this.myPaypalButtons.nativeElement.children;
        for (let child of childElements) {
            this.renderer.removeChild(this.myPaypalButtons.nativeElement, child);
        }
    }
    removeItem(trashOrder) {
        this.newCart = this.soonToPurchase.filter((item) => { return (item != trashOrder); });
        this.soonToPurchase = this.newCart;
        this.changedCart.emit(this.soonToPurchase);
        if (this.soonToPurchase.length == 0) {
            this.closeCart();
        }
    }
    ngOnInit() {
    }
}
BuyCdsCartComponent.ɵfac = function BuyCdsCartComponent_Factory(t) { return new (t || BuyCdsCartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_mail_service__WEBPACK_IMPORTED_MODULE_3__["MailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
BuyCdsCartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BuyCdsCartComponent, selectors: [["app-buy-cds-cart"]], viewQuery: function BuyCdsCartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.popUp_cart = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.myPaypalButtons = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.contactForm = _t.first);
    } }, inputs: { cartPopUp: "cartPopUp", checkOutPopUp: "checkOutPopUp", customerOrder: "customerOrder", soonToPurchase: "soonToPurchase" }, outputs: { cartPopUpChange: "cartPopUpChange", checkOutPopUpChange: "checkOutPopUpChange", changedCart: "changedCart" }, decls: 44, vars: 22, consts: [["id", "popUp_cart"], ["popUp_cart", ""], ["id", "cart_display", 1, "layer3"], [4, "ngFor", "ngForOf"], ["id", "appliedCosts"], ["id", "buttons"], [3, "click"], ["id", "cart_checkout", 1, "layer2", 3, "ngStyle"], ["id", "myPaypalButtons"], ["myPaypalButtons", ""], ["id", "cart_email", 1, "layer1"], [1, "mt-8"], [1, "flex", "flex-col", "gap-3", 3, "ngSubmit"], ["contactForm", "ngForm"], ["name", "name", "type", "text", "placeholder", "Full Name", "required", "", "minlength", "2", 1, "w-full", "p-2", "border", "border-gray-200", "rounded-md", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "ml-1 text-red-400 text-sm", 4, "ngIf"], ["name", "email", "type", "email", "placeholder", "Email", "required", "", "pattern", "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", 1, "w-full", "p-2", "border", "border-gray-200", "rounded-md", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["name", "body", "cols", "30", "rows", "10", "placeholder", "Message", "required", "", "minlength", "20", 1, "w-full", "p-2", "border", "border-gray-200", "rounded-md", 3, "ngModel", "ngModelChange"], ["body", "ngModel"], [3, "ngClass"], [1, "font-semibold", 3, "ngClass"], [1, "ml-1", "text-red-400", "text-sm"]], template: function BuyCdsCartComponent_Template(rf, ctx) { if (rf & 1) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, BuyCdsCartComponent_li_4_Template, 7, 3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BuyCdsCartComponent_Template_button_click_15_listener() { return ctx.closeCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Close Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BuyCdsCartComponent_Template_button_click_17_listener() { return ctx.goCheckOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Check Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BuyCdsCartComponent_Template_button_click_22_listener() { return ctx.closeCheckOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Close Check Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "form", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function BuyCdsCartComponent_Template_form_ngSubmit_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27); return ctx.submitEmail(_r3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BuyCdsCartComponent_Template_input_ngModelChange_29_listener($event) { return ctx.contactFormValues.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, BuyCdsCartComponent_p_31_Template, 2, 0, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "input", 17, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BuyCdsCartComponent_Template_input_ngModelChange_33_listener($event) { return ctx.contactFormValues.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, BuyCdsCartComponent_p_35_Template, 2, 0, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "textarea", 19, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function BuyCdsCartComponent_Template_textarea_ngModelChange_37_listener($event) { return ctx.contactFormValues.body = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, BuyCdsCartComponent_p_40_Template, 2, 0, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](34);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.soonToPurchase);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Sum Total = $", ctx.customerOrder.sumTotal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Tax = $", ctx.customerOrder.salesTax, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Shipping = $", ctx.customerOrder.shipping, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Grand Total = $", ctx.customerOrder.grandTotal, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c3, ctx.checkOutPopUp ? "4" : "2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.contactFormValues.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r4.errors && _r4.touched && _r4.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.contactFormValues.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r6.errors && _r6.touched && _r6.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.contactFormValues.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"]("          All Things: ", ctx.AllThingsCount, "\n          Brightly Beams: ", ctx.BrightlyBeamsCount, "\n          Purchase Cost: ", ctx.PurchaseCost, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r8.errors && _r8.touched && _r8.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c4, !ctx.showAlert));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.alertColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.alertMessage, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["PatternValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: ["@media only all and (min-width: 0) {\n  #popUp_cart[_ngcontent-%COMP%] {\n    padding-top: 2.5rem;\n    position: relative;\n  }\n  .layer3[_ngcontent-%COMP%] {\n    min-height: 100vh;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    background-color: #F5F5F5;\n    padding-top: 2.5rem;\n    z-index: 3;\n  }\n  .layer3[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    list-style-type: circle;\n    padding: 0;\n  }\n  .layer3[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border: 1px solid rgba(150, 150, 150, 0.75);\n    border-radius: 2.5px;\n    width: 90%;\n    padding: 1rem 0;\n    background-color: rgba(255, 255, 255, 0.75);\n    margin: 1rem auto;\n  }\n  .layer3[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 0 2.5rem;\n    width: -moz-fit-content;\n    width: fit-content;\n  }\n  .layer3[_ngcontent-%COMP%]   div#appliedCosts[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    margin: 2.5rem auto;\n  }\n  .layer3[_ngcontent-%COMP%]   #buttons[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    width: 100%;\n    margin: 0 auto;\n  }\n  .layer3[_ngcontent-%COMP%]   #buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin: 0 1rem;\n  }\n  .layer2[_ngcontent-%COMP%] {\n    min-height: 100vh;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    background-color: #F5F5F5;\n    padding-top: 2.5rem;\n    z-index: 2;\n    margin: 2.5rem auto;\n  }\n  .layer2[_ngcontent-%COMP%]   #myPaypalButtons[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0 auto;\n  }\n  .layer1[_ngcontent-%COMP%] {\n    min-height: 100vh;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    background-color: #F5F5F5;\n    padding-top: 2.5rem;\n    z-index: 1;\n  }\n}\n@media only all and (min-width: 992px) {\n  .layer3[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .layer3[_ngcontent-%COMP%]   div#appliedCosts[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .layer3[_ngcontent-%COMP%]   #buttons[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .layer2[_ngcontent-%COMP%]   #myPaypalButtons[_ngcontent-%COMP%] {\n    width: 50% !important;\n    margin: 0 auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n  }\n  .layer2[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 20px;\n    padding: 1rem;\n  }\n}\n/*# sourceMappingURL=buy-cds-cart.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV5LWNkcy1jYXJ0L2J1eS1jZHMtY2FydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYnV5LWNkcy1jYXJ0L2J1eS1jZHMtY2FydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNBO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLGtCQUFBO0VDUkY7RURVQTtJQWJBLGlCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLHlCQUFBO0lBQ0EsbUJBQUE7SUFVRSxVQUFBO0VDSEY7RURJRTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxVQUFBO0VDRko7RURHSTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsMkNBQUE7SUFDQSxvQkFBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0lBQ0EsMkNBQUE7SUFDQSxpQkFBQTtFQ0ROO0VER007SUFDRSxpQkFBQTtJQUNBLHVCQUFBO0lBQUEsa0JBQUE7RUNEUjtFREtFO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7RUNISjtFREtFO0lBQ0UsYUFBQTtJQUNBLHVCQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7RUNISjtFRElJO0lBQ0UsY0FBQTtFQ0ZOO0VETUE7SUF0REEsaUJBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxNQUFBO0lBQ0EseUJBQUE7SUFDQSxtQkFBQTtJQW1ERSxVQUFBO0lBQ0EsbUJBQUE7RUNDRjtFREFFO0lBRUUsV0FBQTtJQUNBLGNBQUE7RUNDSjtFRElBO0lBbEVBLGlCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsTUFBQTtJQUNBLHlCQUFBO0lBQ0EsbUJBQUE7SUErREUsVUFBQTtFQ0dGO0FBQ0Y7QURzQkE7RUFJSTtJQUNFLGVBQUE7RUN2Qko7RUQ4QkU7SUFDRSxlQUFBO0VDNUJKO0VEOEJFO0lBQ0UsZUFBQTtFQzVCSjtFRGlDRTtJQUNFLHFCQUFBO0lBQ0EsY0FBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsZ0JBQUE7RUMvQko7RURpQ0U7SUFDRSxlQUFBO0lBQ0EsYUFBQTtFQy9CSjtBQUNGO0FBQUEscURBQUEiLCJmaWxlIjoic3JjL2FwcC9idXktY2RzLWNhcnQvYnV5LWNkcy1jYXJ0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BuyCdsCartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-buy-cds-cart',
                templateUrl: './buy-cds-cart.component.html',
                styleUrls: ['./buy-cds-cart.component.css']
            }]
    }], function () { return [{ type: _services_mail_service__WEBPACK_IMPORTED_MODULE_3__["MailService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }]; }, { cartPopUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], checkOutPopUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], customerOrder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], soonToPurchase: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], cartPopUpChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], checkOutPopUpChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], changedCart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], popUp_cart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['popUp_cart']
        }], myPaypalButtons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['myPaypalButtons']
        }], contactForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['contactForm']
        }] }); })();


/***/ }),

/***/ "./src/app/buy-cds-info/buy-cds-info.component.ts":
/*!********************************************************!*\
  !*** ./src/app/buy-cds-info/buy-cds-info.component.ts ***!
  \********************************************************/
/*! exports provided: BuyCdsInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyCdsInfoComponent", function() { return BuyCdsInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _orderInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderInfo */ "./src/app/buy-cds-info/orderInfo.ts");
/* harmony import */ var _buy_cds_album_songs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buy-cds/album-songs */ "./src/app/buy-cds/album-songs.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = ["productQuantity"];
function BuyCdsInfoComponent_ng_template_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "figure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BuyCdsInfoComponent_ng_template_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "figure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "figure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BuyCdsInfoComponent_ng_template_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " The Smith Ensemble: All Things Come of Thee ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "$2.98");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BuyCdsInfoComponent_ng_template_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " The Smith Six: Brightly Beams ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "$3.99");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BuyCdsInfoComponent_ng_template_0_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const song_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r7);
} }
function BuyCdsInfoComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BuyCdsInfoComponent_ng_template_0_div_2_Template, 5, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BuyCdsInfoComponent_ng_template_0_div_3_Template, 5, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BuyCdsInfoComponent_ng_template_0_div_5_Template, 5, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BuyCdsInfoComponent_ng_template_0_div_6_Template, 5, 0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ol");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BuyCdsInfoComponent_ng_template_0_li_8_Template, 2, 1, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuyCdsInfoComponent_ng_template_0_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.addToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuyCdsInfoComponent_ng_template_0_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.closePopUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.chosenItem == "AllThings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.chosenItem == "BrightlyBeams");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.chosenItem == "AllThings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.chosenItem == "BrightlyBeams");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.AlbumSongs.AllThings_songs);
} }
class BuyCdsInfoComponent {
    constructor() {
        this.chosenItem = "";
        this.itemPopUpChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.addedOrder = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.AlbumSongs = new _buy_cds_album_songs__WEBPACK_IMPORTED_MODULE_2__["AlbumSongs"]();
        this.myOrder = new _orderInfo__WEBPACK_IMPORTED_MODULE_1__["OrderInfo"]();
        this.orderID = 0;
        this.productName = "";
        this.productPrice = 0;
    }
    addToCart() {
        switch (this.chosenItem) {
            case "AllThings":
                this.productName = 'The Smith Ensemble: All Things Come of Thee';
                this.productPrice = 2.98;
                break;
            case "BrightlyBeams":
                this.productName = 'The Smith Six: Brightly Beams';
                this.productPrice = 3.99;
                break;
        }
        this.myOrder = new _orderInfo__WEBPACK_IMPORTED_MODULE_1__["OrderInfo"](this.orderID = this.orderID + 1, this.productName, Number(this.productQuantity.nativeElement.value), Number(this.productPrice));
        this.addedOrder.emit(this.myOrder);
        this.productQuantity.nativeElement.value = 0;
        this.closePopUp();
    }
    closePopUp() {
        this.itemPopUp = false;
        this.itemPopUpChange.emit(this.itemPopUp);
    }
    ngOnInit() {
    }
}
BuyCdsInfoComponent.ɵfac = function BuyCdsInfoComponent_Factory(t) { return new (t || BuyCdsInfoComponent)(); };
BuyCdsInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuyCdsInfoComponent, selectors: [["app-buy-cds-info"]], viewQuery: function BuyCdsInfoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.productQuantity = _t.first);
    } }, inputs: { itemPopUp: "itemPopUp", chosenItem: "chosenItem" }, outputs: { itemPopUpChange: "itemPopUpChange", addedOrder: "addedOrder" }, decls: 1, vars: 1, consts: [[3, "ngIf"], ["id", "itemPopUp"], ["id", "productImgs"], ["class", "imgHolder", 4, "ngIf"], ["id", "productInfo"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["id", "productInputs"], ["type", "number", "min", "0", "value", "", "placeholder", "Quantity", "autofocus", ""], ["productQuantity", ""], [3, "click"], ["id", "closeBtn", 3, "click"], [1, "imgHolder"], ["src", "../../assets/images/SmithEnsemblePics/front.png", "alt", "AllThingsCover"], ["src", "../../assets/images/SmithEnsemblePics/cd-vector(1).png", "alt", "AllThingsDisk"], ["src", "../../assets/images/SmithEnsemblePics/Smith-SixCDsmall.png", "alt", "BrightlyBeamsCover"], ["src", "../../assets/images/SmithEnsemblePics/CDSmithSix(1).png", "alt", "BrightlyBeamsDisk"], ["id", "productName"]], template: function BuyCdsInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BuyCdsInfoComponent_ng_template_0_Template, 16, 5, "ng-template", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.itemPopUp);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["@media only all and (min-width: 0) {\n  #itemPopUp[_ngcontent-%COMP%]   #productImgs[_ngcontent-%COMP%]   div.imgHolder[_ngcontent-%COMP%] {\n    margin: 2.5rem auto;\n    display: flex;\n    justify-content: center;\n  }\n  #itemPopUp[_ngcontent-%COMP%]   #productImgs[_ngcontent-%COMP%]   div.imgHolder[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n    margin: 0 1rem;\n    width: 150px;\n  }\n  #itemPopUp[_ngcontent-%COMP%]   #productImgs[_ngcontent-%COMP%]   div.imgHolder[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  #itemPopUp[_ngcontent-%COMP%]   #productInfo[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 0;\n  }\n  #itemPopUp[_ngcontent-%COMP%]   #productInfo[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: -moz-fit-content;\n    width: fit-content;\n  }\n  #itemPopUp[_ngcontent-%COMP%]   #closeBtn[_ngcontent-%COMP%] {\n    margin: 2.5rem auto;\n  }\n}\n@media only all and (min-width: 992px) {\n  #itemPopUp[_ngcontent-%COMP%]   #productImgs[_ngcontent-%COMP%]   div.imgHolder[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n    width: 300px;\n    margin: 0 3rem;\n  }\n  #itemPopUp[_ngcontent-%COMP%]   #productInfo[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  #itemPopUp[_ngcontent-%COMP%]   #productInfo[_ngcontent-%COMP%]   #productInputs[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin: 2.5rem auto;\n  }\n  #itemPopUp[_ngcontent-%COMP%]   #productInfo[_ngcontent-%COMP%]   #productInputs[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    padding: 1rem 0 1rem 1rem;\n  }\n  #itemPopUp[_ngcontent-%COMP%]   #productInfo[_ngcontent-%COMP%]   #productInputs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  #itemPopUp[_ngcontent-%COMP%]   #closeBtn[_ngcontent-%COMP%] {\n    font-size: 24px;\n    padding: 1rem 1.85rem;\n    margin: 5rem;\n  }\n}\n/*# sourceMappingURL=buy-cds-info.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV5LWNkcy1pbmZvL2J1eS1jZHMtaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYnV5LWNkcy1pbmZvL2J1eS1jZHMtaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR007SUFDRSxtQkFBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtFQ0ROO0VERU07SUFDRSxjQUFBO0lBQ0EsWUFBQTtFQ0FSO0VEQ1E7SUFDRSxXQUFBO0VDQ1Y7RURPSTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0lBQ0EsVUFBQTtFQ0xOO0VETU07SUFDRSx1QkFBQTtJQUFBLGtCQUFBO0VDSlI7RURhRTtJQUNFLG1CQUFBO0VDWEo7QUFDRjtBRGdCQTtFQUlRO0lBQ0UsWUFBQTtJQUNBLGNBQUE7RUNqQlI7RUQyQk07SUFDRSxlQUFBO0VDekJSO0VENEJJO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VDMUJOO0VEMkJNO0lBQ0UseUJBQUE7RUN6QlI7RUQyQk07SUFDRSxhQUFBO0VDekJSO0VENkJFO0lBQ0UsZUFBQTtJQUNBLHFCQUFBO0lBQ0EsWUFBQTtFQzNCSjtBQUNGO0FBQUEscURBQUEiLCJmaWxlIjoic3JjL2FwcC9idXktY2RzLWluZm8vYnV5LWNkcy1pbmZvLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuyCdsInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-buy-cds-info',
                templateUrl: './buy-cds-info.component.html',
                styleUrls: ['./buy-cds-info.component.css']
            }]
    }], function () { return []; }, { itemPopUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], chosenItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], itemPopUpChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], addedOrder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], productQuantity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['productQuantity']
        }] }); })();


/***/ }),

/***/ "./src/app/buy-cds-info/orderInfo.ts":
/*!*******************************************!*\
  !*** ./src/app/buy-cds-info/orderInfo.ts ***!
  \*******************************************/
/*! exports provided: OrderInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderInfo", function() { return OrderInfo; });
class OrderInfo {
    constructor(orderID = 0, orderName = "", orderQuantity = 0, orderPrice = 0) {
        this.orderID = orderID;
        this.orderName = orderName;
        this.orderQuantity = orderQuantity;
        this.orderPrice = orderPrice;
    }
}


/***/ }),

/***/ "./src/app/buy-cds/album-songs.ts":
/*!****************************************!*\
  !*** ./src/app/buy-cds/album-songs.ts ***!
  \****************************************/
/*! exports provided: AlbumSongs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumSongs", function() { return AlbumSongs; });
class AlbumSongs {
    constructor(AllThings_songs = [
        "PRAISE GOD, FROM WHOM ALL BLESSINGS FLOW",
        "ZIOIN'S WALLS",
        "AMAZING GRACE",
        "DOWN TO THE RIVER TO PRAY",
        "PILGRIM SONG",
        "PIE JESU",
        "SEEK THIS JESUS",
        "BORN ON A NEW DAY",
        "SAVIOR, REDEEMER OF MY SOUL",
        "WHEN LOVE CAME DOWN",
        "THE LORD IS MY SHEPHERD",
        "GLORIOUS",
        "LOOK AT THE WORLD",
        "GO YE NOW IN PEACE"
    ], BrightlyBeams_songs = [
        "I NEED THEE EVERY HOUR",
        "PRAYER OF THE CHILD",
        "BLACKBIRD",
        "LULLABY (GOODNIGHT, MY ANGEL)",
        "SIDE BY SIDE",
        "BE MY LITTLE BABY BUMBLE BEE",
        "BYE BYE BLUES",
        "CAN'T HELP FALLING IN LOVE",
        "AFRICA", "L.O.V.E.",
        "HAVE YOURSELF A MERRY LITTLE CHRISTMAS",
        "BRIGHTLY BEAMS OUR FATHER'S MERCY"
    ]) {
        this.AllThings_songs = AllThings_songs;
        this.BrightlyBeams_songs = BrightlyBeams_songs;
    }
}


/***/ }),

/***/ "./src/app/buy-cds/buy-cds.component.ts":
/*!**********************************************!*\
  !*** ./src/app/buy-cds/buy-cds.component.ts ***!
  \**********************************************/
/*! exports provided: BuyCdsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyCdsComponent", function() { return BuyCdsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _buy_cds_cart_allCosts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../buy-cds-cart/allCosts */ "./src/app/buy-cds-cart/allCosts.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _buy_cds_cart_buy_cds_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buy-cds-cart/buy-cds-cart.component */ "./src/app/buy-cds-cart/buy-cds-cart.component.ts");
/* harmony import */ var _buy_cds_info_buy_cds_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buy-cds-info/buy-cds-info.component */ "./src/app/buy-cds-info/buy-cds-info.component.ts");






function BuyCdsComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuyCdsComponent_ng_template_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.toggleCartPopUp(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Show Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "z-index": a0 }; };
class BuyCdsComponent {
    constructor() {
        this.salesTax = 0;
        this.totalCost = 0;
        this.grandTotalCost = 0;
        this.myOrders = [];
        this.changedTotal = 0;
        this.customerOrder = new _buy_cds_cart_allCosts__WEBPACK_IMPORTED_MODULE_1__["allCosts"](0, 0, 0, 0);
        this.duplicate = false;
        this.selectedItem = "";
        this.shippingCost = 5;
        this.showCartPopUp = false;
        this.showItemPopUp = false;
        this.sumTotal = 0;
    }
    additionalCosts(orders) {
        this.changedTotal = 0; //RESET
        orders.forEach(item => {
            this.changedTotal = this.changedTotal + (item.orderPrice * item.orderQuantity);
        });
        if (this.sumTotal != this.changedTotal) {
            this.sumTotal = Math.round(this.changedTotal * 100) / 100;
            this.salesTax = Math.round((this.sumTotal * 0.07) * 100) / 100;
            this.grandTotalCost = Math.round((this.sumTotal + this.salesTax + this.shippingCost) * 100) / 100;
        }
        this.customerOrder.sumTotal = this.sumTotal;
        this.customerOrder.salesTax = this.salesTax;
        this.customerOrder.shipping = this.shippingCost;
        this.customerOrder.grandTotal = this.grandTotalCost;
    }
    applyOrder(addedOrder) {
        if (addedOrder.orderQuantity != 0) {
            if (this.myOrders.length != 0) {
                this.myOrders.forEach(order => {
                    if (order.orderName == addedOrder.orderName) {
                        this.duplicate = true;
                        order.orderQuantity = order.orderQuantity + addedOrder.orderQuantity;
                    }
                });
                if (this.duplicate == false) {
                    this.myOrders.push(addedOrder);
                }
                this.duplicate = false;
            }
            else {
                this.myOrders.push(addedOrder);
            }
        }
        this.additionalCosts(this.myOrders);
    }
    changeOrder(changedCart) {
        this.myOrders = changedCart;
        this.additionalCosts(this.myOrders);
    }
    selectItem(itemName) {
        this.showItemPopUp = true;
        this.selectedItem = itemName;
    }
    toggleCartPopUp(result) {
        this.showCartPopUp = result;
    }
    ngOnInit() {
    }
}
BuyCdsComponent.ɵfac = function BuyCdsComponent_Factory(t) { return new (t || BuyCdsComponent)(); };
BuyCdsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuyCdsComponent, selectors: [["app-buy-cds"]], inputs: { salesTax: "salesTax", totalCost: "totalCost", grandTotalCost: "grandTotalCost", myOrders: "myOrders" }, decls: 22, vars: 11, consts: [[1, "container", "video-body"], [1, "row"], [1, "col"], [1, "sales-floor"], [1, "purchase-item", 3, "click"], ["src", "../../assets/images/SmithEnsemblePics/front.png", 1, "album-cover"], ["src", "../../assets/images/SmithEnsemblePics/Smith-SixCDsmall.png", 1, "album-cover"], [3, "ngIf"], [1, "cart_section", 3, "ngStyle"], [3, "soonToPurchase", "customerOrder", "soonToPurchaseChange", "customerOrderChange", "changedCart", "cartPopUpChange"], [1, "productInfo_section", 3, "ngStyle"], [3, "itemPopUp", "chosenItem", "itemPopUpChange", "addedOrder"], [3, "click"]], template: function BuyCdsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Buy CDs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "article", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuyCdsComponent_Template_article_click_7_listener() { return ctx.selectItem("AllThings"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "All Things Come of Thee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "article", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuyCdsComponent_Template_article_click_12_listener() { return ctx.selectItem("BrightlyBeams"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "The Smith Six: Brightly Beams");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BuyCdsComponent_ng_template_17_Template, 2, 0, "ng-template", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "app-buy-cds-cart", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("soonToPurchaseChange", function BuyCdsComponent_Template_app_buy_cds_cart_soonToPurchaseChange_19_listener($event) { return ctx.myOrders = $event; })("customerOrderChange", function BuyCdsComponent_Template_app_buy_cds_cart_customerOrderChange_19_listener($event) { return ctx.customerOrder = $event; })("changedCart", function BuyCdsComponent_Template_app_buy_cds_cart_changedCart_19_listener($event) { return ctx.changeOrder($event); })("cartPopUpChange", function BuyCdsComponent_Template_app_buy_cds_cart_cartPopUpChange_19_listener($event) { return ctx.toggleCartPopUp($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "app-buy-cds-info", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("itemPopUpChange", function BuyCdsComponent_Template_app_buy_cds_info_itemPopUpChange_21_listener($event) { return ctx.showItemPopUp = $event; })("addedOrder", function BuyCdsComponent_Template_app_buy_cds_info_addedOrder_21_listener($event) { return ctx.applyOrder($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.myOrders.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.showCartPopUp ? "4" : "1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("soonToPurchase", ctx.myOrders)("customerOrder", ctx.customerOrder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.showItemPopUp ? "4" : "1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("itemPopUp", ctx.showItemPopUp)("chosenItem", ctx.selectedItem);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _buy_cds_cart_buy_cds_cart_component__WEBPACK_IMPORTED_MODULE_3__["BuyCdsCartComponent"], _buy_cds_info_buy_cds_info_component__WEBPACK_IMPORTED_MODULE_4__["BuyCdsInfoComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  background-color: #f5f5f5;\n  min-height: 100vh;\n  padding-bottom: 2em;\n  margin-bottom: 2em;\n  margin-top: 4em;\n}\n\n.row[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n@media only all and (min-width: 0) {\n  .sales-floor[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: 100vh;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    position: absolute;\n    top: 0;\n    z-index: 2;\n    background-color: #f5f5f5;\n    padding: 2.5rem 0;\n  }\n  .sales-floor[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .purchase-item[_ngcontent-%COMP%] {\n    width: 75%;\n    background-color: whitesmoke;\n    border-radius: 1rem;\n    overflow: hidden;\n    border: 1px solid rgba(100, 100, 100, 0.5);\n    margin: 1rem auto;\n  }\n  .sales-floor[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .purchase-item[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n    width: 100%;\n    cursor: pointer;\n  }\n  .sales-floor[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .purchase-item[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .sales-floor[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .purchase-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 8pt;\n    margin: 1rem auto;\n  }\n  .sales-floor[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin: 2.5rem auto;\n  }\n  .cart_section[_ngcontent-%COMP%] {\n    z-index: 1;\n    position: absolute;\n    top: 0;\n    background-color: #f5f5f5;\n    width: 100%;\n    min-height: 100vh;\n  }\n  .productInfo_section[_ngcontent-%COMP%] {\n    z-index: 1;\n    position: absolute;\n    top: 0;\n    background-color: #f5f5f5;\n    width: 100%;\n    min-height: 100vh;\n  }\n}\n\n@media only all and (min-width: 760px) {\n  .sales-floor[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .sales-floor[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .purchase-item[_ngcontent-%COMP%] {\n    width: 45%;\n  }\n  .sales-floor[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .purchase-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n    margin: 2rem auto;\n  }\n  .sales-floor[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    padding: 1rem;\n  }\n}\n\n@media only all and (min-width: 992px) {\n  .sales-floor[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n}\n/*# sourceMappingURL=buy-cds.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV5LWNkcy9idXktY2RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9idXktY2RzL2J1eS1jZHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFFQSx5QkFBQTtFQUNBLGlCQUFBO0VBR0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNGRjs7QURNQTtFQUVFLGtCQUFBO0FDSkY7O0FEWUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxpQkFBQTtJQUVBLGFBQUE7SUFDQSxtQkFBQTtJQUVBLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxNQUFBO0lBQ0EsVUFBQTtJQUNBLHlCQUFBO0lBQ0EsaUJBQUE7RUNYRjtFRGFJO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0lBRUEsbUJBQUE7SUFDQSxnQkFBQTtJQUNBLDBDQUFBO0lBQ0EsaUJBQUE7RUNaTjtFRGFRO0lBQ0UsV0FBQTtJQUNBLGVBQUE7RUNYVjtFRFlVO0lBQ0UsV0FBQTtFQ1ZaO0VEZ0JRO0lBQ0UsY0FBQTtJQUNBLGlCQUFBO0VDZFY7RURtQkU7SUFDRSxtQkFBQTtFQ2pCSjtFRG9CQTtJQUNFLFVBQUE7SUFDQSxrQkFBQTtJQUNBLE1BQUE7SUFDQSx5QkFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtFQ2xCRjtFRG9CQTtJQUNFLFVBQUE7SUFDQSxrQkFBQTtJQUNBLE1BQUE7SUFDQSx5QkFBQTtJQUNBLFdBQUE7SUFDQSxpQkFBQTtFQ2xCRjtBQUNGOztBRG9CQTtFQUVJO0lBQ0UsYUFBQTtFQ25CSjtFRG9CSTtJQUNFLFVBQUE7RUNsQk47RUR1QlE7SUFDRSxpQkFBQTtJQUNBLGlCQUFBO0VDckJWO0VEeUJFO0lBQ0UsaUJBQUE7SUFDQSxhQUFBO0VDdkJKO0FBQ0Y7O0FEOEJBO0VBWUk7SUFDRSxpQkFBQTtFQ3ZDSjtBQUNGOztBQUFBLGdEQUFBIiwiZmlsZSI6InNyYy9hcHAvYnV5LWNkcy9idXktY2RzLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuyCdsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-buy-cds',
                templateUrl: './buy-cds.component.html',
                styleUrls: ['./buy-cds.component.css'],
            }]
    }], null, { salesTax: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalCost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], grandTotalCost: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], myOrders: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/mail.service */ "./src/app/services/mail.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function ContactUsComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactUsComponent_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " invalid email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactUsComponent_p_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " at least write some words (20 characters length) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactUsComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " send ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function ContactUsComponent_ng_template_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { hidden: a0 }; };
class ContactUsComponent {
    constructor(mailService) {
        this.mailService = mailService;
        this.color = '';
        this.showAlert = false;
        this.alertMessage = '';
        this.onSubmit = false;
        this.contactFormValues = {
            name: '',
            email: '',
            body: '',
        };
    } //
    get alertColor() {
        return `text-${this.color}-400`;
    }
    hideAlert() {
        setTimeout(() => {
            this.showAlert = false;
        }, 5000);
    }
    submitEmail(contactForm) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.onSubmit = true;
            // -- set formData values
            let formData = new FormData();
            formData.append('name', this.contactFormValues.name);
            formData.append('email', this.contactFormValues.email);
            formData.append('body', this.contactFormValues.body);
            // -- email customization
            formData.append('access_key', "9eb85861-2991-4d54-b6b3-95d5c56c6ba0");
            formData.append('subject', 'Email Support From Your Site');
            formData.append('from_name', 'Contact Notification');
            try {
                // -- send email
                const res = yield this.mailService.sendEmail(formData);
                if (!res.ok) {
                    throw new Error();
                }
                this.alertMessage = 'Email sent successfully!';
                this.color = 'green';
                contactForm.reset();
            }
            catch (err) {
                // handle error
                this.alertMessage = 'Something went wrong, try again later!';
                this.color = 'red';
            }
            // -- reset submit and hide alert
            this.onSubmit = false;
            this.showAlert = true;
            this.hideAlert();
        });
    }
    ngOnInit() {
    }
}
ContactUsComponent.ɵfac = function ContactUsComponent_Factory(t) { return new (t || ContactUsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"])); };
ContactUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactUsComponent, selectors: [["app-contact-us"]], decls: 29, vars: 14, consts: [[1, "container", "video-body"], [1, "row"], [1, "col"], ["src", "../../assets/images/SmithEnsemblePics/SmithEnsemble-ContactUs.jpg", 1, "center"], [1, "mt-8"], [1, "flex", "flex-col", "gap-3", 3, "ngSubmit"], ["contactForm", "ngForm"], ["name", "name", "type", "text", "placeholder", "Full Name", "required", "", "minlength", "2", 1, "w-full", "p-2", "border", "border-gray-200", "rounded-md", 3, "ngModel", "ngModelChange"], ["name", "ngModel"], ["class", "ml-1 text-red-400 text-sm", 4, "ngIf"], ["name", "email", "type", "email", "placeholder", "Email", "required", "", "pattern", "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?", 1, "w-full", "p-2", "border", "border-gray-200", "rounded-md", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["name", "body", "cols", "30", "rows", "10", "placeholder", "Message", "required", "", "minlength", "20", 1, "w-full", "p-2", "border", "border-gray-200", "rounded-md", 3, "ngModel", "ngModelChange"], ["body", "ngModel"], [3, "ngClass"], [1, "font-semibold", 3, "ngClass"], [1, "p-2", "rounded-md", "font-bold", "uppercase", "text-white", "bg-light-color", "hover:bg-primary-color", "transition", "disabled:opacity-50", "disabled:bg-light-color", 3, "disabled"], [4, "ngIf", "ngIfElse"], ["submittingEmail", ""], [1, "ml-1", "text-red-400", "text-sm"], [1, "animate-spin"], [1, "fa-solid", "fa-rotate-right"]], template: function ContactUsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ContactUsComponent_Template_form_ngSubmit_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9); return ctx.submitEmail(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactUsComponent_Template_input_ngModelChange_11_listener($event) { return ctx.contactFormValues.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ContactUsComponent_p_13_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactUsComponent_Template_input_ngModelChange_15_listener($event) { return ctx.contactFormValues.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ContactUsComponent_p_17_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "textarea", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ContactUsComponent_Template_textarea_ngModelChange_19_listener($event) { return ctx.contactFormValues.body = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ContactUsComponent_p_21_Template, 2, 0, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ContactUsComponent_ng_container_26_Template, 2, 0, "ng-container", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ContactUsComponent_ng_template_27_Template, 2, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](9);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](16);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](20);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.contactFormValues.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r1.errors && _r1.touched && _r1.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.contactFormValues.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r3.errors && _r3.touched && _r3.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.contactFormValues.body);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r5.errors && _r5.touched && _r5.dirty);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, !ctx.showAlert));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.alertColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.alertMessage, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", _r0.invalid || ctx.onSubmit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.onSubmit === false)("ngIfElse", _r8);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: ["@media only all and (min-width: 0) {\n  .container[_ngcontent-%COMP%] {\n    position: relative;\n    text-align: center;\n    background-color: #f5f5f5;\n    padding-bottom: 2em;\n    margin-bottom: em;\n    margin-top: 4em;\n    position: relative;\n  }\n  .mat-drawer-backdrop.mat-drawer-shown[_ngcontent-%COMP%] {\n    height: 100vh;\n  }\n  .container[_ngcontent-%COMP%] {\n    width: 90vw;\n  }\n  .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    margin: 4em;\n  }\n  .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n  }\n  .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n    width: 85vw;\n  }\n  .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .mt-8[_ngcontent-%COMP%] {\n    margin-top: 2.5rem;\n  }\n  .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .mt-8[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n}\n@media only all and (min-width: 992px) {\n  .container[_ngcontent-%COMP%] {\n    width: 80vw;\n  }\n  .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n    width: 75vw;\n  }\n}\n@media only all and (min-width: 1200px) {\n  .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n    width: 50vw;\n  }\n}\n/*# sourceMappingURL=contact-us.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91bml2ZXJzYWwuc2NzcyIsInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUNGRTtJQUNFLGtCQUFBO0lBQ0Esa0JBQUE7SUFFQSx5QkFBQTtJQUVBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RUNERjtFREdGO0lBQ0UsYUFBQTtFQ0RBO0VGUEE7SUFDRSxXQUFBO0VFU0Y7RUZSRTtJQUNFLFdBQUE7RUVVSjtFRlRJO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtFRVdOO0VGVE07SUFDRSxXQUFBO0VFV1I7RUZWUTtJQUNFLFdBQUE7RUVZVjtFRlRNO0lBQ0Usa0JBQUE7RUVXUjtFRlZRO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxtQkFBQTtFRVlWO0FBQ0Y7QUZIQTtFQ25CRTtJQUNFLFdBQUE7RUN5QkY7RUZETTtJQUNFLFdBQUE7RUVHUjtBQUNGO0FGUUE7RUFLUTtJQUNFLFdBQUE7RUVWUjtBQUNGO0FBQUEsbURBQUEiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0LXVzL2NvbnRhY3QtdXMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContactUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-contact-us',
                templateUrl: './contact-us.component.html',
                styleUrls: ['./contact-us.component.css']
            }]
    }], function () { return [{ type: _services_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 19, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-md"], [1, "contact-us"], [1, "hello-info"], [1, "contact-info"], [1, "my-email"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " If you have any questions or schedule something don't hesitate to email. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Manager Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " SmithEnsemble@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Smith Six facebook Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 0);
    } }, styles: [".container[_ngcontent-%COMP%]{\r\n    margin-top: 3em;\r\n    margin-bottom: 10em;\r\n    background-color: #f5f5f5\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAzZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMGVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/ensemble/ensemble.component.ts":
/*!************************************************!*\
  !*** ./src/app/ensemble/ensemble.component.ts ***!
  \************************************************/
/*! exports provided: EnsembleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnsembleComponent", function() { return EnsembleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _icons_icons_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/icons.component */ "./src/app/icons/icons.component.ts");





const _c0 = ["videoHolder"];
class EnsembleComponent {
    constructor() {
        this.fadeOut_bool = false;
    }
    fadeOut() {
        let parent = this.videoHolder.nativeElement.children;
        this.fadeOut_bool = true;
        parent[1].muted = false;
        parent[1].controls = true;
        parent[1].autoplay = true;
    }
    ngOnInit() {
    }
}
EnsembleComponent.ɵfac = function EnsembleComponent_Factory(t) { return new (t || EnsembleComponent)(); };
EnsembleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EnsembleComponent, selectors: [["app-mybody"]], viewQuery: function EnsembleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.videoHolder = _t.first);
    } }, decls: 30, vars: 3, consts: [[1, "container"], [1, "row"], ["id", "videoHolder", 1, "col-md", 3, "click"], ["videoHolder", ""], ["src", "../assets/images/SmithEnsemblePics/SmithEnsembleTitle.png", 1, "center", 3, "ngClass"], ["id", "video", "width", "100%", "autoplay", "", 3, "muted", "loop"], ["src", "../../assets/SampleVideo.mp4", "type", "video/mp4"], [1, "col-md"], [1, "listen-now", "top-right"], [1, "scripture-quote"], [1, "my-container"], ["routerLink", "/buy-cds"], ["src", "../../assets/images/SmithEnsemblePics/cd-vector.png", 1, "cd-album-cover"], ["src", "../../assets/images/SmithEnsemblePics/front.png", 1, "album-cover"], [1, "col-md-12", "text-center", "my-text-info"], [1, "col"]], template: function EnsembleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EnsembleComponent_Template_div_click_2_listener() { return ctx.fadeOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "video", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "source", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Isaiah 55:12");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "article");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\"For ye shall go out with joy, and be led forth with peace: the mountains and the hills shall break forth before you into singing, and all the trees of the field shall clap their hands.\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "THE SMITH ENSEMBLE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "The Smith Ensemble formed as a result of many family gatherings through the years, which oft times included singing together favorite choral music around the piano in our living room. The ensemble is made up of two parents, eight of their children, and two sons-in-law. This recording was born out of the desire to share our love of faith, family, and friends. We hope you feel Heaven's light and love through the inspirational messages found within these anthems and sacred songs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "We are forever indebted to our parents, Fairon and Carolyn Smith, and Fred and Naomi Bonney, who instilled in us at an early age a love of great and inspiring music, who believed in, and supported us through our formative years of musical training, and who have continued to be our greatest fans. We dedicate this humble musical offering to them! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Further, this CD project never would have materialized without the interest, vision, encouragement, and generous support of Blake and Nancy Roney, and Brad and Shanda Roberts. These dear friends saw something in us that we didn\u2019t see in ourselves. For this we express our deepest gratitude!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-icons-ensemble");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.fadeOut_bool == true ? "fadeOut_scss" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("muted", "muted")("loop", "loop");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _icons_icons_component__WEBPACK_IMPORTED_MODULE_3__["IconsComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Tangerine&display=swap\");\n\n@keyframes fadeInAnimation {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fadeOutAnimation {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@media only all and (min-width: 0) {\n  .container[_ngcontent-%COMP%] {\n    position: relative;\n    text-align: center;\n    background-color: #f5f5f5;\n    padding-bottom: 2em;\n    margin-bottom: em;\n    margin-top: 4em;\n    position: relative;\n  }\n  .mat-drawer-backdrop.mat-drawer-shown[_ngcontent-%COMP%] {\n    height: 100vh;\n  }\n  #videoHolder[_ngcontent-%COMP%] {\n    position: relative;\n    overflow: hidden;\n    cursor: pointer;\n  }\n  #videoHolder[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    animation: fadeInAnimation ease 1.5s;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n  }\n  #videoHolder[_ngcontent-%COMP%]   .fadeOut_scss[_ngcontent-%COMP%] {\n    animation: fadeOutAnimation ease 1.5s;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n  }\n  .scripture-quote[_ngcontent-%COMP%] {\n    margin: 2em auto;\n    padding: 0.01em 2em 1em 2em;\n    font-size: 16px;\n    font-style: italic;\n  }\n  .scripture-quote[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-family: \"Times New Roman\", Times, serif;\n    font-weight: bolder;\n  }\n  .album-cover[_ngcontent-%COMP%] {\n    position: relative;\n    width: 60%;\n    max-width: 500px;\n    left: 5px;\n    z-index: 1;\n    margin: 2.5rem 0;\n  }\n  .cd-album-cover[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 50%;\n    max-width: 450px;\n    border-radius: 1px;\n    transition: 2s;\n    margin: 2.5rem 0;\n  }\n  .my-container[_ngcontent-%COMP%]:hover   .cd-album-cover[_ngcontent-%COMP%] {\n    transform: translateX(60%);\n  }\n  .buy-cd[_ngcontent-%COMP%] {\n    padding-left: 2em;\n    padding-right: 2em;\n    font-size: 1.2em;\n  }\n  .btn[_ngcontent-%COMP%] {\n    margin-bottom: 3em;\n  }\n  h3[_ngcontent-%COMP%] {\n    font-family: \"Times New Roman\", Times, serif;\n    font-weight: bolder;\n  }\n}\n@media only all and (min-width: 992px) {\n  .container[_ngcontent-%COMP%] {\n    width: 80vw;\n  }\n  .scripture-quote[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  p[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media only all and (min-width: 1600px) {\n  .scripture-quote[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .scripture-quote[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 50px;\n    font-family: \"Times New Roman\", Times, serif;\n  }\n  p[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n/*# sourceMappingURL=ensemble.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5zZW1ibGUvZW5zZW1ibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Vuc2VtYmxlL2Vuc2VtYmxlLmNvbXBvbmVudC5jc3MiLCJzcmMvYXBwL3VuaXZlcnNhbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDUSw4RUFBQTtBQURSLGdEQUFBO0FBS0E7RUFDRTtJQUNJLFVBQUE7RUNGSjtFRElBO0lBQ0ksVUFBQTtFQ0ZKO0FBQ0Y7QURLQTtFQUNFO0lBQ0UsVUFBQTtFQ0hGO0VES0E7SUFDRSxVQUFBO0VDSEY7QUFDRjtBRE9BO0VFdkJFO0lBQ0Usa0JBQUE7SUFDQSxrQkFBQTtJQUVBLHlCQUFBO0lBRUEsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFRGlCRjtFQ2ZGO0lBQ0UsYUFBQTtFRGlCQTtFREpBO0lBQ0Usa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7RUNNRjtFRExFO0lBQ0UsY0FBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxNQUFBO0lBRUEsb0NBQUE7SUFDQSw0QkFBQTtJQUNBLDZCQUFBO0VDTUo7RURGRTtJQUNFLHFDQUFBO0lBQ0EsNEJBQUE7SUFDQSw2QkFBQTtFQ0lKO0VEQUE7SUFDRSxnQkFBQTtJQUNBLDJCQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VDRUY7RURERTtJQUNFLDRDQUFBO0lBQ0EsbUJBQUE7RUNHSjtFRENBO0lBQ0Usa0JBQUE7SUFHQSxVQUFBO0lBQ0EsZ0JBQUE7SUFFQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLGdCQUFBO0VDRkY7RURPQTtJQUNFLGtCQUFBO0lBRUEsVUFBQTtJQUNBLGdCQUFBO0lBRUEsa0JBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7RUNQRjtFRFNBO0lBQ0UsMEJBQUE7RUNQRjtFRFdBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUVBLGdCQUFBO0VDVkE7RURhQTtJQUNFLGtCQUFBO0VDWEY7RURjQTtJQUNFLDRDQUFBO0lBQ0EsbUJBQUE7RUNaRjtBQUNGO0FEa0JBO0VFN0ZFO0lBQ0UsV0FBQTtFRDhFRjtFRGdCQTtJQUNFLGVBQUE7RUNkRjtFRGdCQTtJQUNFLGVBQUE7RUNkRjtBQUNGO0FEaUJBO0VBRUU7SUFDRSxlQUFBO0VDaEJGO0VEaUJFO0lBQ0UsZUFBQTtJQUNBLDRDQUFBO0VDZko7RURrQkE7SUFDRSxlQUFBO0VDaEJGO0FBQ0Y7QUFBQSxpREFBQSIsImZpbGUiOiJzcmMvYXBwL2Vuc2VtYmxlL2Vuc2VtYmxlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnsembleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mybody',
                templateUrl: './ensemble.component.html',
                styleUrls: ['./ensemble.component.css']
            }]
    }], function () { return []; }, { videoHolder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['videoHolder']
        }] }); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 10, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col-md", "center"], [1, "col-md"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contact us: thesmithensemble@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Copyright 2020, The Smith Ensemble. All Rights Reserved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%]{\r\n  margin-top:  auto; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBCQUEwQjtBQUMxQjs7Ozs7Ozs7Ozs7Ozs7bUNBY21DO0FBRW5DOzsrREFFK0Q7QUFLL0Q7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdGlja3kgRm9vdGVyIENsYXNzZXMgKi9cclxuLyogXHJcbmh0bWwsXHJcbmJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuI3BhZ2UtY29udGVudCB7XHJcbiAgZmxleDogMSAwIGF1dG87XHJcbn1cclxuXHJcbiNzdGlja3ktZm9vdGVyIHtcclxuICBmbGV4LXNocmluazogbm9uZTtcclxufVxyXG5cclxuLyogT3RoZXIgQ2xhc3NlcyBmb3IgUGFnZSBTdHlsaW5nICovXHJcblxyXG4vKiBib2R5IHtcclxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gIC8qIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2FkYWRhZCwgI2Q4ZDhkOCk7ICovXHJcblxyXG5cclxuXHJcblxyXG4uZm9vdGVye1xyXG4gIG1hcmdpbi10b3A6ICBhdXRvOyBcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/icons-smithsix/icons-smithsix.component.ts":
/*!************************************************************!*\
  !*** ./src/app/icons-smithsix/icons-smithsix.component.ts ***!
  \************************************************************/
/*! exports provided: IconsSmithsixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsSmithsixComponent", function() { return IconsSmithsixComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class IconsSmithsixComponent {
    constructor() { }
    ngOnInit() {
    }
}
IconsSmithsixComponent.ɵfac = function IconsSmithsixComponent_Factory(t) { return new (t || IconsSmithsixComponent)(); };
IconsSmithsixComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconsSmithsixComponent, selectors: [["app-icons-smithsix"]], decls: 13, vars: 0, consts: [["href", "https://www.facebook.com/The-Smith-Six-100728974790314/"], ["src", "../../assets/icons/f_Logo_Online_04_2019/black/PNG/f_logo_RGB-Black_72.png", "alt", ""], ["href", "https://open.spotify.com/artist/6mLRhAP6bci5WQQYFNZZWO?si=ty5VILwMQsy6W98fWFMdaQ", 1, "dropdown-item"], ["src", "../../assets/icons/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Black.png", "alt", ""], ["href", "dropdown-item", "href", "https://music.apple.com/us/artist/the-smith-six/1524680457", 1, "dropdown-item"], ["src", "../../assets/icons/black.svg", "alt", ""], ["href", "https://www.youtube.com/channel/UCopgCKjuGoriM1_99KDrdJQ", 1, "dropdown-item"], ["src", "../../assets/icons/youtube_monochrome_light_icon/social/64px/dark/youtube_social_circle_dark.png", "alt", ""]], template: function IconsSmithsixComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["ul[_ngcontent-%COMP%]{\r\n\r\n    display: flex;\r\n\r\n    justify-content: center;\r\n\r\n    list-style: none;\r\n    \r\n    padding-right: 3em;\r\n}\r\n\r\nli[_ngcontent-%COMP%]{\r\n    padding: 1em;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    height: 40px;\r\n    width: 40px;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaWNvbnMtc21pdGhzaXgvaWNvbnMtc21pdGhzaXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7O0lBRUksYUFBYTs7SUFFYix1QkFBdUI7O0lBRXZCLGdCQUFnQjs7SUFFaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFHQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1giLCJmaWxlIjoic3JjL2FwcC9pY29ucy1zbWl0aHNpeC9pY29ucy1zbWl0aHNpeC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnVse1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIFxyXG4gICAgcGFkZGluZy1yaWdodDogM2VtO1xyXG59XHJcblxyXG5saXtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG5cclxuXHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsSmithsixComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-icons-smithsix',
                templateUrl: './icons-smithsix.component.html',
                styleUrls: ['./icons-smithsix.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/icons/icons.component.ts":
/*!******************************************!*\
  !*** ./src/app/icons/icons.component.ts ***!
  \******************************************/
/*! exports provided: IconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconsComponent", function() { return IconsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class IconsComponent {
    constructor() { }
    ngOnInit() {
    }
}
IconsComponent.ɵfac = function IconsComponent_Factory(t) { return new (t || IconsComponent)(); };
IconsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconsComponent, selectors: [["app-icons-ensemble"]], decls: 13, vars: 0, consts: [["href", "https://www.facebook.com/The-Smith-EnsembleThe-Smith-Six-111154203733766", "title", "FaceBook"], ["src", "../../assets/icons/f_Logo_Online_04_2019/black/PNG/f_logo_RGB-Black_72.png", "alt", ""], ["href", "https://open.spotify.com/artist/6Hv6vKcfx47sl3nnZYZgTa?si=zXnJgX_FT5GDVgeSrbBD-Q", "title", "Spotify", 1, "dropdown-item"], ["src", "../../assets/icons/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Black.png", "alt", ""], ["href", "https://music.apple.com/us/artist/the-smith-ensemble/1362320518", "title", "Apple Music", 1, "dropdown-item"], ["src", "../../assets/icons/black.svg", "alt", ""], ["href", "https://www.youtube.com/channel/UCopgCKjuGoriM1_99KDrdJQ", "title", "YouTube", 1, "dropdown-item"], ["src", "../../assets/icons/youtube_monochrome_light_icon/social/64px/dark/youtube_social_circle_dark.png", "alt", ""]], template: function IconsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["ul[_ngcontent-%COMP%]{\r\n\r\n    display: flex;\r\n\r\n    justify-content: center;\r\n\r\n    list-style: none;\r\n    \r\n    padding-right: 3em;\r\n}\r\n\r\nli[_ngcontent-%COMP%]{\r\n    padding: 1em;\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    height: 40px;\r\n    width: 40px;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaWNvbnMvaWNvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7O0lBRUksYUFBYTs7SUFFYix1QkFBdUI7O0lBRXZCLGdCQUFnQjs7SUFFaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFHQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1giLCJmaWxlIjoic3JjL2FwcC9pY29ucy9pY29ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnVse1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIFxyXG4gICAgcGFkZGluZy1yaWdodDogM2VtO1xyXG59XHJcblxyXG5saXtcclxuICAgIHBhZGRpbmc6IDFlbTtcclxufVxyXG5cclxuXHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmltZ3tcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IconsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-icons-ensemble',
                templateUrl: './icons.component.html',
                styleUrls: ['./icons.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main-nav/main-nav.component.ts":
/*!************************************************!*\
  !*** ./src/app/main-nav/main-nav.component.ts ***!
  \************************************************/
/*! exports provided: MainNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainNavComponent", function() { return MainNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");












function MainNavComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainNavComponent_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainNavComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "The Smith Six");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Videos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Buy CDs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Contact Us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { hidden: a0 }; };
class MainNavComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
    }
}
MainNavComponent.ɵfac = function MainNavComponent_Factory(t) { return new (t || MainNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
MainNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainNavComponent, selectors: [["main-nav"]], decls: 30, vars: 20, consts: [[1, "sidenav-container"], ["id", "isFixed", "fixedInViewport", "", 1, "sidenav", 3, "ngClass", "mode", "opened"], ["drawer", ""], ["mat-list-item", "", "routerLink", "/", 3, "click"], ["mat-list-item", "", "routerLink", "/smithsix", 3, "click"], ["mat-list-item", "", "routerLink", "/videos", 3, "click"], ["mat-list-item", "", "routerLink", "/buy-cds", 3, "click"], ["mat-list-item", "", "routerLink", "/contact-us", 3, "click"], ["color", "primary", 1, "isFixed"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["routerLink", "/"], [1, "spacer"], [4, "ngIf"], ["type", "button", "aria-label", "Toggle sidenav", "mat-icon-button", "", 3, "click"], ["aria-label", "Side nav toggle icon"], ["routerLink", "/smithsix"], ["routerLink", "/videos"], ["routerLink", "/buy-cds"], ["routerLink", "/contact-us"]], template: function MainNavComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainNavComponent_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainNavComponent_Template_a_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "The Smith Six");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainNavComponent_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainNavComponent_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Buy-CDs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainNavComponent_Template_a_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-toolbar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MainNavComponent_button_22_Template, 3, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "The Smith Ensemble");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, MainNavComponent_div_28_Template, 11, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](29, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 6, ctx.isHandset$) === false))("mode", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 10, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 12, ctx.isHandset$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, ctx.isHandset$) ? "dialog" : "navigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 14, ctx.isHandset$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](29, 16, ctx.isHandset$));
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenav"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatSidenavContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["[_nghost-%COMP%]     .content {\r\n  height: -moz-available;          \r\n  height: -webkit-fill-available;  \r\n}\r\n\r\n\r\nbody[_ngcontent-%COMP%]{\r\n  margin: 0;\r\n}\r\n\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n}\r\n\r\n\r\n.sidenav-container[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\n\r\n\r\n.sidenav[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n}\r\n\r\n\r\n.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\r\n  background: inherit;\r\n}\r\n\r\n\r\n.mat-toolbar.mat-primary[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 0;\r\n  z-index: 5;\r\n\r\n  \r\n\r\n  background-color: #ad8436;\r\n}\r\n\r\n\r\n.isFixed[_ngcontent-%COMP%]{\r\n  position: fixed;\r\n  top: 0;\r\n  \r\n}\r\n\r\n\r\n.hidden[_ngcontent-%COMP%]{\r\n  display:none;\r\n}\r\n\r\n\r\n.spacer[_ngcontent-%COMP%]{\r\n  flex: 1 1 auto;\r\n}\r\n\r\n\r\nmat-toolbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  margin:0 10px;\r\n  color: white;\r\n  text-decoration: none;\r\n\r\n}\r\n\r\n\r\n.mat-drawer-container[_ngcontent-%COMP%]{ overflow: visible; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1uYXYvbWFpbi1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxzQkFBc0IsV0FBVyw0Q0FBNEM7RUFDN0UsOEJBQThCLEdBQUcsNkNBQTZDO0FBQ2hGOzs7QUFHQTtFQUNFLFNBQVM7QUFDWDs7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7OztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sVUFBVTs7OztFQUlWLHlCQUF5QjtBQUMzQjs7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTs7QUFFUjs7O0FBSUE7RUFDRSxZQUFZO0FBQ2Q7OztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7O0FBR0E7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLFlBQVk7RUFDWixxQkFBcUI7O0FBRXZCOzs7QUFHQSx1QkFBdUIsaUJBQWlCLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9tYWluLW5hdi9tYWluLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbjpob3N0ID4+PiAuY29udGVudCB7XHJcbiAgaGVpZ2h0OiAtbW96LWF2YWlsYWJsZTsgICAgICAgICAgLyogV2ViS2l0LWJhc2VkIGJyb3dzZXJzIHdpbGwgaWdub3JlIHRoaXMuICovXHJcbiAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlOyAgLyogTW96aWxsYS1iYXNlZCBicm93c2VycyB3aWxsIGlnbm9yZSB0aGlzLiAqL1xyXG59XHJcblxyXG5cclxuYm9keXtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiA1O1xyXG5cclxuICBcclxuXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FkODQzNjtcclxufVxyXG5cclxuLmlzRml4ZWR7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBcclxufVxyXG5cclxuXHJcblxyXG4uaGlkZGVue1xyXG4gIGRpc3BsYXk6bm9uZTtcclxufVxyXG4gIFxyXG4uc3BhY2Vye1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG5cclxubWF0LXRvb2xiYXIgYSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjowIDEwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbn1cclxuXHJcblxyXG4ubWF0LWRyYXdlci1jb250YWluZXJ7IG92ZXJmbG93OiB2aXNpYmxlOyB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'main-nav',
                templateUrl: './main-nav.component.html',
                styleUrls: ['./main-nav.component.css']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, null); })();


/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 19, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col"], [1, "my-nav"], ["routerLink", "/ensemble"], ["routerLink", "/smithsix"], ["routerLink", "/videos"], ["routerLink", "/buy-cds"], ["routerLink", "/contact"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Smith Ensemble");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Smith Six");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Buy Cds");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".my-nav[_ngcontent-%COMP%]{\r\n\r\n\r\n    font-size: 1.2em;\r\n    color: #2f4e5c;\r\n    font-weight: bolder;\r\n\r\n    \r\n    box-shadow: 0 10px 5px -10px #999;\r\n}\r\n\r\n\r\n.dropdown-menu[_ngcontent-%COMP%]{\r\n    height: auto;\r\n    }\r\n\r\n\r\n.header[_ngcontent-%COMP%]{\r\n        font-size: 1em;\r\n        color: #2f4e5c;\r\n        font-weight: bolder;\r\n    }\r\n\r\n\r\nul[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        list-style: none;\r\n        justify-content: space-around;\r\n        padding-right: 3em;\r\n    }\r\n\r\n\r\nli[_ngcontent-%COMP%]{\r\n   padding: 1em;\r\n    }\r\n\r\n\r\na[_ngcontent-%COMP%]{\r\n        text-decoration: none;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7O0lBR0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxtQkFBbUI7O0lBRW5COzJDQUN1QztJQUN2QyxpQ0FBaUM7QUFDckM7OztBQUdBO0lBQ0ksWUFBWTtJQUNaOzs7QUFJQTtRQUNJLGNBQWM7UUFDZCxjQUFjO1FBQ2QsbUJBQW1CO0lBQ3ZCOzs7QUFHQTtRQUNJLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsNkJBQTZCO1FBQzdCLGtCQUFrQjtJQUN0Qjs7O0FBRUE7R0FDRCxZQUFZO0lBQ1g7OztBQUdBO1FBQ0kscUJBQXFCO0lBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5teS1uYXZ7XHJcblxyXG5cclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBjb2xvcjogIzJmNGU1YztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcblxyXG4gICAgLyogLXdlYmtpdC1ib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCAjOTk5O1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDhweCA2cHggLTZweCAjOTk5OyAqL1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDVweCAtMTBweCAjOTk5O1xyXG59XHJcblxyXG5cclxuLmRyb3Bkb3duLW1lbnV7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBcclxuICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgICAgY29sb3I6ICMyZjRlNWM7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICB1bHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogM2VtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsaXtcclxuICAgcGFkZGluZzogMWVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIGF7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gICAgIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/mail.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/mail.service.ts ***!
  \******************************************/
/*! exports provided: MailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailService", function() { return MailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MailService {
    constructor() { }
    sendEmail(formData) {
        return fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        });
    }
}
MailService.ɵfac = function MailService_Factory(t) { return new (t || MailService)(); };
MailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MailService, factory: MailService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/smithensemblelinks/smithensemblelinks.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/smithensemblelinks/smithensemblelinks.component.ts ***!
  \********************************************************************/
/*! exports provided: SmithensemblelinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmithensemblelinksComponent", function() { return SmithensemblelinksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");



class SmithensemblelinksComponent {
    constructor() { }
    ngOnInit() {
    }
}
SmithensemblelinksComponent.ɵfac = function SmithensemblelinksComponent_Factory(t) { return new (t || SmithensemblelinksComponent)(); };
SmithensemblelinksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SmithensemblelinksComponent, selectors: [["app-smithensemblelinks"]], decls: 15, vars: 0, consts: [["mat-menu-item", ""], ["href", "https://open.spotify.com/artist/6Hv6vKcfx47sl3nnZYZgTa?si=zXnJgX_FT5GDVgeSrbBD-Q", 1, "dropdown-item"], ["href", "https://music.apple.com/us/artist/the-smith-ensemble/1362320518", 1, "dropdown-item"], ["mat-menu-item", "", 1, "dd-item"], ["href", "https://www.amazon.com/Things-Come-Thee-Smith-Ensemble/dp/B08CBLMJF5/ref=sr_1_1?dchild=1&keywords=all+things+come+of+thee&qid=1595090492&sr=8-1", 1, "dropdown-item"], ["href", "https://www.youtube.com/channel/UCopgCKjuGoriM1_99KDrdJQ", 1, "dropdown-item"], ["href", "https://www.heirloomartco.com/products/the-smith-ensemble-all-things-come-of-thee?_pos=1&_sid=2085e6cd3&_ss=r", 1, "dropdown-item"]], template: function SmithensemblelinksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Spotify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Apple Music");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Amazon Music");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Youtube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Buy a CD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuItem"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NtaXRoZW5zZW1ibGVsaW5rcy9zbWl0aGVuc2VtYmxlbGlua3MuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SmithensemblelinksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-smithensemblelinks',
                templateUrl: './smithensemblelinks.component.html',
                styleUrls: ['./smithensemblelinks.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/smithsix/smithsix.component.ts":
/*!************************************************!*\
  !*** ./src/app/smithsix/smithsix.component.ts ***!
  \************************************************/
/*! exports provided: SmithsixComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmithsixComponent", function() { return SmithsixComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _icons_smithsix_icons_smithsix_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons-smithsix/icons-smithsix.component */ "./src/app/icons-smithsix/icons-smithsix.component.ts");




class SmithsixComponent {
    constructor() { }
    ngOnInit() {
    }
}
SmithsixComponent.ɵfac = function SmithsixComponent_Factory(t) { return new (t || SmithsixComponent)(); };
SmithsixComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SmithsixComponent, selectors: [["app-smithsix"]], decls: 25, vars: 0, consts: [[1, "container"], [1, "row"], [1, "col", "p-2"], ["src", "../../assets/images/SmithEnsemblePics/SmithSixBridge_wText.jpg", 1, "center"], [1, "col-md"], [1, "listen-now", "top-right"], [1, "scripture-quote"], [1, "my-container"], ["routerLink", "/buy-cds"], ["src", "../../assets/images/SmithEnsemblePics/CDSmithSix.png", 1, "cd-album-cover"], ["src", "../../assets/images/SmithEnsemblePics/Smith-SixCDsmall.png", 1, "album-cover"], [1, "col-md-12", "text-center", "my-text-info"]], template: function SmithsixComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "THE SMITH SIX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "While working on All Things Come of Thee, a recording by The Smith Ensemble, the question was asked of us, \u201CWhat about a Smith Six recording?\u201D Up until then we hadn\u2019t considered that prospect, but with the encouragement of dear friends we immediately went to work. The bulk of Brightly Beams was completed within a three week period (December 2018). Our time was especially limited as our son Asher, the oldest member of the group, would be departing for a church mission January 2, 2019. Somehow, in the end, it all came together!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "The Smith Six comprises the youngest siblings of The Smith Ensemble. They learned they could sing in harmony while waiting for their dad in a grocery store parking lot. With no ukelele handy they began to arrange, a cappella, the song, Can't Help Falling in Love, made famous by Elvis Presley. Once following a family concert for a Kiwanis Club luncheon, someone commented that they \u201Csounded like the young Osmonds.\u201D Upon returning home, the kids looked up some early Osmond Brothers performances from the Andy Williams Show. Quickly hooked, they promptly started learning a few of these same barbershop numbers, branching out from there. Hence, The Smith Six were \u201Cborn.\u201D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "With the diverse collection of songs and styles found in this recording, it is our desire that the listener will also find hope, peace, faith, love, and a bit of fun.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "The late Fairon Smith, Grandfather to The Smith Six, spent 27 years in the US Navy. His most beloved hymn, unquestionably due to his long naval career, was Brightly Beams Our Father\u2019s Mercy. While \u201CGraumpy\u201D is no longer with us, we believe he would be pleased with this recording, and humbly dedicate Brightly Beams to him.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-icons-smithsix");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _icons_smithsix_icons_smithsix_component__WEBPACK_IMPORTED_MODULE_2__["IconsSmithsixComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Tangerine&display=swap\");\n\n@media only all and (min-width: 0) {\n  .container[_ngcontent-%COMP%] {\n    position: relative;\n    text-align: center;\n    background-color: #f5f5f5;\n    padding-bottom: 2em;\n    margin-bottom: em;\n    margin-top: 4em;\n    position: relative;\n  }\n  .mat-drawer-backdrop.mat-drawer-shown[_ngcontent-%COMP%] {\n    height: 100vh;\n  }\n  .container[_ngcontent-%COMP%] {\n    position: relative;\n    text-align: center;\n    background-color: #f5f5f5;\n    padding: 2em;\n    margin-bottom: em;\n    margin-top: 4em;\n  }\n  .vid[_ngcontent-%COMP%] {\n    margin: 2em;\n  }\n  \n  \n  \n  .center[_ngcontent-%COMP%] {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 100%;\n    animation: fadeInAnimation ease 1s;\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n  }\n  @keyframes fadeInAnimation {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n  .album-cover[_ngcontent-%COMP%] {\n    position: relative;\n    width: 60%;\n    max-width: 500px;\n    left: 5px;\n    z-index: 1;\n    margin: 2.5rem 0;\n  }\n  .cd-album-cover[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 50%;\n    max-width: 450px;\n    border-radius: 1px;\n    transition: 2s;\n    margin: 2.5rem 0;\n  }\n  .my-container[_ngcontent-%COMP%]:hover   .cd-album-cover[_ngcontent-%COMP%] {\n    transform: translateX(60%);\n  }\n  figure[_ngcontent-%COMP%] {\n    margin: 0 auto;\n  }\n  figure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    padding: 2em;\n  }\n  .play-now-bttn[_ngcontent-%COMP%] {\n    background-color: #ff8c62;\n    border: none;\n    width: 15em;\n    height: 3em;\n    border-radius: 2em;\n  }\n  h2[_ngcontent-%COMP%] {\n    font-weight: bolder;\n  }\n  .featured-vid[_ngcontent-%COMP%] {\n    max-width: 500px;\n  }\n  .scripture-quote[_ngcontent-%COMP%] {\n    font-size: 16px;\n    font-style: italic;\n  }\n  .scripture-quote[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-family: \"Times New Roman\", Times, serif;\n    font-weight: bolder;\n  }\n  h3[_ngcontent-%COMP%] {\n    font-family: \"Times New Roman\", Times, serif;\n    font-weight: bolder;\n  }\n  \n}\n@media only all and (min-width: 992px) {\n  .container[_ngcontent-%COMP%] {\n    width: 80vw;\n  }\n  .scripture-quote[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  figure[_ngcontent-%COMP%] {\n    width: 50vw;\n  }\n  p[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media only all and (min-width: 1600px) {\n  .scripture-quote[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .scripture-quote[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 50px;\n    font-family: \"Times New Roman\", Times, serif;\n  }\n  p[_ngcontent-%COMP%] {\n    font-size: 25px;\n  }\n}\n/*# sourceMappingURL=smithsix.component.css.map */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc21pdGhzaXgvc21pdGhzaXguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VuaXZlcnNhbC5zY3NzIiwic3JjL2FwcC9zbWl0aHNpeC9zbWl0aHNpeC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDUSw4RUFBQTtBQURSLGdEQUFBO0FBTUE7RUNMRTtJQUNFLGtCQUFBO0lBQ0Esa0JBQUE7SUFFQSx5QkFBQTtJQUVBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7RUNDRjtFRENGO0lBQ0UsYUFBQTtFQ0NBO0VGTkE7SUFDRSxrQkFBQTtJQUNBLGtCQUFBO0lBRUEseUJBQUE7SUFFQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0VFTUY7RUZGQTtJQUNFLFdBQUE7RUVJRjtFRkRFLG1CQUFBO0VBQ0Y7Ozs7T0FBQTtFQU1BLHFCQUFBO0VBQ0E7SUFDSSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFFQSxrQ0FBQTtJQUNBLDRCQUFBO0lBQ0EsNkJBQUE7RUVDSjtFRkdFO0lBQ0U7TUFDSSxVQUFBO0lFRE47SUZHRTtNQUNJLFVBQUE7SUVETjtFQUNGO0VGSUE7SUFDRSxrQkFBQTtJQUdBLFVBQUE7SUFDQSxnQkFBQTtJQUVBLFNBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7RUVMRjtFRlVBO0lBQ0Usa0JBQUE7SUFFRCxVQUFBO0lBQ0MsZ0JBQUE7SUFFQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtFRVZGO0VGZ0JBO0lBQ0UsMEJBQUE7RUVkRjtFRmlCQTtJQUNFLGNBQUE7RUVmRjtFRmdCRTtJQUNFLFlBQUE7RUVkSjtFRm1CQTtJQUNJLHlCQUFBO0lBQ0EsWUFBQTtJQUVBLFdBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7RUVsQko7RUZxQkE7SUFFSSxtQkFBQTtFRXBCSjtFRndCQTtJQUVFLGdCQUFBO0VFdkJGO0VGMkJBO0lBR0UsZUFBQTtJQUNBLGtCQUFBO0VFM0JGO0VGNEJFO0lBQ0UsNENBQUE7SUFDQSxtQkFBQTtFRTFCSjtFRjhCQTtJQUNFLDRDQUFBO0lBQ0EsbUJBQUE7RUU1QkY7RUYrQkEsZ0RBQUE7QUU3QkY7QUZtQ0E7RUN0SEU7SUFDRSxXQUFBO0VDc0ZGO0VGaUNBO0lBQ0UsZUFBQTtFRS9CRjtFRmlDQTtJQUNFLFdBQUE7RUUvQkY7RUZpQ0E7SUFDRSxlQUFBO0VFL0JGO0FBQ0Y7QUZrQ0E7RUFDRTtJQUNFLGVBQUE7RUVoQ0Y7RUZpQ0U7SUFDRSxlQUFBO0lBQ0EsNENBQUE7RUUvQko7RUZrQ0E7SUFDRSxlQUFBO0VFaENGO0FBQ0Y7QUFBQSxpREFBQSIsImZpbGUiOiJzcmMvYXBwL3NtaXRoc2l4L3NtaXRoc2l4LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SmithsixComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-smithsix',
                templateUrl: './smithsix.component.html',
                styleUrls: ['./smithsix.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/smithsixlinks/smithsixlinks.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/smithsixlinks/smithsixlinks.component.ts ***!
  \**********************************************************/
/*! exports provided: SmithsixlinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmithsixlinksComponent", function() { return SmithsixlinksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");



class SmithsixlinksComponent {
    constructor() { }
    ngOnInit() {
    }
}
SmithsixlinksComponent.ɵfac = function SmithsixlinksComponent_Factory(t) { return new (t || SmithsixlinksComponent)(); };
SmithsixlinksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SmithsixlinksComponent, selectors: [["app-smithsixlinks"]], decls: 12, vars: 0, consts: [["mat-menu-item", ""], ["href", "https://open.spotify.com/artist/6mLRhAP6bci5WQQYFNZZWO?si=ty5VILwMQsy6W98fWFMdaQ", 1, "dropdown-item"], ["href", "https://music.apple.com/us/artist/the-smith-six/1524680457", 1, "dropdown-item"], ["href", "https://www.youtube.com/watch?v=Bt5KjlZFv-4&list=PL8LbCtyXa1xWy8wsPclqszd56RanSB63r", 1, "dropdown-item"], ["href", "https://www.heirloomartco.com/products/the-smith-six-brightly-beams?_pos=1&_sid=c6799a449&_ss=r", 1, "dropdown-item"]], template: function SmithsixlinksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Spotify");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Apple Music");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Youtube");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Buy a CD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__["MatMenuItem"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NtaXRoc2l4bGlua3Mvc21pdGhzaXhsaW5rcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SmithsixlinksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-smithsixlinks',
                templateUrl: './smithsixlinks.component.html',
                styleUrls: ['./smithsixlinks.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/videos/videos.component.ts":
/*!********************************************!*\
  !*** ./src/app/videos/videos.component.ts ***!
  \********************************************/
/*! exports provided: VideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosComponent", function() { return VideosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function VideosComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "iframe", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vid_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.getEmbedUrl(vid_r2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](vid_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](vid_r2.group);
} }
function VideosComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "iframe", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vid_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.getEmbedUrl(vid_r3), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](vid_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](vid_r3.group);
} }
class VideosComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.title = 'Video List';
        this.videoListCol_one = [
            {
                name: "O Magnum Mysterium",
                group: "The Smith Ensemble",
                embed: "JnGAuYPwVaM"
            },
            {
                name: "Have Yourself a Merry Little Christmas",
                group: "The Smith Six",
                embed: "GZDnCmSxnSY"
            },
            {
                name: "Look at the World",
                group: "The Smith Ensemble",
                embed: "kEUMsWoW8V8"
            },
            {
                name: "Pilgrim Song",
                group: "The Smith Ensemble",
                embed: "n9a_5N3vSJg"
            },
            {
                name: "Born on a new Day",
                group: "The Smith Ensemble",
                embed: "CjmUJSkxqIg"
            },
            {
                name: "Side By Side",
                group: "The Smith Six",
                embed: "HKf1Jwho0rc"
            },
            {
                name: "Be My Little Baby Bumblebee",
                group: "The Smith Six",
                embed: "15DUKIx7p-w"
            }
        ];
        this.videoListCol_two = [
            {
                name: "Savior, Redeemer of My Soul",
                group: "The Smith Ensemble",
                embed: "pPAb4DQsIm8"
            },
            {
                name: "Africa (cover)",
                group: "The Smith Six",
                embed: "Bt5KjlZFv-4"
            },
            {
                name: "The Lord is my Shepard",
                group: "The Smith Ensemble",
                embed: "9QBN3HBA9iY"
            },
            {
                name: "Amazing Grace",
                group: "The Smith Ensemble",
                embed: "qu3MSnV7WRA"
            },
            {
                name: "Pie Jesu",
                group: "The Smith Ensemble",
                embed: "qrvr9EWuhRc"
            },
            {
                name: "Prayer of the Children",
                group: "The Smith Six",
                embed: "tzqJwQ1htZE"
            },
            {
                name: "Bye, Bye Blues",
                group: "The Smith Six",
                embed: "I5JQOJmTZh0"
            }
        ];
    }
    ngOnInit() {
    }
    getEmbedUrl(item) {
        return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + item.embed);
    }
}
VideosComponent.ɵfac = function VideosComponent_Factory(t) { return new (t || VideosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
VideosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideosComponent, selectors: [["app-videos"]], decls: 12, vars: 2, consts: [[1, "container", "video-body"], [1, "row"], [1, "col-md-12", "text-center", "my-text-info"], [1, "col-md-6"], [4, "ngFor", "ngForOf"], [1, "video-container"], [1, "iframe-container"], ["width", "100%", "height", "315", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src"], [1, "text-center", "vidName"], [1, "text-center"], ["width", "560", "height", "315", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 3, "src"]], template: function VideosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Music Videos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Here are some music videos that we have made, we hope you enjoy listening to them as much as we had filming them.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, VideosComponent_div_9_Template, 8, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, VideosComponent_div_11_Template, 8, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.videoListCol_one);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.videoListCol_two);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".my-text-info[_ngcontent-%COMP%]{\r\n    padding-bottom: 2em;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n.iframe-container[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width: 100%;\r\n    padding-bottom: 56.25%;\r\n    height:0;\r\n\r\n}\r\n\r\n.iframe-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top:0;\r\n    left:0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.video-container[_ngcontent-%COMP%]{\r\n    margin: 2em;\r\n    padding: 2em;\r\n    \r\n\r\n    background-color: white;\r\n\r\n    box-shadow: 0 0 5px 0 rgba(0,0,0,0.2);\r\n    transition: box-shadow 0.3s ease-in-out;\r\n\r\n}\r\n\r\n.video-container[_ngcontent-%COMP%]:hover{\r\n    box-shadow: 0 0 20px 0 rgba(0,0,0,0.2);\r\n    \r\n}\r\n\r\n.video-body[_ngcontent-%COMP%]{\r\n    margin-top: 3em;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.vidName[_ngcontent-%COMP%]{\r\n    margin-top:1rem;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9zL3ZpZGVvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixRQUFROztBQUVaOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLEtBQUs7SUFDTCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1Qjs7SUFFdkIsdUJBQXVCOztJQUV2QixxQ0FBcUM7SUFDckMsdUNBQXVDOztBQUUzQzs7QUFFQTtJQUNJLHNDQUFzQzs7QUFFMUM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvcy92aWRlb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubXktdGV4dC1pbmZve1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG5cclxuLmlmcmFtZS1jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XHJcbiAgICBoZWlnaHQ6MDtcclxuXHJcbn1cclxuXHJcbi5pZnJhbWUtY29udGFpbmVyIGlmcmFtZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDowO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnZpZGVvLWNvbnRhaW5lcntcclxuICAgIG1hcmdpbjogMmVtO1xyXG4gICAgcGFkZGluZzogMmVtO1xyXG4gICAgLypib3JkZXI6IDFweCBzb2xpZCA7ICovXHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyBlYXNlLWluLW91dDtcclxuXHJcbn1cclxuXHJcbi52aWRlby1jb250YWluZXI6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIFxyXG59XHJcblxyXG4udmlkZW8tYm9keXtcclxuICAgIG1hcmdpbi10b3A6IDNlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbi52aWROYW1le1xyXG4gICAgbWFyZ2luLXRvcDoxcmVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-videos',
                templateUrl: './videos.component.html',
                styleUrls: ['./videos.component.css']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


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
    production: true
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\erikq\OneDrive\Desktop\GitHubRepos\NewJobStuff\Beta3\Smithensemble\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map