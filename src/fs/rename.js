import fs from "fs";
import {fileURLToPath} from "url";
import path, {dirname} from "path";

export const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename)
    const srcPath = path.resolve(__dirname, './files/wrongFilename.txt')
    const destPath = path.resolve(__dirname, './files/properFilename.md')
    if (!fs.existsSync(srcPath) || fs.existsSync(destPath)) {
        const error = new Error("FS operation failed")
        console.log(error.stack)
    } else {
        await fs.rename(srcPath, destPath, (err) => {
            if (err) throw err;
        });
    }
};
