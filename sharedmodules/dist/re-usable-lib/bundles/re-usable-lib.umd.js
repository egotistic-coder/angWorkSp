(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('re-usable-lib', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['re-usable-lib'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var ReUsableLibService = /** @class */ (function () {
        function ReUsableLibService() {
        }
        ReUsableLibService.ɵfac = function ReUsableLibService_Factory(t) { return new (t || ReUsableLibService)(); };
        ReUsableLibService.ɵprov = core["ɵɵdefineInjectable"]({ token: ReUsableLibService, factory: ReUsableLibService.ɵfac, providedIn: 'root' });
        return ReUsableLibService;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ReUsableLibService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var ReUsableLibComponent = /** @class */ (function () {
        function ReUsableLibComponent() {
        }
        ReUsableLibComponent.prototype.ngOnInit = function () {
        };
        ReUsableLibComponent.ɵfac = function ReUsableLibComponent_Factory(t) { return new (t || ReUsableLibComponent)(); };
        ReUsableLibComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: ReUsableLibComponent, selectors: [["lib-ReUsable-Lib"]], decls: 2, vars: 0, template: function ReUsableLibComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "p");
                core["ɵɵtext"](1, " re-usable-lib works! ");
                core["ɵɵelementEnd"]();
            } }, encapsulation: 2 });
        return ReUsableLibComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ReUsableLibComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-ReUsable-Lib',
                    template: "\n    <p>\n      re-usable-lib works!\n    </p>\n  ",
                    styles: []
                }]
        }], function () { return []; }, null); })();

    var ReUsableLibModule = /** @class */ (function () {
        function ReUsableLibModule() {
        }
        ReUsableLibModule.ɵmod = core["ɵɵdefineNgModule"]({ type: ReUsableLibModule });
        ReUsableLibModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function ReUsableLibModule_Factory(t) { return new (t || ReUsableLibModule)(); }, imports: [[]] });
        return ReUsableLibModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](ReUsableLibModule, { declarations: [ReUsableLibComponent], exports: [ReUsableLibComponent] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](ReUsableLibModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [ReUsableLibComponent],
                    imports: [],
                    exports: [ReUsableLibComponent]
                }]
        }], null, null); })();

    exports.ReUsableLibComponent = ReUsableLibComponent;
    exports.ReUsableLibModule = ReUsableLibModule;
    exports.ReUsableLibService = ReUsableLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=re-usable-lib.umd.js.map
