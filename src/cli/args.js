export const parseArgs = () => {
    const nodeArgs = process.argv.slice(2);
    for (let i = 0; i < nodeArgs.length; i+=2) {
        console.log(nodeArgs[i].slice(2), 'is', nodeArgs[i+1])
    }
};