var burgers = require('C:/Users/chadi/Desktop/burger/models/burger.js');
var express = require('express');
var router = express.Router();
// var orm = require('C:/Users/chadi/Desktop/burger/config/orm.js')

router.get("/", function (req, res) {
    burgers.all(function (data) {
        var allBurgs = {
            burgers: data
        };
        res.render("index", allBurgs);
    })
});


router.post('/burgers', function (req, res) {
    burgers.create([
        'burger_name',
        'b_description'
    ], [
        req.body.burger_name,
        req.body.b_description
    ], function (result) {
        res.redirect('/');
        res.json({ id: result.insertID })

    });
});






module.exports = router;

