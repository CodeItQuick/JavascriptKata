import mutation from './reports/mutation/mutation.json' with { type: 'json'};
import * as fs from "node:fs";

let byTestNumber: { filename: string; testId: any[] }[] = [];

Object.keys(mutation.files).forEach((file, idx) => {
    // console.log(mutation.files[mut].mutants[3]?.coveredBy)
    byTestNumber[idx] = { filename: file, testId: [] };
    mutation.files[file].mutants.forEach(({coveredBy, killedBy}, idx2) => {
        const mutatedTests = new Set([...(killedBy || []), ...(coveredBy || [])]);
        mutatedTests.forEach(_ => {
                byTestNumber[idx].testId.push(mutation.files[file].mutants[idx2])
        })
    });


});
byTestNumber.forEach(({ filename, testId}, idx) => {
    const fileParts = filename.split('/');
    fs.writeFileSync(`./mutations/${fileParts[2].split('.')[0]}/tests.json`, JSON.stringify(testId));
})