---
title: Creating Telegram bots with Node.js
description: Telegram bots are awesome and pretty easy to make. The complexity is equal to the features you want to add.
---

# Telegram Bots with Node.js
Telegram has been my go to chat platform for a couple of years now. I've been able to automate A LOT of things with it such as

- [Taking trades on FTX](https://github.com/pawiromitchel/ftx-telegram-trader)
- [Doing DCA (Dollar Cost Average) on different assets](https://github.com/pawiromitchel/ftx-dca-script)

## What are we going to build?
We'll build two things during this project

1. A Telegram bot that takes an input, runs a function and returns the output
2. Connect our app to a Web3 RPC Node, in this cause we'll use Quicknode so please go ahead and make an account on [Quicknode.io](https://www.quicknode.com?tap_a=67226-09396e&tap_s=3027754-c56695&utm_source=affiliate&utm_campaign=generic&utm_content=affiliate_landing_page&utm_medium=generic)

![CleanShot 2022-07-21 at 21 51 00](https://user-images.githubusercontent.com/11035568/180338603-665ce902-849e-4055-9b42-79b36fd70e07.png)

## Project setup

1. [Please follow this guide to set up a Node.js project.](/coding/nodejs-proj-setup/)
2. [Setup a free Quicknode endpoint](https://www.quicknode.com?tap_a=67226-09396e&tap_s=3027754-c56695&utm_source=affiliate&utm_campaign=generic&utm_content=affiliate_landing_page&utm_medium=generic) and choose ETH Mainnet

> insert screenshot here

## Create a bot via BotFather
BotFather is the official way of creating bots on Telegram. 

1. start the bot by chatting with [BotFather](https://t.me/BotFather)
2. execute `/newbot` to create a new bot
3. give the bot a username and a name
4. (optional) you can set a description and a profile picture

After you've followed this proces, you should get this text from him.
![CleanShot 2022-07-21 at 21 51 51](https://user-images.githubusercontent.com/11035568/180338719-83813ab9-f327-4d8a-bd9b-29c660cd3ff5.png)


### Project setup
I'm assuming you've followed [this guide](/coding/nodejs-proj-setup/) to setup your Node.js environment. I'll call my project `telegram-bot-example`.
```bash
mkdir telegram-bot-example
cd telegram-bot-example
git init
npm init -y
echo "node_modules/" > .gitignore
```

**We'll now install the dependencies**

1. `node-telegram-bot-api` for the Telegram bot
2. `dotenv` for the environment variables
3. `web3` for connecting to the Web3 RPC Node we now have thanks to Quicknode

```bash
npm i node-telegram-bot-api dotenv web3
```

**Defining the environment variables**

1. Create a file called `.env`
> for the CLI lovers
```bash
touch .env
```
2. Copy the following content into it
```
TELEGRAM_TOKEN=<INSERT_YOUR_TOKEN_HERE>
WEB3_PROVIDER_URL=<INSERT_YOUR_WEB3_PROVIDER_URL_HERE>
```
Copy and paste the URL from Quicknode and paste it in `WEB3_PROVIDER_URL`
![CleanShot 2022-07-21 at 21 52 59](https://user-images.githubusercontent.com/11035568/180338786-ed08d0cd-12ac-4802-82a3-a17e4621e157.png)

### Part 1: Create the Telegram bot

1. Create a file called `app.js`
2. Add the following code. This is the core of our bot.
```js title="app.js"
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });
bot.on("polling_error", (msg) => console.log(msg));
bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    let text = msg.text ? msg.text : '';

    bot.sendMessage(chatId, 'hey there! this is what you asked me ' + text);
});
```
> We don't need to pass the TELEGRAM_TOKEN as a string anymore because it's been defined in the .env file. #lifehacks lol
3. Run the bot
```bash
node app.js
```
![CleanShot 2022-07-21 at 21 54 27](https://user-images.githubusercontent.com/11035568/180338919-a2ce46d5-0dd4-4732-b6f4-7b969de44975.png)


### Part 2: Connect to the Web3 RPC Node

1. Create a file called `web3.js`
2. Add the following code, we're doing a simple `getBlock` call
```js title="web3.js"
const Web3 = require("web3");
require('dotenv').config();

async function getBlock() {
    const url = process.env.WEB3_PROVIDER_URL;
    const web3 = new Web3(url);
    const block = await web3.eth.getBlock("latest");
    return await block;
}

// getBlock().then(console.log)

module.exports = { getBlock };
```
> See? Connecting to Web3 is not that hard anymore. :laughing:
3. Uncomment the line `getBlock().then(console.log)` to test the file independently
```
node web3.js
```
You should get an output like this
```
{
  baseFeePerGas: 12011862285,
  difficulty: '12152901669249817',
  extraData: '0x466c6578706f6f6c2f53312f4252202d204c6973626f6e',
  gasLimit: 30000000,
  gasUsed: 9195298,
  hash: '0xbf04f30cb73aed0583999108603616027c2b4ab500daa0f33a1052d353b869f7',
  ...
}
```
> This is the data within the latest mined block

### Part 3: Custom Telegram commands
Let's extend our bot with a custom `/getLatestBlock` command
```js title="app.js"
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });
bot.on("polling_error", (msg) => console.log(msg));
bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    let text = msg.text ? msg.text : '';

    if (text.includes('/getLatestBlock')) {
        bot.sendMessage(chatId, 'getting latest block...');
    }
});
```

The following block will wait for the user to call the command `/getLatestBlock`
```js
if (text.includes('/getLatestBlock')) {
    bot.sendMessage(chatId, 'getting latest block...');
}
```

![CleanShot 2022-07-21 at 21 54 55](https://user-images.githubusercontent.com/11035568/180338955-015b2ee8-dd6e-4ef6-8a37-69211ac8abec.png)

### Part 4: Connect the bot to the Web3 RPC Node
First we need to add the module we made earlier to the `app.js` file
```js
const web3 = require('./web3');
```

Now we slightly modify the code to return blockhash when the user calls the command `/getLatestBlock`
```js
if (text.includes('/getLatestBlock')) {
    bot.sendMessage(chatId, 'getting latest block...');
    const block = await web3.getBlock();
    bot.sendMessage(chatId, 'Latest blockhash: ' + block.hash);
}
```

The full code should look like this
```bash title=".env"
TELEGRAM_TOKEN=
WEB3_PROVIDER_URL=
```

```js title="app.js"
const TelegramBot = require('node-telegram-bot-api');
const web3 = require('./web3');
require('dotenv').config();

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });
bot.on("polling_error", (msg) => console.log(msg));
bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    let text = msg.text ? msg.text : '';

    if (text.includes('/getLatestBlock')) {
        const block = await web3.getBlock();
        bot.sendMessage(chatId, 'Latest blockhash: ' + block.hash);
    }
});
```

```js title="web3.js"
const Web3 = require("web3");
require('dotenv').config();

async function getBlock() {
    const url = process.env.WEB3_PROVIDER_URL;
    const web3 = new Web3(url);
    const block = await web3.eth.getBlock("latest");
    return await block;
}

module.exports = { getBlock };
```

## Conclusion
What have we learned?

1. Create a simple Telegram bot
2. Register and create a account at Quicknode
3. Connect the bot to the Web3 RPC Node
4. Custom Telegram commands `/getLatestBlock`
5. Environment variables such as `TELEGRAM_TOKEN` and `WEB3_PROVIDER_URL`
6. Export functions to be used in other files, like how the function `getBlock()` in `web3.js` was used in `app.js`
```js
module.exports = { getBlock };
```

## Next steps?
That's for you to find out :smile:

1. Learn how to reister the custom commands via BotFather
2. Create more custom commands and play around with the possibilities of Web3
> Maybe [getting the ETH balance](https://web3js.readthedocs.io/en/v1.7.4/web3-eth.html?highlight=getbalance#getbalance) of a wallet? Hmmmm .... 

Thanks for reading! :raised_hands:
