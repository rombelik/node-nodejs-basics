export const parseEnv = () => {
    for (const key in process.env) {
        if (key.startsWith("RSS_", 0)) console.log(`${key}=${process.env[key]}; `);
    }
};
