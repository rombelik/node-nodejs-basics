import threads from "worker_threads";
const { parentPort, workerData } = threads;

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = () => {
    const number = workerData.numberData
    parentPort.postMessage(nthFibonacci(number))
    process.exit(0);
};

sendResult();
