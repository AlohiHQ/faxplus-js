"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.0
 * Contact: info@fax.plus
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountType = void 0;
/**
 * Account type which could be corporate_admin, individual, etc
 * @export
 * @enum {string}
 */
var AccountType;
(function (AccountType) {
    AccountType["CorporateAdmin"] = "corporate_admin";
    AccountType["Individual"] = "individual";
    AccountType["CorporateMember"] = "corporate_member";
})(AccountType = exports.AccountType || (exports.AccountType = {}));
