import {Transform} from 'stream';
export const transform = async () => {
    const reversedStream = new Transform();
    reversedStream._transform = (chunk, encoding, callback) => {
        reversedStream.push(`${chunk.toString().split("").reverse().join("")}\n`);
        callback();
    }
    process.stdin.pipe(reversedStream).pipe(process.stdout);
};
