const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    task: {
        type: String,
        required: true
    }
});

const personalitySchema = new mongoose.Schema({
    Personality: {
        type: String,
        required: true
    },
    Task: [taskSchema]
});

const PersonalityModel = mongoose.model('Personality', personalitySchema);

module.exports = PersonalityModel;
