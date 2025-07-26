import { loadESLint } from "eslint";
import eslintrc from "./.eslintrc.json" with { type: 'json' };
import * as fs from "node:fs";

(async function main() {
    // 1. Create an instance.
    const ESLint = await loadESLint({ useFlatConfig: false })
    const eslint = new ESLint();

    // 2. Lint files.
    const results = await eslint.lintFiles(["./**/*.ts"]);

    const currentDirectory = process.cwd();
    console.log(currentDirectory)
    let brokenRules = {};
    let ruleRootDirectories = {};
    results.forEach(result => {
        result.messages.forEach(brokenRule => {
            if (Object.keys(brokenRules).includes(brokenRule.ruleId)) {

            } else {
                const currentDirectorySplit = currentDirectory.split("\\");
                const workingDirectory = currentDirectorySplit[currentDirectorySplit.length - 1];
                const ruleFilePath = result.filePath;
                const ruleFilePathSplit = ruleFilePath.split("\\");
                const index = ruleFilePathSplit.findIndex(x => x === workingDirectory);
                const ruleRootDirectory = ruleFilePathSplit[index + 1];
                console.log(ruleRootDirectory)
                if (!Object.keys(ruleRootDirectories).includes(ruleRootDirectory) && !ruleRootDirectory.includes('.ts')) {
                    const ruleWrite = !ruleRootDirectory?.length? "": ruleRootDirectory;
                    ruleRootDirectories = { ...ruleRootDirectories, ruleWrite };
                }
                if (brokenRule.ruleId) {
                    brokenRules = { ...brokenRules,
                            [brokenRule.ruleId]: "warn"
                    }
                }

            }
        })
    })
    // 3. Format the results.
    const formatter = await eslint.loadFormatter("stylish");
    const resultText = formatter.format(results);

    let hasUpdated = false;
    eslintrc.overrides.forEach(overrideRule => {
        console.log(overrideRule)
        console.log(ruleRootDirectories)
        if (!overrideRule.files.some(file => file.includes(ruleRootDirectories.ruleRootDirectory))) {
            console.log('and here')
            overrideRule.rules = brokenRules;
            hasUpdated = true;
        }
    })
    if (!hasUpdated) {
        console.log(ruleRootDirectories)
        eslintrc.overrides.push({ "files": [
            ruleRootDirectories?.ruleRootDirectories || "" + "*.ts",
            ruleRootDirectories?.ruleRootDirectories === undefined ? './**/*.ts': ruleRootDirectories?.ruleRootDirectories + "/**/*.ts" ,
            ], "rules": brokenRules});
    }
    console.log(brokenRules)

    fs.writeFileSync('.eslintrc.json', JSON.stringify(eslintrc, null, 2));

    // 4. Output it.
    // console.log(resultText);
})().catch(error => {
    process.exitCode = 1;
    console.error(error);
});
