/**
 * FAX.PLUS REST API
 *
 * OpenAPI spec version: 3.0.2
 * Contact: info@fax.plus
 */
/**
 *
 * @export
 * @enum {string}
 */
export declare const SlackNotificationMode: {
    readonly WithAttachment: "with_attachment";
    readonly NoAttachment: "no_attachment";
    readonly Off: "off";
};
export declare type SlackNotificationMode = typeof SlackNotificationMode[keyof typeof SlackNotificationMode];
