import fs from "fs";

export const list = async () => {
    const path = './files';
    if (!fs.existsSync(path)) {
        const error = new Error("FS operation failed")
        console.log(error.stack)
    } else {
        await fs.readdir(path,  (err, files) => {
            if (err) {
                return console.log(err.stack);
            }
            files.forEach(function (file) {
                console.log(file);
            });
        });
    }
};
