'use strict'

import {greeting} from './services/greeting.js'
import {createInterface} from "readline";
import {CURRENT_FOLDER_MESSAGE, INVALID_INPUT} from './constants/messages.js'
import {getCurrentDirectoryPath} from "./services/currentDirectory.js";

try {
    const userName = greeting();
    console.log(`You are currently in ${getCurrentDirectoryPath()}`)
    const readlineStream = createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readlineStream.on('line', async (input) => {
        const [command , ...args] = input.split(" ");
        switch (command) {
            default:
                console.error(INVALID_INPUT);
        }
        console.log(`${CURRENT_FOLDER_MESSAGE} ${getCurrentDirectoryPath()}`)

    });

    readlineStream.on('close',  () => {
        console.log(`${CURRENT_FOLDER_MESSAGE}, ${userName}!`)
    })
} catch(e) {
    console.error(e)
}
