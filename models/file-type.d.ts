/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.2
 * Contact: info@fax.plus
 */
/**
 * File type
 * @export
 * @enum {string}
 */
export declare const FileType: {
    readonly Tiff: "tiff";
    readonly Pdf: "pdf";
};
export declare type FileType = typeof FileType[keyof typeof FileType];
