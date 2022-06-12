export const greeting = () => {
    const nodeArgs = process.argv.slice(2).join().split('=');
    const [userNameKey, userNameValue] = nodeArgs;
    if (userNameKey && userNameKey === ('--username')) {
        console.log(`Welcome to the File Manager, ${userNameValue}!`);
    } else {
        console.log(`Please enter correct command to start work (npm run start -- --username=your_username)!`);
        process.exit(1);
    }
    return userNameValue;
};
