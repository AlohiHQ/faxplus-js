/* tslint:disable */
/* eslint-disable */
/**
 * Fax.Plus REST API
 *
 * OpenAPI spec version: 3.0.3
 * Contact: info@fax.plus
 */


/**
 * Fax status
 * @export
 * @enum {string}
 */

export const FaxStatus = {
    Success: 'success',
    PartiallySent: 'partially_sent',
    PartiallyReceived: 'partially_received',
    InsufficientCredit: 'insufficient_credit',
    Failed: 'failed',
    FailedInternalProcessError: 'failed_internal_process_error',
    FailedUserBusy: 'failed_user_busy',
    FailedNoAnswer: 'failed_no_answer',
    FailedUnallocatedNumber: 'failed_unallocated_number',
    FailedOfficeConverterIssue: 'failed_office_converter_issue',
    FailedSeparateFilePagesIssue: 'failed_separate_file_pages_issue',
    FailedRenderHeaderIssue: 'failed_render_header_issue',
    FailedInvalidNumberFormat: 'failed_invalid_number_format',
    FailedMimetypeNotSupported: 'failed_mimetype_not_supported',
    FailedDestinationNotSupported: 'failed_destination_not_supported',
    FailedImagePreparation: 'failed_image_preparation',
    FailedToSend: 'failed_to_send',
    FailedNormalTemporaryFailure: 'failed_normal_temporary_failure',
    FailedUnknownConverterIssue: 'failed_unknown_converter_issue',
    FailedNormalClearing: 'failed_normal_clearing',
    FailedConvertToTiffIssue: 'failed_convert_to_tiff_issue',
    FailedFs49: 'failed_fs_49',
    FailedFs2: 'failed_fs_2'
} as const;

export type FaxStatus = typeof FaxStatus[keyof typeof FaxStatus];



