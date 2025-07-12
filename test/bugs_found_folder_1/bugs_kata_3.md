## Mutation Testing Results for Kata 3

Current Test Coverage:
1. Basic combat between Zergling and Marine
2. Basic combat between Zergling and Zealot
3. Zergling's run mechanic (must run at a unit before attacking)

Potential Issues and Gaps:
1. Marine's alive() method always returns true - potential bug
2. Zealot's alive() method also always returns true - potential bug
3. No tests for multiple units in Zergling's closeUnits array
4. No tests for edge cases in damage calculation
5. No tests for Marine vs Zealot combat
6. Missing validation for negative damage values

Suggested Additional Test Coverage:
- Unit death conditions for Marine and Zealot
- Multiple unit engagement scenarios
- Combat order effects
- Damage validation
