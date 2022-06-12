import crypto from 'crypto';
import { promises as fs } from 'fs';

export const calculateHash = async () => {
    const path = './src/hash/files/fileToCalculateHashFor.txt'
    const data = await fs.readFile(path, 'binary');
    const updatedHash = crypto
        .createHash('sha256')
        .update(Buffer.from(data))
        .digest('hex');
    console.log('hash', updatedHash);
    return updatedHash
    };
