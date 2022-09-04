/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./web/src/Model/FormValid.ts":
/*!************************************!*\
  !*** ./web/src/Model/FormValid.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var FormValid = /** @class */ (function () {
    function FormValid(keys) {
        this.keys = keys;
    }
    FormValid.prototype.getKey = function (key) {
        return this.keys.filter(function (index) { return index.key === key; });
    };
    FormValid.prototype.setKey = function (key, value, onChange) {
        var k = this.keys.filter(function (index) { return index.key === key; });
        if (!!k.length) {
            k[0].value = value;
            if (!!onChange)
                onChange();
        }
    };
    FormValid.prototype.allValid = function () {
        var notValids = [];
        this.keys.forEach(function (key) { return (!key.value ? notValids.push(key.value) : null); });
        return notValids.length > 0;
    };
    return FormValid;
}());
exports["default"] = FormValid;


/***/ }),

/***/ "./web/src/Module/Forms.ts":
/*!*********************************!*\
  !*** ./web/src/Module/Forms.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var FormValid_1 = __webpack_require__(/*! ../Model/FormValid */ "./web/src/Model/FormValid.ts");
var HtmlConstants_1 = __webpack_require__(/*! ../Util/HtmlConstants */ "./web/src/Util/HtmlConstants.ts");
var Validation_1 = __webpack_require__(/*! ../Util/Validation */ "./web/src/Util/Validation.ts");
var Forms = /** @class */ (function () {
    function Forms() {
    }
    Forms.setFormsConfig = function () {
        if (!document.forms[0])
            return;
        var forms = document.querySelectorAll('form');
        forms.forEach(Forms.setConfig);
    };
    Forms.setConfig = function (form) {
        form.addEventListener('submit', function (e) { return e.preventDefault(); });
        if (form.id === HtmlConstants_1.default.getSignInFormId())
            Forms.setSignInForm(form);
    };
    Forms.setSignInForm = function (form) {
        var formValid = new FormValid_1.default([
            { key: 'email', value: false },
            { key: 'password', value: false },
        ]);
        var emailInput = form.querySelector(HtmlConstants_1.default.getEmailInputId());
        var passwordInput = form.querySelector(HtmlConstants_1.default.getPasswordInputId());
        var submit = form.querySelector(HtmlConstants_1.default.getSubmitButtonId());
        var forgotPassword = form.querySelector(HtmlConstants_1.default.getForgotPasswordButtonId());
        var setButtonDisable = function () {
            var valid = formValid.allValid();
            submit.disabled = valid;
        };
        emailInput.addEventListener('input', function (e) {
            var target = e.target;
            var str = Validation_1.default.isEmail(target.value);
            if (str === '')
                formValid.setKey('email', true, setButtonDisable);
            else
                formValid.setKey('email', false, setButtonDisable);
            var small = target.parentElement.querySelector('small');
            if (!!small) {
                small.innerText = str;
            }
        });
        passwordInput.addEventListener('input', function (e) {
            var target = e.target;
            var str = Validation_1.default.isPassword(target.value);
            if (str === '')
                formValid.setKey('password', true, setButtonDisable);
            else
                formValid.setKey('password', false, setButtonDisable);
            var small = target.parentElement.querySelector('small');
            if (!!small) {
                small.innerText = str;
            }
        });
        submit.addEventListener('click', function () { });
        forgotPassword.addEventListener('click', function () {
            var container = document.querySelector(HtmlConstants_1.default.getContainerModalForgotPassword());
            if (!!container) {
                var modal = container.querySelector(HtmlConstants_1.default.getModalElement());
                if (!!modal) {
                    var btn = modal.querySelector(HtmlConstants_1.default.getButtonModalClose());
                    if (!!btn)
                        btn.style.right = 'var(--p3)';
                    console.log(btn, !!btn);
                    modal.classList.remove(HtmlConstants_1.default.getClassOutScreenLeft());
                }
            }
        });
        setButtonDisable();
    };
    return Forms;
}());
exports["default"] = Forms;


/***/ }),

/***/ "./web/src/Util/Constants.ts":
/*!***********************************!*\
  !*** ./web/src/Util/Constants.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Constants = /** @class */ (function () {
    function Constants() {
        this.themeId = '@theme_id';
        this.themeLightId = '@theme_id_light';
        this.themeDarkId = '@theme_id_dark';
    }
    Constants.prototype.getThemeId = function () {
        return this.themeId;
    };
    Constants.prototype.getThemeLightId = function () {
        return this.themeLightId;
    };
    Constants.prototype.getThemeDarkId = function () {
        return this.themeDarkId;
    };
    return Constants;
}());
exports["default"] = new Constants();


/***/ }),

/***/ "./web/src/Util/Extra.ts":
/*!*******************************!*\
  !*** ./web/src/Util/Extra.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Colors_1 = __webpack_require__(/*! ../resources/Colors */ "./web/src/resources/Colors.ts");
var HtmlConstants_1 = __webpack_require__(/*! ./HtmlConstants */ "./web/src/Util/HtmlConstants.ts");
var Extra = /** @class */ (function () {
    function Extra() {
    }
    Extra.setModal = function () {
        var modals = document.querySelectorAll(HtmlConstants_1.default.getModalElement());
        if (!modals)
            return;
        modals.forEach(function (modal) {
            var close = modal.querySelector(HtmlConstants_1.default.getButtonModalClose());
            if (!!close) {
                close.style.right = '-200vw';
                close.addEventListener('click', function () {
                    if (!modal.classList.contains(HtmlConstants_1.default.getClassOutScreenLeft())) {
                        modal.classList.add(HtmlConstants_1.default.getClassOutScreenLeft());
                    }
                    close.style.right = '-200vw';
                });
            }
        });
    };
    Extra.onThemeChange = function () {
        var mode = Colors_1.default.getInstance().mode;
        Extra.setAppIconByTheme(null, null);
        var themeButton = document.querySelector(HtmlConstants_1.default.getButtonChangeThemeId());
        var googleButton = document.querySelector(HtmlConstants_1.default.getClassSignInGoogle());
        if (themeButton && themeButton.querySelector('img')) {
            var src = themeButton.querySelector('img').src;
            themeButton.querySelector('img').src =
                mode === 'dark' ? src.replace('moon', 'sun') : src.replace('sun', 'moon');
        }
        if (!!googleButton && !!googleButton.querySelectorAll('img').length) {
            Extra.setAppIconByTheme(googleButton.querySelectorAll('img'), mode, [
                '/images/icon/google.svg',
                'images/icon/google-dark.svg',
            ]);
        }
    };
    Extra.setAppIconByTheme = function (icons, mode, links) {
        if (!icons)
            icons = document.querySelectorAll(HtmlConstants_1.default.getAppIconId());
        if (!mode)
            mode = Colors_1.default.getInstance().mode;
        if (!!icons && icons.length > 0)
            icons.forEach(function (image) {
                if (!!links && links.length === 2) {
                    if (mode === 'light')
                        image.src = links[0];
                    else
                        image.src = links[1];
                }
                else {
                    image.src = mode === 'light' ? '/images/icon/icon.svg' : '/images/icon/icon-dark.svg';
                }
            });
    };
    return Extra;
}());
exports["default"] = Extra;


/***/ }),

/***/ "./web/src/Util/HtmlConstants.ts":
/*!***************************************!*\
  !*** ./web/src/Util/HtmlConstants.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var HtmlConstants = /** @class */ (function () {
    function HtmlConstants() {
        this.appIconId = '#app-icon';
        this.signInFormId = 'sign-in';
        this.emailInputId = '#email';
        this.passwordInputId = '#password';
        this.submitButtonId = '#submit';
        this.forgotPasswordButtonId = '#forgot-password';
        this.containerModalForgotPassword = '#modal-forgot-password';
        this.modaElement = '.modal';
        this.buttonModalClose = '.button-modal-close';
        this.classOutScreenLeft = 'out-screen-left';
        this.classSignInGoogle = '#sign-in-google';
        this.buttonChangeThemeId = '#button-change-theme';
    }
    HtmlConstants.prototype.getButtonChangeThemeId = function () {
        return this.buttonChangeThemeId;
    };
    HtmlConstants.prototype.getClassSignInGoogle = function () {
        return this.classSignInGoogle;
    };
    HtmlConstants.prototype.getClassOutScreenLeft = function () {
        return this.classOutScreenLeft;
    };
    HtmlConstants.prototype.getButtonModalClose = function () {
        return this.buttonModalClose;
    };
    HtmlConstants.prototype.getModalElement = function () {
        return this.modaElement;
    };
    HtmlConstants.prototype.getContainerModalForgotPassword = function () {
        return this.containerModalForgotPassword;
    };
    HtmlConstants.prototype.getForgotPasswordButtonId = function () {
        return this.forgotPasswordButtonId;
    };
    HtmlConstants.prototype.getSubmitButtonId = function () {
        return this.submitButtonId;
    };
    HtmlConstants.prototype.getEmailInputId = function () {
        return this.emailInputId;
    };
    HtmlConstants.prototype.getPasswordInputId = function () {
        return this.passwordInputId;
    };
    HtmlConstants.prototype.getSignInFormId = function () {
        return this.signInFormId;
    };
    HtmlConstants.prototype.getAppIconId = function () {
        return this.appIconId;
    };
    return HtmlConstants;
}());
exports["default"] = new HtmlConstants();


/***/ }),

/***/ "./web/src/Util/Validation.ts":
/*!************************************!*\
  !*** ./web/src/Util/Validation.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var strings_1 = __webpack_require__(/*! ../resources/strings */ "./web/src/resources/strings.ts");
var Validation = /** @class */ (function () {
    function Validation() {
    }
    Validation.isEmail = function (email) {
        if (email.length <= 5 || !email.includes('@') || !email.includes('.'))
            return strings_1.default.emailInvalid;
        var _a = email.split('@'), beforeAt = _a[0], afterAt = _a[1];
        if (!beforeAt || beforeAt.length <= 1 || !afterAt || afterAt.length < 2)
            return strings_1.default.emailInvalid;
        var _b = afterAt.split('.'), beforeDot = _b[0], afterDot = _b[1];
        return !!beforeDot && beforeDot.length >= 1 && !!afterDot && afterDot.length > 1
            ? ''
            : strings_1.default.emailInvalid;
    };
    Validation.isPassword = function (password) {
        return password.length >= 8 ? '' : strings_1.default.passwordInvalid;
    };
    return Validation;
}());
exports["default"] = Validation;


/***/ }),

/***/ "./web/src/resources/Colors.ts":
/*!*************************************!*\
  !*** ./web/src/resources/Colors.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var Constants_1 = __webpack_require__(/*! ../Util/Constants */ "./web/src/Util/Constants.ts");
var Extra_1 = __webpack_require__(/*! ../Util/Extra */ "./web/src/Util/Extra.ts");
var Colors = /** @class */ (function () {
    function Colors() {
        this.light = {
            bg: '#b2b7c6',
            bgLight: '#d9d9d9',
            textTitle: '#0a0a0a',
            textOnVariant: '#fcfcfc',
            text: '#2e2e2e',
            variant: '#ff0000',
            mode: 'light',
        };
        this.dark = {
            bg: '#12141b',
            bgLight: '#232838',
            textTitle: '#fcfcfc',
            textOnVariant: '#fcfcfc',
            text: '#bdbdbd',
            variant: '#ff0000',
            mode: 'dark',
        };
    }
    Colors.prototype.getLight = function () {
        return this.light;
    };
    Colors.prototype.getDark = function () {
        return this.dark;
    };
    Colors.getInstance = function () {
        var theme = localStorage.getItem(Constants_1.default.getThemeId());
        if (theme === null) {
            localStorage.setItem(Constants_1.default.getThemeId(), Constants_1.default.getThemeLightId());
            return new Colors().getLight();
        }
        else if (theme === Constants_1.default.getThemeLightId())
            return new Colors().getLight();
        return new Colors().getDark();
    };
    Colors.initTheme = function () {
        Colors.changeColorsRoot();
        Extra_1.default.onThemeChange();
    };
    Colors.setTheme = function () {
        var theme = localStorage.getItem(Constants_1.default.getThemeId());
        if (!theme) {
            localStorage.setItem(Constants_1.default.getThemeId(), Constants_1.default.getThemeDarkId());
            Colors.changeColorsRoot();
        }
        else if (theme === Constants_1.default.getThemeDarkId()) {
            localStorage.setItem(Constants_1.default.getThemeId(), Constants_1.default.getThemeLightId());
            Colors.changeColorsRoot();
        }
        else {
            localStorage.setItem(Constants_1.default.getThemeId(), Constants_1.default.getThemeDarkId());
            Colors.changeColorsRoot();
        }
    };
    Colors.changeColorsRoot = function () {
        var root = document.documentElement;
        var colors = Object.values(Colors.getInstance());
        Object.keys(Colors.getInstance()).forEach(function (c, i) {
            var color = '--' + c;
            root.style.setProperty(color, colors[i]);
        });
        Extra_1.default.onThemeChange();
    };
    return Colors;
}());
exports["default"] = Colors;


/***/ }),

/***/ "./web/src/resources/strings.ts":
/*!**************************************!*\
  !*** ./web/src/resources/strings.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var strings = {
    emailInvalid: 'E-mail provido é inválido',
    passwordInvalid: 'Senha provida é inválida',
};
exports["default"] = strings;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*************************!*\
  !*** ./web/src/main.ts ***!
  \*************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var Forms_1 = __webpack_require__(/*! ./Module/Forms */ "./web/src/Module/Forms.ts");
var Colors_1 = __webpack_require__(/*! ./resources/Colors */ "./web/src/resources/Colors.ts");
var Extra_1 = __webpack_require__(/*! ./Util/Extra */ "./web/src/Util/Extra.ts");
var HtmlConstants_1 = __webpack_require__(/*! ./Util/HtmlConstants */ "./web/src/Util/HtmlConstants.ts");
var appIcons = document.querySelectorAll(HtmlConstants_1.default.getAppIconId());
var colors = Colors_1.default.getInstance();
var buttonChangeTheme = document.querySelector(HtmlConstants_1.default.getButtonChangeThemeId());
if (appIcons.length)
    Extra_1.default.setAppIconByTheme(appIcons, colors.mode);
if (buttonChangeTheme)
    buttonChangeTheme.addEventListener('click', Colors_1.default.setTheme);
if (document.querySelector('#sign-text')) {
    var element = document.querySelector('#sign-text');
    element.style.maxWidth = '500px';
    element.style.textAlign = 'center';
}
Forms_1.default.setFormsConfig();
Colors_1.default.initTheme();
Extra_1.default.setModal();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBeUIsQ0FBQztJQUM3RSxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7SUFDakMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO0NBQ3BDO0FBRUQsZUFBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ3ZCLGdCQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDbkIsZUFBSyxDQUFDLFFBQVEsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXphbmFtaW9zLXdlYi8uL3dlYi9zcmMvTW9kZWwvRm9ybVZhbGlkLnRzIiwid2VicGFjazovL2l6YW5hbWlvcy13ZWIvLi93ZWIvc3JjL01vZHVsZS9Gb3Jtcy50cyIsIndlYnBhY2s6Ly9pemFuYW1pb3Mtd2ViLy4vd2ViL3NyYy9VdGlsL0NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9pemFuYW1pb3Mtd2ViLy4vd2ViL3NyYy9VdGlsL0V4dHJhLnRzIiwid2VicGFjazovL2l6YW5hbWlvcy13ZWIvLi93ZWIvc3JjL1V0aWwvSHRtbENvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9pemFuYW1pb3Mtd2ViLy4vd2ViL3NyYy9VdGlsL1ZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vaXphbmFtaW9zLXdlYi8uL3dlYi9zcmMvcmVzb3VyY2VzL0NvbG9ycy50cyIsIndlYnBhY2s6Ly9pemFuYW1pb3Mtd2ViLy4vd2ViL3NyYy9yZXNvdXJjZXMvc3RyaW5ncy50cyIsIndlYnBhY2s6Ly9pemFuYW1pb3Mtd2ViL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2l6YW5hbWlvcy13ZWIvLi93ZWIvc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsidHlwZSBLZXlzID0ge1xuICBrZXk6IHN0cmluZztcbiAgdmFsdWU6IGJvb2xlYW47XG59O1xuXG5jbGFzcyBGb3JtVmFsaWQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGtleXM6IEtleXNbXSkge31cblxuICBwdWJsaWMgZ2V0S2V5KGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMua2V5cy5maWx0ZXIoKGluZGV4KSA9PiBpbmRleC5rZXkgPT09IGtleSk7XG4gIH1cblxuICBwdWJsaWMgc2V0S2V5KGtleTogc3RyaW5nLCB2YWx1ZTogYm9vbGVhbiwgb25DaGFuZ2U/OiAoKSA9PiB2b2lkKSB7XG4gICAgY29uc3QgayA9IHRoaXMua2V5cy5maWx0ZXIoKGluZGV4KSA9PiBpbmRleC5rZXkgPT09IGtleSk7XG4gICAgaWYgKCEhay5sZW5ndGgpIHtcbiAgICAgIGtbMF0udmFsdWUgPSB2YWx1ZTtcbiAgICAgIGlmICghIW9uQ2hhbmdlKSBvbkNoYW5nZSgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBhbGxWYWxpZCgpIHtcbiAgICBjb25zdCBub3RWYWxpZHM6IGJvb2xlYW5bXSA9IFtdO1xuXG4gICAgdGhpcy5rZXlzLmZvckVhY2goKGtleSkgPT4gKCFrZXkudmFsdWUgPyBub3RWYWxpZHMucHVzaChrZXkudmFsdWUpIDogbnVsbCkpO1xuXG4gICAgcmV0dXJuIG5vdFZhbGlkcy5sZW5ndGggPiAwO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1WYWxpZDtcbiIsImltcG9ydCBGb3JtVmFsaWQgZnJvbSAnLi4vTW9kZWwvRm9ybVZhbGlkJztcbmltcG9ydCBIdG1sQ29uc3RhbnRzIGZyb20gJy4uL1V0aWwvSHRtbENvbnN0YW50cyc7XG5pbXBvcnQgVmFsaWRhdGlvbiBmcm9tICcuLi9VdGlsL1ZhbGlkYXRpb24nO1xuXG5jbGFzcyBGb3JtcyB7XG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7fVxuXG4gIHB1YmxpYyBzdGF0aWMgc2V0Rm9ybXNDb25maWcoKSB7XG4gICAgaWYgKCFkb2N1bWVudC5mb3Jtc1swXSkgcmV0dXJuO1xuICAgIGNvbnN0IGZvcm1zOiBOb2RlTGlzdE9mPEhUTUxGb3JtRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb3JtJyk7XG4gICAgZm9ybXMuZm9yRWFjaChGb3Jtcy5zZXRDb25maWcpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgc2V0Q29uZmlnKGZvcm06IEhUTUxGb3JtRWxlbWVudCkge1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSk7XG4gICAgaWYgKGZvcm0uaWQgPT09IEh0bWxDb25zdGFudHMuZ2V0U2lnbkluRm9ybUlkKCkpIEZvcm1zLnNldFNpZ25JbkZvcm0oZm9ybSk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBzZXRTaWduSW5Gb3JtKGZvcm06IEhUTUxGb3JtRWxlbWVudCkge1xuICAgIGNvbnN0IGZvcm1WYWxpZCA9IG5ldyBGb3JtVmFsaWQoW1xuICAgICAgeyBrZXk6ICdlbWFpbCcsIHZhbHVlOiBmYWxzZSB9LFxuICAgICAgeyBrZXk6ICdwYXNzd29yZCcsIHZhbHVlOiBmYWxzZSB9LFxuICAgIF0pO1xuXG4gICAgY29uc3QgZW1haWxJbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcihIdG1sQ29uc3RhbnRzLmdldEVtYWlsSW5wdXRJZCgpKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IHBhc3N3b3JkSW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBIdG1sQ29uc3RhbnRzLmdldFBhc3N3b3JkSW5wdXRJZCgpXG4gICAgKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IHN1Ym1pdCA9IGZvcm0ucXVlcnlTZWxlY3RvcihIdG1sQ29uc3RhbnRzLmdldFN1Ym1pdEJ1dHRvbklkKCkpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuICAgIGNvbnN0IGZvcmdvdFBhc3N3b3JkID0gZm9ybS5xdWVyeVNlbGVjdG9yKFxuICAgICAgSHRtbENvbnN0YW50cy5nZXRGb3Jnb3RQYXNzd29yZEJ1dHRvbklkKClcbiAgICApIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBjb25zdCBzZXRCdXR0b25EaXNhYmxlID0gKCkgPT4ge1xuICAgICAgY29uc3QgdmFsaWQgPSBmb3JtVmFsaWQuYWxsVmFsaWQoKTtcbiAgICAgIHN1Ym1pdC5kaXNhYmxlZCA9IHZhbGlkO1xuICAgIH07XG5cbiAgICBlbWFpbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICBjb25zdCBzdHIgPSBWYWxpZGF0aW9uLmlzRW1haWwodGFyZ2V0LnZhbHVlKTtcblxuICAgICAgaWYgKHN0ciA9PT0gJycpIGZvcm1WYWxpZC5zZXRLZXkoJ2VtYWlsJywgdHJ1ZSwgc2V0QnV0dG9uRGlzYWJsZSk7XG4gICAgICBlbHNlIGZvcm1WYWxpZC5zZXRLZXkoJ2VtYWlsJywgZmFsc2UsIHNldEJ1dHRvbkRpc2FibGUpO1xuXG4gICAgICBjb25zdCBzbWFsbCA9IHRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NtYWxsJyk7XG4gICAgICBpZiAoISFzbWFsbCkge1xuICAgICAgICBzbWFsbC5pbm5lclRleHQgPSBzdHI7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBwYXNzd29yZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICBjb25zdCBzdHIgPSBWYWxpZGF0aW9uLmlzUGFzc3dvcmQodGFyZ2V0LnZhbHVlKTtcblxuICAgICAgaWYgKHN0ciA9PT0gJycpIGZvcm1WYWxpZC5zZXRLZXkoJ3Bhc3N3b3JkJywgdHJ1ZSwgc2V0QnV0dG9uRGlzYWJsZSk7XG4gICAgICBlbHNlIGZvcm1WYWxpZC5zZXRLZXkoJ3Bhc3N3b3JkJywgZmFsc2UsIHNldEJ1dHRvbkRpc2FibGUpO1xuXG4gICAgICBjb25zdCBzbWFsbCA9IHRhcmdldC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NtYWxsJyk7XG4gICAgICBpZiAoISFzbWFsbCkge1xuICAgICAgICBzbWFsbC5pbm5lclRleHQgPSBzdHI7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7fSk7XG5cbiAgICBmb3Jnb3RQYXNzd29yZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoSHRtbENvbnN0YW50cy5nZXRDb250YWluZXJNb2RhbEZvcmdvdFBhc3N3b3JkKCkpO1xuXG4gICAgICBpZiAoISFjb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihIdG1sQ29uc3RhbnRzLmdldE1vZGFsRWxlbWVudCgpKTtcbiAgICAgICAgaWYgKCEhbW9kYWwpIHtcbiAgICAgICAgICBjb25zdCBidG4gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKEh0bWxDb25zdGFudHMuZ2V0QnV0dG9uTW9kYWxDbG9zZSgpKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcbiAgICAgICAgICBpZiAoISFidG4pIGJ0bi5zdHlsZS5yaWdodCA9ICd2YXIoLS1wMyknO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGJ0biwgISFidG4pO1xuICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoSHRtbENvbnN0YW50cy5nZXRDbGFzc091dFNjcmVlbkxlZnQoKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHNldEJ1dHRvbkRpc2FibGUoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtcztcbiIsImNsYXNzIENvbnN0YW50cyB7XG4gIHByaXZhdGUgdGhlbWVJZCA9ICdAdGhlbWVfaWQnO1xuICBwcml2YXRlIHRoZW1lTGlnaHRJZCA9ICdAdGhlbWVfaWRfbGlnaHQnO1xuICBwcml2YXRlIHRoZW1lRGFya0lkID0gJ0B0aGVtZV9pZF9kYXJrJztcblxuICBwdWJsaWMgZ2V0VGhlbWVJZCgpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZUlkO1xuICB9XG5cbiAgcHVibGljIGdldFRoZW1lTGlnaHRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy50aGVtZUxpZ2h0SWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0VGhlbWVEYXJrSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbWVEYXJrSWQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IENvbnN0YW50cygpO1xuIiwiaW1wb3J0IENvbG9ycyBmcm9tICcuLi9yZXNvdXJjZXMvQ29sb3JzJztcbmltcG9ydCBIdG1sQ29uc3RhbnRzIGZyb20gJy4vSHRtbENvbnN0YW50cyc7XG5cbmNsYXNzIEV4dHJhIHtcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIHN0YXRpYyBzZXRNb2RhbCgpIHtcbiAgICBjb25zdCBtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKEh0bWxDb25zdGFudHMuZ2V0TW9kYWxFbGVtZW50KCkpO1xuXG4gICAgaWYgKCFtb2RhbHMpIHJldHVybjtcblxuICAgIG1vZGFscy5mb3JFYWNoKChtb2RhbCkgPT4ge1xuICAgICAgY29uc3QgY2xvc2UgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKEh0bWxDb25zdGFudHMuZ2V0QnV0dG9uTW9kYWxDbG9zZSgpKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcblxuICAgICAgaWYgKCEhY2xvc2UpIHtcbiAgICAgICAgY2xvc2Uuc3R5bGUucmlnaHQgPSAnLTIwMHZ3JztcbiAgICAgICAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKCFtb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoSHRtbENvbnN0YW50cy5nZXRDbGFzc091dFNjcmVlbkxlZnQoKSkpIHtcbiAgICAgICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoSHRtbENvbnN0YW50cy5nZXRDbGFzc091dFNjcmVlbkxlZnQoKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNsb3NlLnN0eWxlLnJpZ2h0ID0gJy0yMDB2dyc7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBvblRoZW1lQ2hhbmdlKCkge1xuICAgIGNvbnN0IG1vZGUgPSBDb2xvcnMuZ2V0SW5zdGFuY2UoKS5tb2RlO1xuICAgIEV4dHJhLnNldEFwcEljb25CeVRoZW1lKG51bGwsIG51bGwpO1xuICAgIGNvbnN0IHRoZW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihIdG1sQ29uc3RhbnRzLmdldEJ1dHRvbkNoYW5nZVRoZW1lSWQoKSk7XG4gICAgY29uc3QgZ29vZ2xlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihIdG1sQ29uc3RhbnRzLmdldENsYXNzU2lnbkluR29vZ2xlKCkpO1xuXG4gICAgaWYgKHRoZW1lQnV0dG9uICYmIHRoZW1lQnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpKSB7XG4gICAgICBjb25zdCBzcmMgPSB0aGVtZUJ1dHRvbi5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zcmM7XG4gICAgICB0aGVtZUJ1dHRvbi5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zcmMgPVxuICAgICAgICBtb2RlID09PSAnZGFyaycgPyBzcmMucmVwbGFjZSgnbW9vbicsICdzdW4nKSA6IHNyYy5yZXBsYWNlKCdzdW4nLCAnbW9vbicpO1xuICAgIH1cbiAgICBpZiAoISFnb29nbGVCdXR0b24gJiYgISFnb29nbGVCdXR0b24ucXVlcnlTZWxlY3RvckFsbCgnaW1nJykubGVuZ3RoKSB7XG4gICAgICBFeHRyYS5zZXRBcHBJY29uQnlUaGVtZShnb29nbGVCdXR0b24ucXVlcnlTZWxlY3RvckFsbCgnaW1nJyksIG1vZGUsIFtcbiAgICAgICAgJy9pbWFnZXMvaWNvbi9nb29nbGUuc3ZnJyxcbiAgICAgICAgJ2ltYWdlcy9pY29uL2dvb2dsZS1kYXJrLnN2ZycsXG4gICAgICBdKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHNldEFwcEljb25CeVRoZW1lKFxuICAgIGljb25zOiBOb2RlTGlzdE9mPEhUTUxJbWFnZUVsZW1lbnQ+IHwgbnVsbCxcbiAgICBtb2RlOiAnbGlnaHQnIHwgJ2RhcmsnIHwgbnVsbCxcbiAgICBsaW5rcz86IHN0cmluZ1tdXG4gICkge1xuICAgIGlmICghaWNvbnMpIGljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChIdG1sQ29uc3RhbnRzLmdldEFwcEljb25JZCgpKTtcbiAgICBpZiAoIW1vZGUpIG1vZGUgPSBDb2xvcnMuZ2V0SW5zdGFuY2UoKS5tb2RlO1xuXG4gICAgaWYgKCEhaWNvbnMgJiYgaWNvbnMubGVuZ3RoID4gMClcbiAgICAgIGljb25zLmZvckVhY2goKGltYWdlKSA9PiB7XG4gICAgICAgIGlmICghIWxpbmtzICYmIGxpbmtzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgIGlmIChtb2RlID09PSAnbGlnaHQnKSBpbWFnZS5zcmMgPSBsaW5rc1swXTtcbiAgICAgICAgICBlbHNlIGltYWdlLnNyYyA9IGxpbmtzWzFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGltYWdlLnNyYyA9IG1vZGUgPT09ICdsaWdodCcgPyAnL2ltYWdlcy9pY29uL2ljb24uc3ZnJyA6ICcvaW1hZ2VzL2ljb24vaWNvbi1kYXJrLnN2Zyc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV4dHJhO1xuIiwiY2xhc3MgSHRtbENvbnN0YW50cyB7XG4gIHByaXZhdGUgYXBwSWNvbklkID0gJyNhcHAtaWNvbic7XG5cbiAgcHJpdmF0ZSBzaWduSW5Gb3JtSWQgPSAnc2lnbi1pbic7XG4gIHByaXZhdGUgZW1haWxJbnB1dElkID0gJyNlbWFpbCc7XG4gIHByaXZhdGUgcGFzc3dvcmRJbnB1dElkID0gJyNwYXNzd29yZCc7XG4gIHByaXZhdGUgc3VibWl0QnV0dG9uSWQgPSAnI3N1Ym1pdCc7XG4gIHByaXZhdGUgZm9yZ290UGFzc3dvcmRCdXR0b25JZCA9ICcjZm9yZ290LXBhc3N3b3JkJztcblxuICBwcml2YXRlIGNvbnRhaW5lck1vZGFsRm9yZ290UGFzc3dvcmQgPSAnI21vZGFsLWZvcmdvdC1wYXNzd29yZCc7XG4gIHByaXZhdGUgbW9kYUVsZW1lbnQgPSAnLm1vZGFsJztcbiAgcHJpdmF0ZSBidXR0b25Nb2RhbENsb3NlID0gJy5idXR0b24tbW9kYWwtY2xvc2UnO1xuICBwcml2YXRlIGNsYXNzT3V0U2NyZWVuTGVmdCA9ICdvdXQtc2NyZWVuLWxlZnQnO1xuICBwcml2YXRlIGNsYXNzU2lnbkluR29vZ2xlID0gJyNzaWduLWluLWdvb2dsZSc7XG4gIHByaXZhdGUgYnV0dG9uQ2hhbmdlVGhlbWVJZCA9ICcjYnV0dG9uLWNoYW5nZS10aGVtZSc7XG5cbiAgcHVibGljIGdldEJ1dHRvbkNoYW5nZVRoZW1lSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnV0dG9uQ2hhbmdlVGhlbWVJZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDbGFzc1NpZ25Jbkdvb2dsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jbGFzc1NpZ25Jbkdvb2dsZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDbGFzc091dFNjcmVlbkxlZnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xhc3NPdXRTY3JlZW5MZWZ0O1xuICB9XG5cbiAgcHVibGljIGdldEJ1dHRvbk1vZGFsQ2xvc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnV0dG9uTW9kYWxDbG9zZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRNb2RhbEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMubW9kYUVsZW1lbnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q29udGFpbmVyTW9kYWxGb3Jnb3RQYXNzd29yZCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250YWluZXJNb2RhbEZvcmdvdFBhc3N3b3JkO1xuICB9XG5cbiAgcHVibGljIGdldEZvcmdvdFBhc3N3b3JkQnV0dG9uSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9yZ290UGFzc3dvcmRCdXR0b25JZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTdWJtaXRCdXR0b25JZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdWJtaXRCdXR0b25JZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRFbWFpbElucHV0SWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW1haWxJbnB1dElkO1xuICB9XG5cbiAgcHVibGljIGdldFBhc3N3b3JkSW5wdXRJZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wYXNzd29yZElucHV0SWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0U2lnbkluRm9ybUlkKCkge1xuICAgIHJldHVybiB0aGlzLnNpZ25JbkZvcm1JZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBcHBJY29uSWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuYXBwSWNvbklkO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBIdG1sQ29uc3RhbnRzKCk7XG4iLCJpbXBvcnQgc3RyaW5ncyBmcm9tICcuLi9yZXNvdXJjZXMvc3RyaW5ncyc7XG5cbmNsYXNzIFZhbGlkYXRpb24ge1xuICBwdWJsaWMgc3RhdGljIGlzRW1haWwoZW1haWw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKGVtYWlsLmxlbmd0aCA8PSA1IHx8ICFlbWFpbC5pbmNsdWRlcygnQCcpIHx8ICFlbWFpbC5pbmNsdWRlcygnLicpKVxuICAgICAgcmV0dXJuIHN0cmluZ3MuZW1haWxJbnZhbGlkO1xuICAgIGNvbnN0IFtiZWZvcmVBdCwgYWZ0ZXJBdF0gPSBlbWFpbC5zcGxpdCgnQCcpO1xuICAgIGlmICghYmVmb3JlQXQgfHwgYmVmb3JlQXQubGVuZ3RoIDw9IDEgfHwgIWFmdGVyQXQgfHwgYWZ0ZXJBdC5sZW5ndGggPCAyKVxuICAgICAgcmV0dXJuIHN0cmluZ3MuZW1haWxJbnZhbGlkO1xuICAgIGNvbnN0IFtiZWZvcmVEb3QsIGFmdGVyRG90XSA9IGFmdGVyQXQuc3BsaXQoJy4nKTtcblxuICAgIHJldHVybiAhIWJlZm9yZURvdCAmJiBiZWZvcmVEb3QubGVuZ3RoID49IDEgJiYgISFhZnRlckRvdCAmJiBhZnRlckRvdC5sZW5ndGggPiAxXG4gICAgICA/ICcnXG4gICAgICA6IHN0cmluZ3MuZW1haWxJbnZhbGlkO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpc1Bhc3N3b3JkKHBhc3N3b3JkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBwYXNzd29yZC5sZW5ndGggPj0gOCA/ICcnIDogc3RyaW5ncy5wYXNzd29yZEludmFsaWQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmFsaWRhdGlvbjtcbiIsImltcG9ydCBDb25zdGFudHMgZnJvbSAnLi4vVXRpbC9Db25zdGFudHMnO1xuaW1wb3J0IEV4dHJhIGZyb20gJy4uL1V0aWwvRXh0cmEnO1xuXG5leHBvcnQgdHlwZSBUQ29sb3JzID0ge1xuICBiZzogc3RyaW5nO1xuICBiZ0xpZ2h0OiBzdHJpbmc7XG4gIHRleHRUaXRsZTogc3RyaW5nO1xuICB0ZXh0T25WYXJpYW50OiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbiAgdmFyaWFudDogc3RyaW5nO1xuXG4gIG1vZGU6ICdsaWdodCcgfCAnZGFyayc7XG59O1xuXG5jbGFzcyBDb2xvcnMge1xuICBwcml2YXRlIGxpZ2h0OiBUQ29sb3JzID0ge1xuICAgIGJnOiAnI2IyYjdjNicsXG4gICAgYmdMaWdodDogJyNkOWQ5ZDknLFxuICAgIHRleHRUaXRsZTogJyMwYTBhMGEnLFxuICAgIHRleHRPblZhcmlhbnQ6ICcjZmNmY2ZjJyxcbiAgICB0ZXh0OiAnIzJlMmUyZScsXG4gICAgdmFyaWFudDogJyNmZjAwMDAnLFxuXG4gICAgbW9kZTogJ2xpZ2h0JyxcbiAgfTtcblxuICBwcml2YXRlIGRhcms6IFRDb2xvcnMgPSB7XG4gICAgYmc6ICcjMTIxNDFiJyxcbiAgICBiZ0xpZ2h0OiAnIzIzMjgzOCcsXG4gICAgdGV4dFRpdGxlOiAnI2ZjZmNmYycsXG4gICAgdGV4dE9uVmFyaWFudDogJyNmY2ZjZmMnLFxuICAgIHRleHQ6ICcjYmRiZGJkJyxcbiAgICB2YXJpYW50OiAnI2ZmMDAwMCcsXG5cbiAgICBtb2RlOiAnZGFyaycsXG4gIH07XG5cbiAgcHVibGljIGdldExpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmxpZ2h0O1xuICB9XG5cbiAgcHVibGljIGdldERhcmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGFyaztcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgY29uc3QgdGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuZ2V0VGhlbWVJZCgpKTtcbiAgICBpZiAodGhlbWUgPT09IG51bGwpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKENvbnN0YW50cy5nZXRUaGVtZUlkKCksIENvbnN0YW50cy5nZXRUaGVtZUxpZ2h0SWQoKSk7XG4gICAgICByZXR1cm4gbmV3IENvbG9ycygpLmdldExpZ2h0KCk7XG4gICAgfSBlbHNlIGlmICh0aGVtZSA9PT0gQ29uc3RhbnRzLmdldFRoZW1lTGlnaHRJZCgpKSByZXR1cm4gbmV3IENvbG9ycygpLmdldExpZ2h0KCk7XG4gICAgcmV0dXJuIG5ldyBDb2xvcnMoKS5nZXREYXJrKCk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGluaXRUaGVtZSgpIHtcbiAgICBDb2xvcnMuY2hhbmdlQ29sb3JzUm9vdCgpO1xuICAgIEV4dHJhLm9uVGhlbWVDaGFuZ2UoKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgc2V0VGhlbWUoKSB7XG4gICAgY29uc3QgdGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShDb25zdGFudHMuZ2V0VGhlbWVJZCgpKTtcbiAgICBpZiAoIXRoZW1lKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMuZ2V0VGhlbWVJZCgpLCBDb25zdGFudHMuZ2V0VGhlbWVEYXJrSWQoKSk7XG4gICAgICBDb2xvcnMuY2hhbmdlQ29sb3JzUm9vdCgpO1xuICAgIH0gZWxzZSBpZiAodGhlbWUgPT09IENvbnN0YW50cy5nZXRUaGVtZURhcmtJZCgpKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShDb25zdGFudHMuZ2V0VGhlbWVJZCgpLCBDb25zdGFudHMuZ2V0VGhlbWVMaWdodElkKCkpO1xuICAgICAgQ29sb3JzLmNoYW5nZUNvbG9yc1Jvb3QoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oQ29uc3RhbnRzLmdldFRoZW1lSWQoKSwgQ29uc3RhbnRzLmdldFRoZW1lRGFya0lkKCkpO1xuICAgICAgQ29sb3JzLmNoYW5nZUNvbG9yc1Jvb3QoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBjaGFuZ2VDb2xvcnNSb290KCkge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgY29uc3QgY29sb3JzID0gT2JqZWN0LnZhbHVlcyhDb2xvcnMuZ2V0SW5zdGFuY2UoKSk7XG4gICAgT2JqZWN0LmtleXMoQ29sb3JzLmdldEluc3RhbmNlKCkpLmZvckVhY2goKGMsIGkpID0+IHtcbiAgICAgIGNvbnN0IGNvbG9yID0gJy0tJyArIGM7XG4gICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KGNvbG9yLCBjb2xvcnNbaV0pO1xuICAgIH0pO1xuICAgIEV4dHJhLm9uVGhlbWVDaGFuZ2UoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb2xvcnM7XG4iLCJjb25zdCBzdHJpbmdzID0ge1xuICBlbWFpbEludmFsaWQ6ICdFLW1haWwgcHJvdmlkbyDDqSBpbnbDoWxpZG8nLFxuICBwYXNzd29yZEludmFsaWQ6ICdTZW5oYSBwcm92aWRhIMOpIGludsOhbGlkYScsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCBGb3JtcyBmcm9tICcuL01vZHVsZS9Gb3Jtcyc7XG5pbXBvcnQgQ29sb3JzIGZyb20gJy4vcmVzb3VyY2VzL0NvbG9ycyc7XG5pbXBvcnQgRXh0cmEgZnJvbSAnLi9VdGlsL0V4dHJhJztcbmltcG9ydCBIdG1sQ29uc3RhbnRzIGZyb20gJy4vVXRpbC9IdG1sQ29uc3RhbnRzJztcblxuY29uc3QgYXBwSWNvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKEh0bWxDb25zdGFudHMuZ2V0QXBwSWNvbklkKCkpO1xuY29uc3QgY29sb3JzID0gQ29sb3JzLmdldEluc3RhbmNlKCk7XG5jb25zdCBidXR0b25DaGFuZ2VUaGVtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoSHRtbENvbnN0YW50cy5nZXRCdXR0b25DaGFuZ2VUaGVtZUlkKCkpO1xuXG5pZiAoYXBwSWNvbnMubGVuZ3RoKSBFeHRyYS5zZXRBcHBJY29uQnlUaGVtZShhcHBJY29ucyBhcyBOb2RlTGlzdE9mPEhUTUxJbWFnZUVsZW1lbnQ+LCBjb2xvcnMubW9kZSk7XG5pZiAoYnV0dG9uQ2hhbmdlVGhlbWUpIGJ1dHRvbkNoYW5nZVRoZW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgQ29sb3JzLnNldFRoZW1lKTtcbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lnbi10ZXh0JykpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWduLXRleHQnKSBhcyBIVE1MUGFyYWdyYXBoRWxlbWVudDtcbiAgZWxlbWVudC5zdHlsZS5tYXhXaWR0aCA9ICc1MDBweCc7XG4gIGVsZW1lbnQuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG59XG5cbkZvcm1zLnNldEZvcm1zQ29uZmlnKCk7XG5Db2xvcnMuaW5pdFRoZW1lKCk7XG5FeHRyYS5zZXRNb2RhbCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9