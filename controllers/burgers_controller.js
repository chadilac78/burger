var burgers = require('../models/burger.js');
var express = require('express');
var router = express.Router();


router.get("/", function (req, res) {
    burgers.all(function (data) {
        var allBurgs = {
            burgers: data
        };
        res.render("index", allBurgs);
    })
});


router.post('/burgers', function (req, res) {
    console.log(req.body)
    burgers.create([
        'burger_name',
        "b_description"

    ], [
        req.body.burger_name, req.body.description
    ], function (data) {
        res.redirect('/');
        console.log(data)


    });
});

router.put('/burgers/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;

    burger.updateOne({
        devoured: true
    }, condition, function (data) {
        res.redirect('/');
    });
});




module.exports = router;

