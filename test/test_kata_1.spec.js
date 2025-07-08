"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const _1_kata_js_1 = __importStar(require("../src/1_kata.js"));
describe('hello world kata', function () {
    it('should return hello world', function () {
        chai_1.assert.equal((0, _1_kata_js_1.default)(), "Hello World");
    });
    it('should use a generator function that returns hello', () => {
        let firstCall = (0, _1_kata_js_1.helloWorldGenerator)().next();
        chai_1.assert.equal(firstCall.value, 'Hello');
        chai_1.assert.equal(firstCall.done, false);
    });
    it('should use a generator function that returns world on second call', () => {
        let sequence = (0, _1_kata_js_1.helloWorldGenerator)();
        sequence.next();
        let secondCall = sequence.next();
        chai_1.assert.equal(secondCall.value, 'World');
        chai_1.assert.equal(secondCall.done, false);
    });
    it('should use a generator function that returns done after three calls', () => {
        let sequence = (0, _1_kata_js_1.helloWorldGenerator)();
        const firstCall = sequence.next();
        const secondCall = sequence.next();
        const thirdCall = sequence.next();
        chai_1.assert.equal(thirdCall.done, true);
    });
});
