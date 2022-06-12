'use strict';

import os from "os";

const getCurrentDirectoryPath = () => {
    return os.homedir();
}

export {getCurrentDirectoryPath}