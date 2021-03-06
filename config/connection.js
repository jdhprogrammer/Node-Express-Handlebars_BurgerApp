// Set up MySQL connection.
const mysql = require("mysql");



if (process.env.JAWSDB_URL) {
    // eslint-disable-next-line no-use-before-define
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    // eslint-disable-next-line no-var

    const connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "",
        database: "burgers_db"
    });
};

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;