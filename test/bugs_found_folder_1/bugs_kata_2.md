## Mutation Testing Results for Kata 2

Testing coverage appears robust for:
- State tax calculations for different states (UT, NV, TX, AL, CA)
- Volume discount thresholds (1000, 5000, 7000, 10000, 50000)
- Zero item case

Potential areas for additional test coverage:
1. Edge cases at discount boundaries
2. Invalid state codes
3. Negative numbers for quantity or price
4. Non-numeric inputs
