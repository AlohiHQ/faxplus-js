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
exports.FaxesApi = exports.FaxesApiFactory = exports.FaxesApiFp = exports.FaxesApiAxiosParamCreator = void 0;
var tslib_1 = require("tslib");
var axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
var common_1 = require("../common");
// @ts-ignore
var base_1 = require("../base");
/**
 * FaxesApi - axios parameter creator
 * @export
 */
exports.FaxesApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         * Delete a specific fax record by providing its id
         * @summary Delete a fax
         * @param {string} userId self or user id of a corporate member
         * @param {string} faxId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFax: function (userId, faxId, options) {
            if (options === void 0) { options = {}; }
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'userId' is not null or undefined
                            common_1.assertParamExists('deleteFax', 'userId', userId);
                            // verify required parameter 'faxId' is not null or undefined
                            common_1.assertParamExists('deleteFax', 'faxId', faxId);
                            localVarPath = "/accounts/{user_id}/faxes/{fax_id}"
                                .replace("{" + "user_id" + "}", encodeURIComponent(String(userId)))
                                .replace("{" + "fax_id" + "}", encodeURIComponent(String(faxId)));
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
         * Get a specific fax record details like duration, pages etc.
         * @summary Get a fax record
         * @param {string} userId self or user id of a corporate member
         * @param {string} faxId
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFax: function (userId, faxId, options) {
            if (options === void 0) { options = {}; }
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'userId' is not null or undefined
                            common_1.assertParamExists('getFax', 'userId', userId);
                            // verify required parameter 'faxId' is not null or undefined
                            common_1.assertParamExists('getFax', 'faxId', faxId);
                            localVarPath = "/accounts/{user_id}/faxes/{fax_id}"
                                .replace("{" + "user_id" + "}", encodeURIComponent(String(userId)))
                                .replace("{" + "fax_id" + "}", encodeURIComponent(String(faxId)));
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
         * Get your own or your subordinate\'s faxes list
         * @summary List fax records
         * @param {string} userId self or user id of a corporate member
         * @param {FaxCategory} [category] Category parameter. Valid values: **inbox**, **sent**, **spam**
         * @param {string} [after] Start date to get records from that date. Format: *YYYY-MM-DD HH:mm:ss*
         * @param {string} [before] End date to get records before that date. Format: *YYYY-MM-DD HH:mm:ss*
         * @param {number} [limit] Limit of fax records you want to get per request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listFaxes: function (userId, category, after, before, limit, options) {
            if (options === void 0) { options = {}; }
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'userId' is not null or undefined
                            common_1.assertParamExists('listFaxes', 'userId', userId);
                            localVarPath = "/accounts/{user_id}/faxes"
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
                            if (category !== undefined) {
                                localVarQueryParameter['category'] = category;
                            }
                            if (after !== undefined) {
                                localVarQueryParameter['after'] = after;
                            }
                            if (before !== undefined) {
                                localVarQueryParameter['before'] = before;
                            }
                            if (limit !== undefined) {
                                localVarQueryParameter['limit'] = limit;
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
        /**
         * You can modify a fax record\'s comment or mark it as read
         * @summary Modify fax record
         * @param {string} userId self or user id of a corporate member
         * @param {string} faxId
         * @param {PayloadFaxModification} [payloadFaxModification] Request object for making changes in a fax object
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateFax: function (userId, faxId, payloadFaxModification, options) {
            if (options === void 0) { options = {}; }
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'userId' is not null or undefined
                            common_1.assertParamExists('updateFax', 'userId', userId);
                            // verify required parameter 'faxId' is not null or undefined
                            common_1.assertParamExists('updateFax', 'faxId', faxId);
                            localVarPath = "/accounts/{user_id}/faxes/{fax_id}"
                                .replace("{" + "user_id" + "}", encodeURIComponent(String(userId)))
                                .replace("{" + "fax_id" + "}", encodeURIComponent(String(faxId)));
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
                            localVarRequestOptions.data = common_1.serializeDataIfNeeded(payloadFaxModification, localVarRequestOptions, configuration);
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
 * FaxesApi - functional programming interface
 * @export
 */
exports.FaxesApiFp = function (configuration) {
    var localVarAxiosParamCreator = exports.FaxesApiAxiosParamCreator(configuration);
    return {
        /**
         * Delete a specific fax record by providing its id
         * @summary Delete a fax
         * @param {FaxesApiDeleteFaxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFax: function (requestParameters, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.deleteFax(requestParameters.userId, requestParameters.faxId, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * Get a specific fax record details like duration, pages etc.
         * @summary Get a fax record
         * @param {FaxesApiGetFaxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFax: function (requestParameters, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.getFax(requestParameters.userId, requestParameters.faxId, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * Get your own or your subordinate\'s faxes list
         * @summary List fax records
         * @param {FaxesApiListFaxesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listFaxes: function (requestParameters, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.listFaxes(requestParameters.userId, requestParameters.category, requestParameters.after, requestParameters.before, requestParameters.limit, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * You can modify a fax record\'s comment or mark it as read
         * @summary Modify fax record
         * @param {FaxesApiUpdateFaxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateFax: function (requestParameters, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.updateFax(requestParameters.userId, requestParameters.faxId, requestParameters.payloadFaxModification, options)];
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
 * FaxesApi - factory interface
 * @export
 */
exports.FaxesApiFactory = function (configuration, basePath, axios) {
    var localVarFp = exports.FaxesApiFp(configuration);
    return {
        /**
         * Delete a specific fax record by providing its id
         * @summary Delete a fax
         * @param {FaxesApiDeleteFaxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteFax: function (requestParameters, options) {
            return localVarFp.deleteFax(requestParameters, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Get a specific fax record details like duration, pages etc.
         * @summary Get a fax record
         * @param {FaxesApiGetFaxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFax: function (requestParameters, options) {
            return localVarFp.getFax(requestParameters, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Get your own or your subordinate\'s faxes list
         * @summary List fax records
         * @param {FaxesApiListFaxesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listFaxes: function (requestParameters, options) {
            return localVarFp.listFaxes(requestParameters, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * You can modify a fax record\'s comment or mark it as read
         * @summary Modify fax record
         * @param {FaxesApiUpdateFaxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateFax: function (requestParameters, options) {
            return localVarFp.updateFax(requestParameters, options).then(function (request) { return request(axios, basePath); });
        },
    };
};
/**
 * FaxesApi - object-oriented interface
 * @export
 * @class FaxesApi
 * @extends {BaseAPI}
 */
var FaxesApi = /** @class */ (function (_super) {
    tslib_1.__extends(FaxesApi, _super);
    function FaxesApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Delete a specific fax record by providing its id
     * @summary Delete a fax
     * @param {FaxesApiDeleteFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FaxesApi
     */
    FaxesApi.prototype.deleteFax = function (requestParameters, options) {
        var _this = this;
        return exports.FaxesApiFp(this.configuration).deleteFax(requestParameters, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Get a specific fax record details like duration, pages etc.
     * @summary Get a fax record
     * @param {FaxesApiGetFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FaxesApi
     */
    FaxesApi.prototype.getFax = function (requestParameters, options) {
        var _this = this;
        return exports.FaxesApiFp(this.configuration).getFax(requestParameters, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Get your own or your subordinate\'s faxes list
     * @summary List fax records
     * @param {FaxesApiListFaxesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FaxesApi
     */
    FaxesApi.prototype.listFaxes = function (requestParameters, options) {
        var _this = this;
        return exports.FaxesApiFp(this.configuration).listFaxes(requestParameters, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * You can modify a fax record\'s comment or mark it as read
     * @summary Modify fax record
     * @param {FaxesApiUpdateFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FaxesApi
     */
    FaxesApi.prototype.updateFax = function (requestParameters, options) {
        var _this = this;
        return exports.FaxesApiFp(this.configuration).updateFax(requestParameters, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    return FaxesApi;
}(base_1.BaseAPI));
exports.FaxesApi = FaxesApi;
