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
exports.FilesApi = exports.FilesApiFactory = exports.FilesApiFp = exports.FilesApiAxiosParamCreator = void 0;
var tslib_1 = require("tslib");
var axios_1 = require("axios");
// Some imports not used depending on template conditions
// @ts-ignore
var common_1 = require("../common");
// @ts-ignore
var base_1 = require("../base");
var FormData = require("form-data");
/**
 * FilesApi - axios parameter creator
 * @export
 */
exports.FilesApiAxiosParamCreator = function (configuration) {
    var _this = this;
    return {
        /**
         * Retrieve fax confirmation report
         * @summary Get fax confirmation report
         * @param {string} userId self or user id of a corporate member
         * @param {string} faxId ID of the fax which you want to download
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFaxReport: function (userId, faxId, options) {
            if (options === void 0) { options = {}; }
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'userId' is not null or undefined
                            common_1.assertParamExists('getFaxReport', 'userId', userId);
                            // verify required parameter 'faxId' is not null or undefined
                            common_1.assertParamExists('getFaxReport', 'faxId', faxId);
                            localVarPath = "/accounts/{user_id}/report/{fax_id}"
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
         * Download sent or received fax file
         * @summary Download fax file
         * @param {string} userId self or user id of a corporate member
         * @param {string} faxId ID of the fax which you want to download
         * @param {FileType} [format] This parameter overrides the Accept header
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFile: function (userId, faxId, format, options) {
            if (options === void 0) { options = {}; }
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, headersFromBaseOptions;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'userId' is not null or undefined
                            common_1.assertParamExists('getFile', 'userId', userId);
                            // verify required parameter 'faxId' is not null or undefined
                            common_1.assertParamExists('getFile', 'faxId', faxId);
                            localVarPath = "/accounts/{user_id}/files/{fax_id}"
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
                            if (format !== undefined) {
                                localVarQueryParameter['format'] = format;
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
         * Before sending a fax you need to upload your files using this API. In order to upload your fax file, you have to send a `multipart/form-data` request with your file. Set the `name` to `fax_file`, `filename` to your file\'s name with extension, and the Content-Type to the file\'s MIME type. In most cases, the `filename` directive will be automatically added by your library of choice. If the upload was successful you would receive a `file_path` which you can use to send your fax.
         * @summary Upload a file
         * @param {string} userId self or user id of a corporate member
         * @param {File} faxFile Path to file to upload
         * @param {FileType} [format] Can be \&#39;pdf\&#39; or \&#39;tiff\&#39;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadFile: function (userId, faxFile, format, options) {
            if (options === void 0) { options = {}; }
            return tslib_1.__awaiter(_this, void 0, void 0, function () {
                var localVarPath, localVarUrlObj, baseOptions, localVarRequestOptions, localVarHeaderParameter, localVarQueryParameter, localVarFormParams, headersFromBaseOptions;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // verify required parameter 'userId' is not null or undefined
                            common_1.assertParamExists('uploadFile', 'userId', userId);
                            // verify required parameter 'faxFile' is not null or undefined
                            common_1.assertParamExists('uploadFile', 'faxFile', faxFile);
                            localVarPath = "/accounts/{user_id}/files"
                                .replace("{" + "user_id" + "}", encodeURIComponent(String(userId)));
                            localVarUrlObj = new URL(localVarPath, common_1.DUMMY_BASE_URL);
                            if (configuration) {
                                baseOptions = configuration.baseOptions;
                            }
                            localVarRequestOptions = tslib_1.__assign(tslib_1.__assign({ method: 'POST' }, baseOptions), options);
                            localVarHeaderParameter = {};
                            localVarQueryParameter = {};
                            localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();
                            // authentication fax_oauth required
                            // oauth required
                            return [4 /*yield*/, common_1.setOAuthToObject(localVarHeaderParameter, "fax_oauth", ["all"], configuration)];
                        case 1:
                            // authentication fax_oauth required
                            // oauth required
                            _a.sent();
                            if (format !== undefined) {
                                localVarQueryParameter['format'] = format;
                            }
                            if (faxFile !== undefined) {
                                localVarFormParams.append('fax_file', faxFile);
                            }
                            localVarHeaderParameter['Content-Type'] = "multipart/form-data; boundary=" + localVarFormParams._boundary;
                            common_1.setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
                            headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
                            localVarRequestOptions.headers = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
                            localVarRequestOptions.data = localVarFormParams;
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
 * FilesApi - functional programming interface
 * @export
 */
exports.FilesApiFp = function (configuration) {
    var localVarAxiosParamCreator = exports.FilesApiAxiosParamCreator(configuration);
    return {
        /**
         * Retrieve fax confirmation report
         * @summary Get fax confirmation report
         * @param {FilesApiGetFaxReportRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFaxReport: function (requestParameters, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.getFaxReport(requestParameters.userId, requestParameters.faxId, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * Download sent or received fax file
         * @summary Download fax file
         * @param {FilesApiGetFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFile: function (requestParameters, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.getFile(requestParameters.userId, requestParameters.faxId, requestParameters.format, options)];
                        case 1:
                            localVarAxiosArgs = _a.sent();
                            return [2 /*return*/, common_1.createRequestFunction(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)];
                    }
                });
            });
        },
        /**
         * Before sending a fax you need to upload your files using this API. In order to upload your fax file, you have to send a `multipart/form-data` request with your file. Set the `name` to `fax_file`, `filename` to your file\'s name with extension, and the Content-Type to the file\'s MIME type. In most cases, the `filename` directive will be automatically added by your library of choice. If the upload was successful you would receive a `file_path` which you can use to send your fax.
         * @summary Upload a file
         * @param {FilesApiUploadFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadFile: function (requestParameters, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function () {
                var localVarAxiosArgs;
                return tslib_1.__generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, localVarAxiosParamCreator.uploadFile(requestParameters.userId, requestParameters.faxFile, requestParameters.format, options)];
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
 * FilesApi - factory interface
 * @export
 */
exports.FilesApiFactory = function (configuration, basePath, axios) {
    var localVarFp = exports.FilesApiFp(configuration);
    return {
        /**
         * Retrieve fax confirmation report
         * @summary Get fax confirmation report
         * @param {FilesApiGetFaxReportRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFaxReport: function (requestParameters, options) {
            return localVarFp.getFaxReport(requestParameters, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Download sent or received fax file
         * @summary Download fax file
         * @param {FilesApiGetFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFile: function (requestParameters, options) {
            return localVarFp.getFile(requestParameters, options).then(function (request) { return request(axios, basePath); });
        },
        /**
         * Before sending a fax you need to upload your files using this API. In order to upload your fax file, you have to send a `multipart/form-data` request with your file. Set the `name` to `fax_file`, `filename` to your file\'s name with extension, and the Content-Type to the file\'s MIME type. In most cases, the `filename` directive will be automatically added by your library of choice. If the upload was successful you would receive a `file_path` which you can use to send your fax.
         * @summary Upload a file
         * @param {FilesApiUploadFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadFile: function (requestParameters, options) {
            return localVarFp.uploadFile(requestParameters, options).then(function (request) { return request(axios, basePath); });
        },
    };
};
/**
 * FilesApi - object-oriented interface
 * @export
 * @class FilesApi
 * @extends {BaseAPI}
 */
var FilesApi = /** @class */ (function (_super) {
    tslib_1.__extends(FilesApi, _super);
    function FilesApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Retrieve fax confirmation report
     * @summary Get fax confirmation report
     * @param {FilesApiGetFaxReportRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    FilesApi.prototype.getFaxReport = function (requestParameters, options) {
        var _this = this;
        return exports.FilesApiFp(this.configuration).getFaxReport(requestParameters, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Download sent or received fax file
     * @summary Download fax file
     * @param {FilesApiGetFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    FilesApi.prototype.getFile = function (requestParameters, options) {
        var _this = this;
        return exports.FilesApiFp(this.configuration).getFile(requestParameters, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    /**
     * Before sending a fax you need to upload your files using this API. In order to upload your fax file, you have to send a `multipart/form-data` request with your file. Set the `name` to `fax_file`, `filename` to your file\'s name with extension, and the Content-Type to the file\'s MIME type. In most cases, the `filename` directive will be automatically added by your library of choice. If the upload was successful you would receive a `file_path` which you can use to send your fax.
     * @summary Upload a file
     * @param {FilesApiUploadFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    FilesApi.prototype.uploadFile = function (requestParameters, options) {
        var _this = this;
        return exports.FilesApiFp(this.configuration).uploadFile(requestParameters, options).then(function (request) { return request(_this.axios, _this.basePath); });
    };
    return FilesApi;
}(base_1.BaseAPI));
exports.FilesApi = FilesApi;
