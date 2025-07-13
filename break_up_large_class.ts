import * as fs from "node:fs";
import {Lang, parse} from "@ast-grep/napi";

const file = fs.readFileSync('./src/folder_1/19_kata.ts');
// console.log(file.toString())
const source = parse(Lang.JavaScript, file.toString());
const root = source.root();
root.children().map((x, idx) => {
    if (idx > 0) {
      fs.writeFileSync(
          `./ai-readable/folder_1/file_${idx}.ts`,
          `import IUnit from "./iunit.js";  

` + x.text()
          );
    }
});
//
// Object.keys(largeFile).forEach(file => {
//       const root = source.root();
//       fs.writeFileSync(`./ai-readable/folder_1/${file}.ts`,
//           root.text())
// })