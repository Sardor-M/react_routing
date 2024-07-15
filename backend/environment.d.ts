// export interface ProcessEnv {
//   JWT_TOKEN_SECRET: string;
// }

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      JWT_TOKEN_SECRET: string;
    }
  }
}
export {};
