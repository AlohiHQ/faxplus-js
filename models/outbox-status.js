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
exports.OutboxStatus = void 0;
/**
 * Outbound fax status
 * @export
 * @enum {string}
 */
exports.OutboxStatus = {
    Submitted: 'submitted',
    Converting: 'converting',
    ScheduledForSending: 'scheduled_for_sending',
    Sending: 'sending'
};
