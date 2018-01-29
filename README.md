# Facebook Chat API Typings
Typings for the [unofficial facebook chat api](https://www.npmjs.com/package/facebook-chat-api).

## How to install
### npm
> npm install --save-dev kissorjeyabalan/facebook-chat-api-typings

The typings will be installed into the @typings module.

## Usage
```typescript
import * as chat from 'facebook-chat-api';

const creds: chat.LoginCredentials = {email: 'user@email.com', password: 'hunter2'};

chat(creds, (err: chat.Error, api: chat.Api) => {
    if (err) { return console.error(err); }

    api.listen((error: chat.Error, message: chat.MessageEvent) => {
        if (error) { return console.error(error); }

        console.log(`${message.senderID}: ${message.body}`);
        console.log(`Sent to thread: ${message.threadID}`);
    });
});

```
