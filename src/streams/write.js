import fs from "fs";
import {fileURLToPath} from "url";
import path, {dirname} from "path";

export const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const srcPath = path.resolve(__dirname, './files/fileToWrite.txt');
    const writeStream  = fs.createWriteStream(srcPath);

    process.stdin.on('data', (chunk) => {
        writeStream.write(chunk);
    });
};

write()