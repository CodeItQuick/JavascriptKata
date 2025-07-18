---
mode: 'agent'
tools: ['runCommands']
description: 'Suggest new test names based on mutation testing results.'
---

# Copilot Instructions: Suggest new test names based on mutation testing results

Do not read the mutation.json file. Instead, read a single file from the `mutations` directory, which contains mutation testing results for a specific file. 
Make sure you perform the instructions for each file in the `src/folder_1` directory.


1. For the file `src/folder_1/3_kata.ts`:
    - Open the file and extract production code information.
    - Retrieve mutation testing results for the file.
2. For the file `test/folder_1/test_kata_3.spec.ts`    
    - Retrieve the test cases that are currently present for this file.
3. For the file `mutations/3_kata/tests.json`
    - Read mutation information for the kata
4. Analyze the data from steps 1, 2 and 3:
    - Identify the mutations that were not covered by the existing tests.
    - Suggest new test names based on the uncovered mutations.
5. Write the new tests in `test/folder_1/test_kata_3_missing.spec.ts`