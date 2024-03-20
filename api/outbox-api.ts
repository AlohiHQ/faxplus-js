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
import { Outbox } from '../models';
// @ts-ignore
import { OutboxList } from '../models';
// @ts-ignore
import { PayloadOutbox } from '../models';
// @ts-ignore
import { PayloadOutboxModification } from '../models';
// @ts-ignore
import { SendFaxResponse } from '../models';
import FormData = require("form-data");
/**
 * OutboxApi - axios parameter creator
 * @export
 */
export const OutboxApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete an outgoing fax that is being scheduled for sending
         * @summary Delete an outgoing fax
         * @param {string} userId self or user id of a corporate member
         * @param {string} outboxFaxId ID of the outgoing fax to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteOutboxFax: async (userId: string, outboxFaxId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('deleteOutboxFax', 'userId', userId)
            // verify required parameter 'outboxFaxId' is not null or undefined
            assertParamExists('deleteOutboxFax', 'outboxFaxId', outboxFaxId)
            const localVarPath = `/accounts/{user_id}/outbox/{outbox_fax_id}`
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)))
                .replace(`{${"outbox_fax_id"}}`, encodeURIComponent(String(outboxFaxId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["all"], configuration)

            // authentication PAT required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "PAT", ["fax:all:edit"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a list of faxes currently scheduled for sending
         * @summary List outgoing faxes
         * @param {string} userId self or user id of a corporate member
         * @param {string} outboxFaxId ID of the outgoing fax to get
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOutboxFax: async (userId: string, outboxFaxId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getOutboxFax', 'userId', userId)
            // verify required parameter 'outboxFaxId' is not null or undefined
            assertParamExists('getOutboxFax', 'outboxFaxId', outboxFaxId)
            const localVarPath = `/accounts/{user_id}/outbox/{outbox_fax_id}`
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)))
                .replace(`{${"outbox_fax_id"}}`, encodeURIComponent(String(outboxFaxId)));
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
         * Get a list of the faxes in the outbox which were not yet sent
         * @summary List faxes in the outbox
         * @param {string} userId self or user id of a corporate member
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listOutboxFaxes: async (userId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('listOutboxFaxes', 'userId', userId)
            const localVarPath = `/accounts/{user_id}/outbox`
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
         * Send a fax to one or more destinations. For corporate members without a fax number assigned set the \'from\' parameter to \'no_number\'
         * @summary Send a fax
         * @param {string} userId self or user id of a corporate member
         * @param {PayloadOutbox} [payloadOutbox] Request to send new outbound fax
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendFax: async (userId: string, payloadOutbox?: PayloadOutbox, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('sendFax', 'userId', userId)
            const localVarPath = `/accounts/{user_id}/outbox`
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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
            localVarRequestOptions.data = serializeDataIfNeeded(payloadOutbox, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
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
        updateOutboxFax: async (userId: string, outboxFaxId: string, payloadOutboxModification?: PayloadOutboxModification, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('updateOutboxFax', 'userId', userId)
            // verify required parameter 'outboxFaxId' is not null or undefined
            assertParamExists('updateOutboxFax', 'outboxFaxId', outboxFaxId)
            const localVarPath = `/accounts/{user_id}/outbox/{outbox_fax_id}`
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)))
                .replace(`{${"outbox_fax_id"}}`, encodeURIComponent(String(outboxFaxId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(payloadOutboxModification, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * OutboxApi - functional programming interface
 * @export
 */
export const OutboxApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = OutboxApiAxiosParamCreator(configuration)
    return {
        /**
         * Delete an outgoing fax that is being scheduled for sending
         * @summary Delete an outgoing fax
         * @param {OutboxApiDeleteOutboxFaxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteOutboxFax(requestParameters: OutboxApiDeleteOutboxFaxRequest, options?: any) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteOutboxFax(requestParameters.userId, requestParameters.outboxFaxId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        }
,
        /**
         * Get a list of faxes currently scheduled for sending
         * @summary List outgoing faxes
         * @param {OutboxApiGetOutboxFaxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOutboxFax(requestParameters: OutboxApiGetOutboxFaxRequest, options?: any) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOutboxFax(requestParameters.userId, requestParameters.outboxFaxId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        }
,
        /**
         * Get a list of the faxes in the outbox which were not yet sent
         * @summary List faxes in the outbox
         * @param {OutboxApiListOutboxFaxesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listOutboxFaxes(requestParameters: OutboxApiListOutboxFaxesRequest, options?: any) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listOutboxFaxes(requestParameters.userId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        }
,
        /**
         * Send a fax to one or more destinations. For corporate members without a fax number assigned set the \'from\' parameter to \'no_number\'
         * @summary Send a fax
         * @param {OutboxApiSendFaxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sendFax(requestParameters: OutboxApiSendFaxRequest, options?: any) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendFax(requestParameters.userId, requestParameters.payloadOutbox, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        }
,
        /**
         * Modify an outgoing fax that is being scheduled for sending
         * @summary Modify an outgoing fax
         * @param {OutboxApiUpdateOutboxFaxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateOutboxFax(requestParameters: OutboxApiUpdateOutboxFaxRequest, options?: any) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateOutboxFax(requestParameters.userId, requestParameters.outboxFaxId, requestParameters.payloadOutboxModification, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        }
,
    }
};

/**
 * OutboxApi - factory interface
 * @export
 */
export const OutboxApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = OutboxApiFp(configuration)
    return {
        /**
         * Delete an outgoing fax that is being scheduled for sending
         * @summary Delete an outgoing fax
         * @param {OutboxApiDeleteOutboxFaxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */

        deleteOutboxFax(requestParameters: OutboxApiDeleteOutboxFaxRequest, options?: any): AxiosPromise<void> {
            return localVarFp.deleteOutboxFax(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of faxes currently scheduled for sending
         * @summary List outgoing faxes
         * @param {OutboxApiGetOutboxFaxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */

        getOutboxFax(requestParameters: OutboxApiGetOutboxFaxRequest, options?: any): AxiosPromise<Outbox> {
            return localVarFp.getOutboxFax(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of the faxes in the outbox which were not yet sent
         * @summary List faxes in the outbox
         * @param {OutboxApiListOutboxFaxesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */

        listOutboxFaxes(requestParameters: OutboxApiListOutboxFaxesRequest, options?: any): AxiosPromise<OutboxList> {
            return localVarFp.listOutboxFaxes(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Send a fax to one or more destinations. For corporate members without a fax number assigned set the \'from\' parameter to \'no_number\'
         * @summary Send a fax
         * @param {OutboxApiSendFaxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */

        sendFax(requestParameters: OutboxApiSendFaxRequest, options?: any): AxiosPromise<SendFaxResponse> {
            return localVarFp.sendFax(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Modify an outgoing fax that is being scheduled for sending
         * @summary Modify an outgoing fax
         * @param {OutboxApiUpdateOutboxFaxRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */

        updateOutboxFax(requestParameters: OutboxApiUpdateOutboxFaxRequest, options?: any): AxiosPromise<void> {
            return localVarFp.updateOutboxFax(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for deleteOutboxFax operation in OutboxApi.
 * @export
 * @interface OutboxApiDeleteOutboxFaxRequest
 */
export interface OutboxApiDeleteOutboxFaxRequest {
    /**
     * self or user id of a corporate member
     * @type {string}
     * @memberof OutboxApiDeleteOutboxFax
     */
    readonly userId: string

    /**
     * ID of the outgoing fax to delete
     * @type {string}
     * @memberof OutboxApiDeleteOutboxFax
     */
    readonly outboxFaxId: string
}

/**
 * Request parameters for getOutboxFax operation in OutboxApi.
 * @export
 * @interface OutboxApiGetOutboxFaxRequest
 */
export interface OutboxApiGetOutboxFaxRequest {
    /**
     * self or user id of a corporate member
     * @type {string}
     * @memberof OutboxApiGetOutboxFax
     */
    readonly userId: string

    /**
     * ID of the outgoing fax to get
     * @type {string}
     * @memberof OutboxApiGetOutboxFax
     */
    readonly outboxFaxId: string
}

/**
 * Request parameters for listOutboxFaxes operation in OutboxApi.
 * @export
 * @interface OutboxApiListOutboxFaxesRequest
 */
export interface OutboxApiListOutboxFaxesRequest {
    /**
     * self or user id of a corporate member
     * @type {string}
     * @memberof OutboxApiListOutboxFaxes
     */
    readonly userId: string
}

/**
 * Request parameters for sendFax operation in OutboxApi.
 * @export
 * @interface OutboxApiSendFaxRequest
 */
export interface OutboxApiSendFaxRequest {
    /**
     * self or user id of a corporate member
     * @type {string}
     * @memberof OutboxApiSendFax
     */
    readonly userId: string

    /**
     * Request to send new outbound fax
     * @type {PayloadOutbox}
     * @memberof OutboxApiSendFax
     */
    readonly payloadOutbox?: PayloadOutbox
}

/**
 * Request parameters for updateOutboxFax operation in OutboxApi.
 * @export
 * @interface OutboxApiUpdateOutboxFaxRequest
 */
export interface OutboxApiUpdateOutboxFaxRequest {
    /**
     * self or user id of a corporate member
     * @type {string}
     * @memberof OutboxApiUpdateOutboxFax
     */
    readonly userId: string

    /**
     * ID of the outgoing fax to update
     * @type {string}
     * @memberof OutboxApiUpdateOutboxFax
     */
    readonly outboxFaxId: string

    /**
     * Request object for making changes in an outbox object
     * @type {PayloadOutboxModification}
     * @memberof OutboxApiUpdateOutboxFax
     */
    readonly payloadOutboxModification?: PayloadOutboxModification
}

/**
 * OutboxApi - object-oriented interface
 * @export
 * @class OutboxApi
 * @extends {BaseAPI}
 */
export class OutboxApi extends BaseAPI {
    /**
     * Delete an outgoing fax that is being scheduled for sending
     * @summary Delete an outgoing fax
     * @param {OutboxApiDeleteOutboxFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OutboxApi
     */
    public deleteOutboxFax(requestParameters: OutboxApiDeleteOutboxFaxRequest, options?: any) {
        return OutboxApiFp(this.configuration).deleteOutboxFax(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of faxes currently scheduled for sending
     * @summary List outgoing faxes
     * @param {OutboxApiGetOutboxFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OutboxApi
     */
    public getOutboxFax(requestParameters: OutboxApiGetOutboxFaxRequest, options?: any) {
        return OutboxApiFp(this.configuration).getOutboxFax(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of the faxes in the outbox which were not yet sent
     * @summary List faxes in the outbox
     * @param {OutboxApiListOutboxFaxesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OutboxApi
     */
    public listOutboxFaxes(requestParameters: OutboxApiListOutboxFaxesRequest, options?: any) {
        return OutboxApiFp(this.configuration).listOutboxFaxes(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Send a fax to one or more destinations. For corporate members without a fax number assigned set the \'from\' parameter to \'no_number\'
     * @summary Send a fax
     * @param {OutboxApiSendFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OutboxApi
     */
    public sendFax(requestParameters: OutboxApiSendFaxRequest, options?: any) {
        return OutboxApiFp(this.configuration).sendFax(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Modify an outgoing fax that is being scheduled for sending
     * @summary Modify an outgoing fax
     * @param {OutboxApiUpdateOutboxFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OutboxApi
     */
    public updateOutboxFax(requestParameters: OutboxApiUpdateOutboxFaxRequest, options?: any) {
        return OutboxApiFp(this.configuration).updateOutboxFax(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
