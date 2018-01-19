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
declare function login(credentials: FacebookChatApi.ILoginCredentials | FacebookChatApi.IAppState,
                                 options: FacebookChatApi.IApiOptions,
                                 callback: (err: FacebookChatApi.IError, api: FacebookChatApi.Api) => void): void;


declare function login(credentials: FacebookChatApi.ILoginCredentials | FacebookChatApi.IAppState,
                                 callback: (err: FacebookChatApi.IError, api: FacebookChatApi.Api) => void): void;


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

    export interface IDictionary<T> {
        [key: string]: T;
    }

    export interface IPollOptions {
        [option: string]: boolean;
    }

    export interface IUser {
        userID: string;
        firstName: string;
        fullName: string;
        alternateName: string;
        gender: string;
        isFriend: boolean;
        isBirthday: boolean;
        vanity: string;
        type: string;
        profilePicture: any;
        profileUrl: string;
    }

    export type AttachmentType = 'sticker' | 'file' | 'photo' | 'animated_image' | 'share' | 'video';

    export interface IAttachment {
        type: AttachmentType;
    }

    export interface IStickerAttachment extends IAttachment {
        type: 'sticker';
        url: string;
        stickerID: string;
        packID: string;
        frameCount: number;
        frameRate: number;
        framesPerRow: number;
        framesPerCol: number;
        spriteURI: string;
        spriteURI2x: string;
        height: number;
        width: number;
        caption?: string;
        description?: string;
    }

    export interface IFileAttachment extends IAttachment {
        type: 'file';
        name: string;
        url: string;
        ID: string;
        fileSize: number;
        isMalicious: boolean;
        mimeType: string;
    }

    export interface IPhotoAttachment extends IAttachment {
        type: 'photo';
        ID: string;
        filename: string;
        url?: string;
        thumbnailUrl: string;
        previewUrl: string;
        previewWidth: number;
        prewviewHeight: number;
        largePreviewUrl: string;
        largePreviewWidth: number;
        largePreviewHeight: number;
        width: number;
        height: number;
    }

    export interface IAnimatedImageAttachment extends IAttachment {
        type: 'animated_image';
        name: string;
        facebookUrl: string;
        previewWidth: number;
        previewHeight: number;
        thumbnailUrl: string;
        ID: string;
        filename: string;
        mimeType: string;
        width: number;
        height: number;
        url: string;
        rawGifImage: any;
        rawWebpImage: any;
        animatedGifUrl: string;
        animatedGifPreviewUrl: string;
        animatedWebpUrl: string;
        animatedWebpPreviewUrl: string;
    }

    export interface ShareAttachment extends IAttachment {
        type: 'share';
        description: string;
        ID: string;
        subattachments: ISubAttachment[];
        animatedImageSize: {
            height: number,
            width: number
        };
        width: number;
        height: number;
        image: string;
        playable: boolean;
        duration: number;
        source: string;
        title: string;
        facebookUrl: string;
        url: string;
        target: any;
        styleList: string[];
    }

    export interface ISubAttachment {
        title: string;
        description: string;
        properties: any;
        uri: string;
        media: {
            animated_image: string,
            animated_image_size: {
                height: number,
                width: number
            },
            image: string;
            image_size: {
                height: number,
                width: number
            },
            duration: number,
            playable: boolean,
            source: string
        };
        source: string;
        style_list: string[];
        forwardable: boolean;
        subattachments: ISubAttachment[];
        deduplication_key: string;
        action_links: string[];
        messaging_attribution: {
            attribution_type: string,
            attribution_id: string,
            name: string,
            icon_url: string
        };
        messenger_ctas: string[];
        target: {
            video_id: string;
        };
    }



    export interface IThreadHistoryMessage {
        type: 'message';
        senderID: string;
        senderName: string;
        participantIDs: string[];
        participantNames: string[];
        body: string;
        threadID: string;
        threadName: string;
        location: any;
        messageID: string;
        attachments: IAttachment[];
        timestamp: number;
        timestampAbsolute?: number;
        timestampRelative?: number;
        timestampDatetime?: number;
        tags: string[];
        reactions: IDictionary<string>;
        isGroup: boolean;
    }



    ////////////////////////
    // API
    ////////////////////////

    export class Api {

        public addUserToGroup(userID: string | string[], threadID: string, callback: (err: IError) => void): void;

        public changeArchivedStatus(threadOrThreads: string | string[], archive: boolean, callback: (err: IError) => void): void;

        public changeBlockedStatus(userID: string, block: boolean, callback: (err: IError) => void): void;

        public changeGroupImage(image: ReadableStream, threadID: string, callback: (err: IError) => void): void;

        public changeNickname(nickname: string, threadID: string, participantID: string, callback: (err: IError) => void): void;

        public changeThreadColor(color: string, threadID: string, callback: (err: IError) => void): void;

        public changeThreadEmoji(emoji: string, threadID: string, callback: (err: IError) => void): void;

        public createPoll(title: string, threadID: string, callback: (err: IError) => void): void;

        public createPoll(title: string, threadID: string, options: IPollOptions, callback: (err: IError) => void): void;

        public deleteMessage(messageOrMessages: string | string[], callback: (err: IError) => void): void;

        public deleteThread(threadOrThreads: string | string[], callback: (err: IError) => void): void;

        public forwardAttachment(attachmentID: string, userOrUsers: string | string[], callback: (err: IError) => void): void;

        public getAppState(): IAppState;

        public getCurrentUserID(): String;

        public getEmojiUrl(emojiCharacter: string, size: number, pixelRatio?: number): string;

        public getFriendsList(callback: (err: IError, arr: IUser[]) => void): void;

        public getThreadHistory(threadID: string, amount: number, timestamp: number | undefined, callback: (err: IError, history: IThreadHistoryMessage[]) => void): void;

        public getThreadHistoryGraphQL();

        public getThreadInfo();
        public getThreadInfoGraphQL();
        public getThreadList();
        public getThreadPictures();
        public getUserID();
        public getUserInfo();
        public handleMessageRequest();
        public listen();
        public logout();
        public markAsRead();
        public muteThread();
        public removeUserFromGroup();
        public resolvePhotoUrl();
        public searchForThread();
        public sendMessage();
        public sendTypingIndicator();
        public setMessageReaction();
        public setTitle();
        public threadColors();





    }

}

declare module "facebook-chat-api" {
    export = login;
}