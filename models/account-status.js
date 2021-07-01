"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 2.0.0
 * Contact: info@fax.plus
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountStatus = void 0;
/**
 * Your account status which could be active, inactive etc
 * @export
 * @enum {string}
 */
var AccountStatus;
(function (AccountStatus) {
    AccountStatus["Active"] = "active";
    AccountStatus["UnverifiedPhone"] = "unverified_phone";
    AccountStatus["Suspended"] = "suspended";
    AccountStatus["Disabled"] = "disabled";
    AccountStatus["Inactive"] = "inactive";
    AccountStatus["Deleted"] = "deleted";
    AccountStatus["CorporateDeleted"] = "corporate_deleted";
    AccountStatus["WaitingForSignup"] = "waiting_for_signup";
})(AccountStatus = exports.AccountStatus || (exports.AccountStatus = {}));
