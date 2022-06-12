import fs from 'fs';
import {fileURLToPath} from "url";
import path, {dirname} from "path";

export const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename)
    const srcPath = path.resolve(__dirname, './files')
    const destPath = path.resolve(__dirname, './files_copy')
    if (!fs.existsSync(srcPath) || fs.existsSync(destPath)) {
        const error = new Error("FS operation failed")
        console.log(error.stack)
    } else {
        await fs.cp(srcPath, destPath, {recursive: true}, (err) => {
            if (err) throw err;
        });
    }
};
