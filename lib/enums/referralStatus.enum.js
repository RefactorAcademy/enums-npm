"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferralWithdrawStatus = exports.ReferralStatus = void 0;
var ReferralStatus;
(function (ReferralStatus) {
    ReferralStatus["PENDING"] = "PENDING";
    ReferralStatus["SUCCESSFUL"] = "SUCCESSFUL";
})(ReferralStatus = exports.ReferralStatus || (exports.ReferralStatus = {}));
var ReferralWithdrawStatus;
(function (ReferralWithdrawStatus) {
    ReferralWithdrawStatus["PENDING"] = "PENDING";
    ReferralWithdrawStatus["PROCESSED"] = "PROCESSED";
    ReferralWithdrawStatus["REJECTED"] = "REJECTED";
    ReferralWithdrawStatus["ALL"] = "ALL";
})(ReferralWithdrawStatus = exports.ReferralWithdrawStatus || (exports.ReferralWithdrawStatus = {}));
