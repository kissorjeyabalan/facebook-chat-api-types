// Type definitions for facebook-chat-api 1.4
// Project: https://github.com/Schmavery/facebook-chat-api#readme
// Definitions by: Kissor Jeyabalan <https://github.com/kissorjeyabalan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function FacebookChatApi(credentials: FacebookChatApi.ILoginCredentials | FacebookChatApi.IAppState,
                                 options: FacebookChatApi.ILoginOptions,
                                 callback: (err: FacebookChatApi.IError, api: FacebookChatApi.Api) => void) : void;

declare function FacebookChatApi(credentials: FacebookChatApi.ILoginCredentials | FacebookChatApi.IAppState,
                                 callback: (err: FacebookChatApi.IError, api: FacebookChatApi.Api) => void) : void;


declare namespace FacebookChatApi {

    export interface ILoginCredentials {
        email: string;
        password: string
    }

    export interface IAppState {
        appState: object;
    }

    export interface ILoginOptions {
        logLevel?: 'silly' | 'verbose' | 'info' | 'http' | 'warn' | 'error' | 'silent';
        selfListen?: boolean;
        listenEvents: boolean;
        pageID: string;
        updatePresence: boolean;
        forceLogin: boolean;
    }
}

declare module "facebook-chat-api" {
    export = FacebookChatApi;
}