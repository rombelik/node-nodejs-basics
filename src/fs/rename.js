import fs from "fs";

export const rename = async () => {
    const srcPath = './files/wrongFilename.txt';
    const destPath = './files/properFilename.md';
    if (!fs.existsSync(srcPath) || fs.existsSync(destPath)) {
        const error = new Error("FS operation failed")
        console.log(error.stack)
    } else {
        await fs.rename(srcPath, destPath, (err) => {
            if (err) throw err;
        });
    }
};

rename();