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
exports.NumbersApi = exports.NumbersApiFactory = exports.NumbersApiFp = exports.NumbersApiAxiosParamCreator = void 0;
var tslib_1 = require("tslib");
var axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
var common_1 = require("../common");
// @ts-ignore
var base_1 = require("../base");
/**
 * NumbersApi - axios parameter creator
 * @export
 */
exports.NumbersApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         * Get information about a single purchased/assigned fax number
         * @summary Get number information
         * @param {string} userId ID of the number owner
         * @param {string} number Fax number to get information about
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNumber: function (userId, number, options) {
            if (options === void 0) { options = {}; }
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'userId' is not null or undefined
                            common_1.assertParamExists('getNumber', 'userId', userId);
                            // verify required parameter 'number' is not null or undefined
                            common_1.assertParamExists('getNumber', 'number', number);
                            localVarPath = "/accounts/{user_id}/numbers/{number}"
                                .replace("{" + "user_id" + "}", encodeURIComponent(String(userId)))
                                .replace("{" + "number" + "}", encodeURIComponent(String(number)));
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
         * List your purchased/assigned phone numbers. For corporate members all assigned numbers will be returned, while for the corporate admin, all purchased numbers
         * @summary List phone numbers
         * @param {string} userId ID of the user to get numbers for
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listNumbers: function (userId, options) {
            if (options === void 0) { options = {}; }
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'userId' is not null or undefined
                            common_1.assertParamExists('listNumbers', 'userId', userId);
                            localVarPath = "/accounts/{user_id}/numbers"
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
         * Revoke fax number from a corporate member. To revoke your own number use self as a user_id
         * @summary Revoke number
         * @param {string} userId ID of the user to revoke the number from. Number can not be removed from the admin
         * @param {string} number Fax number to remove members from
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        revokeNumber: function (userId, number, options) {
            if (options === void 0) { options = {}; }
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'userId' is not null or undefined
                            common_1.assertParamExists('revokeNumber', 'userId', userId);
                            // verify required parameter 'number' is not null or undefined
                            common_1.assertParamExists('revokeNumber', 'number', number);
                            localVarPath = "/accounts/{user_id}/numbers/{number}"
                                .replace("{" + "user_id" + "}", encodeURIComponent(String(userId)))
                                .replace("{" + "number" + "}", encodeURIComponent(String(number)));
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
         * Assign fax number to a corporate member
         * @summary Assign number
         * @param {string} userId ID of the number owner
         * @param {string} number Fax number to update
         * @param {PayloadNumberModification} [payloadNumberModification] Request object for making changes in number object
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateNumber: function (userId, number, payloadNumberModification, options) {
            if (options === void 0) { options = {}; }
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'userId' is not null or undefined
                            common_1.assertParamExists('updateNumber', 'userId', userId);
                            // verify required parameter 'number' is not null or undefined
                            common_1.assertParamExists('updateNumber', 'number', number);
                            localVarPath = "/accounts/{user_id}/numbers/{number}"
                                .replace("{" + "user_id" + "}", encodeURIComponent(String(userId)))
                                .replace("{" + "number" + "}", encodeURIComponent(String(number)));
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
                            localVarRequestOptions.data = common_1.serializeDataIfNeeded(payloadNumberModification, localVarRequestOptions, configuration);
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
 * NumbersApi - functional programming interface
 * @export
 */
exports.NumbersApiFp = function (configuration) {
    var localVarAxiosParamCreator = exports.NumbersApiAxiosParamCreator(configuration);
    return {
        /**
         * Get information about a single purchased/assigned fax number
         * @summary Get number information
         * @param {NumbersApiGetNumberRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNumber: function (requestParameters, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.getNumber(requestParameters.userId, requestParameters.number, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * List your purchased/assigned phone numbers. For corporate members all assigned numbers will be returned, while for the corporate admin, all purchased numbers
         * @summary List phone numbers
         * @param {NumbersApiListNumbersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listNumbers: function (requestParameters, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.listNumbers(requestParameters.userId, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * Revoke fax number from a corporate member. To revoke your own number use self as a user_id
         * @summary Revoke number
         * @param {NumbersApiRevokeNumberRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        revokeNumber: function (requestParameters, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.revokeNumber(requestParameters.userId, requestParameters.number, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * Assign fax number to a corporate member
         * @summary Assign number
         * @param {NumbersApiUpdateNumberRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateNumber: function (requestParameters, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.updateNumber(requestParameters.userId, requestParameters.number, requestParameters.payloadNumberModification, options)];
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
 * NumbersApi - factory interface
 * @export
 */
exports.NumbersApiFactory = function (configuration, basePath, axios) {
    var localVarFp = exports.NumbersApiFp(configuration);
    return {
        /**
         * Get information about a single purchased/assigned fax number
         * @summary Get number information
         * @param {NumbersApiGetNumberRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNumber: function (requestParameters, options) {
            return localVarFp.getNumber(requestParameters, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * List your purchased/assigned phone numbers. For corporate members all assigned numbers will be returned, while for the corporate admin, all purchased numbers
         * @summary List phone numbers
         * @param {NumbersApiListNumbersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listNumbers: function (requestParameters, options) {
            return localVarFp.listNumbers(requestParameters, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Revoke fax number from a corporate member. To revoke your own number use self as a user_id
         * @summary Revoke number
         * @param {NumbersApiRevokeNumberRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        revokeNumber: function (requestParameters, options) {
            return localVarFp.revokeNumber(requestParameters, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Assign fax number to a corporate member
         * @summary Assign number
         * @param {NumbersApiUpdateNumberRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateNumber: function (requestParameters, options) {
            return localVarFp.updateNumber(requestParameters, options).then(function (request) { return request(axios, basePath); });
        },
    };
};
/**
 * NumbersApi - object-oriented interface
 * @export
 * @class NumbersApi
 * @extends {BaseAPI}
 */
var NumbersApi = /** @class */ (function (_super) {
    tslib_1.__extends(NumbersApi, _super);
    function NumbersApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get information about a single purchased/assigned fax number
     * @summary Get number information
     * @param {NumbersApiGetNumberRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NumbersApi
     */
    NumbersApi.prototype.getNumber = function (requestParameters, options) {
        var _this = this;
        return exports.NumbersApiFp(this.configuration).getNumber(requestParameters, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * List your purchased/assigned phone numbers. For corporate members all assigned numbers will be returned, while for the corporate admin, all purchased numbers
     * @summary List phone numbers
     * @param {NumbersApiListNumbersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NumbersApi
     */
    NumbersApi.prototype.listNumbers = function (requestParameters, options) {
        var _this = this;
        return exports.NumbersApiFp(this.configuration).listNumbers(requestParameters, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Revoke fax number from a corporate member. To revoke your own number use self as a user_id
     * @summary Revoke number
     * @param {NumbersApiRevokeNumberRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NumbersApi
     */
    NumbersApi.prototype.revokeNumber = function (requestParameters, options) {
        var _this = this;
        return exports.NumbersApiFp(this.configuration).revokeNumber(requestParameters, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Assign fax number to a corporate member
     * @summary Assign number
     * @param {NumbersApiUpdateNumberRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NumbersApi
     */
    NumbersApi.prototype.updateNumber = function (requestParameters, options) {
        var _this = this;
        return exports.NumbersApiFp(this.configuration).updateNumber(requestParameters, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    return NumbersApi;
}(base_1.BaseAPI));
exports.NumbersApi = NumbersApi;
