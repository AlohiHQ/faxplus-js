/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.2
 * Contact: info@fax.plus
 */
/**
 * Fax status
 * @export
 * @enum {string}
 */
export declare const FaxStatus: {
    readonly Success: "success";
    readonly PartiallySent: "partially_sent";
    readonly PartiallyReceived: "partially_received";
    readonly InsufficientCredit: "insufficient_credit";
    readonly Failed: "failed";
    readonly FailedInternalProcessError: "failed_internal_process_error";
    readonly FailedUserBusy: "failed_user_busy";
    readonly FailedNoAnswer: "failed_no_answer";
    readonly FailedUnallocatedNumber: "failed_unallocated_number";
    readonly FailedOfficeConverterIssue: "failed_office_converter_issue";
    readonly FailedSeparateFilePagesIssue: "failed_separate_file_pages_issue";
    readonly FailedRenderHeaderIssue: "failed_render_header_issue";
    readonly FailedInvalidNumberFormat: "failed_invalid_number_format";
    readonly FailedMimetypeNotSupported: "failed_mimetype_not_supported";
    readonly FailedDestinationNotSupported: "failed_destination_not_supported";
    readonly FailedImagePreparation: "failed_image_preparation";
    readonly FailedToSend: "failed_to_send";
    readonly FailedNormalTemporaryFailure: "failed_normal_temporary_failure";
    readonly FailedUnknownConverterIssue: "failed_unknown_converter_issue";
    readonly FailedNormalClearing: "failed_normal_clearing";
    readonly FailedConvertToTiffIssue: "failed_convert_to_tiff_issue";
    readonly FailedFs49: "failed_fs_49";
};
export declare type FaxStatus = typeof FaxStatus[keyof typeof FaxStatus];
