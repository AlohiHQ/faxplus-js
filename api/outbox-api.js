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
exports.OutboxApi = exports.OutboxApiFactory = exports.OutboxApiFp = exports.OutboxApiAxiosParamCreator = void 0;
var tslib_1 = require("tslib");
var axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
var common_1 = require("../common");
// @ts-ignore
var base_1 = require("../base");
/**
 * OutboxApi - axios parameter creator
 * @export
 */
exports.OutboxApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         * Delete an outgoing fax that is being scheduled for sending
         * @summary Delete an outgoing fax
         * @param {string} userId self or user id of a corporate member
         * @param {string} outboxFaxId ID of the outgoing fax to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOutboxFax: function (userId, outboxFaxId, options) {
            if (options === void 0) { options = {}; }
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'userId' is not null or undefined
                            common_1.assertParamExists('deleteOutboxFax', 'userId', userId);
                            // verify required parameter 'outboxFaxId' is not null or undefined
                            common_1.assertParamExists('deleteOutboxFax', 'outboxFaxId', outboxFaxId);
                            localVarPath = "/accounts/{user_id}/outbox/{outbox_fax_id}"
                                .replace("{" + "user_id" + "}", encodeURIComponent(String(userId)))
                                .replace("{" + "outbox_fax_id" + "}", encodeURIComponent(String(outboxFaxId)));
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
         * Get a list of faxes currently scheduled for sending
         * @summary List outgoing faxes
         * @param {string} userId self or user id of a corporate member
         * @param {string} outboxFaxId ID of the outgoing fax to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOutboxFax: function (userId, outboxFaxId, options) {
            if (options === void 0) { options = {}; }
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'userId' is not null or undefined
                            common_1.assertParamExists('getOutboxFax', 'userId', userId);
                            // verify required parameter 'outboxFaxId' is not null or undefined
                            common_1.assertParamExists('getOutboxFax', 'outboxFaxId', outboxFaxId);
                            localVarPath = "/accounts/{user_id}/outbox/{outbox_fax_id}"
                                .replace("{" + "user_id" + "}", encodeURIComponent(String(userId)))
                                .replace("{" + "outbox_fax_id" + "}", encodeURIComponent(String(outboxFaxId)));
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
         * Get a list of the faxes in the outbox which were not yet sent
         * @summary List faxes in the outbox
         * @param {string} userId self or user id of a corporate member
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listOutboxFaxes: function (userId, options) {
            if (options === void 0) { options = {}; }
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'userId' is not null or undefined
                            common_1.assertParamExists('listOutboxFaxes', 'userId', userId);
                            localVarPath = "/accounts/{user_id}/outbox"
                                .replace("{" + "user_id" + "}", encodeURIComponent(String(userId)));
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
         * Send a fax to one or more destinations. For corporate members without a fax number assigned set the \'from\' parameter to \'no_number\'
         * @summary Send a fax
         * @param {string} userId self or user id of a corporate member
         * @param {PayloadOutbox} [payloadOutbox] Request to send new outbound fax
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendFax: function (userId, payloadOutbox, options) {
            if (options === void 0) { options = {}; }
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'userId' is not null or undefined
                            common_1.assertParamExists('sendFax', 'userId', userId);
                            localVarPath = "/accounts/{user_id}/outbox"
                                .replace("{" + "user_id" + "}", encodeURIComponent(String(userId)));
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
                            localVarRequestOptions.data = common_1.serializeDataIfNeeded(payloadOutbox, localVarRequestOptions, configuration);
                            return [2 /*return*/, {
                                    url: common_1.toPathString(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * Modify an outgoing fax that is being scheduled for sending
         * @summary Modify an outgoing fax
         * @param {string} userId self or user id of a corporate member
         * @param {string} outboxFaxId ID of the outgoing fax to update
         * @param {PayloadOutboxModification} [payloadOutboxModification] Request object for making changes in an outbox object
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOutboxFax: function (userId, outboxFaxId, payloadOutboxModification, options) {
            if (options === void 0) { options = {}; }
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'userId' is not null or undefined
                            common_1.assertParamExists('updateOutboxFax', 'userId', userId);
                            // verify required parameter 'outboxFaxId' is not null or undefined
                            common_1.assertParamExists('updateOutboxFax', 'outboxFaxId', outboxFaxId);
                            localVarPath = "/accounts/{user_id}/outbox/{outbox_fax_id}"
                                .replace("{" + "user_id" + "}", encodeURIComponent(String(userId)))
                                .replace("{" + "outbox_fax_id" + "}", encodeURIComponent(String(outboxFaxId)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = tslib_1.__assign(tslib_1.__assign({ method: 'PUT' }, baseOptions), options);
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
                            localVarRequestOptions.data = common_1.serializeDataIfNeeded(payloadOutboxModification, localVarRequestOptions, configuration);
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
 * OutboxApi - functional programming interface
 * @export
 */
exports.OutboxApiFp = function (configuration) {
    var localVarAxiosParamCreator = exports.OutboxApiAxiosParamCreator(configuration);
    return {
        /**
         * Delete an outgoing fax that is being scheduled for sending
         * @summary Delete an outgoing fax
         * @param {OutboxApiDeleteOutboxFaxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOutboxFax: function (requestParameters, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.deleteOutboxFax(requestParameters.userId, requestParameters.outboxFaxId, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * Get a list of faxes currently scheduled for sending
         * @summary List outgoing faxes
         * @param {OutboxApiGetOutboxFaxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOutboxFax: function (requestParameters, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.getOutboxFax(requestParameters.userId, requestParameters.outboxFaxId, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * Get a list of the faxes in the outbox which were not yet sent
         * @summary List faxes in the outbox
         * @param {OutboxApiListOutboxFaxesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listOutboxFaxes: function (requestParameters, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.listOutboxFaxes(requestParameters.userId, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * Send a fax to one or more destinations. For corporate members without a fax number assigned set the \'from\' parameter to \'no_number\'
         * @summary Send a fax
         * @param {OutboxApiSendFaxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendFax: function (requestParameters, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.sendFax(requestParameters.userId, requestParameters.payloadOutbox, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * Modify an outgoing fax that is being scheduled for sending
         * @summary Modify an outgoing fax
         * @param {OutboxApiUpdateOutboxFaxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOutboxFax: function (requestParameters, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.updateOutboxFax(requestParameters.userId, requestParameters.outboxFaxId, requestParameters.payloadOutboxModification, options)];
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
 * OutboxApi - factory interface
 * @export
 */
exports.OutboxApiFactory = function (configuration, basePath, axios) {
    var localVarFp = exports.OutboxApiFp(configuration);
    return {
        /**
         * Delete an outgoing fax that is being scheduled for sending
         * @summary Delete an outgoing fax
         * @param {OutboxApiDeleteOutboxFaxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOutboxFax: function (requestParameters, options) {
            return localVarFp.deleteOutboxFax(requestParameters, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Get a list of faxes currently scheduled for sending
         * @summary List outgoing faxes
         * @param {OutboxApiGetOutboxFaxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOutboxFax: function (requestParameters, options) {
            return localVarFp.getOutboxFax(requestParameters, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Get a list of the faxes in the outbox which were not yet sent
         * @summary List faxes in the outbox
         * @param {OutboxApiListOutboxFaxesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listOutboxFaxes: function (requestParameters, options) {
            return localVarFp.listOutboxFaxes(requestParameters, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Send a fax to one or more destinations. For corporate members without a fax number assigned set the \'from\' parameter to \'no_number\'
         * @summary Send a fax
         * @param {OutboxApiSendFaxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendFax: function (requestParameters, options) {
            return localVarFp.sendFax(requestParameters, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Modify an outgoing fax that is being scheduled for sending
         * @summary Modify an outgoing fax
         * @param {OutboxApiUpdateOutboxFaxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateOutboxFax: function (requestParameters, options) {
            return localVarFp.updateOutboxFax(requestParameters, options).then(function (request) { return request(axios, basePath); });
        },
    };
};
/**
 * OutboxApi - object-oriented interface
 * @export
 * @class OutboxApi
 * @extends {BaseAPI}
 */
var OutboxApi = /** @class */ (function (_super) {
    tslib_1.__extends(OutboxApi, _super);
    function OutboxApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Delete an outgoing fax that is being scheduled for sending
     * @summary Delete an outgoing fax
     * @param {OutboxApiDeleteOutboxFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OutboxApi
     */
    OutboxApi.prototype.deleteOutboxFax = function (requestParameters, options) {
        var _this = this;
        return exports.OutboxApiFp(this.configuration).deleteOutboxFax(requestParameters, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Get a list of faxes currently scheduled for sending
     * @summary List outgoing faxes
     * @param {OutboxApiGetOutboxFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OutboxApi
     */
    OutboxApi.prototype.getOutboxFax = function (requestParameters, options) {
        var _this = this;
        return exports.OutboxApiFp(this.configuration).getOutboxFax(requestParameters, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Get a list of the faxes in the outbox which were not yet sent
     * @summary List faxes in the outbox
     * @param {OutboxApiListOutboxFaxesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OutboxApi
     */
    OutboxApi.prototype.listOutboxFaxes = function (requestParameters, options) {
        var _this = this;
        return exports.OutboxApiFp(this.configuration).listOutboxFaxes(requestParameters, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Send a fax to one or more destinations. For corporate members without a fax number assigned set the \'from\' parameter to \'no_number\'
     * @summary Send a fax
     * @param {OutboxApiSendFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OutboxApi
     */
    OutboxApi.prototype.sendFax = function (requestParameters, options) {
        var _this = this;
        return exports.OutboxApiFp(this.configuration).sendFax(requestParameters, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Modify an outgoing fax that is being scheduled for sending
     * @summary Modify an outgoing fax
     * @param {OutboxApiUpdateOutboxFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OutboxApi
     */
    OutboxApi.prototype.updateOutboxFax = function (requestParameters, options) {
        var _this = this;
        return exports.OutboxApiFp(this.configuration).updateOutboxFax(requestParameters, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    return OutboxApi;
}(base_1.BaseAPI));
exports.OutboxApi = OutboxApi;
