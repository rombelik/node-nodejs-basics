import threads from "worker_threads";
import os from "os";
import {fileURLToPath} from "url";
import path, {dirname} from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
const srcPath = path.resolve(__dirname, './worker.js')

const coresNumber = os.cpus().length
const { Worker } = threads;

export const performCalculations = async () => {
    const result = await runService('hello node.js')

    for ( let i=0; i<coresNumber; i++ ) {
        let worker = new Worker(srcPath, {
            workerData: {numberData: (10+i)}
        });
        worker.on('message', (...args) => {
            console.log('worker', worker.threadId)
            console.log({'status': 'resolved', 'data': args[0]})
        });
    }
    console.log('result', result)
};

performCalculations();
