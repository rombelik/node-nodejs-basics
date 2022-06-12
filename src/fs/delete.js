import fs from "fs";
import {fileURLToPath} from "url";
import path, {dirname} from "path";

export const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename)
    const pathToRead = path.resolve(__dirname, './files/fileToRemove.txt')
    if (!fs.existsSync(pathToRead)) {
        const error = new Error("FS operation failed")
        console.log(error.stack)
    } else {
        await fs.unlink(pathToRead,  (err) => {
            if (err) throw err;
        });
    }
};
