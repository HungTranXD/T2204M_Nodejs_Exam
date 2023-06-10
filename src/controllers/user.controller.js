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
        // Check if mobile number already exists
        const mobileExists = await User.exists({ mobile: data.mobile });
        if (mobileExists) {
            return res.send('Mobile number already exists');
        }

        // Check if username already exists
        const usernameExists = await User.exists({ userName: data.userName });
        if (usernameExists) {
            return res.send('Username already exists');
        }

        // If both mobile number and username are unique, save the user
        const newUser = new User(data);
        await newUser.save();
        res.redirect('/user');
    } catch (err) {
        res.status(500).send(err);
    }
};