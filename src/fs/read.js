import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from 'url';

export const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename)
    const pathToRead = path.resolve(__dirname, './files/fileToRead.txt')
    if (!fs.existsSync(pathToRead)) {
        const error = new Error("FS operation failed")
        console.log(error.stack)
    } else {
        await fs.readFile(pathToRead, {encoding: 'utf-8'}, (err, data) => {
            if (err) {
                return console.log(err.stack);
            }
            console.log(data)
        });
    }
};
