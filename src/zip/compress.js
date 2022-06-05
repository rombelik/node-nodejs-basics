import zlib from 'zlib';
import fs from 'fs';
import {fileURLToPath} from "url";
import path, {dirname} from "path";

export const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename)
    const srcPath = path.resolve(__dirname, './files/fileToCompress.txt');
    const destPath = path.resolve(__dirname, './files/archive.gz');
    const gzip = zlib.createGzip();
    const myInput = await fs.createReadStream(srcPath);
    const myOutput = await fs.createWriteStream(destPath);
    myInput.pipe(gzip).pipe(myOutput);
};
