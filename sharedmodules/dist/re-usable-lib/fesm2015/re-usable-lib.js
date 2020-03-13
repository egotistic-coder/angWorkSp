import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class ReUsableLibService {
    constructor() {
    }
}
ReUsableLibService.ɵfac = function ReUsableLibService_Factory(t) { return new (t || ReUsableLibService)(); };
ReUsableLibService.ɵprov = ɵɵdefineInjectable({ token: ReUsableLibService, factory: ReUsableLibService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ReUsableLibService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class ReUsableLibComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ReUsableLibComponent.ɵfac = function ReUsableLibComponent_Factory(t) { return new (t || ReUsableLibComponent)(); };
ReUsableLibComponent.ɵcmp = ɵɵdefineComponent({ type: ReUsableLibComponent, selectors: [["lib-ReUsable-Lib"]], decls: 2, vars: 0, template: function ReUsableLibComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " re-usable-lib works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ReUsableLibComponent, [{
        type: Component,
        args: [{
                selector: 'lib-ReUsable-Lib',
                template: `
    <p>
      re-usable-lib works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class ReUsableLibModule {
}
ReUsableLibModule.ɵmod = ɵɵdefineNgModule({ type: ReUsableLibModule });
ReUsableLibModule.ɵinj = ɵɵdefineInjector({ factory: function ReUsableLibModule_Factory(t) { return new (t || ReUsableLibModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ReUsableLibModule, { declarations: [ReUsableLibComponent], exports: [ReUsableLibComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ReUsableLibModule, [{
        type: NgModule,
        args: [{
                declarations: [ReUsableLibComponent],
                imports: [],
                exports: [ReUsableLibComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of re-usable-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ReUsableLibComponent, ReUsableLibModule, ReUsableLibService };
//# sourceMappingURL=re-usable-lib.js.map
