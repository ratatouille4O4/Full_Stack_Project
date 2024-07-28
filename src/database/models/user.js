const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    Passwordassword: String,
    User: String,
    Message: {type: String, default: false}
});

module.exports = mongoose.model("user", Schema);