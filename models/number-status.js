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
exports.NumberStatus = void 0;
/**
 * Status of your fax number e.g. active, inactive.
 * @export
 * @enum {string}
 */
var NumberStatus;
(function (NumberStatus) {
    NumberStatus["WaitingVerification"] = "waiting_verification";
    NumberStatus["Active"] = "active";
})(NumberStatus = exports.NumberStatus || (exports.NumberStatus = {}));
