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



### Project setup

Create a folder and navigate to it, if you're a CLI geek like me then you can just your Terminal for everything :laughing:

```bash
mkdir starnieuws-scraper && cd starnieuws-scraper
```

(Optional) Add the folder to a local `git` repo
```bash
git init
```

(Optional) Create a file called `.gitignore` and add the following line
```
node_modules/
```

Run the following command to inittialize `npm` and install `puppeteer` :magic_wand:
```bash
npm init -y && npm install puppeteer
```

Open the project with VSCode. If you don't have the `code` available on your PATH, please follow [this guide](https://vscode-docs.readthedocs.io/en/latest/editor/setup/) 

```bash
code .
```

### Let's code
Alright, we're done setting up the project. Let's start coding! We'll use a local news website called [Starnieuws](https://www.starnieuws.com/) as our example.

#### Basics

Basic usage of the `puppeteer` package
```js
const puppeteer = require('puppeteer');
const url = 'https://www.starnieuws.com/';

// this is a async function that calls itself, no need to call it manually
(async () => {
    // launch a Chromium browser, set the headless property to true if you're deploying to production
    browser = await puppeteer.launch({
        headless: false,
    });

    // create new page object
    const page = await browser.newPage();

    // set viewport width and height
    await page.setViewport({
        width: 1920,
        height: 1080,
    });

    // nagivate to the url
    await page.goto(url);
})();
```

Run it with `node <filename>.js` via your VSCode Terminal. Voila, a browser should open and you should be able to see the website.

#### Catch errors (try catch)

We'll add a `try catch` block to catch any errors that might occur within the `async` function
```js
let browser = null;

try {
    // launch headless Chromium browser
    browser = await puppeteer.launch({
        headless: false,
    });

    // create new page object
    const page = await browser.newPage();

    // set viewport width and height
    await page.setViewport({
        width: 1920,
        height: 1080,
    });

    await page.goto(url);

    // do something with the page ...

} catch (err) {
    console.log(`Error: ${err.message}`);
} finally {
    if (browser) {
        await browser.close();
    }
    console.log(`\nScraping ${url} done!`);
}
```

#### Scraping 

Let's scrape something now. We want the title of the news article and the URL. Looking at the source code, we can see that it's in this order `.headlines_content > ul > li`. The list sits under the `.headlines_content` class.

Scraping contents looks like this in `puppeteer`, read more about `evaluate()` [here](https://pptr.dev/api/puppeteer.page.evaluate)

The element looks like this `<a href="https://www.starnieuws.com/index.php/welcome/index/nieuwsitem/71066">LVV: Stijgend waterpeil Nannizwamp wordt gemonitord</a>` so we want the `href` attribute, and the text content. Add this function under the `await page.goto(url);` code block
![image](https://user-images.githubusercontent.com/11035568/179430456-5289269d-617c-46eb-9c9c-35ced0fd892c.png)

```js
let data = await page.evaluate(() => {
    let results = [];
    let items = document.querySelectorAll('.headlines_content > ul > li');

    // iterate through the items and push the data to the results array
    items.forEach((item) => {
        results.push({
            title: item.querySelector('a').innerText,
            url: item.querySelector('a').href,
        })
    })

    return results
})

// do something with the scraped data
console.log(data)
```

#### Complete source code
Your complete code should look like this

```js title="app.js"
const puppeteer = require('puppeteer');
const url = 'https://www.starnieuws.com/';

(async () => {
    let browser = null;

    try {
        // launch headless Chromium browser
        browser = await puppeteer.launch({
            headless: false,
        });

        // create new page object
        const page = await browser.newPage();

        // set viewport width and height
        await page.setViewport({
            width: 1920,
            height: 1080,
        });

        await page.goto(url);

        let data = await page.evaluate(() => {
            let results = []
            let items = document.querySelectorAll('.headlines_content > ul > li')
            items.forEach((item) => {
                results.push({
                    title: item.querySelector('a').innerText,
                    url: item.querySelector('a').href,
                })
            })
            return results
        })

        // do something with the scraped data
        console.log(data)

    } catch (err) {
        console.log(`Error: ${err.message}`);
    } finally {
        if (browser) {
            await browser.close();
        }
        console.log(`\nScraping ${url} done!`);
    }
})();

```

Run it! `node app.js` and you should see something like this
![image](https://user-images.githubusercontent.com/11035568/179430423-ac100a09-2d9e-4c5d-aae8-d48dfaf9d9d0.png)

#### Storing your results
1. As a file. We can achieve this by storing the output to a file with the `fs` module. Read more about it [here](https://nodejs.dev/learn/the-nodejs-fs-module)
2. In a Database (DB), you can use MongoDB, MySQL, PostgreSQL, etc.

## Wrapping up

So, what have we learned?


- Setting up a `git` repo and initializing `npm`
- Getting started with Puppeteer
- Catching errors with `try catch` blocks
- Scraping data

Thank you so much for reading and following along, see you soon :heart:
