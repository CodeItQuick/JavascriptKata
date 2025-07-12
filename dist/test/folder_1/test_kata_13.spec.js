import assert from "node:assert";
import HelloWorld, { helloWorldGenerator } from '../../src/folder_1/13_kata.js';
describe('hello world kata five', function () {
    it('should return hello world', function () {
        assert.equal(HelloWorld(), "Hello World");
    });
    it('should use a generator function that returns hello', () => {
        let firstCall = helloWorldGenerator().next();
        assert.equal(firstCall.value, 'Hello');
        assert.equal(firstCall.done, false);
    });
    it('should use a generator function that returns world on second call', () => {
        let sequence = helloWorldGenerator();
        sequence.next();
        let secondCall = sequence.next();
        assert.equal(secondCall.value, 'World');
        assert.equal(secondCall.done, false);
    });
    it('should use a generator function that returns done after three calls', () => {
        let sequence = helloWorldGenerator();
        const firstCall = sequence.next();
        const secondCall = sequence.next();
        const thirdCall = sequence.next();
        assert.equal(thirdCall.done, true);
    });
});
