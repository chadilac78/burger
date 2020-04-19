var orm = require('C:/Users/chadi/Desktop/burger/config/orm.js');

var burgers = {

    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    create: function (cols, vals, cb) {
        orm.create('burgers', cols, vals, function (res) {
            cb(res);
        });

    }
}


module.exports = burgers;