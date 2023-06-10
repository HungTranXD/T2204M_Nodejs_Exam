const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
        maxLength: 20,
        unique: true,
        validate: {
            validator: (v) => {
                const mobilePattern = /^\d+$/;
                return v.match(mobilePattern);
            },
            message: (t) => `${t.value} is not valid mobile`
        }
    },
    userName: {
        type: String,
        required: true,
        minLength: [6, "Username must be at least 6 character"],
        maxLength: 100,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 255,
    },
});

module.exports = mongoose.model("User", userSchema);