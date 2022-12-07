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
exports.createRequestFunction = exports.toPathString = exports.serializeDataIfNeeded = exports.setSearchParams = exports.setOAuthToObject = exports.setBearerAuthToObject = exports.setBasicAuthToObject = exports.setApiKeyToObject = exports.assertParamExists = exports.DUMMY_BASE_URL = void 0;
var tslib_1 = require("tslib");
var base_1 = require("./base");
/**
 *
 * @export
 */
exports.DUMMY_BASE_URL = 'https://example.com';
/**
 *
 * @throws {RequiredError}
 * @export
 */
exports.assertParamExists = function (functionName, paramName, paramValue) {
    if (paramValue === null || paramValue === undefined) {
        throw new base_1.RequiredError(paramName, "Required parameter " + paramName + " was null or undefined when calling " + functionName + ".");
    }
};
/**
 *
 * @export
 */
exports.setApiKeyToObject = function (object, keyParamName, configuration) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var localVarApiKeyValue, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(configuration && configuration.apiKey)) return [3 /*break*/, 5];
                    if (!(typeof configuration.apiKey === 'function')) return [3 /*break*/, 2];
                    return [4 /*yield*/, configuration.apiKey(keyParamName)];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, configuration.apiKey];
                case 3:
                    _a = _b.sent();
                    _b.label = 4;
                case 4:
                    localVarApiKeyValue = _a;
                    object[keyParamName] = localVarApiKeyValue;
                    _b.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    });
};
/**
 *
 * @export
 */
exports.setBasicAuthToObject = function (object, configuration) {
    if (configuration && (configuration.username || configuration.password)) {
        object["auth"] = { username: configuration.username, password: configuration.password };
    }
};
/**
 *
 * @export
 */
exports.setBearerAuthToObject = function (object, configuration) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var accessToken, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(configuration && configuration.accessToken)) return [3 /*break*/, 5];
                    if (!(typeof configuration.accessToken === 'function')) return [3 /*break*/, 2];
                    return [4 /*yield*/, configuration.accessToken()];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, configuration.accessToken];
                case 3:
                    _a = _b.sent();
                    _b.label = 4;
                case 4:
                    accessToken = _a;
                    object["Authorization"] = "Bearer " + accessToken;
                    _b.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    });
};
/**
 *
 * @export
 */
exports.setOAuthToObject = function (object, name, scopes, configuration) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var localVarAccessTokenValue, _a;
        return tslib_1.__generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(configuration && configuration.accessToken)) return [3 /*break*/, 5];
                    if (!(typeof configuration.accessToken === 'function')) return [3 /*break*/, 2];
                    return [4 /*yield*/, configuration.accessToken(name, scopes)];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, configuration.accessToken];
                case 3:
                    _a = _b.sent();
                    _b.label = 4;
                case 4:
                    localVarAccessTokenValue = _a;
                    object["Authorization"] = "Bearer " + localVarAccessTokenValue;
                    _b.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    });
};
function setFlattenedQueryParams(urlSearchParams, parameter, key) {
    if (key === void 0) { key = ""; }
    if (typeof parameter === "object") {
        if (Array.isArray(parameter)) {
            parameter.forEach(function (item) { return setFlattenedQueryParams(urlSearchParams, item, key); });
        }
        else {
            Object.keys(parameter).forEach(function (currentKey) {
                return setFlattenedQueryParams(urlSearchParams, parameter[currentKey], "" + key + (key !== '' ? '.' : '') + currentKey);
            });
        }
    }
    else {
        if (urlSearchParams.has(key)) {
            urlSearchParams.append(key, parameter);
        }
        else {
            urlSearchParams.set(key, parameter);
        }
    }
}
/**
 *
 * @export
 */
exports.setSearchParams = function (url) {
    var objects = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        objects[_i - 1] = arguments[_i];
    }
    var searchParams = new URLSearchParams(url.search);
    setFlattenedQueryParams(searchParams, objects);
    url.search = searchParams.toString();
};
/**
 *
 * @export
 */
exports.serializeDataIfNeeded = function (value, requestOptions, configuration) {
    var nonString = typeof value !== 'string';
    var needsSerialization = nonString && configuration && configuration.isJsonMime
        ? configuration.isJsonMime(requestOptions.headers['Content-Type'])
        : nonString;
    return needsSerialization
        ? JSON.stringify(value !== undefined ? value : {})
        : (value || "");
};
/**
 *
 * @export
 */
exports.toPathString = function (url) {
    return url.pathname + url.search + url.hash;
};
/**
 *
 * @export
 */
exports.createRequestFunction = function (axiosArgs, globalAxios, BASE_PATH, configuration) {
    return function (axios, basePath) {
        if (axios === void 0) { axios = globalAxios; }
        if (basePath === void 0) { basePath = BASE_PATH; }
        var axiosRequestArgs = tslib_1.__assign(tslib_1.__assign({}, axiosArgs.options), { url: ((configuration === null || configuration === void 0 ? void 0 : configuration.basePath) || basePath) + axiosArgs.url });
        return axios.request(axiosRequestArgs);
    };
};
