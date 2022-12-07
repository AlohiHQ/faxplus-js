/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.2
 * Contact: info@fax.plus
 */
import { Configuration } from "./configuration";
import { RequestArgs } from "./base";
import { AxiosInstance, AxiosResponse } from 'axios';
/**
 *
 * @export
 */
export declare const DUMMY_BASE_URL = "https://example.com";
/**
 *
 * @throws {RequiredError}
 * @export
 */
export declare const assertParamExists: (functionName: string, paramName: string, paramValue: unknown) => void;
/**
 *
 * @export
 */
export declare const setApiKeyToObject: (object: any, keyParamName: string, configuration?: Configuration) => Promise<void>;
/**
 *
 * @export
 */
export declare const setBasicAuthToObject: (object: any, configuration?: Configuration) => void;
/**
 *
 * @export
 */
export declare const setBearerAuthToObject: (object: any, configuration?: Configuration) => Promise<void>;
/**
 *
 * @export
 */
export declare const setOAuthToObject: (object: any, name: string, scopes: string[], configuration?: Configuration) => Promise<void>;
/**
 *
 * @export
 */
export declare const setSearchParams: (url: URL, ...objects: any[]) => void;
/**
 *
 * @export
 */
export declare const serializeDataIfNeeded: (value: any, requestOptions: any, configuration?: Configuration) => any;
/**
 *
 * @export
 */
export declare const toPathString: (url: URL) => string;
/**
 *
 * @export
 */
export declare const createRequestFunction: (axiosArgs: RequestArgs, globalAxios: AxiosInstance, BASE_PATH: string, configuration?: Configuration) => <T = unknown, R = AxiosResponse<T>>(axios?: AxiosInstance, basePath?: string) => Promise<R>;
