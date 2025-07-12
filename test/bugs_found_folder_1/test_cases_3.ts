describe('can do battle', () => {
    // Existing test cases
    it('the vile zerg zergling will battle the epic terran marine');
    it('the vile zerg zergling will battle the epic protos zealot');
    it('the vile zerg zergling cannot hit a unit it has not run at');

    // New suggested test cases
    describe('Marine Tests', () => {
        it('should die when taking more than 2 damage');
        it('should track health correctly');
        it('should not be able to shoot with negative damage');
    });

    describe('Zealot Tests', () => {
        it('should die when taking more than 2 damage');
        it('should track health correctly');
        it('should handle combat with Marines');
    });

    describe('Zergling Tests', () => {
        it('should be able to run at multiple units');
        it('should track all close units correctly');
        it('should maintain close units list when units die');
    });

    describe('Combat System', () => {
        it('should handle multi-unit combat scenarios');
        it('should process damage in correct order');
        it('should validate damage values');
    });
});
