const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        unique: true,
    },
});

module.exports = mongoose.model("User", userSchema);