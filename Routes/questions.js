const express = require('express')
const PersonalityQuestions = require('../models/personalityQuestions');
const User = require('../models/user');
const router = express.Router();

router.get("/personality",
    (req, res) => {
        PersonalityQuestions.find().then(qns => {
            if (qns) {

                res.status(200).json({
                    message: "Questions fetched successfully!",
                    qns: qns
                });
            } else {
                res.status(404).json({ message: "Questions not found!" });
            }
        })
            .catch(e => {
                console.log(e)
            });
    });

router.post("/personality",
    (req, res) => {
        console.log(req.body);
        const { personality, user } = req.body;
        User.findOneAndUpdate(
            { _id: user._id }, // Finding the user by their unique ID
            { $set: { personality: personality } }, // Updating the 'name' field
            { new: true } // To return the updated document
        )
            .then(updatedUser => {
                if (updatedUser) {
                    console.log('Updated User:', updatedUser);
                    res.json({message: "Personality updated successfully!"})
                } else {
                    console.log('User not found');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    });



module.exports = router