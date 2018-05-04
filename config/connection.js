require("dotenv").config();
var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL) {
    console.log('inside JAWS_DB block');
   connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
     connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env.MYSQLPASSWORD,
        database: "burgers_db"
    });
};


connection.connect(function (err) {
    if (err) {
        console.log("error connecting:" + err.stack);
        return;
    }
    console.log("connected: " + connection.threadId);
});

module.exports = connection;