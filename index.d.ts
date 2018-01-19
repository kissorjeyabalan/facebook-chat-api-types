// Type definitions for facebook-chat-api 1.4
// Project: https://github.com/Schmavery/facebook-chat-api#readme
// Definitions by: Kissor Jeyabalan <https://github.com/kissorjeyabalan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Main entry point to the API.
 * Allows the user to log into facebook given the right credentials.
 *
 * @constructor
 * @param {FacebookChatApi.ILoginCredentials | FacebookChatApi.IAppState} credentials - Object containing email and password or object containing appState
 * @param {FacebookChatApi.ILoginOptions} options - Optional object representing options ot use when logging in
 * @param {(err: FacebookChatApi.IError, api: FacebookChatApi.Api) => void} callback - When login is done (successful or not)
 */
declare function FacebookChatApi(credentials: FacebookChatApi.ILoginCredentials | FacebookChatApi.IAppState,
                                 options: FacebookChatApi.IApiOptions,
                                 callback: (err: FacebookChatApi.IError, api: FacebookChatApi.Api) => void) : void;


declare function FacebookChatApi(credentials: FacebookChatApi.ILoginCredentials | FacebookChatApi.IAppState,
                                 callback: (err: FacebookChatApi.IError, api: FacebookChatApi.Api) => void) : void;


declare namespace FacebookChatApi {

    ////////////////////////
    // Interfaces
    ////////////////////////

    export interface ILoginCredentials {
        email: string;
        password: string
    }

    export interface IAppState {
        appState: object;
    }

    export interface IApiOptions {
        logLevel?: 'silly' | 'verbose' | 'info' | 'http' | 'warn' | 'error' | 'silent';
        selfListen?: boolean;
        listenEvents: boolean;
        pageID: string;
        updatePresence: boolean;
        forceLogin: boolean;
    }

    export interface IError {
        error: string;
    }

}

declare module "facebook-chat-api" {
    export = FacebookChatApi;
}