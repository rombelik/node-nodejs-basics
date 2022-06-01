import fs from "fs";

export const read = async () => {
    const path = './files/fileToRead.txt';
    if (!fs.existsSync(path)) {
        const error = new Error("FS operation failed")
        console.log(error.stack)
    } else {
        await fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
            if (err) {
                return console.log(err.stack);
            }
            console.log(data)
        });
    }
};
