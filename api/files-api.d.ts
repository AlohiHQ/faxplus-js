/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.2
 * Contact: info@fax.plus
 */
import { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
import { RequestArgs, BaseAPI } from '../base';
import { FilePath } from '../models';
import { FileType } from '../models';
/**
 * FilesApi - axios parameter creator
 * @export
 */
export declare const FilesApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Retrieve fax confirmation report
     * @summary Get fax confirmation report
     * @param {string} userId self or user id of a corporate member
     * @param {string} faxId ID of the fax which you want to download
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFaxReport: (userId: string, faxId: string, options?: any) => Promise<RequestArgs>;
    /**
     * Download sent or received fax file
     * @summary Download fax file
     * @param {string} userId self or user id of a corporate member
     * @param {string} faxId ID of the fax which you want to download
     * @param {FileType} [format] This parameter overrides the Accept header
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFile: (userId: string, faxId: string, format?: FileType, options?: any) => Promise<RequestArgs>;
    /**
     * Before sending a fax you need to upload your files using this API. In order to upload your fax file, you have to send a `multipart/form-data` request with your file. Set the `name` to `fax_file`, `filename` to your file\'s name with extension, and the Content-Type to the file\'s MIME type. In most cases, the `filename` directive will be automatically added by your library of choice. If the upload was successful you would receive a `file_path` which you can use to send your fax.
     * @summary Upload a file
     * @param {string} userId self or user id of a corporate member
     * @param {File} faxFile Path to file to upload
     * @param {FileType} [format] Can be \&#39;pdf\&#39; or \&#39;tiff\&#39;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadFile: (userId: string, faxFile: File, format?: FileType, options?: any) => Promise<RequestArgs>;
};
/**
 * FilesApi - functional programming interface
 * @export
 */
export declare const FilesApiFp: (configuration?: Configuration) => {
    /**
     * Retrieve fax confirmation report
     * @summary Get fax confirmation report
     * @param {FilesApiGetFaxReportRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFaxReport(requestParameters: FilesApiGetFaxReportRequest, options?: any): Promise<(<T = unknown, R = import("axios").AxiosResponse<T>>(axios?: AxiosInstance, basePath?: string) => Promise<R>)>;
    /**
     * Download sent or received fax file
     * @summary Download fax file
     * @param {FilesApiGetFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFile(requestParameters: FilesApiGetFileRequest, options?: any): Promise<(<T = unknown, R = import("axios").AxiosResponse<T>>(axios?: AxiosInstance, basePath?: string) => Promise<R>)>;
    /**
     * Before sending a fax you need to upload your files using this API. In order to upload your fax file, you have to send a `multipart/form-data` request with your file. Set the `name` to `fax_file`, `filename` to your file\'s name with extension, and the Content-Type to the file\'s MIME type. In most cases, the `filename` directive will be automatically added by your library of choice. If the upload was successful you would receive a `file_path` which you can use to send your fax.
     * @summary Upload a file
     * @param {FilesApiUploadFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadFile(requestParameters: FilesApiUploadFileRequest, options?: any): Promise<(<T = unknown, R = import("axios").AxiosResponse<T>>(axios?: AxiosInstance, basePath?: string) => Promise<R>)>;
};
/**
 * FilesApi - factory interface
 * @export
 */
export declare const FilesApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Retrieve fax confirmation report
     * @summary Get fax confirmation report
     * @param {FilesApiGetFaxReportRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFaxReport(requestParameters: FilesApiGetFaxReportRequest, options?: any): AxiosPromise<object>;
    /**
     * Download sent or received fax file
     * @summary Download fax file
     * @param {FilesApiGetFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getFile(requestParameters: FilesApiGetFileRequest, options?: any): AxiosPromise<object>;
    /**
     * Before sending a fax you need to upload your files using this API. In order to upload your fax file, you have to send a `multipart/form-data` request with your file. Set the `name` to `fax_file`, `filename` to your file\'s name with extension, and the Content-Type to the file\'s MIME type. In most cases, the `filename` directive will be automatically added by your library of choice. If the upload was successful you would receive a `file_path` which you can use to send your fax.
     * @summary Upload a file
     * @param {FilesApiUploadFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    uploadFile(requestParameters: FilesApiUploadFileRequest, options?: any): AxiosPromise<FilePath>;
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
    readonly userId: string;
    /**
     * ID of the fax which you want to download
     * @type {string}
     * @memberof FilesApiGetFaxReport
     */
    readonly faxId: string;
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
    readonly userId: string;
    /**
     * ID of the fax which you want to download
     * @type {string}
     * @memberof FilesApiGetFile
     */
    readonly faxId: string;
    /**
     * This parameter overrides the Accept header
     * @type {FileType}
     * @memberof FilesApiGetFile
     */
    readonly format?: FileType;
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
    readonly userId: string;
    /**
     * Path to file to upload
     * @type {File}
     * @memberof FilesApiUploadFile
     */
    readonly faxFile: File;
    /**
     * Can be \&#39;pdf\&#39; or \&#39;tiff\&#39;
     * @type {FileType}
     * @memberof FilesApiUploadFile
     */
    readonly format?: FileType;
}
/**
 * FilesApi - object-oriented interface
 * @export
 * @class FilesApi
 * @extends {BaseAPI}
 */
export declare class FilesApi extends BaseAPI {
    /**
     * Retrieve fax confirmation report
     * @summary Get fax confirmation report
     * @param {FilesApiGetFaxReportRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    getFaxReport(requestParameters: FilesApiGetFaxReportRequest, options?: any): Promise<import("axios").AxiosResponse<unknown>>;
    /**
     * Download sent or received fax file
     * @summary Download fax file
     * @param {FilesApiGetFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    getFile(requestParameters: FilesApiGetFileRequest, options?: any): Promise<import("axios").AxiosResponse<unknown>>;
    /**
     * Before sending a fax you need to upload your files using this API. In order to upload your fax file, you have to send a `multipart/form-data` request with your file. Set the `name` to `fax_file`, `filename` to your file\'s name with extension, and the Content-Type to the file\'s MIME type. In most cases, the `filename` directive will be automatically added by your library of choice. If the upload was successful you would receive a `file_path` which you can use to send your fax.
     * @summary Upload a file
     * @param {FilesApiUploadFileRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof FilesApi
     */
    uploadFile(requestParameters: FilesApiUploadFileRequest, options?: any): Promise<import("axios").AxiosResponse<unknown>>;
}
