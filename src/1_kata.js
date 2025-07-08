"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorldGenerator = helloWorldGenerator;
exports.default = HelloWorld;
function* helloWorldGenerator() {
    yield 'Hello';
    yield 'World';
}
function HelloWorld() {
    return Array.from(helloWorldGenerator()).join(' ');
}
