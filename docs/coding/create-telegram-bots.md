---
title: Creating Telegram bots with Node.js
description: Telegram bots are awesome and pretty easy to make. The complexity is equal to the features you want to add.
---

# Telegram Bots
Telegram has been my go to chat platform for a couple of years now. I've been able to automate A LOT of things with it such as

- [Taking trades on FTX](https://github.com/pawiromitchel/ftx-telegram-trader)
- [Doing DCA (Dollar Cost Average) on different assets](https://github.com/pawiromitchel/ftx-dca-script)

## What are we going to build?
We're going to build a simple bot that takes 

## Project setup
> [Please follow this guide to set up a Node.js project.](/coding/nodejs-proj-setup/)

## Create a bot via BotFather
BotFather is the official way of creating bots on Telegram. 

1. start the bot by chatting with [BotFather](https://t.me/BotFather)
2. execute `/newbot` to create a new bot
3. give the bot a username and a name
4. (optional) you can set a description and a profile picture

After you've followed this proces, you should get this text from him.
```
Done! Congratulations on your new bot. You will find it at t.me/AutoSignalsBot. You can now add a description, about section and profile picture for your bot, see /help for a list of commands. By the way, when you've finished creating your cool bot, ping our Bot Support if you want a better username for it. Just make sure the bot is fully operational before you do this.

Use this token to access the HTTP API:
1212945564:AAEpUlWEXkgPDc2asVwjSZjX820IUzGhDds
Keep your token secure and store it safely, it can be used by anyone to control your bot.

For a description of the Bot API, see this page: https://core.telegram.org/bots/api
```

## The code
We can now create the functionalities of our bot.

install telegram api package

snippet code

combining puppeteer with the telegram bot
