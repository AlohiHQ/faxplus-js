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
exports.AccountsApi = exports.AccountsApiFactory = exports.AccountsApiFp = exports.AccountsApiAxiosParamCreator = void 0;
var tslib_1 = require("tslib");
var axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
var common_1 = require("../common");
// @ts-ignore
var base_1 = require("../base");
/**
 * AccountsApi - axios parameter creator
 * @export
 */
exports.AccountsApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         * Get account information of all non-admin members of your corporate account. Only the admin account can send a request to this endpoint which returns the accounts of all members
         * @summary List corporate members
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAccounts: function (options) {
            if (options === void 0) { options = {}; }
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            localVarPath = "/accounts";
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
         * Get corporate member\'s role and faxing quota
         * @summary Get member details
         * @param {string} memberUserId Member user ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMemberDetails: function (memberUserId, options) {
            if (options === void 0) { options = {}; }
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'memberUserId' is not null or undefined
                            common_1.assertParamExists('getMemberDetails', 'memberUserId', memberUserId);
                            localVarPath = "/accounts/self/member-details/{member_user_id}"
                                .replace("{" + "member_user_id" + "}", encodeURIComponent(String(memberUserId)));
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
         * Get information about an account. For members user_id can only be self. For admin it can be either self, or a user_id of any corporate member
         * @summary Get account information
         * @param {string} userId User ID to get information about. For your own account use **\&#39;self\&#39;**
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser: function (userId, options) {
            if (options === void 0) { options = {}; }
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'userId' is not null or undefined
                            common_1.assertParamExists('getUser', 'userId', userId);
                            localVarPath = "/accounts/{user_id}"
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
         * Update corporate member\'s role and faxing quota
         * @summary Modify member details
         * @param {string} memberUserId Member user ID
         * @param {MemberDetail} [memberDetail] Request object for making changes in member details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMemberDetails: function (memberUserId, memberDetail, options) {
            if (options === void 0) { options = {}; }
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'memberUserId' is not null or undefined
                            common_1.assertParamExists('updateMemberDetails', 'memberUserId', memberUserId);
                            localVarPath = "/accounts/self/member-details/{member_user_id}"
                                .replace("{" + "member_user_id" + "}", encodeURIComponent(String(memberUserId)));
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
                            localVarRequestOptions.data = common_1.serializeDataIfNeeded(memberDetail, localVarRequestOptions, configuration);
                            return [2 /*return*/, {
                                    url: common_1.toPathString(localVarUrlObj),
                                    options: localVarRequestOptions,
                                }];
                    }
                });
            });
        },
        /**
         * Modify personal information of your own account or your corporate member\'s account. user_id can be either self, or a subordinate\'s user_id
         * @summary Modify account information
         * @param {string} userId User ID to get information about. For your own account use **\&#39;self\&#39;**
         * @param {PayloadAccountModification} [payloadAccountModification] Request object for making changes in account
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUser: function (userId, payloadAccountModification, options) {
            if (options === void 0) { options = {}; }
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'userId' is not null or undefined
                            common_1.assertParamExists('updateUser', 'userId', userId);
                            localVarPath = "/accounts/{user_id}"
                                .replace("{" + "user_id" + "}", encodeURIComponent(String(userId)));
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
                            localVarRequestOptions.data = common_1.serializeDataIfNeeded(payloadAccountModification, localVarRequestOptions, configuration);
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
 * AccountsApi - functional programming interface
 * @export
 */
exports.AccountsApiFp = function (configuration) {
    var localVarAxiosParamCreator = exports.AccountsApiAxiosParamCreator(configuration);
    return {
        /**
         * Get account information of all non-admin members of your corporate account. Only the admin account can send a request to this endpoint which returns the accounts of all members
         * @summary List corporate members
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAccounts: function (options) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.getAccounts(options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * Get corporate member\'s role and faxing quota
         * @summary Get member details
         * @param {AccountsApiGetMemberDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMemberDetails: function (requestParameters, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.getMemberDetails(requestParameters.memberUserId, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * Get information about an account. For members user_id can only be self. For admin it can be either self, or a user_id of any corporate member
         * @summary Get account information
         * @param {AccountsApiGetUserRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser: function (requestParameters, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.getUser(requestParameters.userId, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * Update corporate member\'s role and faxing quota
         * @summary Modify member details
         * @param {AccountsApiUpdateMemberDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMemberDetails: function (requestParameters, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.updateMemberDetails(requestParameters.memberUserId, requestParameters.memberDetail, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * Modify personal information of your own account or your corporate member\'s account. user_id can be either self, or a subordinate\'s user_id
         * @summary Modify account information
         * @param {AccountsApiUpdateUserRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUser: function (requestParameters, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.updateUser(requestParameters.userId, requestParameters.payloadAccountModification, options)];
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
 * AccountsApi - factory interface
 * @export
 */
exports.AccountsApiFactory = function (configuration, basePath, axios) {
    var localVarFp = exports.AccountsApiFp(configuration);
    return {
        /**
         * Get account information of all non-admin members of your corporate account. Only the admin account can send a request to this endpoint which returns the accounts of all members
         * @summary List corporate members
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAccounts: function (options) {
            return localVarFp.getAccounts(options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Get corporate member\'s role and faxing quota
         * @summary Get member details
         * @param {AccountsApiGetMemberDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMemberDetails: function (requestParameters, options) {
            return localVarFp.getMemberDetails(requestParameters, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Get information about an account. For members user_id can only be self. For admin it can be either self, or a user_id of any corporate member
         * @summary Get account information
         * @param {AccountsApiGetUserRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser: function (requestParameters, options) {
            return localVarFp.getUser(requestParameters, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Update corporate member\'s role and faxing quota
         * @summary Modify member details
         * @param {AccountsApiUpdateMemberDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMemberDetails: function (requestParameters, options) {
            return localVarFp.updateMemberDetails(requestParameters, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Modify personal information of your own account or your corporate member\'s account. user_id can be either self, or a subordinate\'s user_id
         * @summary Modify account information
         * @param {AccountsApiUpdateUserRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUser: function (requestParameters, options) {
            return localVarFp.updateUser(requestParameters, options).then(function (request) { return request(axios, basePath); });
        },
    };
};
/**
 * AccountsApi - object-oriented interface
 * @export
 * @class AccountsApi
 * @extends {BaseAPI}
 */
var AccountsApi = /** @class */ (function (_super) {
    tslib_1.__extends(AccountsApi, _super);
    function AccountsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get account information of all non-admin members of your corporate account. Only the admin account can send a request to this endpoint which returns the accounts of all members
     * @summary List corporate members
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    AccountsApi.prototype.getAccounts = function (options) {
        var _this = this;
        return exports.AccountsApiFp(this.configuration).getAccounts(options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Get corporate member\'s role and faxing quota
     * @summary Get member details
     * @param {AccountsApiGetMemberDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    AccountsApi.prototype.getMemberDetails = function (requestParameters, options) {
        var _this = this;
        return exports.AccountsApiFp(this.configuration).getMemberDetails(requestParameters, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Get information about an account. For members user_id can only be self. For admin it can be either self, or a user_id of any corporate member
     * @summary Get account information
     * @param {AccountsApiGetUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    AccountsApi.prototype.getUser = function (requestParameters, options) {
        var _this = this;
        return exports.AccountsApiFp(this.configuration).getUser(requestParameters, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Update corporate member\'s role and faxing quota
     * @summary Modify member details
     * @param {AccountsApiUpdateMemberDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    AccountsApi.prototype.updateMemberDetails = function (requestParameters, options) {
        var _this = this;
        return exports.AccountsApiFp(this.configuration).updateMemberDetails(requestParameters, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Modify personal information of your own account or your corporate member\'s account. user_id can be either self, or a subordinate\'s user_id
     * @summary Modify account information
     * @param {AccountsApiUpdateUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    AccountsApi.prototype.updateUser = function (requestParameters, options) {
        var _this = this;
        return exports.AccountsApiFp(this.configuration).updateUser(requestParameters, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    return AccountsApi;
}(base_1.BaseAPI));
exports.AccountsApi = AccountsApi;
