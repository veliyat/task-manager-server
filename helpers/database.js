const mongoose = require("mongoose");
const dbCredentials = require("../config/database").credentials;

const connectionString =
  dbCredentials.dbType +
  "://" +
  dbCredentials.user +
  ":" +
  dbCredentials.pass +
  "@" +
  dbCredentials.host +
  "/" +
  dbCredentials.dbName +
  "?" +
  dbCredentials.options;

exports.connect = () => {
  mongoose.connect(
    connectionString,
    {
      useNewUrlParser: true
    },
    () => console.log("DB Connected!")
  );
};
