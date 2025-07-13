---
mode: 'agent'
tools: ['runCommandsInTerminal']
description: 'Analyze the mutation testing results for bugs and tell me what they are'
---

# Copilot Instructions: Analyze mutation testing results for bugs

Follow the instructions below exactly as they are written. Do not skip any steps or modify the instructions.
Do not use the existing mutation results files, I want you to run the mutation tests again and read the output
from the console.

1. in the console, run the command `npm run test:stryker` to run the mutation tests.
2. wait for the mutation tests to complete.