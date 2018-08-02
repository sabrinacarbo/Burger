var connection = require("./connection");

var orm = {

    selectAll: function (queryString, cb) {
        var queryString = "SELECT * FROM burgers";

        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {
                console.log(err);
            }
            cb(result);
        });

    },

    insertOne: function (cols, vals, cb) {
        var queryString = "INSERT INTO burgers VALUES ?";

        console.log(queryString);

        connection.query(cols, vals, function (err, result) {
            if (err) {
                console.log(err);
            }
            cb(result);
        });

    },

    updateOne: function (objColVals, condition, cb) {
        var queryString = "UPDATE devoured SET true WHERE id = ?";

        console.log(queryString);

        connection.query(objColVals, condition, function (err, result) {
            if (err) {
                console.log(err);
            }
            cb(result);
        });
    }
};

module.exports = orm;