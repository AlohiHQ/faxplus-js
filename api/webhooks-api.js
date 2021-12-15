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
exports.WebhooksApi = exports.WebhooksApiFactory = exports.WebhooksApiFp = exports.WebhooksApiAxiosParamCreator = void 0;
var tslib_1 = require("tslib");
var axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
var common_1 = require("../common");
// @ts-ignore
var base_1 = require("../base");
/**
 * WebhooksApi - axios parameter creator
 * @export
 */
exports.WebhooksApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         * Register a new webhook which will be called on a specific event. See the WebhookCallback model
         * @summary Register new webhook
         * @param {Webhook} [webhook] Request to create new webhook
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createWebhook: function (webhook, options) {
            if (options === void 0) { options = {}; }
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            localVarPath = "/hooks";
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = tslib_1.__assign(tslib_1.__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication fax_oauth required
                            // oauth required
                            return [4 /*yield*/, common_1.setOAuthToObject(localVarHeaderParameter, "fax_oauth", ["all"], configuration)];
                        case 1:
                            // authentication fax_oauth required
                            // oauth required
                            _a.sent();
                            localVarHeaderParameter['Content-Type'] = 'application/json';
                            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            localVarRequestOptions.data = common_1.serializeDataIfNeeded(webhook, localVarRequestOptions, configuration);
                            return [2 /*return*/, {
                                    url: common_1.toPathString(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * Delete a webhook by its ID
         * @summary Delete webhook
         * @param {string} hookId ID of the webhook to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWebhook: function (hookId, options) {
            if (options === void 0) { options = {}; }
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'hookId' is not null or undefined
                            common_1.assertParamExists('deleteWebhook', 'hookId', hookId);
                            localVarPath = "/hooks/{hook_id}"
                                .replace("{" + "hook_id" + "}", encodeURIComponent(String(hookId)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = tslib_1.__assign(tslib_1.__assign({ method: 'DELETE' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication fax_oauth required
                            // oauth required
                            return [4 /*yield*/, common_1.setOAuthToObject(localVarHeaderParameter, "fax_oauth", ["all"], configuration)];
                        case 1:
                            // authentication fax_oauth required
                            // oauth required
                            _a.sent();
                            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: common_1.toPathString(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * Returns a list of currently registered webhooks for the requested **event**
         * @summary List user webhooks
         * @param {WebhookEventType} event
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWebhooks: function (event, options) {
            if (options === void 0) { options = {}; }
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'event' is not null or undefined
                            common_1.assertParamExists('getWebhooks', 'event', event);
                            localVarPath = "/hooks";
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = tslib_1.__assign(tslib_1.__assign({ method: 'GET' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            // authentication fax_oauth required
                            // oauth required
                            return [4 /*yield*/, common_1.setOAuthToObject(localVarHeaderParameter, "fax_oauth", ["all"], configuration)];
                        case 1:
                            // authentication fax_oauth required
                            // oauth required
                            _a.sent();
                            if (event !== undefined) {
                                localVarQueryParameter['event'] = event;
                            }
                            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            return [2 /*return*/, {
                                    url: common_1.toPathString(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
    };
};
/**
 * WebhooksApi - functional programming interface
 * @export
 */
exports.WebhooksApiFp = function (configuration) {
    var localVarAxiosParamCreator = exports.WebhooksApiAxiosParamCreator(configuration);
    return {
        /**
         * Register a new webhook which will be called on a specific event. See the WebhookCallback model
         * @summary Register new webhook
         * @param {WebhooksApiCreateWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createWebhook: function (requestParameters, options) {
            if (requestParameters === void 0) { requestParameters = {}; }
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.createWebhook(requestParameters.webhook, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * Delete a webhook by its ID
         * @summary Delete webhook
         * @param {WebhooksApiDeleteWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWebhook: function (requestParameters, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.deleteWebhook(requestParameters.hookId, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * Returns a list of currently registered webhooks for the requested **event**
         * @summary List user webhooks
         * @param {WebhooksApiGetWebhooksRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWebhooks: function (requestParameters, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.getWebhooks(requestParameters.event, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
    };
};
/**
 * WebhooksApi - factory interface
 * @export
 */
exports.WebhooksApiFactory = function (configuration, basePath, axios) {
    var localVarFp = exports.WebhooksApiFp(configuration);
    return {
        /**
         * Register a new webhook which will be called on a specific event. See the WebhookCallback model
         * @summary Register new webhook
         * @param {WebhooksApiCreateWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createWebhook: function (requestParameters, options) {
            if (requestParameters === void 0) { requestParameters = {}; }
            return localVarFp.createWebhook(requestParameters, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Delete a webhook by its ID
         * @summary Delete webhook
         * @param {WebhooksApiDeleteWebhookRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteWebhook: function (requestParameters, options) {
            return localVarFp.deleteWebhook(requestParameters, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Returns a list of currently registered webhooks for the requested **event**
         * @summary List user webhooks
         * @param {WebhooksApiGetWebhooksRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWebhooks: function (requestParameters, options) {
            return localVarFp.getWebhooks(requestParameters, options).then(function (request) { return request(axios, basePath); });
        },
    };
};
/**
 * WebhooksApi - object-oriented interface
 * @export
 * @class WebhooksApi
 * @extends {BaseAPI}
 */
var WebhooksApi = /** @class */ (function (_super) {
    tslib_1.__extends(WebhooksApi, _super);
    function WebhooksApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Register a new webhook which will be called on a specific event. See the WebhookCallback model
     * @summary Register new webhook
     * @param {WebhooksApiCreateWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    WebhooksApi.prototype.createWebhook = function (requestParameters, options) {
        var _this = this;
        if (requestParameters === void 0) { requestParameters = {}; }
        return exports.WebhooksApiFp(this.configuration).createWebhook(requestParameters, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Delete a webhook by its ID
     * @summary Delete webhook
     * @param {WebhooksApiDeleteWebhookRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    WebhooksApi.prototype.deleteWebhook = function (requestParameters, options) {
        var _this = this;
        return exports.WebhooksApiFp(this.configuration).deleteWebhook(requestParameters, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Returns a list of currently registered webhooks for the requested **event**
     * @summary List user webhooks
     * @param {WebhooksApiGetWebhooksRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebhooksApi
     */
    WebhooksApi.prototype.getWebhooks = function (requestParameters, options) {
        var _this = this;
        return exports.WebhooksApiFp(this.configuration).getWebhooks(requestParameters, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    return WebhooksApi;
}(base_1.BaseAPI));
exports.WebhooksApi = WebhooksApi;
