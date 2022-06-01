import fs from 'fs';

export const copy = async () => {
    const srcPath = './files';
    const destPath = './files_copy';
    if (!fs.existsSync(srcPath) || fs.existsSync(destPath)) {
        const error = new Error("FS operation failed")
        console.log(error.stack)
    } else {
        await fs.cp(srcPath, destPath, {recursive: true}, (err) => {
            if (err) throw err;
        });
    }
};
