describe('hello world kata four', function () {
    // Base functionality
    it('should return hello world');

    // Generator sequence tests
    it('should use a generator function that returns hello');
    it('should use a generator function that returns world on second call');
    it('should use a generator function that returns done after three calls');

    // Additional edge cases
    describe('Generator Edge Cases', () => {
        it('should handle multiple iterator instances');
        it('should maintain correct sequence across multiple calls');
    });
});
