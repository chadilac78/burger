var connection = require("./connection.js");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}



var orm = {

    selectAll: function (tableinput, cb) {
        var queryString = "SELECT * FROM " + tableinput + ";";
        connection.query(queryString, [tableinput], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    create: function (table, cols, vals, cb) {
        // Construct the query string that inserts a single row into the target table
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        // console.log(queryString);

        // Perform the database query
        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            // Return results in callback
            cb(result);
        });
    }
}



// insertOne: function(whattoSelect, tableinput)

// selectAll();

// insertOne();

// updateOne();



module.exports = orm;