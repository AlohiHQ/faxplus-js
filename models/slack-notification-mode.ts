/* tslint:disable */
/* eslint-disable */
/**
 * Fax.Plus REST API
 *
 * OpenAPI spec version: 3.0.3
 * Contact: info@fax.plus
 */


/**
 * 
 * @export
 * @enum {string}
 */

export const SlackNotificationMode = {
    WithAttachment: 'with_attachment',
    NoAttachment: 'no_attachment',
    Off: 'off'
} as const;

export type SlackNotificationMode = typeof SlackNotificationMode[keyof typeof SlackNotificationMode];



