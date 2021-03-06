module.exports = {
  development: {
    dialect: "sqlite",
    storage: "./db.development.sqlite"
  },
  test: {
    dialect: "sqlite",
    storage: ":memory:"
  },
  dev: {
    username: "manifestUser",
    password: "manifestPassword",
    database: "SimpleBlogDB",
    host: "manifestdbinstance.cgq0reqixqsd.us-east-1.rds.amazonaws.com",
    dialect: 'postgres' 
  },
  production: {
    // username: process.env.DB_USERNAME,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME,
    // host: process.env.DB_HOSTNAME,
    // dialect: 'postgres' 
    username: "traineeUser",
    password: "traineePassword",
    database: "SimpleBlogDB",
    host: "manifestdbinstance.cgq0reqixqsd.us-east-1.rds.amazonaws.com",
    dialect: 'postgres' 
  }
};



// module.exports = {
//   development: {
//     dialect: "sqlite",
//     storage: "./db.development.sqlite"
//   },
//   test: {
//     dialect: "sqlite",
//     storage: ":memory:"
//   },
//   dev: {
//     username: "traineeUser",
//     password: "traineePassword",
//     database: "postgres",
//     host: "traineedb.cgq0reqixqsd.us-east-1.rds.amazonaws.com",
//     dialect: 'postgres' 
//   },
//   production: {
//     // username: process.env.DB_USERNAME,
//     // password: process.env.DB_PASSWORD,
//     // database: process.env.DB_NAME,
//     // host: process.env.DB_HOSTNAME,
//     // dialect: 'postgres' 
//     username: "traineeUser",
//     password: "traineePassword",
//     database: "postgres",
//     host: "traineedb.cgq0reqixqsd.us-east-1.rds.amazonaws.com",
//     dialect: 'postgres' 
//   }
// };
