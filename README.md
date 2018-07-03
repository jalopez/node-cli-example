# node-cli-example

Example of node CLI app for teaching purposes.

## Usage

This is a course repo, it contains lesson branches including new code and examples per lesson.
Branches are called `lesson-<n>`, so when you are ready to start, please `git checkout lesson-0`

## Contents

0.  Let's the party started
    - `"bin"` attribute at package.json
    - `# /usr/env/node`
    - `chmod +x bin/yourscript`
    - `npm i -g`
1.  Hello CLI! Basic **concepts** and app structure
    - `process.argv`
    - `process.exit`
    - bin vs. lib
1.  I want you to call external **APIs**
    - `request-promise`: https://github.com/request/request-promise
1.  Parsing **argv** like a ~~sir~~ pirate
    - `yargs`: https://github.com/yargs/yargs
1.  **Config files** FTW
    - `find-up`: https://www.npmjs.com/package/find-up
1.  CLIs at your **command**
    - Yargs commands: https://github.com/yargs/yargs/blob/master/docs/advanced.md
    - `inquirer`: https://github.com/SBoudrias/Inquirer.js
1.  Put some **color** in your ~~life~~ output
1.  **Testing**, testing, testing

## Disclaimer

In this course we are going to use some common node utilities (filesystem, network, etc) but
we won't explain them deeply. If you want to know more about node standard modules, you can
have a look at the [official docs](https://nodejs.org/en/docs/)
