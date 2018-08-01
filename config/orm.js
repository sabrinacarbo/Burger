var connection = require("/connection.js");

var orm = {

    selectAll: function (queryString, cb) {
        var queryString = "SELECT * FROM ??";

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                console.log(err);
            }
            cb(result);
        });

    },

    insertOne: function (queryString, cb) {
        var queryString = "INSERT INTO ?? VALUES ?";

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                console.log(err);
            }
            cb(result);
        });

    },

    updateOne: function (queryString, cb) {
        var queryString = "UPDATE ?? SET ? WHERE ?? = ?";

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                console.log(err);
            }
            cb(result);
        });
    }
};

module.exports = orm;