import mutation from './reports/mutation/mutation.json' with { type: 'json' };
import * as fs from "node:fs";
let byTestNumber = {};
Object.keys(mutation.files).forEach((file, idx) => {
    // console.log(mutation.files[mut].mutants[3]?.coveredBy)
    mutation.files[file].mutants.forEach(({ coveredBy, killedBy }, idx) => {
        const mutatedTests = new Set([...(killedBy || []), ...(coveredBy || [])]);
        mutatedTests.forEach(testId => {
            if (byTestNumber[testId] === undefined) {
                byTestNumber[testId] = [mutation.files[file].mutants[idx]];
            }
            else {
                byTestNumber[testId].push(mutation.files[file].mutants[idx]);
            }
        });
    });
});
Object.keys(byTestNumber).forEach((testId, idx) => {
    console.log(byTestNumber[testId]);
    const fileParts = byTestNumber[testId].split(',');
    console.log(fileParts);
    fs.writeFileSync(`./mutations/${fileParts[2]}/test_${idx}.json`, JSON.stringify(byTestNumber[testId]));
});
