/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.0
 * Contact: info@fax.plus
 */
import { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { Account } from '../models';
import { AccountList } from '../models';
import { MemberDetail } from '../models';
import { PayloadAccountModification } from '../models';
/**
 * AccountsApi - axios parameter creator
 * @export
 */
export declare const AccountsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Get account information of all non-admin members of your corporate account. Only the admin account can send a request to this endpoint which returns the accounts of all members
     * @summary List corporate members
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAccounts: (options?: any) => Promise<RequestArgs>;
    /**
     * Get corporate member\'s role and faxing quota
     * @summary Get member details
     * @param {string} memberUserId Member user ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMemberDetails: (memberUserId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Get information about an account. For members user_id can only be self. For admin it can be either self, or a user_id of any corporate member
     * @summary Get account information
     * @param {string} userId User ID to get information about. For your own account use **\&#39;self\&#39;**
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUser: (userId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Update corporate member\'s role and faxing quota
     * @summary Modify member details
     * @param {string} memberUserId Member user ID
     * @param {MemberDetail} [memberDetail] Request object for making changes in member details
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateMemberDetails: (memberUserId: string, memberDetail?: MemberDetail, options?: any) => Promise<RequestArgs>;
    /**
     * Modify personal information of your own account or your corporate member\'s account. user_id can be either self, or a subordinate\'s user_id
     * @summary Modify account information
     * @param {string} userId User ID to get information about. For your own account use **\&#39;self\&#39;**
     * @param {PayloadAccountModification} [payloadAccountModification] Request object for making changes in account
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUser: (userId: string, payloadAccountModification?: PayloadAccountModification, options?: any) => Promise<RequestArgs>;
};
/**
 * AccountsApi - functional programming interface
 * @export
 */
export declare const AccountsApiFp: (configuration?: Configuration) => {
    /**
     * Get account information of all non-admin members of your corporate account. Only the admin account can send a request to this endpoint which returns the accounts of all members
     * @summary List corporate members
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAccounts(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<import("axios").AxiosResponse<any>>>;
    /**
     * Get corporate member\'s role and faxing quota
     * @summary Get member details
     * @param {AccountsApiGetMemberDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMemberDetails(requestParameters: AccountsApiGetMemberDetailsRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<import("axios").AxiosResponse<any>>>;
    /**
     * Get information about an account. For members user_id can only be self. For admin it can be either self, or a user_id of any corporate member
     * @summary Get account information
     * @param {AccountsApiGetUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUser(requestParameters: AccountsApiGetUserRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<import("axios").AxiosResponse<any>>>;
    /**
     * Update corporate member\'s role and faxing quota
     * @summary Modify member details
     * @param {AccountsApiUpdateMemberDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateMemberDetails(requestParameters: AccountsApiUpdateMemberDetailsRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<import("axios").AxiosResponse<any>>>;
    /**
     * Modify personal information of your own account or your corporate member\'s account. user_id can be either self, or a subordinate\'s user_id
     * @summary Modify account information
     * @param {AccountsApiUpdateUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUser(requestParameters: AccountsApiUpdateUserRequest, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<import("axios").AxiosResponse<any>>>;
};
/**
 * AccountsApi - factory interface
 * @export
 */
export declare const AccountsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Get account information of all non-admin members of your corporate account. Only the admin account can send a request to this endpoint which returns the accounts of all members
     * @summary List corporate members
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAccounts(options?: any): AxiosPromise<AccountList>;
    /**
     * Get corporate member\'s role and faxing quota
     * @summary Get member details
     * @param {AccountsApiGetMemberDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getMemberDetails(requestParameters: AccountsApiGetMemberDetailsRequest, options?: any): AxiosPromise<MemberDetail>;
    /**
     * Get information about an account. For members user_id can only be self. For admin it can be either self, or a user_id of any corporate member
     * @summary Get account information
     * @param {AccountsApiGetUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUser(requestParameters: AccountsApiGetUserRequest, options?: any): AxiosPromise<Account>;
    /**
     * Update corporate member\'s role and faxing quota
     * @summary Modify member details
     * @param {AccountsApiUpdateMemberDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateMemberDetails(requestParameters: AccountsApiUpdateMemberDetailsRequest, options?: any): AxiosPromise<void>;
    /**
     * Modify personal information of your own account or your corporate member\'s account. user_id can be either self, or a subordinate\'s user_id
     * @summary Modify account information
     * @param {AccountsApiUpdateUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateUser(requestParameters: AccountsApiUpdateUserRequest, options?: any): AxiosPromise<void>;
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
    readonly memberUserId: string;
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
    readonly userId: string;
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
    readonly memberUserId: string;
    /**
     * Request object for making changes in member details
     * @type {MemberDetail}
     * @memberof AccountsApiUpdateMemberDetails
     */
    readonly memberDetail?: MemberDetail;
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
    readonly userId: string;
    /**
     * Request object for making changes in account
     * @type {PayloadAccountModification}
     * @memberof AccountsApiUpdateUser
     */
    readonly payloadAccountModification?: PayloadAccountModification;
}
/**
 * AccountsApi - object-oriented interface
 * @export
 * @class AccountsApi
 * @extends {BaseAPI}
 */
export declare class AccountsApi extends BaseAPI {
    /**
     * Get account information of all non-admin members of your corporate account. Only the admin account can send a request to this endpoint which returns the accounts of all members
     * @summary List corporate members
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    getAccounts(options?: any): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get corporate member\'s role and faxing quota
     * @summary Get member details
     * @param {AccountsApiGetMemberDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    getMemberDetails(requestParameters: AccountsApiGetMemberDetailsRequest, options?: any): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Get information about an account. For members user_id can only be self. For admin it can be either self, or a user_id of any corporate member
     * @summary Get account information
     * @param {AccountsApiGetUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    getUser(requestParameters: AccountsApiGetUserRequest, options?: any): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Update corporate member\'s role and faxing quota
     * @summary Modify member details
     * @param {AccountsApiUpdateMemberDetailsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    updateMemberDetails(requestParameters: AccountsApiUpdateMemberDetailsRequest, options?: any): Promise<import("axios").AxiosResponse<any>>;
    /**
     * Modify personal information of your own account or your corporate member\'s account. user_id can be either self, or a subordinate\'s user_id
     * @summary Modify account information
     * @param {AccountsApiUpdateUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApi
     */
    updateUser(requestParameters: AccountsApiUpdateUserRequest, options?: any): Promise<import("axios").AxiosResponse<any>>;
}
