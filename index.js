"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
exports.__esModule = true;
var glob_1 = __importDefault(require("glob"));
var fs_1 = __importDefault(require("fs"));
var exportEnums = function loadEnums() {
    try {
        return new Promise(function (resolve, reject) {
            (0, glob_1["default"])(__dirname + '/src/enums/*.enum.ts', function (err, res) {
                if (err) {
                    reject(err);
                }
                else {
                    Promise.all(res.map(function (file) {
                        var moduleName = file.replace('.ts', '');
                        var content = fs_1["default"].readFileSync("".concat(moduleName, ".ts")).toString();
                        return "import { ".concat(content.substr(12).split(" {")[0], " } from \"").concat(moduleName, "\";");
                    })).then(function (modules) {
                        resolve(modules);
                    });
                }
            });
        })
            .then(function (modules) {
            return modules;
        });
    }
    catch (err) {
        console.log(err);
    }
};
var enums = (_a = exportEnums()) === null || _a === void 0 ? void 0 : _a.then(function (enums) { return enums; });
enums.then(data => console.log(data))
module.exports = enums;
