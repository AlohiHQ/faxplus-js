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
exports.WebhookEventType = void 0;
/**
 * Webhook event type
 * @export
 * @enum {string}
 */
var WebhookEventType;
(function (WebhookEventType) {
    WebhookEventType["Received"] = "fax_received";
    WebhookEventType["Sent"] = "fax_sent";
})(WebhookEventType = exports.WebhookEventType || (exports.WebhookEventType = {}));
