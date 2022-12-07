/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.2
 * Contact: info@fax.plus
 */
import { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { Outbox } from '../models';
import { OutboxList } from '../models';
import { PayloadOutbox } from '../models';
import { PayloadOutboxModification } from '../models';
import { SendFaxResponse } from '../models';
/**
 * OutboxApi - axios parameter creator
 * @export
 */
export declare const OutboxApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Delete an outgoing fax that is being scheduled for sending
     * @summary Delete an outgoing fax
     * @param {string} userId self or user id of a corporate member
     * @param {string} outboxFaxId ID of the outgoing fax to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOutboxFax: (userId: string, outboxFaxId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Get a list of faxes currently scheduled for sending
     * @summary List outgoing faxes
     * @param {string} userId self or user id of a corporate member
     * @param {string} outboxFaxId ID of the outgoing fax to get
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOutboxFax: (userId: string, outboxFaxId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Get a list of the faxes in the outbox which were not yet sent
     * @summary List faxes in the outbox
     * @param {string} userId self or user id of a corporate member
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listOutboxFaxes: (userId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Send a fax to one or more destinations. For corporate members without a fax number assigned set the \'from\' parameter to \'no_number\'
     * @summary Send a fax
     * @param {string} userId self or user id of a corporate member
     * @param {PayloadOutbox} [payloadOutbox] Request to send new outbound fax
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    sendFax: (userId: string, payloadOutbox?: PayloadOutbox, options?: any) => Promise<RequestArgs>;
    /**
     * Modify an outgoing fax that is being scheduled for sending
     * @summary Modify an outgoing fax
     * @param {string} userId self or user id of a corporate member
     * @param {string} outboxFaxId ID of the outgoing fax to update
     * @param {PayloadOutboxModification} [payloadOutboxModification] Request object for making changes in an outbox object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOutboxFax: (userId: string, outboxFaxId: string, payloadOutboxModification?: PayloadOutboxModification, options?: any) => Promise<RequestArgs>;
};
/**
 * OutboxApi - functional programming interface
 * @export
 */
export declare const OutboxApiFp: (configuration?: Configuration) => {
    /**
     * Delete an outgoing fax that is being scheduled for sending
     * @summary Delete an outgoing fax
     * @param {OutboxApiDeleteOutboxFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOutboxFax(requestParameters: OutboxApiDeleteOutboxFaxRequest, options?: any): Promise<(<T = unknown, R = import("axios").AxiosResponse<T>>(axios?: AxiosInstance, basePath?: string) => Promise<R>)>;
    /**
     * Get a list of faxes currently scheduled for sending
     * @summary List outgoing faxes
     * @param {OutboxApiGetOutboxFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOutboxFax(requestParameters: OutboxApiGetOutboxFaxRequest, options?: any): Promise<(<T = unknown, R = import("axios").AxiosResponse<T>>(axios?: AxiosInstance, basePath?: string) => Promise<R>)>;
    /**
     * Get a list of the faxes in the outbox which were not yet sent
     * @summary List faxes in the outbox
     * @param {OutboxApiListOutboxFaxesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listOutboxFaxes(requestParameters: OutboxApiListOutboxFaxesRequest, options?: any): Promise<(<T = unknown, R = import("axios").AxiosResponse<T>>(axios?: AxiosInstance, basePath?: string) => Promise<R>)>;
    /**
     * Send a fax to one or more destinations. For corporate members without a fax number assigned set the \'from\' parameter to \'no_number\'
     * @summary Send a fax
     * @param {OutboxApiSendFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    sendFax(requestParameters: OutboxApiSendFaxRequest, options?: any): Promise<(<T = unknown, R = import("axios").AxiosResponse<T>>(axios?: AxiosInstance, basePath?: string) => Promise<R>)>;
    /**
     * Modify an outgoing fax that is being scheduled for sending
     * @summary Modify an outgoing fax
     * @param {OutboxApiUpdateOutboxFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOutboxFax(requestParameters: OutboxApiUpdateOutboxFaxRequest, options?: any): Promise<(<T = unknown, R = import("axios").AxiosResponse<T>>(axios?: AxiosInstance, basePath?: string) => Promise<R>)>;
};
/**
 * OutboxApi - factory interface
 * @export
 */
export declare const OutboxApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Delete an outgoing fax that is being scheduled for sending
     * @summary Delete an outgoing fax
     * @param {OutboxApiDeleteOutboxFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteOutboxFax(requestParameters: OutboxApiDeleteOutboxFaxRequest, options?: any): AxiosPromise<void>;
    /**
     * Get a list of faxes currently scheduled for sending
     * @summary List outgoing faxes
     * @param {OutboxApiGetOutboxFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOutboxFax(requestParameters: OutboxApiGetOutboxFaxRequest, options?: any): AxiosPromise<Outbox>;
    /**
     * Get a list of the faxes in the outbox which were not yet sent
     * @summary List faxes in the outbox
     * @param {OutboxApiListOutboxFaxesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listOutboxFaxes(requestParameters: OutboxApiListOutboxFaxesRequest, options?: any): AxiosPromise<OutboxList>;
    /**
     * Send a fax to one or more destinations. For corporate members without a fax number assigned set the \'from\' parameter to \'no_number\'
     * @summary Send a fax
     * @param {OutboxApiSendFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    sendFax(requestParameters: OutboxApiSendFaxRequest, options?: any): AxiosPromise<SendFaxResponse>;
    /**
     * Modify an outgoing fax that is being scheduled for sending
     * @summary Modify an outgoing fax
     * @param {OutboxApiUpdateOutboxFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateOutboxFax(requestParameters: OutboxApiUpdateOutboxFaxRequest, options?: any): AxiosPromise<void>;
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
    readonly userId: string;
    /**
     * ID of the outgoing fax to delete
     * @type {string}
     * @memberof OutboxApiDeleteOutboxFax
     */
    readonly outboxFaxId: string;
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
    readonly userId: string;
    /**
     * ID of the outgoing fax to get
     * @type {string}
     * @memberof OutboxApiGetOutboxFax
     */
    readonly outboxFaxId: string;
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
    readonly userId: string;
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
    readonly userId: string;
    /**
     * Request to send new outbound fax
     * @type {PayloadOutbox}
     * @memberof OutboxApiSendFax
     */
    readonly payloadOutbox?: PayloadOutbox;
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
    readonly userId: string;
    /**
     * ID of the outgoing fax to update
     * @type {string}
     * @memberof OutboxApiUpdateOutboxFax
     */
    readonly outboxFaxId: string;
    /**
     * Request object for making changes in an outbox object
     * @type {PayloadOutboxModification}
     * @memberof OutboxApiUpdateOutboxFax
     */
    readonly payloadOutboxModification?: PayloadOutboxModification;
}
/**
 * OutboxApi - object-oriented interface
 * @export
 * @class OutboxApi
 * @extends {BaseAPI}
 */
export declare class OutboxApi extends BaseAPI {
    /**
     * Delete an outgoing fax that is being scheduled for sending
     * @summary Delete an outgoing fax
     * @param {OutboxApiDeleteOutboxFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OutboxApi
     */
    deleteOutboxFax(requestParameters: OutboxApiDeleteOutboxFaxRequest, options?: any): Promise<import("axios").AxiosResponse<unknown>>;
    /**
     * Get a list of faxes currently scheduled for sending
     * @summary List outgoing faxes
     * @param {OutboxApiGetOutboxFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OutboxApi
     */
    getOutboxFax(requestParameters: OutboxApiGetOutboxFaxRequest, options?: any): Promise<import("axios").AxiosResponse<unknown>>;
    /**
     * Get a list of the faxes in the outbox which were not yet sent
     * @summary List faxes in the outbox
     * @param {OutboxApiListOutboxFaxesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OutboxApi
     */
    listOutboxFaxes(requestParameters: OutboxApiListOutboxFaxesRequest, options?: any): Promise<import("axios").AxiosResponse<unknown>>;
    /**
     * Send a fax to one or more destinations. For corporate members without a fax number assigned set the \'from\' parameter to \'no_number\'
     * @summary Send a fax
     * @param {OutboxApiSendFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OutboxApi
     */
    sendFax(requestParameters: OutboxApiSendFaxRequest, options?: any): Promise<import("axios").AxiosResponse<unknown>>;
    /**
     * Modify an outgoing fax that is being scheduled for sending
     * @summary Modify an outgoing fax
     * @param {OutboxApiUpdateOutboxFaxRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OutboxApi
     */
    updateOutboxFax(requestParameters: OutboxApiUpdateOutboxFaxRequest, options?: any): Promise<import("axios").AxiosResponse<unknown>>;
}
