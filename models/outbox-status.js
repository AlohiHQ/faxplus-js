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
exports.OutboxStatus = void 0;
/**
 * Outbound fax status
 * @export
 * @enum {string}
 */
var OutboxStatus;
(function (OutboxStatus) {
    OutboxStatus["Submitted"] = "submitted";
    OutboxStatus["Converting"] = "converting";
    OutboxStatus["ScheduledForSending"] = "scheduled_for_sending";
    OutboxStatus["Sending"] = "sending";
})(OutboxStatus = exports.OutboxStatus || (exports.OutboxStatus = {}));
