"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionLevel = exports.OptionValue = exports.QuestionType = void 0;
var QuestionType;
(function (QuestionType) {
    QuestionType["MULTI"] = "MULTI";
    QuestionType["CODING"] = "CODING";
})(QuestionType = exports.QuestionType || (exports.QuestionType = {}));
var OptionValue;
(function (OptionValue) {
    OptionValue["A"] = "A";
    OptionValue["B"] = "B";
    OptionValue["C"] = "C";
    OptionValue["D"] = "D";
})(OptionValue = exports.OptionValue || (exports.OptionValue = {}));
var QuestionLevel;
(function (QuestionLevel) {
    QuestionLevel["EASY"] = "EASY";
    QuestionLevel["MEDIUM"] = "MEDIUM";
    QuestionLevel["HARD"] = "HARD";
    QuestionLevel["ALL"] = "HARD,MEDIUM,EASY";
})(QuestionLevel = exports.QuestionLevel || (exports.QuestionLevel = {}));
