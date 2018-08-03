var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        "host": "l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        "user": "hezmm9lq0dnifx8x",
        "password": "ss2tnvy0o96q1o4j",
        "database": "tf3ar5mf3qw8eggr"
    });
};

connection.connect(function (err) {

    if (err) {
        console.error("error connecting " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;