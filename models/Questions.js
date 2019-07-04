const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    children: [ChildrenSchema]
}, {strict: false});

const ChildrenSchema = new Schema({
    answer: {
        type: Schema.Types.Mixed,
        required: true
    },
    nextQuestion: {
        type: Schema.Types.Mixed
    }
}, {strict: false});

const Questions = mongoose.model("Questions", QuestionSchema);

module.exports = Questions;