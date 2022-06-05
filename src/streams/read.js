import {fileURLToPath} from "url";
import path, {dirname} from "path";
import fs from "fs";

export const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const srcPath = path.resolve(__dirname, './files/fileToRead.txt');
    const readStream  = fs.createReadStream(srcPath);

    readStream.on('data', (chunk) => {
        process.stdout.write(`${chunk.toString()}\n`);
    });
};
