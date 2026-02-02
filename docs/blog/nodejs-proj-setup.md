---
title: Setting up a Node.js project
description: This is the first steps of setting up a Node.js project so we won't repeat ourselves. (DRY = Don't Repeat Yourself)
---

# Setting up a Node.js project
I won't be covering the theory behind this so please visit [their website](https://nodejs.org/) to learn more about Node.js

## Installing Node.js
Navigate to [Node.js](https://nodejs.org/en/), download and install it. I personally use a Version Manager called [NVM](https://github.com/nvm-sh/nvm#installing-and-updating), this gives me the flexibility to use multiple versions of Node.js.

## Project setup

`project-name-here` is the name of your project.
```bash
project=project-name-here
mkdir $project && cd $project
```

Run the following command to inittialize `npm`
```bash
npm init -y
```

### Git setup

This is an optional step, but it is recommended ... I mean, who doesn't want to use Git? :laughing:

Add the folder to a local `git` repo
```bash
git init
```

Create a file called `.gitignore` and add the following line
```
node_modules/
```
> This prevents the `node_modules` folder from being committed to the repo.

Whooo! :partying_face: You're done setting up a Node.js project, please continue with the guide ...
