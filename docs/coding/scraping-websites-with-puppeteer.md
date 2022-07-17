---
title: Scraping websites with puppeteer
description: Scraping websites has never been easier, and puppeteer is one of the best tool to use for it.
---

# Scraping websites with puppeteer

Not going into the details of explaining what Puppeteer is, go read that on [their website](https://pptr.dev/). We just want to code :laughing: 

## What can Puppeteer do

Puppeteer can do lots of things, but the most used ones are:

- automate form filling and submissions
- crawl a website and extract data from it
- take screenshots of a website, page and even sections

## What we'll be building

A MVP of a simple scraper that can scrape a website and return the data in a JSON format.

### Requirements

1. [Node.js](https://nodejs.org/en/); You can install this the traditional way by downloading and installing it, or you can use [NVM](https://github.com/nvm-sh/nvm) to manage multiple versions of Node.js.
2. [VSCode](https://code.visualstudio.com/) or any other text editor

### Let's code :keyboard:

Create a folder and navigate to it, if you're a CLI geek like me then you can just your Terminal for everything :laughing:

```bash
mkdir starnieuws-scraper; cd starnieuws-scraper
```

Open the project with VSCode. If you don't have the `code` available on your PATH, please follow [this guide](https://vscode-docs.readthedocs.io/en/latest/editor/setup/) 

```bash
code .
```