import fs from "fs";

export const remove = async () => {
    const path = './files/fileToRemove.txt';
    if (!fs.existsSync(path)) {
        const error = new Error("FS operation failed")
        console.log(error.stack)
    } else {
        await fs.unlink(path,  (err) => {
            if (err) throw err;
        });
    }
};
