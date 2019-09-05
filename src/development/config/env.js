module.exports = {
  APP_PORT: 3000, // process.env.APP_PORT || 3000
  DB_PASSWORD: String(process.env.DB_PASSWORD),
  AZURE_SECRET: String(process.env.AZURE_SECRET),
};
