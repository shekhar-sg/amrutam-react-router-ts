export const developments = ["development", "dev"] as const;
export const productions = ["production", "prod"] as const;

export type Developments = (typeof developments)[number];
export type Productions = (typeof productions)[number];

export const currentEnv = process.env.NODE_ENV as Developments | Productions;

export const isDevelopment = developments.includes(currentEnv as Developments);

export const isProduction = productions.includes(currentEnv as Productions);
