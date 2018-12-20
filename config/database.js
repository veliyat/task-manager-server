const { DB_HOST, DB_NAME, DB_OPTIONS, DB_PASS, DB_TYPE, DB_USER } = process.env;

const credentials = {
  development: {
    host: DB_HOST ? DB_HOST : "localhost",
    user: DB_USER ? DB_USER : "",
    pass: DB_PASS ? DB_PASS : "",
    dbName: DB_NAME ? DB_NAME : "test",
    dbType: DB_TYPE ? DB_TYPE : "mongodb",
    options: DB_OPTIONS ? DB_OPTIONS : ""
  },
  production: {
    host: DB_HOST ? DB_HOST : "localhost",
    user: DB_USER ? DB_USER : "root",
    pass: DB_PASS ? DB_PASS : "",
    dbName: DB_NAME ? DB_NAME : "taskManager",
    dbType: DB_TYPE ? DB_TYPE : "mongodb",
    options: DB_OPTIONS ? DB_OPTIONS : ""
  }
};

exports.credentials = credentials[process.env.ENV];
