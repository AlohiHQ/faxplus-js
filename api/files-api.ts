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
import { FilePath } from '../models';
// @ts-ignore
import { FileType } from '../models';
import FormData = require("form-data");
/**
 * FilesApi - axios parameter creator
 * @export
 */
export const FilesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieve fax confirmation report
         * @summary Get fax confirmation report
         * @param {string} userId self or user id of a corporate member
         * @param {string} faxId ID of the fax which you want to download
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFaxReport: async (userId: string, faxId: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getFaxReport', 'userId', userId)
            // verify required parameter 'faxId' is not null or undefined
            assertParamExists('getFaxReport', 'faxId', faxId)
            const localVarPath = `/accounts/{user_id}/report/{fax_id}`
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)))
                .replace(`{${"fax_id"}}`, encodeURIComponent(String(faxId)));
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
         * Download sent or received fax file
         * @summary Download fax file
         * @param {string} userId self or user id of a corporate member
         * @param {string} faxId ID of the fax which you want to download
         * @param {FileType} [format] This parameter overrides the Accept header
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFile: async (userId: string, faxId: string, format?: FileType, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('getFile', 'userId', userId)
            // verify required parameter 'faxId' is not null or undefined
            assertParamExists('getFile', 'faxId', faxId)
            const localVarPath = `/accounts/{user_id}/files/{fax_id}`
                .replace(`{${"user_id"}}`, encodeURIComponent(String(userId)))
                .replace(`{${"fax_id"}}`, encodeURIComponent(String(faxId)));
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

            if (format !== undefined) {
                localVarQueryParameter['format'] = format;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
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
        uploadFile: async (userId: string, faxFile: File, format?: FileType, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'userId' is not null or undefined
            assertParamExists('uploadFile', 'userId', userId)
            // verify required parameter 'faxFile' is not null or undefined
            assertParamExists('uploadFile', 'faxFile', faxFile)
            const localVarPath = `/accounts/{user_id}/files`
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
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", ["all"], configuration)

            // authentication PAT required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "PAT", ["fax:all:edit"], configuration)

            if (format !== undefined) {
                localVarQueryParameter['format'] = format;
            }


            if (faxFile !== undefined) { 
                localVarFormParams.append('fax_file', faxFile as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = `multipart/form-data; boundary=${localVarFormParams._boundary}`;
    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * FilesApi - functional programming interface
 * @export
 */
export const FilesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = FilesApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieve fax confirmation report
         * @summary Get fax confirmation report
         * @param {FilesApiGetFaxReportRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFaxReport(requestParameters: FilesApiGetFaxReportRequest, options?: any) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFaxReport(requestParameters.userId, requestParameters.faxId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        }
,
        /**
         * Download sent or received fax file
         * @summary Download fax file
         * @param {FilesApiGetFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFile(requestParameters: FilesApiGetFileRequest, options?: any) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFile(requestParameters.userId, requestParameters.faxId, requestParameters.format, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        }
,
        /**
         * Before sending a fax you need to upload your files using this API. In order to upload your fax file, you have to send a `multipart/form-data` request with your file. Set the `name` to `fax_file`, `filename` to your file\'s name with extension, and the Content-Type to the file\'s MIME type. In most cases, the `filename` directive will be automatically added by your library of choice. If the upload was successful you would receive a `file_path` which you can use to send your fax.
         * @summary Upload a file
         * @param {FilesApiUploadFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadFile(requestParameters: FilesApiUploadFileRequest, options?: any) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadFile(requestParameters.userId, requestParameters.faxFile, requestParameters.format, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        }
,
    }
};

/**
 * FilesApi - factory interface
 * @export
 */
export const FilesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = FilesApiFp(configuration)
    return {
        /**
         * Retrieve fax confirmation report
         * @summary Get fax confirmation report
         * @param {FilesApiGetFaxReportRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */

        getFaxReport(requestParameters: FilesApiGetFaxReportRequest, options?: any): AxiosPromise<object> {
            return localVarFp.getFaxReport(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Download sent or received fax file
         * @summary Download fax file
         * @param {FilesApiGetFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */

        getFile(requestParameters: FilesApiGetFileRequest, options?: any): AxiosPromise<object> {
            return localVarFp.getFile(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Before sending a fax you need to upload your files using this API. In order to upload your fax file, you have to send a `multipart/form-data` request with your file. Set the `name` to `fax_file`, `filename` to your file\'s name with extension, and the Content-Type to the file\'s MIME type. In most cases, the `filename` directive will be automatically added by your library of choice. If the upload was successful you would receive a `file_path` which you can use to send your fax.
         * @summary Upload a file
         * @param {FilesApiUploadFileRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */

        uploadFile(requestParameters: FilesApiUploadFileRequest, options?: any): AxiosPromise<FilePath> {
            return localVarFp.uploadFile(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getFaxReport operation in FilesApi.
 * @export
 * @interface FilesApiGetFaxReportRequest
 */
export interface FilesApiGetFaxReportRequest {
    /**
     * self or user id of a corporate member
     * @type {string}
     * @memberof FilesApiGetFaxReport
     */
    readonly userId: string

    /**
     * ID of the fax which you want to download
     * @type {string}
     * @memberof FilesApiGetFaxReport
     */
    readonly faxId: string
}

/**
 * Request parameters for getFile operation in FilesApi.
 * @export
 * @interface FilesApiGetFileRequest
 */
export interface FilesApiGetFileRequest {
    /**
     * self or user id of a corporate member
     * @type {string}
     * @memberof FilesApiGetFile
     */
    readonly userId: string

    /**
     * ID of the fax which you want to download
     * @type {string}
     * @memberof FilesApiGetFile
     */
    readonly faxId: string

    /**
     * This parameter overrides the Accept header
     * @type {FileType}
     * @memberof FilesApiGetFile
     */
    readonly format?: FileType
}

/**
 * Request parameters for uploadFile operation in FilesApi.
 * @export
 * @interface FilesApiUploadFileRequest
 */
export interface FilesApiUploadFileRequest {
    /**
     * self or user id of a corporate member
     * @type {string}
     * @memberof FilesApiUploadFile
     */
    readonly userId: string

    /**
     * Path to file to upload
     * @type {File}
     * @memberof FilesApiUploadFile
     */
    readonly faxFile: File

    /**
     * Can be \&#39;pdf\&#39; or \&#39;tiff\&#39;
     * @type {FileType}
     * @memberof FilesApiUploadFile
     */
    readonly format?: FileType
}

/**
 * FilesApi - object-oriented interface
 * @export
 * @class FilesApi
 * @extends {BaseAPI}
 */
export class FilesApi extends BaseAPI {
    /**
     * Retrieve fax confirmation report
     * @summary Get fax confirmation report
     * @param {FilesApiGetFaxReportRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getFaxReport(requestParameters: FilesApiGetFaxReportRequest, options?: any) {
        return FilesApiFp(this.configuration).getFaxReport(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Download sent or received fax file
     * @summary Download fax file
     * @param {FilesApiGetFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public getFile(requestParameters: FilesApiGetFileRequest, options?: any) {
        return FilesApiFp(this.configuration).getFile(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Before sending a fax you need to upload your files using this API. In order to upload your fax file, you have to send a `multipart/form-data` request with your file. Set the `name` to `fax_file`, `filename` to your file\'s name with extension, and the Content-Type to the file\'s MIME type. In most cases, the `filename` directive will be automatically added by your library of choice. If the upload was successful you would receive a `file_path` which you can use to send your fax.
     * @summary Upload a file
     * @param {FilesApiUploadFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    public uploadFile(requestParameters: FilesApiUploadFileRequest, options?: any) {
        return FilesApiFp(this.configuration).uploadFile(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
