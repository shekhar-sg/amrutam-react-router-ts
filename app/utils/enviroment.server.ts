const developments = ["development", "dev"];
const productions = ["production", "prod"];
const currentEnv = process.env.NODE_ENV ?? developments[0];
export const isDevelopment = developments.includes(currentEnv);
export const isProduction = productions.includes(currentEnv);
