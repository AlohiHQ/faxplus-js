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
exports.WebhookCallbackHookEventEnum = void 0;
/**
    * @export
    * @enum {string}
    */
var WebhookCallbackHookEventEnum;
(function (WebhookCallbackHookEventEnum) {
    WebhookCallbackHookEventEnum["Sent"] = "fax_sent";
    WebhookCallbackHookEventEnum["Received"] = "fax_received";
})(WebhookCallbackHookEventEnum = exports.WebhookCallbackHookEventEnum || (exports.WebhookCallbackHookEventEnum = {}));
