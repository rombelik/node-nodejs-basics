import fs from 'fs';

export const create = async () => {
    const path = './files/fresh.txt';
    if (fs.existsSync(path)) {
        const error = new Error("FS operation failed")
        console.log(error.stack)
    } else {
        await fs.writeFile(path, 'I am fresh and young', (err) => {
            if (err) throw err;
        });
    }
};
