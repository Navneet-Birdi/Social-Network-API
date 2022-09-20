const User = require('../models/user');

const router = require('express').Router();
//get single user
router.get('/users', (req,res) => {
    //grab all the users
    User.find({})
    //populate the data
    .populate("thoughts")
    .populate("friends")
    .then((users) => {
        res.json(users);
    })
});
module.exports = router;