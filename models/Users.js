const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    questionairs: {
        type: Schema.Types.ObjectId,
        ref: "Questions"
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;