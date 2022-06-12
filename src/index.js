'use strict'

import {greeting} from './services/greeting.js'
import {createInterface} from "readline";
import {CURRENT_FOLDER_MESSAGE, EXIT, INVALID_INPUT} from './constants/messages.js'
import {getHomeDir} from "./services/currentDirectory.js";
import {getFolder} from "./commands/cd.js";

try {
    const userName = greeting();
    console.log(`${CURRENT_FOLDER_MESSAGE} ${getHomeDir()}`);

    const readlineStream = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readlineStream.on('line', async (input) => {
        const [command , ...args] = input.split(" ");
        switch (command) {
            case  "cd":
                console.log('cd');
                break;
            case ".exit":
                readlineStream.close();
                break;
            default:
                console.error(INVALID_INPUT);
        }
        // console.log(`${CURRENT_FOLDER_MESSAGE} ${getCurrentDirectoryPath()}`)

    });

    readlineStream.on('close',  () => {
        console.log(`${EXIT}, ${userName}!`)
    })
} catch(e) {
    console.log()
    console.error(e)
}
