/* tslint:disable */
/* eslint-disable */
/**
 * Fax.Plus REST API
 *
 * OpenAPI spec version: 3.0.3
 * Contact: info@fax.plus
 */

import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Account } from '../models';
// @ts-ignore
import { AccountList } from '../models';
// @ts-ignore
import { MemberDetail } from '../models';
// @ts-ignore
import { PayloadAccountModification } from '../models';
import FormData = require("form-data");
/**
 * AccountsApi - axios parameter creator
 * @export
 */
export const AccountsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get account information of all non-admin members of your corporate account. Only the admin account can send a request to this endpoint which returns the accounts of all members
         * @summary List corporate members
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAccounts: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/accounts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["all"], configuration)

            // authentication PAT required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "PAT", ["fax:all:read"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get corporate member\'s role and faxing quota
         * @summary Get member details
         * @param {string} memberUserId Member user ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMemberDetails: async (memberUserId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'memberUserId' is not null or undefined
            assertParamExists('getMemberDetails', 'memberUserId', memberUserId)
            const localVarPath = `/accounts/self/member-details/{member_user_id}`
                .replace(`{${"member_user_id"}}`, encodeURIComponent(String(memberUserId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["all"], configuration)

            // authentication PAT required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "PAT", ["fax:all:read"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get information about an account. For members user_id can only be self. For admin it can be either self, or a user_id of any corporate member
         * @summary Get account information
         * @param {string} userId User ID to get information about. For your own account use **\&#39;self\&#39;**
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser: async (userId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getUser', 'userId', userId)
            const localVarPath = `/accounts/{user_id}`
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["all"], configuration)

            // authentication PAT required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "PAT", ["fax:all:read"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update corporate member\'s role and faxing quota
         * @summary Modify member details
         * @param {string} memberUserId Member user ID
         * @param {MemberDetail} [memberDetail] Request object for making changes in member details
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateMemberDetails: async (memberUserId: string, memberDetail?: MemberDetail, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'memberUserId' is not null or undefined
            assertParamExists('updateMemberDetails', 'memberUserId', memberUserId)
            const localVarPath = `/accounts/self/member-details/{member_user_id}`
                .replace(`{${"member_user_id"}}`, encodeURIComponent(String(memberUserId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["all"], configuration)

            // authentication PAT required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "PAT", ["fax:all:edit"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(memberDetail, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Modify personal information of your own account or your corporate member\'s account. user_id can be either self, or a subordinate\'s user_id
         * @summary Modify account information
         * @param {string} userId User ID to get information about. For your own account use **\&#39;self\&#39;**
         * @param {PayloadAccountModification} [payloadAccountModification] Request object for making changes in account
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateUser: async (userId: string, payloadAccountModification?: PayloadAccountModification, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('updateUser', 'userId', userId)
            const localVarPath = `/accounts/{user_id}`
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["all"], configuration)

            // authentication PAT required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "PAT", ["fax:all:edit"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(payloadAccountModification, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AccountsApi - functional programming interface
 * @export
 */
export const AccountsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AccountsApiAxiosParamCreator(configuration)
    return {
        /**
         * Get account information of all non-admin members of your corporate account. Only the admin account can send a request to this endpoint which returns the accounts of all members
         * @summary List corporate members
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAccounts(options?: any) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAccounts(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        }
,
        /**
         * Get corporate member\'s role and faxing quota
         * @summary Get member details
         * @param {AccountsApiGetMemberDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMemberDetails(requestParameters: AccountsApiGetMemberDetailsRequest, options?: any) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMemberDetails(requestParameters.memberUserId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        }
,
        /**
         * Get information about an account. For members user_id can only be self. For admin it can be either self, or a user_id of any corporate member
         * @summary Get account information
         * @param {AccountsApiGetUserRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUser(requestParameters: AccountsApiGetUserRequest, options?: any) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUser(requestParameters.userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        }
,
        /**
         * Update corporate member\'s role and faxing quota
         * @summary Modify member details
         * @param {AccountsApiUpdateMemberDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateMemberDetails(requestParameters: AccountsApiUpdateMemberDetailsRequest, options?: any) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateMemberDetails(requestParameters.memberUserId, requestParameters.memberDetail, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        }
,
        /**
         * Modify personal information of your own account or your corporate member\'s account. user_id can be either self, or a subordinate\'s user_id
         * @summary Modify account information
         * @param {AccountsApiUpdateUserRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateUser(requestParameters: AccountsApiUpdateUserRequest, options?: any) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateUser(requestParameters.userId, requestParameters.payloadAccountModification, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        }
,
    }
};

/**
 * AccountsApi - factory interface
 * @export
 */
export const AccountsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AccountsApiFp(configuration)
    return {
        /**
         * Get account information of all non-admin members of your corporate account. Only the admin account can send a request to this endpoint which returns the accounts of all members
         * @summary List corporate members
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */

        getAccounts(options?: any): AxiosPromise<AccountList> {
            return localVarFp.getAccounts(options).then((request) => request(axios, basePath));
        },
        /**
         * Get corporate member\'s role and faxing quota
         * @summary Get member details
         * @param {AccountsApiGetMemberDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */

        getMemberDetails(requestParameters: AccountsApiGetMemberDetailsRequest, options?: any): AxiosPromise<MemberDetail> {
            return localVarFp.getMemberDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get information about an account. For members user_id can only be self. For admin it can be either self, or a user_id of any corporate member
         * @summary Get account information
         * @param {AccountsApiGetUserRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */

        getUser(requestParameters: AccountsApiGetUserRequest, options?: any): AxiosPromise<Account> {
            return localVarFp.getUser(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Update corporate member\'s role and faxing quota
         * @summary Modify member details
         * @param {AccountsApiUpdateMemberDetailsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */

        updateMemberDetails(requestParameters: AccountsApiUpdateMemberDetailsRequest, options?: any): AxiosPromise<void> {
            return localVarFp.updateMemberDetails(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Modify personal information of your own account or your corporate member\'s account. user_id can be either self, or a subordinate\'s user_id
         * @summary Modify account information
         * @param {AccountsApiUpdateUserRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */

        updateUser(requestParameters: AccountsApiUpdateUserRequest, options?: any): AxiosPromise<void> {
            return localVarFp.updateUser(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getMemberDetails operation in AccountsApi.
 * @export
 * @interface AccountsApiGetMemberDetailsRequest
 */
export interface AccountsApiGetMemberDetailsRequest {
    /**
     * Member user ID
     * @type {string}
     * @memberof AccountsApiGetMemberDetails
     */
    readonly memberUserId: string
}

/**
 * Request parameters for getUser operation in AccountsApi.
 * @export
 * @interface AccountsApiGetUserRequest
 */
export interface AccountsApiGetUserRequest {
    /**
     * User ID to get information about. For your own account use **\&#39;self\&#39;**
     * @type {string}
     * @memberof AccountsApiGetUser
     */
    readonly userId: string
}

/**
 * Request parameters for updateMemberDetails operation in AccountsApi.
 * @export
 * @interface AccountsApiUpdateMemberDetailsRequest
 */
export interface AccountsApiUpdateMemberDetailsRequest {
    /**
     * Member user ID
     * @type {string}
     * @memberof AccountsApiUpdateMemberDetails
     */
    readonly memberUserId: string

    /**
     * Request object for making changes in member details
     * @type {MemberDetail}
     * @memberof AccountsApiUpdateMemberDetails
     */
    readonly memberDetail?: MemberDetail
}

/**
 * Request parameters for updateUser operation in AccountsApi.
 * @export
 * @interface AccountsApiUpdateUserRequest
 */
export interface AccountsApiUpdateUserRequest {
    /**
     * User ID to get information about. For your own account use **\&#39;self\&#39;**
     * @type {string}
     * @memberof AccountsApiUpdateUser
     */
    readonly userId: string

    /**
     * Request object for making changes in account
     * @type {PayloadAccountModification}
     * @memberof AccountsApiUpdateUser
     */
    readonly payloadAccountModification?: PayloadAccountModification
}

/**
 * AccountsApi - object-oriented interface
 * @export
 * @class AccountsApi
 * @extends {BaseAPI}
 */
export class AccountsApi extends BaseAPI {
    /**
     * Get account information of all non-admin members of your corporate account. Only the admin account can send a request to this endpoint which returns the accounts of all members
     * @summary List corporate members
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    public getAccounts(options?: any) {
        return AccountsApiFp(this.configuration).getAccounts(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get corporate member\'s role and faxing quota
     * @summary Get member details
     * @param {AccountsApiGetMemberDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    public getMemberDetails(requestParameters: AccountsApiGetMemberDetailsRequest, options?: any) {
        return AccountsApiFp(this.configuration).getMemberDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get information about an account. For members user_id can only be self. For admin it can be either self, or a user_id of any corporate member
     * @summary Get account information
     * @param {AccountsApiGetUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    public getUser(requestParameters: AccountsApiGetUserRequest, options?: any) {
        return AccountsApiFp(this.configuration).getUser(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update corporate member\'s role and faxing quota
     * @summary Modify member details
     * @param {AccountsApiUpdateMemberDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    public updateMemberDetails(requestParameters: AccountsApiUpdateMemberDetailsRequest, options?: any) {
        return AccountsApiFp(this.configuration).updateMemberDetails(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Modify personal information of your own account or your corporate member\'s account. user_id can be either self, or a subordinate\'s user_id
     * @summary Modify account information
     * @param {AccountsApiUpdateUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    public updateUser(requestParameters: AccountsApiUpdateUserRequest, options?: any) {
        return AccountsApiFp(this.configuration).updateUser(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
