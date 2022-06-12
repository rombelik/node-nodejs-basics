import {OPERATION_FAILED, FOLDER_IS_NOT_EXIST} from '../constants/messages.js'

const getFolder =  async (path) => {
    try{
        console.log(path)
    }
    catch (e) {
        console.error(`${OPERATION_FAILED}: ${e.message}`)
    }

};
export {
    getFolder
}