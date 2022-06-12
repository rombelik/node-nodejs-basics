import os from "os";

const getHomeDir = () => {
    return os.homedir();
}

export {
    getHomeDir
}