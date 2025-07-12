---
mode: 'agent'
tools: ['runCommands']
description: 'Suggest new test names based on mutation testing results.'
---

# Copilot Instructions: Suggest new test names based on mutation testing results

Do not read the mutation.json file. Instead, read a single file from the `mutations` directory, which contains mutation testing results for a specific file. 
Make sure you perform the instructions for each file in the `src/folder_1` directory.


1. For every file in the `src/folder_1` directory:
    - Open the file and extract production code information.
    - If the file is a test file, extract test information.
    - Retrieve mutation testing results for the file.
    - Retrieve the test cases that are currently present for this file.
    - Paste the bug results into `test/bugs_found_folder_1` directory, creating a new file named `bugs_kata_X.md`, where `X` is the file number (1, 2, 3, or 4).
    - Paste the test cases into `test/bugs_found_folder_1` directory, creating a new file named `test_cases_X.ts`, where `X` is the file number (1, 2, 3, or 4).
    - for each test case, only write the `describe` and `it` blocks, without the actual test implementation.
