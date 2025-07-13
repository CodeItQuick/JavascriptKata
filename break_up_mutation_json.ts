import mutation from './reports/mutation/mutation.json' with { type: 'json'};
import * as fs from "node:fs";

let byTestNumber = {};

Object.keys(mutation.files).forEach((file, idx) => {
    // console.log(mutation.files[mut].mutants[3]?.coveredBy)
    mutation.files[file].mutants.forEach(({coveredBy, killedBy}, idx) => {
        const mutatedTests = new Set([...(killedBy || []), ...(coveredBy || [])]);
        mutatedTests.forEach(testId => {
            if (byTestNumber[file] === undefined) {
                byTestNumber[file] = { [testId]: [] }
            }
            if (byTestNumber[file][testId] === undefined) {
                byTestNumber[file][testId] = [mutation.files[file].mutants[idx]]
            } else {
                byTestNumber[file][testId].push(mutation.files[file].mutants[idx])
            }
        })
    });


});
Object.keys(byTestNumber).forEach((fileId, idx) => {
    if (byTestNumber[fileId] !== undefined) {
        const testNumber = Object.keys(byTestNumber[fileId]).map(x => x);
        testNumber.forEach(testNum => {
            fs.writeFileSync(`./mutations/kata_${idx + 1}/test_${testNum}.json`,
                JSON.stringify(byTestNumber[fileId][testNum]));
        })
    }
})