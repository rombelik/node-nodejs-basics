import fs from "fs";
import {fileURLToPath} from "url";
import path, { dirname } from "path";

export const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename)
    const pathToRead = path.resolve(__dirname, './files')
    if (!fs.existsSync(pathToRead)) {
        const error = new Error("FS operation failed")
        console.log(error.stack)
    } else {
        await fs.readdir(pathToRead,  (err, files) => {
            if (err) {
                return console.log(err.stack);
            }
            files.forEach(function (file) {
                console.log(file);
            });
        });
    }
};
