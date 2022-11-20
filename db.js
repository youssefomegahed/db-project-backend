const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "sql7.freemysqlhosting.net",
  user: "sql7578594",
  password: "HU7KXVkXKD",
  database: "sql7578594",
});
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
//     connection.query(x

module.exports = connection;
