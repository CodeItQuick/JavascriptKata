# Bugs Identified from Mutation Testing, Production Code, and Existing Tests

1. **Marine and Zealot alive() always return true.**
   - These units are never considered dead, even if hitpoints are zero or below.
2. **Units can have negative hitpoints.**
   - No validation prevents hitpoints from dropping below zero.
3. **Zergling's closeUnits array is not protected from external mutation.**
   - External code can mutate closeUnits, breaking attack logic.
4. **No check for duplicate units in Zergling's run().**
   - The same unit can be added multiple times to closeUnits.
5. **No input validation in hurt() methods.**
   - Passing negative damage could increase hitpoints.
6. **hitpointBar() only checks for exactly 2 hitpoints.**
   - Any value other than 2 returns 'not full', even if hitpoints are negative or above 2.
7. **No test coverage for edge cases and internal state changes.**
   - Many edge cases (e.g., attacking dead units, overkill, empty closeUnits) are not tested.

