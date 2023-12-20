const mongoose = require('mongoose');

const personalityQuestion = mongoose.model('personalityQuestion', {
    question: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    options: {
        type: [String],
        required: true
    },
    personality: {
        type: [String],
        required: true
    },
});


module.exports = personalityQuestion