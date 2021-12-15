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
exports.CoverPageFlags = void 0;
/**
 * Allowed flags for the cover page
 * @export
 * @enum {string}
 */
var CoverPageFlags;
(function (CoverPageFlags) {
    CoverPageFlags["Urgent"] = "urgent";
    CoverPageFlags["ForReview"] = "for_review";
    CoverPageFlags["PleaseReply"] = "please_reply";
    CoverPageFlags["Confidential"] = "confidential";
})(CoverPageFlags = exports.CoverPageFlags || (exports.CoverPageFlags = {}));
