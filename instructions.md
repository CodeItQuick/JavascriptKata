---
mode: 'agent'
tools: ['runCommands']
description: 'Suggest new test names based on mutation testing results.'
---

# Suggest new test names based on mutation testing results

- run the mutation tests by running `npm run test:new-names`
- read the production code in the `src` directory that the mutation tests are based on
- based on the mutation testing results, production code, and existing tests, what bugs are currently in the code?
- paste the results in the `test/bugs.md` file
- suggest new test names based on the mutation testing results
- provide code for the new tests
- paste the new test names in the `test/new-tests.ts` file with describe and it blocks, but do not include the code
