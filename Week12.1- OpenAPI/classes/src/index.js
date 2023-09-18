"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
Object.defineProperty(exports, "__esModule", { value: true });
const helpful_decorators_1 = require("helpful-decorators");
let DateClass = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _getTime_decorators;
    return _a = class DateClass {
            constructor(timeZone) {
                this.timeZone = (__runInitializers(this, _instanceExtraInitializers), void 0);
                //     getMonth(){
                //         var d= new Date();
                //         return d.getMonth;
                //     }
                //     getTimezone(){
                //         return this.timeZone;
                //     }
                //     expensiveOperation(){
                //         const startTime= new Date().getTime();
                //         let ctr=0;
                //         for(let i=0; i<10000000000; i++){
                //             ctr++;
                //         }
                //         console.log(ctr);
                //         const endTime= new Date().getTime();
                //         console.log("total time taken is "+ (endTime-startTime) + " ms");
                //     }
                // }
                this.dateObject = new _a("IND");
                this.timeZone = timeZone;
            }
            getTime() {
                var d = new Date();
                return d.getTime();
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _getTime_decorators = [helpful_decorators_1.once];
            __esDecorate(_a, null, _getTime_decorators, { kind: "method", name: "getTime", static: false, private: false, access: { has: obj => "getTime" in obj, get: obj => obj.getTime }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
