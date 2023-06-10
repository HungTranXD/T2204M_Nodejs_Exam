const User = require('../models/user');

exports.get = async (req, res) => {
    try {
        const users = await User.find();
        res.render('user/list', { users });
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.create = (req, res) => {
    res.render('user/create');
};

exports.save = async (req, res) => {
    const data = req.body;
    try {
        const newUser = new User(data);
        await newUser.save();
        res.redirect('/user');
    } catch (err) {
        res.status(500).send(err);
    }
};