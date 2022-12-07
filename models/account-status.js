"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.2
 * Contact: info@fax.plus
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountStatus = void 0;
/**
 * Your account status which could be active, inactive etc
 * @export
 * @enum {string}
 */
exports.AccountStatus = {
    Active: 'active',
    UnverifiedPhone: 'unverified_phone',
    Suspended: 'suspended',
    Disabled: 'disabled',
    Inactive: 'inactive',
    Deleted: 'deleted',
    CorporateDeleted: 'corporate_deleted',
    WaitingForSignup: 'waiting_for_signup'
};
