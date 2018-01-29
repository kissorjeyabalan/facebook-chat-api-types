// Type definitions for facebook-chat-api 1.4
// Project: https://github.com/Schmavery/facebook-chat-api#readme
// Definitions by: Kissor Jeyabalan <https://github.com/kissorjeyabalan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

/**
 * Main entry point to the API.
 * Allows the user to log into facebook given the right credentials.
 *
 * @constructor
 * @param {FacebookChatApi.LoginCredentials | FacebookChatApi.AppState} credentials - Object containing email and password or object containing appState
 * @param {FacebookChatApi.ILoginOptions} options - Optional object representing options ot use when logging in
 * @param {(err: FacebookChatApi.Error, api: FacebookChatApi.Api) => void} callback - When login is done (successful or not)
 */
declare function FacebookChatApi(credentials: FacebookChatApi.LoginCredentials | FacebookChatApi.AppState,
    options: FacebookChatApi.ApiOptions,
    callback: (err: FacebookChatApi.Error, api: FacebookChatApi.Api) => void): void;


declare function FacebookChatApi(credentials: FacebookChatApi.LoginCredentials | FacebookChatApi.AppState,
    callback: (err: FacebookChatApi.Error, api: FacebookChatApi.Api) => void): void;


declare namespace FacebookChatApi {
export type ReadableStream = NodeJS.ReadableStream;

////////////////////////
// Interfaces
////////////////////////

export interface LoginCredentials {
email: string;
password: string
}

export interface AppState {
appState: object;
}

export interface ApiOptions {
logLevel?: 'silly' | 'verbose' | 'info' | 'http' | 'warn' | 'error' | 'silent';
selfListen?: boolean;
listenEvents: boolean;
pageID: string;
updatePresence: boolean;
forceLogin: boolean;
}

export interface Error {
error: string;
}

export interface Dictionary<T> {
[key: string]: T;
}

export interface PollOptions {
[option: string]: boolean;
}


export type AttachmentType = 'sticker' | 'file' | 'photo' | 'animated_image' | 'share' | 'video' | 'audio';

export interface Attachment {
type: AttachmentType;
}

export interface StickerAttachment extends Attachment {
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
caption: string;
description: string;
}

export interface FileAttachment extends Attachment {
type: 'file';
name: string;
url: string;
ID: string;
fileSize: number;
isMalicious: boolean;
mimeType: string;
}

export interface PhotoAttachment extends Attachment {
type: 'photo';
ID: string;
filename: string;
thumbnailUrl: string;
previewUrl: string;
previewWidth: number;
prewviewHeight: number;
largePreviewUrl: string;
largePreviewWidth: number;
largePreviewHeight: number;
url: string;
width: number;
height: number;
}

export interface AnimatedImageAttachment extends Attachment {
type: 'animated_image';
name: string;
facebookUrl: string;
previewUrl: string;
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

export interface ShareAttachment extends Attachment {
type: 'share';
description: string;
ID: string;
subattachments: SubAttachment[];
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
target: string;
styleList: string[];
url: string;
}

export interface VideoAttachment extends Attachment {
type: 'video';
filename: string;
thumbnailUrl: string;
previewUrl: string;
previewWidth: number;
previewHeigth: number;
ID: string;
url: string;
width: number;
height: number;
duration: number;
}

export interface AudioAttachment extends Attachment {
type: 'audio';
audioType: string;
isVoiceMail: boolean;
filename: string;
ID: string;
url: string;
duration: number;
}

export interface SubAttachment {
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
subattachments: SubAttachment[];
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
video_id: string
};
}

export interface ThreadHistoryMessage {
type: 'message';
senderName: string;
senderID: string;
participantNames: string[];
participantIDs: string[];
body: string;
threadID: string;
threadName: string;
location: string;
messageID: string;
attachments: Attachment[];
timestamp: number;
timestampAbsolute: number;
timestampRelative: number;
timestampDatetime: number;
tags: string[];
reactions: Dictionary<string>;
isUnread: boolean;
isGroup: boolean;
}

export type GraphQLType = 'image' | 'video' | 'file' | 'audio' | 'share' | 'sticker';

export interface AttachmentGraphQL {
type: GraphQLType;
}

export interface ImageAttachmentGraphQL {
width: number;
height: number;
type: 'image';
filename: string;
attachmentID: string;
previewHeight: number;
previewUrl: string;
previewWidth: number;
thumbnailUrl: string;
attributionApp: {
attributionAppID: string,
name: string,
logo: any
};
extension: string;
largePreviewUrl: string;
largePreviewHeight: number;
largePreviewWidth: number;
}

export interface VideoAttachmentGraphQL {
type: 'video';
thumbnailUrl: string;
filename: string;
height: number;
width: number;
attachmentID: string;
url: string;
duration: number;
thumbnailWidth: number;
thumbnailHeight: number;
videoType: string;
}

export interface FileAttachmentGraphQL {
attachmentID: string;
isMalicious: boolean;
type: 'file';
url: string;
contentType: string;
filename: string;
}

export interface AudioAttachmentGraphQL {
attachmentID: string;
type: 'audio';
audioType: string;
duration: number;
url: string;
isVoiceMail: boolean;
filename: string;
}

export interface ShareAttachmentGraphQL {
type: 'share';
description: string;
attachmentID: number;
title: string;
subattachments: SubAttachment[];
url: string;
source: string;
playable: boolean;
thumbnailUrl: string;
thumbnailWidth: number;
thumbnailHeight: number;
duration: number;
playableUrl: string;
properties: any;
}

export interface StickerAttachmentGraphQL {
caption: string;
description: string;
frameCount: number;
frameRate: number;
framesPerCol: number;
framesPerRow: number;
packID: string;
spriteURI2x: string;
spriteURI: string;
stickerID: string;
url: string;
height: number;
width: number;
type: 'sticker';
}

export interface ThreadInfo {
threadID: string;
participantIDs: string[];
name: string;
nicknames?: string[];
snippet: string;
snippetAttachments: Attachment[] | AttachmentGraphQL[];
snippetSender: string;
unreadCount: number;
messageCount: number;
imageSrc?: string;
timestamp: number;
serverTimestamp: number;
muteUntil: number;
isCanonicalUser: boolean;
isCanonical: boolean;
isSubscribed: boolean;
folder: string;
isArchived: boolean;
recipientsLoadable: boolean;
hasEmailParticipant: boolean;
readOnly: boolean;
canReply: boolean;
cannotReplyReason?: string;
lastMessageTimestamp: number;
lastReadTimestamp: number;
lastMessageType: any;
emoji?: string;
color: string;
adminIDs: string[];
threadType: number;
}

export interface EventReminder {
reminderID: string;
eventCreatorID: string;
time: number;
eventType: string;
locationName: string;
locationCoordinates: string;
locationPage: string;
eventStatus: string;
note: string;
repeatMode: string;
eventTitle: string;
triggerMessage: string;
secondsToNotifyBefore: number;
allowsRsvp: boolean;
relatedEvent: any;
members: {
memberID: string,
state: string
};
}

export interface ThreadInfoGraphQL {
threadID: string;
threadName: string;
participantIDs: string[];
unreadCount: number;
messageCount: number;
timestamp: number;
isPinProtected: boolean;
eventReminders?: EventReminder;
relatedPageThread: string;
reactionsMuteMode: string;
mentionsMuteMode: string;
threadType: string;
topEmojis: string[];
emoji?: string;
color?: string;
nicknames: string[];
}

export interface ThreadPicture {
uri: string;
width: number;
height: number;
}

export type ThreadListType = 'inbox' | 'archived' | 'pending';

export interface User {
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

export interface UserInfo {
name: string;
firstName: string;
vanity: string;
thumbSrc: string;
profileUrl: string;
gender: string;
type: UserType;
isFriend: boolean;
isBirthday: boolean;
searchTokens: string[];
alternateName: string;
}

export interface UserIDInfo {
userID: string;
photoUrl: string;
indexRank: number;
name: string;
isVerified: boolean;
profileUrl: boolean;
category: string;
score: number;
type: UserType;
}

export type UserType = 'user' | 'group' | 'page' | 'event' | 'app';

export type EventType = 'message' | 'event' | 'typ' | 'read' | 'read_receipt' | 'message_reaction' | 'presence';

export type MessageType =
'log:subscribe'
| 'log:unsubscribe'
| 'log:thread-name'
| 'log:thread-color'
| 'log:thread-icon'
| 'log:user-nickname';

export interface Event {
type: EventType;
}

export interface MessageEvent extends Event {
type: 'message';
senderName: string;
senderID: string;
participantNames: string[];
participantIDs: string[];
body: string;
threadID: string;
threadName: string;
location?: string;
messageID: string;
attachments: Attachment[] | AttachmentGraphQL[];
timestamp: number;
timestampAbsolute: number;
timestampRelative: number;
timestampDatetime: number;
tags: string[];
reactions: Dictionary<string>
isUnread: boolean;
isGroup: boolean;
}

export interface EventEvent extends Event {
threadID: string;
logMessageType: MessageType;
logMessageData: string;
logMessageBody: string;
author: string;
type: 'event';
}

export interface TypEvent extends Event {
isTyping: boolean;
from: string;
threadID: string;
fromMobile: boolean;
userID: string;
type: 'typ';
}

export interface ReadEvent extends Event {
time: number;
threadID: string;
type: 'read';
}

export interface ReadReceiptEvent extends Event {
reader: string;
time: number;
threadID: string;
type: 'read_receipt';
}

export interface MessageReactionEvent extends Event {
messageID: string;
offlineThreadingID: string;
reaction: string;
senderID: string;
threadID: string;
timestamp: number;
type: 'message_reaction';
userID: string;
}

export interface PresenceEvent extends Event {
statuses: number;
timestamp: number;
type: 'presence';
userID: string;
}

export interface Message {
body: string;
}

export interface StickerMessage extends Message {
sticker: string;
}

export interface AttachmentMessage extends Message {
attachment: ReadableStream | ReadableStream[];
}

export interface UrlMessage extends Message {
url: string;
}

export interface EmojiMessage extends Message {
emoji: string;
emojiSize: 'small' | 'medium' | 'large';
}

export interface MentionsMessage extends Message {
mentions: Mention[];
}

export interface Mention {
tag: string;
id: string;
fromIndex?: number;
}

export interface MessageInfo {
threadID: string;
messageID: string;
timestamp: number;
}

export interface TitleInfo {
threadID: string;
}

export type ReactionType = ':love:' | ':heart_eyes' | ':haha:' |
':laughing:' | ':wow:' | ':open_mouth:' | ':sad:' | ':cry:' | ':angry:' | ':like:' | ':thumbsup:' | ':dislike:' | ':thumbsdown:';

////////////////////////
// API
////////////////////////

export interface Api {

addUserToGroup(userID: string | string[], threadID: string, callback?: (err: Error) => void): any;

changeArchivedStatus(threadOrThreads: string | string[], archive: boolean, callback?: (err: Error) => void): any;

changeBlockedStatus(userID: string, block: boolean, callback?: (err: Error) => void): any;

changeGroupImage(image: ReadableStream, threadID: string, callback?: (err: Error) => void): any;

changeNickname(nickname: string, threadID: string, participantID: string, callback?: (err: Error) => void): any;

changeThreadColor(color: string, threadID: string, callback?: (err: Error) => void): any;

changeThreadEmoji(emoji: string, threadID: string, callback?: (err: Error) => void): any;

createPoll(title: string, threadID: string, options?: PollOptions, callback?: (err: Error) => void): any;

deleteMessage(messageOrMessages: string | string[], callback?: (err: Error) => void): any;

deleteThread(threadOrThreads: string | string[], callback?: (err: Error) => void): any;

forwardAttachment(attachmentID: string, userOrUsers: string | string[], callback?: (err: Error) => void): any;

getAppState(): AppState;

getCurrentUserID(): String;

getEmojiUrl(emojiCharacter: string, size: number, pixelRatio?: number): string;

getFriendsList(callback: (err: Error, arr: User[]) => void): any;

getThreadHistory(threadID: string, amount: number, timestamp: number,
             callback: (err: Error, history: ThreadHistoryMessage[]) => void): any;

getThreadHistoryGraphQL(threadID: string, amount: number, timestamp: number,
                    callback: (err: Error, history: AttachmentGraphQL[]) => void): any;

getThreadInfo(threadID: string, callback?: (err: Error, info: ThreadInfo) => void): any;

getThreadInfoGraphQL(threadID: string, callback?: (err: Error, info: ThreadInfoGraphQL) => void): any;

getThreadList(start: number, end: number, type: ThreadListType, callback: (err: Error, threadIDs: ThreadInfo[]) => void): any;

getThreadPictures(threadID: string, offset: number, limit: number, callback: (err: Error, arr: ThreadPicture[]) => void): any;

getUserID(name: string, callback: (err: Error, obj: UserIDInfo) => void): any;

getUserInfo(userID: string | string[], callback: (err: Error, obj: Dictionary<UserInfo>) => void): any;

threadColors(): string;

handleMessageRequest(threadID: string | string[], accept: boolean, callback?: (err: Error) => void): any;

listen(callback: (err: Error, message: Event) => void): any;

logout(callback?: (err: Error) => void): any;

markAsRead(threadID: string, callback?: (err: Error) => void): any;

muteThread(threadID: string, muteSeconds: number, callback?: (err: Error) => void): any;

removeUserFromGroup(userID: string, threadID: string, callback?: (err: Error) => void): any;

resolvePhotoUrl(photoID: string, callback: (err: Error, url: string) => void): any;

sendMessage(message: string | Message, threadID: string, callback?: (err: Error, messageInfo: MessageInfo) => void): any;

sendTypingIndicator(threadID: string, callback?: (err: Error) => void): any;

setMessageReaction(reaction: ReactionType, messageID: string, callback?: (err: Error) => void): any;

setOptions(options: ApiOptions): any;

setTitle(newTitle: string, threadID: string, callback?: (err: Error, obj: TitleInfo) => void): any;
}

}

export = FacebookChatApi;
