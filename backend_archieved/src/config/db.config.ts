export const config = {
  HOST: "localhost",
  USER: "steve",
  PASSWORD: "12345",
  DB: "run_with_us",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
