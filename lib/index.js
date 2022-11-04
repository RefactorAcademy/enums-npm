"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.enums = void 0;
const glob_1 = require("glob");
const fs_1 = require("fs");
const path_1 = require("path");
const __dirname = path_1.default.resolve();
let exportEnums = function loadEnums() {
    try {
        return new Promise((resolve, reject) => {
            (0, glob_1.default)(__dirname + '/src/enums/*.enum.ts', function (err, res) {
                if (err) {
                    reject(err);
                }
                else {
                    Promise.all(res.map(file => {
                        let moduleName = file.replace(__dirname, '.').replace('.ts', '');
                        let content = fs_1.default.readFileSync(`${moduleName}.ts`).toString();
                        return `import { ${content.substr(12).split(" {")[0]} } from "${moduleName}";`;
                    })).then(modules => {
                        resolve(modules);
                    });
                }
            });
        })
            .then(modules => {
            return modules;
        });
    }
    catch (err) {
        console.log(err);
    }
};
// let exportDtos = function loadDtos(){
//   try{
//     return new Promise((resolve, reject) => {
//       glob(__dirname + '/src/dtos/*.dto.ts', function (err, res) {
//         if (err) {
//           reject(err)
//         } else {
//           Promise.all(
//             res.map(file => {
//               let moduleName  = file.replace(__dirname, '.').replace('.ts', '')
//               let content = fs.readFileSync(`${moduleName}.ts`).toString()
//               return `import { ${content.substr(12).split(" {")[0]} } from "${moduleName}";`
//             })
//           ).then(modules => {
//             resolve(modules)
//           })
//         }
//       })
//     })
//     .then(modules => {
//       return modules
//     })
//   }catch(err){
//     console.log(err)
//   }
// }
let enums = (_a = exportEnums()) === null || _a === void 0 ? void 0 : _a.then(enums => enums);
exports.enums = enums;
