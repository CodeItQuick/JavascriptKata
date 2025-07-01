
import assert from 'assert';
import HelloWorld, {helloWorldGenerator} from '../src/index.js';

describe('hello world kata', function () {
    it('should return hello world', function () {
        assert.equal(HelloWorld(), "Hello World");
    });
    it('should use a generator function that returns hello', () => {
        assert.equal(helloWorldGenerator().next().value, 'Hello')
    })
});