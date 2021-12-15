"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.0
 * Contact: info@fax.plus
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FaxStatus = void 0;
/**
 * Fax status
 * @export
 * @enum {string}
 */
var FaxStatus;
(function (FaxStatus) {
    FaxStatus["Success"] = "success";
    FaxStatus["PartiallySent"] = "partially_sent";
    FaxStatus["PartiallyReceived"] = "partially_received";
    FaxStatus["InsufficientCredit"] = "insufficient_credit";
    FaxStatus["Failed"] = "failed";
    FaxStatus["FailedInternalProcessError"] = "failed_internal_process_error";
    FaxStatus["FailedUserBusy"] = "failed_user_busy";
    FaxStatus["FailedNoAnswer"] = "failed_no_answer";
    FaxStatus["FailedUnallocatedNumber"] = "failed_unallocated_number";
    FaxStatus["FailedOfficeConverterIssue"] = "failed_office_converter_issue";
    FaxStatus["FailedSeparateFilePagesIssue"] = "failed_separate_file_pages_issue";
    FaxStatus["FailedRenderHeaderIssue"] = "failed_render_header_issue";
    FaxStatus["FailedInvalidNumberFormat"] = "failed_invalid_number_format";
    FaxStatus["FailedMimetypeNotSupported"] = "failed_mimetype_not_supported";
    FaxStatus["FailedDestinationNotSupported"] = "failed_destination_not_supported";
    FaxStatus["FailedToSend"] = "failed_to_send";
    FaxStatus["FailedNormalTemporaryFailure"] = "failed_normal_temporary_failure";
    FaxStatus["FailedUnknownConverterIssue"] = "failed_unknown_converter_issue";
    FaxStatus["FailedNormalClearing"] = "failed_normal_clearing";
    FaxStatus["FailedConvertToTiffIssue"] = "failed_convert_to_tiff_issue";
    FaxStatus["FailedFs49"] = "failed_fs_49";
})(FaxStatus = exports.FaxStatus || (exports.FaxStatus = {}));
