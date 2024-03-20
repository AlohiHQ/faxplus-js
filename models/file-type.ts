/* tslint:disable */
/* eslint-disable */
/**
 * Fax.Plus REST API
 *
 * OpenAPI spec version: 3.0.3
 * Contact: info@fax.plus
 */


/**
 * File type
 * @export
 * @enum {string}
 */

export const FileType = {
    Tiff: 'tiff',
    Pdf: 'pdf'
} as const;

export type FileType = typeof FileType[keyof typeof FileType];



