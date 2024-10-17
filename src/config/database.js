require('dotenv').config();

module.exports = {
  development: {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
};
// module.exports = {
//   development: {
//     username: "pgsql",
//     password: 12345678,
//     database: "testdb",
//     host: "localhost",
//     dialect: "postgres"
//   }
// }